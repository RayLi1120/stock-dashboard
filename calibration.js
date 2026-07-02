// Machine-managed prediction calibration. Strict JSON body — written by calibrate.py.
// The scan reads this and applies closeBiasAdj / rangeMult to the next guesses.
const CALIBRATION = {
 "generated": "2026-07-01 21:47",
 "minN": 3,
 "rangeTarget": 70,
 "global": {
  "n": 7,
  "dirAcc": 86,
  "closeBias": 2.61,
  "closeMAE": 4.31,
  "rangeHit": 29,
  "closeBiasAdj": 1.57,
  "rangeMult": 1.3,
  "active": true
 },
 "perSymbol": {
  "2344": {
   "n": 1,
   "dirAcc": 100,
   "closeBias": 5.15,
   "closeMAE": 5.15,
   "rangeHit": 0,
   "closeBiasAdj": 0.0,
   "rangeMult": 1.0,
   "active": false
  },
  "2337": {
   "n": 1,
   "dirAcc": 100,
   "closeBias": 4.86,
   "closeMAE": 4.86,
   "rangeHit": 0,
   "closeBiasAdj": 0.0,
   "rangeMult": 1.0,
   "active": false
  },
  "6770": {
   "n": 1,
   "dirAcc": 100,
   "closeBias": 4.88,
   "closeMAE": 4.88,
   "rangeHit": 0,
   "closeBiasAdj": 0.0,
   "rangeMult": 1.0,
   "active": false
  },
  "1307": {
   "n": 1,
   "dirAcc": 100,
   "closeBias": -1.65,
   "closeMAE": 1.65,
   "rangeHit": 100,
   "closeBiasAdj": 0.0,
   "rangeMult": 1.0,
   "active": false
  },
  "NVDA": {
   "n": 1,
   "dirAcc": 100,
   "closeBias": -1.62,
   "closeMAE": 1.62,
   "rangeHit": 100,
   "closeBiasAdj": 0.0,
   "rangeMult": 1.0,
   "active": false
  },
  "AAPL": {
   "n": 1,
   "dirAcc": 0,
   "closeBias": -2.69,
   "closeMAE": 2.69,
   "rangeHit": 0,
   "closeBiasAdj": 0.0,
   "rangeMult": 1.0,
   "active": false
  },
  "SPCX": {
   "n": 1,
   "dirAcc": 100,
   "closeBias": 9.36,
   "closeMAE": 9.36,
   "rangeHit": 0,
   "closeBiasAdj": 0.0,
   "rangeMult": 1.0,
   "active": false
  }
 }
};
