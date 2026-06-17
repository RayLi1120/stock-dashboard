#!/usr/bin/env python3
"""Self-evolving walk-forward prediction model.

Two modes:
  (default)   APPLY  — fit the current champion config on the latest history and
                       refresh model_eval.js (fast; used by the weekday market scan
                       so the Prediction Gap stays current intraday).
  --evolve    EVOLVE — champion/challenger tournament: fit challenger variants
                       (different feature sets + lookbacks), and ADOPT a challenger
                       only if it beats the champion OUT-OF-SAMPLE by a margin (so it
                       can't curve-fit its way in). Persists the champion in
                       model_state.json and logs every change.
                       • If recent error spikes (last-5-bar MAE >> the model's usual
                         OOS MAE) it ESCALATES to evaluate every variant.
                       • On weekends it always runs the full search AND writes a
                         5-day performance review (the weekly evolution).

Features (all causal, known at today's close):
  drift(N) trend · mom last-day return · ext extension vs MA(M) ·
  gap opening-gap behavior · rsi RSI14 (centered) · vol 5/60 volume ratio.

Run after raw_history/*.json is fetched. Writes model_eval.js (+ model_state.json in EVOLVE).
"""
import json
import os
import sys
import time
from datetime import date
from itertools import product
from statistics import mean, pstdev

HERE = os.path.dirname(os.path.abspath(__file__))
SYMBOLS = [("2344.TW", "2344"), ("2337.TW", "2337"), ("6770.TW", "6770"),
           ("1307.TW", "1307"), ("NVDA", "NVDA"), ("AAPL", "AAPL"), ("SPCX", "SPCX")]
MIN_BARS = 80
START = 60                 # first usable bar (so volume-ratio variants are comparable)
TRAIN_FRAC = 0.65
RECENT = 11
TARGET_HIT = 0.70
ADOPT_MARGIN = 0.98        # a challenger must cut OOS MAE to <98% of champion's to win
ESCALATE_MULT = 1.5        # recent MAE > 1.5x usual OOS MAE => escalate the search

# candidate model architectures the tournament can choose between
VARIANTS = {
    "v1_base":  {"feats": ["drift", "mom", "ext", "gap"], "driftN": 20, "maN": 10},
    "v2_rsi":   {"feats": ["drift", "mom", "ext", "gap", "rsi"], "driftN": 20, "maN": 10},
    "v3_vol":   {"feats": ["drift", "mom", "ext", "gap", "vol"], "driftN": 20, "maN": 10},
    "v4_long":  {"feats": ["drift", "mom", "ext", "gap"], "driftN": 40, "maN": 20},
    "v5_all":   {"feats": ["drift", "mom", "ext", "gap", "rsi", "vol"], "driftN": 20, "maN": 10},
}
DEFAULT_VARIANT = "v1_base"
ORDER = list(VARIANTS.keys())
WOPTS = {"drift": [0.5, 1.0, 1.5], "mom": [0.0, 0.15, 0.3], "ext": [0.0, -0.15, -0.3],
         "gap": [-0.3, 0.0, 0.3], "rsi": [-0.15, 0.0, 0.15], "vol": [-0.1, 0.0, 0.1]}

EVOLVE = "--evolve" in sys.argv
WEEKEND = date.today().weekday() >= 5


def load(sym):
    p = os.path.join(HERE, "raw_history", f"{sym}.json")
    if not os.path.exists(p):
        return [], [], [], []
    d = json.load(open(p))
    r = d["chart"]["result"][0]
    q = r["indicators"]["quote"][0]
    off = r["meta"].get("gmtoffset", 0)
    closes, opens, vols, dates = [], [], [], []
    for i, ts in enumerate(r["timestamp"]):
        c, o = q["close"][i], q["open"][i]
        if c is None or o is None:
            continue
        closes.append(round(c, 2))
        opens.append(round(o, 2))
        vols.append(q["volume"][i] or 0)
        dates.append(time.strftime("%m-%d", time.gmtime(ts + off)))
    return closes, opens, vols, dates


