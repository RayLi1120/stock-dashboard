// Machine-managed next-candle predictions. Strict JSON body — graded by grade_predictions.py.
// stop = invalidation level; support = nearest support below price (POC / structure zone).
// Calibration applied: global active (closeBiasAdj=+0.54, rangeMult=1.15); no perSymbol active.
const PREDICTIONS = {
 "2344": {
  "dir": "neutral",
  "oPct": 0.0,
  "hPct": 4.02,
  "lPct": -4.02,
  "cPct": 0.84,
  "text": "Winbond broke below the 190 support (old double-top/breakout level) that was the key pivot last week, closing 07-06 at 183.0 — fully back inside the prior consolidation range. Fundamentals unchanged and strong (record 53.4% Q1 gross margin, DDR4 shortage still 19-20%, contract prices +58-63% QoQ), but there's no real volume support until the 152-160 zone from the June breakout base — this is thin air. Model signals a mild bounce (+0.68%). Q2 earnings (Jul 30) is the next real catalyst; until then expect chop. Invalidation: close below 178 confirms the breakdown extends toward the June base.",
  "madeAt": "2026-07-07 23:10",
  "baseDate": "07-06",
  "baseClose": 183.0,
  "stop": 178,
  "support": null
 },
 "2337": {
  "dir": "up",
  "oPct": 0.3,
  "hPct": 5.75,
  "lPct": -4.37,
  "cPct": 2.54,
  "text": "Macronix closed 07-06 at 144.5 (+1.4%), the first real up-day since the violent -25% drawdown from the 192 MSH. June consolidated revenue came in at NT$6.956B (+11.2% MoM, +216% YoY) — the strongest confirmation yet that the NOR/legacy-DRAM cycle is intact at the P&L level, not just in the stock chart. Sitting ~9% above the MSL (132.5), a bounce setup is building. Model also signals a rise (+2.37%), the strongest model call of the trio. Cross-check: needs Winbond to stabilize too (laggard-catch-up thesis). Invalidation: close below 137 (threatens the MSL).",
  "madeAt": "2026-07-07 23:10",
  "baseDate": "07-06",
  "baseClose": 144.5,
  "stop": 137,
  "support": 132.5
 },
 "6770": {
  "dir": "up",
  "oPct": 0.2,
  "hPct": 6.32,
  "lPct": -4.6,
  "cPct": 2.34,
  "text": "Powerchip closed 07-06 at 72.6 (-1.09%), still 17% above the MSL (62.1) after retracing from the 89.3 MSH. PSMC just posted its first profitable quarter after a 10-quarter loss streak, with the Micron/Tongluo alliance credited as the turnaround driver — a second fab (~270k sq ft cleanroom) is slated to start construction by end-FY2026. This converts the deal from a balance-sheet catalyst into a P&L one. Model signals +1.6% (rise). Still the highest-beta name in the trio — expect overshoot in both directions. Invalidation: close below 68 (support-zone breakdown).",
  "madeAt": "2026-07-07 23:10",
  "baseDate": "07-06",
  "baseClose": 72.6,
  "stop": 68,
  "support": 68.0
 },
 "1307": {
  "dir": "down",
  "oPct": -0.3,
  "hPct": 2.3,
  "lPct": -3.22,
  "cPct": -0.46,
  "text": "San Fang fell 7.4% on 07-06 to 33.15, breaking below the Jun 30 MSL (33.85) for the first time since the June breakout — a technical trend-flip risk. No company-specific news found; the move looks like broad TW market volatility (TAIEX has had multiple >3% single-day swings since late June) rather than a fundamental shift. Model reads essentially flat (-0.09%). Next real catalyst is the Jul 10 monthly revenue print. Without it, lean with the technical break: support at 32.35 (top of next volume-profile zone), invalidation below 32.0.",
  "madeAt": "2026-07-07 23:10",
  "baseDate": "07-06",
  "baseClose": 33.15,
  "stop": 32.0,
  "support": 32.35
 },
 "NVDA": {
  "dir": "neutral",
  "oPct": 0.2,
  "hPct": 2.64,
  "lPct": -2.64,
  "cPct": 0.94,
  "text": "NVDA closed 07-07 at 196.93 (+0.71%), stabilizing back above the 189.8 MSL after the Jul 1 breakdown. Nvidia denied a report that its Kyber NVL144 platform is delayed to 2028, and the stock popped ~1% on the denial — removing one concrete bear-case data point. Still, NVDA is the worst performer in its own chip group in 2026 (+5% YTD vs S&P +10%), and Goldman calls the 21.7x forward PE 'compelling' after the correction. Model reads flat (-0.0%). The real catalyst is the Jul 28-29 FOMC decision — until then expect range-bound chop between the MSL and the $199 reclaim level. Invalidation: close below 192.",
  "madeAt": "2026-07-07 23:10",
  "baseDate": "07-07",
  "baseClose": 196.93,
  "stop": 192,
  "support": 189.8
 },
 "AAPL": {
  "dir": "up",
  "oPct": 0.3,
  "hPct": 3.22,
  "lPct": -2.3,
  "cPct": 1.54,
  "text": "AAPL closed 07-07 at 310.66, having fully round-tripped the post-WWDC dip (~$290) and now trading above the pre-WWDC MSH ($302.42) — a sharp sentiment reversal in under a month. Maxim raised its PT from $310 to $350 (Buy) post-WWDC; consensus is Moderate Buy (23 Strong Buy/3 Moderate Buy/15 Hold/1 Strong Sell of 42 analysts). Apple also dropped its 7-year 'net cash neutral' policy, freeing incoming CEO Ternus to invest more aggressively in AI infrastructure and M&A — read as a bullish capital-allocation signal. Model reads flat (+0.09%). Q3 earnings (Jul 28, first Ternus-adjacent print) is the next test. Invalidation: close below 302 (the old MSH, now a support pivot).",
  "madeAt": "2026-07-07 23:10",
  "baseDate": "07-07",
  "baseClose": 310.66,
  "stop": 302,
  "support": 295.0
 },
 "SPCX": {
  "dir": "neutral",
  "oPct": 0.3,
  "hPct": 6.32,
  "lPct": -5.17,
  "cPct": 1.04,
  "text": "SPCX closed 07-07 at 149.47 (-6.83%), just above the Jun 23 MSL (147.11), on a day that should have been unambiguously bullish: it joined the Nasdaq-100 (forcing ~$4.3B of QQQ buying, ~$27B total passive flow) and its quiet period ended with four bank initiations — Goldman Sachs (Buy, PT $205), Deutsche Bank (Buy, PT $255), Raymond James (Strong Buy), Macquarie (Outperform, PT $250), consensus avg PT $188 vs. the $149 close. It fell anyway: the public float is only ~3-5% of shares, so passive inflows are small relative to the news cycle, and lockup-expiry fears (first 20% unlock after Q2 earnings, ~late Jul/early Aug) are dominating flow. This is a flow/positioning story, not a fundamentals one — the analyst PT gap (+26% to consensus) is real but won't matter until the lockup overhang clears. Invalidation: close below 145 (MSL breakdown).",
  "madeAt": "2026-07-07 23:10",
  "baseDate": "07-07",
  "baseClose": 149.47,
  "stop": 145,
  "support": 147.11
 }
};
