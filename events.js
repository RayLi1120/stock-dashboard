// Machine-managed event calendar. Strict JSON body — maintained by the scheduled scan.
// kind: macro | earnings | revenue | corp. "est" marks estimated dates.
const EVENTS = [
 {"d": "2026-07-10", "t": "TWSE monthly revenue (June) — 2344 / 2337 / 6770 / 1307 + TSMC", "sym": null, "kind": "revenue", "est": true},
 {"d": "2026-07-14", "t": "US CPI (June print) — key data under the Warsh Fed", "sym": null, "kind": "macro", "est": true},
 {"d": "2026-07-22", "t": "SPCX analyst quiet period ends (~40 days post-IPO) — initiations likely", "sym": "SPCX", "kind": "corp", "est": true},
 {"d": "2026-07-28", "t": "Apple Q3 FY26 earnings — first print under incoming CEO Ternus", "sym": "AAPL", "kind": "earnings", "est": true},
 {"d": "2026-07-30", "t": "Winbond Q2 earnings — key test of CEO's 'price hikes ≥ Q1' guidance", "sym": "2344", "kind": "earnings", "est": true},
 {"d": "2026-08-01", "t": "SpaceX Q2 earnings + early-investor lockup unlock window begins (~late July/early Aug)", "sym": "SPCX", "kind": "earnings", "est": true},
 {"d": "2026-08-26", "t": "NVIDIA Q2 FY27 earnings — Q2 guide was $91B; will Blackwell ramp validate?", "sym": "NVDA", "kind": "earnings", "est": true},
 {"d": "2026-09-01", "t": "Tim Cook → John Ternus CEO handover (confirmed September)", "sym": "AAPL", "kind": "corp", "est": false},
 {"d": "2026-12-08", "t": "SPCX final employee lockup expiry — bulk of Class A shares enter market", "sym": "SPCX", "kind": "corp", "est": true}
];
