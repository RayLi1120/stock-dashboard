// Machine-managed alert log. Strict JSON body — written by check_alerts.py.
const ALERTS = {
 "generated": "2026-07-02 07:55",
 "newCount": 2,
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
  }
 ]
};
