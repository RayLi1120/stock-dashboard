// Machine-managed prediction calibration. Strict JSON body — written by calibrate.py.
// The scan reads this and applies closeBiasAdj / rangeMult to the next guesses.
const CALIBRATION = {
 "generated": "2026-07-19 16:08",
 "minN": 3,
 "rangeTarget": 70,
 "global": {
  "n": 42,
  "dirAcc": 55,
  "closeBias": -0.23,
  "closeMAE": 2.76,
  "rangeHit": 64,
  "closeBiasAdj": -0.14,
  "rangeMult": 1.15,
  "active": true
 },
 "perSymbol": {
  "2344": {
   "n": 6,
   "dirAcc": 33,
   "closeBias": -0.14,
   "closeMAE": 4.24,
   "rangeHit": 50,
   "closeBiasAdj": -0.08,
   "rangeMult": 1.15,
   "active": true
  },
  "2337": {
   "n": 6,
   "dirAcc": 67,
   "closeBias": -0.18,
   "closeMAE": 2.7,
   "rangeHit": 67,
   "closeBiasAdj": -0.11,
   "rangeMult": 1.15,
   "active": true
  },
  "6770": {
   "n": 6,
   "dirAcc": 67,
   "closeBias": -0.93,
   "closeMAE": 2.55,
   "rangeHit": 83,
   "closeBiasAdj": -0.56,
   "rangeMult": 1.0,
   "active": true
  },
  "1307": {
   "n": 6,
   "dirAcc": 83,
   "closeBias": 0.01,
   "closeMAE": 0.57,
   "rangeHit": 100,
   "closeBiasAdj": 0.0,
   "rangeMult": 0.85,
   "active": true
  },
  "NVDA": {
   "n": 6,
   "dirAcc": 33,
   "closeBias": -0.4,
   "closeMAE": 2.4,
   "rangeHit": 50,
   "closeBiasAdj": -0.24,
   "rangeMult": 1.15,
   "active": true
  },
  "AAPL": {
   "n": 6,
   "dirAcc": 67,
   "closeBias": 0.16,
   "closeMAE": 1.81,
   "rangeHit": 67,
   "closeBiasAdj": 0.09,
   "rangeMult": 1.15,
   "active": true
  },
  "SPCX": {
   "n": 6,
   "dirAcc": 33,
   "closeBias": -0.09,
   "closeMAE": 5.08,
   "rangeHit": 33,
   "closeBiasAdj": -0.05,
   "rangeMult": 1.3,
   "active": true
  }
 }
};
