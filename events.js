// Machine-managed event calendar. Strict JSON body — maintained by the scheduled scan.
// kind: macro | earnings | revenue | corp. "est" marks estimated dates.
const EVENTS = [
 {"d": "2026-07-10", "t": "TWSE monthly revenue (June) — 2344 / 2337 / 6770 / 1307 + TSMC", "sym": null, "kind": "revenue", "est": true},
 {"d": "2026-07-14", "t": "US CPI (June print) — key data ahead of the Jul 28-29 FOMC decision", "sym": null, "kind": "macro", "est": true},
 {"d": "2026-07-16", "t": "TSMC Q2 2026 earnings call — guided $39.0-40.2B revenue; watch for a 2026 outlook raise on AI capacity constraints", "sym": null, "kind": "earnings", "est": true},
 {"d": "2026-07-28", "t": "Apple Q3 FY26 earnings — first print under incoming CEO Ternus", "sym": "AAPL", "kind": "earnings", "est": true},
 {"d": "2026-07-29", "t": "FOMC rate decision — June SEP showed 9 of 19 officials expect ≥1 hike in 2026; market pricing a hold with hawkish risk", "sym": null, "kind": "macro", "est": true},
 {"d": "2026-07-30", "t": "Winbond Q2 earnings — key test of CEO's 'price hikes ≥ Q1' guidance after the 225→183 retracement", "sym": "2344", "kind": "earnings", "est": true},
 {"d": "2026-08-01", "t": "SpaceX Q2 earnings + first insider lockup unlock window begins (~20% of locked shares)", "sym": "SPCX", "kind": "earnings", "est": true},
 {"d": "2026-08-26", "t": "NVIDIA Q2 FY27 earnings — Q2 guide was $91B; will Blackwell ramp validate?", "sym": "NVDA", "kind": "earnings", "est": true},
 {"d": "2026-09-01", "t": "Tim Cook → John Ternus CEO handover (confirmed September)", "sym": "AAPL", "kind": "corp", "est": false},
 {"d": "2026-12-08", "t": "SPCX final employee lockup expiry — bulk of Class A shares enter market", "sym": "SPCX", "kind": "corp", "est": true}
];
