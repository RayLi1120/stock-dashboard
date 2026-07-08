// Machine-managed Congress/Senate large-trade tracker. Strict JSON body — maintained by the scheduled scan.
// Only trades sized $1,000,001+ (the STOCK Act bracket above $1M) are listed.
// topTraders: verified aggregates (Quiver Quantitative, last 12 months).
// trades: sample rows until the scan fills live disclosures (sample:true marks unverified seed data).
const SENATORS = {
 "generated": "2026-07-08",
 "threshold": 1000000,
 "note": "U.S. lawmakers must disclose trades within 45 days (STOCK Act). Amounts are official ranges. This view filters to trades of $1M or more. Aggregate data: Quiver Quantitative 12-month trailing.",
 "topTraders": [
  {"name": "Ro Khanna", "party": "D", "chamber": "House", "trades": 4450, "volume": 57300000},
  {"name": "Nancy Pelosi", "party": "D", "chamber": "House", "trades": 21, "volume": 52500000},
  {"name": "Michael T. McCaul", "party": "R", "chamber": "House", "trades": 1010, "volume": 49400000},
  {"name": "Tony Wied", "party": "R", "chamber": "House", "trades": 19, "volume": 25882500},
  {"name": "Cleo Fields", "party": "D", "chamber": "House", "trades": 204, "volume": 20010500},
  {"name": "Chip Roy", "party": "R", "chamber": "House", "trades": 3, "volume": 15350000},
  {"name": "Gilbert Cisneros", "party": "D", "chamber": "House", "trades": 1098, "volume": 11557000}
 ],
 "trades": [
  {"politician": "Nancy Pelosi", "party": "D", "chamber": "House", "ticker": "NVDA", "side": "buy", "sizeLow": 1000001, "sizeHigh": 5000000, "date": "2026-06-10", "note": "watchlist overlap — NVDA", "sample": true},
  {"politician": "Ro Khanna", "party": "D", "chamber": "House", "ticker": "AAPL", "side": "buy", "sizeLow": 1000001, "sizeHigh": 5000000, "date": "2026-06-09", "note": "watchlist overlap — AAPL", "sample": true},
  {"politician": "Michael T. McCaul", "party": "R", "chamber": "House", "ticker": "MSFT", "side": "buy", "sizeLow": 1000001, "sizeHigh": 5000000, "date": "2026-06-08", "note": "", "sample": true}
 ]
};
