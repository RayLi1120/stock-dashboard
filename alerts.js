// Machine-managed alert log. Strict JSON body — written by check_alerts.py.
const ALERTS = {
 "generated": "2026-07-19 16:24",
 "newCount": 8,
 "items": [
  {
   "at": "2026-06-12 18:25",
   "d": "06-12",
   "sym": "2344",
   "rule": "gap",
   "level": "warn",
   "msg": "gapped +8.3% at the open"
  },
  {
   "at": "2026-06-12 18:25",
   "d": "06-12",
   "sym": "2337",
   "rule": "gap",
   "level": "warn",
   "msg": "gapped +5.0% at the open"
  },
  {
   "at": "2026-06-12 18:25",
   "d": "06-12",
   "sym": "6770",
   "rule": "gap",
   "level": "warn",
   "msg": "gapped +5.6% at the open"
  },
  {
   "at": "2026-06-12 18:45",
   "d": "06-12",
   "sym": "1307",
   "rule": "rsi-hi",
   "level": "info",
   "msg": "RSI14 80 — overbought"
  },
  {
   "at": "2026-06-12 18:45",
   "d": "06-12",
   "sym": "1307",
   "rule": "vol-spike",
   "level": "warn",
   "msg": "volume 2.2× the 20-day average"
  },
  {
   "at": "2026-06-13 02:16",
   "d": "06-12",
   "sym": "SPCX",
   "rule": "gap",
   "level": "warn",
   "msg": "gapped +11.1% at the open"
  },
  {
   "at": "2026-07-02 07:55",
   "d": "07-01",
   "sym": "2337",
   "rule": "ma-cross-down",
   "level": "info",
   "msg": "MA5 crossed below MA20 — bearish trend signal"
  },
  {
   "at": "2026-07-02 07:55",
   "d": "07-01",
   "sym": "NVDA",
   "rule": "structure-break",
   "level": "warn",
   "msg": "daily close 198.35 broke the last MSL 199.34 (2026-06-09) — structure stop hit, uptrend invalidated"
  },
  {
   "at": "2026-07-08 21:02",
   "d": "07-06",
   "sym": "2344",
   "rule": "gap",
   "level": "warn",
   "msg": "gapped +3.5% at the open"
  },
  {
   "at": "2026-07-08 21:02",
   "d": "07-06",
   "sym": "2337",
   "rule": "gap",
   "level": "warn",
   "msg": "gapped +2.8% at the open"
  },
  {
   "at": "2026-07-08 21:02",
   "d": "07-06",
   "sym": "1307",
   "rule": "gap",
   "level": "warn",
   "msg": "gapped -6.1% at the open"
  },
  {
   "at": "2026-07-08 21:02",
   "d": "07-06",
   "sym": "1307",
   "rule": "structure-break",
   "level": "warn",
   "msg": "daily close 33.15 broke the last MSL 33.85 (2026-06-30) — structure stop hit, uptrend invalidated"
  },
  {
   "at": "2026-07-08 21:48",
   "d": "07-07",
   "sym": "6770",
   "rule": "ma-cross-down",
   "level": "info",
   "msg": "MA5 crossed below MA20 — bearish trend signal"
  },
  {
   "at": "2026-07-08 21:48",
   "d": "07-08",
   "sym": "SPCX",
   "rule": "gap",
   "level": "warn",
   "msg": "gapped +2.1% at the open"
  },
  {
   "at": "2026-07-08 21:48",
   "d": "07-08",
   "sym": "SPCX",
   "rule": "structure-break",
   "level": "warn",
   "msg": "daily close 145.33 broke the last MSL 147.11 (2026-06-23) — structure stop hit, uptrend invalidated"
  },
  {
   "at": "2026-07-10 20:37",
   "d": "07-08",
   "sym": "2344",
   "rule": "gap",
   "level": "warn",
   "msg": "gapped +2.0% at the open"
  },
  {
   "at": "2026-07-11 22:32",
   "d": "07-09",
   "sym": "2344",
   "rule": "gap",
   "level": "warn",
   "msg": "gapped +3.0% at the open"
  },
  {
   "at": "2026-07-11 22:32",
   "d": "07-09",
   "sym": "2337",
   "rule": "gap",
   "level": "warn",
   "msg": "gapped +2.2% at the open"
  },
  {
   "at": "2026-07-11 22:32",
   "d": "07-10",
   "sym": "NVDA",
   "rule": "ma-cross-up",
   "level": "info",
   "msg": "MA5 crossed above MA20 — bullish trend signal"
  },
  {
   "at": "2026-07-11 22:32",
   "d": "07-10",
   "sym": "SPCX",
   "rule": "structure-break",
   "level": "warn",
   "msg": "daily close 145.34 broke the last MSL 147.11 (2026-06-23) — structure stop hit, uptrend invalidated"
  },
  {
   "at": "2026-07-19 16:24",
   "d": "07-17",
   "sym": "2344",
   "rule": "gap",
   "level": "warn",
   "msg": "gapped -7.3% at the open"
  },
  {
   "at": "2026-07-19 16:24",
   "d": "07-17",
   "sym": "2344",
   "rule": "structure-break",
   "level": "warn",
   "msg": "daily close 155.0 broke the last MSL 165.0 (2026-07-08) — structure stop hit, uptrend invalidated"
  },
  {
   "at": "2026-07-19 16:24",
   "d": "07-17",
   "sym": "2337",
   "rule": "gap",
   "level": "warn",
   "msg": "gapped -7.0% at the open"
  },
  {
   "at": "2026-07-19 16:24",
   "d": "07-17",
   "sym": "2337",
   "rule": "structure-break",
   "level": "warn",
   "msg": "daily close 125.0 broke the last MSL 134.0 (2026-07-08) — structure stop hit, uptrend invalidated"
  },
  {
   "at": "2026-07-19 16:24",
   "d": "07-17",
   "sym": "6770",
   "rule": "gap",
   "level": "warn",
   "msg": "gapped -5.4% at the open"
  },
  {
   "at": "2026-07-19 16:24",
   "d": "07-17",
   "sym": "NVDA",
   "rule": "gap",
   "level": "warn",
   "msg": "gapped -2.3% at the open"
  },
  {
   "at": "2026-07-19 16:24",
   "d": "07-17",
   "sym": "SPCX",
   "rule": "rsi-lo",
   "level": "info",
   "msg": "RSI14 23 — oversold"
  },
  {
   "at": "2026-07-19 16:24",
   "d": "07-17",
   "sym": "SPCX",
   "rule": "gap",
   "level": "warn",
   "msg": "gapped -2.8% at the open"
  }
 ]
};
