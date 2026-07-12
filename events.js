// Machine-managed event calendar. Strict JSON body — maintained by the scheduled scan.
// kind: macro | earnings | revenue | corp. "est" marks estimated dates.
const EVENTS = [
 {"d": "2026-07-13", "t": "TWSE June monthly revenue — San Fang (1307), the last watchlist name still to report; still unconfirmed as of this scan (market shut Jul 10 for Typhoon Bavi may be delaying it). Winbond (+189.88% YoY), Macronix (+216% YoY) and Powerchip (+68.8% YoY) already posted records/multi-year highs", "sym": "1307", "kind": "revenue", "est": true},
 {"d": "2026-07-14", "t": "US CPI (June print) — key data ahead of the Jul 28-29 FOMC; reignited Hormuz standoff (US-Iran exchanges resumed Jul 9-10) raises the stakes", "sym": null, "kind": "macro", "est": true},
 {"d": "2026-07-16", "t": "TSMC Q2 2026 earnings (confirmed) — Street $40.0B revenue, EPS $3.81, guided GM 65.5-67.5%; the AI-demand referendum for the TW tape", "sym": null, "kind": "earnings", "est": false},
 {"d": "2026-07-29", "t": "FOMC rate decision (Jul 28-29) — June SEP showed 9 of 19 officials expect ≥1 hike in 2026; market pricing a hold with hawkish risk, now plus an oil shock", "sym": null, "kind": "macro", "est": false},
 {"d": "2026-07-30", "t": "Apple fiscal Q3 earnings (confirmed, moved from Jul 28 est.) — one of Cook's final calls before the Ternus handover", "sym": "AAPL", "kind": "earnings", "est": false},
 {"d": "2026-07-30", "t": "Winbond Q2 earnings — key test of CEO's 'price hikes ≥ Q1' guidance after the 225→168 retracement", "sym": "2344", "kind": "earnings", "est": true},
 {"d": "2026-08-06", "t": "SpaceX first public earnings + first lockup unlock (~20% of insiders may sell; +10% conditional on IPO-price terms) — the double event running the tape", "sym": "SPCX", "kind": "earnings", "est": false},
 {"d": "2026-08-26", "t": "NVIDIA Q2 FY27 earnings — Q2 guide was $91B; hyperscaler capex guides earlier in July set the bar", "sym": "NVDA", "kind": "earnings", "est": true},
 {"d": "2026-09-01", "t": "Tim Cook → John Ternus CEO handover (confirmed)", "sym": "AAPL", "kind": "corp", "est": false},
 {"d": "2026-12-08", "t": "SPCX final employee lockup expiry — bulk of Class A shares enter market", "sym": "SPCX", "kind": "corp", "est": true}
];
