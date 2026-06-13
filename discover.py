#!/usr/bin/env python3
"""Discovery screener: scan a broad TW+US universe for potentially rising stocks.

Fetches 6 months of daily candles per name (threaded), scores each on:
  momentum (20d), volume surge (5d vs 60d), MA stack (close>MA20>MA60),
  proximity to 6-month high, RSI sweet spot (55-75), accumulation days
  (up days on >1.2x volume), relative strength vs the home index.
Writes the top picks with concrete evidence strings to discover.js.
Watchlist names are excluded — this is for finding NEW candidates.

newsNote fields are left null; the scheduled scan researches top picks and
fills them in (they are overwritten on the next screener run).
"""
import json
import os
import subprocess
import time
from concurrent.futures import ThreadPoolExecutor

HERE = os.path.dirname(os.path.abspath(__file__))
TOP_N = 10
MIN_SCORE = 55

# (yahoo symbol, display name, market) — watchlist names intentionally absent.
UNIVERSE = [
    # TWSE large/mid caps
    ("2330.TW", "台積電 TSMC", "TW"), ("2317.TW", "鴻海 Hon Hai", "TW"),
    ("2454.TW", "聯發科 MediaTek", "TW"), ("2308.TW", "台達電 Delta", "TW"),
    ("2382.TW", "廣達 Quanta", "TW"), ("3231.TW", "緯創 Wistron", "TW"),
    ("2376.TW", "技嘉 Gigabyte", "TW"), ("2357.TW", "華碩 ASUS", "TW"),
    ("3017.TW", "奇鋐 AVC", "TW"), ("3324.TW", "雙鴻 Auras", "TW"),
    ("2301.TW", "光寶科 Lite-On", "TW"), ("2303.TW", "聯電 UMC", "TW"),
    ("2408.TW", "南亞科 Nanya Tech", "TW"), ("2603.TW", "長榮 Evergreen", "TW"),
    ("2609.TW", "陽明 Yang Ming", "TW"), ("2615.TW", "萬海 Wan Hai", "TW"),
    ("2002.TW", "中鋼 CSC", "TW"), ("1301.TW", "台塑 FPC", "TW"),
    ("1303.TW", "南亞 NPC", "TW"), ("2881.TW", "富邦金 Fubon", "TW"),
    ("2882.TW", "國泰金 Cathay", "TW"), ("2891.TW", "中信金 CTBC", "TW"),
    ("2884.TW", "玉山金 E.Sun", "TW"), ("3008.TW", "大立光 Largan", "TW"),
    ("3034.TW", "聯詠 Novatek", "TW"), ("3037.TW", "欣興 Unimicron", "TW"),
    ("4938.TW", "和碩 Pegatron", "TW"), ("2327.TW", "國巨 Yageo", "TW"),
    ("3711.TW", "日月光 ASE", "TW"), ("2412.TW", "中華電 CHT", "TW"),
    ("9910.TW", "豐泰 Feng Tay", "TW"), ("9904.TW", "寶成 Pou Chen", "TW"),
    ("1476.TW", "儒鴻 Eclat", "TW"), ("1216.TW", "統一 Uni-President", "TW"),
    ("2912.TW", "統一超 PCSC", "TW"), ("5871.TW", "中租 Chailease", "TW"),
    ("6669.TW", "緯穎 Wiwynn", "TW"), ("3661.TW", "世芯 Alchip", "TW"),
    ("3443.TW", "創意 GUC", "TW"), ("6415.TW", "矽力 Silergy", "TW"),
    ("8046.TW", "南電 Nanya PCB", "TW"), ("3189.TW", "景碩 Kinsus", "TW"),
    ("2368.TW", "金像電 GCE", "TW"), ("6239.TW", "力成 PTI", "TW"),
    ("2449.TW", "京元電 KYEC", "TW"), ("3532.TW", "台勝科 SAS", "TW"),
    ("2353.TW", "宏碁 Acer", "TW"), ("2356.TW", "英業達 Inventec", "TW"),
    ("2324.TW", "仁寶 Compal", "TW"), ("2383.TW", "台光電 EMC", "TW"),
    ("2360.TW", "致茂 Chroma", "TW"), ("1605.TW", "華新 Walsin", "TW"),
    ("1519.TW", "華城 Fortune Electric", "TW"), ("1513.TW", "中興電 CHEM", "TW"),
    ("2618.TW", "長榮航 EVA Air", "TW"), ("2610.TW", "華航 CAL", "TW"),
    # TPEx
    ("5347.TWO", "世界先進 VIS", "TW"), ("6488.TWO", "環球晶 GlobalWafers", "TW"),
    ("3105.TWO", "穩懋 WIN Semi", "TW"), ("8299.TWO", "群聯 Phison", "TW"),
    ("3529.TWO", "力旺 eMemory", "TW"), ("6510.TWO", "精測 CHPT", "TW"),
    # US
    ("MSFT", "Microsoft", "US"), ("GOOGL", "Alphabet", "US"),
    ("AMZN", "Amazon", "US"), ("META", "Meta", "US"), ("TSLA", "Tesla", "US"),
    ("AVGO", "Broadcom", "US"), ("AMD", "AMD", "US"), ("INTC", "Intel", "US"),
    ("MU", "Micron", "US"), ("QCOM", "Qualcomm", "US"), ("ASML", "ASML", "US"),
    ("TSM", "TSMC ADR", "US"), ("MRVL", "Marvell", "US"), ("ARM", "Arm", "US"),
    ("ANET", "Arista", "US"), ("VRT", "Vertiv", "US"), ("SMCI", "Supermicro", "US"),
    ("DELL", "Dell", "US"), ("WDC", "Western Digital", "US"), ("STX", "Seagate", "US"),
    ("PLTR", "Palantir", "US"), ("ORCL", "Oracle", "US"), ("CRM", "Salesforce", "US"),
    ("COST", "Costco", "US"), ("NFLX", "Netflix", "US"), ("LLY", "Eli Lilly", "US"),
    ("JPM", "JPMorgan", "US"), ("COIN", "Coinbase", "US"),
]
BENCH = {"TW": "^TWII", "US": "^GSPC"}


