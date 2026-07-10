// Machine-managed prediction calibration. Strict JSON body — written by calibrate.py.
// The scan reads this and applies closeBiasAdj / rangeMult to the next guesses.
const CALIBRATION = {
 "generated": "2026-07-09 20:42",
 "minN": 3,
 "rangeTarget": 70,
 "global": {
  "n": 28,
  "dirAcc": 61,
  "closeBias": -0.09,
  "closeMAE": 2.86,
  "rangeHit": 68,
  "closeBiasAdj": -0.05,
  "rangeMult": 1.15,
  "active": true
 },
 "perSymbol": {
  "2344": {
   "n": 4,
   "dirAcc": 50,
   "closeBias": -1.72,
   "closeMAE": 4.3,
   "rangeHit": 50,
   "closeBiasAdj": -1.03,
   "rangeMult": 1.15,
   "active": true
  },
  "2337": {
   "n": 4,
   "dirAcc": 75,
   "closeBias": -0.62,
   "closeMAE": 3.07,
   "rangeHit": 75,
   "closeBiasAdj": -0.37,
   "rangeMult": 1.0,
   "active": true
  },
  "6770": {
   "n": 4,
   "dirAcc": 75,
   "closeBias": -0.94,
   "closeMAE": 3.38,
   "rangeHit": 75,
   "closeBiasAdj": -0.56,
   "rangeMult": 1.0,
   "active": true
  },
  "1307": {
   "n": 4,
   "dirAcc": 75,
   "closeBias": -0.31,
   "closeMAE": 0.53,
   "rangeHit": 100,
   "closeBiasAdj": -0.19,
   "rangeMult": 0.85,
   "active": true
  },
  "NVDA": {
   "n": 4,
   "dirAcc": 50,
   "closeBias": -0.25,
   "closeMAE": 1.62,
   "rangeHit": 75,
   "closeBiasAdj": -0.15,
   "rangeMult": 1.0,
   "active": true
  },
  "AAPL": {
   "n": 4,
   "dirAcc": 50,
   "closeBias": 0.47,
   "closeMAE": 2.44,
   "rangeHit": 50,
   "closeBiasAdj": 0.28,
   "rangeMult": 1.15,
   "active": true
  },
  "SPCX": {
   "n": 4,
   "dirAcc": 50,
   "closeBias": 2.77,
   "closeMAE": 4.72,
   "rangeHit": 50,
   "closeBiasAdj": 1.66,
   "rangeMult": 1.15,
   "active": true
  }
 }
};
