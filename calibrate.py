#!/usr/bin/env python3
"""Prediction calibration loop — makes the next round of guesses better.

Reads scorecard.js (graded next-candle predictions) and measures, per symbol and
globally, the SYSTEMATIC errors in my forecasts:
  - directional accuracy
  - close bias  : mean signed % error of predicted close vs actual close
                  (positive = I guess too LOW; actual prints higher)
  - close MAE   : mean absolute % error
  - range hit   : how often the actual close landed inside my predicted L–H band

From those it derives corrections the scan applies to the NEXT prediction:
  - closeBiasAdj : add this to your cPct (debias the center)
  - rangeMult    : multiply hPct & lPct by this (calibrate band width toward ~70% hit)

This is honest calibration, not black-box ML: every adjustment is a measured,
reproducible response to a past error. Needs >= MIN_N graded guesses per symbol
before it acts; until then corrections are neutral (0 / 1.0).

Run AFTER grade_predictions.py and BEFORE the scan writes new predictions.
"""
import json
import os
import re
import time

HERE = os.path.dirname(os.path.abspath(__file__))
MIN_N = 3          # need this many graded guesses before correcting a symbol
RANGE_TARGET = 0.70  # aim for the predicted band to catch ~70% of closes


def read_js_const(path, name, default):
    if not os.path.exists(path):
        return default
    m = re.search(r"const %s = (.*?);\n" % name, open(path).read(), re.S)
    return json.loads(m.group(1)) if m else default


def calibrate(rows):
    n = len(rows)
    dir_acc = sum(1 for e in rows if e["dirHit"]) / n
    signed = [(e["actualC"] - e["predC"]) / e["predC"] * 100 for e in rows]
    bias = sum(signed) / n
    mae = sum(abs(x) for x in signed) / n
    range_hit = sum(1 for e in rows if e["inRange"]) / n
    # corrections (only meaningful with >= MIN_N)
    if n >= MIN_N:
        # debias toward the center, but damp it (0.6) so we don't overcorrect on noise
        bias_adj = round(bias * 0.6, 2)
        if range_hit < 0.5:
            rmult = 1.3
        elif range_hit < RANGE_TARGET:
            rmult = 1.15
        elif range_hit > 0.92:
            rmult = 0.85
        else:
            rmult = 1.0
    else:
        bias_adj, rmult = 0.0, 1.0
    return {
        "n": n,
        "dirAcc": round(dir_acc * 100),
        "closeBias": round(bias, 2),
        "closeMAE": round(mae, 2),
        "rangeHit": round(range_hit * 100),
        "closeBiasAdj": bias_adj,
        "rangeMult": rmult,
        "active": n >= MIN_N,
    }


card = read_js_const(os.path.join(HERE, "scorecard.js"), "SCORECARD", {"entries": []})
entries = card.get("entries", [])

by_sym = {}
for e in entries:
    by_sym.setdefault(e["sym"], []).append(e)

per = {sym: calibrate(rows) for sym, rows in by_sym.items()}
glob = calibrate(entries) if entries else {
    "n": 0, "dirAcc": None, "closeBias": None, "closeMAE": None,
    "rangeHit": None, "closeBiasAdj": 0.0, "rangeMult": 1.0, "active": False,
}

out = {"generated": time.strftime("%Y-%m-%d %H:%M"),
       "minN": MIN_N, "rangeTarget": int(RANGE_TARGET * 100),
       "global": glob, "perSymbol": per}

with open(os.path.join(HERE, "calibration.js"), "w") as f:
    f.write("// Machine-managed prediction calibration. Strict JSON body — written by calibrate.py.\n")
    f.write("// The scan reads this and applies closeBiasAdj / rangeMult to the next guesses.\n")
    f.write("const CALIBRATION = " + json.dumps(out, ensure_ascii=False, indent=1) + ";\n")

act = [s for s, v in per.items() if v["active"]]
print(f"calibration.js: global n={glob['n']} dirAcc={glob['dirAcc']} "
      f"bias={glob['closeBias']} rangeHit={glob['rangeHit']}; active symbols: {act or 'none yet'}")
