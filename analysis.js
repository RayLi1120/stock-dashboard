// Hand-written analysis & next-candle interpretation — Claude, 2026-07-09.
// Prediction fields are % offsets from the latest close (o/h/l/c of the guessed next candle).
const ANALYSIS = {
 "2344": {
  bullets: [
   "<b>Thesis:</b> specialty DDR3/DDR4 + NOR flash — direct beneficiary of Micron/SK hynix diverting capacity to HBM/DDR5. Pricing keeps accelerating: ADATA sees Q3 DRAM contract +20-30%; analysts model Winbond ASPs +50%/+30%/+10% across Q2-Q4; NOR contract prices +100% in 1H26 and still rising (TrendForce).",
   "<b>Earnings confirmed:</b> June consolidated revenue NT$20.597B, +189.88% YoY — a 7th straight monthly record; H1 2026 revenue NT$98.096B, +139.2% YoY. Q1 was already a record (GM 53.4%, EPS NT$2.25); CEO said Q2 price hikes would be 'not smaller than Q1.' Kaohsiung fab doubles to 24,000 wafers/month by year-end.",
   "<b>Street:</b> Morgan Stanley target NT$222 (Jun 2); stock briefly exceeded it (225 on Jun 26) and has now given back the entire MS-note rally despite revenue printing above plan.",
   "<b>Tape:</b> NT$115 (Jan) → 225 MSH (Jun 26) → 174 (Jul 7, -4.92%) → 168.5 (Jul 8, -3.16%, low 165) — third straight down day on the same day the record revenue hit. No volume shelf until the 152-160 June breakout base.",
   "<b>Cross-current:</b> Korea's memory complex (Samsung, SK hynix) rebounded hard Jul 9 (KOSPI +4-5.8%) on a 7x-oversubscribed SK hynix ADR, but TAIEX itself only closed -0.42% the same session — the relief rally hadn't reached Taipei as of the last print.",
   "<b>Watch:</b> Q2 earnings Jul 30 (key test of CEO's price-hike guidance, now backed by the June print); whether 160-166 attracts buyers; a close back above 184 negates the breakdown.",
   "<b>Risk:</b> crowded-trade unwind can overshoot fundamentals for weeks; hawkish Fed (9 of 19 officials see a 2026 hike) plus renewed Hormuz oil spike pressure the whole risk tape.",
  ] },
 "2337": {
  bullets: [
   "<b>Thesis:</b> NOR flash / ROM pure-play — NOR pricing rides the same shortage dynamics as legacy DRAM; Morgan Stanley Overweight (Jun 2).",
   "<b>Tape:</b> 192 MSH (Jun 23) → 139.0 (Jul 7, -3.81%) → 138.5 (Jul 8, -0.36%). The Jul 8 session wicked to 134.0 intraday — below the 135.0 MSL — before buyers reclaimed it by the close, a stop-run-and-recover that reads more bullish than a clean hold.",
   "<b>Confirmation:</b> June consolidated revenue NT$6.956B, +11.2% MoM, +216% YoY, H1 +128.8% YoY — the fundamental de-risk is done; the fight is now purely technical.",
   "<b>Relative play:</b> the laggard-catch-up trade needs Winbond to stabilize first, but Korea's Jul 9 memory rebound (KOSPI +4-5.8%, SK hynix +6.8-8%) is a tailwind that should reach here before it reaches Winbond.",
   "<b>Risk:</b> since the 07-08 low already pierced 135 intraday, treat a close below 133 (under the wick) as the real distribution signal, not an intraday touch of 135. Lower liquidity than 2344 amplifies gap risk both ways.",
  ] },
 "6770": {
  bullets: [
   "<b>Thesis:</b> foundry + memory hybrid; rides the DDR4 cycle plus a company-specific catalyst.",
   "<b>Catalyst confirmed and accelerating:</b> June revenue NT$6.474B (+68.8% YoY, 47-month high); Q2 revenue NT$17.29B (+27.4% QoQ, +53.3% YoY); H1 NT$30.863B (+37.8% YoY). Management said price-hike benefits only start reflecting from June — implying H2 accelerates further. Second fab (~270k sq ft cleanroom) construction slated to start by end-FY2026.",
   "<b>Tape:</b> 89.3 MSH (Jun 25) → 70.1 (Jul 7) → 71.2 (Jul 8, +1.57%), after dipping to 67.1 intraday inside the 66.5-70.7 volume zone — the only one of the trio to bounce, now confirmed by the strongest revenue print of the three.",
   "<b>Character:</b> most retail-driven of the three — overshoots both ways; highest-beta expression of the DDR4 trade, but the profit inflection plus record revenue gives it the best fundamental cushion on the list right now.",
   "<b>Risk:</b> a close below 66 breaks the zone; without the sector stabilizing, relative strength alone won't hold it up.",
  ] },
 "NVDA": {
  bullets: [
   "<b>Fundamentals:</b> Q1 FY27 revenue $82B +85% YoY (data center $75.2B +92%), Q2 guide $91B; Blackwell sold out, Vera Rubin (3nm) in full production at TSMC. Now trading ~18x forward, cheapest since 2019, after losing ~$1T of market cap since the May 14 high.",
   "<b>China reopens a door:</b> Jul 9 reports say China may allow Alibaba/ByteDance/DeepSeek to buy limited H200 volumes — stock gapped to 204.46, faded to 198.97, closed 203.80 (-0.16%), a round-trip that shows the market isn't fully pricing this in yet.",
   "<b>Technicals:</b> reclaimed $200 on Jul 8 (+3.7% to 204.21), escaping the 188-196 chop zone; Jul 9 consolidated just under it. Next test is the 208.8-216.8 resistance band under the 213.99 MSH.",
   "<b>Rotation reversal:</b> the 'black sheep' setup (+5% YTD vs AMD +171%, Micron +305%) is inverting as Korea's memory complex rebounds (Jul 9) and money looks for the underowned AI mega-cap again. July = all four hyperscalers report; Microsoft's FY27 capex guide is the key bull catalyst.",
   "<b>Capital return:</b> dividend ×25 + $80B buyback authorization + ≥50% FCF pledge, reiterated again Jul 9 — a structural floor under dips.",
   "<b>Risk:</b> Jul 28-29 FOMC (9 of 19 see a 2026 hike) and renewed Hormuz oil spike — highest-multiple names take the first hit on hawkish surprises; close below 196 re-enters the chop.",
  ] },
 "1307": {
  bullets: [
   "<b>What it is:</b> San Fang Chemical 三芳化學 — PU synthetic leather, films and elastic fibers for footwear and apparel supply chains (Nike-adjacent sporting-goods materials). A traditional-materials name, not a tech story.",
   "<b>Role in your list:</b> the diversifier — and it worked on the rout day (-0.45% while tech crashed). But it's breaking down on its own timeline instead.",
   "<b>Tape:</b> MSH 38.3 (Jun 16) → MSL break at 33.85 (Jul 6, -7.4%) → 33.0 (Jul 7) → 32.0 (Jul 8, -3.03%, low 31.8) — now inside the 30.9-32.35 support zone rather than clean below it; the low held above the 31.5 stop.",
   "<b>Coverage gap:</b> thin analyst/news coverage — technicals and monthly revenue prints are the primary signals. April's last reported print was +8.54% YoY.",
   "<b>Watch:</b> Jul 10 June-revenue print (tomorrow) is the binary: a strong number reclaims 32.35-33.5; a weak one opens 30.9-32.3 fully. Below 31.5 the trend flip is confirmed; above 34.0 the MSL is reclaimed.",
  ] },
 "AAPL": {
  bullets: [
   "<b>Leadership transition:</b> Cook → Ternus effective Sep 1. Cook's final act (Jul 8): a $30B+ multi-year US chip-manufacturing deal with Broadcom (15B+ US-made chips, $1.5B Fort Collins expansion) — the largest domestic manufacturing commitment in Apple history.",
   "<b>Capital allocation:</b> the 7-year 'net cash neutral' policy was dropped Jul 2 — Ternus gets a war chest for AI infrastructure and M&A; read as bullish.",
   "<b>Tape:</b> post-WWDC dip ($301→$290) fully round-tripped and extended — 313.89 (Jul 8) → 314.71 (Jul 9, +0.42%), a third straight up day and ~4% above the old 302.42 MSH pivot on pure momentum, no fresh Jul 9 catalyst. Consensus Moderate Buy.",
   "<b>Q3 earnings Jul 30 (confirmed, was est. Jul 28):</b> one of Cook's final calls; iPhone demand and AI-monetization commentary are the tests of the re-rating.",
   "<b>Structure:</b> old 'down' trend invalidated; 302.42 is now the support pivot / invalidation line.",
   "<b>Risk:</b> the rally is a sentiment trade into a real test — FOMC Jul 28-29 next door to earnings, and the AI story is still narrative, not numbers.",
  ] },
 "SPCX": {
  bullets: [
   "<b>What it is:</b> the world's largest IPO — June 12, 2026: $135/share, $75B raised, $1.75T valuation. Now 153.16 (Jul 9), back above the $150 day-one open, 13% above the IPO price.",
   "<b>Reversal:</b> after closing at an all-time-low 148.30 on Jul 8 (intraday low 145.20, below the 147.11 MSL), the stock reversed +3.28% on Jul 9 on a record 36th Falcon-9 booster reuse and a 29-satellite Starlink launch — reclaiming both the MSL and the 148 alert level.",
   "<b>Unresolved fundamental crack:</b> the Colossus 2 data center still faces a court-ordered shutdown of unpermitted gas turbines — litigation that threatens portions of the $45B Anthropic compute contract. Hasn't stopped the bounce, but hasn't gone away either.",
   "<b>The business:</b> Starlink (the only profitable segment) reportedly at 10M subscribers, ~2× since IPO, and H1 2026 satellite deployments (1,589) up from 1,489 a year earlier — subscriber and launch-cadence momentum both intact.",
   "<b>Street:</b> GS $205 / DB $255 / RJ Strong Buy / Macquarie $250 (avg ~$188, +23% to spot) — flow has now turned back in the thesis's favor for two sessions, though the Aug 6 lockup remains the real test.",
   "<b>Levels:</b> $135 IPO price is the hard floor; Jul 8's 145.20 low is the near-term higher-low pivot. Musk key-man risk and 'Trump Account' share-gift supply add noise.",
  ] },
};
const MACRO_NOTE = "The rotation that hit Taiwan/Korea memory names on Jul 7-8 started reversing at the source on Jul 9, but Taipei hasn't caught up yet. Korea: KOSPI rebounded 4-5.8%, Samsung +3-4%, SK hynix +6.8-8% intraday, driven by a 7x-oversubscribed SK hynix US ADR and bargain-hunting after the prior rout. Taiwan: TAIEX still closed -0.42% (45,540.86) on Jul 9 — a much smaller decline than Jul 7's -2.31% plunge, but no bounce yet, with electronics and financials both soft and Middle East jitters (Brent still elevated near $78 after Trump's Jul 7-8 Hormuz threats) lingering. The fundamental/tape divergence keeps widening: Winbond posted a 7th straight monthly revenue record (+189.88% YoY) and Powerchip a 47-month high (+68.8% YoY) on Jul 7-9, even as both stocks kept correcting — Macronix's Jul 8 session wicked below its MSL intraday before buyers reclaimed it, the most bullish technical tell of the week. TSMC's Jul 16 earnings (Citi just raised its TW-listed PT to NT$3,800 from NT$2,875, expecting a raised FY26 outlook) is the likely circuit-breaker for the whole rotation. San Fang is still breaking down technically ahead of its Jul 10 revenue print, the nearest binary on the list. US-side: NVDA round-tripped a Jul 9 gap on a China H200-approval report (closed roughly flat), AAPL extended its Broadcom-deal momentum to a third straight up day on no new catalyst, and SPCX reversed hard off Wednesday's all-time-low close on record launch-cadence news, reclaiming its MSL after Tuesday's breakdown call.";