def fetch(sym):
    # curl instead of urllib: the system Python lacks SSL root certificates
    url = f"https://query1.finance.yahoo.com/v8/finance/chart/{sym}?range=6mo&interval=1d"
    try:
        raw = subprocess.run(
            ["curl", "-s", "--max-time", "25", "-H", "User-Agent: Mozilla/5.0", url],
            capture_output=True, timeout=30).stdout
        d = json.loads(raw)
        res = d["chart"]["result"][0]
        q = res["indicators"]["quote"][0]
        rows = [(q["high"][i], q["low"][i], q["close"][i], q["volume"][i])
                for i in range(len(res["timestamp"]))
                if None not in (q["high"][i], q["low"][i], q["close"][i])]
        return sym, rows
    except Exception:
        return sym, None


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
    return 100.0 if avg_l == 0 else 100 - 100 / (1 + avg_g / avg_l)


def score_one(rows, bench_r20):
    if not rows or len(rows) < 65:
        return None
    highs = [r[0] for r in rows]
    closes = [r[2] for r in rows]
    vols = [r[3] or 0 for r in rows]
    c = closes[-1]
    r20 = c / closes[-21] - 1
    r5 = c / closes[-6] - 1
    ma20 = sum(closes[-20:]) / 20
    ma60 = sum(closes[-60:]) / 60
    v5 = sum(vols[-5:]) / 5
    v60 = sum(vols[-60:]) / 60
    vsurge = v5 / v60 if v60 else 0
    hi6 = max(highs)
    nh = c / hi6
    rsi = rsi14(closes) or 50
    accum = sum(1 for i in range(len(closes) - 20, len(closes))
                if closes[i] > closes[i - 1] and vols[i] > v60 * 1.2)
    rs = r20 - bench_r20

    score, ev = 0.0, []
    m = max(0.0, min(r20 * 100, 25.0))
    score += m
    if r20 > 0.03:
        ev.append(f"{r20*100:+.1f}% in 20 sessions ({r5*100:+.1f}% last 5)")
    if c > ma20 > ma60:
        score += 15
        ev.append(f"trend stack intact: price {c:.5g} > MA20 {ma20:.5g} > MA60 {ma60:.5g}")
    elif c > ma20:
        score += 7
        ev.append(f"above MA20 ({ma20:.5g})")
    if vsurge >= 2:
        score += 15
        ev.append(f"volume surge: 5d avg {vsurge:.1f}× the 60d avg")
    elif vsurge >= 1.5:
        score += 10
        ev.append(f"volume building: 5d avg {vsurge:.1f}× the 60d avg")
    elif vsurge >= 1.2:
        score += 5
    if nh >= 0.99:
        score += 15
        ev.append(f"at/above 6-month high ({hi6:.5g}) — breakout zone")
    elif nh >= 0.97:
        score += 10
        ev.append(f"within {(1-nh)*100:.1f}% of the 6-month high ({hi6:.5g})")
    elif nh >= 0.93:
        score += 5
    if 55 <= rsi <= 75:
        score += 10
        ev.append(f"RSI14 {rsi:.0f} — momentum without exhaustion")
    elif 50 <= rsi < 55 or 75 < rsi <= 80:
        score += 5
        if rsi > 75:
            ev.append(f"RSI14 {rsi:.0f} — hot, mind the stretch")
    if accum >= 6:
        score += 10
        ev.append(f"{accum} accumulation days in the last 20 (up on >1.2× volume)")
    elif accum >= 4:
        score += 6
        ev.append(f"{accum} accumulation days in the last 20")
    elif accum >= 2:
        score += 3
    if rs > 0.05:
        score += 10
        ev.append(f"beating the index by {rs*100:.1f}% over 20 sessions")
    elif rs > 0.02:
        score += 6
        ev.append(f"+{rs*100:.1f}% vs index over 20 sessions")
    elif rs > 0:
        score += 3
    return {"score": round(score, 1), "ev": ev, "last": round(c, 2),
            "chg1d": round((closes[-1] / closes[-2] - 1) * 100, 2),
            "spark": [round(x, 2) for x in closes[-30:]]}


