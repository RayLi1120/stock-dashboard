// Shared SVG chart rendering — no dependencies.
const GREEN = "#16c784", RED = "#ea3943", FLAT = "#8b93a7";
const MA5C = "#f0b90b", MA20C = "#6c8cff";

function dirColor(dir) { return dir === "up" ? GREEN : dir === "down" ? RED : FLAT; }

function fmt(n) {
  if (n >= 1000) return n.toLocaleString("en-US", { maximumFractionDigits: 0 });
  return n.toLocaleString("en-US", { maximumFractionDigits: 2 });
}

// ---- indicators ----

// Simple moving average of closes; returns array aligned to candles (null until enough data).
function sma(candles, period) {
  const out = new Array(candles.length).fill(null);
  let sum = 0;
  for (let i = 0; i < candles.length; i++) {
    sum += candles[i].c;
    if (i >= period) sum -= candles[i - period].c;
    if (i >= period - 1) out[i] = sum / period;
  }
  return out;
}

// Wilder RSI(14) — returns latest value, or null if not enough candles.
function rsi14(candles) {
  const p = 14;
  if (candles.length < p + 1) return null;
  let gain = 0, loss = 0;
  for (let i = 1; i <= p; i++) {
    const d = candles[i].c - candles[i - 1].c;
    if (d >= 0) gain += d; else loss -= d;
  }
  let avgG = gain / p, avgL = loss / p;
  for (let i = p + 1; i < candles.length; i++) {
    const d = candles[i].c - candles[i - 1].c;
    avgG = (avgG * (p - 1) + Math.max(d, 0)) / p;
    avgL = (avgL * (p - 1) + Math.max(-d, 0)) / p;
  }
  if (avgL === 0) return 100;
  return 100 - 100 / (1 + avgG / avgL);
}

// Today's volume as a multiple of the average of the prior `lookback` sessions.
function volRatio(candles, lookback = 20) {
  const n = candles.length;
  if (n < 3) return null;
  const prior = candles.slice(Math.max(0, n - 1 - lookback), n - 1).map(c => c.v || 0);
  const avg = prior.reduce((a, b) => a + b, 0) / prior.length;
  if (!avg) return null;
  return (candles[n - 1].v || 0) / avg;
}

function indicatorSummary(candles) {
  const ma5a = sma(candles, 5), ma20a = sma(candles, 20);
  return {
    rsi: rsi14(candles),
    ma5: ma5a[ma5a.length - 1],
    ma20: ma20a[ma20a.length - 1],
    vr: volRatio(candles),
  };
}

function rsiColor(v) { return v == null ? FLAT : v >= 70 ? RED : v <= 30 ? GREEN : "#cdd3e0"; }

// ---- charts ----

function maPolyline(ma, x, y, color) {
  const pts = [];
  ma.forEach((v, i) => { if (v != null) pts.push(`${x(i).toFixed(1)},${y(v).toFixed(1)}`); });
  if (pts.length < 2) return "";
  return `<polyline points="${pts.join(" ")}" fill="none" stroke="${color}" stroke-width="1.6" opacity="0.9" stroke-linejoin="round" class="ma" pathLength="1"/>`;
}

