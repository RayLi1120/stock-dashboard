// Machine-managed next-candle predictions. Strict JSON body — graded by grade_predictions.py.
// stop = invalidation level; support = nearest support below price (POC / structure zone).
// Calibration applied per-symbol (all 7 active): closeBiasAdj added to cPct, hPct/lPct scaled by rangeMult.
const PREDICTIONS = {
 "2344": {
  "dir": "down",
  "oPct": 0.0,
  "hPct": 2.3,
  "lPct": -4.03,
  "cPct": -2.23,
  "text": "Winbond closed 07-08 at 168.5 (-3.16%, low 165) — a third straight down day even as June revenue hit NT$20.597B (+189.88% YoY), a 7th consecutive monthly record, with H1 revenue +139.2% YoY. Fundamentals keep printing records while the stock keeps correcting: textbook positioning unwind, not a demand problem. Tailwind for tomorrow: Korea's memory complex rebounded hard on 07-09 (KOSPI +4-5.8%, Samsung +3-4%, SK hynix +6.8-8% on a 7x-oversubscribed US ADR) — but TAIEX itself only eked out a soft -0.42% close (45,540.86) with electronics still broadly pressured and Middle East jitters lingering, so that read-through hadn't landed in Taipei yet as of the last print. Model reads decline -0.4%; I lean slightly more bearish given the TAIEX lag. No firm floor until the 152-160 June breakout base. Invalidation: close back above 184 (reclaims the 07-07 gap-down open).",
  "madeAt": "2026-07-09 21:15",
  "baseDate": "07-08",
  "baseClose": 168.5,
  "stop": 158,
  "support": 160.0
 },
 "2337": {
  "dir": "up",
  "oPct": 0.2,
  "hPct": 3.0,
  "lPct": -1.8,
  "cPct": 0.93,
  "text": "Macronix closed 07-08 at 138.5 (-0.36%) after a session that actually wicked below the MSL — low 134.0, under the 135.0 line — before buyers reclaimed it and closed back above. That's a stop-run-and-recover, a more bullish tell than a clean hold would have been. June revenue (NT$6.956B, +216% YoY, H1 +128.8%) already de-risked the fundamental case, and Korea's memory complex staged a strong rebound on 07-09 (KOSPI +4-5.8%, SK hynix +6.8-8%) that should read through here before it reaches Winbond. Model agrees with a rise (+1.64%), its most confident call of the trio. Because the 07-08 low pierced 135 intraday, I'm moving the invalidation down to a closing basis: a close below 133 (under the wick low) is the real distribution signal, not an intraday touch of 135.",
  "madeAt": "2026-07-09 21:15",
  "baseDate": "07-08",
  "baseClose": 138.5,
  "stop": 133,
  "support": 132.5
 },
 "6770": {
  "dir": "up",
  "oPct": 0.3,
  "hPct": 3.2,
  "lPct": -1.5,
  "cPct": 1.44,
  "text": "Powerchip closed 07-08 at 71.2 (+1.57%) after dipping to 67.1 intraday, inside its 66.5-70.7 volume zone — a strong reversal candle. Confirmed by the fundamentals: June revenue NT$6.474B (+68.8% YoY), a 47-month high; Q2 revenue NT$17.29B (+27.4% QoQ, +53.3% YoY); H1 NT$30.863B (+37.8% YoY). Management explicitly said price-hike benefits only start reflecting from June, meaning H2 should accelerate further from here — the strongest fundamental confirmation of the trio, layered on top of the best technical reversal. Model agrees, calling +1.46% with a 'continue' gap bias, its strongest signal. Korea's 07-09 memory rebound (KOSPI +4-5.8%) is a tailwind not yet in the TW tape. Invalidation: close below 66 (support-zone breakdown).",
  "madeAt": "2026-07-09 21:15",
  "baseDate": "07-08",
  "baseClose": 71.2,
  "stop": 66,
  "support": 66.5
 },
 "1307": {
  "dir": "neutral",
  "oPct": -0.3,
  "hPct": 1.28,
  "lPct": -2.13,
  "cPct": -0.69,
  "text": "San Fang closed 07-08 at 32.0 (-3.03%, low 31.8) — inside the 30.9-32.35 support zone but well through its former top, still no company news behind the move. The Jul 10 June-revenue print (tomorrow) is now the binary: April's last reported month was +8.54% YoY, a positive trend that hasn't been confirmed since. The low (31.8) stayed above the 31.5 stop, so the technical break isn't yet a clean trend-flip confirmation. Model reads a small decline (-0.2%); I call it neutral pending the print — genuine 50/50 between a relief bounce on a strong number and a slide into 30.9 on a weak one. Invalidation: close below 31.5 (decisively inside the next zone) or above 34.0 (reclaims the broken MSL).",
  "madeAt": "2026-07-09 21:15",
  "baseDate": "07-08",
  "baseClose": 32.0,
  "stop": 31.5,
  "support": 30.9
 },
 "NVDA": {
  "dir": "neutral",
  "oPct": 0.1,
  "hPct": 2.3,
  "lPct": -2.0,
  "cPct": 0.15,
  "text": "NVDA closed 07-09 at 203.80 (-0.16%) after a round-trip session: gapped to a 204.46 high on reports China may let Alibaba/ByteDance/DeepSeek buy limited H200 volumes, then faded to a 198.97 low before recovering most of it. The stock has lost ~$1T in market cap since its May 14 high and is now the cheapest it's been since 2019 at ~18x forward — Nvidia reiterated its 50%-of-FCF buyback pledge on top of that. Model reads essentially flat (-0.0%, predC 203.89) — I agree; the China headline is a sentiment prop, not a fundamental step-change, and the intraday fade shows the market isn't fully buying it yet. Invalidation: close back below 196 (re-enters the old chop zone).",
  "madeAt": "2026-07-09 21:15",
  "baseDate": "07-09",
  "baseClose": 203.8,
  "stop": 196,
  "support": 196.0
 },
 "AAPL": {
  "dir": "up",
  "oPct": 0.15,
  "hPct": 2.53,
  "lPct": -1.96,
  "cPct": 1.18,
  "text": "AAPL closed 07-09 at 314.71 (+0.42%), another incremental recovery high extending Cook's Broadcom-deal pop from 07-08 ($30B+ US chip-manufacturing commitment). No fresh company-specific catalyst on 07-09 — this is pure momentum continuation, ~4% above the old 302.42 MSH pivot, with fiscal Q3 earnings confirmed for Jul 30. Calibration keeps flagging that my AAPL guesses run too low (bias +0.28 this cycle) — momentum has outrun caution on this name for three cycles running, so I'm leaning into the model's continue-gap read (+0.26%) rather than fading it. Invalidation: close below 302 (back under the old MSH).",
  "madeAt": "2026-07-09 21:15",
  "baseDate": "07-09",
  "baseClose": 314.71,
  "stop": 302,
  "support": 302.4
 },
 "SPCX": {
  "dir": "up",
  "oPct": 0.5,
  "hPct": 4.6,
  "lPct": -3.45,
  "cPct": 2.46,
  "text": "SPCX closed 07-09 at 153.16 (+3.28%), reversing hard off Wednesday's all-time-low close (148.30, intraday low 145.20) and reclaiming both the 147.11 MSL and the 148 alert level — the 07-08 breakdown call is negated. Catalyst: a record 36th reuse of a Falcon 9 booster and a 29-satellite Starlink launch, plus continued momentum in the 10M-subscriber Starlink story. Calibration confirms I've been running systematically too bearish on this name (closeBias +2.77 over the last 4 grades, the largest adjustment of any symbol) — the Colossus 2 litigation and Aug 6 lockup overhang are real, but flow has been stronger than the bear case for two sessions now. No model signal yet (18 bars, insufficient history). Invalidation: close below 145 (Wednesday's higher-low) reopens the breakdown; the $135 IPO price remains the hard floor.",
  "madeAt": "2026-07-09 21:15",
  "baseDate": "07-09",
  "baseClose": 153.16,
  "stop": 135,
  "support": 147.11
 }
};