t0 = time.time()
syms = [u[0] for u in UNIVERSE] + list(BENCH.values())
with ThreadPoolExecutor(max_workers=8) as ex:
    data = dict(ex.map(fetch, syms))

bench_r20 = {}
for mkt, bsym in BENCH.items():
    rows = data.get(bsym)
    closes = [r[2] for r in rows] if rows else []
    bench_r20[mkt] = closes[-1] / closes[-21] - 1 if len(closes) > 21 else 0.0

picks, failed = [], []
for sym, name, mkt in UNIVERSE:
    res = score_one(data.get(sym), bench_r20[mkt])
    if res is None:
        failed.append(sym)
        continue
    if res["score"] >= MIN_SCORE:
        tv = ("TWSE:" + sym[:-3]) if sym.endswith(".TW") else \
             ("TPEX:" + sym[:-4]) if sym.endswith(".TWO") else sym
        picks.append({"sym": sym, "name": name, "market": mkt, "tv": tv,
                      "newsNote": None, **res})

picks.sort(key=lambda p: -p["score"])
picks = picks[:TOP_N]

out = {
    "generated": time.strftime("%Y-%m-%d %H:%M"),
    "universe": len(UNIVERSE), "failed": failed,
    "bench": {k: round(v * 100, 1) for k, v in bench_r20.items()},
    "criteria": "score ≥ 55 of 100 across: 20d momentum, volume surge, MA stack, 6m-high proximity, RSI 55–75, accumulation days, relative strength vs index",
    "picks": picks,
}
with open(os.path.join(HERE, "discover.js"), "w") as f:
    f.write("// Generated by discover.py — discovery screener. The scheduled scan may fill newsNote fields.\n")
    f.write("const DISCOVER = " + json.dumps(out, ensure_ascii=False) + ";\n")

print(f"screened {len(UNIVERSE)} in {time.time()-t0:.0f}s, {len(failed)} failed, {len(picks)} picks:")
for p in picks:
    print(f"  {p['score']:5.1f}  {p['sym']:<10} {p['name']:<22} {p['last']:>10}  | " + "; ".join(p["ev"][:3]))
