// Last 9 archetype screens made bespoke: E "Reconcile with SIS" + K launch sequence (8 steps sharing one store 'sem-b:launchseq'). Each K step gates the next; the gate screen reads all of them.
(() => {
const { N, useStore, ref, Box, Receipt, T, Chip, Bar, Log, now } = window.ESB;
const { useState } = React;
const L0 = { champ: { name: '', role: '', backup: '', cadence: 'Thursdays 10:00' }, recon: { Enrollments: [0, 3], Holds: [2, 3], Sections: [0, 3], 'Time tickets': [1, 2] }, train: { 'Registrar staff': [8, 10], Advisors: [22, 30], 'IT admins': [4, 4], 'Help desk': [0, 6] }, comms: { email: '', faq: false, a11y: false, approved: '' }, gate: null, launch: { cohort: 0, paused: false }, adopt: [], mid: null, recs: { Holds: { sem: 412, sis: 414, st: 'Open' }, 'Section seats': { sem: 1203, sis: 1203, st: 'Match' }, 'Time tickets': { sem: 5180, sis: 5179, st: 'Open' } }, log: [] };
const use = () => useStore('launchseq', L0);
const lg = (S, t) => [...S.log, [now(), t]];
const STEPS = [['champ', 'Operational champion named', (S) => !!(S.champ.name && S.champ.backup && S.champ.name !== S.champ.backup)], ['recon', 'Reconciliation passed', (S) => Object.values(S.recon).every(([m, r]) => m === 0 && r >= 3)], ['train', 'Admin training', (S) => Object.values(S.train).every(([d, t]) => d / t >= 0.9)], ['comms', 'Student communication prepared', (S) => !!(S.comms.email.trim().length > 40 && S.comms.faq && S.comms.a11y && S.comms.approved)]];
const Steps = ({ S }) => <div className="row" style={{ gap: 4 }}>{STEPS.map(([k, l, ok]) => <Chip key={k} tone={ok(S) ? 'ok' : 'warn'}>{l}</Chip>)}<Chip tone={S.gate ? 'ok' : undefined}>Gate</Chip></div>;

function ReconcileWithSIS() {
  const [S, setS, reset] = use(); const [rc, setRc] = useState(null);
  const fix = (k, side) => { const r = S.recs[k]; const v = side === 'sis' ? r.sis : r.sem; setS({ ...S, recs: { ...S.recs, [k]: { sem: v, sis: v, st: side === 'sis' ? 'Resolved · SIS wins' : 'Escalated to registrar' } }, log: lg(S, k + ': ' + (side === 'sis' ? 'took SIS value ' + r.sis : 'escalated (Semester ' + r.sem + ' vs SIS ' + r.sis + ')')) }); setRc({ head: side === 'sis' ? 'Resolved' : 'Escalated', body: k + (side === 'sis' ? ' now matches the SIS. Semester never overwrites the SIS.' : ' sent to the registrar with both values.'), ref: ref('REC') }); };
  return <div className="two"><div className="stack"><T head={['Record set', 'Semester', 'SIS', 'Status', '']} rows={Object.entries(S.recs).map(([k, r]) => [<b>{k}</b>, r.sem, r.sis, <Chip tone={r.st === 'Match' || r.st.startsWith('Resolved') ? 'ok' : r.st === 'Open' ? 'warn' : undefined}>{r.st}</Chip>, r.st === 'Open' ? <span className="row"><N.Button onClick={() => fix(k, 'sis')}>Take SIS value</N.Button><N.Button onClick={() => fix(k, 'esc')}>Escalate</N.Button></span> : ''])} /><Receipt r={rc} /></div><aside className="stack"><Box title="Rule">The SIS is the source of record. A mismatch is resolved by taking its value or escalating with both values — never by editing the SIS from here.</Box><Box title="History"><Log items={S.log} /></Box><button className="link-quiet" style={{ fontSize: 12 }} onClick={reset}>Reset launch sequence</button></aside></div>;
}

function Champion() {
  const [S, setS] = use(); const c = S.champ; const ok = STEPS[0][2](S);
  return <div className="two"><div className="stack"><Box title="Operational champion"><N.TextField label="Champion (name · title)" value={c.name} onChange={(e) => setS({ ...S, champ: { ...c, name: e.target.value } })} placeholder="e.g. Dr. L. Harper · Associate Provost" /><N.TextField label="Backup" value={c.backup} onChange={(e) => setS({ ...S, champ: { ...c, backup: e.target.value } })} error={c.backup && c.backup === c.name ? 'Backup must be a different person' : undefined} /><N.TextField label="Weekly check-in" value={c.cadence} onChange={(e) => setS({ ...S, champ: { ...c, cadence: e.target.value } })} /></Box>{ok && <N.Notice head="Champion named">{c.name} owns launch decisions; {c.backup} covers absences.</N.Notice>}</div><aside className="stack"><Box title="Launch sequence"><Steps S={S} /></Box><Box title="Why">One named person at the institution decides go/pause. A Semester employee can't be the champion.</Box></aside></div>;
}

function Recon() {
  const [S, setS] = use();
  const run = (k) => { const [m, r] = S.recon[k]; const nm = Math.max(0, m - 1 - Math.floor(Math.random() * 2)); setS({ ...S, recon: { ...S.recon, [k]: [nm, r + 1] }, log: lg(S, 'Recon run ' + k + ': ' + nm + ' mismatches') }); };
  return <div className="two"><div className="stack"><T head={['Record set', 'Mismatches (last run)', 'Clean runs needed', 'Status', '']} rows={Object.entries(S.recon).map(([k, [m, r]]) => [<b>{k}</b>, m, Math.min(r, 3) + '/3', <Chip tone={m === 0 && r >= 3 ? 'ok' : 'warn'}>{m === 0 && r >= 3 ? 'Passed' : m ? 'Failing' : 'Needs more runs'}</Chip>, <N.Button onClick={() => run(k)}>Run reconciliation</N.Button>])} /></div><aside className="stack"><Box title="Launch sequence"><Steps S={S} /></Box><Box title="Pass rule">Zero mismatches on three consecutive runs for every record set in scope. Resolve individual mismatches in Reconcile with SIS.</Box></aside></div>;
}

function Training() {
  const [S, setS] = use();
  const inc = (k) => { const [d, t] = S.train[k]; setS({ ...S, train: { ...S.train, [k]: [Math.min(t, d + 1), t] } }); };
  return <div className="two"><div className="stack">{Object.entries(S.train).map(([k, [d, t]]) => <div key={k} className="row" style={{ justifyContent: 'space-between' }}><div style={{ flex: 1 }}><Bar label={k} v={d} max={t} right={d + '/' + t} tone={d / t >= 0.9 ? undefined : 'warn'} /></div><N.Button onClick={() => inc(k)} disabled={d >= t} disabledReason="Everyone trained">Mark one complete</N.Button></div>)}</div><aside className="stack"><Box title="Launch sequence"><Steps S={S} /></Box><Box title="Pass rule">At least 90% of each group trained before launch. The rest are scheduled, not skipped.</Box></aside></div>;
}

function Comms() {
  const [S, setS] = use(); const c = S.comms; const up = (p) => setS({ ...S, comms: { ...c, ...p } });
  return <div className="two"><div className="stack"><Box title="Launch email to the first cohort"><textarea rows={6} value={c.email} onChange={(e) => up({ email: e.target.value })} placeholder="What Semester is, what it isn't (it doesn't register you), where data comes from, who to contact." style={{ font: 'inherit', fontSize: 14, padding: 8, borderRadius: 6, border: '1px solid var(--border-subtle)', background: 'var(--surface-base)', color: 'var(--text-primary)' }}></textarea><span className="muted">{c.email.trim().length} characters · needs at least 40</span><label className="row" style={{ fontSize: 13 }}><input type="checkbox" checked={c.faq} onChange={(e) => up({ faq: e.target.checked })} /> FAQ page published</label><label className="row" style={{ fontSize: 13 }}><input type="checkbox" checked={c.a11y} onChange={(e) => up({ a11y: e.target.checked })} /> Accessibility review of email + FAQ done</label><N.TextField label="Approved by (institution comms)" value={c.approved} onChange={(e) => up({ approved: e.target.value })} /></Box></div><aside className="stack"><Box title="Launch sequence"><Steps S={S} /></Box><Box title="Must say">“Semester shows readiness. You still register in YES.” Every statement must be true for the pilot scope.</Box></aside></div>;
}

function Gate() {
  const [S, setS] = use(); const done = STEPS.every(([, , ok]) => ok(S)); const [who, setWho] = useState(''); const [rc, setRc] = useState(null);
  const pass = () => { setS({ ...S, gate: { by: who, at: now() }, log: lg(S, 'Launch gate passed · ' + who) }); setRc({ head: 'Gate passed', body: 'Controlled launch can start with the first cohort.', ref: ref('GATE') }); };
  return <div className="two"><div className="stack"><T head={['Step', 'Status']} rows={STEPS.map(([k, l, ok]) => [l, <Chip tone={ok(S) ? 'ok' : 'bad'}>{ok(S) ? 'Met' : 'Not met'}</Chip>])} />{S.gate ? <N.Notice head="Gate passed">Signed by {S.gate.by} · {S.gate.at}</N.Notice> : <Box title="Sign the gate"><N.TextField label="Champion signs" value={who} onChange={(e) => setWho(e.target.value)} error={who && who !== S.champ.name ? 'Must be the named champion' : undefined} /><N.Button variant="primary" disabled={!done || who !== S.champ.name || !who} disabledReason={!done ? 'Every step must be met' : 'Only the named champion can sign'} onClick={pass}>Pass launch gate</N.Button></Box>}<Receipt r={rc} /></div><aside className="stack"><Box title="Reads from">Champion, Reconciliation, Training and Communication screens — this gate can't be ticked by hand.</Box></aside></div>;
}

const COH = [['Pilot cohort 1', 250], ['Cohort 2', 750], ['Full first-year', 1650]];
function Controlled() {
  const [S, setS] = use(); const L = S.launch;
  if (!S.gate) return <N.EmptyState title="Launch gate not passed" body="Complete the gate first. Nothing reaches students before it." />;
  const next = () => setS({ ...S, launch: { ...L, cohort: L.cohort + 1 }, adopt: [...S.adopt, { at: now(), n: COH[L.cohort][1] }], log: lg(S, 'Enabled ' + COH[L.cohort][0]) });
  return <div className="two"><div className="stack">{COH.map(([n, c], i) => <div key={n} className="row" style={{ justifyContent: 'space-between' }}><span><b>{n}</b> · {c} students</span><Chip tone={i < L.cohort ? 'ok' : undefined}>{i < L.cohort ? (L.paused ? 'Paused' : 'Live') : 'Not enabled'}</Chip></div>)}<div className="row">{L.cohort < COH.length && <N.Button variant="primary" disabled={L.paused} disabledReason="Resume first" onClick={next}>Enable {COH[L.cohort][0]}</N.Button>}{L.cohort > 0 && <N.Button onClick={() => setS({ ...S, launch: { ...L, paused: !L.paused }, log: lg(S, L.paused ? 'Resumed' : 'Paused — kill switch') })}>{L.paused ? 'Resume' : 'Pause all (kill switch)'}</N.Button>}</div></div><aside className="stack"><Box title="Rule">One cohort at a time; widen only after Adoption monitored shows no stop criteria. Pausing hides readiness instantly; no data is deleted.</Box></aside></div>;
}

function Adoption() {
  const [S] = use(); const live = S.launch.cohort ? COH.slice(0, S.launch.cohort).reduce((a, c) => a + c[1], 0) : 0;
  const act = Math.round(live * 0.62), stale = S.launch.paused ? '—' : '0.4%';
  return live ? <div className="stack"><div className="tiles"><N.MetricTile label="Students enabled" value={String(live)} source="official" updated={now()} /><N.MetricTile label="Checked readiness" value={act + ' (' + 62 + '%)'} source="derived" updated="sample" /><N.MetricTile label="Stale results shown" value={stale} source="derived" updated="sample" /><N.MetricTile label="Support tickets" value={String(Math.round(live / 120))} source="official" updated="sample" /></div><Box title="Stop criteria">Stop if a wrong \"ready\" is confirmed, stale results exceed 2%, or support tickets exceed 1 per 50 students in a day. None triggered (sample).</Box></div> : <N.EmptyState title="No cohort live yet" body="Adoption appears once Controlled launch enables a cohort." />;
}

function Midpoint() {
  const [S, setS] = use(); const [d, setD] = useState('Continue'); const [why, setWhy] = useState(''); const [rc, setRc] = useState(null);
  if (!S.launch.cohort) return <N.EmptyState title="Too early" body="The midpoint review runs after at least one cohort has been live." />;
  return <div className="two"><div className="stack"><Box title="Midpoint review"><N.Segmented label="Decision" value={d} onChange={setD} options={['Continue', 'Adjust scope', 'Pause'].map((x) => ({ value: x, label: x }))} /><N.TextField label="Evidence and reasoning" value={why} onChange={(e) => setWhy(e.target.value)} /><N.Button variant="primary" disabled={why.trim().length < 10} disabledReason="Give the evidence" onClick={() => { setS({ ...S, mid: { d, why, at: now() }, log: lg(S, 'Midpoint: ' + d) }); setRc({ head: 'Recorded', body: d + ' · signed by ' + (S.champ.name || 'champion'), ref: ref('MID') }); }}>Record decision</N.Button></Box>{S.mid && <N.Notice head={'Decision: ' + S.mid.d}>{S.mid.why}</N.Notice>}<Receipt r={rc} /></div><aside className="stack"><Box title="Inputs">Adoption metrics, support themes, reconciliation history, stop-criteria events. Usage alone isn't proof of outcomes.</Box><Box title="History"><Log items={S.log} /></Box></aside></div>;
}

Object.assign(window.EVERY_BESPOKE, { 'E:Reconcile with SIS': ReconcileWithSIS, 'K:Operational champion named': Champion, 'K:Reconciliation passed': Recon, 'K:Admin training': Training, 'K:Student communication prepared': Comms, 'K:Launch readiness gate passed': Gate, 'K:Controlled launch': Controlled, 'K:Adoption monitored': Adoption, 'K:Midpoint review': Midpoint });
})();
