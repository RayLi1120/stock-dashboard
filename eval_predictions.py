#!/usr/bin/env python3
"""Walk-forward evaluation of a transparent technical next-candle model.

For each stock we LEARN from its own past bars. A small model predicts the next
day's % move from four causal features, all known at today's close:
  drift : mean daily return over the last 20 sessions (trend),
  mom   : the most recent day's return (follow-through),
  ext   : extension above/below the 10-day MA (mean reversion),
  gap   : today's opening gap vs yesterday's close (gap-day behavior).
The gap weight's SIGN is itself a finding: positive => this name's gaps tend to
CONTINUE the next day (gap-and-go); negative => they tend to FADE (gap-fill).

Weights are grid-searched on a TRAIN split, a bias term debiases systematic
error, and a volatility multiplier k sizes the predicted range to ~70% hit.
Everything is then evaluated OUT-OF-SAMPLE on held-out recent bars, so the
numbers are an honest track record and the Prediction Gap is populated now.

Writes model_eval.js (const MODEL_EVAL). Run after raw_history/*.json is fetched.
"""
import json
import os
import time
from statistics import mean, pstdev

HERE = os.path.dirname(os.path.abspath(__file__))
SYMBOLS = [("2344.TW", "2344"), ("2337.TW", "2337"), ("6770.TW", "6770"),
           ("1307.TW", "1307"), ("NVDA", "NVDA"), ("AAPL", "AAPL"), ("SPCX", "SPCX")]
MIN_BARS = 80
TRAIN_FRAC = 0.65
RECENT = 11
W_DRIFT = [0.5, 1.0, 1.5]
W_MOM = [0.0, 0.15, 0.3]
W_REV = [0.0, -0.15, -0.3]
W_GAP = [-0.3, 0.0, 0.3]          # negative = gaps fade, positive = gaps continue
K_GRID = [0.5, 0.75, 1.0, 1.25, 1.5, 2.0]
TARGET_HIT = 0.70


def load(sym):
    p = os.path.join(HERE, "raw_history", f"{sym}.json")
    if not os.path.exists(p):
        return [], [], []
    d = json.load(open(p))
    r = d["chart"]["result"][0]
    q = r["indicators"]["quote"][0]
    off = r["meta"].get("gmtoffset", 0)
    closes, opens, dates = [], [], []
    for i, ts in enumerate(r["timestamp"]):
        c, o = q["close"][i], q["open"][i]
        if c is None or o is None:
            continue
        closes.append(round(c, 2))
        opens.append(round(o, 2))
        dates.append(time.strftime("%m-%d", time.gmtime(ts + off)))
    return closes, opens, dates


def build_samples(closes, opens, dates):
    """Each sample = causal features at bar t + the next-day target (t→t+1)."""
    rets = [0.0] + [closes[i] / closes[i - 1] - 1 for i in range(1, len(closes))]
    samples = []
    for t in range(20, len(closes) - 1):
        ma10 = mean(closes[t - 9:t + 1])
        drift = mean(rets[t - 19:t + 1])
        vol = pstdev(rets[t - 19:t + 1]) or 0.001
        ext = (closes[t] - ma10) / ma10
        mom = rets[t]
        gap = (opens[t] - closes[t - 1]) / closes[t - 1]
        target = closes[t + 1] / closes[t] - 1
        samples.append({"t": t, "drift": drift, "mom": mom, "ext": ext, "gap": gap,
                        "vol": vol, "target": target, "cT": closes[t], "cN": closes[t + 1],
                        "d": dates[t + 1]})
    return samples


def raw(s, wd, wm, wr, wg):
    return wd * s["drift"] + wm * s["mom"] + wr * s["ext"] + wg * s["gap"]


def fit(train):
    """Grid-search weights (min MAE), then bias, then range multiplier k."""
    best = None
    for wd in W_DRIFT:
        for wm in W_MOM:
            for wr in W_REV:
                for wg in W_GAP:
                    mae = mean(abs(raw(s, wd, wm, wr, wg) - s["target"]) for s in train)
                    if best is None or mae < best[0]:
                        best = (mae, wd, wm, wr, wg)
    _, wd, wm, wr, wg = best
    bias = mean(s["target"] - raw(s, wd, wm, wr, wg) for s in train)
    bestk = None
    for k in K_GRID:
        hit = mean(1.0 if abs(s["target"] - (raw(s, wd, wm, wr, wg) + bias)) <= k * s["vol"] else 0.0 for s in train)
        if bestk is None or abs(hit - TARGET_HIT) < bestk[0]:
            bestk = (abs(hit - TARGET_HIT), k)
    return {"wd": wd, "wm": wm, "wr": wr, "wg": wg, "bias": bias, "k": bestk[1]}


