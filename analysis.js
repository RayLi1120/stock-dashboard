// Hand-written analysis & next-candle interpretation — Claude, 2026-07-07.
// Prediction fields are % offsets from the latest close (o/h/l/c of the guessed next candle).
const ANALYSIS = {
 "2344": {
  bullets: [
   "<b>Thesis:</b> specialty DDR3/DDR4 + NOR flash — direct beneficiary of Micron/SK hynix diverting capacity to HBM/DDR5; DDR4 shortage estimated 19–20%, DRAM contract prices seen +58–63% QoQ.",
   "<b>Earnings:</b> Q1 FY2026 was a record — gross margin 53.4%, EPS NT$2.25. CEO Chen Pei-ming said Q2 price hikes will be 'not smaller than Q1' and full-year revenue will hit a new all-time high. Kaohsiung fab doubles to 24,000 wafers/month by year-end.",
   "<b>Street:</b> Morgan Stanley target NT$222 (Jun 2); stock briefly exceeded it, trading to NT$225 on Jun 26 before retracing to 190.",
   "<b>Tape:</b> NT$115 (Jan) → 225 new MSH (Jun 26) → 183 now (Jul 6). 52-week range 16.5–225. The 190 double-top/breakout level has now <b>failed</b> as support — no meaningful volume support until the 152–160 June breakout base.",
   "<b>Watch:</b> Q2 earnings Jul 30 (key test of CEO's price-hike guidance); June monthly revenue Jul 10; whether the 178 zone holds before the air pocket down to 152-160.",
   "<b>Risk:</b> hawkish Fed (9 of 19 FOMC officials now see a 2026 hike); any cooling of the DDR4 shortage narrative could cause another violent rotation.",
  ] },
 "2337": {
  bullets: [
   "<b>Thesis:</b> NOR flash / ROM pure-play — NOR pricing rides the same shortage dynamics as legacy DRAM; Morgan Stanley Overweight (Jun 2).",
   "<b>Tape:</b> Hit a new MSH at NT$192 on Jun 23, then retraced sharply to 143.5, now 144.5 (Jul 6, +1.4% — first up-day since the drop). Violent rotation — mirrors prior behavior (43M institutional shares sold on a prior record-high day).",
   "<b>Confirmation:</b> June consolidated revenue NT$6.956B, +11.2% MoM, +216% YoY, H1 2026 revenue +128.8% YoY — the strongest P&L evidence yet that the cycle is real, not just a stock-price story. Watch the MSL at 132.5 — still intact.",
   "<b>Relative play:</b> laggard catch-up to Winbond (which is defending 190 better) is the trade; if Winbond stabilizes, Macronix is the higher-beta bounce. If Winbond fails, avoid.",
   "<b>Risk:</b> hawkish FOMC overhang; lower liquidity than 2344 amplifies gap risk both ways.",
  ] },
 "6770": {
  bullets: [
   "<b>Thesis:</b> foundry + memory hybrid; rides the DDR4 cycle plus a company-specific catalyst.",
   "<b>Catalyst confirmed:</b> PSMC posted its first profitable quarter in Q1 2026 after a 10-quarter loss streak — the Micron/Tongluo alliance is now showing up in the P&L, not just the balance sheet. A second fab (~270k sq ft cleanroom) is slated to start construction by end-FY2026.",
   "<b>Tape:</b> Hit MSH NT$89.3 on Jun 25, now at 72.6 (Jul 6, -1.09% on the day). Still 17% above MSL of 62.1. Highest-beta name in the trio.",
   "<b>Character:</b> most retail-driven of the three — expect it to overshoot in both directions; highest-beta expression of the DDR4 trade.",
   "<b>Risk:</b> hawkish FOMC; without the ongoing LOI catalyst (now closed), the name needs the cycle to carry it.",
  ] },
 "NVDA": {
  bullets: [
   "<b>Fundamentals:</b> revenue $82B Q1 FY27 (+85% YoY), Q2 guidance $91B, record FCF $49B (Blackwell ramp, sold out through mid-2026). Goldman calls the post-selloff 21.7x forward PE 'compelling' — near the S&P average and well below NVDA's 5-year average of 72x.",
   "<b>Technicals:</b> broke below the Jun 9 MSL of $199.34 on Jul 1, then stabilized back above the new $189.8 MSL by Jul 7 ($196.93). Nvidia denied a Jul 7 report that its Kyber NVL144 platform is delayed to 2028 — stock +1% on the denial.",
   "<b>Capital return:</b> dividend ×25 ($0.01 → $0.25/qtr) + ≥50% FCF return pledge — a structural floor under deep dips.",
   "<b>Context:</b> NVDA is the worst performer in its own chip group in 2026 (+5% YTD vs S&P +10%) — style rotation into memory/CPU/semi-equipment and out of AI mega-caps, not an earnings deterioration.",
   "<b>Watch:</b> support zone $188–$196; the Jul 28-29 FOMC decision is the next big swing factor. Q2 earnings Aug 26.",
   "<b>Risk:</b> June SEP showed 9 of 19 FOMC members expect ≥1 hike in 2026 (core PCE seen 3.6%) — highest-multiple names hit hardest if the Jul 29 decision leans hawkish.",
  ] },
 "1307": {
  bullets: [
   "<b>What it is:</b> San Fang Chemical 三芳化學 — PU synthetic leather, films and elastic fibers for footwear and apparel supply chains (Nike-adjacent sporting-goods materials). A traditional-materials name, not a tech story.",
   "<b>Role in your list:</b> the diversifier — it doesn't trade off FOMC/AI beta like everything else you track; drivers are footwear orders, raw-material (PU/petchem) costs, and TWD.",
   "<b>Tape:</b> hit MSH 38.3 on Jun 16, fell 7.4% on Jul 6 to 33.15 — breaking below the Jun 30 MSL (33.85) for the first time since the breakout. No company-specific news found; looks like broad TW market volatility rather than a fundamental shift.",
   "<b>Coverage gap:</b> thin analyst/news coverage — technicals and monthly revenue prints are the primary signals.",
   "<b>Watch:</b> support zone 32.35–34.0; July 10 monthly revenue disclosure is the next real catalyst to confirm or reject the trend-flip risk.",
  ] },
 "AAPL": {
  bullets: [
   "<b>Leadership transition:</b> Tim Cook to become Executive Chairman; John Ternus (hardware chief) becomes CEO effective Sep 1, 2026. Apple dropped its 7-year 'net cash neutral' policy on Jul 2 — frees Ternus to invest more aggressively in AI infrastructure and M&A, read as bullish.",
   "<b>Q2 FY26 (Apr 30):</b> $111.2B revenue (+17% YoY), iPhone $57B (+22%). Business is strong; the discount is strategic, not operational.",
   "<b>WWDC reversal:</b> the post-WWDC Siri/Gemini letdown ($301→$290) has fully round-tripped — stock at $310.66 (Jul 7), now <b>above</b> the pre-WWDC MSH ($302.42). Maxim raised its PT $310→$350 (Buy); consensus is Moderate Buy (23 SB/3 MB/15 Hold/1 SS of 42).",
   "<b>Structure:</b> the old 'down' trend from the $302.42 MSH has been invalidated by the breakout above it — a fresh swing high is forming.",
   "<b>Q3 earnings (Jul 28):</b> the next reset event and first real Ternus-adjacent print. iPhone demand and AI monetization commentary will be the key tests.",
   "<b>Risk:</b> Jul 28-29 FOMC decision + AI strategy still unproven + CEO transition = the rally could be a sentiment overshoot ahead of the real test at earnings.",
  ] },
 "SPCX": {
  bullets: [
   "<b>What it is:</b> the world's largest IPO — June 12, 2026: $135/share, $75B raised, $1.75T valuation. Now at $149.47 (Jul 7, -6.8% on the day), 19 sessions in.",
   "<b>The business:</b> Starlink is the only profitable segment (Q1 2026: $3.26B revenue, $1.19B operating income, 10.3M subscribers) and the biggest revenue driver; reusable rockets + Starship are the growth/option value the $1.75T tag is paying for.",
   "<b>Nasdaq-100 inclusion + quiet-period-end same day (Jul 7):</b> joined the index (forcing ~$4.3B QQQ / ~$27B total passive buying) and four banks initiated — GS (Buy, PT $205), Deutsche Bank (Buy, PT $255), Raymond James (Strong Buy), Macquarie (Outperform, PT $250), avg PT $188. Stock fell anyway — public float is only ~3-5% of shares, so passive flow is small, and lockup-expiry fears dominate.",
   "<b>Lockup complexity:</b> early investors can unlock ~20% after Q2 earnings (expected late July/early Aug); final employee lockup expires Dec 8, 2026. The first unlock is the near-term supply event to watch and likely explains today's weakness despite bullish news.",
   "<b>Levels:</b> $135 IPO floor, $147.11 MSL (Jun 23), $172.4 MSH (Jun 30). RSI and moving averages still too thin (16 bars) for reliable signals.",
   "<b>Risk:</b> valuation prices in flawless Starlink growth + Starship optionality; Musk key-man concentration; the analyst PT gap (+26% to consensus) is real but won't matter until the lockup overhang clears.",
  ] },
};
const MACRO_NOTE = "Fed held at 3.50–3.75% (Jun 17); the June SEP now shows 9 of 19 FOMC members expecting at least one rate hike in 2026, with core PCE seen ending the year at 3.6% (up from 2.7%). Next decision is Jul 28-29 — market is pricing a hold but the hawkish tilt keeps firming. The 2026 Iran war (started Feb 28) sent Brent briefly above $100; an interim US-Iran agreement plus strategic reserve releases pulled oil back down through May-June, though Strait of Hormuz traffic remains ~90% below pre-conflict levels. On the names: Taiwan memory (2344/2337/6770) is chopping hard after the late-June spike but June revenue prints (Macronix +216% YoY) confirm the DDR4/DRAM cycle is real. AAPL fully round-tripped its post-WWDC dip to a fresh high on a capital-allocation policy change. NVDA stabilized after denying a roadmap-delay report but remains the laggard of its peer group. SPCX joined the Nasdaq-100 and got four bullish analyst initiations on Jul 7 yet fell ~7% the same day — lockup-expiry fears are overpowering the good news into the Jul/Aug earnings print. San Fang (1307) broke its MSL on a sharp, newsless -7.4% day, most likely broad-tape volatility rather than a company-specific event.";
