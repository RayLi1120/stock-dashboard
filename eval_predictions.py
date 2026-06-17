#!/usr/bin/env python3
"""Walk-forward evaluation of a transparent technical next-candle model.

For each stock we LEARN from its own past bars: a small model predicts the next
day's % move from three causal features —
  drift  : mean daily return over the last 20 sessions (trend),
  mom    : the most recent day's return (follow-through),
  ext    : extension above/below the 10-day MA (mean reversion).
Weights are grid-searched on a TRAIN split, a bias term debiases systematic
error, and a volatility multiplier k sizes the predicted range to ~70% hit.
Everything is then evaluated OUT-OF-SAMPLE on the held-out recent bars, so the
numbers are an honest track record — and the Prediction Gap is populated now
instead of waiting weeks for live grades to accumulate.

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
K_GRID = [0.5, 0.75, 1.0, 1.25, 1.5, 2.0]
TARGET_HIT = 0.70


def load(sym):
    p = os.path.join(HERE, "raw_history", f"{sym}.json")
    if not os.path.exists(p):
        return [], []
    d = json.load(open(p))
    r = d["chart"]["result"][0]
    q = r["indicators"]["quote"][0]
    off = r["meta"].get("gmtoffset", 0)
    closes, dates = [], []
    for i, ts in enumerate(r["timestamp"]):
        c = q["close"][i]
        if c is None:
            continue
        closes.append(round(c, 2))
        dates.append(time.strftime("%m-%d", time.gmtime(ts + off)))
    return closes, dates


def build_samples(closes, dates):
    """Each sample = causal features at bar t + the next-day target (t→t+1)."""
    rets = [0.0] + [closes[i] / closes[i - 1] - 1 for i in range(1, len(closes))]
    samples = []
    for t in range(20, len(closes) - 1):
        ma10 = mean(closes[t - 9:t + 1])
        drift = mean(rets[t - 19:t + 1])
        vol = pstdev(rets[t - 19:t + 1]) or 0.001
        ext = (closes[t] - ma10) / ma10
        mom = rets[t]
        target = closes[t + 1] / closes[t] - 1
        samples.append({"t": t, "drift": drift, "mom": mom, "ext": ext, "vol": vol,
                        "target": target, "cT": closes[t], "cN": closes[t + 1],
                        "d": dates[t + 1]})
    return samples


def fit(train):
    """Grid-search weights (min MAE), then bias, then range multiplier k."""
    best = None
    for wd in W_DRIFT:
        for wm in W_MOM:
            for wr in W_REV:
                mae = mean(abs((wd * s["drift"] + wm * s["mom"] + wr * s["ext"]) - s["target"]) for s in train)
                if best is None or mae < best[0]:
                    best = (mae, wd, wm, wr)
    _, wd, wm, wr = best
    bias = mean(s["target"] - (wd * s["drift"] + wm * s["mom"] + wr * s["ext"]) for s in train)
    bestk = None
    for k in K_GRID:
        hit = mean(1.0 if abs(s["target"] - (wd * s["drift"] + wm * s["mom"] + wr * s["ext"] + bias)) <= k * s["vol"] else 0.0 for s in train)
        if bestk is None or abs(hit - TARGET_HIT) < bestk[0]:
            bestk = (abs(hit - TARGET_HIT), k)
    return {"wd": wd, "wm": wm, "wr": wr, "bias": bias, "k": bestk[1]}


def predict(s, w):
    r = w["wd"] * s["drift"] + w["wm"] * s["mom"] + w["wr"] * s["ext"] + w["bias"]
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


out = {}
for sym, key in SYMBOLS:
    closes, dates = load(sym)
    if len(closes) < MIN_BARS:
        out[key] = {"insufficient": True, "bars": len(closes)}
        continue
    samples = build_samples(closes, dates)
    cut = int(len(samples) * TRAIN_FRAC)
    train, test = samples[:cut], samples[cut:]
    w = fit(train)                              # learn on train only
    stats, _ = evaluate(test, w)                # honest out-of-sample stats
    _, recent_rows = evaluate(samples[-RECENT:], w)  # recent bars for the gap chart (OOS region)

    # next-bar forecast: refit on ALL bars, predict the upcoming (unknown) close
    wfull = fit(samples)
    rets = [0.0] + [closes[i] / closes[i - 1] - 1 for i in range(1, len(closes))]
    t = len(closes) - 1
    last = {"drift": mean(rets[t - 19:t + 1]), "mom": rets[t],
            "ext": (closes[t] - mean(closes[t - 9:t + 1])) / mean(closes[t - 9:t + 1]),
            "vol": pstdev(rets[t - 19:t + 1]) or 0.001, "cT": closes[t]}
    nr, npc, npl, nph = predict(last, wfull)

    out[key] = {
        "bars": len(closes),
        "weights": {k2: round(v, 4) for k2, v in w.items()},
        "stats": stats,
        "recent": recent_rows,
        "next": {"dir": "rise" if nr >= 0 else "decline", "predC": npc, "predL": npl, "predH": nph,
                 "pct": round(nr * 100, 2)},
    }

with open(os.path.join(HERE, "model_eval.js"), "w") as f:
    f.write("// Generated by eval_predictions.py — walk-forward technical model, evaluated on each stock's own history.\n")
    f.write("// Generated at: " + time.strftime("%Y-%m-%d %H:%M") + "\n")
    f.write("const MODEL_EVAL = " + json.dumps(out, ensure_ascii=False) + ";\n")

for k, v in out.items():
    if v.get("insufficient"):
        print(f"{k}: insufficient ({v['bars']} bars)")
    else:
        st = v["stats"]
        print(f"{k}: OOS dir {st['dirAcc']}% bias {st['bias']:+}% mae {st['mae']}% rangeHit {st['rangeHit']}% "
              f"| next {v['next']['dir']} {v['next']['pct']:+}% | w={v['weights']}")