// Full candlestick chart for dashboard cards: candles + MA5/MA20 overlay + volume bars.
function candleChartCard(candles, w = 620, h = 250) {
  const n = candles.length;
  const slot = w / n, cw = Math.max(Math.min(slot * 0.6, 18), 2.5);
  const priceTop = 10, priceBot = h * 0.74, volTop = h * 0.80, volBot = h - 6;
  const lo0 = Math.min(...candles.map(c => c.l)), hi0 = Math.max(...candles.map(c => c.h));
  const pad = (hi0 - lo0) * 0.06 || 1;
  const lo = lo0 - pad, hi = hi0 + pad;
  const maxV = Math.max(...candles.map(c => c.v || 0)) || 1;
  const x = i => slot * i + slot / 2;
  const y = v => priceTop + (1 - (v - lo) / (hi - lo)) * (priceBot - priceTop);
  let out = "";
  for (let g = 0; g <= 3; g++) {
    const v = lo + ((hi - lo) * g) / 3, gy = y(v);
    out += `<line x1="0" x2="${w}" y1="${gy}" y2="${gy}" stroke="#1f2535" stroke-width="1"/>
            <text x="${w - 3}" y="${gy - 3}" text-anchor="end" class="axis">${fmt(v)}</text>`;
  }
  candles.forEach((c, i) => {
    const col = c.c >= c.o ? GREEN : RED;
    const cx = x(i);
    const bt = y(Math.max(c.o, c.c)), bb = y(Math.min(c.o, c.c));
    out += `<line x1="${cx}" x2="${cx}" y1="${y(c.h)}" y2="${y(c.l)}" stroke="${col}" stroke-width="1"/>`;
    out += `<rect x="${cx - cw / 2}" y="${bt}" width="${cw}" height="${Math.max(bb - bt, 1.5)}" fill="${col}"/>`;
    const vh = ((c.v || 0) / maxV) * (volBot - volTop);
    out += `<rect x="${cx - cw / 2}" y="${volBot - vh}" width="${cw}" height="${Math.max(vh, 0.5)}" fill="${col}" opacity="0.45"/>`;
  });
  out += maPolyline(sma(candles, 5), x, y, MA5C);
  out += maPolyline(sma(candles, 20), x, y, MA20C);
  out += `<text x="4" y="${volTop - 4}" class="axis">Vol</text>`;
  out += `<text x="4" y="16" class="axis">${candles[0].d} → ${candles[n - 1].d}</text>`;
  return `<svg viewBox="0 0 ${w} ${h}" preserveAspectRatio="none">${out}</svg>`;
}

// Detail candlestick chart: `real` candles plus optional `pred` ghost candle (dashed).
function candleChart(real, pred, w = 460, h = 300) {
  const all = real.slice();
  if (pred) all.push(pred);
  const lo0 = Math.min(...all.map(c => c.l)), hi0 = Math.max(...all.map(c => c.h));
  const pad = (hi0 - lo0) * 0.1 || 1;
  const lo = lo0 - pad, hi = hi0 + pad;
  const n = all.length;
  const slot = w / n, cw = Math.min(slot * 0.45, 34);
  const y = v => 14 + (1 - (v - lo) / (hi - lo)) * (h - 52);
  let out = "";
  for (let g = 0; g <= 4; g++) {
    const v = lo + ((hi - lo) * g) / 4, gy = y(v);
    out += `<line x1="0" x2="${w}" y1="${gy}" y2="${gy}" stroke="#1f2535" stroke-width="1"/>
            <text x="${w - 4}" y="${gy - 4}" text-anchor="end" class="axis">${fmt(v)}</text>`;
  }
  all.forEach((c, i) => {
    const cx = slot * i + slot / 2;
    const up = c.c >= c.o;
    const col = up ? GREEN : RED;
    const isPred = pred && i === n - 1;
    const bodyTop = y(Math.max(c.o, c.c)), bodyBot = y(Math.min(c.o, c.c));
    const bh = Math.max(bodyBot - bodyTop, 2);
    const dash = isPred ? `stroke-dasharray="5 4" class="predEl"` : "";
    const fill = isPred ? `${col}22` : col;
    out += `<line x1="${cx}" x2="${cx}" y1="${y(c.h)}" y2="${y(c.l)}" stroke="${col}" stroke-width="1.5" ${dash}/>`;
    out += `<rect x="${cx - cw / 2}" y="${bodyTop}" width="${cw}" height="${bh}" rx="2"
             fill="${fill}" stroke="${col}" stroke-width="1.5" ${dash}/>`;
    out += `<text x="${cx}" y="${h - 22}" text-anchor="middle" class="axis">${isPred ? "next?" : c.d}</text>`;
    if (isPred) out += `<text x="${cx}" y="${h - 6}" text-anchor="middle" class="axis pred-tag">guess</text>`;
  });
  return `<svg viewBox="0 0 ${w} ${h}">${out}</svg>`;
}