def rsi_series(closes):
    p, out = 14, [None] * len(closes)
    if len(closes) <= p:
        return out
    g = l = 0.0
    for i in range(1, p + 1):
        d = closes[i] - closes[i - 1]
        g, l = g + max(d, 0), l + max(-d, 0)
    ag, al = g / p, l / p
    out[p] = 100.0 if al == 0 else 100 - 100 / (1 + ag / al)
    for i in range(p + 1, len(closes)):
        d = closes[i] - closes[i - 1]
        ag = (ag * (p - 1) + max(d, 0)) / p
        al = (al * (p - 1) + max(-d, 0)) / p
        out[i] = 100.0 if al == 0 else 100 - 100 / (1 + ag / al)
    return out


def build_samples(variant, closes, opens, vols, dates):
    rets = [0.0] + [closes[i] / closes[i - 1] - 1 for i in range(1, len(closes))]
    rsis = rsi_series(closes)
    dN, mN = variant["driftN"], variant["maN"]
    feats = variant["feats"]
    samples = []
    for t in range(START, len(closes) - 1):
        ma = mean(closes[t - mN + 1:t + 1])
        f = {}
        if "drift" in feats: f["drift"] = mean(rets[t - dN + 1:t + 1])
        if "mom" in feats: f["mom"] = rets[t]
        if "ext" in feats: f["ext"] = (closes[t] - ma) / ma
        if "gap" in feats: f["gap"] = (opens[t] - closes[t - 1]) / closes[t - 1]
        if "rsi" in feats: f["rsi"] = ((rsis[t] or 50) - 50) / 50
        if "vol" in feats:
            v5 = mean(vols[t - 4:t + 1]); v60 = mean(vols[t - 59:t + 1]) or 1
            f["vol"] = v5 / v60 - 1
        vol = pstdev(rets[t - 19:t + 1]) or 0.001
        samples.append({"f": f, "vol": vol, "target": closes[t + 1] / closes[t] - 1,
                        "cT": closes[t], "cN": closes[t + 1], "d": dates[t + 1]})
    return samples


def fit(train, feats):
    grids = [WOPTS[f] for f in feats]
    best = None
    for combo in product(*grids):
        w = dict(zip(feats, combo))
        mae = mean(abs(sum(w[f] * s["f"][f] for f in feats) - s["target"]) for s in train)
        if best is None or mae < best[0]:
            best = (mae, w)
    w = best[1]
    bias = mean(s["target"] - sum(w[f] * s["f"][f] for f in feats) for s in train)
    bestk = None
    for k in [0.5, 0.75, 1.0, 1.25, 1.5, 2.0]:
        hit = mean(1.0 if abs(s["target"] - (sum(w[f] * s["f"][f] for f in feats) + bias)) <= k * s["vol"] else 0.0 for s in train)
        if bestk is None or abs(hit - TARGET_HIT) < bestk[0]:
            bestk = (abs(hit - TARGET_HIT), k)
    return {"w": w, "bias": bias, "k": bestk[1]}


def predict(s, model, feats):
    r = sum(model["w"][f] * s["f"][f] for f in feats) + model["bias"]
    pc = s["cT"] * (1 + r)
    band = s["cT"] * model["k"] * s["vol"]
    return r, round(pc, 2), round(pc - band, 2), round(pc + band, 2)


def rows_stats(samples, model, feats):
    rows = []
    for s in samples:
        r, pc, pl, ph = predict(s, model, feats)
        rows.append({"d": s["d"], "predC": pc, "predL": pl, "predH": ph,
                     "actualC": s["cN"], "dirHit": (r >= 0) == (s["target"] >= 0)})
    n = len(rows)
    st = None
    if n:
        st = {"n": n,
              "dirAcc": round(100 * mean(1.0 if x["dirHit"] else 0.0 for x in rows)),
              "bias": round(mean((x["actualC"] - x["predC"]) / x["predC"] * 100 for x in rows), 2),
              "mae": round(mean(abs((x["actualC"] - x["predC"]) / x["predC"] * 100) for x in rows), 2),
              "rangeHit": round(100 * mean(1.0 if x["predL"] <= x["actualC"] <= x["predH"] else 0.0 for x in rows))}
    return st, rows


