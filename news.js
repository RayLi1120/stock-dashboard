// Machine-managed news feed. Strict JSON body — refreshed by the scheduled scan.
// Per symbol: newest first, keep ≤6 items. "_tape" = market-wide items for the dashboard strip.
// Each item: d=date, t=headline, src=source, read=Claude's one-line take, url optional.
const NEWS = {
 "_tape": [
  {"d": "2026-06-16/17", "t": "FOMC meeting — first projections under new Fed Chair Kevin Warsh", "src": "macro calendar", "read": "The binary event for every name on this list; hawkish dots = the crypto treatment for the AI complex."},
  {"d": "2026-06-11", "t": "US rallies on Trump signal of US–Iran deal: S&P +1.8%, Nasdaq 100 +3.3%, SOX +8%", "src": "Bloomberg", "read": "Geopolitical wildcard flipped tailwind; Taiwan followed Friday.", "url": "https://www.bloomberg.com/news/articles/2026-06-11/asian-stocks-to-gain-as-trump-signals-us-iran-deal-markets-wrap"},
  {"d": "2026-06-11", "t": "TSMC to raise 3nm prices ~15% in H2; May revenue +30.1% YoY", "src": "GuruFocus / TSMC 6-K", "read": "AI capex cycle intact — the fundamental floor under the Taiwan tech trade.", "url": "https://www.gurufocus.com/news/8911939/tsm-tsmc-to-raise-prices-amid-strong-ai-demand-and-3nm-process-shortages"},
  {"d": "2026-06-02", "t": "Mainstream DRAM contract prices seen +58–63% QoQ; DDR4 shortage est. 19–20%", "src": "BigGo/broker research", "read": "The memory-supercycle number — the whole trio trades off this.", "url": "https://finance.biggo.com/news/FiAmhp4BoicNoOgC7kCY"}
 ],
 "2344": [
  {"d": "2026-06-02", "t": "Morgan Stanley raises Winbond target NT$100 → NT$222; stock limit-up at NT$184.5", "src": "BigGo Finance", "read": "Street-high conviction on legacy DRAM/NOR; 222 is the bull-case anchor above the ~190 double top.", "url": "https://finance.biggo.com/news/FiAmhp4BoicNoOgC7kCY"},
  {"d": "2026-06-02", "t": "Winbond breaks into Samsung Electro-Mechanics supply chain", "src": "BigGo Finance", "read": "Customer diversification — supports the re-rating beyond pure price-cycle."},
  {"d": "2026-01-19", "t": "Morgan Stanley first big upgrade (PT 88→130) on DDR3/DDR4 + NOR tightening", "src": "TS2", "read": "The original thesis note — price has since blown through it.", "url": "https://ts2.tech/en/winbond-electronics-stock-price-jumps-as-morgan-stanley-target-hike-fuels-taiwan-memory-rally/"}
 ],
 "2337": [
  {"d": "2026-06-02", "t": "Morgan Stanley rates Macronix Overweight in memory sector call", "src": "BigGo Finance", "read": "Same supercycle umbrella as Winbond; NOR pricing is the driver.", "url": "https://finance.biggo.com/news/FiAmhp4BoicNoOgC7kCY"},
  {"d": "2026 (earlier)", "t": "Institutional selling of 43M shares on a prior record-high day (-4%)", "src": "BigGo Finance", "read": "Reminder that rotation in this name is violent — size positions for gaps."}
 ],
 "6770": [
  {"d": "2026-06", "t": "Micron LOI to acquire PSMC's P5 fab (Tongluo) for US$1.8B cash", "src": "sector coverage", "read": "Hard-asset validation + cash infusion; the key follow-up is LOI → definitive agreement."},
  {"d": "2026-06-02", "t": "Morgan Stanley rates Powerchip Overweight", "src": "BigGo Finance", "read": "Sector call; PSMC is the highest-beta expression.", "url": "https://finance.biggo.com/news/FiAmhp4BoicNoOgC7kCY"}
 ],
 "NVDA": [
  {"d": "2026-06-11", "t": "Dividend raised ×25 to $0.25/qtr; pledges to return ≥50% of FCF", "src": "Motley Fool", "read": "A structural floor under dips — mega-cap capital-return era begins.", "url": "https://www.fool.com/investing/2026/06/11/nvidia-just-announced-a-potential-windfall-for-sha/"},
  {"d": "2026-06", "t": "Q1 FY27: revenue $82B +85% YoY, record FCF $49B (Blackwell ramp)", "src": "earnings coverage", "read": "Fundamentals roaring; the stock's problem is the discount rate, not the business."},
  {"d": "2026-06-10", "t": "Consensus: Strong Buy, average PT ~$298", "src": "stockanalysis.com", "read": "+45% implied upside — street hasn't capitulated on the AI trade.", "url": "https://stockanalysis.com/stocks/nvda/"}
 ],
 "1307": [
  {"d": "2026-06-12", "t": "No headline driver behind today's +4.4% push to the top of the monthly range", "src": "scan note", "read": "Thin-coverage materials name — the breakout itself is the news; watch the monthly revenue print (~10th of each month)."},
  {"d": "profile", "t": "San Fang 三芳化學: PU synthetic leather, films & elastic fibers for footwear/apparel supply chains", "src": "Yahoo Finance profile", "read": "Sporting-goods materials supplier — your list's diversifier away from AI/rates beta.", "url": "https://finance.yahoo.com/quote/1307.TW/"}
 ],
 "SPCX": [
  {"d": "2026-06-12", "t": "SpaceX IPO: biggest in history — $135/share, $75B raised, $1.75T valuation; opens $150, pops ~30%", "src": "CNBC", "read": "Day-one map: $135 IPO floor, $150 stabilization open, $176.5 high. Flow-driven until initiations (~mid-July).", "url": "https://www.cnbc.com/2026/06/12/spacex-ipo-spcx-live-updates.html"},
  {"d": "2026-06-12", "t": "Starlink confirmed as SpaceX's only profitable segment in IPO disclosures", "src": "Kiplinger/CNBC", "read": "The $1.75T tag is Starlink cashflow + Starship optionality — watch Starlink subscriber/ARPU metrics at first earnings.", "url": "https://www.kiplinger.com/investing/live/spacex-ipo-spcx-stock-updates-and-commentary"}
 ],
 "AAPL": [
  {"d": "2026-06-08", "t": "WWDC 2026: rebuilt Siri on Apple Intelligence (own models + Google Gemini), iOS 27 — stock fell ~$301 → ~$290", "src": "TradingKey / Analytics Insight", "read": "AI letdown: no monetization story, Gemini reliance read as weakness. Expectations now reset low.", "url": "https://www.tradingkey.com/analysis/stocks/us-stocks/261952325-apple-intelligence-is-live-can-wwdc-2026-spark-an-iphone-supercycle-tradingkey"},
  {"d": "2026-06-08", "t": "Tim Cook's final WWDC as CEO — John Ternus takes over in September", "src": "NPR", "read": "Succession discount until Ternus states his capital-allocation stance; hardware-chief pick hints at product-led strategy.", "url": "https://www.npr.org/2026/06/08/nx-s1-5847937/apple-wwdc-2026-siri-ai-tim-cook"},
  {"d": "2026-06-05", "t": "Morgan Stanley: WWDC is the 'key catalyst' that decides Apple's AI positioning", "src": "Yahoo Finance", "read": "The bar that was set — and missed. Watch for post-event analyst revisions.", "url": "https://finance.yahoo.com/markets/stocks/articles/apple-wwdc-2026-key-catalyst-233816532.html"}
 ]
};
