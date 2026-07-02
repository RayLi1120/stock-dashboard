// Machine-managed news feed. Strict JSON body — refreshed by the scheduled scan.
// Per symbol: newest first, keep ≤6 items. "_tape" = market-wide items for the dashboard strip.
// Each item: d=date, t=headline, src=source, read=Claude's one-line take, url optional.
const NEWS = {
 "_tape": [
  {"d": "2026-06-17", "t": "FOMC holds at 3.50–3.75% for 4th consecutive meeting; 9 of 18 officials now see at least one hike this year", "src": "Federal Reserve / CNBC", "read": "Hawks are now the majority view — core PCE revised up to 3.3% for 2026. Rate-sensitive AI complex faces a ceiling.", "url": "https://www.cnbc.com/2026/06/17/fed-interest-rate-decision-june-2026.html"},
  {"d": "2026-06-17", "t": "Fed revises 2026 core PCE up to 3.3% (from 2.7%); 'no traditional forward guidance' under Chair Warsh", "src": "Federal Reserve projections", "read": "Stickier inflation + no pre-commitment = higher discount rates linger. Biggest macro overhang for all growth names on this list."},
  {"d": "2026-06-11", "t": "US rallies on Trump signal of US–Iran deal: S&P +1.8%, Nasdaq 100 +3.3%, SOX +8%", "src": "Bloomberg", "read": "Geopolitical wildcard flipped tailwind; Taiwan followed Friday.", "url": "https://www.bloomberg.com/news/articles/2026-06-11/asian-stocks-to-gain-as-trump-signals-us-iran-deal-markets-wrap"},
  {"d": "2026-06-02", "t": "Mainstream DRAM contract prices seen +58–63% QoQ; DDR4 shortage est. 19–20%", "src": "BigGo/broker research", "read": "The memory-supercycle number — the whole trio trades off this.", "url": "https://finance.biggo.com/news/FiAmhp4BoicNoOgC7kCY"}
 ],
 "2344": [
  {"d": "2026-05-05", "t": "Winbond Q1 FY2026: gross margin 53.4% (record), EPS NT$2.25; CEO says Q2 price hikes ≥ Q1, revenue to hit new all-time high", "src": "BigGo Finance", "read": "Best quarter in company history — the cycle is ahead of consensus. Watch the Q2 print (late July) for confirmation.", "url": "https://finance.biggo.com/news/TW_2344.TW_2026-05-05"},
  {"d": "2026-06-02", "t": "Morgan Stanley raises Winbond target NT$100 → NT$222; stock limit-up at NT$184.5", "src": "BigGo Finance", "read": "Street-high conviction on legacy DRAM/NOR; 222 is the bull-case anchor. Stock traded above target (225) briefly on 06-26.", "url": "https://finance.biggo.com/news/FiAmhp4BoicNoOgC7kCY"},
  {"d": "2026-06-02", "t": "Winbond breaks into Samsung Electro-Mechanics supply chain", "src": "BigGo Finance", "read": "Customer diversification — supports the re-rating beyond pure price-cycle."},
  {"d": "2026-01-19", "t": "Morgan Stanley first big upgrade (PT 88→130) on DDR3/DDR4 + NOR tightening", "src": "TS2", "read": "The original thesis note — price has since blown well through it.", "url": "https://ts2.tech/en/winbond-electronics-stock-price-jumps-as-morgan-stanley-target-hike-fuels-taiwan-memory-rally/"}
 ],
 "2337": [
  {"d": "2026-06-02", "t": "Morgan Stanley rates Macronix Overweight in memory sector call", "src": "BigGo Finance", "read": "Same supercycle umbrella as Winbond; NOR pricing is the driver. Stock hit NT$192 on 06-23 then gave back 25%.", "url": "https://finance.biggo.com/news/FiAmhp4BoicNoOgC7kCY"},
  {"d": "2026 (earlier)", "t": "Institutional selling of 43M shares on a prior record-high day (-4%)", "src": "BigGo Finance", "read": "Reminder that rotation in this name is violent — the current -25% pullback from 192 fits the pattern."}
 ],
 "6770": [
  {"d": "2026-03-16", "t": "Micron completes acquisition of PSMC Tongluo P5 fab — cleanroom retrofit begins", "src": "Digitimes", "read": "Deal closed: US$1.8B cash in hand for Powerchip. DRAM output at P5 expected H2 2027. Removes deal-break risk.", "url": "https://www.digitimes.com/news/a20260316VL200/micron-acquisition-taiwan-psmc-cleanroom.html"},
  {"d": "2026-01-17", "t": "Micron LOI to acquire PSMC's P5 fab (Tongluo) for US$1.8B cash", "src": "Micron / DataCenter Dynamics", "read": "Hard-asset validation + cash infusion; deal subsequently closed March 2026.", "url": "https://www.datacenterdynamics.com/en/news/micron-acquires-powerchips-p5-taiwanese-fab-for-18bn-will-ramp-up-dram-output-at-site-by-2027/"},
  {"d": "2026-06-02", "t": "Morgan Stanley rates Powerchip Overweight", "src": "BigGo Finance", "read": "Sector call; PSMC is the highest-beta expression of the DDR4 shortage.", "url": "https://finance.biggo.com/news/FiAmhp4BoicNoOgC7kCY"}
 ],
 "NVDA": [
  {"d": "2026-07-01", "t": "NVDA slipping 2%+ today; down ~7% over the past month amid sector rotation away from AI mega-caps", "src": "Invezz", "read": "Technicals weak (broke below recent MSL at $199.34) despite Blackwell fundamentals; market breadth rotation is the culprit.", "url": "https://invezz.com/ng/news/2026/07/01/why-nvidia-stock-is-slipping-over-2percent-today/"},
  {"d": "2026-06-30", "t": "Q1 FY27: revenue $82B +85% YoY, $91B Q2 guidance; 15× next-year earnings after the selloff", "src": "Motley Fool", "read": "At 15× forward PE on 85% growth, Street argues the setup looks attractive — but rate fears override fundamentals short-term.", "url": "https://www.fool.com/investing/2026/06/30/3-reasons-to-buy-nvidia-stock-in-july/"},
  {"d": "2026-06-11", "t": "Dividend raised ×25 to $0.25/qtr; pledges to return ≥50% of FCF", "src": "Motley Fool", "read": "A structural floor under dips — mega-cap capital-return era begins.", "url": "https://www.fool.com/investing/2026/06/11/nvidia-just-announced-a-potential-windfall-for-sha/"},
  {"d": "2026-06", "t": "Consensus: Strong Buy, average PT ~$298 (+50% from current level)", "src": "stockanalysis.com", "read": "Street hasn't capitulated on the AI trade even as the stock corrects 7%.", "url": "https://stockanalysis.com/stocks/nvda/"}
 ],
 "1307": [
  {"d": "2026-07-10", "t": "TWSE June monthly revenue disclosure due — 1307 is the key fundamental pulse for San Fang", "src": "TWSE calendar", "read": "Upcoming: the only recurring catalyst for this thin-coverage name. Current price 34.3 has given back the June breakout."},
  {"d": "2026-06-12", "t": "No headline driver behind prior +4.4% push to the top of the monthly range", "src": "scan note", "read": "Thin-coverage materials name — the breakout itself was the news; stock has since retraced to 34.3."},
  {"d": "profile", "t": "San Fang 三芳化學: PU synthetic leather, films & elastic fibers for footwear/apparel supply chains", "src": "Yahoo Finance profile", "read": "Sporting-goods materials supplier — your list's diversifier away from AI/rates beta.", "url": "https://finance.yahoo.com/quote/1307.TW/"}
 ],
 "SPCX": [
  {"d": "2026-06-12", "t": "SpaceX IPO: biggest in history — $135/share, $75B raised, $1.75T valuation; closes +19% at $161 on day one", "src": "CNBC", "read": "Day-one: $135 IPO → $150 open → $176.5 intraday high → $161 close. Now at $156 — consolidating above day-1 open.", "url": "https://www.cnbc.com/2026/06/12/spacex-ipo-spcx-live-updates.html"},
  {"d": "2026-06", "t": "Lockup: early investors may unlock 20% of holdings after Q2 earnings (~late July/early Aug); bulk of shares unlocks Dec 8, 2026", "src": "StockAlarm / Darrow WM", "read": "Complex multi-tier lockup; watch Q2 earnings date announcement for first real supply-unlock event.", "url": "https://pro.stockalarm.io/blog/spacex-ipo-lockup-financials"},
  {"d": "2026-06-12", "t": "Starlink confirmed as SpaceX's only profitable segment in IPO disclosures", "src": "Kiplinger/CNBC", "read": "The $1.75T tag is Starlink cashflow + Starship optionality — watch Starlink subscriber/ARPU metrics at first earnings.", "url": "https://www.kiplinger.com/investing/live/spacex-ipo-spcx-stock-updates-and-commentary"},
  {"d": "2026-06", "t": "KeyBanc initiates: 'many high-growth avenues long-term, but risk/reward balanced near-term'", "src": "Investing.com / KeyBanc", "read": "First disclosed analyst note; more initiations expected ~July 22 when broader quiet period ends.", "url": "https://www.investing.com/analysis/spacex-lockup-countdown-when-shares-may-become-safer-to-buy-200682574"}
 ],
 "AAPL": [
  {"d": "2026-04-30", "t": "Apple Q2 FY26 earnings: $111.2B revenue (+17% YoY), iPhone $57B (+22%); Tim Cook tips Ternus on the call", "src": "CNN Business / Fortune", "read": "Strong quarter; hardware cycle intact. The AI strategy and succession are the swing factors, not the business.", "url": "https://www.cnn.com/2026/04/30/tech/apple-earnings-john-ternus-new-ceo"},
  {"d": "2026-04-20", "t": "Tim Cook to become Executive Chairman; John Ternus named CEO effective September 1, 2026", "src": "Apple Newsroom", "read": "Succession confirmed. Ternus is a hardware-first choice — AI monetization path unclear until he states capital-allocation stance.", "url": "https://www.apple.com/newsroom/2026/04/tim-cook-to-become-apple-executive-chairman-john-ternus-to-become-apple-ceo/"},
  {"d": "2026-06-08", "t": "WWDC 2026: rebuilt Siri on Apple Intelligence (own models + Google Gemini), iOS 27 — stock fell ~$301 → ~$290", "src": "TradingKey / Analytics Insight", "read": "AI letdown: no monetization story, Gemini reliance read as weakness. Expectations reset low going into Q3 earnings.", "url": "https://www.tradingkey.com/analysis/stocks/us-stocks/261952325-apple-intelligence-is-live-can-wwdc-2026-spark-an-iphone-supercycle-tradingkey"},
  {"d": "2026-06-05", "t": "Morgan Stanley: WWDC is the 'key catalyst' that decides Apple's AI positioning", "src": "Yahoo Finance", "read": "The bar that was set — and missed. Watch post-Q3 earnings for analyst revisions.", "url": "https://finance.yahoo.com/markets/stocks/articles/apple-wwdc-2026-key-catalyst-233816532.html"}
 ]
};