def assess(vid, closes, opens, vols, dates):
    """Full evaluation of one variant: OOS stats, recent markers, next-bar forecast."""
    v = VARIANTS[vid]
    feats = v["feats"]
    samples = build_samples(v, closes, opens, vols, dates)
    cut = int(len(samples) * TRAIN_FRAC)
    train, test = samples[:cut], samples[cut:]
    model = fit(train, feats)
    stats, _ = rows_stats(test, model, feats)
    _, recent = rows_stats(samples[-RECENT:], model, feats)
    full = fit(samples, feats)
    rets = [0.0] + [closes[i] / closes[i - 1] - 1 for i in range(1, len(closes))]
    t = len(closes) - 1
    rsis = rsi_series(closes)
    lf = {}
    if "drift" in feats: lf["drift"] = mean(rets[t - v["driftN"] + 1:t + 1])
    if "mom" in feats: lf["mom"] = rets[t]
    if "ext" in feats:
        ma = mean(closes[t - v["maN"] + 1:t + 1]); lf["ext"] = (closes[t] - ma) / ma
    if "gap" in feats: lf["gap"] = (opens[t] - closes[t - 1]) / closes[t - 1]
    if "rsi" in feats: lf["rsi"] = ((rsis[t] or 50) - 50) / 50
    if "vol" in feats:
        v5 = mean(vols[t - 4:t + 1]); v60 = mean(vols[t - 59:t + 1]) or 1; lf["vol"] = v5 / v60 - 1
    ls = {"f": lf, "vol": pstdev(rets[t - 19:t + 1]) or 0.001, "cT": closes[t]}
    nr, npc, npl, nph = predict(ls, full, feats)
    last_gap = (opens[t] - closes[t - 1]) / closes[t - 1]
    wg = model["w"].get("gap", 0)  # match the train-fit weights shown in the UI
    return {
        "variant": vid, "feats": feats,
        "weights": {**{f: round(model["w"][f], 4) for f in feats}, "bias": round(model["bias"], 4), "k": model["k"]},
        "gapBehavior": "continue" if wg > 0.05 else "fade" if wg < -0.05 else "neutral",
        "lastGapPct": round(last_gap * 100, 2),
        "stats": stats, "recent": recent,
        "next": {"dir": "rise" if nr >= 0 else "decline", "predC": npc, "predL": npl, "predH": nph,
                 "pct": round(nr * 100, 2)},
        "_maeOOS": stats["mae"] if stats else 999,
        "_recentMae": mean(abs((x["actualC"] - x["predC"]) / x["predC"] * 100) for x in recent) if recent else 999,
    }


state_path = os.path.join(HERE, "model_state.json")
state = json.load(open(state_path)) if os.path.exists(state_path) else {"perStock": {}, "log": []}
today = time.strftime("%Y-%m-%d")
out, evo_events = {}, []

