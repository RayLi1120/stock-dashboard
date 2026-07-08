// Machine-managed prediction calibration. Strict JSON body — written by calibrate.py.
// The scan reads this and applies closeBiasAdj / rangeMult to the next guesses.
const CALIBRATION = {
 "generated": "2026-07-07 22:53",
 "minN": 3,
 "rangeTarget": 70,
 "global": {
  "n": 14,
  "dirAcc": 71,
  "closeBias": 0.9,
  "closeMAE": 3.46,
  "rangeHit": 57,
  "closeBiasAdj": 0.54,
  "rangeMult": 1.15,
  "active": true
 },
 "perSymbol": {
  "2344": {
   "n": 2,
   "dirAcc": 50,
   "closeBias": -0.59,
   "closeMAE": 5.74,
   "rangeHit": 50,
   "closeBiasAdj": 0.0,
   "rangeMult": 1.0,
   "active": false
  },
  "2337": {
   "n": 2,
   "dirAcc": 100,
   "closeBias": 1.84,
   "closeMAE": 3.02,
   "rangeHit": 50,
   "closeBiasAdj": 0.0,
   "rangeMult": 1.0,
   "active": false
  },
  "6770": {
   "n": 2,
   "dirAcc": 100,
   "closeBias": 0.96,
   "closeMAE": 3.91,
   "rangeHit": 50,
   "closeBiasAdj": 0.0,
   "rangeMult": 1.0,
   "active": false
  },
  "1307": {
   "n": 2,
   "dirAcc": 50,
   "closeBias": -0.61,
   "closeMAE": 1.04,
   "rangeHit": 100,
   "closeBiasAdj": 0.0,
   "rangeMult": 1.0,
   "active": false
  },
  "NVDA": {
   "n": 2,
   "dirAcc": 100,
   "closeBias": -1.5,
   "closeMAE": 1.5,
   "rangeHit": 100,
   "closeBiasAdj": 0.0,
   "rangeMult": 1.0,
   "active": false
  },
  "AAPL": {
   "n": 2,
   "dirAcc": 0,
   "closeBias": 1.57,
   "closeMAE": 4.26,
   "rangeHit": 0,
   "closeBiasAdj": 0.0,
   "rangeMult": 1.0,
   "active": false
  },
  "SPCX": {
   "n": 2,
   "dirAcc": 100,
   "closeBias": 4.61,
   "closeMAE": 4.74,
   "rangeHit": 50,
   "closeBiasAdj": 0.0,
   "rangeMult": 1.0,
   "active": false
  }
 }
};
