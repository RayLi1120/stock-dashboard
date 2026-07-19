// Hand-written analysis & next-candle interpretation — Claude, 2026-07-19.
// Prediction fields are % offsets from the latest close (o/h/l/c of the guessed next candle).
const ANALYSIS = {
 "2344": {
  bullets: [
   "<b>Thesis:</b> specialty DDR3/DDR4 + NOR flash — direct beneficiary of Micron/SK hynix diverting capacity to HBM/DDR5. The pricing story is intact on paper: Q3 DRAM contracts guided +20-30%, DDR4 8Gb Q3 quotes reported up to +50% QoQ, NOR +100% in 1H26. What broke on Jul 17 is the market's willingness to pay for it.",
   "<b>The break:</b> C.C. Wei on TSMC's Jul 16 call — 'only AI-related mature process nodes should be experiencing tight supply' — gutted the broad-shortage narrative. Jul 17: -9.87% to 155, closing at the session low, inside a record TAIEX crash (-6.47%) with record NT$189B foreign selling.",
   "<b>Tape:</b> a full round trip in five sessions: 167 → 164.5 → 180.5 (limit-up Jul 15) → 172 → 155. The 165 level that was support all July is now overhead resistance; next real volume support is the 127-136.5 zone.",
   "<b>Fundamentals unchanged:</b> June revenue NT$20.6B (+189.9% YoY, 7th straight record), H1 +139.2% YoY, Q1 GM 53.4%. Q2 earnings Jul 30 — the CEO's 'price hikes not smaller than Q1' guidance is now the direct rebuttal witness to Wei.",
   "<b>Watch:</b> Monday follow-through risk from margin calls after the record outflow; a close back above 165 kills the bear case; below 150 opens air to 136.5.",
   "<b>Risk (both ways):</b> panic crashes triggered by a single sentence often mean-revert once the sentence gets parsed properly — Wei was talking about mature-node FOUNDRY supply, and Winbond is an IDM selling memory bits, not wafer capacity. The market sold everything mature-node-adjacent indiscriminately.",
  ] },
 "2337": {
  bullets: [
   "<b>Thesis:</b> NOR flash / ROM pure-play riding the same shortage dynamics as legacy DRAM; June revenue +216% YoY, H1 +128.8% — the fundamental de-risk happened months ago; the stock is a pure technical/flow battle now, and it just lost decisively.",
   "<b>Tape:</b> the 135 MSL that was wicked, reclaimed, and defended across three separate stop-runs finally broke for real: Jul 17 closed 125 (-8.42%), well below the level with no bounce attempt. The 132.5-136.5 band flips back to resistance; below there is no meaningful volume support until the ancient 31-42 base — flow and round numbers are the only floors.",
   "<b>The week:</b> 138 → 139.5 (130.5 wick Jul 14) → 148.5 (+8.8% melt-up, 150.5 high) → 136.5 (-8.1%, worst of trio) → 125. A 20-point round trip in four sessions.",
   "<b>Character flag:</b> lower liquidity than 2344 amplified both legs — it led the trio up on Jul 15 and led it down Jul 16-17. Whatever the sector does Monday, expect 2337 to do ~1.3x of it.",
   "<b>Watch:</b> a close back above 136.5 restores the recovery case; below 120 confirms free-fall. Model's most confident bearish call (-2.17%, OOS dir 62%) agrees with the technical read for once.",
   "<b>Risk:</b> the third stop-run in two weeks exhausted the level's defenders — but it also means most weak hands are already out; short-covering squeezes off 120-125 can be as violent as the breakdown.",
  ] },
 "6770": {
  bullets: [
   "<b>Thesis:</b> foundry + memory hybrid — and now the epicenter of the sector's defining argument: Frank Huang's own earnings call (Jul 15: GM 28%, 3.5-yr high; 'mature-node foundry GMs could all break 40%'; dividends next year) versus C.C. Wei's Jul 16 'only AI-related mature nodes are tight.' The tape voted for Wei: -9.93% to 68.9 on Jul 17, with foreigners dumping 115,284 lots — the most-sold name on the TWSE.",
   "<b>The beat was real:</b> NPAT NT$3.29B, brokers raised targets 65→80 with 2026 EPS ~NT$6.26 — at 68.9 that's ~11x. If the estimates survive, the crash is a gift; if Wei is right about mature-node supply loosening, the estimates are the next thing to break.",
   "<b>Tape:</b> the most violent week on the list: 69 → 63.4 flush (new MSL, Jul 14) → 76.1 limit-up → 79.5 blow-off high on 444M shares (heaviest volume of the cycle, faded to 76.5) → 68.9 at the low. Record volume at a failing high is distribution; price is back inside the 66.5-70.7 zone that has caught every July dip.",
   "<b>Calibration flag:</b> still my worst bullish bias on the list (-0.56 adj) — letting it pull the call down rather than fighting it. Model agrees on decline (-0.96%).",
   "<b>Watch:</b> 63.4 MSL is the whole July structure — below 63 there's nothing until 56.6-59.1. Back above 75 says the crash was the flush and the earnings story reasserts.",
   "<b>Micron P5 backdrop:</b> cleanroom retrofit underway, second cleanroom by end-FY2026, DRAM output 2H2027 — the long-term partnership case is unaffected by this week entirely.",
  ] },
 "1307": {
  bullets: [
   "<b>What it is:</b> San Fang Chemical 三芳化學 — PU synthetic leather, films and elastic fibers for footwear and apparel supply chains (Nike-adjacent sporting-goods materials). A traditional-materials name, not a tech story — and the uncorrelated ballast performed exactly to spec this week: -1.99% on the worst TAIEX point-drop day ever recorded, without testing its support zone.",
   "<b>Catalyst resolved:</b> the long-pending June revenue finally verified — NT$852.9M, -2.68% MoM, +11.11% YoY, second straight month of accelerating YoY growth (May +9.15%, Apr +8.54%). H1 ~NT$5.66B. Mildly positive, and the stock didn't move on it; nothing pending until the July print (~Aug 10).",
   "<b>Tape:</b> three weeks wedged between the 30.65-31.85 support zone and the 31.95-33.0 resistance band; the whole week traded 31.8-32.95, Friday closed 32.05 just above the zone.",
   "<b>Calibration:</b> best record on the card — 83% direction, 100% range hit, and the range multiplier (0.85) keeps tightening. Neutral-and-tight is the verified right model for this name; no reason to deviate.",
   "<b>Watch:</b> below 31.5 confirms the trend flip; above 34.0 reclaims the broken MSL. Footwear-sector demand commentary is the only exogenous lever between revenue prints.",
  ] },
 "NVDA": {
  bullets: [
   "<b>Fundamentals:</b> Q1 FY27 revenue $81.6B +85% YoY (data center $75.2B +92%), Q2 guide $91B ±2%; Blackwell sold out, Vera Rubin in full production at TSMC. TSMC's Jul 16 beat-and-capex-raise (HPC +20% QoQ, AI demand 'extremely robust' on agentic AI) is direct supply-chain confirmation.",
   "<b>China reopening:</b> Beijing cleared Alibaba/ByteDance to place H200 orders (Jul 14). Guidance embeds ZERO China data-center revenue — any approved volume is pure upside optionality into the Aug 26 print, even if first shipments are small.",
   "<b>Tape:</b> pinned all week between the 197.6 zone top and the 213.99 MSH: 203.53 → 211.8 (+4.07% on H200/CPI) → 212.5 → 207.4 → 202.81 (-2.21%, Friday low 197.97 tagged the zone top to the tick and bounced). Quad witching amplified Friday's move.",
   "<b>Key distinction:</b> Wei's mature-node caution explicitly exempted AI — Friday was de-grossing sympathy inside a Taiwan-centered panic, not an NVDA story change. Structure held exactly where it should.",
   "<b>Capital return:</b> dividend ×25 + $80B buyback authorization + ≥50% FCF pledge — a structural floor under dips.",
   "<b>Watch:</b> a close below 198 turns the failed breakout into a short setup; 214 clears the MSH and opens the 216.8 zone top. FOMC Jul 28-29 is the near-term macro gate; Aug 26 earnings the horizon event. Calibration flags my 33% direction record here (-0.24 adj) — leaning up, but modestly.",
  ] },
 "AAPL": {
  bullets: [
   "<b>The haven trade:</b> AAPL is now the flight-to-quality expression INSIDE tech — the only green megacap through Friday's semi rout, +15% in July (best month in ~4 years), $4.66T cap. Money exiting AI-capex exposure is parking in the one megacap that never overspent on it.",
   "<b>Three fundamental legs this week:</b> (1) China's regulator approved Apple Intelligence (running on Baidu/Alibaba models) — the missing region in the AI story and a direct upgrade-cycle lever; (2) iOS 27 public betas + Siri AI beta landed well (Munster: 'like having a new phone'); (3) the Street is chasing — Citi $365, HSBC sees another 10%.",
   "<b>Tape:</b> five straight up days into record territory: 317.31 → 314.86 → 327.5 (+4.0%) → 333.26 → 333.74. The 07-15 breakout base (~317) is the momentum invalidation; the old 302.42 MSH pivot is two zones below.",
   "<b>Leadership:</b> Cook → Ternus Sep 1; Jul 30 earnings is one of Cook's last calls and the first real test of converting the AI-features narrative into iPhone demand numbers. 'Net cash neutral' dropped Jul 2 — Ternus inherits a war chest.",
   "<b>Calibration:</b> the overbought-fade argument has been wrong three cycles running and calibration confirms the under-call bias (+0.09 adj); model agrees up (+0.38%, gap='continue'). Staying long-biased with tightened invalidation.",
   "<b>Risk:</b> a 15% month into an earnings print prices in a lot, and FOMC lands Jul 28-29 — the day before. Below 318 the momentum leg is over; 305 is the structural support top.",
  ] },
 "SPCX": {
  bullets: [
   "<b>Broken IPO:</b> first close below the $135 IPO price Jul 16 (131.11), then -5.43% to 123.99 Jul 17 on the Starship launch delay — five straight down days, ~45% off the $225 post-IPO high, at all-time lows. The $75B raised at $135 is now overhead supply; every IPO buyer is underwater.",
   "<b>The double event (Aug 6):</b> first public earnings + first lockup expiry (~20% of insiders; the extra +10% was conditional on IPO-price terms, now moot with the stock below $135). This dominates flow; nothing else matters to the tape until it clears. Dec 8 final lockup looms behind it.",
   "<b>Bear focus sharpened:</b> Starlink ARPU $99 (FY23) → $66 (Q1'26) even as subs reportedly hit 10M — the only profitable segment is growing units while shrinking unit economics. Colossus 2 turbine litigation still unresolved against the $45B Anthropic compute contract.",
   "<b>Squeeze mechanics:</b> Nasdaq-100 inclusion forces ~$4.3B of passive buying against a ~3% float, and the underwriter coverage wave is extreme — MS Overweight $300, RJ Strong Buy $800 (Jul 7), CFRA $115 low, consensus ~$240 vs spot 124. Violent counter-trend rallies are live risk; hence the widest ranges on the card (1.3x multiplier after 33% range hits).",
   "<b>Levels:</b> no established support below — round numbers only (120, 110). A close back above 135 (IPO reclaim) flips the read neutral; below 120 opens the low-110s.",
   "<b>Calibration:</b> 33% direction, 33% range — my worst-graded name; the lesson so far is 'don't call bottoms,' so this cycle I stopped.",
  ] },
};
const MACRO_NOTE = "The whipsaw week of the year: cool June CPI (3.5% vs 3.8% expected, core 2.6%) plus Powerchip's blowout earnings call ignited a Jul 15 memory melt-up — Powerchip, Winbond and ESMT all limit-up, TAIEX +893 to 45,631 — then TSMC beat everywhere on Jul 16 ($40.2B revenue, 67.7% GM, capex raised) and one sentence from C.C. Wei ('only AI-related mature process nodes should be experiencing tight supply') detonated the whole mature-node/memory trade on Jul 17: TAIEX -2,953.71 points (-6.47%) to 42,671.27, the largest point drop on record, on a record NT$189B single-day foreign outflow; TSMC -7.29%, UMC limit-down, the watchlist memory trio -8.4% to -9.9%. The core tension is now explicit and public: Wei's supply-demand caution versus Frank Huang's '40% mature-foundry GM' projection and DDR4 quotes still reported up to +50% QoQ — Winbond's Jul 30 earnings is the referendum. Macro offers no cushion: US airstrikes on Iran resumed Jul 14 with the Hormuz blockade reimposed (Brent ~$86, strait transits down >50%, Trump floated then dropped a 20% cargo fee), June PCE lands ~Jul 24 and the FOMC Jul 28-29 with September-hike odds still ~63% after the soft CPI (Warsh: not 'mission accomplished'). The US tape diverged sharply from Taiwan: AAPL closed the week at a record 333.74 as the 'AI-lite haven' absorbing rotation out of AI-capex names (+15% July; China approved Apple Intelligence; Citi $365), NVDA held structure at 202.81 with the China-H200 channel reopening as pure guidance upside, while SPCX broke and closed below its $135 IPO price (123.99, -14.7% for the week) on a Starship delay with the Aug 6 earnings-plus-lockup double event three weeks out.";
