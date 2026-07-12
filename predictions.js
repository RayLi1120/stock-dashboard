// Machine-managed next-candle predictions. Strict JSON body — graded by grade_predictions.py.
// stop = invalidation level; support = nearest support below price (POC / structure zone).
// Calibration applied per-symbol (all 7 active): closeBiasAdj added to cPct, hPct/lPct scaled by rangeMult.
const PREDICTIONS = {
 "2344": {
  "dir": "up",
  "oPct": 0.3,
  "hPct": 4.29,
  "lPct": -3.64,
  "cPct": 1.13,
  "text": "Winbond closed 07-09 at 176.5 (+4.75%, high 184, low 170) — a sharp reversal off 07-08's 168.5 low, closing back near the 07-07 gap-down open. TAIEX itself was still soft (-0.83% to 45,354.61, its 5th straight down session) so this was stock-specific strength, not a broad rebound. Backdrop keeps improving: TrendForce/DIGITIMES report DDR4 8Gb Q3 contract prices up as much as 50% QoQ on an enterprise-SSD-driven shortage, and Q3 DRAM contracts broadly guided +20-30%. Taiwan's market was shut all of 07-10 for Typhoon Bavi, so this is still the 07-09 print with no fresh session to confirm follow-through. Model reads a modest rise (+0.8%); I lean a bit more bullish given the reversal candle and accelerating pricing backdrop, tempered by no confirming volume day yet. Invalidation: close back below 165 (the 07-08 low that started the reversal).",
  "madeAt": "2026-07-10 23:05",
  "baseDate": "07-09",
  "baseClose": 176.5,
  "stop": 165,
  "support": 165.0
 },
 "2337": {
  "dir": "up",
  "oPct": 0.4,
  "hPct": 3.45,
  "lPct": -2.07,
  "cPct": 1.32,
  "text": "Macronix closed 07-09 at 143.5 (+3.61%, high 148, low 139.5) — a clean follow-through on 07-08's stop-run-and-recover, closing well clear of both the 134 wick low and the 135 MSL for the first time in three sessions. Best relative strength of the trio again: TAIEX fell 0.83% the same session. June revenue (+216% YoY) is already banked as the fundamental case; this is now a pure technical reclaim. Taiwan's exchange was closed all of 07-10 for Typhoon Bavi, so no new session since. Model's most confident call in the group: +2.05% (predC 146.44), matching the technical read. Since the 135 MSL is now reclaimed with room, I'm moving the invalidation up from 133 to 135 itself — a close back below the old MSL would undo this week's entire recovery.",
  "madeAt": "2026-07-10 23:05",
  "baseDate": "07-09",
  "baseClose": 143.5,
  "stop": 135,
  "support": 139.5
 },
 "6770": {
  "dir": "neutral",
  "oPct": 0.2,
  "hPct": 3.0,
  "lPct": -2.0,
  "cPct": 0.26,
  "text": "Powerchip closed 07-09 at 71.1 (-0.14%, high 74.3, low 70.9) — a quiet consolidation day, holding just above the top of the 66.5-70.7 volume zone after 07-08's reversal. Fundamentals remain the best of the trio (47-month-high June revenue, management guiding H2 acceleration), and the model still reads a rise (+1.32%, gap='continue', its strongest signal). But calibration is flagging a real problem: my last 5 6770 calls have run +1.06% too bullish on average, the worst bias on the list — so I'm dialing this one back hard rather than fighting the correction. Net read is close to flat. Taiwan's market was shut 07-10 for Typhoon Bavi, no new session yet. Invalidation unchanged: close below 66 breaks the zone; above 75 confirms the bounce is real.",
  "madeAt": "2026-07-10 23:05",
  "baseDate": "07-09",
  "baseClose": 71.1,
  "stop": 66,
  "support": 66.5
 },
 "1307": {
  "dir": "neutral",
  "oPct": -0.1,
  "hPct": 0.85,
  "lPct": -1.28,
  "cPct": -0.11,
  "text": "San Fang closed 07-09 at 32.15 (+0.47%, high 32.3, low 31.65) — a quiet green day still inside the 30.9-32.35 support zone, holding well above the 31.5 stop. The Jul 10 June-revenue print I flagged last cycle still isn't confirmed in any source I can verify — TWSE/MOPS disclosure searches still only surface April's +8.54% YoY print, and Taiwan's exchange was shut all of 07-10 for Typhoon Bavi, which may also be delaying attention to any filing. Model reads a small decline (-0.21%, predC 32.08). Genuinely still neutral pending the print: a strong number likely reclaims 32.35-33.5, a weak one opens 30.9-32.3. Invalidation unchanged: below 31.5 confirms the trend flip; above 34.0 reclaims the broken MSL.",
  "madeAt": "2026-07-10 23:05",
  "baseDate": "07-09",
  "baseClose": 32.15,
  "stop": 31.5,
  "support": 30.9
 },
 "NVDA": {
  "dir": "up",
  "oPct": 0.3,
  "hPct": 3.45,
  "lPct": -2.07,
  "cPct": 1.27,
  "text": "NVDA closed 07-10 at 210.76 (+3.93%, high 210.88, low 201.92) — a clean breakout day, closing at the session high and punching through most of the 208.8-216.8 resistance band toward the 213.99 MSH. Three catalysts stacked: SK hynix's US ADR listing landed well (de-risking the broader memory/AI trade), Beijing reportedly moving toward conditional approval for Alibaba/ByteDance/DeepSeek to buy limited H200 volumes (a demand channel that had generated zero revenue), and NVDA committed ~$500M to Australian cloud-infra startup Firmus Technologies as the largest investor in its $2B raise. The model itself reads almost flat (+0.03%) — a large gap between the model's mean-reversion instinct after a big up day and what I think is a structural re-rating, not just a sentiment pop. Calibration also confirms I've been running too low on NVDA (avg +0.45 bias), reinforcing the lean up. Invalidation: close back below 204 undoes the breakout day.",
  "madeAt": "2026-07-10 23:05",
  "baseDate": "07-10",
  "baseClose": 210.76,
  "stop": 204,
  "support": 204.0
 },
 "AAPL": {
  "dir": "up",
  "oPct": 0.1,
  "hPct": 2.53,
  "lPct": -1.96,
  "cPct": 0.6,
  "text": "AAPL closed 07-10 at 315.14 (-0.34%, high 316.91, low 312.17) — the first down close in five sessions, a shallow pullback after the Broadcom-deal momentum run, not a reversal (still ~4.2% above the old 302.42 MSH pivot). Incoming CEO John Ternus gave his first extended AI comments this week: 'technology exists to serve the product,' a deliberately un-hyped framing ahead of the Sep 1 handover. No negative catalyst behind the dip — just digestion after four straight up days. Model reads a small rise (+0.26%, gap='continue'); calibration still flags I run slightly low on this name (avg +0.17 bias) after three cycles of underestimating the rally, so I'm leaning into a modest up call again rather than fading it. Invalidation unchanged: close below 302 (back under the old MSH); 318 marks the next extension level.",
  "madeAt": "2026-07-10 23:05",
  "baseDate": "07-10",
  "baseClose": 315.14,
  "stop": 302,
  "support": 302.4
 },
 "SPCX": {
  "dir": "neutral",
  "oPct": -0.2,
  "hPct": 2.6,
  "lPct": -3.9,
  "cPct": -0.06,
  "text": "SPCX closed 07-10 at 145.34 (-4.48%, high 150.57, low 145.25) — the 07-09 reversal I called 'negated the breakdown' failed to hold: the stock gave the entire bounce back and closed right on top of 07-08's all-time-low wick (145.20), a much bigger miss than my prior up call (I was calibrated toward +2.46%, actual was -5.11%). No fresh negative headline behind the drop — the Falcon-9/Starlink catalyst that drove 07-09's bounce simply faded, and the unresolved Colossus 2 litigation plus the approaching Aug 6 earnings/lockup double-event are enough to keep flow cautious without new information. No model signal (still insufficient bars). Given the failed bounce and repeated retest of the same level, I'm calling this genuinely neutral rather than fighting the chart a third time — calibration's structural upward bias adjustment (+0.44, from a longer run of underestimating this name) roughly offsets my near-term caution. Invalidation: a close below 143 opens fresh air with no floor until the $135 IPO price; 150 (the day-one open) is the reclaim level that would restore the bull case.",
  "madeAt": "2026-07-10 23:05",
  "baseDate": "07-10",
  "baseClose": 145.34,
  "stop": 143,
  "support": 135.0
 }
};
