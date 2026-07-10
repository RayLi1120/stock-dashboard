// Machine-managed news feed. Strict JSON body — refreshed by the scheduled scan.
// Per symbol: newest first, keep ≤6 items. "_tape" = market-wide items for the dashboard strip.
// Each item: d=date, t=headline, src=source, read=Claude's one-line take, url optional.
const NEWS = {
 "_tape": [
  {
   "d": "2026-07-09",
   "t": "Korea memory complex rebounds hard: KOSPI +4-5.8%, Samsung +3-4%, SK hynix +6.8-8% intraday on a 7x-oversubscribed US ADR offering and bargain-hunting after the prior session's rout",
   "src": "Korea JoongAng Daily / MarketScreener",
   "read": "First real sign the Samsung-triggered rotation is stabilizing at the source. Read-through to the TW trio hadn't landed by the TAIEX close yet — watch for a lagged bounce.",
   "url": "https://www.koreajoongangdaily.com/business/kospi-opens-higher-on-tech-gains/12763345"
  },
  {
   "d": "2026-07-09",
   "t": "TAIEX closes -0.42% (-193.55) at 45,540.86 — electronics and financials both soft, Middle East concerns still weighing despite the Korea rebound",
   "src": "Focus Taiwan",
   "read": "A much smaller decline than 07-07's -2.31% plunge, but no bounce yet either — Taipei is lagging Seoul's relief rally by at least a session.",
   "url": "https://focustaiwan.tw/business/202607090015"
  },
  {
   "d": "2026-07-09",
   "t": "NVDA gaps up to $204.46 on reports China may allow Alibaba/ByteDance/DeepSeek to buy limited H200 volumes, then fades to $198.97 before closing $203.80 (-0.16%)",
   "src": "Benzinga / The Information",
   "read": "Round-trip session — the market isn't fully buying the China headline as a fundamental change yet. Stock is down ~$1T from its May 14 high, cheapest since 2019 at ~18x forward.",
   "url": "https://www.benzinga.com/markets/tech/26/07/60350622/whats-going-on-with-nvidia-stock-thursday-6"
  },
  {
   "d": "2026-07-08",
   "t": "Winbond and Powerchip post record/multi-year-high June revenue (+189.9% and +68.8% YoY respectively) even as their stocks correct on the Samsung-triggered rotation",
   "src": "TechNews / UDN",
   "read": "The clearest fundamental/tape divergence of the week — memory pricing and revenue keep accelerating while the stocks reprice a crowded trade, not the cycle.",
   "url": "https://finance.technews.tw/2026/07/07/winbond-electronics-revenue-also-grew-by-139-2-year-on-year-in-the-first-half-of-the-year"
  },
  {
   "d": "2026-07-08",
   "t": "Samsung Q2 prelim: operating income ~$59B (19× YoY) — but shares fall 10%; KOSPI -4.9% as memory profit-taking swept the region, the root trigger of this week's rotation",
   "src": "Taipei Times",
   "read": "The trigger for the whole week's TW memory rout: 'even strong results aren't enough when valuations are stretched.' A positioning unwind, not a cycle break — and per 07-09, already starting to reverse.",
   "url": "https://www.taipeitimes.com/News/biz/archives/2026/07/08/2003860385"
  },
  {
   "d": "2026-07-16",
   "t": "TSMC Q2 earnings Jul 16 (confirmed): Street at $40.0B revenue, EPS $3.81, GM 65.5-67.5%; Citi raised its TW-listed PT to NT$3,800 from NT$2,875 ahead of the print, expecting a raised FY26 revenue outlook",
   "src": "TipRanks / TradingKey",
   "read": "The AI-demand referendum for the entire Taiwan tape — a beat-and-raise (which Citi is now pricing in) is the most likely circuit-breaker for the current rotation.",
   "url": "https://www.tipranks.com/news/tsmc-will-report-q2-earnings-on-july-16-should-investors-buy-the-stock-before-results"
  }
 ],
 "2344": [
  {
   "d": "2026-07-07",
   "t": "June consolidated revenue NT$20.597B, +189.88% YoY — 7th straight monthly record; H1 2026 revenue NT$98.096B, +139.2% YoY",
   "src": "TechNews / ETtoday",
   "read": "The cleanest fundamental confirmation yet, landing the same week the stock corrected 23% off its MSH — pure positioning unwind, not a demand problem.",
   "url": "https://finance.technews.tw/2026/07/07/winbond-electronics-revenue-also-grew-by-139-2-year-on-year-in-the-first-half-of-the-year"
  },
  {
   "d": "2026-07-08",
   "t": "Stock closes 168.5 (-3.16%, low 165) — third straight down day despite the record revenue print; Korea's memory complex rebounded hard on 07-09 but TAIEX hasn't caught up yet",
   "src": "scan note",
   "read": "23% off the 225 MSH with no volume shelf until the 152-160 June breakout base. Jul 30 Q2 earnings is the next hard catalyst."
  },
  {
   "d": "2026-07-08",
   "t": "ADATA sees Q3 DRAM contract prices +20-30%; analysts expect Winbond DRAM ASPs +50%/+30%/+10% over Q2-Q4",
   "src": "TrendForce",
   "read": "Fundamentals still accelerating while the stock corrects — the disconnect that eventually resolves at the Jul 30 Q2 print.",
   "url": "https://www.trendforce.com/news/2026/07/08/news-memory-rally-extends-as-taiwan-module-maker-adata-reportedly-sees-q3-dram-prices-up-20-30-nand-up-35-40/"
  },
  {
   "d": "2026-06-16",
   "t": "TrendForce: NOR flash contract prices +100% in 1H26; structural shortage to keep NOR and SLC NAND rising through 2H26; Winbond remains #1 NOR supplier",
   "src": "TrendForce",
   "read": "The NOR side of the thesis is as strong as the DRAM side — no supplier has announced meaningful capacity expansion.",
   "url": "https://www.trendforce.com/presscenter/news/20260616-13102.html"
  },
  {
   "d": "2026-06-02",
   "t": "Morgan Stanley raises Winbond target NT$100 → NT$222; stock limit-up at NT$184.5",
   "src": "BigGo Finance",
   "read": "Street-high conviction on legacy DRAM/NOR; stock briefly exceeded the target (225 on 06-26) and has since given back the entire MS-note rally.",
   "url": "https://finance.biggo.com/news/FiAmhp4BoicNoOgC7kCY"
  },
  {
   "d": "2026-05-05",
   "t": "Winbond Q1 FY2026: gross margin 53.4% (record), EPS NT$2.25; CEO says Q2 price hikes ≥ Q1, revenue to hit new all-time high",
   "src": "BigGo Finance",
   "read": "Best quarter in company history — June's record confirms the CEO's guidance was, if anything, conservative.",
   "url": "https://finance.biggo.com/news/TW_2344.TW_2026-05-05"
  }
 ],
 "2337": [
  {
   "d": "2026-07-08",
   "t": "Stock closes 138.5 (-0.36%) after wicking to 134.0 intraday — below the 135.0 MSL — before buyers reclaimed it; second straight session of relative strength vs Winbond",
   "src": "scan note",
   "read": "A stop-run-and-recover is more bullish than a clean hold would have been. Closing basis is what matters now; I'm treating 133 (below the wick) as the real invalidation."
  },
  {
   "d": "2026-07-07",
   "t": "Stock falls 3.81% to 139.0 in the Samsung-triggered memory rout",
   "src": "scan note",
   "read": "The root of the two-session test of the 135 MSL that followed."
  },
  {
   "d": "2026-07-07",
   "t": "Macronix June consolidated net sales NT$6.956B, +11.2% MoM, +216.1% YoY; H1 2026 revenue +128.8% YoY",
   "src": "MarketScreener",
   "read": "Best confirmation yet that the NOR/legacy-DRAM cycle is real at the revenue line — the fundamental de-risk is done; the fight is now purely technical.",
   "url": "https://www.marketscreener.com/news/macronix-international-announces-consolidated-net-sales-of-nt-6-956-billion-for-june-2026-ce7f5edbde89f022"
  },
  {
   "d": "2026-06-02",
   "t": "Morgan Stanley rates Macronix Overweight in memory sector call",
   "src": "BigGo Finance",
   "read": "Same supercycle umbrella as Winbond; NOR pricing is the driver. Stock hit NT$192 on 06-23 then gave back 28%.",
   "url": "https://finance.biggo.com/news/FiAmhp4BoicNoOgC7kCY"
  },
  {
   "d": "2026 (earlier)",
   "t": "Institutional selling of 43M shares on a prior record-high day (-4%)",
   "src": "BigGo Finance",
   "read": "Reminder that rotation in this name is violent — the current drawdown from 192 fits the pattern."
  }
 ],
 "6770": [
  {
   "d": "2026-07-09",
   "t": "June consolidated revenue NT$6.474B, +68.8% YoY — 47-month high; Q2 revenue NT$17.29B (+27.4% QoQ, +53.3% YoY); H1 NT$30.863B (+37.8% YoY); management says price-hike benefits only start reflecting from June",
   "src": "UDN / CNYES",
   "read": "Confirms the 07-08 bounce with hard numbers — and management's own comment implies H2 should accelerate further from here, the strongest fundamental read of the trio.",
   "url": "https://udn.com/news/story/7253/9617739"
  },
  {
   "d": "2026-07-08",
   "t": "Only member of the trio to bounce on 07-08: intraday dipped to 67.1 (inside the 66.5-70.7 zone) then reclaimed 71.2 (+1.57%) — buyers defended the volume zone",
   "src": "scan note",
   "read": "The company-specific story (first profit in 10 quarters, Micron alliance, now record June revenue) is cushioning it through the sector unwind — relative strength confirmed."
  },
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
   "d": "2026-07-09",
   "t": "Gaps up to $204.46 on reports China may allow Alibaba/ByteDance/DeepSeek to buy limited H200 volumes, fades to $198.97, closes $203.80 (-0.16%) — a round-trip session",
   "src": "Benzinga / The Information",
   "read": "The market isn't fully buying the China headline yet — but it reopens a demand channel that was written off 07-07. Stock is ~$1T off its May 14 high, cheapest since 2019 at ~18x forward.",
   "url": "https://www.benzinga.com/markets/tech/26/07/60350622/whats-going-on-with-nvidia-stock-thursday-6"
  },
  {
   "d": "2026-07-08",
   "t": "NVDA +3.7% to $204.21, reclaiming $200 — dip-buyers rotate back ahead of July hyperscaler earnings; Microsoft FY27 capex guide the key bull catalyst",
   "src": "FXLeaders / Motley Fool",
   "read": "Escaped the 188-196 chop zone. The Samsung memory rout helps the relative case — NVDA is the underowned 'value' AI trade at 21.7x forward.",
   "url": "https://www.fxleaders.com/news/2026/07/08/nvidia-stock-rises-as-strong-ai-demand-offsets-valuation-and-supply-concerns/"
  },
  {
   "d": "2026-07-07",
   "t": "NVDA denies Kyber NVL144 delay-to-2028 report; +1% on the denial. Also confirmed: China H200 production ended, capacity redirected to Vera Rubin (3nm, in full production at TSMC)",
   "src": "TradingKey / Proactive",
   "read": "Roadmap-delay fear removed; the 07-09 China-approval report is the sequel to this story.",
   "url": "https://www.tradingkey.com/analysis/stocks/us-stocks/262015350-nvidia-nvda-stock-forecast-july-2026-kyber-denial-goldman-tradingkey"
  },
  {
   "d": "2026-07-06",
   "t": "NVDA is the 'black sheep' of the 2026 chip rally: +5% YTD vs AMD +171%, Micron +305%; Goldman calls 21.7x forward PE 'compelling'",
   "src": "24/7 Wall St / TradingKey",
   "read": "The market paid up for repricing stories and left perfection-priced NVDA behind — that gap is the July mean-reversion setup.",
   "url": "https://247wallst.com/investing/2026/07/06/how-nvidia-became-the-black-sheep-of-the-chip-stock-rally/"
  },
  {
   "d": "2026-06-30",
   "t": "Q1 FY27: revenue $82B +85% YoY (data center $75.2B +92%), $91B Q2 guidance",
   "src": "Motley Fool",
   "read": "Fundamentals never wavered through the correction — the stock's problem was positioning and rates, not earnings.",
   "url": "https://www.fool.com/investing/2026/06/30/3-reasons-to-buy-nvidia-stock-in-july/"
  },
  {
   "d": "2026-06-11",
   "t": "Dividend raised ×25 to $0.25/qtr; pledges to return ≥50% of FCF; $80B added to buyback authorization",
   "src": "Motley Fool",
   "read": "A structural floor under dips — mega-cap capital-return era begins; the 50%-FCF pledge was reiterated again on 07-09.",
   "url": "https://www.fool.com/investing/2026/06/11/nvidia-just-announced-a-potential-windfall-for-sha/"
  }
 ],
 "1307": [
  {
   "d": "2026-07-08",
   "t": "Closes 32.0 (-3.03%, low 31.8) — inside the 30.9-32.35 support zone but through its former top, still no company news; low held above the 31.5 stop",
   "src": "scan note",
   "read": "Technical damage but not yet a confirmed trend flip. Everything now rides on the Jul 10 June-revenue print, due tomorrow."
  },
  {
   "d": "2026-07-10",
   "t": "TWSE June monthly revenue disclosure due — the key fundamental pulse for San Fang; April's last reported print was +8.54% YoY",
   "src": "TWSE calendar",
   "read": "Binary for the diversifier name: a strong number likely reclaims 32.35-33.5, a weak one opens 30.9-32.3."
  },
  {
   "d": "2026-07-06",
   "t": "Stock falls 7.4% to 33.15, breaking the Jun 30 MSL (33.85); held up on 07-07 (-0.45%) while the tech tape crashed",
   "src": "scan note",
   "read": "The original break was newsless — likely TW-tape volatility — but the follow-through breaks make it look like distribution, not noise."
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
   "d": "2026-07-09",
   "t": "Closes 153.16 (+3.28%), reversing off Wednesday's ATL close (148.30, intraday low 145.20) and reclaiming the 147.11 MSL / 148 alert level — the 07-08 breakdown call is negated",
   "src": "scan note",
   "read": "Sharp two-day reversal on the launch-milestone news below. Colossus 2 litigation and the Aug 6 lockup overhang haven't gone away, but flow has turned."
  },
  {
   "d": "2026-07-09",
   "t": "Falcon 9 booster reused for a record 36th time, carrying 29 Starlink satellites; SpaceX deployed 1,589 Starlink satellites in H1 2026 (up from 1,489 a year earlier)",
   "src": "Yahoo Finance",
   "read": "Operational cadence keeps setting records — the news catalyst behind the 07-09 bounce, and a reminder Starlink's growth story hasn't slowed.",
   "url": "https://finance.yahoo.com/markets/stocks/article/spacex-stock-in-focus-as-launch-starlink-business-hit-new-milestones-153225745.html"
  },
  {
   "d": "2026-07-08",
   "t": "SPCX closes 148.30 (an all-time-low close, intraday low $145.20), below the 147.11 MSL — breakdown confirmed at the time; stock under its $150 day-one open",
   "src": "scan note",
   "read": "The low that the 07-09 reversal bounced off of. Three down days into the Aug 6 earnings + first lockup unlock, then a sharp turn."
  },
  {
   "d": "2026-07-08",
   "t": "Colossus 2 data center faces court-ordered shutdown of gas turbines operating without permits — litigation threatens portions of the $45B Anthropic compute contract",
   "src": "TradingKey",
   "read": "First real fundamental crack (vs pure flow mechanics): the Anthropic deal was a headline pillar of the AI-infrastructure story in the IPO narrative. Still unresolved.",
   "url": "https://www.tradingkey.com/analysis/stocks/us-stocks/262016462-spacex-colossus2-data-center-anthropic-deal-nasdaq-100-tradingkey"
  },
  {
   "d": "2026-08-06",
   "t": "Aug 6 confirmed: first public earnings + first lockup expiration (~20% of insiders can sell; another 10% if IPO-price conditions met); Shotwell also plans share gifts to 2M+ children via 'Trump Accounts'",
   "src": "TradingKey / Motley Fool",
   "read": "The supply event that has dominated the tape since inclusion day — clearing it (or a Starlink beat) is the setup for the analyst-PT gap to matter.",
   "url": "https://www.tradingkey.com/analysis/stocks/us-stocks/262016028-spacex-spcx-stock-forecast-july-2026-nasdaq-100-palantir-comparison-tradingkey"
  },
  {
   "d": "2026-06-12",
   "t": "SpaceX IPO: biggest in history — $135/share, $75B raised, $1.75T valuation; closed +19% at $161 on day one",
   "src": "CNBC",
   "read": "Day-one: $135 IPO → $150 open → $176.5 high → $161 close. Now trading below the day-one open for the first time.",
   "url": "https://www.cnbc.com/2026/06/12/spacex-ipo-spcx-live-updates.html"
  }
 ],
 "AAPL": [
  {
   "d": "2026-07-09",
   "t": "Stock closes 314.71 (+0.42%), another incremental recovery high extending the Broadcom-deal momentum — no fresh company catalyst, pure continuation",
   "src": "scan note",
   "read": "Third straight up day off the Cook/Broadcom headline. Calibration flags I keep guessing too low on this name — momentum is outrunning caution."
  },
  {
   "d": "2026-07-08",
   "t": "Cook's final move as CEO: $30B+ multi-year US chip deal with Broadcom — 15B+ US-made chips, $1.5B Fort Collins fab expansion; stock +1.04% to a fresh recovery high $313.89",
   "src": "24/7 Wall St",
   "read": "Biggest domestic manufacturing commitment in Apple history — political tailwind + supply-chain security, and a clean handoff narrative into the Sep 1 Ternus era.",
   "url": "https://247wallst.com/investing/2026/07/08/tim-cooks-final-move-as-apple-ceo-the-biggest-american-manufacturing-deal-in-company-history/"
  },
  {
   "d": "2026-07-08",
   "t": "Fiscal Q3 earnings confirmed for Jul 30 — one of Cook's final calls before the transition; Street focus on AI monetization and iPhone demand",
   "src": "TipRanks",
   "read": "Moved from the Jul 28 estimate. Post-WWDC narrative has flipped to 'gatekeeper of consumer AI' — the print has to validate a rich re-rating.",
   "url": "https://www.tipranks.com/news/apple-aapl-stock-heads-into-fiscal-q3-with-ai-upside-in-focus"
  },
  {
   "d": "2026-07-02",
   "t": "Apple drops its 7-year 'net cash neutral' policy — frees incoming CEO Ternus to invest more aggressively in AI infrastructure and M&A",
   "src": "TheNextWeb",
   "read": "A capital-allocation signal the market read as bullish — Ternus gets a real war chest instead of pure buyback/dividend discipline.",
   "url": "https://thenextweb.com/news/apple-ternus-ceo-buyback-cash-strategy"
  },
  {
   "d": "2026-04-20",
   "t": "Tim Cook to become Executive Chairman; John Ternus named CEO effective September 1, 2026",
   "src": "Apple Newsroom",
   "read": "Succession confirmed. Ternus is a hardware-first choice — his AI monetization stance is the open question the Jul 30 call previews.",
   "url": "https://www.apple.com/newsroom/2026/04/tim-cook-to-become-apple-executive-chairman-john-ternus-to-become-apple-ceo/"
  },
  {
   "d": "2026-06-08",
   "t": "WWDC 2026: rebuilt Siri on Apple Intelligence (own models + Google Gemini), iOS 27 — stock fell ~$301 → ~$290, then fully round-tripped",
   "src": "TradingKey / Analytics Insight",
   "read": "The AI-letdown dip was the buying opportunity; sentiment has flipped 180° in a month without a single new product fact.",
   "url": "https://www.tradingkey.com/analysis/stocks/us-stocks/261952325-apple-intelligence-is-live-can-wwdc-2026-spark-an-iphone-supercycle-tradingkey"
  }
 ]
};
