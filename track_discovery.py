#!/usr/bin/env python3
"""Discovery hit-rate tracker — closes the feedback loop on the screener.

Maintains discovery_log.js: every distinct screener pick is logged once on the
day it FIRST appears (entry price + score), then its forward return is updated on
every run from the price map discover.py emits. We approximate trading-day
horizons with business-day counts (ignores holidays — labeled approximate).

A pick is "scored" once it has been held >= ~5 trading days, and counts as a win
if its return-since-pick is positive. The dashboard shows the screener's batting
average so its picks earn trust (or don't) with real evidence.

Run AFTER discover.py.
"""
import json
import os
import re
import time
from datetime import date, datetime

HERE = os.path.dirname(os.path.abspath(__file__))


def read_js_const(path, name, default):
    if not os.path.exists(path):
        return default
    m = re.search(r"const %s = (.*?);\n" % name, open(path).read(), re.S)
    return json.loads(m.group(1)) if m else default


def bdays(d1, d2):
    """Approximate trading days between two ISO dates (Mon–Fri, no holidays)."""
    a, b = datetime.strptime(d1, "%Y-%m-%d").date(), datetime.strptime(d2, "%Y-%m-%d").date()
    n, cur = 0, a
    step = 1
    from datetime import timedelta
    while cur < b:
        cur += timedelta(days=1)
        if cur.weekday() < 5:
            n += 1
    return n


disc = read_js_const(os.path.join(HERE, "discover.js"), "DISCOVER", {})
log = read_js_const(os.path.join(HERE, "discovery_log.js"), "DISCOVERY_LOG", {"entries": []})
entries = log["entries"]
prices = disc.get("prices", {})
today = time.strftime("%Y-%m-%d")

# An entry is "open" (still being tracked forward) for 28 calendar days; after that frozen.
open_keys = {(e["sym"], e["pickDate"]) for e in entries if e.get("open")}

# Log new picks once per pick-episode: a symbol not currently open gets a fresh entry.
open_syms = {e["sym"] for e in entries if e.get("open")}
new_logged = 0
for p in disc.get("picks", []):
    if p["sym"] in open_syms:
        continue  # already tracking this name's current run-up
    entries.append({
        "sym": p["sym"], "name": p["name"], "market": p["market"],
        "pickDate": today, "entryClose": p["last"], "score": p["score"],
        "curClose": p["last"], "ret": 0.0, "held": 0,
        "r5": None, "r10": None, "r20": None, "open": True,
    })
    open_syms.add(p["sym"])
    new_logged += 1

# Update forward returns for all open entries.
for e in entries:
    if not e.get("open"):
        continue
    cur = prices.get(e["sym"])
    if cur:
        e["curClose"] = cur
        e["ret"] = round((cur / e["entryClose"] - 1) * 100, 2)
    held = bdays(e["pickDate"], today)
    e["held"] = held
    # capture horizon checkpoints once
    if e["r5"] is None and held >= 5:
        e["r5"] = e["ret"]
    if e["r10"] is None and held >= 10:
        e["r10"] = e["ret"]
    if e["r20"] is None and held >= 20:
        e["r20"] = e["ret"]
        e["open"] = False  # done tracking at ~20 trading days

# Aggregate batting average over entries held >= 5 trading days.
scored = [e for e in entries if e["held"] >= 5]
wins = [e for e in scored if e["ret"] > 0]
avg_ret = round(sum(e["ret"] for e in scored) / len(scored), 2) if scored else None
med_ret = None
if scored:
    rs = sorted(e["ret"] for e in scored)
    med_ret = round(rs[len(rs) // 2], 2)

stats = {
    "tracked": len(entries),
    "scored": len(scored),
    "winRate": round(100 * len(wins) / len(scored)) if scored else None,
    "avgRet": avg_ret, "medRet": med_ret,
}

entries[:] = entries[-300:]
with open(os.path.join(HERE, "discovery_log.js"), "w") as f:
    f.write("// Machine-managed discovery hit-rate log. Strict JSON body — written by track_discovery.py.\n")
    f.write("const DISCOVERY_LOG = " + json.dumps(
        {"generated": today, "stats": stats, "entries": entries},
        ensure_ascii=False, indent=1) + ";\n")

print(f"discovery_log.js: +{new_logged} new picks logged, {len(entries)} tracked, "
      f"{stats['scored']} scored, win rate {stats['winRate']}%")
