// Document throughput simulator: one engine where each simulated document carries its own state, required reviewers and
// signers, and history. It follows the same state machine as migration 180, so documents that need no signature skip
// signing; changes-requested loops back as a new version and adds rework; a slow or absent reviewer stalls only their own
// documents; failed provider callbacks retry. Deterministic (seeded) so a run can be compared after changing a setting.
// Hypothetical inputs only: this is not Semester telemetry.
const Z = window.SemesterDesignSystem_e9f3ba;
function rng(seed) { let s = seed >>> 0; return () => ((s = (s * 1664525 + 1013904223) >>> 0) / 4294967296); }
const REVIEWERS = [{ id: 'r1', name: 'A. Okafor (legal)' }, { id: 'r2', name: 'M. Reyes (security)' }, { id: 'r3', name: 'J. Park (finance)' }];
function simulate(p) {
  const R = rng(p.seed); const rev = REVIEWERS.map((r) => ({ ...r, freeAt: 0, minutes: r.id === 'r2' ? p.slowReviewerMin : p.reviewMin, away: r.id === 'r3' && p.financeAway ? [0, p.awayUntil] : null, done: 0, waited: 0 }));
  const sigSlots = Array(p.sigSlots).fill(0); const docs = [];
  for (let i = 0; i < p.count; i++) {
    const arrive = i * p.gap; const needsSig = R() < p.sigShare; const needsFinance = R() < 0.4;
    const d = { id: 'D-' + String(i + 1).padStart(3, '0'), arrive, needsSig, reviewers: ['r1', 'r2', ...(needsFinance ? ['r3'] : [])], version: 1, history: [], stall: null };
    let t = arrive + 0.02; d.history.push({ t, a: 'submit', s: 'draft → in_review' });
    for (let loop = 0; loop < 4; loop++) {
      let last = t; let slowest = null;
      for (const rid of d.reviewers) { const r = rev.find((x) => x.id === rid); let start = Math.max(t, r.freeAt); if (r.away && start < r.away[1]) start = r.away[1]; const w = start - t; r.waited += w; const end = start + r.minutes; r.freeAt = end; r.done++; if (end > last) { last = end; slowest = r.name + (w > 0 ? ' (queued ' + Math.round(w) + ' min' + (r.away && t < r.away[1] ? ', away' : '') + ')' : ''); } }
      t = last;
      if (R() < p.reworkShare && loop < 3) { d.history.push({ t, a: 'request_changes', s: 'in_review → changes_requested', by: slowest }); t += p.reviseMin; d.version++; d.history.push({ t, a: 'revise', s: 'changes_requested → draft (v' + d.version + ')' }); t += 0.02; d.history.push({ t, a: 'submit', s: 'draft → in_review' }); continue; }
      d.history.push({ t, a: 'approve', s: 'in_review → approved', by: slowest }); d.slowest = slowest; break;
    }
    if (d.needsSig) {
      const k = sigSlots.indexOf(Math.min(...sigSlots)); const start = Math.max(t, sigSlots[k]); d.sigWait = start - t;
      d.history.push({ t: start, a: 'request_signatures', s: 'approved → awaiting_signature' }); let end = start + p.sigMin;
      let tries = 0; while (R() < p.callbackFail && tries < 3) { tries++; end += 15 * 2 ** tries; d.history.push({ t: end, a: 'callback_retry', s: 'provider callback failed; retry ' + tries }); }
      sigSlots[k] = end; t = end; d.history.push({ t, a: 'activate', s: 'awaiting_signature → effective' });
    } else { t += 0.02; d.history.push({ t, a: 'activate', s: 'approved → effective' }); }
    d.done = t; d.lead = t - arrive;
    const reviewTime = (d.history.find((h) => h.a === 'approve') || {}).t - arrive;
    d.stall = d.version > 1 ? 'Rework: ' + (d.version - 1) + ' revision' + (d.version > 2 ? 's' : '') : d.sigWait > 30 ? 'Waiting for a signature slot (' + Math.round(d.sigWait) + ' min)' : d.history.some((h) => h.a === 'callback_retry') ? 'Signature callback retries' : reviewTime > p.reviewMin * 2 ? 'Slowest reviewer: ' + d.slowest : 'Flowed';
    docs.push(d);
  }
  const mean = docs.reduce((a, d) => a + d.lead, 0) / docs.length; const last = Math.max(...docs.map((d) => d.done));
  const causes = {}; for (const d of docs) { const k = d.stall.startsWith('Slowest reviewer') ? d.stall.replace(/ \(.*$/, '') : d.stall.replace(/\s*\(.*$/, '').replace(/: .*/, ''); causes[k] = (causes[k] || 0) + 1; }
  return { docs, mean, last, rev, causes, signed: docs.filter((d) => d.needsSig).length };
}
const fmt = (m) => (m >= 120 ? (m / 60).toFixed(1) + ' h' : Math.round(m) + ' min');
function DocSim() {
  const [p, setP] = React.useState({ seed: 7, count: 24, gap: 30, reviewMin: 45, slowReviewerMin: 110, financeAway: true, awayUntil: 480, sigShare: 0.6, sigSlots: 2, sigMin: 240, reworkShare: 0.2, reviseMin: 90, callbackFail: 0.1 });
  const set = (k) => (v) => setP({ ...p, [k]: v }); const r = React.useMemo(() => simulate(p), [p]); const [sel, setSel] = React.useState(0); const d = r.docs[Math.min(sel, r.docs.length - 1)];
  const top = Object.entries(r.causes).filter(([k]) => k !== 'Flowed').sort((a, b) => b[1] - a[1]);
  const num = (label, k, min, max, step = 1) => <label className="simf"><span>{label}</span><input type="range" min={min} max={max} step={step} value={p[k]} onChange={(e) => set(k)(Number(e.target.value))} /><b className="mono">{p[k]}</b></label>;
  return <div className="stack"><Z.Notice head="Hypothetical">Inputs are illustrative, not Semester measurements. Same state machine as migration 180; one engine follows each document.</Z.Notice>
    <div className="two"><div className="card"><Z.SectionLabel>Inputs</Z.SectionLabel>{num('Documents', 'count', 4, 60)}{num('Minutes between arrivals', 'gap', 5, 120, 5)}{num('Review time (min)', 'reviewMin', 10, 180, 5)}{num('Security reviewer time (min)', 'slowReviewerMin', 10, 240, 5)}{num('Share needing signatures', 'sigShare', 0, 1, 0.05)}{num('Signature slots', 'sigSlots', 1, 6)}{num('Signature time (min)', 'sigMin', 30, 600, 15)}{num('Changes-requested share', 'reworkShare', 0, 0.6, 0.05)}{num('Callback failure share', 'callbackFail', 0, 0.5, 0.05)}<Z.Switch label="Finance reviewer away until 8 h" checked={p.financeAway} onChange={set('financeAway')} />{num('Seed', 'seed', 1, 99)}</div>
      <div className="stack"><div className="tiles"><Z.MetricTile label="Mean lead time" value={fmt(r.mean)} /><Z.MetricTile label="Last document done" value={fmt(r.last)} /><Z.MetricTile label="Needed signatures" value={r.signed + ' of ' + r.docs.length} /></div>
        <div className="card"><Z.SectionLabel>Why documents were slow</Z.SectionLabel>{top.length === 0 ? <p className="muted" style={{ margin: 0 }}>Everything flowed at these settings.</p> : top.map(([k, n]) => <div key={k} className="bar"><span>{k}</span><i style={{ width: (100 * n / r.docs.length) + '%' }}></i><b className="mono">{n}</b></div>)}</div>
        <div className="card"><Z.SectionLabel>Reviewers</Z.SectionLabel><table className="t"><thead><tr><th>Reviewer</th><th>Reviews</th><th>Avg queue</th></tr></thead><tbody>{r.rev.map((x) => <tr key={x.id}><td>{x.name}</td><td className="mono">{x.done}</td><td className="mono">{fmt(x.waited / Math.max(1, x.done))}</td></tr>)}</tbody></table></div></div></div>
    <div className="two"><div className="card"><Z.SectionLabel>Documents</Z.SectionLabel><div className="dl">{r.docs.map((x, i) => <button key={x.id} aria-current={i === sel || undefined} onClick={() => setSel(i)}><span className="mono">{x.id}</span><span className="muted">{x.needsSig ? 'signs' : 'no signature'} · v{x.version}</span><span className="mono">{fmt(x.lead)}</span><span className="why">{x.stall}</span></button>)}</div></div>
      <div className="card"><Z.SectionLabel>{d.id} · trace</Z.SectionLabel><ol className="plain">{d.history.map((h, k) => <li key={k} className="mono">+{fmt(h.t - d.arrive)} · {h.a} · {h.s}{h.by ? ' · ' + h.by : ''}</li>)}</ol><p className="muted" style={{ margin: 0 }}>Reviewers: {d.reviewers.map((id) => REVIEWERS.find((x) => x.id === id).name).join(', ')}</p></div></div></div>;
}
window.DocSim = DocSim;
