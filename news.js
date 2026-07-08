// Machine-managed news feed. Strict JSON body — refreshed by the scheduled scan.
// Per symbol: newest first, keep ≤6 items. "_tape" = market-wide items for the dashboard strip.
// Each item: d=date, t=headline, src=source, read=Claude's one-line take, url optional.
const NEWS = {
 "_tape": [
  {
   "d": "2026-07-07",
   "t": "SpaceX quiet period ends: Goldman Sachs (Buy, PT $205), Deutsche Bank (Buy, PT $255), Raymond James (Strong Buy), Macquarie (Outperform, PT $250) all initiate — avg PT $188 vs $149 close",
   "src": "GuruFocus/TradingKey",
   "read": "Bullish Street consensus on IPO day-1 bank; but SPCX still fell on the news — flow/lockup fears overpowering fundamentals.",
   "url": "https://www.gurufocus.com/news/8946935/spcx-initiated-coverage-by-goldman-sachs-rating-set-to-buy"
  },
  {
   "d": "2026-07-07",
   "t": "NVDA denies report that Kyber NVL144 platform is delayed to 2028; stock +1% on the denial",
   "src": "TradingKey",
   "read": "Roadmap-delay fear was the proximate driver of recent weakness — denial removes a specific overhang, doesn't fix the broader mega-cap rotation.",
   "url": "https://www.tradingkey.com/analysis/stocks/us-stocks/262015350-nvidia-nvda-stock-forecast-july-2026-kyber-denial-goldman-tradingkey"
  },
  {
   "d": "2026-06-17",
   "t": "FOMC meets next Jul 28–29; June SEP shows 9 of 19 officials now expect ≥1 hike in 2026, year-end core PCE seen at 3.6% (up from 2.7% forecast)",
   "src": "Federal Reserve SEP",
   "read": "The hawkish tilt firmed further since the June meeting — sticky inflation is now the base case, not a tail risk. Biggest overhang for every rate-sensitive name on this list.",
   "url": "https://www.federalreserve.gov/newsevents/pressreleases/monetary20260617a.htm"
  },
  {
   "d": "2026-07-06",
   "t": "TSMC guides Q2 revenue $39.0–40.2B (Q2 call expected mid-July); HPC/AI now 61% of Q1 revenue, capacity is the binding constraint for 2026",
   "src": "SEC 6-K / Bloomberg",
   "read": "AI demand still accelerating, not plateauing — sets the tone for the whole Taiwan supply chain including the memory trio.",
   "url": "https://www.bloomberg.com/news/articles/2026-04-16/tsmc-s-profit-beats-estimates-after-war-failed-to-dent-ai-demand"
  },
  {
   "d": "2026-06-11",
   "t": "US rallies on Trump signal of US–Iran deal: S&P +1.8%, Nasdaq 100 +3.3%, SOX +8%",
   "src": "Bloomberg",
   "read": "Geopolitical wildcard flipped tailwind; oil has since pulled back from its >$100 spike as the interim deal held.",
   "url": "https://www.bloomberg.com/news/articles/2026-06-11/asian-stocks-to-gain-as-trump-signals-us-iran-deal-markets-wrap"
  },
  {
   "d": "2026-06-02",
   "t": "Mainstream DRAM contract prices seen +58–63% QoQ; DDR4 shortage est. 19–20%",
   "src": "BigGo/broker research",
   "read": "The memory-supercycle number — the whole trio trades off this.",
   "url": "https://finance.biggo.com/news/FiAmhp4BoicNoOgC7kCY"
  }
 ],
 "2344": [
  {
   "d": "2026-07-06",
   "t": "Stock closes 183.0 (-0.81%), fully retracing below the 190 double-top/breakout level that was the key pivot last week",
   "src": "scan note",
   "read": "190 support has now failed — next real volume support is thin until the 152–160 zone from the June breakout base. Q2 earnings (Jul 30) is the next catalyst to arrest the slide."
  },
  {
   "d": "2026-07-05",
   "t": "Global DDR4/DRAM contract prices still seen +58–63% QoQ, shortage estimated 19–20% — cycle narrative unchanged",
   "src": "BigGo/broker research",
   "read": "Fundamentals haven't cracked; this is a valuation/positioning unwind after the 225 spike, not a thesis break."
  },
  {
   "d": "2026-05-05",
   "t": "Winbond Q1 FY2026: gross margin 53.4% (record), EPS NT$2.25; CEO says Q2 price hikes ≥ Q1, revenue to hit new all-time high",
   "src": "BigGo Finance",
   "read": "Best quarter in company history — the cycle is ahead of consensus. Watch the Q2 print (late July) for confirmation.",
   "url": "https://finance.biggo.com/news/TW_2344.TW_2026-05-05"
  },
  {
   "d": "2026-06-02",
   "t": "Morgan Stanley raises Winbond target NT$100 → NT$222; stock limit-up at NT$184.5",
   "src": "BigGo Finance",
   "read": "Street-high conviction on legacy DRAM/NOR; 222 is the bull-case anchor. Stock traded above target (225) briefly on 06-26.",
   "url": "https://finance.biggo.com/news/FiAmhp4BoicNoOgC7kCY"
  },
  {
   "d": "2026-06-02",
   "t": "Winbond breaks into Samsung Electro-Mechanics supply chain",
   "src": "BigGo Finance",
   "read": "Customer diversification — supports the re-rating beyond pure price-cycle."
  },
  {
   "d": "2026-01-19",
   "t": "Morgan Stanley first big upgrade (PT 88→130) on DDR3/DDR4 + NOR tightening",
   "src": "TS2",
   "read": "The original thesis note — price has since blown well through it.",
   "url": "https://ts2.tech/en/winbond-electronics-stock-price-jumps-as-morgan-stanley-target-hike-fuels-taiwan-memory-rally/"
  }
 ],
 "2337": [
  {
   "d": "2026-07-07",
   "t": "Macronix June consolidated net sales NT$6.956B, +11.2% MoM, +216.1% YoY; H1 2026 revenue +128.8% YoY",
   "src": "MarketScreener",
   "read": "Best confirmation yet that the NOR/legacy-DRAM cycle is real at the revenue line, not just the stock price — supports the bounce off 132.5 MSL.",
   "url": "https://www.marketscreener.com/news/macronix-international-announces-consolidated-net-sales-of-nt-6-956-billion-for-june-2026-ce7f5edbde89f022"
  },
  {
   "d": "2026-06-02",
   "t": "Morgan Stanley rates Macronix Overweight in memory sector call",
   "src": "BigGo Finance",
   "read": "Same supercycle umbrella as Winbond; NOR pricing is the driver. Stock hit NT$192 on 06-23 then gave back 25%.",
   "url": "https://finance.biggo.com/news/FiAmhp4BoicNoOgC7kCY"
  },
  {
   "d": "2026 (earlier)",
   "t": "Institutional selling of 43M shares on a prior record-high day (-4%)",
   "src": "BigGo Finance",
   "read": "Reminder that rotation in this name is violent — the current -25% pullback from 192 fits the pattern."
  }
 ],
 "6770": [
  {
   "d": "2026-07-01",
   "t": "PSMC posts first profitable quarter (Q1 2026) after a 10-quarter loss streak; Tongluo/Micron alliance credited as the turnaround driver",
   "src": "BigGo Finance",
   "read": "The Micron deal is now showing up in the P&L, not just the balance sheet. Second fab (~270k sq ft cleanroom) construction slated to start by end-FY2026.",
   "url": "https://finance.biggo.com/news/V8BCe50BDPbb-ItT2GSn"
  },
  {
   "d": "2026-03-16",
   "t": "Micron completes acquisition of PSMC Tongluo P5 fab — cleanroom retrofit begins",
   "src": "Digitimes",
   "read": "Deal closed: US$1.8B cash in hand for Powerchip. DRAM output at P5 expected H2 2027. Removes deal-break risk.",
   "url": "https://www.digitimes.com/news/a20260316VL200/micron-acquisition-taiwan-psmc-cleanroom.html"
  },
  {
   "d": "2026-01-17",
   "t": "Micron LOI to acquire PSMC's P5 fab (Tongluo) for US$1.8B cash",
   "src": "Micron / DataCenter Dynamics",
   "read": "Hard-asset validation + cash infusion; deal subsequently closed March 2026.",
   "url": "https://www.datacenterdynamics.com/en/news/micron-acquires-powerchips-p5-taiwanese-fab-for-18bn-will-ramp-up-dram-output-at-site-by-2027/"
  },
  {
   "d": "2026-06-02",
   "t": "Morgan Stanley rates Powerchip Overweight",
   "src": "BigGo Finance",
   "read": "Sector call; PSMC is the highest-beta expression of the DDR4 shortage.",
   "url": "https://finance.biggo.com/news/FiAmhp4BoicNoOgC7kCY"
  }
 ],
 "NVDA": [
  {
   "d": "2026-07-07",
   "t": "NVDA denies Kyber NVL144 delay-to-2028 report; shares +1% on the denial, closing $196.93",
   "src": "TradingKey",
   "read": "Stock stabilizing back above the $189.8 MSL after the Jul 1 breakdown. Removes one specific bear-case data point.",
   "url": "https://www.tradingkey.com/analysis/stocks/us-stocks/262015350-nvidia-nvda-stock-forecast-july-2026-kyber-denial-goldman-tradingkey"
  },
  {
   "d": "2026-07-04",
   "t": "NVDA is the worst performer in its own chip group in 2026 — up only 5% YTD vs S&P +10%; Goldman calls 21.7x forward PE 'compelling'",
   "src": "Motley Fool / TradingKey",
   "read": "Valuation reset is real — Blackwell sold out through mid-2026 but the market wants to see the AI-capex-rotation fear resolve first. Fed Jul 29 decision is the next big swing factor.",
   "url": "https://www.fool.com/investing/2026/07/04/nvidia-stock-is-flat-for-2026-time-to-cash-out-or/"
  },
  {
   "d": "2026-07-01",
   "t": "NVDA slipping 2%+ today; down ~7% over the past month amid sector rotation away from AI mega-caps",
   "src": "Invezz",
   "read": "Technicals weak (broke below recent MSL at $199.34) despite Blackwell fundamentals; market breadth rotation is the culprit.",
   "url": "https://invezz.com/ng/news/2026/07/01/why-nvidia-stock-is-slipping-over-2percent-today/"
  },
  {
   "d": "2026-06-30",
   "t": "Q1 FY27: revenue $82B +85% YoY, $91B Q2 guidance; 15× next-year earnings after the selloff",
   "src": "Motley Fool",
   "read": "At 15× forward PE on 85% growth, Street argues the setup looks attractive — but rate fears override fundamentals short-term.",
   "url": "https://www.fool.com/investing/2026/06/30/3-reasons-to-buy-nvidia-stock-in-july/"
  },
  {
   "d": "2026-06-11",
   "t": "Dividend raised ×25 to $0.25/qtr; pledges to return ≥50% of FCF",
   "src": "Motley Fool",
   "read": "A structural floor under dips — mega-cap capital-return era begins.",
   "url": "https://www.fool.com/investing/2026/06/11/nvidia-just-announced-a-potential-windfall-for-sha/"
  },
  {
   "d": "2026-06",
   "t": "Consensus: Strong Buy, average PT ~$298 (+50% from current level)",
   "src": "stockanalysis.com",
   "read": "Street hasn't capitulated on the AI trade even as the stock corrects 7%.",
   "url": "https://stockanalysis.com/stocks/nvda/"
  }
 ],
 "1307": [
  {
   "d": "2026-07-06",
   "t": "Stock falls 7.4% to 33.15, breaking below the Jun 30 MSL (33.85) — no company-specific news found; likely swept up in broad TW market volatility (TAIEX has had several >3% single-day swings since late June)",
   "src": "scan note",
   "read": "Technical trend flip risk: this is the first MSL breach since the June breakout. Without a catalyst until the Jul 10 monthly revenue print, treat this as pure technical weakness."
  },
  {
   "d": "2026-07-10",
   "t": "TWSE June monthly revenue disclosure due — 1307 is the key fundamental pulse for San Fang",
   "src": "TWSE calendar",
   "read": "Upcoming: the only recurring catalyst for this thin-coverage name. Current price 34.3 has given back the June breakout."
  },
  {
   "d": "2026-06-12",
   "t": "No headline driver behind prior +4.4% push to the top of the monthly range",
   "src": "scan note",
   "read": "Thin-coverage materials name — the breakout itself was the news; stock has since retraced to 34.3."
  },
  {
   "d": "profile",
   "t": "San Fang 三芳化學: PU synthetic leather, films & elastic fibers for footwear/apparel supply chains",
   "src": "Yahoo Finance profile",
   "read": "Sporting-goods materials supplier — your list's diversifier away from AI/rates beta.",
   "url": "https://finance.yahoo.com/quote/1307.TW/"
  }
 ],
 "SPCX": [
  {
   "d": "2026-07-07",
   "t": "SPCX joins Nasdaq-100 (rebalance effective today) but falls ~6-8% intraday — passive inflows (~$4.3B from QQQ, ~$27B total) are small vs. a ~3-5% public float, and lockup/quiet-period-end jitters dominate",
   "src": "Motley Fool",
   "read": "Classic 'sell the news': index inclusion and bullish analyst initiations hit the same day as lockup-expiry anxiety — flow risk is overpowering fundamentals into the Jul/Aug earnings + first 20% unlock.",
   "url": "https://www.fool.com/investing/2026/07/07/why-did-spacex-stock-drop-today/"
  },
  {
   "d": "2026-07-07",
   "t": "Quiet period ends: GS (Buy, PT $205), Deutsche Bank (Buy, PT $255), Raymond James (Strong Buy), Macquarie (Outperform, PT $250) initiate — consensus avg PT $188 vs ~$149 close",
   "src": "GuruFocus",
   "read": "Every initiating bank is bullish, well above spot — but the stock sold off same-day. Street conviction vs. near-term supply/flow mechanics is the tension to watch.",
   "url": "https://www.gurufocus.com/news/8946935/spcx-initiated-coverage-by-goldman-sachs-rating-set-to-buy"
  },
  {
   "d": "2026-06-12",
   "t": "SpaceX IPO: biggest in history — $135/share, $75B raised, $1.75T valuation; closes +19% at $161 on day one",
   "src": "CNBC",
   "read": "Day-one: $135 IPO → $150 open → $176.5 intraday high → $161 close. Now at $156 — consolidating above day-1 open.",
   "url": "https://www.cnbc.com/2026/06/12/spacex-ipo-spcx-live-updates.html"
  },
  {
   "d": "2026-06",
   "t": "Lockup: early investors may unlock 20% of holdings after Q2 earnings (~late July/early Aug); bulk of shares unlocks Dec 8, 2026",
   "src": "StockAlarm / Darrow WM",
   "read": "Complex multi-tier lockup; watch Q2 earnings date announcement for first real supply-unlock event.",
   "url": "https://pro.stockalarm.io/blog/spacex-ipo-lockup-financials"
  },
  {
   "d": "2026-06-12",
   "t": "Starlink confirmed as SpaceX's only profitable segment in IPO disclosures",
   "src": "Kiplinger/CNBC",
   "read": "The $1.75T tag is Starlink cashflow + Starship optionality — watch Starlink subscriber/ARPU metrics at first earnings.",
   "url": "https://www.kiplinger.com/investing/live/spacex-ipo-spcx-stock-updates-and-commentary"
  },
  {
   "d": "2026-06",
   "t": "KeyBanc initiates: 'many high-growth avenues long-term, but risk/reward balanced near-term'",
   "src": "Investing.com / KeyBanc",
   "read": "First disclosed analyst note; more initiations expected ~July 22 when broader quiet period ends.",
   "url": "https://www.investing.com/analysis/spacex-lockup-countdown-when-shares-may-become-safer-to-buy-200682574"
  }
 ],
 "AAPL": [
  {
   "d": "2026-07-07",
   "t": "Stock at $310.66 — has fully round-tripped the post-WWDC dip (~$290) and is now trading above the pre-WWDC MSH ($302.42)",
   "src": "scan note",
   "read": "Sharp sentiment reversal in under a month. Maxim raised PT $310→$350 (Buy) post-WWDC; consensus is Moderate Buy (23 Strong Buy / 3 Moderate Buy / 15 Hold / 1 Strong Sell of 42)."
  },
  {
   "d": "2026-07-02",
   "t": "Apple drops its 7-year 'net cash neutral' policy — frees incoming CEO Ternus to invest more aggressively in AI infrastructure and M&A",
   "src": "TheNextWeb",
   "read": "A capital-allocation signal the market read as bullish — Ternus gets a real war chest instead of pure buyback/dividend discipline.",
   "url": "https://thenextweb.com/news/apple-ternus-ceo-buyback-cash-strategy"
  },
  {
   "d": "2026-04-30",
   "t": "Apple Q2 FY26 earnings: $111.2B revenue (+17% YoY), iPhone $57B (+22%); Tim Cook tips Ternus on the call",
   "src": "CNN Business / Fortune",
   "read": "Strong quarter; hardware cycle intact. The AI strategy and succession are the swing factors, not the business.",
   "url": "https://www.cnn.com/2026/04/30/tech/apple-earnings-john-ternus-new-ceo"
  },
  {
   "d": "2026-04-20",
   "t": "Tim Cook to become Executive Chairman; John Ternus named CEO effective September 1, 2026",
   "src": "Apple Newsroom",
   "read": "Succession confirmed. Ternus is a hardware-first choice — AI monetization path unclear until he states capital-allocation stance.",
   "url": "https://www.apple.com/newsroom/2026/04/tim-cook-to-become-apple-executive-chairman-john-ternus-to-become-apple-ceo/"
  },
  {
   "d": "2026-06-08",
   "t": "WWDC 2026: rebuilt Siri on Apple Intelligence (own models + Google Gemini), iOS 27 — stock fell ~$301 → ~$290",
   "src": "TradingKey / Analytics Insight",
   "read": "AI letdown: no monetization story, Gemini reliance read as weakness. Expectations reset low going into Q3 earnings.",
   "url": "https://www.tradingkey.com/analysis/stocks/us-stocks/261952325-apple-intelligence-is-live-can-wwdc-2026-spark-an-iphone-supercycle-tradingkey"
  },
  {
   "d": "2026-06-05",
   "t": "Morgan Stanley: WWDC is the 'key catalyst' that decides Apple's AI positioning",
   "src": "Yahoo Finance",
   "read": "The bar that was set — and missed. Watch post-Q3 earnings for analyst revisions.",
   "url": "https://finance.yahoo.com/markets/stocks/articles/apple-wwdc-2026-key-catalyst-233816532.html"
  }
 ]
};
