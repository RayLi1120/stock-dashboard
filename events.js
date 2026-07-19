// Machine-managed event calendar. Strict JSON body — maintained by the scheduled scan.
// kind: macro | earnings | revenue | corp. "est" marks estimated dates.
const EVENTS = [
 {"d": "2026-07-24", "t": "US June PCE (late-July release) — the Fed's preferred gauge and the last major inflation input before the FOMC; June CPI already cooled (3.5% vs 3.8% exp.)", "sym": null, "kind": "macro", "est": true},
 {"d": "2026-07-29", "t": "FOMC rate decision (Jul 28-29) — market pricing a hold; September-hike odds ~63% after the soft CPI (down from 75%+); Warsh: not 'mission accomplished'; Hormuz oil shock (Brent ~$86) complicates the picture", "sym": null, "kind": "macro", "est": false},
 {"d": "2026-07-30", "t": "Apple fiscal Q3 earnings (confirmed) — one of Cook's final calls before the Sep 1 Ternus handover; first real test of converting the +15% July AI re-rating into iPhone demand numbers", "sym": "AAPL", "kind": "earnings", "est": false},
 {"d": "2026-07-30", "t": "Winbond Q2 earnings — now the sector referendum: CEO's 'price hikes ≥ Q1' guidance vs C.C. Wei's 'only AI-related mature nodes are tight' remark that triggered the Jul 17 crash", "sym": "2344", "kind": "earnings", "est": true},
 {"d": "2026-08-06", "t": "SpaceX first public earnings + first lockup unlock (~20% of insiders; the +10% conditional tranche is moot with the stock below the $135 IPO price) — the double event running the tape", "sym": "SPCX", "kind": "earnings", "est": false},
 {"d": "2026-08-10", "t": "TWSE July monthly revenue window (due by Aug 10) — first prints for the memory trio after the crash: do Winbond/Macronix/Powerchip numbers keep accelerating while the tape says the cycle peaked?", "sym": null, "kind": "revenue", "est": true},
 {"d": "2026-08-26", "t": "NVIDIA Q2 FY27 earnings — guide was $91B ±2%; China H200 channel reopening (Alibaba/ByteDance cleared to order) is upside not in guidance", "sym": "NVDA", "kind": "earnings", "est": true},
 {"d": "2026-09-01", "t": "Tim Cook → John Ternus CEO handover (confirmed)", "sym": "AAPL", "kind": "corp", "est": false},
 {"d": "2026-12-08", "t": "SPCX final employee lockup expiry — bulk of Class A shares enter market", "sym": "SPCX", "kind": "corp", "est": true}
];
