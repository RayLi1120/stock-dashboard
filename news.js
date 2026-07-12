// Machine-managed news feed. Strict JSON body — refreshed by the scheduled scan.
// Per symbol: newest first, keep ≤6 items. "_tape" = market-wide items for the dashboard strip.
// Each item: d=date, t=headline, src=source, read=Claude's one-line take, url optional.
const NEWS = {
 "_tape": [
  {
   "d": "2026-07-10",
   "t": "Taiwan Stock Exchange closed all day for Typhoon Bavi — settlement and delivery postponed",
   "src": "Taiwan News",
   "read": "No new session for any of the four TW names since Jul 9's close; treat Jul 9 as the live print until trading resumes.",
   "url": "https://www.taiwannews.com.tw/news/6398723"
  },
  {
   "d": "2026-07-09",
   "t": "TAIEX closes -0.83% (-379.8) at 45,354.61, a 5th straight down session (-3.05% for the week) — TSMC -2.03%, MediaTek -1.75% — even as GlobalWafers and Nanya Tech hit daily limit-up on AI/HPC wafer demand",
   "src": "Taiwan News",
   "read": "Broad index still weak, but the divergence is widening: silicon-wafer and memory names (GlobalWafers, Nanya, and now Winbond/Macronix) are reversing hard against the index trend.",
   "url": "https://www.taiwannews.com.tw/news/6398723"
  },
  {
   "d": "2026-07-10",
   "t": "Hormuz shipping traffic grinds to a near-halt again as US-Iran exchanges resume for a second day, reversing early-July signs of a reopening",
   "src": "Bloomberg / Al Jazeera",
   "read": "A fresh macro wildcard re-entering the tape right as TAIEX and Brent were stabilizing — watch for spillover into risk sentiment ahead of the Jul 28-29 FOMC.",
   "url": "https://www.aljazeera.com/economy/2026/7/10/strait-of-hormuz-shipping-grinds-to-halt-as-us-iran-resume-fighting"
  },
  {
   "d": "2026-07-10",
   "t": "NVDA +3.93% to $210.76 on a stack of catalysts: SK hynix's US listing lands well, China reportedly nears conditional H200 approval for Alibaba/ByteDance/DeepSeek, and NVDA invests ~$500M in Australian cloud-infra startup Firmus Technologies",
   "src": "Investing.com / TradingKey",
   "read": "Clean breakout day closing at the session high, clearing most of the 208.8-216.8 resistance band toward the 213.99 MSH.",
   "url": "https://www.investing.com/news/stock-market-news/why-is-nvidia-stock-rallying-today-93CH-4786595"
  },
  {
   "d": "2026-07-08",
   "t": "Winbond and Powerchip post record/multi-year-high June revenue (+189.9% and +68.8% YoY respectively); Macronix +216% YoY — all three then reversed hard on Jul 9",
   "src": "TechNews / UDN",
   "read": "The fundamental/tape divergence flagged last cycle just started resolving in the stocks' favor.",
   "url": "https://finance.technews.tw/2026/07/07/winbond-electronics-revenue-also-grew-by-139-2-year-on-year-in-the-first-half-of-the-year"
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
   "d": "2026-07-09",
   "t": "Stock closes 176.5 (+4.75%, high 184, low 170) — sharp one-day reversal off 07-08's low, closing back near the 07-07 gap-down open even as TAIEX fell another 0.83%",
   "src": "scan note",
   "read": "Stock-specific strength against a weak index — the first real technical tell that the correction may be exhausting itself. No confirming session yet (TW market shut 07-10 for Typhoon Bavi)."
  },
  {
   "d": "2026-07-08",
   "t": "DIGITIMES: enterprise SSD shortage lifts DDR4 8Gb Q3 contract prices up to 50% higher QoQ; broader Q3 DRAM contracts guided +20-30%",
   "src": "DIGITIMES",
   "read": "Pricing backdrop keeps improving even faster than the 07-07 revenue print implied — Q3 could beat June's already-record run rate."
  },
  {
   "d": "2026-07-07",
   "t": "June consolidated revenue NT$20.597B, +189.88% YoY — 7th straight monthly record; H1 2026 revenue NT$98.096B, +139.2% YoY",
   "src": "TechNews / ETtoday",
   "read": "The cleanest fundamental confirmation yet, landing the same week the stock corrected 23% off its MSH — pure positioning unwind, not a demand problem.",
   "url": "https://finance.technews.tw/2026/07/07/winbond-electronics-revenue-also-grew-by-139-2-year-on-year-in-the-first-half-of-the-year"
  },
  {
   "d": "2026-06-30",
   "t": "Reports of a TSMC-Winbond alliance to strengthen Taiwan's AI memory supply-chain autonomy",
   "src": "TechNews",
   "read": "A strategic-tie-up angle beyond pure DRAM/NOR pricing — worth tracking for confirmation, not yet a financial catalyst.",
   "url": "https://technews.tw/2026/06/30/tsmc-winbond-alliance-ai-supply-chain-autonomy-strengthened/"
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
  }
 ],
 "2337": [
  {
   "d": "2026-07-09",
   "t": "Stock closes 143.5 (+3.61%, high 148, low 139.5) — clean follow-through on the 07-08 wick-and-reclaim, closing well clear of both the 134 wick low and the 135 MSL",
   "src": "scan note",
   "read": "Best relative strength of the trio again, even as TAIEX fell 0.83% the same session. Invalidation now moves up to a close below 135 itself."
  },
  {
   "d": "2026-07-08",
   "t": "Stock closes 138.5 (-0.36%) after wicking to 134.0 intraday — below the 135.0 MSL — before buyers reclaimed it; second straight session of relative strength vs Winbond",
   "src": "scan note",
   "read": "A stop-run-and-recover proved more bullish than a clean hold would have been — confirmed by 07-09's follow-through."
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
   "read": "Same supercycle umbrella as Winbond; NOR pricing is the driver. Stock hit NT$192 on 06-23 then gave back 28% before this week's reversal.",
   "url": "https://finance.biggo.com/news/FiAmhp4BoicNoOgC7kCY"
  },
  {
   "d": "2026 (earlier)",
   "t": "Institutional selling of 43M shares on a prior record-high day (-4%)",
   "src": "BigGo Finance",
   "read": "Reminder that rotation in this name is violent — the current drawdown from 192 fits the pattern, though this week's reversal argues the unwind may be done."
  }
 ],
 "6770": [
  {
   "d": "2026-07-09",
   "t": "Stock closes 71.1 (-0.14%, high 74.3, low 70.9) — a quiet consolidation day holding just above the 66.5-70.7 zone after 07-08's reversal, no follow-through extension",
   "src": "scan note",
   "read": "Calibration flags my last 5 calls on this name ran +1.06% too bullish on average — dialing back conviction here even though fundamentals remain the strongest of the trio."
  },
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
   "d": "2026-06-02",
   "t": "Morgan Stanley rates Powerchip Overweight",
   "src": "BigGo Finance",
   "read": "Sector call; PSMC is the highest-beta expression of the DDR4 shortage.",
   "url": "https://finance.biggo.com/news/FiAmhp4BoicNoOgC7kCY"
  }
 ],
 "NVDA": [
  {
   "d": "2026-07-10",
   "t": "NVDA +3.93% to $210.76 (high 210.88, low 201.92) on three stacked catalysts: SK hynix's US ADR listing lands well, China reportedly nears conditional approval for Alibaba/ByteDance/DeepSeek to buy limited H200 volumes, and NVDA invests ~$500M in Australian cloud-infra startup Firmus Technologies (largest investor in its $2B raise)",
   "src": "Investing.com / TradingKey",
   "read": "Clean breakout closing at the session high, clearing most of the 208.8-216.8 resistance band toward the 213.99 MSH — the model itself reads almost flat, a real divergence from my technical/catalyst read.",
   "url": "https://www.investing.com/news/stock-market-news/why-is-nvidia-stock-rallying-today-93CH-4786595"
  },
  {
   "d": "2026-07-09",
   "t": "Gaps up to $204.46 on reports China may allow Alibaba/ByteDance/DeepSeek to buy limited H200 volumes, fades to $198.97, closes $203.80 (-0.16%) — a round-trip session",
   "src": "Benzinga / The Information",
   "read": "The market wasn't fully buying the China headline yet on 07-09 — it took 07-10's confirmation stack to break out.",
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
   "d": "2026-07-06",
   "t": "NVDA is the 'black sheep' of the 2026 chip rally: +5% YTD vs AMD +171%, Micron +305%; Goldman calls 21.7x forward PE 'compelling'",
   "src": "24/7 Wall St / TradingKey",
   "read": "The market paid up for repricing stories and left perfection-priced NVDA behind — the 07-10 breakout is the mean-reversion setup starting to play out.",
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
   "read": "A structural floor under dips — mega-cap capital-return era begins.",
   "url": "https://www.fool.com/investing/2026/06/11/nvidia-just-announced-a-potential-windfall-for-sha/"
  }
 ],
 "1307": [
  {
   "d": "2026-07-09",
   "t": "Closes 32.15 (+0.47%, high 32.3, low 31.65) — a quiet green day still inside the 30.9-32.35 zone; June-revenue print still unconfirmed in any source checked",
   "src": "scan note",
   "read": "Range-bound rather than trending. TW market shut 07-10 for Typhoon Bavi, which may also be delaying attention to any revenue filing."
  },
  {
   "d": "2026-07-08",
   "t": "Closes 32.0 (-3.03%, low 31.8) — inside the 30.9-32.35 support zone but through its former top, still no company news; low held above the 31.5 stop",
   "src": "scan note",
   "read": "Technical damage but not yet a confirmed trend flip."
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
   "d": "2026-07-10",
   "t": "Closes 145.34 (-4.48%, high 150.57, low 145.25) — gives back the entire 07-09 bounce, closing right on top of 07-08's all-time-low wick (145.20); no fresh negative headline, the launch-news catalyst simply faded",
   "src": "scan note",
   "read": "The 07-09 'breakdown negated' call didn't hold. Third retest of the same low in three sessions — treating this as genuinely neutral now rather than calling a direction."
  },
  {
   "d": "2026-07-09",
   "t": "Closes 153.16 (+3.28%), reversing off Wednesday's ATL close (148.30, intraday low 145.20) and reclaiming the 147.11 MSL / 148 alert level on a record 36th Falcon-9 booster reuse and a 29-satellite Starlink launch",
   "src": "scan note / Yahoo Finance",
   "read": "Sharp bounce that didn't survive a second session — see 07-10.",
   "url": "https://finance.yahoo.com/markets/stocks/article/spacex-stock-in-focus-as-launch-starlink-business-hit-new-milestones-153225745.html"
  },
  {
   "d": "2026-07-08",
   "t": "SPCX closes 148.30 (an all-time-low close, intraday low $145.20), below the 147.11 MSL — stock under its $150 day-one open",
   "src": "scan note",
   "read": "This level has now been tested three times (07-08, 07-09 low, 07-10 close) without a clean break either way."
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
   "read": "Day-one: $135 IPO → $150 open → $176.5 high → $161 close. Now trading well below the day-one open.",
   "url": "https://www.cnbc.com/2026/06/12/spacex-ipo-spcx-live-updates.html"
  }
 ],
 "AAPL": [
  {
   "d": "2026-07-10",
   "t": "Stock closes 315.14 (-0.34%, high 316.91, low 312.17) — first down close in five sessions, a shallow digestion pause rather than a reversal, still ~4.2% above the old 302.42 MSH pivot",
   "src": "scan note",
   "read": "No negative catalyst behind the dip. Incoming CEO Ternus gave his first extended AI comments this week: 'technology exists to serve the product' — measured, un-hyped framing."
  },
  {
   "d": "2026-07-09",
   "t": "Stock closes 314.71 (+0.42%), another incremental recovery high extending the Broadcom-deal momentum — no fresh company catalyst, pure continuation",
   "src": "scan note",
   "read": "Fourth straight up day off the Cook/Broadcom headline before Jul 10's pause. Calibration flags I keep guessing too low on this name."
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
  }
 ]
};
