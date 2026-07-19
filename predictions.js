// Machine-managed next-candle predictions. Strict JSON body — graded by grade_predictions.py.
// stop = invalidation level; support = nearest support below price (POC / structure zone).
// Calibration applied per-symbol (all 7 active): closeBiasAdj added to cPct, hPct/lPct scaled by rangeMult.
const PREDICTIONS = {
 "2344": {
  "dir": "down",
  "oPct": -1.5,
  "hPct": 3.45,
  "lPct": -5.75,
  "cPct": -2.08,
  "text": "Winbond closed 07-17 at 155.0 (-9.87%, at the session low) — swept down in the TAIEX's record -6.47% crash after TSMC's C.C. Wei said 'only AI-related mature process nodes should be experiencing tight supply,' gutting the mature-node/memory shortage narrative in one sentence. A record NT$189B single-day foreign outflow means Monday likely sees margin-call follow-through before any stabilization; closing at the dead low is the bearish tell. The fundamental case hasn't changed (Q3 DDR4 quotes still reported up to +50% QoQ, Jul 30 earnings the referendum on the CEO's price-hike guidance), but flow beats fundamentals on panic weeks. Model disagrees (reads +0.31% rise; its OOS dir accuracy here is 54%, my own 2344 record is 33%, so neither of us has an edge — I side with the flow). Invalidation: a close back above 165 (the old July low / broken MSL) kills the bear case; below 150 opens air to the 136.5 zone top.",
  "madeAt": "2026-07-19 16:17",
  "baseDate": "07-17",
  "baseClose": 155.0,
  "stop": 150,
  "support": 136.5
 },
 "2337": {
  "dir": "down",
  "oPct": -1.0,
  "hPct": 3.45,
  "lPct": -5.18,
  "cPct": -1.61,
  "text": "Macronix closed 07-17 at 125.0 (-8.42%, low 124) — decisively below the 135 MSL it had reclaimed the prior week, the cleanest technical breakdown of the trio. The whole recovery thesis (wick-and-reclaim, laggard catch-up) is now invalidated; 132.5-136.5 flips back to resistance. Record foreign selling across the tape and Wei's mature-node comment give no reason to expect an immediate reversal; NOR pricing fundamentals (+216% YoY June revenue) are real but were equally real on the way down. Model agrees: -2.17% decline, its most confident bearish call in the group (OOS dir 62%). No meaningful volume support below until the ancient 31-42 base, so support is null — flow and round numbers are the only floors. Invalidation: a close back above 136.5 (top of the broken MSL/resistance band) restores the recovery case; below 120 confirms free-fall.",
  "madeAt": "2026-07-19 16:17",
  "baseDate": "07-17",
  "baseClose": 125.0,
  "stop": 120,
  "support": null
 },
 "6770": {
  "dir": "down",
  "oPct": -1.0,
  "hPct": 4.0,
  "lPct": -5.0,
  "cPct": -1.56,
  "text": "Powerchip closed 07-17 at 68.9 (-9.93%, at the low) — foreign investors dumped 115,284 lots, the single most-sold name on the TWSE, three days after its own earnings call was the sector's upside catalyst (GM 28%, a 3.5-year high; NT$3.29B NPAT; Frank Huang projecting 40% mature-foundry GMs; domestic brokers raising targets to NT$80). Wei's comment lands hardest here because Powerchip IS the mature-node foundry story — the two chairmen are now in direct public disagreement and the tape voted for Wei. Thursday's 79.5 spike on 444M shares now reads as blow-off volume. Price is back inside the 66.5-70.7 zone that has caught every dip this month; the 63.4 MSL (07-14 flush low) is the line. Calibration has me -0.56 biased-bullish here, which I'm letting pull the call lower rather than fighting it. Model agrees: -0.96% decline. Invalidation: below 63 breaks the July floor; back above 75 says the crash was the flush and the earnings story reasserts.",
  "madeAt": "2026-07-19 16:17",
  "baseDate": "07-17",
  "baseClose": 68.9,
  "stop": 63,
  "support": 66.5
 },
 "1307": {
  "dir": "neutral",
  "oPct": -0.2,
  "hPct": 1.02,
  "lPct": -1.02,
  "cPct": 0.0,
  "text": "San Fang closed 07-17 at 32.05 (-1.99%, low 31.9) — a contained dip on the worst TAIEX day ever recorded, exactly the low-beta behavior that keeps it on this list. The long-pending June revenue print finally resolved: NT$852.9M, -2.68% MoM but +11.11% YoY, the second straight month of accelerating YoY growth — solid, not spectacular, and it didn't move the stock. Price remains wedged between the 30.65-31.85 support zone and the 31.95-33.0 resistance band, where it has spent three weeks. My 1307 calibration is the best on the card (83% dir, 100% range) precisely because I keep calling it neutral and tight — no reason to change. Model reads -0.31%, effectively flat. Invalidation: below 31.5 confirms the trend flip; above 34.0 reclaims the broken MSL.",
  "madeAt": "2026-07-19 16:17",
  "baseDate": "07-17",
  "baseClose": 32.05,
  "stop": 31.5,
  "support": 31.85
 },
 "NVDA": {
  "dir": "up",
  "oPct": 0.2,
  "hPct": 2.3,
  "lPct": -1.73,
  "cPct": 0.56,
  "text": "NVDA closed 07-17 at 202.81 (-2.21%, low 197.97) — a sympathy drawdown in the post-TSMC-call semi rout on a quad-witching Friday, not a story change: the low tagged the 188.9-197.6 zone top almost to the tick and bounced. The week's actual news was constructive — Beijing cleared Alibaba/ByteDance to order H200s (guidance embeds zero China revenue, so any volume is upside), and TSMC's beat-and-capex-raise is direct supply-chain confirmation for Blackwell/Rubin demand. Wei's mature-node caution explicitly exempted AI. With the panic concentrated in mature-node/memory names, I read Friday as forced de-grossing, not distribution, and lean up for Monday; calibration drags the call down -0.24 for my chronic over-optimism here (33% dir record — respect it, hence the modest size). Model is dead flat (-0.04%). Invalidation: a close below 198 (zone top) turns this into a failed-breakout short setup; 214 clears the MSH.",
  "madeAt": "2026-07-19 16:17",
  "baseDate": "07-17",
  "baseClose": 202.81,
  "stop": 197,
  "support": 197.63
 },
 "AAPL": {
  "dir": "up",
  "oPct": 0.1,
  "hPct": 1.73,
  "lPct": -1.38,
  "cPct": 0.59,
  "text": "AAPL closed 07-17 at 333.74 (+0.14%, high 334.99) — the only green megacap through the semi rout, capping a +15% July that's tracking its best month in ~4 years. The rally has three legs: China's regulator approved Apple Intelligence (Baidu/Alibaba models), iOS 27 public betas with the Siri AI beta landed well (Munster: 'like having a new phone'), and money fleeing AI-capex names is parking in the one megacap that never overspent — Citi $365, HSBC seeing another 10%. Five straight up days into record territory argues for a pause, but this exact overbought argument has been wrong three cycles running and calibration confirms I under-call this name (+0.09 adj). Model agrees: +0.38% rise, gap='continue'. Staying long-biased into the Jul 30 earnings with tightened invalidation: a close below 318 (the 07-15 breakout base) ends the momentum leg; 335 is the extension trigger.",
  "madeAt": "2026-07-19 16:17",
  "baseDate": "07-17",
  "baseClose": 333.74,
  "stop": 318,
  "support": 305.0
 },
 "SPCX": {
  "dir": "down",
  "oPct": -0.5,
  "hPct": 4.55,
  "lPct": -6.5,
  "cPct": -1.55,
  "text": "SPCX closed 07-17 at 123.99 (-5.43%, low 122.12) — five straight down days, a first-ever close below the $135 IPO price on 07-16, then another -5% on the Starship launch delay. Down ~45% from the $225 post-IPO high with no established support below: every IPO buyer is now underwater and the Aug 6 earnings + first lockup (~20% of insiders, +10% conditional) double event is three weeks out. Bear focus has shifted to Starlink ARPU erosion ($99 FY23 → $66 Q1'26). The two-sided risks: Nasdaq-100 inclusion forces ~$4.3B of passive buying against a ~3% float, and Street targets are far above spot (MS $300, RJ $800, consensus ~$240) — so squeezes can be violent, hence the wide range (rangeMult 1.3 after 33% range hits). Base case remains lower until the tape proves otherwise. Invalidation: a close back above 135 (IPO price reclaim) flips me neutral; below 120 opens the low-110s with nothing but round numbers.",
  "madeAt": "2026-07-19 16:17",
  "baseDate": "07-17",
  "baseClose": 123.99,
  "stop": 120,
  "support": null
 }
};
