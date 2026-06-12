#!/usr/bin/env python3
"""Walk-forward backtest of the MSH/MSL structure-trail rule over 2y daily history.

Rules (evaluated day by day, swings only count once confirmed K bars later — no lookahead):
  Entry : close crosses above the last confirmed MSH (structure breakout).
  Exit A: close below the last confirmed MSL (raw structure stop).
  Exit B: close below (last confirmed MSL − 1×ATR14) (buffered stop).
Fills at the signal day's close; no costs/slippage; one position at a time, long-only.
Open trades at the end are marked to the last close (flagged "open").

Writes backtest.js. Run after raw_history is fetched.
"""
import json
import os
import time

HERE = os.path.dirname(os.path.abspath(__file__))
SYMBOLS = [("2344.TW", "2344"), ("2337.TW", "2337"), ("6770.TW", "6770"),
           ("1307.TW", "1307"), ("NVDA", "NVDA"), ("AAPL", "AAPL")]
K = 3


def load(yahoo):
    d = json.load(open(os.path.join(HERE, "raw_history", f"{yahoo}.json")))
    r = d["chart"]["result"][0]
    q = r["indicators"]["quote"][0]
    off = r["meta"].get("gmtoffset", 0)
    out = []
    for i, ts in enumerate(r["timestamp"]):
        o, h, l, c = q["open"][i], q["high"][i], q["low"][i], q["close"][i]
        if None in (o, h, l, c):
            continue
        out.append({"d": time.strftime("%Y-%m-%d", time.gmtime(ts + off)),
                    "o": o, "h": h, "l": l, "c": c})
    return out


def atr_series(cs, p=14):
    atr = [None] * len(cs)
    trs = []
    for i in range(1, len(cs)):
        trs.append(max(cs[i]["h"] - cs[i]["l"],
                       abs(cs[i]["h"] - cs[i - 1]["c"]),
                       abs(cs[i]["l"] - cs[i - 1]["c"])))
        if len(trs) == p:
            atr[i] = sum(trs) / p
        elif len(trs) > p:
            atr[i] = (atr[i - 1] * (p - 1) + trs[-1]) / p
    return atr


def swings_at(cs):
    """Map: confirmation index -> swing dict. Swing at i is confirmed at i+K."""
    conf = {}
    for i in range(K, len(cs) - K):
        hs = [cs[j]["h"] for j in range(i - K, i + K + 1)]
        ls = [cs[j]["l"] for j in range(i - K, i + K + 1)]
        if cs[i]["h"] == max(hs) and hs.count(cs[i]["h"]) == 1:
            conf.setdefault(i + K, []).append({"p": cs[i]["h"], "t": "H", "d": cs[i]["d"]})
        elif cs[i]["l"] == min(ls) and ls.count(cs[i]["l"]) == 1:
            conf.setdefault(i + K, []).append({"p": cs[i]["l"], "t": "L", "d": cs[i]["d"]})
    return conf


def run(cs, atr, conf, buffered):
    msh = msl = None
    pos = None
    trades = []
    eq, e = [], 1.0
    for t in range(len(cs)):
        for s in conf.get(t, []):
            if s["t"] == "H":
                msh = s
            else:
                msl = s
        c = cs[t]["c"]
        if t > 0 and pos is not None:
            e *= c / cs[t - 1]["c"]
        eq.append(round(e, 4))
        if pos is None:
            if msh and msl and c > msh["p"]:
                pos = {"ein": cs[t]["d"], "pin": c}
        else:
            stop = msl["p"] - ((atr[t] or 0) if buffered else 0)
            if c < stop:
                pos.update({"eout": cs[t]["d"], "pout": c,
                            "ret": round((c / pos["pin"] - 1) * 100, 2)})
                trades.append(pos)
                pos = None
    if pos is not None:
        c = cs[-1]["c"]
        pos.update({"eout": "open", "pout": c, "ret": round((c / pos["pin"] - 1) * 100, 2)})
        trades.append(pos)
    return trades, eq


def max_dd(eq):
    peak, dd = eq[0], 0.0
    for v in eq:
        peak = max(peak, v)
        dd = max(dd, (peak - v) / peak)
    return round(dd * 100, 1)


def stats(trades, eq, cs):
    closed = [tr for tr in trades if tr["eout"] != "open"]
    wins = [tr for tr in trades if tr["ret"] > 0]
    bh = [round(c["c"] / cs[0]["c"], 4) for c in cs]
    return {
        "trades": len(trades),
        "open": any(tr["eout"] == "open" for tr in trades),
        "winRate": round(100 * len(wins) / len(trades), 0) if trades else None,
        "stratRet": round((eq[-1] - 1) * 100, 1),
        "bhRet": round((bh[-1] - 1) * 100, 1),
        "stratDD": max_dd(eq),
        "bhDD": max_dd(bh),
        "whipsaws": sum(1 for tr in closed if tr["ret"] < 0),
    }


out = {}
for yahoo, key in SYMBOLS:
    cs = load(yahoo)
    atr = atr_series(cs)
    conf = swings_at(cs)
    tA, eqA = run(cs, atr, conf, buffered=False)
    tB, eqB = run(cs, atr, conf, buffered=True)
    bh = [round(c["c"] / cs[0]["c"], 4) for c in cs]
    step = max(1, len(cs) // 240)
    out[key] = {
        "span": [cs[0]["d"], cs[-1]["d"]],
        "raw": {"stats": stats(tA, eqA, cs), "trades": tA[-8:]},
        "buffered": {"stats": stats(tB, eqB, cs), "trades": tB[-8:]},
        "equity": {"dates": [cs[i]["d"] for i in range(0, len(cs), step)],
                   "strat": [eqA[i] for i in range(0, len(cs), step)],
                   "stratBuf": [eqB[i] for i in range(0, len(cs), step)],
                   "bh": [bh[i] for i in range(0, len(cs), step)]},
    }

with open(os.path.join(HERE, "backtest.js"), "w") as f:
    f.write("// Generated by backtest.py — walk-forward MSH/MSL trail backtest (2y daily)\n")
    f.write("// Generated at: " + time.strftime("%Y-%m-%d %H:%M") + "\n")
    f.write("const BACKTEST = " + json.dumps(out, ensure_ascii=False) + ";\n")

for k, v in out.items():
    a, b = v["raw"]["stats"], v["buffered"]["stats"]
    print(f"{k}: raw {a['trades']}tr {a['winRate']}%win {a['stratRet']:+.0f}% (B&H {a['bhRet']:+.0f}%) "
          f"DD {a['stratDD']}% vs {a['bhDD']}% | buf {b['trades']}tr {b['stratRet']:+.0f}% DD {b['stratDD']}%")
