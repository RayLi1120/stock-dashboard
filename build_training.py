#!/usr/bin/env python3
"""Build training setups for the Trading Trainer from 2y daily history.

Each sample: ~36 daily candles SHOWN (anonymized — no symbol, no dates, so you
read the chart, not your memory) + the next 5 candles HIDDEN for the reveal.
We pre-compute the objective technical context at the decision bar and the real
forward outcome, so the in-page coach can grade your REASONING against what was
actually present and what actually happened.

Run after raw_history/*.json is fetched. Writes training.js.
"""
import json
import os
import random
import time

HERE = os.path.dirname(os.path.abspath(__file__))
SYMBOLS = [("2344.TW", "TW"), ("2337.TW", "TW"), ("6770.TW", "TW"),
           ("1307.TW", "TW"), ("NVDA", "US"), ("AAPL", "US"), ("SPCX", "US")]
SHOWN = 36
FUTURE = 5
SAMPLES_PER_SYM = 12
random.seed(int(time.strftime("%Y%m%d")))  # stable within a day, fresh across days


def load(yahoo):
    p = os.path.join(HERE, "raw_history", f"{yahoo}.json")
    if not os.path.exists(p):
        return []
    d = json.load(open(p))
    r = d["chart"]["result"][0]
    q = r["indicators"]["quote"][0]
    out = []
    for i in range(len(r["timestamp"])):
        o, h, l, c = q["open"][i], q["high"][i], q["low"][i], q["close"][i]
        if None in (o, h, l, c):
            continue
        out.append({"o": round(o, 2), "h": round(h, 2), "l": round(l, 2),
                    "c": round(c, 2), "v": q["volume"][i] or 0})
    return out


def rsi14(closes):
    p = 14
    if len(closes) < p + 1:
        return None
    g = l = 0.0
    for i in range(1, p + 1):
        d = closes[i] - closes[i - 1]
        g, l = g + max(d, 0), l + max(-d, 0)
    ag, al = g / p, l / p
    for i in range(p + 1, len(closes)):
        d = closes[i] - closes[i - 1]
        ag = (ag * (p - 1) + max(d, 0)) / p
        al = (al * (p - 1) + max(-d, 0)) / p
    return 100.0 if al == 0 else 100 - 100 / (1 + ag / al)


def context(win):
    closes = [c["c"] for c in win]
    vols = [c["v"] for c in win]
    last = closes[-1]
    rsi = rsi14(closes) or 50
    ma_fast = sum(closes[-10:]) / 10
    ma_slow = sum(closes[-30:]) / 30 if len(closes) >= 30 else sum(closes) / len(closes)
    stack = "bullish" if last > ma_fast > ma_slow else "bearish" if last < ma_fast < ma_slow else "mixed"
    v_recent = sum(vols[-5:]) / 5
    v_prior = sum(vols[-20:-5]) / 15 if len(vols) >= 20 else v_recent
    vr = v_recent / v_prior if v_prior else 1
    vol_trend = "rising" if vr > 1.25 else "falling" if vr < 0.8 else "flat"
    hi = max(c["h"] for c in win)
    lo = min(c["l"] for c in win)
    near_high = last >= hi * 0.98
    near_low = last <= lo * 1.02
    r10 = last / closes[-11] - 1 if len(closes) > 11 else 0
    trend = "up" if r10 > 0.04 else "down" if r10 < -0.04 else "range"

    signals = []
    if rsi >= 70:
        signals.append("RSI overbought (>70)")
    elif rsi <= 30:
        signals.append("RSI oversold (<30)")
    if stack == "bullish":
        signals.append("price above rising MA10 > MA30 (uptrend stack)")
    elif stack == "bearish":
        signals.append("price below falling MA10 < MA30 (downtrend stack)")
    if vol_trend == "rising":
        signals.append("volume expanding into the move")
    elif vol_trend == "falling":
        signals.append("volume drying up")
    if near_high:
        signals.append("pressing the recent high (breakout-or-reject zone)")
    if near_low:
        signals.append("sitting on the recent low (support-or-break zone)")
    # dominant factor heuristic
    if near_high and vol_trend == "rising":
        dom = "a high test on expanding volume — breakout pressure"
    elif near_low and rsi <= 35:
        dom = "an oversold low test — bounce-or-break"
    elif stack == "bullish":
        dom = "an established uptrend (the trend was the signal)"
    elif stack == "bearish":
        dom = "an established downtrend (the trend was the signal)"
    elif rsi >= 70:
        dom = "an overbought stall"
    else:
        dom = "a range / low-conviction setup (genuinely hard — a coin-flip)"

    return {"rsi": round(rsi), "maFast": round(ma_fast, 2), "maSlow": round(ma_slow, 2),
            "stack": stack, "volTrend": vol_trend, "nearHigh": near_high, "nearLow": near_low,
            "trend": trend, "signals": signals, "dominant": dom}


samples = []
for yahoo, mkt in SYMBOLS:
    bars = load(yahoo)
    usable = len(bars) - (SHOWN + FUTURE)
    if usable <= SHOWN:
        continue
    starts = random.sample(range(SHOWN, len(bars) - SHOWN - FUTURE), min(SAMPLES_PER_SYM, usable))
    for st in starts:
        win = bars[st:st + SHOWN]
        fut = bars[st + SHOWN:st + SHOWN + FUTURE]
        if len(fut) < FUTURE:
            continue
        dclose = win[-1]["c"]
        fclose = fut[-1]["c"]
        pct = (fclose - dclose) / dclose * 100
        ctx = context(win)
        samples.append({
            "id": f"{yahoo}-{st}", "market": mkt,
            "shown": win,
            "future": [{"o": c["o"], "h": c["h"], "l": c["l"], "c": c["c"]} for c in fut],
            "decisionClose": dclose,
            "outcome": {"dir": "rise" if fclose >= dclose else "decline",
                        "pct": round(pct, 2),
                        "maxUp": round((max(c["h"] for c in fut) - dclose) / dclose * 100, 2),
                        "maxDn": round((min(c["l"] for c in fut) - dclose) / dclose * 100, 2)},
            "ctx": ctx,
        })

random.shuffle(samples)
out = {"generated": time.strftime("%Y-%m-%d %H:%M"), "shownBars": SHOWN,
       "futureBars": FUTURE, "count": len(samples), "samples": samples}
with open(os.path.join(HERE, "training.js"), "w") as f:
    f.write("// Generated by build_training.py — anonymized historical setups for the Trading Trainer.\n")
    f.write("const TRAINING = " + json.dumps(out, ensure_ascii=False) + ";\n")

rises = sum(1 for s in samples if s["outcome"]["dir"] == "rise")
print(f"training.js: {len(samples)} setups ({rises} rise / {len(samples)-rises} decline), {SHOWN}+{FUTURE} bars each")
