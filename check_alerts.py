#!/usr/bin/env python3
"""Evaluate alert rules against the latest candles; append hits to alerts.js.

Run after build_data.py. Idempotent per (rule, symbol, candle date).
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


def sma_last(closes, period):
    if len(closes) < period:
        return None
    return sum(closes[-period:]) / period


def rsi14(closes):
    p = 14
    if len(closes) < p + 1:
        return None
    gain = loss = 0.0
    for i in range(1, p + 1):
        d = closes[i] - closes[i - 1]
        gain, loss = gain + max(d, 0), loss + max(-d, 0)
    avg_g, avg_l = gain / p, loss / p
    for i in range(p + 1, len(closes)):
        d = closes[i] - closes[i - 1]
        avg_g = (avg_g * (p - 1) + max(d, 0)) / p
        avg_l = (avg_l * (p - 1) + max(-d, 0)) / p
    if avg_l == 0:
        return 100.0
    return 100 - 100 / (1 + avg_g / avg_l)


stocks = read_js_const(os.path.join(HERE, "data.js"), "STOCK_DATA")
rules = json.load(open(os.path.join(HERE, "alert_rules.json")))

alerts_path = os.path.join(HERE, "alerts.js")
existing = read_js_const(alerts_path, "ALERTS") if os.path.exists(alerts_path) else {"items": []}
items = existing.get("items", [])
seen = {(i["sym"], i["rule"], i["d"]) for i in items}
new = []


def add(sym, d, rule, level, msg):
    if (sym, rule, d) in seen:
        return
    e = {"at": time.strftime("%Y-%m-%d %H:%M"), "d": d, "sym": sym, "rule": rule, "level": level, "msg": msg}
    items.append(e)
    new.append(e)
    seen.add((sym, rule, d))


g = rules["generic"]
for sym, s in stocks.items():
    cs = s["candles"]
    if len(cs) < 2:
        continue
    a, b = cs[-1], cs[-2]
    closes = [c["c"] for c in cs]
    d = a["d"]

    lv = rules["levels"].get(sym, {})
    if "above" in lv and a["c"] >= lv["above"] > b["c"]:
        add(sym, d, "level-above", "warn", f"closed above {lv['above']} ({lv.get('why','')})")
    if "below" in lv and a["c"] <= lv["below"] < b["c"]:
        add(sym, d, "level-below", "warn", f"closed below {lv['below']} ({lv.get('why','')})")

    r = rsi14(closes)
    if r is not None and r >= g["rsi_hi"]:
        add(sym, d, "rsi-hi", "info", f"RSI14 {r:.0f} — overbought")
    if r is not None and r <= g["rsi_lo"]:
        add(sym, d, "rsi-lo", "info", f"RSI14 {r:.0f} — oversold")

    prior = [c.get("v") or 0 for c in cs[-21:-1]]
    avg = sum(prior) / len(prior) if prior else 0
    if avg and (a.get("v") or 0) / avg >= g["vol_spike"]:
        add(sym, d, "vol-spike", "warn", f"volume {(a['v'] / avg):.1f}× the 20-day average")

    gap = (a["o"] - b["c"]) / b["c"] * 100
    if abs(gap) >= g["gap_pct"]:
        add(sym, d, "gap", "warn", f"gapped {gap:+.1f}% at the open")

    ma5p, ma20p = sma_last(closes[:-1], 5), sma_last(closes[:-1], 20)
    ma5n, ma20n = sma_last(closes, 5), sma_last(closes, 20)
    if None not in (ma5p, ma20p, ma5n, ma20n):
        if ma5p <= ma20p and ma5n > ma20n:
            add(sym, d, "ma-cross-up", "info", "MA5 crossed above MA20 — bullish trend signal")
        if ma5p >= ma20p and ma5n < ma20n:
            add(sym, d, "ma-cross-down", "info", "MA5 crossed below MA20 — bearish trend signal")

items = items[-50:]
with open(alerts_path, "w") as f:
    f.write("// Machine-managed alert log. Strict JSON body — written by check_alerts.py.\n")
    f.write("const ALERTS = " + json.dumps(
        {"generated": time.strftime("%Y-%m-%d %H:%M"), "newCount": len(new), "items": items},
        ensure_ascii=False, indent=1) + ";\n")

print(f"alerts.js: {len(new)} new, {len(items)} total")
for e in new:
    print(" ", e["sym"], e["rule"], "—", e["msg"])