for sym, key in SYMBOLS:
    closes, opens, vols, dates = load(sym)
    if len(closes) < MIN_BARS:
        out[key] = {"insufficient": True, "bars": len(closes)}
        continue
    champ_id = state["perStock"].get(key, {}).get("variant", DEFAULT_VARIANT)
    if champ_id not in VARIANTS:
        champ_id = DEFAULT_VARIANT

    if EVOLVE:
        champ = assess(champ_id, closes, opens, vols, dates)
        escalate = champ["_recentMae"] > ESCALATE_MULT * max(champ["_maeOOS"], 0.1)
        if WEEKEND or escalate:
            candidates = ORDER
        else:
            nxt = ORDER[(ORDER.index(champ_id) + 1) % len(ORDER)]
            candidates = [champ_id, nxt]
        results = {champ_id: champ}
        for vid in candidates:
            if vid not in results:
                results[vid] = assess(vid, closes, opens, vols, dates)
        best_id = min(results, key=lambda v: results[v]["_maeOOS"])
        adopted = champ_id
        if best_id != champ_id and results[best_id]["_maeOOS"] < champ["_maeOOS"] * ADOPT_MARGIN:
            adopted = best_id
            ev = {"d": today, "sym": key, "from": champ_id, "to": best_id,
                  "maeFrom": champ["_maeOOS"], "maeTo": results[best_id]["_maeOOS"],
                  "trigger": "weekend" if WEEKEND else "error-spike" if escalate else "routine"}
            evo_events.append(ev)
            state.setdefault("perStock", {}).setdefault(key, {}).setdefault("log", [])
            state["perStock"][key]["log"] = (state["perStock"][key]["log"] + [ev])[-8:]
            state["perStock"][key]["evolvedAt"] = today
        chosen = results[adopted]
        rec = state["perStock"].setdefault(key, {})
        rec["variant"] = adopted
        rec["mae"] = chosen["_maeOOS"]
        rec["version"] = rec.get("version", 0) + (1 if adopted != champ_id else 0)
        rec.setdefault("evolvedAt", today)
        # 5-day weekend review
        if WEEKEND:
            last5 = chosen["recent"][-5:]
            if last5:
                rec["weekReview"] = {
                    "d": today,
                    "dirAcc": round(100 * mean(1.0 if x["dirHit"] else 0.0 for x in last5)),
                    "mae": round(mean(abs((x["actualC"] - x["predC"]) / x["predC"] * 100) for x in last5), 2),
                }
    else:
        chosen = assess(champ_id, closes, opens, vols, dates)
        rec = state["perStock"].get(key, {})

    model_meta = {
        "variant": chosen["variant"],
        "version": state["perStock"].get(key, {}).get("version", 0),
        "evolvedAt": state["perStock"].get(key, {}).get("evolvedAt", today),
        "weekReview": state["perStock"].get(key, {}).get("weekReview"),
        "lastChange": (state["perStock"].get(key, {}).get("log") or [{}])[-1],
    }
    out[key] = {k2: v2 for k2, v2 in chosen.items() if not k2.startswith("_")}
    out[key]["bars"] = len(closes)
    out[key]["model"] = model_meta

out_top = {"generated": time.strftime("%Y-%m-%d %H:%M"),
           "mode": "evolve" if EVOLVE else "apply",
           "weekend": WEEKEND, "evolved": evo_events, "stocks": out}

with open(os.path.join(HERE, "model_eval.js"), "w") as f:
    f.write("// Generated by eval_predictions.py — self-evolving walk-forward model. mode=%s\n" % out_top["mode"])
    f.write("// Generated at: " + time.strftime("%Y-%m-%d %H:%M") + "\n")
    f.write("const MODEL_EVAL = " + json.dumps(out_top, ensure_ascii=False) + ";\n")

if EVOLVE:
    state["lastEvolve"] = today
    if evo_events:
        state["log"] = (state.get("log", []) + evo_events)[-40:]
    json.dump(state, open(state_path, "w"), ensure_ascii=False, indent=1)

print(f"model_eval.js written — mode={out_top['mode']} weekend={WEEKEND}")
for k, v in out.items():
    if v.get("insufficient"):
        print(f"  {k}: insufficient ({v['bars']} bars)")
    else:
        st, m = v["stats"], v["model"]
        print(f"  {k}: {m['variant']} v{m['version']} | OOS dir {st['dirAcc']}% mae {st['mae']}% range {st['rangeHit']}% | gap={v['gapBehavior']} | next {v['next']['dir']} {v['next']['pct']:+}%")
if EVOLVE and evo_events:
    print("EVOLVED:", "; ".join(f"{e['sym']} {e['from']}→{e['to']} ({e['maeFrom']}→{e['maeTo']}%, {e['trigger']})" for e in evo_events))
