#!/usr/bin/env python3
"""Build Trading-Trainer setups — Taiwan only, clean technical patterns.

Samples ~36-bar windows (+5 hidden future bars) from a broad TWSE/TPEx universe,
fully anonymized (no symbol, no dates — you read the chart, not your memory).

NEWS-DRIVEN ANOMALIES ARE EXCLUDED so the trainer teaches pattern-reading, not
headline-guessing. A window is rejected if it contains:
  - two consecutive near-limit days (漲停/跌停 streak — that's news, e.g. a buyout),
  - 3+ extreme (>=9%) days, or
  - any overnight gap >= 8%.
Dead, rangeless windows are also skipped (nothing to learn from).

Fetches its own 2y daily history via curl (system Python lacks SSL certs).
Run standalone or from the scheduled scan. Writes training.js.
"""
import json
import os
import random
import subprocess
import time
from concurrent.futures import ThreadPoolExecutor

HERE = os.path.dirname(os.path.abspath(__file__))
SHOWN = 36
FUTURE = 5
PER_SYM = 3
random.seed(int(time.strftime("%Y%m%d%H")))  # fresh each scan, stable within the hour

# Broad Taiwan universe across sectors — for pattern variety, all anonymized.
TW_UNIVERSE = [
    "2330.TW", "2454.TW", "2308.TW", "2382.TW", "3231.TW", "2376.TW", "2357.TW",
    "3017.TW", "3324.TW", "2301.TW", "2303.TW", "2408.TW", "3034.TW", "3037.TW",
    "3711.TW", "2327.TW", "6669.TW", "3661.TW", "3443.TW", "6415.TW", "8046.TW",
    "2368.TW", "2449.TW", "2353.TW", "2356.TW", "2324.TW", "2383.TW", "2360.TW",
    "2344.TW", "2337.TW", "6770.TW", "1307.TW",
    "2603.TW", "2609.TW", "2615.TW", "2002.TW", "1301.TW", "1303.TW",
    "2881.TW", "2882.TW", "2891.TW", "2884.TW", "5871.TW",
    "9910.TW", "9904.TW", "1476.TW", "2412.TW", "1519.TW", "1513.TW", "2618.TW",
    "5347.TWO", "6488.TWO", "3105.TWO", "8299.TWO", "3529.TWO",
]


def fetch(sym):
    url = f"https://query1.finance.yahoo.com/v8/finance/chart/{sym}?range=2y&interval=1d"
    try:
        raw = subprocess.run(
            ["curl", "-s", "--max-time", "25", "-H", "User-Agent: Mozilla/5.0", url],
            capture_output=True, timeout=30).stdout
        d = json.loads(raw)
        r = d["chart"]["result"][0]
        q = r["indicators"]["quote"][0]
        bars = []
        for i in range(len(r["timestamp"])):
            o, h, l, c = q["open"][i], q["high"][i], q["low"][i], q["close"][i]
            if None in (o, h, l, c):
                continue
            bars.append({"o": round(o, 2), "h": round(h, 2), "l": round(l, 2),
                         "c": round(c, 2), "v": q["volume"][i] or 0})
        return sym, bars
    except Exception:
        return sym, []


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


def news_driven(window):
    """True if the window looks headline-driven rather than a clean pattern."""
    chgs = [(window[i]["c"] / window[i - 1]["c"] - 1) * 100 for i in range(1, len(window))]
    extreme = [abs(x) >= 9.0 for x in chgs]      # near TWSE ±10% limit
    limit = [abs(x) >= 9.7 for x in chgs]         # essentially at the limit
    if sum(extreme) >= 3:
        return True
    for i in range(len(limit) - 1):
        if limit[i] and limit[i + 1]:             # 漲停/跌停 streak
            return True
    for i in range(1, len(window)):               # big overnight gap = news
        if abs(window[i]["o"] / window[i - 1]["c"] - 1) >= 0.08:
            return True
    return False


def too_dead(shown):
    hi = max(c["h"] for c in shown)
    lo = min(c["l"] for c in shown)
    return (hi - lo) / shown[-1]["c"] < 0.06       # <6% range over 36 bars → nothing to read


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


with ThreadPoolExecutor(max_workers=8) as ex:
    data = dict(ex.map(fetch, TW_UNIVERSE))

samples, rejected = [], 0
for sym, bars in data.items():
    if len(bars) < SHOWN + FUTURE + 5:
        continue
    starts = list(range(SHOWN, len(bars) - SHOWN - FUTURE))
    random.shuffle(starts)
    kept = 0
    for st in starts:
        if kept >= PER_SYM:
            break
        win = bars[st:st + SHOWN]
        fut = bars[st + SHOWN:st + SHOWN + FUTURE]
        if len(fut) < FUTURE:
            continue
        full = win + fut
        if news_driven(full) or too_dead(win):
            rejected += 1
            continue
        dclose = win[-1]["c"]
        fclose = fut[-1]["c"]
        pct = (fclose - dclose) / dclose * 100
        ctx = context(win)
        samples.append({
            "id": f"{sym}-{st}", "market": "Taiwan (TWSE)",
            "shown": win,
            "future": [{"o": c["o"], "h": c["h"], "l": c["l"], "c": c["c"]} for c in fut],
            "decisionClose": dclose,
            "outcome": {"dir": "rise" if fclose >= dclose else "decline",
                        "pct": round(pct, 2),
                        "maxUp": round((max(c["h"] for c in fut) - dclose) / dclose * 100, 2),
                        "maxDn": round((min(c["l"] for c in fut) - dclose) / dclose * 100, 2)},
            "ctx": ctx,
        })
        kept += 1

random.shuffle(samples)
out = {"generated": time.strftime("%Y-%m-%d %H:%M"), "shownBars": SHOWN,
       "futureBars": FUTURE, "count": len(samples), "samples": samples}
with open(os.path.join(HERE, "training.js"), "w") as f:
    f.write("// Generated by build_training.py — anonymized clean TWSE/TPEx setups (news spikes filtered out).\n")
    f.write("const TRAINING = " + json.dumps(out, ensure_ascii=False) + ";\n")

rises = sum(1 for s in samples if s["outcome"]["dir"] == "rise")
print(f"training.js: {len(samples)} clean TW setups ({rises} rise / {len(samples)-rises} decline), "
      f"{rejected} news/dead windows rejected, {SHOWN}+{FUTURE} bars each")