// Indicator chips (RSI / MA / volume) shared by cards and detail page.
function indicatorChips(candles) {
  const s = indicatorSummary(candles);
  const last = candles[candles.length - 1].c;
  const rsiTxt = s.rsi == null ? "–" : s.rsi.toFixed(0);
  const rsiNote = s.rsi == null ? "" : s.rsi >= 70 ? " overbought" : s.rsi <= 30 ? " oversold" : "";
  const maState = s.ma5 != null && s.ma20 != null
    ? (s.ma5 >= s.ma20 ? `<i class="up">▲</i>` : `<i class="down">▼</i>`) : "";
  const aboveMa20 = s.ma20 != null ? (last >= s.ma20 ? "above" : "below") : "";
  const vrTxt = s.vr == null ? "–" : s.vr.toFixed(2) + "×";
  const vrCls = s.vr != null && s.vr >= 1 ? "up" : "";
  return `
    <span class="chip" title="Relative Strength Index, 14 days">RSI14 <b style="color:${rsiColor(s.rsi)}">${rsiTxt}</b>${rsiNote}</span>
    <span class="chip" title="5-day vs 20-day moving average; price ${aboveMa20} MA20">
      <i class="dot" style="background:${MA5C}"></i>MA5 ${s.ma5 != null ? fmt(s.ma5) : "–"}
      <i class="dot" style="background:${MA20C}"></i>MA20 ${s.ma20 != null ? fmt(s.ma20) : "–"} ${maState}</span>
    <span class="chip" title="Today's volume vs 20-day average">Vol <b class="${vrCls}">${vrTxt}</b> 20d avg</span>`;
}

// ---- pattern scanner (daily candles, most recent sessions) ----

function detectPatterns(candles) {
  const res = [];
  const n = candles.length;
  if (n < 5) return res;
  const a = candles[n - 1], b = candles[n - 2], c3 = candles[n - 3];
  const range = a.h - a.l || 1e-9, body = Math.abs(a.c - a.o);
  const upWick = a.h - Math.max(a.o, a.c), loWick = Math.min(a.o, a.c) - a.l;
  const green = c => c.c >= c.o, red = c => c.c < c.o;

  if (body <= 0.12 * range)
    res.push({ label: "Doji", dir: "neut", note: "open≈close — indecision after the recent move; the next candle usually decides." });
  else if (loWick >= 2 * body && upWick <= 0.4 * body)
    res.push({ label: green(a) ? "Hammer" : "Hanging man", dir: green(a) ? "bull" : "bear", note: "long lower wick — buyers absorbed an intraday flush." });
  else if (upWick >= 2 * body && loWick <= 0.4 * body)
    res.push({ label: "Shooting star", dir: "bear", note: "long upper wick — sellers faded the intraday push." });

  if (red(b) && green(a) && a.o <= b.c && a.c >= b.o)
    res.push({ label: "Bullish engulfing", dir: "bull", note: "today's body swallowed yesterday's red candle — classic reversal/continuation signal." });
  if (green(b) && red(a) && a.o >= b.c && a.c <= b.o)
    res.push({ label: "Bearish engulfing", dir: "bear", note: "today's red body swallowed yesterday's green candle." });

  if (green(a) && green(b) && green(c3) && a.c > b.c && b.c > c3.c)
    res.push({ label: "Three white soldiers", dir: "bull", note: "three rising green closes — strong, but late-stage soldiers often precede a pause." });
  if (red(a) && red(b) && red(c3) && a.c < b.c && b.c < c3.c)
    res.push({ label: "Three black crows", dir: "bear", note: "three falling red closes — persistent distribution." });

  const gap = (a.o - b.c) / b.c * 100;
  if (gap >= 1.5) res.push({ label: `Gap up +${gap.toFixed(1)}%`, dir: "bull", note: "opened well above yesterday's close — watch whether the gap holds (support) or fills." });
  if (gap <= -1.5) res.push({ label: `Gap down ${gap.toFixed(1)}%`, dir: "bear", note: "opened well below yesterday's close — overhead gap now resistance." });

  const ma5a = sma(candles, 5), ma20a = sma(candles, 20);
  const i1 = n - 1, i0 = n - 2;
  if (ma5a[i0] != null && ma20a[i0] != null && ma5a[i1] != null && ma20a[i1] != null) {
    if (ma5a[i0] <= ma20a[i0] && ma5a[i1] > ma20a[i1])
      res.push({ label: "MA5↑MA20 cross", dir: "bull", note: "short-term trend just crossed above the monthly trend — momentum regime change." });
    if (ma5a[i0] >= ma20a[i0] && ma5a[i1] < ma20a[i1])
      res.push({ label: "MA5↓MA20 cross", dir: "bear", note: "short-term trend just lost the monthly trend." });
  }

  const hiM = Math.max(...candles.map(c => c.h)), loM = Math.min(...candles.map(c => c.l));
  if (a.c >= hiM * 0.995) res.push({ label: "At 1-month high", dir: "bull", note: "closing at the top of the monthly range — no overhead supply in this window." });
  if (a.c <= loM * 1.005) res.push({ label: "At 1-month low", dir: "bear", note: "closing at the bottom of the monthly range." });

  const vr = volRatio(candles);
  if (vr != null && vr >= 2)
    res.push({ label: `Volume spike ${vr.toFixed(1)}×`, dir: green(a) ? "bull" : "bear", note: "conviction behind today's move — spikes mark battles; direction of the close tells the winner." });

  return res;
}

