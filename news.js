// Machine-managed news feed. Strict JSON body — refreshed by the scheduled scan.
// Per symbol: newest first, keep ≤6 items. "_tape" = market-wide items for the dashboard strip.
// Each item: d=date, t=headline, src=source, read=Claude's one-line take, url optional.
const NEWS = {
 "_tape": [
  {
   "d": "2026-07-17",
   "t": "TAIEX crashes 2,953.71 points (-6.47%) to 42,671.27 — the largest point drop on record — on a record NT$189B single-day foreign outflow; TSMC -7.29% to NT$2,290, UMC limit-down",
   "src": "BigGo / Bloomberg",
   "read": "The trigger was one line from C.C. Wei's earnings call: 'only AI-related mature process nodes should be experiencing tight supply' — it detonated the entire mature-node/memory trade in a single session.",
   "url": "https://www.bloomberg.com/news/articles/2026-07-17/chip-stock-selloff-deepens-in-asia-as-tsmc-fails-to-impress"
  },
  {
   "d": "2026-07-16",
   "t": "TSMC Q2 beats across the board: revenue $40.2B (guide $39.0-40.2B), gross margin 67.7% (guide 65.5-67.5%), HPC +20% QoQ; full-year capex guidance raised — AI demand 'extremely robust' on the shift to agentic AI",
   "src": "Investing.com / TechTimes",
   "read": "The numbers were everything bulls wanted; the market crashed anyway on the mature-node commentary — a pure narrative reversal, not a results miss.",
   "url": "https://www.investing.com/news/company-news/tsmc-q2-2026-slides-ai-demand-drives-record-margins-hpc-surges-20-93CH-4794789"
  },
  {
   "d": "2026-07-15",
   "t": "TAIEX +893.64 to 45,631.59; memory melt-up — Powerchip (76.1), Winbond (180.5) and ESMT (239) all lock limit-up on cool US CPI, SOX +2.54%, SK hynix +11%, and Powerchip's blowout earnings call",
   "src": "BigGo Finance",
   "read": "The euphoria high-water mark of the cycle, two sessions before the crash — Thursday's 444M-share volume in Powerchip now reads as the blow-off.",
   "url": "https://finance.biggo.com/news/43ee1387-c488-4272-b60e-a97393574ca9"
  },
  {
   "d": "2026-07-14",
   "t": "June CPI cools sharply: headline 3.5% vs 3.8% expected, core 2.6% vs 2.9%; energy -0.4% MoM. September hike odds trimmed to ~63% from 75%+; Fed Chair Warsh: not 'mission accomplished'",
   "src": "CNBC / IG",
   "read": "The soft print fueled the Jul 15 melt-up, but the Fed regime is still hawkish-hold with hike risk — Jul 28-29 FOMC is the next test, with June PCE (~Jul 24) in between.",
   "url": "https://www.cnbc.com/2026/07/14/consumer-price-index-inflation-report-june-2026.html"
  },
  {
   "d": "2026-07-14",
   "t": "US launches new airstrikes on Iran and reimposes the Hormuz blockade; Trump floats then abandons a 20% fee on strait cargo; Brent hits ~$86, a 1-month high, as transits drop >50%",
   "src": "CNBC / Al Jazeera",
   "read": "The June truce is fully dead. An oil shock layered on top of a hawkish Fed and a broken TW tech tape is the worst macro mix of the year so far.",
   "url": "https://www.cnbc.com/2026/07/14/oil-prices-today-brent-wti-hormuz-trump-toll-iran.html"
  },
  {
   "d": "2026-07-17",
   "t": "US quad-witching session compounds the semi rout — SOX heavy, NVDA -2.2%; AAPL the only green megacap, closing at a record",
   "src": "Yahoo Finance",
   "read": "US didn't panic with Taiwan — the damage stayed contained to semis/AI-capex names while the 'AI-lite' haven trade (AAPL) absorbed the rotation.",
   "url": "https://finance.yahoo.com/markets/stocks/"
  }
 ],
 "2344": [
  {
   "d": "2026-07-17",
   "t": "Winbond -9.87% to 155.0, closing at the session low in the record TAIEX crash — gives back the entire limit-up week and then some",
   "src": "BigGo / TWSE",
   "read": "Closing at the dead low with record foreign outflow behind it points to Monday follow-through; 165 (the old July low) is now overhead resistance.",
   "url": "https://finance.biggo.com/news/a59848ba-f6e6-443e-8fbc-4542a3f83093"
  },
  {
   "d": "2026-07-16",
   "t": "Winbond -4.7% to 172 in pre-TSMC-call profit-taking; TAIEX briefly loses 45,000 before recovering",
   "src": "BigGo Finance",
   "read": "The distribution started a day before the headline crash — someone was selling the earnings-call rumor.",
   "url": "https://finance.biggo.com/news/a59848ba-f6e6-443e-8fbc-4542a3f83093"
  },
  {
   "d": "2026-07-15",
   "t": "Winbond locks limit-up at 180.5 in the sector melt-up (cool CPI + SK hynix +11% + Powerchip's earnings call)",
   "src": "BigGo Finance",
   "read": "The reclaim of the 07-08 breakdown lasted exactly two sessions — a textbook bull trap in hindsight.",
   "url": "https://finance.biggo.com/news/43ee1387-c488-4272-b60e-a97393574ca9"
  },
  {
   "d": "2026-07-14",
   "t": "Q3 DDR4 8Gb contract quotes still reported up to +50% QoQ (enterprise-SSD-driven shortage); Q3 DRAM contracts broadly guided +20-30%",
   "src": "TrendForce / DIGITIMES",
   "read": "The pricing fundamentals and the tape have fully decoupled — Jul 30 Q2 earnings (CEO guided price hikes 'not smaller than Q1') is the referendum.",
   "url": "https://www.trendforce.com/presscenter/news/"
  },
  {
   "d": "2026-07-13",
   "t": "Post-typhoon reopen: Winbond fades -5.4% to 167 (high 183) as the Jul 9 reversal fails to draw follow-through",
   "src": "TWSE",
   "read": "The first tell of the week: a 183 high sold straight down — the reversal never had real sponsorship.",
   "url": "https://tw.stock.yahoo.com/quote/2344.TW"
  }
 ],
 "2337": [
  {
   "d": "2026-07-17",
   "t": "Macronix -8.42% to 125.0 — closes decisively below the 135 MSL it had reclaimed the prior week; worst weekly close since May",
   "src": "BigGo / TWSE",
   "read": "The cleanest technical breakdown of the trio: the stop-run-and-reclaim thesis is dead, and 132.5-136.5 flips back to resistance.",
   "url": "https://finance.biggo.com/news/a59848ba-f6e6-443e-8fbc-4542a3f83093"
  },
  {
   "d": "2026-07-16",
   "t": "Macronix tumbles -8.1% to 136.5, the worst of the trio, in pre-earnings-call positioning",
   "src": "BigGo Finance",
   "read": "Lower liquidity cuts both ways — the laggard-catch-up trade unwound twice as fast as it built.",
   "url": "https://finance.biggo.com/news/a59848ba-f6e6-443e-8fbc-4542a3f83093"
  },
  {
   "d": "2026-07-15",
   "t": "Macronix +8.8% to 148.5 (high 150.5) in the sector melt-up — highest close since late June",
   "src": "BigGo Finance",
   "read": "The 150 tag was the week's high-water mark; the round-trip to 125 took two sessions.",
   "url": "https://finance.biggo.com/news/43ee1387-c488-4272-b60e-a97393574ca9"
  },
  {
   "d": "2026-07-14",
   "t": "Macronix wicks to 130.5 intraday before closing 139.5 — the third MSL stop-run in two weeks, this time ahead of the CPI print",
   "src": "TWSE",
   "read": "Repeated stop-runs at the same level exhaust the buyers who defend it — Friday's break finally proved it.",
   "url": "https://tw.stock.yahoo.com/quote/2337.TW"
  }
 ],
 "6770": [
  {
   "d": "2026-07-17",
   "t": "Powerchip -9.93% to 68.9 — foreign investors dump 115,284 lots, the most-sold name on the entire TWSE",
   "src": "BigGo / TWSE",
   "read": "Wei's mature-node comment lands hardest on the one watchlist name that IS the mature-node foundry story — the tape sided with Wei over Frank Huang.",
   "url": "https://finance.biggo.com/news/a59848ba-f6e6-443e-8fbc-4542a3f83093"
  },
  {
   "d": "2026-07-15",
   "t": "Q2 earnings call ignites the sector: NPAT NT$3.29B, gross margin 28% (3.5-year high); Chairman Frank Huang projects Taiwan mature-node foundry GMs 'could all break 40%'; dividends to resume next year",
   "src": "BigGo Finance",
   "read": "The fundamental beat is real and big — but Huang's 40% GM projection is now in direct public conflict with C.C. Wei's supply-demand read two days later.",
   "url": "https://finance.biggo.com/news/43ee1387-c488-4272-b60e-a97393574ca9"
  },
  {
   "d": "2026-07-15",
   "t": "Domestic brokers raise Powerchip targets to NT$80 (from NT$65) post-call; 2026 EPS estimates ~NT$6.26, 2027 ~NT$6.39",
   "src": "BigGo Finance",
   "read": "At 68.9 the stock trades ~11x the new 2026 estimate — the bull case survives the crash if the estimates do.",
   "url": "https://finance.biggo.com/news/43ee1387-c488-4272-b60e-a97393574ca9"
  },
  {
   "d": "2026-07-16",
   "t": "Blow-off session: 79.5 intraday high on 444M shares — the heaviest volume day of the cycle — before fading to 76.5",
   "src": "TWSE",
   "read": "Record volume at the high that fails to hold is distribution; Friday confirmed it.",
   "url": "https://tw.stock.yahoo.com/quote/6770.TW"
  },
  {
   "d": "2026-07-14",
   "t": "Flush to 63.4 intraday (a new July low, now the MSL) before reversing to close 69.2 ahead of the earnings call",
   "src": "TWSE",
   "read": "63.4 is the line the whole July structure now hangs on — below it there's no support until the 56.6-59.1 zone.",
   "url": "https://tw.stock.yahoo.com/quote/6770.TW"
  }
 ],
 "NVDA": [
  {
   "d": "2026-07-17",
   "t": "NVDA -2.21% to 202.81 on quad-witching Friday as the TSMC-call semi rout goes global; low of 197.97 tags the 197.6 zone top and bounces",
   "src": "Yahoo Finance",
   "read": "Sympathy de-grossing, not a story change — Wei's mature-node caution explicitly exempted AI, and the low landed on structure to the tick.",
   "url": "https://finance.yahoo.com/quote/NVDA/"
  },
  {
   "d": "2026-07-16",
   "t": "TSMC beats and raises capex — HPC +20% QoQ, AI demand 'extremely robust' on agentic-AI compute growth",
   "src": "Investing.com",
   "read": "Direct supply-chain confirmation for Blackwell/Rubin demand from NVDA's sole foundry, two sessions after the H200 China news.",
   "url": "https://www.investing.com/news/company-news/tsmc-q2-2026-slides-ai-demand-drives-record-margins-hpc-surges-20-93CH-4794789"
  },
  {
   "d": "2026-07-14",
   "t": "China reportedly clears Alibaba and ByteDance to place H200 orders; NVDA +4.07% to 211.8 on the news + cool CPI",
   "src": "Yahoo Finance / TheStreet",
   "read": "Guidance embeds zero China data-center revenue, so any approved H200 volume is pure upside optionality into the Aug 26 print — even if the first shipments are small.",
   "url": "https://finance.yahoo.com/news/nvidia-stock-rises-china-reportedly-123153309.html"
  },
  {
   "d": "2026-07-13",
   "t": "NVDA -3.43% to 203.53, giving back the Jul 10 breakout day as the prior week's three-catalyst pop consolidates",
   "src": "Yahoo Finance",
   "read": "The 213.99 MSH rejected the first attempt; the stock spent the whole week pinned between the 197.6 zone top and the MSH.",
   "url": "https://finance.yahoo.com/quote/NVDA/"
  },
  {
   "d": "2026-08-26",
   "t": "Q2 FY27 earnings est. Aug 26 — guide was $91B ±2%; Street watching whether China H200 shipments add to the number",
   "src": "The Motley Fool",
   "read": "The setup: guidance excludes China entirely, so the approval channel reopening is a free call option on the print.",
   "url": "https://www.thestreet.com/investing/nvidia-china-h200-license-could-unlock-earnings-upside"
  }
 ],
 "1307": [
  {
   "d": "2026-07-10",
   "t": "June revenue finally lands: NT$852.9M, -2.68% MoM but +11.11% YoY — second straight month of accelerating YoY growth; H1 ~NT$5.66B",
   "src": "Yahoo TW / TWSE MOPS",
   "read": "The long-pending catalyst resolved mildly positive and the stock didn't move — the range (30.65-33.0) remains the whole story.",
   "url": "https://tw.stock.yahoo.com/quote/1307/revenue"
  },
  {
   "d": "2026-07-17",
   "t": "San Fang dips just -1.99% to 32.05 on the worst TAIEX point-drop day ever recorded",
   "src": "TWSE",
   "read": "Exactly the low-beta ballast behavior it's on the list for — held the 30.65-31.85 zone without a test.",
   "url": "https://tw.stock.yahoo.com/quote/1307.TW"
  },
  {
   "d": "2026-07-15",
   "t": "Quiet green week inside the range: 32.35 → 32.5 → 32.4 → 32.7 before Friday's dip — zero participation in the memory melt-up or crash",
   "src": "TWSE",
   "read": "Uncorrelated with the sector drama in both directions; the 31.95-33.0 resistance band is still the lid.",
   "url": "https://tw.stock.yahoo.com/quote/1307.TW"
  }
 ],
 "SPCX": [
  {
   "d": "2026-07-17",
   "t": "SPCX -5.43% to 123.99 (low 122.12) after SpaceX delays the flagship Starship launch — fifth straight down day, ~45% below the $225 post-IPO high",
   "src": "Benzinga / StartupHub",
   "read": "Every IPO buyer is now underwater with the Aug 6 earnings + lockup double event three weeks out — sentiment damage compounding daily.",
   "url": "https://www.benzinga.com/trading-ideas/movers/26/07/60481036/spacex-spcx-stock-falls-below-135-ipo-price"
  },
  {
   "d": "2026-07-16",
   "t": "First-ever close below the $135 IPO price (131.11), after Wednesday's intraday break — one month and four days after the largest IPO in US history",
   "src": "Yahoo Finance / Motley Fool",
   "read": "Broken-IPO territory changes the holder base math: the $75B raised at $135 is now everyone's overhead supply.",
   "url": "https://finance.yahoo.com/markets/stocks/articles/spacex-stock-closes-below-ipo-200159927.html"
  },
  {
   "d": "2026-07-13",
   "t": "Underwriter quiet period ends — coverage wave lands: Morgan Stanley Overweight $300, Raymond James Strong Buy $800 (Jul 7), CFRA $115 low; consensus ~$240 across ~30 analysts",
   "src": "Seeking Alpha / Motley Fool",
   "read": "A ~95% gap between consensus and spot is extreme even for a broken IPO — the Street is effectively all-in ahead of numbers nobody has seen.",
   "url": "https://seekingalpha.com/news/4611831-morgan-stanley-buys-into-spacexs-ai-future-with-new-overweight-rating"
  },
  {
   "d": "2026-07-14",
   "t": "Nasdaq-100 inclusion analysis: ~$4.3B of forced passive buying against a ~3% float",
   "src": "TradingKey",
   "read": "The main squeeze mechanic on the bear side — small float plus forced indexation can produce violent counter-trend rallies from oversold.",
   "url": "https://www.tradingkey.com/analysis/stocks/us-stocks/262011296-spacex-spcx-stock-forecast-july-2026-nasdaq-100-inclusion-tradingkey"
  },
  {
   "d": "2026-07-15",
   "t": "Bear focus shifts to Starlink ARPU: $99 (FY2023) → $66 (Q1 2026) even as subscribers reportedly hit 10M",
   "src": "Yahoo Finance",
   "read": "The only profitable segment is growing units while shrinking unit economics — Aug 6 is the first time anyone sees the real mix.",
   "url": "https://finance.yahoo.com/markets/stocks/articles/spacex-stock-closes-below-ipo-200159927.html"
  }
 ],
 "AAPL": [
  {
   "d": "2026-07-17",
   "t": "AAPL +0.14% to a record 333.74 — the only green megacap through the semi rout; July +15%, tracking its best month in ~4 years; market cap $4.66T",
   "src": "Stocktwits / BigGo",
   "read": "The 'AI-lite haven' trade in full effect: money fleeing AI-capex exposure is parking in the one megacap that never overspent.",
   "url": "https://finance.biggo.com/news/7c70b605-0dbc-418f-83c8-858315f28238"
  },
  {
   "d": "2026-07-15",
   "t": "Breakout extends: 327.5 (+4.0%) then 333.26 — records on consecutive sessions on heavy volume",
   "src": "The Motley Fool",
   "read": "The 07-15 base at ~317 is now the momentum invalidation level; five straight up days is stretched but sponsored.",
   "url": "https://www.fool.com/investing/2026/07/15/why-apple-stock-climbed-to-new-all-time-high-today/"
  },
  {
   "d": "2026-07-14",
   "t": "China's cyberspace regulator approves Apple Intelligence for the Chinese market, running on Baidu/Alibaba models",
   "src": "MacRumors / FX Leaders",
   "read": "The single biggest fundamental unlock of the month — China was the missing region in the AI-features story and a direct iPhone-upgrade-cycle lever.",
   "url": "https://www.macrumors.com/2026/07/13/apple-stock-record-territory/"
  },
  {
   "d": "2026-07-13",
   "t": "iOS 27 public betas ship with Siri AI beta; Gene Munster: 'like having a new phone'; Ming-Chi Kuo says the rally was expected",
   "src": "Yahoo Finance",
   "read": "First hands-on validation that the on-device AI strategy produces a felt product difference — exactly Ternus's 'technology serves the product' framing.",
   "url": "https://finance.yahoo.com/technology/ai/articles/gene-munster-says-siri-ai-133021829.html"
  },
  {
   "d": "2026-07-14",
   "t": "Citi raises target to $365; HSBC sees another 10% upside — Street chasing the re-rating",
   "src": "FX Leaders / Stocktwits",
   "read": "Targets are following price, not leading it; the Jul 30 earnings call (one of Cook's last) has to convert narrative into iPhone demand numbers.",
   "url": "https://www.fxleaders.com/news/2026/07/14/aapl-stock-tests-record-highs-as-apple-ai-strategy-and-citis-365-target-fuel-breakout/"
  }
 ]
};
