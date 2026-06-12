// Machine-managed event calendar. Strict JSON body — maintained by the scheduled scan.
// kind: macro | earnings | revenue | corp. "est" marks estimated dates.
const EVENTS = [
 {"d": "2026-06-16", "t": "FOMC meeting begins — first projections under Chair Warsh", "sym": null, "kind": "macro", "est": false},
 {"d": "2026-06-17", "t": "FOMC decision + dot plot + press conference", "sym": null, "kind": "macro", "est": false},
 {"d": "2026-07-10", "t": "TWSE monthly revenue (June) — 2344 / 2337 / 6770 / 1307 + TSMC", "sym": null, "kind": "revenue", "est": true},
 {"d": "2026-07-14", "t": "US CPI (June print)", "sym": null, "kind": "macro", "est": true},
 {"d": "2026-07-28", "t": "Apple Q3 FY26 earnings", "sym": "AAPL", "kind": "earnings", "est": true},
 {"d": "2026-07-30", "t": "Winbond Q2 earnings (~48 days from 06-12 per TradingView)", "sym": "2344", "kind": "earnings", "est": true},
 {"d": "2026-08-26", "t": "NVIDIA Q2 FY27 earnings", "sym": "NVDA", "kind": "earnings", "est": true},
 {"d": "2026-07-22", "t": "SPCX analyst initiations — quiet period ends (~40 days post-IPO)", "sym": "SPCX", "kind": "corp", "est": true},
 {"d": "2026-08-12", "t": "SpaceX first earnings as a public company", "sym": "SPCX", "kind": "earnings", "est": true},
 {"d": "2026-09-01", "t": "Tim Cook → John Ternus CEO handover (announced for September)", "sym": "AAPL", "kind": "corp", "est": true},
 {"d": "2026-12-09", "t": "SPCX IPO lockup expiry (~180 days) — supply overhang event", "sym": "SPCX", "kind": "corp", "est": true}
];
