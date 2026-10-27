// Frame-Popup fuer Dienst-Kacheln (frame_service): Verlauf, Infos und Link zur Weboberflaeche.
// Eigene Erweiterung, nicht Teil von ha-frame-starter. Wird von frame.js per fx.load('frame-popup.js') nachgeladen.
// Aufruf: window.__frameSvc(key, el, ev) - key verweist auf window.__frameSvcs[key] (von frame_service eingetragen).

const CSS = `
:host { --paper: #F2EEE6; --paper-2: #E8E2D5; --card: #FBF9F4; --ink: #111111; --ink-2: #3B3934; --mute: #7A756B;
  --line: #D6CFC0; --alert: #E5261E; --sans: 'Archivo', system-ui, sans-serif; --serif: 'Instrument Serif', Georgia, serif;
  position: fixed; inset: 0; z-index: 1000; font-family: var(--sans); color: var(--ink); -webkit-font-smoothing: antialiased; }
* { box-sizing: border-box; }
.bd { position: absolute; inset: 0; background: rgb(17 17 17 / .38); backdrop-filter: blur(2px); -webkit-backdrop-filter: blur(2px);
  display: grid; place-items: center; padding: 24px; animation: fade .16s ease-out; }
.sh { width: min(920px, 100%); max-height: calc(100vh - 48px); overflow: auto; background: var(--paper); border: 2px solid var(--ink);
  border-radius: 18px; box-shadow: 0 18px 48px rgb(17 17 17 / .22); display: flex; flex-direction: column; animation: rise .2s ease-out; }
.hd { display: grid; grid-template-columns: auto minmax(0, 1fr) auto; gap: 14px; align-items: center; padding: 18px 20px 16px;
  border-bottom: 3px solid var(--ink); }
.ic { width: 52px; height: 52px; border-radius: 50%; display: grid; place-items: center; background: var(--ink); color: var(--paper); }
.ic.is-down { background: var(--alert); }
.ic.is-na { background: var(--line); color: var(--ink-2); }
.ic ha-icon { --mdc-icon-size: 28px; }
.hd b { display: block; font-size: 30px; font-weight: 800; font-stretch: 80%; line-height: 1; letter-spacing: -.01em; }
.hd .sub { display: block; margin-top: 4px; font-family: var(--serif); font-size: 21px; color: var(--mute); line-height: 1.1; }
.x { all: unset; width: 44px; height: 44px; border-radius: 50%; display: grid; place-items: center; cursor: pointer; color: var(--ink);
  -webkit-tap-highlight-color: transparent; }
.x:active { background: var(--paper-2); }
.x ha-icon { --mdc-icon-size: 26px; }
.bdy { display: grid; grid-template-columns: minmax(0, 1.35fr) minmax(0, 1fr); gap: 0; }
.col { padding: 16px 20px 18px; min-width: 0; }
.col + .col { border-left: 2px solid var(--line); }
.sec { display: flex; align-items: baseline; justify-content: space-between; gap: 10px; margin-bottom: 12px; }
.lbl { font-size: 13px; font-weight: 700; font-stretch: 80%; letter-spacing: .09em; text-transform: uppercase; color: var(--mute); }
.sec > .lbl { font-size: 15px; color: var(--ink); }
.rng { display: inline-flex; border: 2px solid var(--ink); border-radius: 999px; overflow: hidden; }
.rng button { all: unset; padding: 4px 12px; font-size: 12px; font-weight: 700; font-stretch: 80%; letter-spacing: .07em;
  text-transform: uppercase; cursor: pointer; -webkit-tap-highlight-color: transparent; }
.rng button.is-on { background: var(--ink); color: var(--paper); }
.card { background: var(--card); border-radius: 14px; padding: 12px 14px; }
.card + .card { margin-top: 10px; }
.av { display: flex; align-items: baseline; gap: 10px; }
.num { font-weight: 800; font-stretch: 62%; font-variant-numeric: tabular-nums; letter-spacing: -.01em; line-height: .9; }
.av .num { font-size: 44px; }
.av .num small { font-size: 18px; margin-left: 2px; font-stretch: 80%; }
.av em { font-style: normal; font-family: var(--serif); font-size: 19px; color: var(--mute); }
.tl { position: relative; display: flex; height: 22px; margin-top: 10px; border-radius: 6px; overflow: hidden; background: var(--line); }
.tl i { display: block; height: 100%; }
.tl .up { background: var(--ink); }
.tl .down { background: var(--alert); }
.tl .na { background: var(--line); }
.ax { display: flex; justify-content: space-between; margin-top: 5px; font-size: 11px; color: var(--mute); font-variant-numeric: tabular-nums; }
.ev { margin-top: 8px; font-size: 13px; color: var(--ink-2); line-height: 1.35; }
.ev b { font-weight: 700; }
.ch-h { display: flex; align-items: baseline; justify-content: space-between; gap: 8px; }
.ch-h .num { font-size: 28px; }
.ch-h .num small { font-size: 14px; margin-left: 2px; font-stretch: 80%; }
.ch-h .tip { font-size: 12px; color: var(--mute); font-variant-numeric: tabular-nums; white-space: nowrap; }
.plot { position: relative; height: 64px; margin-top: 6px; touch-action: pan-y; cursor: crosshair; }
.plot svg { position: absolute; inset: 0; width: 100%; height: 100%; overflow: visible; }
.plot .a { fill: rgb(17 17 17 / .06); }
.plot .l { fill: none; stroke: var(--ink); stroke-width: 1.6; stroke-linejoin: round; vector-effect: non-scaling-stroke; }
.plot .m { position: absolute; top: 0; bottom: 0; width: 1px; background: var(--ink-2); opacity: 0; pointer-events: none; }
.plot.is-tip .m { opacity: .5; }
.ch-f { display: flex; justify-content: space-between; margin-top: 4px; font-size: 12px; color: var(--mute); font-variant-numeric: tabular-nums; }
.empty { font-size: 13px; color: var(--mute); padding: 6px 0; }
.kv { display: grid; grid-template-columns: minmax(0, 1fr) auto; gap: 2px 12px; align-items: baseline; padding: 9px 0;
  border-bottom: 1px solid var(--line); }
.kv:last-child { border-bottom: 0; }
.kv span { font-size: 14px; color: var(--ink-2); }
.kv b { font-size: 15px; font-weight: 700; text-align: right; font-variant-numeric: tabular-nums; }
.kv b.is-warn { color: var(--alert); }
.kv small { grid-column: 1 / -1; font-size: 12px; color: var(--mute); }
.bar { grid-column: 1 / -1; height: 5px; border-radius: 3px; background: var(--paper-2); overflow: hidden; margin-top: 4px; }
.bar i { display: block; height: 100%; background: var(--ink); }
.bar i.is-warn { background: var(--alert); }
.ft { position: sticky; bottom: 0; z-index: 1; display: flex; align-items: center; gap: 14px; padding: 14px 20px 18px; border-top: 2px solid var(--line); background: var(--paper); }
.ft span { flex: 1; min-width: 0; font-size: 13px; color: var(--mute); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.go { display: inline-flex; align-items: center; gap: 10px; padding: 0 22px; min-height: 52px; border-radius: 999px; background: var(--ink);
  color: var(--paper); text-decoration: none; font-size: 15px; font-weight: 800; font-stretch: 80%; letter-spacing: .07em;
  text-transform: uppercase; -webkit-tap-highlight-color: transparent; }
.go:active { transform: scale(.97); }
.go ha-icon { --mdc-icon-size: 20px; }
.srch { padding: 16px 20px 6px; border-bottom: 2px solid var(--line); }
.sf { display: flex; gap: 8px; }
.sf input { flex: 1; min-width: 0; font: inherit; font-size: 17px; color: var(--ink); padding: 0 18px; height: 50px; border: 2px solid var(--ink);
  border-radius: 999px; background: var(--card); outline: none; -webkit-appearance: none; appearance: none; }
.sf input::placeholder { color: var(--mute); }
.sf button { all: unset; display: inline-grid; place-items: center; width: 50px; height: 50px; border-radius: 50%; background: var(--ink);
  color: var(--paper); cursor: pointer; flex: none; -webkit-tap-highlight-color: transparent; }
.sf button ha-icon { --mdc-icon-size: 22px; }
.res { margin: 10px 0 8px; }
.res-h { display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 2px; }
.res-h em { font-style: normal; font-size: 12px; color: var(--mute); }
.doc { display: block; padding: 10px 0; border-bottom: 1px solid var(--line); color: inherit; text-decoration: none; -webkit-tap-highlight-color: transparent; }
.doc:last-child { border-bottom: 0; }
.doc:active { background: var(--paper-2); }
.doc b { display: block; font-size: 16px; font-weight: 800; font-stretch: 90%; }
.doc small { display: block; margin-top: 2px; font-size: 12px; color: var(--mute); }
.doc p { margin: 4px 0 0; font-size: 13px; line-height: 1.35; color: var(--ink-2); display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
.doc mark { background: #F9E2C6; color: inherit; border-radius: 3px; padding: 0 2px; }
.doc p.is-warn, .empty.is-warn { color: var(--alert); }
@keyframes fade { from { opacity: 0; } }
@keyframes rise { from { opacity: 0; transform: translateY(12px); } }
@media (max-width: 767px) {
  .bd { padding: 0; place-items: end stretch; }
  .sh { width: 100%; max-height: calc(100vh - 40px - env(safe-area-inset-top, 0px)); border-radius: 18px 18px 0 0; border-bottom: 0; }
  .bdy { grid-template-columns: minmax(0, 1fr); }
  .col + .col { border-left: 0; border-top: 2px solid var(--line); }
  .hd { padding: 14px 16px 12px; }
  .hd b { font-size: 24px; }
  .hd .sub { font-size: 18px; }
  .ic { width: 44px; height: 44px; }
  .col { padding: 14px 16px; }
  .srch { padding: 14px 16px 4px; }
  .sf input { font-size: 16px; }
  .ft { padding: 12px 16px calc(16px + env(safe-area-inset-bottom, 0px)); flex-direction: column; align-items: stretch; }
  .ft span { text-align: center; }
  .go { justify-content: center; }
}
@media (prefers-reduced-motion: reduce) { .bd, .sh { animation: none; } }
`;

