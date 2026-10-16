// Bespoke Advisor screens (group D), batch 3: aggregates, interventions, escalation, resources, settings, term review, close case. Uses window.ESD. Sample data only.
(() => {
const { N, ref, Box, Receipt, T, Chip, Bar, now } = window.ESB;
const { useAdv, useSel, audit, stu, Pick } = window.ESD;
const { useState } = React;
const MIN_N = 10;
const COH = [['First-year', 118, 82, 3.11, 74], ['First-gen', 46, 76, 2.94, 79], ['Transfer', 31, 84, 3.02, 68], ['Athletes', 22, 88, 2.88, 71], ['Veterans', 7, 86, 3.25, 80]];
const PROG = [['Biology BS', 214, 3.04, 81, 22], ['Chemistry BS', 96, 2.91, 77, 31], ['Economics BA', 178, 3.12, 85, 18], ['Data Science BS', 64, 3.31, 88, 12], ['Undeclared', 140, 3.06, 79, 26], ['Classics BA', 8, 3.40, 90, 1]];
const sup = (n, v) => (n < MIN_N ? <span className="muted">Hidden (n&lt;{MIN_N})</span> : v);

function CohortDashboard() {
  const [m, setM] = useState('ret');
  return <div className="two"><div className="stack"><N.Segmented label="Measure" value={m} onChange={setM} options={[{ value: 'ret', label: 'Fall→spring retention' }, { value: 'gpa', label: 'Mean GPA' }, { value: 'chk', label: 'Check-in completion' }]} />
    {COH.map(([c, n, ret, gpa, chk]) => <div key={c}>{n < MIN_N ? <div className="row" style={{ justifyContent: 'space-between', fontSize: 13 }}><span>{c} · n={n}</span>{sup(n)}</div> : <Bar label={c + ' · n=' + n} v={m === 'gpa' ? gpa : m === 'ret' ? ret : chk} max={m === 'gpa' ? 4 : 100} right={m === 'gpa' ? gpa.toFixed(2) : (m === 'ret' ? ret : chk) + '%'} />}</div>)}</div>
    <aside className="stack"><Box title="Privacy">Groups under {MIN_N} students are hidden so no one can be identified. No student names on this screen.</Box><Box title="Source">SIS census snapshot · Sept 14 · estimated where noted.</Box></aside></div>;
}

function ProgramDashboard() {
  const [sort, setSort] = useState(0); const rows = PROG.slice().sort((a, b) => (sort === 0 ? b[1] - a[1] : sort === 1 ? b[4] - a[4] : a[3] - b[3]));
  return <div className="stack"><N.Segmented label="Sort by" value={String(sort)} onChange={(v) => setSort(+v)} options={[{ value: '0', label: 'Size' }, { value: '1', label: 'Students with signals' }, { value: '2', label: 'Lowest retention' }]} /><T head={['Program', 'Students', 'Mean GPA', 'Retention', 'With signals']} rows={rows.map(([p, n, g, r, s]) => [<b>{p}</b>, n, sup(n, g.toFixed(2)), sup(n, r + '%'), sup(n, s)])} /><span className="muted">Program-level view for advising leads. Drill-down to students is in the caseload, not here.</span></div>;
}

function OutcomeAggregates() {
  const [t, setT] = useState('F25'); const D = { F25: [['Retained to spring', 81], ['Good academic standing', 88], ['Met with advisor 2+ times', 63], ['Registered on time', 77]], S26: [['Retained to fall', 84], ['Good academic standing', 86], ['Met with advisor 2+ times', 58], ['Registered on time', 80]] };
  return <div className="two"><div className="stack"><N.Segmented label="Term" value={t} onChange={setT} options={[{ value: 'F25', label: 'Fall 2025' }, { value: 'S26', label: 'Spring 2026' }]} />{D[t].map(([l, v]) => <Bar key={l} label={l} v={v} right={v + '%'} />)}</div>
    <aside className="stack"><Box title="Read carefully">These describe what happened, not what caused it. Students who meet more with advisors differ in other ways too. Compare like with like in Intervention tracker.</Box></aside></div>;
}

function InterventionTracker() {
  const [A, setA] = useAdv(); const [name, setName] = useState(''); const [coh, setCoh] = useState('First-year'); const [rc, setRc] = useState(null);
  return <div className="two"><div className="stack"><T head={['Intervention', 'Cohort', 'Students', 'Check-in rate before → after', 'Status']} rows={A.interventions.map((i) => [<b>{i.name}</b>, i.cohort, i.n, i.pre != null ? i.pre + '% → ' + i.post + '%' : '—', i.st === 'Running' ? <N.Button onClick={() => setA({ ...A, interventions: A.interventions.map((x) => (x.id === i.id ? { ...x, st: 'Ended' } : x)), log: audit(A, 'Ended ' + i.name) })}>End</N.Button> : <Chip>{i.st}</Chip>])} />
    <Box title="Start an intervention"><N.TextField label="Name" value={name} onChange={(e) => setName(e.target.value)} /><N.Segmented label="Cohort" value={coh} onChange={setCoh} options={COH.filter((c) => c[1] >= MIN_N).map(([c]) => ({ value: c, label: c }))} /><N.Button variant="primary" disabled={name.trim().length < 4} disabledReason="Name it" onClick={() => { const n = COH.find((c) => c[0] === coh)[1]; setA({ ...A, interventions: [...A.interventions, { id: ref('iv'), name, cohort: coh, n, st: 'Running', pre: null, post: null }], log: audit(A, 'Started ' + name) }); setRc({ head: 'Started', body: name + ' · ' + n + ' students · baseline recorded today', ref: ref('IV') }); setName(''); }}>Start</N.Button></Box><Receipt r={rc} /></div>
    <aside className="stack"><Box title="Before → after">Not a controlled trial. Treat a change as a lead to investigate, not proof.</Box></aside></div>;
}

function EscalationWorkflow() {
  const [A, setA] = useAdv(); const [sel] = useSel(); const s = stu(A, sel); const [lvl, setLvl] = useState('Concern'); const [why, setWhy] = useState(''); const [rc, setRc] = useState(null);
  const to = { Concern: 'Advising lead', Urgent: 'Dean of Students (CARE team)', Emergency: 'Campus safety · call 555-0100 now' };
  const go = () => { const id = ref('ESC'); setA({ ...A, escalations: [...A.escalations, { id, sid: s.id, to: to[lvl], lvl, st: 'Open', at: now() }], log: audit(A, lvl + ' escalation for ' + s.name + ' → ' + to[lvl]) }); setRc({ head: 'Escalated', body: to[lvl] + ' notified', ref: id }); setWhy(''); };
  return <div className="two"><div className="stack"><Pick /><Box title={'Escalate about ' + s.name}><N.Segmented label="Level" value={lvl} onChange={setLvl} options={['Concern', 'Urgent', 'Emergency'].map((x) => ({ value: x, label: x }))} />{lvl === 'Emergency' && <N.Notice head="Immediate danger">Call campus safety first. Record it here afterwards.</N.Notice>}<N.TextField label="What happened (facts only)" value={why} onChange={(e) => setWhy(e.target.value)} /><N.Button variant="primary" disabled={why.trim().length < 8} disabledReason="Describe what happened" onClick={go}>Escalate to {to[lvl]}</N.Button></Box><Receipt r={rc} /></div>
    <aside className="stack"><Box title="Open escalations">{A.escalations.filter((e) => e.st === 'Open').map((e) => <div key={e.id} className="row" style={{ justifyContent: 'space-between', fontSize: 13 }}><span>{stu(A, e.sid).name} · {e.lvl}</span><button className="link-quiet" onClick={() => setA({ ...A, escalations: A.escalations.map((x) => (x.id === e.id ? { ...x, st: 'Resolved' } : x)), log: audit(A, 'Resolved ' + e.id) })}>Mark resolved</button></div>)}{!A.escalations.some((e) => e.st === 'Open') && <span className="muted">None open.</span>}</Box></aside></div>;
}

const RES = [['Tutoring centre', 'Academic', 'Drop-in and booked tutoring for 100–200 level courses.', 'Library 2nd floor · Mon–Thu 10–8'], ['Writing centre', 'Academic', 'One-to-one feedback on drafts.', 'Online or Calhoun 110'], ['Counseling', 'Wellbeing', 'Free, confidential sessions; same-day urgent slots.', 'Health Centre · 555-0140'], ['Emergency fund', 'Money', 'Grants up to $500 for unexpected costs.', 'Apply in Student accounts'], ['Food pantry', 'Basic needs', 'No questions asked.', 'Student Union B12'], ['Accessibility services', 'Wellbeing', 'Accommodations and testing support.', 'Lab Sci 1 · 555-0177'], ['Career centre', 'Career', 'Résumé reviews and internships.', 'Union 3rd floor']];
function StudentSupportResources() {
  const [A, setA] = useAdv(); const [sel] = useSel(); const s = stu(A, sel); const [c, setC] = useState('All'); const [rc, setRc] = useState(null); const cats = ['All', ...new Set(RES.map((r) => r[1]))];
  return <div className="two"><div className="stack"><div className="row">{cats.map((x) => <button key={x} className="chip" aria-pressed={c === x} onClick={() => setC(x)} style={{ cursor: 'pointer', fontWeight: c === x ? 600 : 400 }}>{x}</button>)}</div>{RES.filter((r) => c === 'All' || r[1] === c).map((r) => <Box key={r[0]} title={r[0]} aside={<N.Button onClick={() => { setA({ ...A, msgs: [...A.msgs, { sid: s.id, subj: 'Resource: ' + r[0], at: now() }], log: audit(A, 'Shared ' + r[0] + ' with ' + s.name) }); setRc({ head: 'Shared', body: r[0] + ' sent to ' + s.name, ref: ref('RES') }); }}>Send to {s.name.split(' ')[0]}</N.Button>}><span style={{ fontSize: 14 }}>{r[2]}</span><span className="muted">{r[3]}</span></Box>)}</div><aside className="stack"><Pick /><Receipt r={rc} /><Box title="Send vs refer">Sending shares information. Referring (Refer to office) asks the office to reach out.</Box></aside></div>;
}

function AdvisorSettings() {
  const [A, setA] = useAdv(); const [d, setD] = useState(A.settings); const [rc, setRc] = useState(null); const ch = JSON.stringify(d) !== JSON.stringify(A.settings);
  return <div className="two"><div className="stack"><Box title="Availability"><N.TextField label="Office hours" value={d.hours} onChange={(e) => setD({ ...d, hours: e.target.value })} /></Box><Box title="Alert me when">{[['risk', 'A student gets a new signal'], ['hold', 'A hold is placed on my caseload'], ['msg', 'Every student reply (otherwise daily digest)']].map(([k, l]) => <label key={k} className="row" style={{ fontSize: 14 }}><input type="checkbox" checked={d.alerts[k]} onChange={(e) => setD({ ...d, alerts: { ...d.alerts, [k]: e.target.checked } })} /> {l}</label>)}</Box>
    <Box title="Cover while away"><N.TextField label="Delegate advisor (email)" value={d.delegate} onChange={(e) => setD({ ...d, delegate: e.target.value })} placeholder="colleague@example.edu" error={d.delegate && !/.+@.+\..+/.test(d.delegate) ? 'Enter an email' : undefined} /><span className="muted">Delegates see your caseload and staff-only notes while delegation is on.</span></Box>
    <div className="row"><N.Button variant="primary" disabled={!ch || (d.delegate && !/.+@.+\..+/.test(d.delegate))} disabledReason="No valid changes" onClick={() => { setA({ ...A, settings: d, log: audit(A, 'Settings saved') }); setRc({ head: 'Saved', body: 'Settings updated', ref: ref('SET') }); }}>Save</N.Button>{ch && <N.Button onClick={() => setD(A.settings)}>Discard</N.Button>}</div><Receipt r={rc} /></div><aside className="stack"><Box title="Caseload">{A.students.length} students · assigned by Advising lead</Box></aside></div>;
}

function ConductTermReview() {
  const [A, setA] = useAdv(); const [sel] = useSel(); const s = stu(A, sel); const R = A.reviews[s.id] || {}; const [rc, setRc] = useState(null);
  const P = A.plans[s.id]; const acts = A.actions.filter((a) => a.sid === s.id);
  const items = [['Plan for next term reviewed', 'plan'], ['Success plan goals checked', 'goals'], ['Holds and standing discussed', 'holds'], ['Open referrals followed up', 'refs']];
  const set = (k, v) => setA({ ...A, reviews: { ...A.reviews, [s.id]: { ...R, [k]: v } } });
  const all = items.every(([, k]) => R[k]);
  return <div className="two"><div className="stack"><Pick /><Box title={'Fall 2026 review · ' + s.name} aside={R.done ? <Chip tone="ok">Recorded</Chip> : null}>{items.map(([l, k]) => <label key={k} className="row" style={{ fontSize: 14 }}><input type="checkbox" disabled={R.done} checked={!!R[k]} onChange={(e) => set(k, e.target.checked)} /> {l}</label>)}<N.TextField label="Summary for the student" value={R.sum || ''} readOnly={R.done} onChange={(e) => set('sum', e.target.value)} /><N.Button variant="primary" disabled={R.done || !all || !(R.sum || '').trim()} disabledReason={R.done ? 'Already recorded' : 'Tick every item and add a summary'} onClick={() => { setA({ ...A, reviews: { ...A.reviews, [s.id]: { ...R, done: true } }, log: audit(A, 'Term review recorded · ' + s.name) }); setRc({ head: 'Review recorded', body: 'Summary shared with ' + s.name, ref: ref('TRV') }); }}>Record review</N.Button></Box><Receipt r={rc} /></div>
    <aside className="stack"><Box title="At a glance"><div style={{ fontSize: 13 }}>Success plan: {P ? P.st : 'none'}</div><div style={{ fontSize: 13 }}>Actions done: {acts.filter((a) => a.done).length}/{acts.length}</div><div style={{ fontSize: 13 }}>Hold: {s.hold || 'none'}</div><div style={{ fontSize: 13 }}>Signals: {s.risk.length}</div></Box></aside></div>;
}

function CloseOrTransitionCase() {
  const [A, setA] = useAdv(); const [sel] = useSel(); const s = stu(A, sel); const [why, setWhy] = useState('Graduated'); const [to, setTo] = useState(''); const [conf, setConf] = useState(false); const [rc, setRc] = useState(null);
  const open = [...A.referrals.filter((r) => r.sid === s.id && r.st !== 'Closed').map((r) => 'Referral ' + r.id), ...A.escalations.filter((e) => e.sid === s.id && e.st === 'Open').map((e) => 'Escalation ' + e.id), ...A.actions.filter((a) => a.sid === s.id && !a.done).map((a) => 'Action: ' + a.text)];
  const transfer = why === 'Changed program'; const blocked = (!transfer && open.length > 0) || (transfer && !/.+@.+\..+/.test(to));
  return <div className="two"><div className="stack"><Pick /><Box title={s.name + ' · case ' + s.case.toLowerCase()}>{s.case !== 'Open' ? <span className="muted">This case is {s.case.toLowerCase()}. Records are kept.</span> : <><N.Segmented label="Reason" value={why} onChange={(v) => { setWhy(v); setConf(false); }} options={['Graduated', 'Withdrew', 'Changed program'].map((x) => ({ value: x, label: x }))} />{transfer && <N.TextField label="New advisor (email)" value={to} onChange={(e) => setTo(e.target.value)} />}
    {!conf ? <N.Button variant="primary" disabled={blocked} disabledReason={transfer ? 'Enter the new advisor' : 'Resolve open items first'} onClick={() => setConf(true)}>{transfer ? 'Transfer case' : 'Close case'}</N.Button> : <N.Notice head={transfer ? 'Transfer to ' + to + '?' : 'Close this case?'}>{transfer ? 'Open items and notes move with the student.' : 'The student leaves your caseload. Notes are retained per records policy.'}<div className="row" style={{ marginTop: 8 }}><N.Button variant="primary" onClick={() => { const st = transfer ? 'Transferred' : 'Closed'; setA({ ...A, students: A.students.map((x) => (x.id === s.id ? { ...x, case: st } : x)), log: audit(A, st + ' case · ' + s.name + (transfer ? ' → ' + to : ' (' + why + ')')) }); setConf(false); setRc({ head: st, body: s.name, ref: ref('CASE') }); }}>Confirm</N.Button><N.Button onClick={() => setConf(false)}>Cancel</N.Button></div></N.Notice>}</>}</Box><Receipt r={rc} /></div>
    <aside className="stack"><Box title="Open items" tone={open.length ? 'warn' : undefined}>{open.length ? open.map((o) => <div key={o} style={{ fontSize: 13 }}>• {o}</div>) : <span className="muted">Nothing open.</span>}{open.length > 0 && !transfer && <span className="muted">Close these before closing the case, or transfer them.</span>}</Box></aside></div>;
}

Object.assign(window.EVERY_BESPOKE, { 'D:Cohort dashboard': CohortDashboard, 'D:Program dashboard': ProgramDashboard, 'D:Outcome aggregates': OutcomeAggregates, 'D:Intervention tracker': InterventionTracker, 'D:Escalation workflow': EscalationWorkflow, 'D:Student support resources': StudentSupportResources, 'D:Advisor settings': AdvisorSettings, 'D:Conduct term review': ConductTermReview, 'D:Close or transition case': CloseOrTransitionCase });
})();
