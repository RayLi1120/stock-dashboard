// Hand-written analysis & next-candle interpretation — Claude, 2026-07-10.
// Prediction fields are % offsets from the latest close (o/h/l/c of the guessed next candle).
const ANALYSIS = {
 "2344": {
  bullets: [
   "<b>Thesis:</b> specialty DDR3/DDR4 + NOR flash — direct beneficiary of Micron/SK hynix diverting capacity to HBM/DDR5. Pricing keeps accelerating: Q3 DRAM contracts broadly guided +20-30%; DIGITIMES/TrendForce report DDR4 8Gb Q3 contract quotes up to 50% higher QoQ on an enterprise-SSD-driven shortage; NOR contract prices +100% in 1H26 and still rising.",
   "<b>Earnings confirmed:</b> June consolidated revenue NT$20.597B, +189.88% YoY — a 7th straight monthly record; H1 2026 revenue NT$98.096B, +139.2% YoY. Q1 was already a record (GM 53.4%, EPS NT$2.25); CEO said Q2 price hikes would be 'not smaller than Q1.' Kaohsiung fab doubles to 24,000 wafers/month by year-end.",
   "<b>Street:</b> Morgan Stanley target NT$222 (Jun 2); stock briefly exceeded it (225 on Jun 26), gave back the entire MS-note rally, then reversed hard on Jul 9.",
   "<b>Tape:</b> 225 MSH (Jun 26) → 168.5 (Jul 8, -3.16%, low 165) → 176.5 (Jul 9, +4.75%, high 184, low 170) — a sharp one-day reversal closing back near the 07-07 gap-down open, even as TAIEX itself stayed weak (-0.83% the same session, its 5th straight down day).",
   "<b>Market closed:</b> Taiwan's exchange was shut all of Jul 10 for Typhoon Bavi — no new session to confirm follow-through on the Jul 9 reversal yet.",
   "<b>Watch:</b> Q2 earnings Jul 30 (key test of CEO's price-hike guidance, now backed by the June print); a close back below 165 negates the reversal; above 184 extends it.",
   "<b>Risk:</b> crowded-trade unwind can overshoot fundamentals for weeks; Hormuz shipping has ground to a near-halt again (Jul 9-10 US-Iran exchanges) and the Jul 28-29 FOMC looms.",
  ] },
 "2337": {
  bullets: [
   "<b>Thesis:</b> NOR flash / ROM pure-play — NOR pricing rides the same shortage dynamics as legacy DRAM; Morgan Stanley Overweight (Jun 2).",
   "<b>Tape:</b> 192 MSH (Jun 23) → 138.5 (Jul 8, -0.36%, wicked to 134.0 intraday below the 135 MSL before buyers reclaimed it) → 143.5 (Jul 9, +3.61%, high 148, low 139.5) — the follow-through confirms the wick-and-reclaim was the more bullish tell, now closing clear of the MSL for the first time in three sessions.",
   "<b>Confirmation:</b> June consolidated revenue NT$6.956B, +11.2% MoM, +216% YoY, H1 +128.8% YoY — the fundamental de-risk is done; the fight is now purely technical, and technicals just turned in this name's favor.",
   "<b>Relative strength:</b> best performer of the trio again on Jul 9 even as TAIEX fell 0.83% — the laggard-catch-up trade is playing out on its own, no longer waiting for Winbond to lead.",
   "<b>Market closed:</b> Taiwan's exchange was shut all of Jul 10 for Typhoon Bavi — no new session since the Jul 9 close.",
   "<b>Risk:</b> invalidation moved up from the old 133 wick-based level to a close below 135 itself, now that price has cleared it with room. Lower liquidity than 2344 amplifies gap risk both ways.",
  ] },
 "6770": {
  bullets: [
   "<b>Thesis:</b> foundry + memory hybrid; rides the DDR4 cycle plus a company-specific catalyst.",
   "<b>Catalyst confirmed and accelerating:</b> June revenue NT$6.474B (+68.8% YoY, 47-month high); Q2 revenue NT$17.29B (+27.4% QoQ, +53.3% YoY); H1 NT$30.863B (+37.8% YoY). Management said price-hike benefits only start reflecting from June — implying H2 accelerates further. Second fab (~270k sq ft cleanroom) construction slated to start by end-FY2026.",
   "<b>Tape:</b> 89.3 MSH (Jun 25) → 71.2 (Jul 8, +1.57%, bounced off 67.1 intraday inside the 66.5-70.7 zone) → 71.1 (Jul 9, -0.14%) — a quiet consolidation day holding the reclaimed zone rather than extending.",
   "<b>Calibration flag:</b> my last 5 calls on this name have run +1.06% too bullish on average, the worst bias on the list — dialing back conviction even though the fundamental case remains the strongest of the trio.",
   "<b>Character:</b> most retail-driven of the three — overshoots both ways; highest-beta expression of the DDR4 trade, but the profit inflection plus record revenue gives it the best fundamental cushion on the list right now.",
   "<b>Risk:</b> a close below 66 breaks the zone; without the sector stabilizing, relative strength alone won't hold it up. Taiwan's exchange was shut Jul 10 for Typhoon Bavi, no new session yet.",
  ] },
 "NVDA": {
  bullets: [
   "<b>Fundamentals:</b> Q1 FY27 revenue $82B +85% YoY (data center $75.2B +92%), Q2 guide $91B; Blackwell sold out, Vera Rubin (3nm) in full production at TSMC.",
   "<b>Breakout confirmed:</b> Jul 10 closed 210.76 (+3.93%, high 210.88, low 201.92) — a clean close at the session high, punching through most of the 208.8-216.8 resistance band toward the 213.99 MSH, after Jul 9's round-trip session (gapped to 204.46 on the China-approval report, faded to 198.97, closed flat).",
   "<b>Three catalysts stacked on Jul 10:</b> SK hynix's US ADR listing landed well, de-risking the broader memory/AI trade; Beijing reportedly moving toward conditional approval for Alibaba/ByteDance/DeepSeek to buy limited H200 volumes (a channel that generated zero revenue before); NVDA committed ~$500M to Australian cloud-infra startup Firmus Technologies as the largest investor in its $2B raise.",
   "<b>Rotation reversal:</b> the 'black sheep' setup (+5% YTD vs AMD +171%, Micron +305%) is inverting as Korea's memory complex stabilizes and money looks for the underowned AI mega-cap again. Aug 26 Q2 FY27 earnings ($91B guide) is the next hard test.",
   "<b>Capital return:</b> dividend ×25 + $80B buyback authorization + ≥50% FCF pledge — a structural floor under dips.",
   "<b>Risk:</b> Jul 28-29 FOMC and the reignited Hormuz standoff (US-Iran exchanges resumed Jul 9-10, shipping traffic near a halt) — highest-multiple names take the first hit on hawkish or geopolitical surprises; close below 204 undoes the Jul 10 breakout.",
  ] },
 "1307": {
  bullets: [
   "<b>What it is:</b> San Fang Chemical 三芳化學 — PU synthetic leather, films and elastic fibers for footwear and apparel supply chains (Nike-adjacent sporting-goods materials). A traditional-materials name, not a tech story.",
   "<b>Role in your list:</b> the diversifier. Still range-bound inside its support zone rather than trending either way this week.",
   "<b>Tape:</b> MSL break at 33.85 (Jul 6, -7.4%) → 32.0 (Jul 8, -3.03%, low 31.8) → 32.15 (Jul 9, +0.47%, high 32.3, low 31.65) — a quiet green day still inside the 30.9-32.35 zone, low held well above the 31.5 stop.",
   "<b>Coverage gap:</b> thin analyst/news coverage — technicals and monthly revenue prints are the primary signals. The flagged Jul 10 June-revenue print still isn't confirmed in any source I can check; April's +8.54% YoY remains the last verified figure. Taiwan's exchange was shut Jul 10 for Typhoon Bavi, which may also be delaying attention to any filing.",
   "<b>Watch:</b> the still-pending June-revenue print is the binary: a strong number likely reclaims 32.35-33.5; a weak one opens 30.9-32.3 fully. Below 31.5 the trend flip is confirmed; above 34.0 the MSL is reclaimed.",
  ] },
 "AAPL": {
  bullets: [
   "<b>Leadership transition:</b> Cook → Ternus effective Sep 1. Ternus gave his first extended AI comments this week: 'technology exists to serve the product' — a deliberately measured, un-hyped framing ahead of the handover.",
   "<b>Capital allocation:</b> the 7-year 'net cash neutral' policy was dropped Jul 2 — Ternus gets a war chest for AI infrastructure and M&A; read as bullish.",
   "<b>Tape:</b> the Broadcom-deal momentum run (post-WWDC dip fully round-tripped) hit 316.22 on Jul 9 (+0.42%, 4th straight up day), then closed 315.14 on Jul 10 (-0.34%, high 316.91) — the first down close in five sessions, a shallow digestion pause rather than a reversal, still ~4.2% above the old 302.42 MSH pivot. Consensus Moderate Buy.",
   "<b>Q3 earnings Jul 30 (confirmed, was est. Jul 28):</b> one of Cook's final calls; iPhone demand and AI-monetization commentary are the tests of the re-rating.",
   "<b>Structure:</b> old 'down' trend invalidated; 302.42 is now the support pivot / invalidation line.",
   "<b>Risk:</b> the rally is a sentiment trade into a real test — FOMC Jul 28-29 next door to earnings, and the AI story is still narrative, not numbers.",
  ] },
 "SPCX": {
  bullets: [
   "<b>What it is:</b> the world's largest IPO — June 12, 2026: $135/share, $75B raised, $1.75T valuation. Now 145.34 (Jul 10), essentially back at the all-time-low zone.",
   "<b>Failed reversal:</b> the Jul 9 bounce (+3.28% on the Falcon-9 record-reuse/Starlink-launch news, reclaiming the 147.11 MSL) gave the entire move back on Jul 10 (-4.48%, low 145.25) — closing right on top of Jul 8's all-time-low wick (145.20). No new negative headline behind it; the catalyst simply faded.",
   "<b>Unresolved fundamental crack:</b> the Colossus 2 data center still faces a court-ordered shutdown of unpermitted gas turbines — litigation that threatens portions of the $45B Anthropic compute contract.",
   "<b>The business:</b> Starlink (the only profitable segment) reportedly at 10M subscribers, ~2× since IPO, and H1 2026 satellite deployments (1,589) up from 1,489 a year earlier — subscriber and launch-cadence momentum both intact, though it isn't currently showing up in the share price.",
   "<b>Street:</b> GS $205 / DB $255 / RJ Strong Buy / Macquarie $250 (avg ~$188, +29% to spot) — the widening gap between Street targets and the tape reflects how much the Aug 6 earnings + lockup double-event is dominating flow right now.",
   "<b>Levels:</b> $135 IPO price is the hard floor; 143 is the near-term line — losing it opens fresh air. 150 (the day-one open) is the reclaim level that would restore the post-bounce bull case. Musk key-man risk and 'Trump Account' share-gift supply add noise.",
  ] },
};
const MACRO_NOTE = "Taiwan's exchange was closed all of Jul 10 for Typhoon Bavi, so the newest print for all four TW names is still Jul 9 — and it was a strong one for the memory trio: Winbond +4.75% and Macronix +3.61% both reversed hard even as TAIEX itself fell another 0.83% to 45,354.61 (its 5th straight down session, -3.05% for the week). Macronix's move is the cleaner technical signal, a confirmed follow-through on Wednesday's stop-run-and-reclaim; Powerchip held its 66.5-70.7 zone but didn't extend. Fundamentals keep accelerating regardless: Q3 DRAM contracts broadly guided +20-30%, and DDR4 8Gb Q3 quotes are up to 50% higher QoQ on an enterprise-SSD-driven shortage. TSMC's Jul 16 earnings (Citi's TW-listed PT now NT$3,800) remains the likely circuit-breaker for the wider rotation. San Fang's flagged Jun-revenue print still isn't confirmed anywhere I can verify — it may be delayed, or simply not yet indexed; treat that catalyst as still pending. Middle East risk re-escalated Jul 9-10: US-Iran exchanges resumed and Hormuz shipping traffic has ground to a near-halt again after a brief reopening earlier in the month, adding a fresh macro wildcard ahead of the Jul 28-29 FOMC. US-side: NVDA broke out cleanly on Jul 10 (+3.93%) on a stack of catalysts — a well-received SK hynix US listing, a reported China H200-approval step forward, and a $500M NVDA investment in Firmus Technologies — while AAPL took its first down day in five (a shallow pause, not a reversal) on Ternus's first extended AI comments. SPCX gave back all of Wednesday's bounce and closed right back at its all-time-low wick, the launch-news catalyst having faded with nothing new behind the reversal.";