const LANG = 'de-DE';
const esc = (s) => String(s == null ? '' : s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
const nf = (v, d) => Number(v).toLocaleString(LANG, { minimumFractionDigits: d || 0, maximumFractionDigits: d || 0 });
const hass = () => window.__frameHass;
const st = (id) => (hass() && id ? hass().states[id] : null);
const NA = ['unavailable', 'unknown'];
const live = (s) => !!s && !NA.includes(s.state);
const fmtState = (s) => (hass() && hass().formatEntityState ? hass().formatEntityState(s) : s.state);
const time = (d) => d.toLocaleTimeString(LANG, { hour: '2-digit', minute: '2-digit' });
const stamp = (d) => {
  const t0 = new Date(); t0.setHours(0, 0, 0, 0);
  const days = Math.round((new Date(d).setHours(0, 0, 0, 0) - t0) / 864e5);
  const day = days === 0 ? 'heute' : days === -1 ? 'gestern' : d.toLocaleDateString(LANG, { weekday: 'short', day: 'numeric', month: 'numeric' });
  return `${day} ${time(d)}`;
};
const span = (ms) => {
  const m = Math.max(1, Math.round(ms / 60000));
  if (m < 60) return `${m} Min.`;
  const h = ms / 36e5;
  if (h < 48) return `${Math.floor(h)} Std.${m % 60 && h < 10 ? ` ${m % 60} Min.` : ''}`;
  return `${Math.floor(h / 24)} Tage`;
};
const since = (ms) => {
  const h = ms / 36e5;
  return h < 1 ? `${Math.max(1, Math.round(ms / 60000))} Min.` : h < 48 ? `${Math.floor(h)} Std.` : `${Math.floor(h / 24)} Tagen`;
};

let host = null, root = null, cur = null, timer = null, keyFn = null;

const close = () => {
  clearInterval(timer); timer = null;
  if (keyFn) window.removeEventListener('keydown', keyFn);
  window.removeEventListener('location-changed', close);
  if (host) host.remove();
  host = root = cur = null;
};

const upOf = (cfg) => (cfg.up && cfg.up.length ? cfg.up : ['on', 'running', 'online', 'home', 'connected']);
const kind = (cfg, s) => (!live(s) ? 'na' : upOf(cfg).includes(s.state) ? 'up' : 'down');

const head = () => {
  const { cfg } = cur, s = st(cfg.status);
  const k = s ? kind(cfg, s) : 'na';
  const sub = s ? `${fmtState(s)} · seit ${since(Date.now() - new Date(s.last_changed))}` : 'Kein Status';
  root.querySelector('.ic').className = `ic${k === 'up' ? '' : ' is-' + k}`;
  root.querySelector('.hd .sub').textContent = sub;
};

// Erreichbarkeit aus der Zustandshistorie
const timeline = (list, t0, t1, cfg) => {
  const pts = (list || []).map((x) => ({ s: x.s, t: Math.max(t0, (x.lc != null ? x.lc : x.lu) * 1000) })).sort((a, b) => a.t - b.t);
  if (!pts.length) return '<div class="empty">Keine Daten im Verlauf.</div>';
  const seg = [];
  pts.forEach((p, i) => {
    const end = i + 1 < pts.length ? pts[i + 1].t : t1;
    if (end <= p.t) return;
    const k = NA.includes(p.s) ? 'na' : upOf(cfg).includes(p.s) ? 'up' : 'down';
    const last = seg[seg.length - 1];
    if (last && last.k === k) last.to = end; else seg.push({ k, from: p.t, to: end });
  });
  if (seg.length && seg[0].from > t0) seg.unshift({ k: 'na', from: t0, to: seg[0].from });
  const sum = (k) => seg.filter((x) => x.k === k).reduce((a, x) => a + x.to - x.from, 0);
  const up = sum('up'), down = sum('down'), known = up + down;
  const pct = known ? up / known * 100 : null;
  const outs = seg.filter((x) => x.k === 'down');
  const gaps = seg.filter((x, i) => x.k === 'na' && i > 0);
  const bars = seg.map((x) => `<i class="${x.k}" style="width:${((x.to - x.from) / (t1 - t0) * 100).toFixed(3)}%" title="${esc(stamp(new Date(x.from)))} – ${esc(span(x.to - x.from))}"></i>`).join('');
  const hours = (t1 - t0) / 36e5;
  const ax = hours <= 24
    ? [0, 6, 12, 18, 24].map((h) => (h === 24 ? 'jetzt' : time(new Date(t0 + h * 36e5))))
    : [0, 2, 4, 6, 7].map((d) => (d === 7 ? 'jetzt' : new Date(t0 + d * 864e5).toLocaleDateString(LANG, { weekday: 'short' })));
  let ev;
  if (!outs.length) ev = 'Keine Ausfälle in diesem Zeitraum.';
  else {
    const l = outs[outs.length - 1];
    ev = `<b>${outs.length} ${outs.length === 1 ? 'Ausfall' : 'Ausfälle'}</b>, zuletzt ${esc(stamp(new Date(l.from)))} für ${esc(span(l.to - l.from)).replace(/\.$/, '')}.`;
  }
  if (gaps.length) ev += ` ${gaps.length}× ohne Daten (z. B. Neustart von Home Assistant).`;
  return `<div class="av"><span class="num">${pct == null ? '–' : nf(pct, pct >= 99.95 || pct < 10 ? 0 : 1)}<small>%</small></span><em>erreichbar</em></div>
<div class="tl">${bars}</div><div class="ax">${ax.map((a) => `<span>${esc(a)}</span>`).join('')}</div><p class="ev">${ev}</p>`;
};

// Messwert-Kurve aus Statistik (oder Historie als Ersatz)
const chart = (c, rows, t0, t1, idx) => {
  const s = st(c.entity), d = c.decimals == null ? 0 : c.decimals;
  const unit = c.unit != null ? c.unit : (s && s.attributes.unit_of_measurement) || '';
  const pts = (rows || []).filter((r) => r.v != null && !isNaN(r.v) && r.t >= t0);
  if (live(s) && !isNaN(Number(s.state))) pts.push({ t: t1, v: Number(s.state), max: Number(s.state) });
  const nowTxt = live(s) && !isNaN(Number(s.state)) ? `${nf(s.state, d)}<small>${esc(unit)}</small>` : '–';
  const headHtml = `<div class="ch-h"><span class="lbl">${esc(c.label)}</span><span class="tip"></span></div><div class="ch-h"><span class="num">${nowTxt}</span></div>`;
  if (pts.length < 2) return `<div class="card">${headHtml}<div class="empty">Kein Verlauf vorhanden.</div></div>`;
  const vs = pts.map((p) => p.v), peaks = pts.map((p) => (p.max != null ? p.max : p.v));
  const top = Math.max(c.max != null ? c.max : 0, Math.max(...peaks) * 1.12, c.min_span || 1);
  const x = (t) => ((t - t0) / (t1 - t0) * 100);
  const y = (v) => 38 - Math.max(0, Math.min(1, v / top)) * 34;
  const line = pts.map((p, i) => `${i ? 'L' : 'M'}${x(p.t).toFixed(2)},${y(p.v).toFixed(2)}`).join(' ');
  const area = `${line} L${x(pts[pts.length - 1].t).toFixed(2)},40 L${x(pts[0].t).toFixed(2)},40 Z`;
  const avg = vs.reduce((a, b) => a + b, 0) / vs.length, peak = Math.max(...peaks);
  cur.series[idx] = { pts, unit, d };
  return `<div class="card">${headHtml}
<div class="plot" data-i="${idx}"><svg viewBox="0 0 100 40" preserveAspectRatio="none" aria-hidden="true"><path class="a" d="${area}"/><path class="l" d="${line}"/></svg><span class="m"></span></div>
<div class="ch-f"><span>Ø ${nf(avg, d)} ${esc(unit)}</span><span>Spitze ${nf(peak, d)} ${esc(unit)}</span></div></div>`;
};

const tipAt = (plot, ev) => {
  const sr = cur && cur.series[plot.dataset.i];
  if (!sr) return;
  const r = plot.getBoundingClientRect(), f = Math.max(0, Math.min(1, (ev.clientX - r.left) / r.width));
  const t = cur.t0 + f * (cur.t1 - cur.t0);
  const p = sr.pts.reduce((a, b) => (Math.abs(b.t - t) < Math.abs(a.t - t) ? b : a));
  plot.querySelector('.m').style.left = `${((p.t - cur.t0) / (cur.t1 - cur.t0) * 100).toFixed(2)}%`;
  plot.classList.add('is-tip');
  plot.closest('.card').querySelector('.tip').textContent = `${p.t >= cur.t1 - 60000 ? 'jetzt' : stamp(new Date(p.t))} · ${nf(p.v, sr.d)} ${sr.unit}`;
};
const tipOff = (plot) => {
  plot.classList.remove('is-tip');
  plot.closest('.card').querySelector('.tip').textContent = '';
};

const history = async () => {
  const { cfg, hours } = cur, h = hass();
  const box = root.querySelector('.hist');
  if (!h) { box.innerHTML = '<div class="empty">Keine Verbindung zu Home Assistant.</div>'; return; }
  const t1 = Date.now(), t0 = t1 - hours * 36e5, start = new Date(t0).toISOString();
  const charts = cfg.charts || [], ids = charts.map((c) => c.entity);
  const ask = (msg) => h.callWS(msg).catch(() => ({}));
  const [hist, stats] = await Promise.all([
    cfg.status ? ask({ type: 'history/history_during_period', start_time: start, entity_ids: [cfg.status],
      minimal_response: true, no_attributes: true, significant_changes_only: false }) : {},
    ids.length ? ask({ type: 'recorder/statistics_during_period', start_time: start, statistic_ids: ids,
      period: hours <= 24 ? '5minute' : 'hour', types: ['mean', 'max'] }) : {},
  ]);
  const rows = {};
  ids.forEach((id) => {
    rows[id] = ((stats || {})[id] || []).map((r) => ({ t: typeof r.start === 'number' ? r.start : Date.parse(r.start), v: r.mean, max: r.max }));
  });
  const missing = ids.filter((id) => rows[id].length < 2);
  if (missing.length) {
    const raw = await ask({ type: 'history/history_during_period', start_time: start, entity_ids: missing,
      minimal_response: true, no_attributes: true, significant_changes_only: false });
    missing.forEach((id) => {
      rows[id] = ((raw || {})[id] || []).map((x) => ({ t: (x.lc != null ? x.lc : x.lu) * 1000, v: parseFloat(x.s) })).filter((x) => !isNaN(x.v));
    });
  }
  if (!cur || cur.hours !== hours) return; // inzwischen umgeschaltet oder geschlossen
  cur.t0 = t0; cur.t1 = t1; cur.series = {};
  box.innerHTML = (cfg.status ? `<div class="card">${timeline((hist || {})[cfg.status], t0, t1, cfg)}</div>` : '')
    + charts.map((c, i) => chart(c, rows[c.entity], t0, t1, i)).join('');
  box.querySelectorAll('.plot').forEach((p) => {
    p.addEventListener('pointermove', (ev) => tipAt(p, ev));
    p.addEventListener('pointerdown', (ev) => tipAt(p, ev));
    p.addEventListener('pointerleave', () => tipOff(p));
  });
};

// Infozeilen: {label, entity, of?, warn_above?, note?} oder {label, value}
const infoRow = (it) => {
  if (it.value != null) return `<div class="kv"><span>${esc(it.label)}</span><b>${esc(it.value)}</b>${it.note ? `<small>${esc(it.note)}</small>` : ''}</div>`;
  const s = st(it.entity);
  if (!s) return '';
  const dc = s.attributes.device_class, domain = s.entity_id.split('.')[0];
  let val = live(s) ? fmtState(s) : 'nicht verfügbar', note = it.note || '', warn = false, bar = '';
  if (live(s) && (dc === 'timestamp' || dc === 'uptime') && !isNaN(Date.parse(s.state))) {
    const d = new Date(s.state), ago = Date.now() - d;
    val = ago >= 0 ? (it.ago ? `vor ${since(ago)}` : `seit ${since(ago)}`) : stamp(d);
    note = note || stamp(d);
  } else if (it.unit != null && live(s) && !isNaN(Number(s.state))) {
    val = `${nf(s.state, it.decimals || 0)}${it.unit ? ' ' + it.unit : ''}`;
  } else if (domain === 'update' && live(s)) {
    const a = s.attributes;
    warn = s.state === 'on';
    val = warn ? `${a.latest_version || 'neu'} verfügbar` : 'aktuell';
    note = note || (a.installed_version ? `Installiert: ${a.installed_version}` : '');
  } else if (domain === 'binary_sensor' && dc === 'problem' && live(s)) {
    warn = s.state === 'on';
  }
  const of = it.of ? st(it.of) : null;
  if (of && live(s) && live(of) && !isNaN(Number(s.state)) && Number(of.state) > 0) {
    const v = Number(s.state), m = Number(of.state), u = s.attributes.unit_of_measurement || '', p = v / m * 100;
    const dd = it.decimals == null ? 1 : it.decimals;
    warn = it.warn_above != null && p > it.warn_above;
    val = `${nf(v, dd)} von ${nf(m, dd)} ${u}`;
    bar = `<span class="bar"><i class="${warn ? 'is-warn' : ''}" style="width:${Math.min(100, p).toFixed(1)}%"></i></span>`;
  } else if (it.warn_above != null && live(s) && Number(s.state) > it.warn_above) warn = true;
  return `<div class="kv"><span>${esc(it.label)}</span><b class="${warn ? 'is-warn' : ''}">${esc(val)}</b>${bar}${note ? `<small>${esc(note)}</small>` : ''}</div>`;
};
const info = () => {
  const list = (cur.cfg.info || []).map(infoRow).join('');
  root.querySelector('.info').innerHTML = list ? `<div class="card">${list}</div>` : '<div class="empty">Keine Infos hinterlegt.</div>';
};

// Suche ueber ein HA-Skript mit Rueckgabe (z. B. script.paperless_suche), Token bleibt in Home Assistant
const DATE = (d) => { const x = new Date(d); return isNaN(x) ? '' : x.toLocaleDateString(LANG, { day: 'numeric', month: 'short', year: 'numeric' }); };
const hl = (h) => esc(String(h).replace(/\s+/g, ' ').trim())
  .replace(/&lt;(?:b|em|mark|span class=&quot;match&quot;)&gt;/g, '<mark>').replace(/&lt;\/(?:b|em|mark|span)&gt;/g, '</mark>');
let seq = 0;
const search = async (q) => {
  const sc = cur && cur.cfg.search, box = root && root.querySelector('.res');
  if (!sc || !box || !hass()) return;
  const id = ++seq, [domain, service] = String(sc.script).split('.');
  box.innerHTML = `<div class="empty">${q ? 'Suche …' : 'Lade …'}</div>`;
  let res;
  try {
    res = await hass().callWS({ type: 'call_service', domain, service, service_data: { query: q }, return_response: true });
  } catch (e) {
    if (id === seq && box.isConnected) box.innerHTML = `<div class="empty is-warn">Suche fehlgeschlagen: ${esc(e && (e.message || e.code) || e)}</div>`;
    return;
  }
  if (id !== seq || !box.isConnected) return;
  const r = (res && res.response) || {}, docs = r.dokumente || [];
  if (r.status && r.status !== 200) {
    box.innerHTML = `<div class="empty is-warn">${esc(sc.name || 'Dienst')} antwortet mit Fehler ${esc(r.status)}${r.status === 401 || r.status === 403 ? ' – Token prüfen' : ''}.</div>`;
    return;
  }
  const head = q ? `${nf(r.anzahl || docs.length)} Treffer` : (sc.recent || 'Zuletzt hinzugefügt');
  const more = q && r.anzahl > docs.length ? `<em>die ersten ${docs.length}</em>` : '';
  const url = (d) => String(sc.doc_url || '').replace('{id}', encodeURIComponent(d.id));
  box.innerHTML = `<div class="res-h"><span class="lbl">${esc(head)}</span>${more}</div>` + (docs.length ? docs.map((d) =>
    `<a class="doc" href="${esc(url(d))}" target="_blank" rel="noopener noreferrer"><b>${esc(d.title || 'Ohne Titel')}</b>`
    + `<small>${[d.korrespondent, d.typ, DATE(d.datum)].filter(Boolean).map(esc).join(' · ')}</small>`
    + `${d.treffer ? `<p>${hl(d.treffer)}</p>` : ''}</a>`).join('') : `<div class="empty">Nichts gefunden${q ? ` für „${esc(q)}“` : ''}.</div>`);
};
const searchUi = (sc) => `<div class="srch"><form class="sf" role="search"><input type="search" enterkeyhint="search" autocomplete="off" autocorrect="off"
 placeholder="${esc(sc.placeholder || 'Suchen …')}" aria-label="${esc(sc.placeholder || 'Suchen')}"><button type="submit" aria-label="Suchen"><ha-icon icon="mdi:magnify"></ha-icon></button></form><div class="res"></div></div>`;
const searchWire = () => {
  const f = root.querySelector('.sf'); if (!f) return;
  const inp = f.querySelector('input');
  let t = null;
  f.addEventListener('submit', (ev) => { ev.preventDefault(); clearTimeout(t); search(inp.value.trim()); inp.blur(); });
  inp.addEventListener('input', () => {
    clearTimeout(t);
    const q = inp.value.trim();
    if (q.length >= 3 || !q) t = setTimeout(() => search(q), 600);
  });
  search('');
};

const open = (cfg) => {
  close();
  host = document.createElement('frame-popup');
  root = host.attachShadow({ mode: 'open' });
  cur = { cfg, hours: 24, series: {} };
  let label = '';
  try { label = cfg.url ? new URL(cfg.url).host : ''; } catch (e) { label = cfg.url || ''; }
  root.innerHTML = `<style>${CSS}</style><div class="bd"><section class="sh" role="dialog" aria-modal="true" aria-label="${esc(cfg.name)}">
<header class="hd"><span class="ic"><ha-icon icon="${esc(cfg.icon || 'mdi:server')}"></ha-icon></span><div><b>${esc(cfg.name)}</b><span class="sub"></span></div>
<button type="button" class="x" aria-label="Schließen"><ha-icon icon="mdi:close"></ha-icon></button></header>
${cfg.search ? searchUi(cfg.search) : ''}<div class="bdy"><div class="col"><div class="sec"><span class="lbl">Verlauf</span><span class="rng"><button type="button" data-h="24" class="is-on">24 Std</button><button type="button" data-h="168">7 Tage</button></span></div>
<div class="hist"><div class="empty">Lade Verlauf …</div></div></div>
<div class="col"><div class="sec"><span class="lbl">Info</span></div><div class="info"></div></div></div>
${cfg.url ? `<footer class="ft"><span>${esc(label)}</span><a class="go" href="${esc(cfg.url)}" target="_blank" rel="noopener noreferrer">${esc(cfg.link || 'Zur Weboberfläche')}<ha-icon icon="mdi:open-in-new"></ha-icon></a></footer>` : ''}
</section></div>`;
  root.querySelector('.bd').addEventListener('click', (ev) => { if (ev.target.classList.contains('bd')) close(); });
  root.querySelector('.x').addEventListener('click', close);
  root.querySelectorAll('.rng button').forEach((b) => b.addEventListener('click', () => {
    root.querySelectorAll('.rng button').forEach((x) => x.classList.toggle('is-on', x === b));
    cur.hours = Number(b.dataset.h);
    root.querySelector('.hist').innerHTML = '<div class="empty">Lade Verlauf …</div>';
    history();
  }));
  keyFn = (ev) => { if (ev.key === 'Escape') close(); };
  window.addEventListener('keydown', keyFn);
  window.addEventListener('location-changed', close);
  document.body.appendChild(host);
  head(); info(); history(); searchWire();
  let n = 0;
  timer = setInterval(() => {
    if (!cur) return;
    head(); info();
    if (++n % 20 === 0) history(); // alle 5 Minuten neu laden
  }, 15000);
  root.querySelector('.x').focus({ preventScroll: true });
};

window.__frameSvc = (key, el, ev) => {
  const p = el && el.__p;
  if (p && ev && (Date.now() - p[2] > 450 || Math.abs(ev.clientX - p[0]) > 12 || Math.abs(ev.clientY - p[1]) > 12)) return; // Halten oder Wischen
  const cfg = (window.__frameSvcs || {})[key];
  if (cfg) open(cfg);
};
window.__frameSvcClose = close;
