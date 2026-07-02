// Machine-managed next-candle predictions. Strict JSON body — graded by grade_predictions.py.
// stop = invalidation level; support = nearest support below price (POC / structure zone).
// Calibration applied: global active (closeBiasAdj=+1.57, rangeMult=1.3); no perSymbol active.
const PREDICTIONS = {
 "2344": {
  "dir": "up",
  "oPct": 0.3,
  "hPct": 4.6,
  "lPct": -3.9,
  "cPct": 3.1,
  "text": "Stock hit new MSH of NT$225 on June 26, then retraced to 190 — now testing the old double-top/resistance level as support. This is the key pivot: 190 was prior resistance (Jun 2 limit-up), the stock broke above it to 225, and is now back. Winbond fundamentals remain exceptionally strong (Q1 gross margin 53.4%, CEO says Q2 price hikes ≥ Q1, revenue all-time high expected). Model also signals +0.47%. Bull case: 190 holds and the stock grinds toward the 200–210 zone. Bear case: 190 fails, the retracement extends toward 183–180. Invalidation: close below 183 (below support zone).",
  "madeAt": "2026-07-01 22:10",
  "baseDate": "07-01",
  "baseClose": 190.0,
  "stop": 183,
  "support": null
 },
 "2337": {
  "dir": "up",
  "oPct": 0.2,
  "hPct": 4.6,
  "lPct": -4.6,
  "cPct": 2.6,
  "text": "Macronix pulled back hard from its MSH of NT$192 (Jun 23) to 143.5 — a ~25% drawdown in ~1 week. This is the most violent correction of the memory trio and fits the pattern of institutional rotation the stock has shown before (43M shares sold on prior record high). NOR flash fundamentals unchanged. At 143.5 the stock is 8% above the MSL (132.5); a bounce setup is forming. Model also signals +0.66%. Cross-check: Winbond holding 190 is a prerequisite — laggard catch-up only works if the leader is stable. Invalidation: close below 138.",
  "madeAt": "2026-07-01 22:10",
  "baseDate": "07-01",
  "baseClose": 143.5,
  "stop": 138,
  "support": 132.5
 },
 "6770": {
  "dir": "up",
  "oPct": 0.3,
  "hPct": 5.2,
  "lPct": -3.9,
  "cPct": 3.6,
  "text": "Powerchip pulled back from its MSH of NT$89.3 (Jun 25) to 74.3 (-17%), sitting 20% above the MSL (62.1). The Micron P5 acquisition closed in March 2026 (US$1.8B cash) — the hard-asset floor is real, not contingent. Stock is still the highest-beta DDR4-cycle name. Model signals +0.94%, the strongest model call in the trio. Wide range expected; any Taiwan tape strength should have this name leading. Invalidation: close below 69 (would put it within striking distance of the support breakdown zone).",
  "madeAt": "2026-07-01 22:10",
  "baseDate": "07-01",
  "baseClose": 74.3,
  "stop": 69,
  "support": 68.0
 },
 "1307": {
  "dir": "neutral",
  "oPct": 0.0,
  "hPct": 2.6,
  "lPct": -2.6,
  "cPct": 1.6,
  "text": "San Fang gave back the June breakout — from a high of NT$38.3 (Jun 16) it has retraced to 34.3, sitting just above the support zone of 32–33. Structure trend still reads 'up' but the stock is drifting back toward the prior accumulation zone. Model signals +0.09% (essentially flat). The next fundamental catalyst is the June monthly revenue print (TWSE ~July 10). Without a news driver, expect range behavior between 33–36 this week. Calibration adds +1.57% to close estimate. Invalidation: close below 32.5 (below MSL at 32.6 and support zone).",
  "madeAt": "2026-07-01 22:10",
  "baseDate": "07-01",
  "baseClose": 34.3,
  "stop": 32.5,
  "support": 33.0
 },
 "NVDA": {
  "dir": "down",
  "oPct": -0.5,
  "hPct": 2.0,
  "lPct": -5.2,
  "cPct": -0.4,
  "text": "NVDA is slipping 2%+ on July 1 to ~$198.35, breaking below its recent fractal MSL of $199.34 (Jun 9) — a technically bearish signal. The stock is now down ~7% over the past month as the market rotates out of AI mega-caps toward memory chips, CPUs, and semicon equipment. Fundamentals remain excellent (Q1 revenue +85% YoY, Q2 guide $91B, 15× next-year PE, PT $298 consensus Strong Buy) — but rates fears and sector rotation override in the near term. Model signals +0.07% (flat); my read leans slightly bearish given the MSL break. Support zone: $185–$186. Invalidation on the downside: close below $193 extends the correction leg.",
  "madeAt": "2026-07-01 22:10",
  "baseDate": "07-01",
  "baseClose": 198.35,
  "stop": 193,
  "support": 185.66
 },
 "AAPL": {
  "dir": "down",
  "oPct": -0.3,
  "hPct": 2.0,
  "lPct": -3.9,
  "cPct": -0.9,
  "text": "Structure trend reads 'down' — AAPL has been in a declining phase since the MSH of $302.42 (Jun 22). Current $294.3 is holding above MSL $273.75 but momentum is negative. Q2 FY26 was strong ($111B revenue, +17% YoY, iPhone +22%), but the WWDC AI letdown (rebuilt Siri via Google Gemini) and the Cook→Ternus CEO transition (effective Sep 1) create a succession discount. Model also signals -0.12%. Q3 earnings (late July) are the next catalyst. Calibration adds +1.57% to raw, landing at -0.9% net — still directionally bearish. Invalidation: close below $288 (under the post-WWDC stabilization zone).",
  "madeAt": "2026-07-01 22:10",
  "baseDate": "07-01",
  "baseClose": 294.3,
  "stop": 288,
  "support": 273.75
 },
 "SPCX": {
  "dir": "up",
  "oPct": 0.5,
  "hPct": 6.5,
  "lPct": -5.2,
  "cPct": 3.6,
  "text": "SpaceX is 19 sessions into its post-IPO life, consolidating between the day-1 stabilization floor ($150) and the day-1 intraday high ($176.5). Current $156.57 sits above MSL $147.11 (Jun 23) — the floor is holding. Key upcoming catalyst: analyst initiations as the quiet period ends (~July 22). History of mega-IPOs: the first batch of initiations is usually a volatility event, and Morgan Stanley (deal manager) typically initiates with an Overweight. The complex lockup (early investor unlock after Q2 earnings ~late July/early Aug) adds supply risk around that period. Flow/FOMO bid still supports the upside. Invalidation: close below $147 (MSL and approaching the IPO stabilization zone).",
  "madeAt": "2026-07-01 22:10",
  "baseDate": "07-01",
  "baseClose": 156.57,
  "stop": 147,
  "support": 150.0
 }
};
