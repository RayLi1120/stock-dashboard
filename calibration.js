// Machine-managed prediction calibration. Strict JSON body — written by calibrate.py.
// The scan reads this and applies closeBiasAdj / rangeMult to the next guesses.
const CALIBRATION = {
 "generated": "2026-07-10 22:00",
 "minN": 3,
 "rangeTarget": 70,
 "global": {
  "n": 35,
  "dirAcc": 57,
  "closeBias": 0.05,
  "closeMAE": 2.98,
  "rangeHit": 63,
  "closeBiasAdj": 0.03,
  "rangeMult": 1.15,
  "active": true
 },
 "perSymbol": {
  "2344": {
   "n": 5,
   "dirAcc": 40,
   "closeBias": 0.05,
   "closeMAE": 4.87,
   "rangeHit": 40,
   "closeBiasAdj": 0.03,
   "rangeMult": 1.3,
   "active": true
  },
  "2337": {
   "n": 5,
   "dirAcc": 80,
   "closeBias": 0.04,
   "closeMAE": 2.98,
   "rangeHit": 60,
   "closeBiasAdj": 0.02,
   "rangeMult": 1.15,
   "active": true
  },
  "6770": {
   "n": 5,
   "dirAcc": 60,
   "closeBias": -1.06,
   "closeMAE": 3.01,
   "rangeHit": 80,
   "closeBiasAdj": -0.64,
   "rangeMult": 1.0,
   "active": true
  },
  "1307": {
   "n": 5,
   "dirAcc": 80,
   "closeBias": -0.02,
   "closeMAE": 0.65,
   "rangeHit": 100,
   "closeBiasAdj": -0.01,
   "rangeMult": 0.85,
   "active": true
  },
  "NVDA": {
   "n": 5,
   "dirAcc": 40,
   "closeBias": 0.45,
   "closeMAE": 1.95,
   "rangeHit": 60,
   "closeBiasAdj": 0.27,
   "rangeMult": 1.15,
   "active": true
  },
  "AAPL": {
   "n": 5,
   "dirAcc": 60,
   "closeBias": 0.17,
   "closeMAE": 2.16,
   "rangeHit": 60,
   "closeBiasAdj": 0.1,
   "rangeMult": 1.15,
   "active": true
  },
  "SPCX": {
   "n": 5,
   "dirAcc": 40,
   "closeBias": 0.74,
   "closeMAE": 5.25,
   "rangeHit": 40,
   "closeBiasAdj": 0.44,
   "rangeMult": 1.3,
   "active": true
  }
 }
};