function patternBadges(candles) {
  const pats = detectPatterns(candles);
  if (!pats.length) return "";
  return `<div class="patterns">` + pats.map(p =>
    `<span class="badge ${p.dir}" title="${p.note.replace(/"/g, "&quot;")}">${p.label}</span>`).join("") + `</div>`;
}

// ---- volume profile (volume-at-price, from 5d of 15-min bars) ----

function volumeProfileChart(profile, lastClose, w = 220, h = 300) {
  if (!profile) return `<div class="sub">No intraday data for a volume profile.</div>`;
  const { lo, hi, bins } = profile;
  const maxV = Math.max(...bins) || 1;
  const bh = (h - 30) / bins.length;
  const pocI = bins.indexOf(Math.max(...bins));
  const py = v => 10 + (1 - (v - lo) / (hi - lo)) * (h - 30);
  let out = "";
  bins.forEach((v, i) => {
    const y = py(lo + (i + 1) * (hi - lo) / bins.length);
    const bw = (v / maxV) * (w - 70);
    out += `<rect x="0" y="${y}" width="${Math.max(bw, 0.5)}" height="${Math.max(bh - 1.2, 1)}"
            fill="${i === pocI ? "#f0b90b" : "#3a4763"}" opacity="${i === pocI ? 0.95 : 0.8}"/>`;
  });
  const poc = lo + (pocI + 0.5) * (hi - lo) / bins.length;
  out += `<text x="${w - 4}" y="${py(hi) + 8}" text-anchor="end" class="axis">${fmt(hi)}</text>`;
  out += `<text x="${w - 4}" y="${py(lo)}" text-anchor="end" class="axis">${fmt(lo)}</text>`;
  out += `<text x="${w - 4}" y="${py(poc) + 3}" text-anchor="end" class="axis" fill="#f0b90b">POC ${fmt(poc)}</text>`;
  if (lastClose >= lo && lastClose <= hi) {
    const ly = py(lastClose);
    out += `<line x1="0" x2="${w - 60}" y1="${ly}" y2="${ly}" stroke="#e6e9ef" stroke-width="1" stroke-dasharray="3 3"/>`;
  }
  return `<svg viewBox="0 0 ${w} ${h}">${out}</svg>`;
}

// Build the predicted candle (absolute prices) from % offsets off the last close.
function buildPrediction(lastClose, p) {
  return {
    d: "next", o: lastClose * (1 + p.oPct / 100), h: lastClose * (1 + p.hPct / 100),
    l: lastClose * (1 + p.lPct / 100), c: lastClose * (1 + p.cPct / 100),
  };
}

function dayChange(candles) {
  const n = candles.length;
  const prev = candles[n - 2].c, last = candles[n - 1].c;
  return { abs: last - prev, pct: ((last - prev) / prev) * 100, last };
}
