// Machine-managed Congress/Senate large-trade tracker. Strict JSON body — maintained by the scheduled scan.
// Only trades sized $1,000,001+ (the STOCK Act bracket above $1M) are listed.
// topTraders: verified aggregates (Quiver Quantitative, last 12 months).
// trades: verified individual disclosures (House Clerk PTRs / Quiver / press coverage of filings).
const SENATORS = {
 "generated": "2026-07-09",
 "threshold": 1000000,
 "note": "U.S. lawmakers must disclose trades within 45 days (STOCK Act). Amounts are official ranges. This view filters to trades of $1M or more. Aggregate data: Quiver Quantitative 12-month trailing. Public-record transparency data, not a recommendation.",
 "topTraders": [
  {"name": "Ro Khanna", "party": "D", "chamber": "House", "trades": 4417, "volume": 56976000},
  {"name": "Nancy Pelosi", "party": "D", "chamber": "House", "trades": 21, "volume": 52525000},
  {"name": "Michael T. McCaul", "party": "R", "chamber": "House", "trades": 1006, "volume": 49347500},
  {"name": "Tony Wied", "party": "R", "chamber": "House", "trades": 19, "volume": 25882500},
  {"name": "Cleo Fields", "party": "D", "chamber": "House", "trades": 210, "volume": 21175500},
  {"name": "Chip Roy", "party": "R", "chamber": "House", "trades": 3, "volume": 15350000},
  {"name": "Gilbert Cisneros", "party": "D", "chamber": "House", "trades": 1098, "volume": 11557000}
 ],
 "trades": [
  {"politician": "Chip Roy", "party": "R", "chamber": "House", "ticker": "AESI", "side": "buy", "sizeLow": 5000001, "sizeHigh": 25000000, "date": "2026-04-30", "note": "spouse account — Atlas Energy Solutions (Permian frac sand); no watchlist overlap, but an energy bet placed weeks before the Hormuz re-escalation"},
  {"politician": "Nancy Pelosi", "party": "D", "chamber": "House", "ticker": "AB", "side": "buy", "sizeLow": 1000001, "sizeHigh": 5000000, "date": "2026-01-16", "note": "spouse — purchased 25,000 AllianceBernstein units (PTR filed 2026-01-23)"},
  {"politician": "Nancy Pelosi", "party": "D", "chamber": "House", "ticker": "GOOGL", "side": "sell", "sizeLow": 1000001, "sizeHigh": 5000000, "date": "2025-12-30", "note": "spouse — 7,704 shares contributed to donor-advised fund"},
  {"politician": "Nancy Pelosi", "party": "D", "chamber": "House", "ticker": "AAPL", "side": "sell", "sizeLow": 5000001, "sizeHigh": 25000000, "date": "2025-12-30", "note": "watchlist overlap — AAPL; spouse contributed 28,200 shares to donor-advised fund"},
  {"politician": "Nancy Pelosi", "party": "D", "chamber": "House", "ticker": "DIS", "side": "sell", "sizeLow": 1000001, "sizeHigh": 5000000, "date": "2025-12-30", "note": "spouse — sold 10,000 shares"},
  {"politician": "Nancy Pelosi", "party": "D", "chamber": "House", "ticker": "AAPL", "side": "sell", "sizeLow": 5000001, "sizeHigh": 25000000, "date": "2025-12-24", "note": "watchlist overlap — AAPL; spouse sold 45,000 shares (~$290 area, before the July recovery high)"},
  {"politician": "Nancy Pelosi", "party": "D", "chamber": "House", "ticker": "AMZN", "side": "sell", "sizeLow": 1000001, "sizeHigh": 5000000, "date": "2025-12-24", "note": "spouse — sold 20,000 shares"},
  {"politician": "Nancy Pelosi", "party": "D", "chamber": "House", "ticker": "NVDA", "side": "sell", "sizeLow": 1000001, "sizeHigh": 5000000, "date": "2025-12-24", "note": "watchlist overlap — NVDA; spouse sold 20,000 shares, while keeping Jan-2027 $100 calls"},
  {"politician": "Cleo Fields", "party": "D", "chamber": "House", "ticker": "NVDA", "side": "buy", "sizeLow": 1000001, "sizeHigh": 5000000, "date": "2025-06-26", "note": "watchlist overlap — NVDA"}
 ]
};
