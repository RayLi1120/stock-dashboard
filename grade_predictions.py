#!/usr/bin/env python3
"""Grade past next-candle predictions against actual candles; append to scorecard.js.

Run after build_data.py and BEFORE the scan writes new predictions.
A prediction (predictions.js) is gradeable once data.js contains a candle dated
after its baseDate; the first such candle is the "actual". Dedupes on (sym, baseDate).
"""
import json
import os
import re
import time

HERE = os.path.dirname(os.path.abspath(__file__))


def read_js_const(path, name):
    txt = open(path).read()
    m = re.search(r"const %s = (.*?);\n" % name, txt, re.S)
    return json.loads(m.group(1))


stocks = read_js_const(os.path.join(HERE, "data.js"), "STOCK_DATA")
preds = read_js_const(os.path.join(HERE, "predictions.js"), "PREDICTIONS")

path = os.path.join(HERE, "scorecard.js")
card = read_js_const(path, "SCORECARD") if os.path.exists(path) else {"entries": []}
entries = card["entries"]
seen = {(e["sym"], e["baseDate"]) for e in entries}
graded = 0

for sym, p in preds.items():
    if (sym, p["baseDate"]) in seen or sym not in stocks:
        continue
    candles = stocks[sym]["candles"]
    dates = [c["d"] for c in candles]
    if p["baseDate"] not in dates:
        continue  # base candle rolled out of the window — skip rather than misgrade
    i = dates.index(p["baseDate"])
    if i + 1 >= len(candles):
        continue  # next candle hasn't happened yet
    act = candles[i + 1]
    base = p["baseClose"]
    pred_c = base * (1 + p["cPct"] / 100)
    pred_l = base * (1 + p["lPct"] / 100)
    pred_h = base * (1 + p["hPct"] / 100)
    chg = (act["c"] - base) / base * 100
    if p["dir"] == "up":
        dir_hit = act["c"] > base
    elif p["dir"] == "down":
        dir_hit = act["c"] < base
    else:
        dir_hit = abs(chg) <= 0.75
    entries.append({
        "sym": sym, "baseDate": p["baseDate"], "madeAt": p["madeAt"],
        "predDir": p["dir"], "predC": round(pred_c, 2),
        "predL": round(pred_l, 2), "predH": round(pred_h, 2),
        "actualDate": act["d"], "actualC": act["c"], "actualPct": round(chg, 2),
        "dirHit": bool(dir_hit),
        "inRange": bool(pred_l <= act["c"] <= pred_h),
    })
    graded += 1

entries = entries[-200:]
with open(path, "w") as f:
    f.write("// Machine-managed prediction scorecard. Strict JSON body — written by grade_predictions.py.\n")
    f.write("const SCORECARD = " + json.dumps(
        {"generated": time.strftime("%Y-%m-%d %H:%M"), "entries": entries},
        ensure_ascii=False, indent=1) + ";\n")

print(f"scorecard.js: graded {graded} new, {len(entries)} total entries")
