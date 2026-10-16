// Bespoke Advisor & student success screens (group D), batch 1. Shared caseload store window.ESD ('sem-b:adv'). Sample data only.
(() => {
const { N, useStore, ref, Box, Receipt, T, Chip, Bar, Log, now } = window.ESB;
const { useState } = React;
const ME = 'P. Grant (Advisor)';
const ST = (id, name, yr, major, gpa, cr, hold, pri, risk, cohort, consent, plan) => ({ id, name, yr, major, gpa, cr, hold, pri, risk, cohort, consent, plan, case: 'Open' });
const ADV0 = {
  students: [ST('A-1042', 'Jordan Okafor', 'Sophomore', 'Biology BS', 2.61, 44, 'Advising hold', 'High', ['Missed 2 check-ins', 'Midterm D · CHEM 2210', 'Registration opens in 9 days'], 'First-gen', { plan: true, aid: false, wellbeing: false }, ['BIO 2100', 'CHEM 2210', 'MATH 1200', 'WRIT 1000']),
    ST('A-1077', 'Lena Chen', 'First-year', 'Undeclared', 3.42, 15, null, 'Medium', ['Check-in due'], 'First-year', { plan: true, aid: true, wellbeing: false }, ['ECON 1010', 'PSY 1200', 'WRIT 1000', 'STAT 2150']),
    ST('A-1103', 'Marcus Diaz', 'Junior', 'Economics BA', 3.05, 71, 'Balance hold', 'Medium', ['Balance hold blocks registration'], 'Transfer', { plan: true, aid: false, wellbeing: false }, ['ECON 3010', 'STAT 2150', 'HIST 2140']),
    ST('A-1150', 'Aisha Patel', 'Senior', 'Data Science BS', 3.78, 104, null, 'Low', [], 'First-gen', { plan: true, aid: true, wellbeing: true }, ['DS 4900', 'STAT 3200']),
    ST('A-1188', 'Tomás Reyes', 'Sophomore', 'Chemistry BS', 1.94, 38, 'Academic standing', 'High', ['GPA below 2.0', 'Dropped below full-time'], 'Athletes', { plan: true, aid: false, wellbeing: false }, ['CHEM 2210', 'MATH 1200']),
    ST('A-1201', 'Grace Kim', 'First-year', 'Biology BS', 3.20, 16, null, 'Low', ['Check-in due'], 'First-year', { plan: false, aid: false, wellbeing: false }, [])],
  appts: [{ id: 'ap1', sid: 'A-1077', day: 'Mon', t: '10:00', kind: 'Check-in', st: 'Booked' }, { id: 'ap2', sid: 'A-1042', day: 'Tue', t: '14:00', kind: 'Registration planning', st: 'Booked' }, { id: 'ap3', sid: 'A-1188', day: 'Wed', t: '11:00', kind: 'Standing review', st: 'Requested' }],
  notes: [{ sid: 'A-1042', at: 'Sep 18', text: 'Discussed CHEM workload; suggested tutoring centre.', vis: 'private' }, { sid: 'A-1042', at: 'Sep 30', text: 'Agreed to drop to 13 credits if midterm < C.', vis: 'shared' }],
  actions: [{ id: 'x1', sid: 'A-1042', text: 'Book tutoring for CHEM 2210', due: 'Oct 10', done: false, by: 'student' }, { id: 'x2', sid: 'A-1042', text: 'Meet advisor before registration', due: 'Oct 15', done: false, by: 'student' }, { id: 'x3', sid: 'A-1077', text: 'Explore 2 majors in Major explorer', due: 'Oct 20', done: true, by: 'student' }],
  checkins: [{ sid: 'A-1042', wk: 3, st: 'Missed' }, { sid: 'A-1042', wk: 5, st: 'Missed' }, { sid: 'A-1077', wk: 5, st: 'Done', mood: 'Okay' }, { sid: 'A-1188', wk: 5, st: 'Done', mood: 'Struggling' }],
  referrals: [{ id: 'RF-221', sid: 'A-1188', office: 'Counseling', reason: 'Student asked for support with stress', st: 'Accepted', consent: true }],
  outreach: [{ sid: 'A-1042', why: 'Missed 2 check-ins', st: 'Queued' }, { sid: 'A-1201', why: 'Check-in due', st: 'Queued' }, { sid: 'A-1188', why: 'GPA below 2.0', st: 'Queued' }],
  msgs: [], plans: {}, escalations: [], reviews: {}, interventions: [{ id: 'iv1', name: 'First-gen check-in series', cohort: 'First-gen', n: 46, st: 'Running', pre: 71, post: 79 }, { id: 'iv2', name: 'Early-alert tutoring nudge', cohort: 'First-year', n: 118, st: 'Running', pre: 64, post: 70 }],
  settings: { hours: 'Mon–Thu 9–4', alerts: { risk: true, hold: true, msg: false }, delegate: '' },
  log: []
};
const useAdv = () => useStore('adv', ADV0);
const useSel = () => useStore('advsel', 'A-1042');
const audit = (A, what) => [...A.log, [now(), what + ' · ' + ME]];
const stu = (A, id) => A.students.find((s) => s.id === id) || A.students[0];
const optOut = (s) => (s.optOut != null ? s.optOut : s.id === 'A-1201');
const priTone = (p) => (p === 'High' ? 'bad' : p === 'Medium' ? 'warn' : undefined);
const Pick = () => { const [A] = useAdv(); const [sel, setSel] = useSel(); return <label style={{ display: 'grid', gap: 4, fontSize: 12, color: 'var(--text-secondary)' }}>Student<select value={sel} onChange={(e) => setSel(e.target.value)} style={{ font: 'inherit', fontSize: 14, padding: '6px 8px', borderRadius: 6, border: '1px solid var(--border-subtle)', background: 'var(--surface-base)', color: 'var(--text-primary)' }}>{A.students.map((s) => <option key={s.id} value={s.id}>{s.name} · {s.id}</option>)}</select></label>; };
const Consent = ({ s, k, children }) => s.consent[k] ? children : <N.Notice head="Not shared with you">{s.name} hasn't shared this with advising. You can ask in a message; you can't see it without consent.</N.Notice>;
window.ESD = { ME, ADV0, useAdv, useSel, audit, stu, priTone, Pick, Consent, optOut };

function AdvisorDashboard() {
  const [A] = useAdv(); const [, setSel] = useSel(); const [f, setF] = useState(null);
  const tiles = [['Caseload', A.students.length, () => true], ['High priority', A.students.filter((s) => s.pri === 'High').length, (s) => s.pri === 'High'], ['Holds before registration', A.students.filter((s) => s.hold).length, (s) => !!s.hold], ['Outreach queued', A.outreach.filter((o) => o.st === 'Queued').length, (s) => A.outreach.some((o) => o.sid === s.id && o.st === 'Queued')]];
  const rows = A.students.filter((s) => !f || tiles.find((t) => t[0] === f)[2](s));
  return <div className="stack"><div className="tiles">{tiles.map(([l, v]) => <button key={l} onClick={() => setF(f === l ? null : l)} aria-pressed={f === l} style={{ all: 'unset', cursor: 'pointer', outline: f === l ? '2px solid var(--action-primary)' : 'none', borderRadius: 8 }}><N.MetricTile label={l} value={String(v)} source="official" updated="SIS · 8 min ago" /></button>)}</div>
    <div className="two"><T head={['Student', 'Year · program', 'Priority', 'Hold', 'Signals']} rows={rows.map((s) => [<b>{s.name}</b>, s.yr + ' · ' + s.major, <Chip tone={priTone(s.pri)}>{s.pri}</Chip>, s.hold || '—', s.risk.length || '—'])} onRow={(i) => setSel(rows[i].id)} empty="Nobody matches this tile." />
      <aside className="stack"><Box title="This week">{A.appts.map((a) => <div key={a.id} style={{ fontSize: 13 }}>{a.day} {a.t} · {stu(A, a.sid).name} · <span className="muted">{a.kind} ({a.st})</span></div>)}</Box><Box title="Recent activity"><Log items={A.log} /></Box></aside></div><span className="muted">Click a row to select the student for the other screens.</span></div>;
}

function StudentProfile() {
  const [A] = useAdv(); const [sel] = useSel(); const s = stu(A, sel);
  return <div className="two"><div className="stack"><Pick /><Box title={s.name + ' · ' + s.id} aside={<Chip tone={priTone(s.pri)}>{s.pri} priority</Chip>}><div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(140px,1fr))', gap: 10 }}>{[['Year', s.yr], ['Program', s.major], ['GPA', s.gpa.toFixed(2)], ['Credits earned', s.cr], ['Cohort', s.cohort], ['Case', s.case]].map(([l, v]) => <div key={l}><div className="muted">{l}</div><b>{v}</b></div>)}</div></Box>
    <Box title="Signals">{s.risk.length ? s.risk.map((r) => <div key={r} style={{ fontSize: 13 }}>• {r}</div>) : <span className="muted">No open signals.</span>}</Box></div>
    <aside className="stack"><Box title="What the student shares">{Object.entries(s.consent).map(([k, v]) => <div key={k} className="row" style={{ justifyContent: 'space-between', fontSize: 13 }}><span>{k}</span><Chip tone={v ? 'ok' : undefined}>{v ? 'Shared' : 'Not shared'}</Chip></div>)}</Box><Box title="Optional nudges">{optOut(s) ? 'Opted out — only required notices (holds, deadlines) are sent.' : 'On'}</Box><Box title="Source">GPA and credits from SIS (official). Signals are derived and may lag a day. Integrity cases and counseling records are never shown to advising.</Box></aside></div>;
}

function AcademicPlan() {
  const [A, setA] = useAdv(); const [sel] = useSel(); const s = stu(A, sel); const [c, setC] = useState(''); const [rc, setRc] = useState(null);
  const C = window.ESB.COURSES; const cr = s.plan.reduce((x, k) => x + (C[k] ? C[k].cr : 3), 0);
  const suggest = () => { setA({ ...A, notes: [...A.notes, { sid: s.id, at: now(), text: 'Suggested adding ' + c + ' to plan', vis: 'shared' }], log: audit(A, 'Suggested ' + c + ' to ' + s.name) }); setRc({ head: 'Suggestion sent', body: s.name + ' decides whether to add it', ref: ref('PLN') }); setC(''); };
  return <div className="two"><div className="stack"><Pick /><window.ESD.Consent s={s} k="plan"><Box title={'Spring 2027 plan · ' + cr + ' credits'} aside={cr < 12 ? <Chip tone="warn">Below full-time</Chip> : null}><T head={['Course', 'Title', 'Credits', 'Requirement']} rows={s.plan.map((k) => [<b>{k}</b>, C[k] ? C[k].title : '—', C[k] ? C[k].cr : 3, C[k] ? C[k].req : '—'])} empty="No courses planned." /></Box>
    <Box title="Suggest a course"><div className="row"><select value={c} onChange={(e) => setC(e.target.value)} style={{ font: 'inherit', padding: 6 }}><option value="">Choose…</option>{Object.keys(C).filter((k) => !s.plan.includes(k)).map((k) => <option key={k}>{k}</option>)}</select><N.Button variant="primary" disabled={!c} disabledReason="Pick a course" onClick={suggest}>Send suggestion</N.Button></div><span className="muted">Advisors suggest; only the student changes their plan.</span></Box></window.ESD.Consent><Receipt r={rc} /></div>
    <aside className="stack"><Box title="Plan status">{cr >= 12 ? 'Full-time load.' : 'Below 12 credits may affect aid and athletics eligibility.'}</Box></aside></div>;
}

function ActionCompletion() {
  const [A, setA] = useAdv(); const [sel] = useSel(); const s = stu(A, sel); const [t, setT] = useState(''); const [due, setDue] = useState('');
  const mine = A.actions.filter((a) => a.sid === s.id); const done = mine.filter((a) => a.done).length;
  return <div className="two"><div className="stack"><Pick /><Box title={'Agreed actions · ' + done + ' of ' + mine.length + ' done'}><T head={['Action', 'Due', 'Owner', 'Status']} rows={mine.map((a) => [a.text, a.due, a.by, a.done ? <Chip tone="ok">Done</Chip> : <N.Button onClick={() => setA({ ...A, actions: A.actions.map((x) => (x.id === a.id ? { ...x, done: true } : x)), log: audit(A, 'Marked done: ' + a.text) })}>Mark done</N.Button>])} empty="No actions agreed yet." /></Box>
    <Box title="Add an action"><N.TextField label="Action" value={t} onChange={(e) => setT(e.target.value)} placeholder="e.g. Visit the writing centre" /><N.TextField label="Due" type="date" value={due} onChange={(e) => setDue(e.target.value)} /><N.Button variant="primary" disabled={!t.trim() || !due} disabledReason="Add text and a due date" onClick={() => { setA({ ...A, actions: [...A.actions, { id: ref('x'), sid: s.id, text: t, due, done: false, by: 'student' }], log: audit(A, 'Action added for ' + s.name) }); setT(''); setDue(''); }}>Add</N.Button></Box></div>
    <aside className="stack"><Box title="Progress"><Bar v={done} max={mine.length || 1} label="Completed" right={done + '/' + mine.length} /></Box></aside></div>;
}

function HoldsAndRegistrationStatus() {
  const [A, setA] = useAdv(); const [rc, setRc] = useState(null);
  const owner = { 'Advising hold': 'Advising (you)', 'Balance hold': 'Student Accounts', 'Academic standing': 'Dean of Students' };
  const clear = (s) => { setA({ ...A, students: A.students.map((x) => (x.id === s.id ? { ...x, hold: null } : x)), log: audit(A, 'Cleared advising hold · ' + s.name) }); setRc({ head: 'Hold cleared', body: s.name + ' can register when their window opens · written to SIS', ref: ref('HLD') }); };
  return <div className="two"><div className="stack"><T head={['Student', 'Hold', 'Owner', 'Registration', '']} rows={A.students.map((s) => [<b>{s.name}</b>, s.hold || '—', s.hold ? owner[s.hold] : '—', s.hold ? <Chip tone="bad">Blocked</Chip> : <Chip tone="ok">Ready</Chip>, s.hold === 'Advising hold' ? (A.actions.some((a) => a.sid === s.id && /advisor/i.test(a.text) && a.done) || A.appts.some((a) => a.sid === s.id && a.st === 'Completed') ? <N.Button onClick={() => clear(s)}>Clear</N.Button> : <span className="muted">Meet first</span>) : s.hold ? <span className="muted">Not yours to clear</span> : ''])} /><Receipt r={rc} /></div>
    <aside className="stack"><Box title="Rule">You can clear only advising holds, and only after a completed meeting (Appointment schedule → Complete) or the meet-advisor action is done.</Box></aside></div>;
}

function CheckIns() {
  const [A, setA] = useAdv(); const [sel] = useSel(); const s = stu(A, sel); const [rc, setRc] = useState(null);
  const mine = A.checkins.filter((c) => c.sid === s.id); const missed = mine.filter((c) => c.st === 'Missed').length;
  const send = () => { setA({ ...A, checkins: [...A.checkins, { sid: s.id, wk: 7, st: 'Sent' }], log: audit(A, 'Week 7 check-in sent to ' + s.name) }); setRc({ head: 'Check-in sent', body: '3 questions · closes in 3 days', ref: ref('CHK') }); };
  return <div className="two"><div className="stack"><Pick /><Box title="Check-ins this term" aside={missed >= 2 ? <Chip tone="bad">{missed} missed</Chip> : null}><T head={['Week', 'Status', 'Student said']} rows={mine.map((c) => [c.wk, <Chip tone={c.st === 'Missed' ? 'bad' : c.st === 'Done' ? 'ok' : 'warn'}>{c.st}</Chip>, c.mood || '—'])} empty="No check-ins yet." />{optOut(s) && <N.Notice head="Student opted out of optional check-ins">Check-ins are optional prompts. Reach out only about required items, or ask in your next meeting.</N.Notice>}<N.Button variant="primary" disabled={mine.some((c) => c.wk === 7) || optOut(s)} disabledReason={optOut(s) ? 'Student opted out' : 'Week 7 already sent'} onClick={send}>Send week 7 check-in</N.Button></Box><Receipt r={rc} /></div>
    <aside className="stack"><Box title="Questions sent">1. How are classes going? 2. Anything blocking you? 3. Want to meet?</Box>{missed >= 2 && <Box tone="warn" title="Suggested">Two missed check-ins — add to Outreach queue.</Box>}</aside></div>;
}

function AppointmentSchedule() {
  const [A, setA] = useAdv(); const [rc, setRc] = useState(null); const days = ['Mon', 'Tue', 'Wed', 'Thu']; const slots = ['9:00', '10:00', '11:00', '14:00', '15:00'];
  const set = (id, st, msg) => { setA({ ...A, appts: A.appts.map((a) => (a.id === id ? { ...a, st } : a)), log: audit(A, msg) }); setRc({ head: st, body: msg, ref: ref('APT') }); };
  return <div className="stack"><div style={{ overflowX: 'auto' }}><div style={{ display: 'grid', gridTemplateColumns: '60px repeat(4,minmax(140px,1fr))', gap: 4, minWidth: 640 }}><span></span>{days.map((d) => <b key={d} style={{ fontSize: 13 }}>{d}</b>)}{slots.map((t) => <React.Fragment key={t}><span className="muted">{t}</span>{days.map((d) => { const a = A.appts.find((x) => x.day === d && x.t === t); return <div key={d} style={{ minHeight: 54, border: '1px solid var(--border-subtle)', borderRadius: 6, padding: 6, fontSize: 12, background: a ? 'var(--surface-raised)' : undefined }}>{a ? <div style={{ display: 'grid', gap: 4 }}><b>{stu(A, a.sid).name}</b><span>{a.kind}</span><Chip tone={a.st === 'Completed' ? 'ok' : a.st === 'Requested' ? 'warn' : a.st === 'No-show' ? 'bad' : undefined}>{a.st}</Chip>{a.st === 'Requested' && <button className="link-quiet" onClick={() => set(a.id, 'Booked', 'Confirmed ' + a.kind + ' with ' + stu(A, a.sid).name)}>Confirm</button>}{a.st === 'Booked' && <span className="row"><button className="link-quiet" onClick={() => set(a.id, 'Completed', 'Completed meeting with ' + stu(A, a.sid).name)}>Complete</button><button className="link-quiet" onClick={() => set(a.id, 'No-show', 'No-show · ' + stu(A, a.sid).name)}>No-show</button></span>}</div> : null}</div>; })}</React.Fragment>)}</div></div><Receipt r={rc} /><span className="muted">Office hours: {A.settings.hours}. Completing a meeting lets you clear an advising hold.</span></div>;
}

function AdvisingNotes() {
  const [A, setA] = useAdv(); const [sel] = useSel(); const s = stu(A, sel); const [t, setT] = useState(''); const [vis, setVis] = useState('private');
  const mine = A.notes.filter((n) => n.sid === s.id);
  return <div className="two"><div className="stack"><Pick /><Box title="New note"><textarea value={t} onChange={(e) => setT(e.target.value)} rows={4} placeholder="Facts and agreed next steps. Avoid diagnoses or opinions." style={{ font: 'inherit', padding: 8, borderRadius: 6, border: '1px solid var(--border-subtle)', background: 'var(--surface-base)', color: 'var(--text-primary)' }}></textarea><N.Segmented label="Visible to" value={vis} onChange={setVis} options={[{ value: 'private', label: 'Advising staff' }, { value: 'shared', label: 'Also the student' }]} />{/(depress|anxiety|diagnos|medicat)/i.test(t) && <N.Notice head="Check wording">Health details belong with Counseling, not advising notes. Use a referral instead.</N.Notice>}<N.Button variant="primary" disabled={t.trim().length < 5} disabledReason="Write a note" onClick={() => { setA({ ...A, notes: [...A.notes, { sid: s.id, at: now(), text: t, vis }], log: audit(A, 'Note added for ' + s.name) }); setT(''); }}>Save note</N.Button></Box></div>
    <aside className="stack"><Box title={'Notes · ' + mine.length}>{mine.length ? mine.slice().reverse().map((n, i) => <div key={i} style={{ fontSize: 13, borderBottom: '1px solid var(--border-subtle)', paddingBottom: 6 }}><span className="muted">{n.at} · {n.vis === 'shared' ? 'shared with student' : 'staff only'}</span><div>{n.text}</div></div>) : <span className="muted">No notes yet.</span>}<span className="muted">Students can request their records, including staff-only notes.</span></Box></aside></div>;
}

Object.assign(window.EVERY_BESPOKE, { 'D:Advisor dashboard': AdvisorDashboard, 'D:Student profile': StudentProfile, 'D:Academic plan': AcademicPlan, 'D:Action completion': ActionCompletion, 'D:Holds and registration status': HoldsAndRegistrationStatus, 'D:Check-ins': CheckIns, 'D:Appointment schedule': AppointmentSchedule, 'D:Advising notes': AdvisingNotes });
})();
