// Hand-written analysis & next-candle interpretation — Claude, 2026-06-12.
// Prediction fields are % offsets from the latest close (o/h/l/c of the guessed next candle).
const ANALYSIS = {
 "2344": {
  bullets: [
   "<b>Thesis:</b> specialty DDR3/DDR4 + NOR flash — direct beneficiary of Micron/SK hynix diverting capacity to HBM/DDR5; DDR4 shortage estimated 19–20%, DRAM contract prices seen +58–63% QoQ.",
   "<b>Street:</b> Morgan Stanley raised target NT$100 → NT$222 on June 2 (stock hit limit-up NT$184.5 that day); also entered Samsung Electro-Mechanics supply chain.",
   "<b>Tape:</b> NT$115 (Jan) → ~190 record → 147 crash low (June 8–10) → 172 now. 52-week range 16.5–193: a 10x year.",
   "<b>Technicals (your chart):</b> A-B-C channel projects D ≈ 190; RSI 65.9 — elevated but not overbought; MACD curling back up.",
   "<b>Watch:</b> volume on up days (today below average), the ~190 retest, earnings in ~48 days (late July).",
   "<b>Risk:</b> FOMC June 16–17 — hawkish dots hit this name hardest; it led both the crash and the rebound (highest beta to the AI-memory trade).",
  ] },
 "2337": {
  bullets: [
   "<b>Thesis:</b> NOR flash / ROM pure-play — NOR pricing rides the same shortage dynamics as legacy DRAM; Morgan Stanley Overweight (June 2).",
   "<b>Tape:</b> +5.00% today to 147.0; still ~15% off the NT$173.5 high — the laggard of the trio on this rebound.",
   "<b>Caution:</b> this name has seen violent institutional rotation before — a prior record-high session saw 43M shares of institutional selling and a -4% day.",
   "<b>Relative play:</b> if Winbond clears ~190, Macronix catch-up is the natural second-order trade; if Winbond stalls, expect this to stall first.",
   "<b>Risk:</b> same FOMC binary as the whole list; lower liquidity than 2344 amplifies gaps both ways.",
  ] },
 "6770": {
  bullets: [
   "<b>Thesis:</b> foundry + memory hybrid; rides the cycle plus a company-specific catalyst.",
   "<b>Catalyst:</b> Micron signed an LOI to buy PSMC's P5 fab (Tongluo) for <b>US$1.8B cash</b> — validates asset value, injects cash; watch for conversion to a definitive agreement.",
   "<b>Tape:</b> +4.97% today to 67.3; but -28% from the NT$94.5 high — biggest drawdown of the trio, weakest hands flushed.",
   "<b>Character:</b> the highest-beta, most retail-driven of the three — expect it to overshoot both directions.",
   "<b>Risk:</b> deal break or FOMC hawkishness; with the deepest drawdown, it has the least technical support below.",
  ] },
 "NVDA": {
  bullets: [
   "<b>Fundamentals:</b> revenue $82B (+85% YoY), record FCF $49B, fastest ramp ever (Blackwell). The problem was never the business.",
   "<b>New catalyst (June 11):</b> dividend raised ×25 ($0.01 → $0.25/qtr) + pledge to return ≥50% of FCF — a structural floor under dips.",
   "<b>Valuation:</b> $4.96T cap, PE ~31 on +85% growth; consensus Strong Buy, average target ~$298 (+45%).",
   "<b>Context:</b> dragged down with mega-cap tech in the rate scare (SOX -10.26% June 5, +8% June 11) — it trades as a rates instrument short-term.",
   "<b>Watch:</b> $200 as support, FOMC June 16–17 as the trigger; reclaiming ~$215 opens the gap-fill toward the highs.",
  ] },
 "1307": {
  bullets: [
   "<b>What it is:</b> San Fang Chemical 三芳化學 — PU synthetic leather, films and elastic fibers for footwear and apparel supply chains (Nike-adjacent sporting-goods materials). A traditional-materials name, not a tech story.",
   "<b>Role in your list:</b> the diversifier — it doesn't trade off FOMC/AI beta like everything else you track; drivers are footwear orders, raw-material (PU/petchem) costs, and TWD.",
   "<b>Tape:</b> +4.40% today to 36.75, closing at the top of its one-month range (30.6–36.9) — quiet accumulation pattern rather than a news-driven spike.",
   "<b>Coverage gap:</b> thin analyst/news coverage — technicals matter more here; gaps and breakouts carry more information than headlines.",
   "<b>Watch:</b> whether the 36.9 monthly-high breakout sticks; monthly revenue prints (TWSE 10th-of-month disclosures) are the main fundamental pulse.",
  ] },
 "AAPL": {
  bullets: [
   "<b>This week's story:</b> WWDC 2026 (June 8–12) — rebuilt Siri on Apple Intelligence using Apple's own models plus Google Gemini, iOS 27 across the lineup. Market verdict: letdown. Stock fell from ~$301 to ~$290 on the reveal.",
   "<b>Why the disappointment:</b> no clear AI monetization, reliance on Gemini read as strategic weakness, and the new Siri still trails frontier assistants.",
   "<b>Leadership:</b> Tim Cook announced this was his final WWDC as CEO — John Ternus (hardware chief) takes over in September. Succession transitions add a discount until the street hears his capital-allocation stance.",
   "<b>Tape:</b> rebounding +1.4% to ~296 after the post-keynote flush; monthly high 317.4 set in the pre-WWDC run-up is now the overhead reference.",
   "<b>Bull case from here:</b> Morgan Stanley framed WWDC as the catalyst that 'decides AI positioning' — expectations are now reset low, and Apple's capital-return machine is unmatched; event risk has passed.",
   "<b>Risk:</b> same FOMC binary as everything else, plus iPhone-cycle dependence — if AI Siri doesn't drive a supercycle, FY27 estimates look stretched.",
  ] },
 "SPCX": {
  bullets: [
   "<b>What just happened:</b> the largest IPO in history — June 12, 2026: priced $135, raised $75B at a $1.75T valuation, opened $150 (+11%) on 58M shares, popped ~30% intraday. Musk became the world's first trillionaire on the print.",
   "<b>The business:</b> Starlink is the only profitable segment and the biggest revenue driver; reusable rockets + Starship are the growth/option value the $1.75T tag is paying for.",
   "<b>Trading character (weeks 1–4):</b> this is a flow instrument, not a fundamentals one — flippers vs index inclusion demand vs retail FOMO, with Morgan Stanley's stabilization bid guarding the $150 open. Indicators on this dashboard (RSI14, MA20, structure) need ~3–4 weeks of candles to populate.",
   "<b>Key dates ahead:</b> analyst initiations when the quiet period ends (~mid-July, usually a volatility event), first public earnings (~August), and the ~180-day lockup expiry (~December) — the structural supply overhang.",
   "<b>Levels that exist so far:</b> $135 IPO price (the floor of floors), $150 day-one open/stabilization zone, $176.5 day-one high. That's the entire technical map right now.",
   "<b>Risks:</b> valuation prices in flawless Starlink growth + Mars optionality; Musk key-man concentration; a hawkish FOMC next week hits freshly-IPO'd mega-growth hardest of anything on your list.",
  ] },
};
const MACRO_NOTE = "Binary event for every name on this list: FOMC June 16–17 — first projections under new Fed Chair Kevin Warsh. Sticky inflation (core services ~3.5% YoY) has markets fearing hikes; the Iran-deal thaw is the offsetting tailwind.";
