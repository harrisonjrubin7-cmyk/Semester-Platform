// Shared helpers + one connected sample student for bespoke Student OS screens. Sample data only.
(() => {
const N = window.SemesterDesignSystem_e9f3ba;
const PFX = 'sem-b:';
const read = (k, d) => { try { const v = JSON.parse(localStorage.getItem(PFX + k)); return v == null ? d : v; } catch (e) { return d; } };
function useStore(key, seed) {
  const [s, set] = React.useState(() => read(key, seed));
  const put = (x) => set((p) => { const v = typeof x === 'function' ? x(p) : x; localStorage.setItem(PFX + key, JSON.stringify(v)); setTimeout(() => window.dispatchEvent(new CustomEvent('esb', { detail: key })), 0); return v; });
  React.useEffect(() => { const h = (e) => { if (e.detail === key) set(read(key, seed)); }; window.addEventListener('esb', h); return () => window.removeEventListener('esb', h); }, [key]);
  return [s, put, () => put(seed)];
}
let seq = 1; const ref = (p = 'R') => p + '-' + Date.now().toString(36).slice(-4).toUpperCase() + (seq++);
const Box = ({ title, aside, children, tone }) => <section style={{ border: '1px solid ' + (tone === 'warn' ? 'var(--status-pending, #a8741a)' : tone === 'bad' ? 'var(--status-danger, #b4412f)' : 'var(--border-subtle)'), borderRadius: 8, padding: 14, display: 'grid', gap: 10, minWidth: 0, background: 'var(--surface-base)' }}>{(title || aside) && <div className="row" style={{ justifyContent: 'space-between' }}>{title && <N.SectionLabel>{title}</N.SectionLabel>}{aside}</div>}{children}</section>;
const Receipt = ({ r, onUndo }) => r ? <N.Notice head={r.head}>{r.body} · reference <span style={{ fontFamily: 'var(--font-mono)' }}>{r.ref}</span>{onUndo && <> · <button className="link-quiet" onClick={onUndo}>Undo</button></>}</N.Notice> : null;
const td = { padding: '7px 9px', borderBottom: '1px solid var(--border-subtle)', fontSize: 13, textAlign: 'left', verticalAlign: 'top', overflowWrap: 'break-word' };
const T = ({ head, rows, onRow, sel, empty = 'Nothing to show.' }) => <div style={{ overflowX: 'auto' }}><table style={{ width: '100%', borderCollapse: 'collapse' }}><thead><tr>{head.map((h, i) => <th key={i} style={{ ...td, fontWeight: 600, fontSize: 12, color: 'var(--text-secondary)' }}>{h}</th>)}</tr></thead><tbody>{rows.length ? rows.map((r, i) => <tr key={i} onClick={onRow ? () => onRow(i) : undefined} style={{ cursor: onRow ? 'pointer' : 'default', background: sel === i ? 'var(--surface-raised)' : undefined }}>{r.map((c, j) => <td key={j} style={td}>{c}</td>)}</tr>) : <tr><td colSpan={head.length} style={{ ...td, color: 'var(--text-secondary)' }}>{empty}</td></tr>}</tbody></table></div>;
const Chip = ({ children, tone }) => <span className="chip" style={tone === 'bad' ? { color: 'var(--status-danger)', borderColor: 'currentColor' } : tone === 'ok' ? { color: 'var(--status-success)', borderColor: 'currentColor' } : tone === 'warn' ? { color: 'var(--status-pending)', borderColor: 'currentColor' } : undefined}>{children}</span>;
const Bar = ({ v, max = 100, label, right, tone }) => { const p = Math.max(0, Math.min(100, max ? (v / max) * 100 : 0)); return <div style={{ display: 'grid', gap: 4 }}><div className="row" style={{ justifyContent: 'space-between', fontSize: 13 }}><span>{label}</span><span className="muted">{right}</span></div><div style={{ height: 8, borderRadius: 4, background: 'var(--surface-raised)', overflow: 'hidden' }}><div style={{ width: p + '%', height: '100%', background: tone === 'bad' ? 'var(--status-danger)' : tone === 'warn' ? 'var(--status-pending)' : 'var(--action-primary)' }}></div></div></div>; };
const Log = ({ items }) => items && items.length ? <div style={{ display: 'grid', gap: 4 }}>{items.slice(-6).reverse().map((x, i) => <div key={i} style={{ fontSize: 12 }}><span className="muted">{x[0]}</span> · {x[1]}</div>)}</div> : <p className="muted" style={{ margin: 0 }}>Nothing recorded yet.</p>;
const now = () => new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

// Catalog (Fall 2026 → Spring 2027 planning). days, start (h:mm), minutes.
const COURSES = {
  'BIO 2100': { title: 'Cell Biology', cr: 3, req: 'Major core', pre: ['BIO 1100'], hrs: 9, books: 140, desc: 'Structure and function of cells: membranes, signalling, the cell cycle. Weekly lab write-ups.', sec: [{ id: 'A', days: 'MWF', t: '10:10', m: 50, who: 'Dr. Hale', seats: 38, cap: 40, wait: 0 }, { id: 'B', days: 'TR', t: '13:10', m: 75, who: 'Dr. Ruiz', seats: 40, cap: 40, wait: 6 }] },
  'CHEM 2210': { title: 'Organic Chemistry I', cr: 4, req: 'Major core', pre: ['CHEM 1020'], hrs: 11, books: 210, desc: 'Bonding, stereochemistry, reaction mechanisms. Includes a 3-hour lab.', sec: [{ id: 'A', days: 'MWF', t: '9:00', m: 50, who: 'Dr. Osei', seats: 42, cap: 48, wait: 0 }, { id: 'B', days: 'TR', t: '14:30', m: 75, who: 'Dr. Lind', seats: 24, cap: 24, wait: 2 }] },
  'ECON 1010': { title: 'Principles of Microeconomics', cr: 3, req: 'Gen ed · Social science', pre: [], hrs: 6, books: 90, desc: 'Markets, prices, incentives and policy. Problem sets every Friday.', sec: [{ id: 'A', days: 'TR', t: '11:00', m: 75, who: 'Dr. Park', seats: 120, cap: 150, wait: 0 }] },
  'MATH 1200': { title: 'Calculus II', cr: 4, req: 'Major support', pre: ['MATH 1100'], hrs: 9, books: 0, desc: 'Integration techniques, series, parametric curves. Free open textbook.', sec: [{ id: 'A', days: 'MWF', t: '11:10', m: 50, who: 'Dr. Ames', seats: 35, cap: 35, wait: 3 }, { id: 'B', days: 'TR', t: '9:35', m: 75, who: 'Dr. Kim', seats: 30, cap: 35, wait: 0 }] },
  'WRIT 1000': { title: 'Writing Seminar', cr: 3, req: 'Gen ed · Writing', pre: [], hrs: 6, books: 40, desc: 'Argument, revision and research writing in a 16-seat seminar.', sec: [{ id: 'A', days: 'MW', t: '15:10', m: 75, who: 'Prof. Vale', seats: 15, cap: 16, wait: 0 }] },
  'STAT 2150': { title: 'Introductory Statistics', cr: 3, req: 'Major support', pre: [], hrs: 7, books: 60, desc: 'Data, distributions, inference, regression in R.', sec: [{ id: 'A', days: 'TR', t: '9:35', m: 75, who: 'Dr. Noor', seats: 50, cap: 60, wait: 0 }] },
  'DS 1500': { title: 'Data Science Foundations', cr: 3, req: 'Elective · Data Science minor', pre: ['MATH 1100'], hrs: 8, books: 0, desc: 'Python, tidy data, visualisation and a final project.', sec: [{ id: 'A', days: 'MW', t: '13:10', m: 75, who: 'Dr. Quill', seats: 28, cap: 30, wait: 0 }] },
  'PSY 1200': { title: 'Introduction to Psychology', cr: 3, req: 'Gen ed · Social science', pre: [], hrs: 5, books: 75, desc: 'Perception, memory, development and social behaviour.', sec: [{ id: 'A', days: 'MWF', t: '13:10', m: 50, who: 'Dr. Ito', seats: 140, cap: 180, wait: 0 }] }
};
const DONE = [['BIO 1100', 4, 'Major core'], ['BIO 1110', 4, 'Major core'], ['CHEM 1010', 4, 'Major core'], ['CHEM 1020', 4, 'Major core'], ['MATH 1100', 4, 'Major support'], ['ENGL 1000', 3, 'Gen ed · Writing'], ['HIST 1010', 3, 'Gen ed · Humanities'], ['ART 1100', 3, 'Gen ed · Arts'], ['PHIL 1000', 3, 'Gen ed · Humanities'], ['SOC 1000', 3, 'Gen ed · Social science'], ['MUS 1010', 3, 'Elective'], ['BIO 1500', 3, 'Major core'], ['CS 1100', 3, 'Elective'], ['SPAN 1010', 4, 'Gen ed · Language'], ['SPAN 1020', 4, 'Gen ed · Language'], ['BIO 2000', 3, 'Major core']];
const REQS = [['Major core', 38], ['Major support', 14], ['Gen ed · Writing', 6], ['Gen ed · Humanities', 6], ['Gen ed · Arts', 3], ['Gen ed · Social science', 6], ['Gen ed · Language', 8], ['Elective', 39]];
const STUDENT0 = { plan: ['BIO 2100', 'CHEM 2210', 'ECON 1010', 'MATH 1200'], sec: { 'BIO 2100': 'A', 'CHEM 2210': 'A', 'ECON 1010': 'A', 'MATH 1200': 'B' }, watch: ['BIO 2100·B'], blocks: [{ id: 'p1', label: 'Library shift', days: 'TR', t: '16:00', m: 180 }], log: [] };
const useStudent = () => useStore('student', STUDENT0);
const toMin = (t) => { const [h, m] = t.split(':').map(Number); return h * 60 + m; };
const fmt = (m) => Math.floor(m / 60) + ':' + String(m % 60).padStart(2, '0');
const secOf = (S, code) => { const c = COURSES[code]; return c ? (c.sec.find((x) => x.id === S.sec[code]) || c.sec[0]) : null; };
const meetings = (S) => [...S.plan.map((code) => { const s = secOf(S, code); return s && { key: code, label: code + ' ' + s.id, days: s.days, t: s.t, m: s.m, kind: 'course' }; }).filter(Boolean), ...(S.blocks || []).map((b) => ({ key: b.id, label: b.label, days: b.days, t: b.t, m: b.m, kind: 'personal' }))];
const overlap = (a, b) => [...a.days].some((d) => b.days.includes(d)) && toMin(a.t) < toMin(b.t) + b.m && toMin(b.t) < toMin(a.t) + a.m;
const conflicts = (list) => { const out = []; for (let i = 0; i < list.length; i++) for (let j = i + 1; j < list.length; j++) if (overlap(list[i], list[j])) out.push([list[i], list[j]]); return out; };
const credits = (S) => S.plan.reduce((s, c) => s + (COURSES[c] ? COURSES[c].cr : 0), 0);
const preMet = (code) => (COURSES[code].pre || []).every((p) => DONE.some((d) => d[0] === p));
const reqProgress = (S) => REQS.map(([cat, need]) => { const done = DONE.filter((d) => d[2] === cat).reduce((s, d) => s + d[1], 0); const plan = S.plan.filter((c) => COURSES[c] && COURSES[c].req.startsWith(cat)).reduce((s, c) => s + COURSES[c].cr, 0); return { cat, need, done: Math.min(done, need), plan: Math.max(0, Math.min(plan, need - done)) }; });

window.ESB = { N, useStore, useStudent, ref, Box, Receipt, T, Chip, Bar, Log, now, COURSES, DONE, REQS, STUDENT0, toMin, fmt, secOf, meetings, overlap, conflicts, credits, preMet, reqProgress };
window.EVERY_BESPOKE = window.EVERY_BESPOKE || {};
})();