def predict(s, w):
    r = raw(s, w["wd"], w["wm"], w["wr"], w["wg"]) + w["bias"]
    pc = s["cT"] * (1 + r)
    band = s["cT"] * w["k"] * s["vol"]
    return r, round(pc, 2), round(pc - band, 2), round(pc + band, 2)


def evaluate(samples, w):
    rows = []
    for s in samples:
        r, pc, pl, ph = predict(s, w)
        rows.append({"d": s["d"], "predC": pc, "predL": pl, "predH": ph,
                     "actualC": s["cN"], "dirHit": (r >= 0) == (s["target"] >= 0)})
    n = len(rows)
    if not n:
        return None, rows
    stats = {
        "n": n,
        "dirAcc": round(100 * mean(1.0 if x["dirHit"] else 0.0 for x in rows)),
        "bias": round(mean((x["actualC"] - x["predC"]) / x["predC"] * 100 for x in rows), 2),
        "mae": round(mean(abs((x["actualC"] - x["predC"]) / x["predC"] * 100) for x in rows), 2),
        "rangeHit": round(100 * mean(1.0 if x["predL"] <= x["actualC"] <= x["predH"] else 0.0 for x in rows)),
    }
    return stats, rows


def gap_behavior(wg):
    return "continue" if wg > 0.05 else "fade" if wg < -0.05 else "neutral"


out = {}
for sym, key in SYMBOLS:
    closes, opens, dates = load(sym)
    if len(closes) < MIN_BARS:
        out[key] = {"insufficient": True, "bars": len(closes)}
        continue
    samples = build_samples(closes, opens, dates)
    cut = int(len(samples) * TRAIN_FRAC)
    train, test = samples[:cut], samples[cut:]
    w = fit(train)
    stats, _ = evaluate(test, w)
    _, recent_rows = evaluate(samples[-RECENT:], w)

    wfull = fit(samples)
    rets = [0.0] + [closes[i] / closes[i - 1] - 1 for i in range(1, len(closes))]
    t = len(closes) - 1
    last = {"drift": mean(rets[t - 19:t + 1]), "mom": rets[t],
            "ext": (closes[t] - mean(closes[t - 9:t + 1])) / mean(closes[t - 9:t + 1]),
            "gap": (opens[t] - closes[t - 1]) / closes[t - 1],
            "vol": pstdev(rets[t - 19:t + 1]) or 0.001, "cT": closes[t]}
    nr, npc, npl, nph = predict(last, wfull)

    out[key] = {
        "bars": len(closes),
        "weights": {k2: round(v, 4) for k2, v in w.items()},
        "gapBehavior": gap_behavior(w["wg"]),
        "lastGapPct": round(last["gap"] * 100, 2),
        "stats": stats,
        "recent": recent_rows,
        "next": {"dir": "rise" if nr >= 0 else "decline", "predC": npc, "predL": npl, "predH": nph,
                 "pct": round(nr * 100, 2)},
    }

with open(os.path.join(HERE, "model_eval.js"), "w") as f:
    f.write("// Generated by eval_predictions.py — walk-forward technical model (drift/momentum/mean-reversion/gap), evaluated on each stock's own history.\n")
    f.write("// Generated at: " + time.strftime("%Y-%m-%d %H:%M") + "\n")
    f.write("const MODEL_EVAL = " + json.dumps(out, ensure_ascii=False) + ";\n")

for k, v in out.items():
    if v.get("insufficient"):
        print(f"{k}: insufficient ({v['bars']} bars)")
    else:
        st, w = v["stats"], v["weights"]
        print(f"{k}: OOS dir {st['dirAcc']}% bias {st['bias']:+}% mae {st['mae']}% rangeHit {st['rangeHit']}% "
              f"| gap={v['gapBehavior']} (wg={w['wg']}, lastGap {v['lastGapPct']:+}%) | next {v['next']['dir']} {v['next']['pct']:+}%")
