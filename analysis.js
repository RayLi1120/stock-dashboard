// Hand-written analysis & next-candle interpretation — Claude, 2026-07-01.
// Prediction fields are % offsets from the latest close (o/h/l/c of the guessed next candle).
const ANALYSIS = {
 "2344": {
  bullets: [
   "<b>Thesis:</b> specialty DDR3/DDR4 + NOR flash — direct beneficiary of Micron/SK hynix diverting capacity to HBM/DDR5; DDR4 shortage estimated 19–20%, DRAM contract prices seen +58–63% QoQ.",
   "<b>Earnings:</b> Q1 FY2026 was a record — gross margin 53.4%, EPS NT$2.25. CEO Chen Pei-ming said Q2 price hikes will be 'not smaller than Q1' and full-year revenue will hit a new all-time high. Kaohsiung fab doubles to 24,000 wafers/month by year-end.",
   "<b>Street:</b> Morgan Stanley target NT$222 (Jun 2); stock briefly exceeded it, trading to NT$225 on Jun 26 before retracing to 190.",
   "<b>Tape:</b> NT$115 (Jan) → 225 new MSH (Jun 26) → 190 now. 52-week range 16.5–225. The stock is testing the old double-top / breakout level as support.",
   "<b>Watch:</b> whether 190 holds as support; Q2 earnings late July; June monthly revenue Jul 10.",
   "<b>Risk:</b> hawkish Fed (9 of 18 FOMC officials now see a 2026 hike); any cooling of the DDR4 shortage narrative could cause another violent rotation.",
  ] },
 "2337": {
  bullets: [
   "<b>Thesis:</b> NOR flash / ROM pure-play — NOR pricing rides the same shortage dynamics as legacy DRAM; Morgan Stanley Overweight (Jun 2).",
   "<b>Tape:</b> Hit a new MSH at NT$192 on Jun 23, then retraced sharply to 143.5 (-25%). Violent rotation — mirrors prior behavior (43M institutional shares sold on a prior record-high day).",
   "<b>Caution:</b> the pullback is severe enough to suggest active institutional selling, not just profit-taking. Watch the MSL at 132.5 — a break there would be a serious thesis dent.",
   "<b>Relative play:</b> laggard catch-up to Winbond (which is defending 190 better) is the trade; if Winbond stabilizes, Macronix is the higher-beta bounce. If Winbond fails, avoid.",
   "<b>Risk:</b> hawkish FOMC overhang; lower liquidity than 2344 amplifies gap risk both ways.",
  ] },
 "6770": {
  bullets: [
   "<b>Thesis:</b> foundry + memory hybrid; rides the DDR4 cycle plus a company-specific catalyst.",
   "<b>Catalyst resolved:</b> Micron completed acquisition of PSMC's P5 fab (Tongluo) in March 2026 for <b>US$1.8B cash</b> — the cash is in hand, removing deal-break risk. DRAM output at the P5 site expected H2 2027.",
   "<b>Tape:</b> Hit MSH NT$89.3 on Jun 25, now at 74.3 (-17%). Still 20% above MSL of 62.1. Highest-beta name in the trio.",
   "<b>Character:</b> most retail-driven of the three — expect it to overshoot in both directions; highest-beta expression of the DDR4 trade.",
   "<b>Risk:</b> hawkish FOMC; without the ongoing LOI catalyst (now closed), the name needs the cycle to carry it.",
  ] },
 "NVDA": {
  bullets: [
   "<b>Fundamentals:</b> revenue $82B Q1 FY27 (+85% YoY), Q2 guidance $91B, record FCF $49B (Blackwell ramp). After the 7% monthly selloff, stock trades at 15× next-year earnings — the cheapest it has been relative to growth in years.",
   "<b>Technicals (warning):</b> broke below the Jun 9 MSL of $199.34 on Jul 1 (slipping 2%+ intraday). Fractal structure has flipped to 'mixed' — short-term bias is down until $199+ is reclaimed.",
   "<b>Capital return:</b> dividend ×25 ($0.01 → $0.25/qtr) + ≥50% FCF return pledge — a structural floor under deep dips.",
   "<b>Context:</b> market is rotating INTO memory chips and CPU/semi-equipment names and OUT OF AI mega-caps. This is a style rotation, not an earnings deterioration.",
   "<b>Watch:</b> support zone $185–$186; reclaiming $199 is the first step to rebuilding momentum. Q2 earnings Aug 26.",
   "<b>Risk:</b> rate hike expectations (9 of 18 FOMC members) hit the highest-multiple names hardest; sector rotation could persist another 2–4 weeks.",
  ] },
 "1307": {
  bullets: [
   "<b>What it is:</b> San Fang Chemical 三芳化學 — PU synthetic leather, films and elastic fibers for footwear and apparel supply chains (Nike-adjacent sporting-goods materials). A traditional-materials name, not a tech story.",
   "<b>Role in your list:</b> the diversifier — it doesn't trade off FOMC/AI beta like everything else you track; drivers are footwear orders, raw-material (PU/petchem) costs, and TWD.",
   "<b>Tape:</b> hit MSH 38.3 on Jun 16, now at 34.3, pulling back toward the support zone (32–33). The structure still reads 'uptrend' (MSL=32.6 intact). Monthly revenue (TWSE July 10) is the next catalyst.",
   "<b>Coverage gap:</b> thin analyst/news coverage — technicals and monthly revenue prints are the primary signals.",
   "<b>Watch:</b> support zone 32–33; July 10 monthly revenue disclosure.",
  ] },
 "AAPL": {
  bullets: [
   "<b>Leadership transition:</b> Tim Cook to become Executive Chairman; John Ternus (hardware chief) becomes CEO effective Sep 1, 2026. Succession transitions add a valuation discount until Ternus states his capital-allocation and AI strategy.",
   "<b>Q2 FY26 (Apr 30):</b> $111.2B revenue (+17% YoY), iPhone $57B (+22%). Business is strong; the discount is strategic, not operational.",
   "<b>WWDC letdown:</b> rebuilt Siri on Apple Intelligence (own models + Google Gemini) — market read it as strategic weakness. Stock fell ~$301 → ~$290 on the reveal; now at $294.",
   "<b>Structure bearish:</b> trend=down after MSH $302.42 (Jun 22). AAPL is drifting lower in a sector that has underperformed since the WWDC disappointment.",
   "<b>Q3 earnings (~late July):</b> the next reset event. iPhone demand and AI monetization commentary will be the key tests for Ternus.",
   "<b>Risk:</b> FOMC rate-hike risk + AI strategy uncertainty + CEO transition = triple overhang. Bull case: expectations now so low that any positive AI signal from Ternus causes a squeeze.",
  ] },
 "SPCX": {
  bullets: [
   "<b>What it is:</b> the world's largest IPO — June 12, 2026: $135/share, $75B raised, $1.75T valuation. Day-1: opened $150, high $176.5, closed $161. Now at $156.57 (19 sessions in).",
   "<b>The business:</b> Starlink is the only profitable segment and the biggest revenue driver; reusable rockets + Starship are the growth/option value the $1.75T tag is paying for.",
   "<b>Lockup complexity:</b> early investors can unlock 20% after Q2 earnings (expected late July/early Aug); final employee lockup expires Dec 8, 2026. The first unlock is the near-term supply event to watch.",
   "<b>Initiations catalyst:</b> analyst quiet period expires ~July 22. Morgan Stanley (deal manager) and KeyBanc have already noted the stock; broader initiations will likely include an Overweight from MS, which historically causes a volatility gap.",
   "<b>Levels:</b> $135 IPO floor, $147 MSL (Jun 23 low), $150 day-1 open/stabilization, $176.5 day-1 high. RSI and moving averages still too thin (13 bars) for reliable signals.",
   "<b>Risk:</b> valuation prices in flawless Starlink growth + Starship optionality; Musk key-man concentration; rate-hike expectations hit freshly-IPO'd mega-growth hardest.",
  ] },
};
const MACRO_NOTE = "Fed held at 3.50–3.75% for the 4th consecutive meeting (Jun 17). The shift: 9 of 18 FOMC members now see at least one rate hike in 2026, and core PCE was revised up to 3.3% (from 2.7%). Chair Warsh abandoned traditional forward guidance — every data print now moves markets. NVDA broke below its recent swing low on Jul 1 as the AI mega-cap rotation continues. Taiwan memory names are correcting from late-June highs but the fundamental cycle (DDR4 shortage, +58–63% QoQ contract prices) remains intact.";
