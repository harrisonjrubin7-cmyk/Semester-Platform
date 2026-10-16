// Bespoke Advisor screens (group D), batch 2: success plan, referrals, signals, outreach, messages, consent. Uses window.ESD. Sample data only.
(() => {
const { N, ref, Box, Receipt, T, Chip, Log, now } = window.ESB;
const { useAdv, useSel, audit, stu, priTone, Pick, Consent, optOut } = window.ESD;
const { useState } = React;
const OFFICES = [['Counseling', 'wellbeing'], ['Tutoring centre', null], ['Financial aid', 'aid'], ['Career centre', null], ['Accessibility services', 'wellbeing'], ['Dean of Students', null]];

function SuccessPlan() {
  const [A, setA] = useAdv(); const [sel] = useSel(); const s = stu(A, sel); const P = A.plans[s.id] || { goals: [], st: 'Draft' }; const [g, setG] = useState(''); const [rc, setRc] = useState(null);
  const put = (p, msg) => setA({ ...A, plans: { ...A.plans, [s.id]: p }, log: msg ? audit(A, msg) : A.log });
  return <div className="two"><div className="stack"><Pick /><Box title={'Success plan · ' + s.name} aside={<Chip tone={P.st === 'Agreed' ? 'ok' : 'warn'}>{P.st}</Chip>}>{P.goals.length ? P.goals.map((x, i) => <div key={i} className="row" style={{ justifyContent: 'space-between', fontSize: 14 }}><span>{i + 1}. {x}</span>{P.st === 'Draft' && <button className="link-quiet" onClick={() => put({ ...P, goals: P.goals.filter((_, j) => j !== i) })}>Remove</button>}</div>) : <span className="muted">No goals yet. Start from the student's signals: {s.risk.join('; ') || 'none'}.</span>}
    {P.st === 'Draft' && <><div className="row"><N.TextField label="Goal (specific, dated)" value={g} onChange={(e) => setG(e.target.value)} placeholder="e.g. C or better on CHEM final by Dec 11" /><N.Button disabled={g.trim().length < 6} disabledReason="Write a goal" onClick={() => { put({ ...P, goals: [...P.goals, g] }); setG(''); }}>Add goal</N.Button></div>
      <N.Button variant="primary" disabled={P.goals.length < 1} disabledReason="Add at least one goal" onClick={() => { put({ ...P, st: 'Sent to student' }, 'Success plan sent to ' + s.name); setRc({ head: 'Sent', body: s.name + ' reviews and agrees in the student app', ref: ref('SP') }); }}>Send to student</N.Button></>}
    {P.st === 'Sent to student' && <div className="row"><span className="muted">Waiting for the student.</span><N.Button onClick={() => put({ ...P, st: 'Agreed' }, s.name + ' agreed to success plan')}>Simulate: student agrees</N.Button></div>}</Box><Receipt r={rc} /></div>
    <aside className="stack"><Box title="Good plans">2–4 goals · each has a date · student agrees before it's active · reviewed at term review.</Box></aside></div>;
}

function ReferralWorkflow() {
  const [A, setA] = useAdv(); const [rc, setRc] = useState(null); const steps = ['Sent', 'Accepted', 'Contacted', 'Closed'];
  const adv = (r) => { const n = steps[steps.indexOf(r.st) + 1]; setA({ ...A, referrals: A.referrals.map((x) => (x.id === r.id ? { ...x, st: n } : x)), log: audit(A, r.id + ' → ' + n) }); setRc({ head: n, body: r.office + ' · ' + stu(A, r.sid).name, ref: r.id }); };
  return <div className="two"><div className="stack"><T head={['Ref', 'Student', 'Office', 'Status', '']} rows={A.referrals.map((r) => [<span style={{ fontFamily: 'var(--font-mono)' }}>{r.id}</span>, stu(A, r.sid).name, r.office, <div className="row" style={{ gap: 4 }}>{steps.map((x, i) => <span key={x} style={{ fontSize: 11, padding: '2px 6px', borderRadius: 3, background: i <= steps.indexOf(r.st) ? 'var(--action-primary)' : 'var(--surface-raised)', color: i <= steps.indexOf(r.st) ? 'var(--text-on-action, #fff)' : 'var(--text-secondary)' }}>{x}</span>)}</div>, r.st === 'Closed' ? '' : (OFFICES.find((x) => x[0] === r.office) || [])[1] && !stu(A, r.sid).consent[(OFFICES.find((x) => x[0] === r.office) || [])[1]] && !r.consent ? <Chip tone="bad">Paused · student revoked sharing</Chip> : <button className="link-quiet" onClick={() => adv(r)}>Simulate office: {steps[steps.indexOf(r.st) + 1]}</button>])} empty="No referrals. Use Refer to office." /><Receipt r={rc} /></div>
    <aside className="stack"><Box title="What you see">Status only. The receiving office keeps its own records — counseling content never comes back to advising.</Box></aside></div>;
}

function SupportRequestHistory() {
  const [A] = useAdv(); const [sel] = useSel(); const s = stu(A, sel);
  const items = [...A.referrals.filter((r) => r.sid === s.id).map((r) => ['Referral', r.office, r.st]), ...A.appts.filter((a) => a.sid === s.id).map((a) => ['Appointment', a.kind + ' · ' + a.day + ' ' + a.t, a.st]), ...A.msgs.filter((m) => m.sid === s.id).map((m) => ['Message', m.subj, 'Sent']), ...A.escalations.filter((e) => e.sid === s.id).map((e) => ['Escalation', e.to, e.st])];
  return <div className="two"><div className="stack"><Pick /><T head={['Type', 'Detail', 'Status']} rows={items} empty={'No support requests for ' + s.name + '.'} /></div><aside className="stack"><Box title="Scope">Shows requests made through advising. Requests the student made directly to other offices appear only if shared.</Box></aside></div>;
}

function RiskAndPrioritySignals() {
  const [A, setA] = useAdv(); const [rc, setRc] = useState(null);
  const why = { 'Missed 2 check-ins': 'Check-ins · weeks 3 and 5', 'Midterm D · CHEM 2210': 'Gradebook · instructor-posted', 'GPA below 2.0': 'SIS · official', 'Dropped below full-time': 'SIS · enrollment', 'Balance hold blocks registration': 'Student Accounts', 'Check-in due': 'Schedule', 'Registration opens in 9 days': 'Registrar calendar' };
  const set = (s, p) => { setA({ ...A, students: A.students.map((x) => (x.id === s.id ? { ...x, pri: p } : x)), log: audit(A, 'Priority for ' + s.name + ' set to ' + p) }); setRc({ head: 'Priority changed', body: s.name + ' → ' + p + ' (your judgement, recorded)', ref: ref('PRI') }); };
  const sorted = A.students.slice().sort((a, b) => b.risk.length - a.risk.length);
  return <div className="stack"><N.Notice head="Signals, not predictions">Each signal shows where it came from. Priority is set by you, not by a score.</N.Notice><T head={['Student', 'Signals (source)', 'Priority']} rows={sorted.map((s) => [<b>{s.name}</b>, s.risk.length ? s.risk.map((r) => <div key={r} style={{ fontSize: 12 }}>{r} <span className="muted">· {why[r] || 'derived'}</span></div>) : <span className="muted">None</span>, <N.Segmented label={'Priority for ' + s.name} value={s.pri} onChange={(v) => set(s, v)} options={['Low', 'Medium', 'High'].map((x) => ({ value: x, label: x }))} />])} /><Receipt r={rc} /></div>;
}

function OutreachQueue() {
  const [A, setA] = useAdv(); const [rc, setRc] = useState(null); const q = A.outreach.filter((o) => o.st === 'Queued');
  const act = (o, st) => { setA({ ...A, outreach: A.outreach.map((x) => (x === o ? { ...x, st } : x)), msgs: st === 'Contacted' ? [...A.msgs, { sid: o.sid, subj: 'Checking in', at: now() }] : A.msgs, log: audit(A, 'Outreach ' + st.toLowerCase() + ' · ' + stu(A, o.sid).name) }); setRc({ head: st, body: stu(A, o.sid).name, ref: ref('OUT') }); };
  return <div className="two"><div className="stack">{q.length ? q.map((o, i) => { const s = stu(A, o.sid); return <Box key={i} title={s.name} aside={<Chip tone={priTone(s.pri)}>{s.pri}</Chip>}><span>{o.why}</span><div className="row"><N.Button variant="primary" disabled={optOut(s)} disabledReason="Student opted out of optional nudges" onClick={() => act(o, 'Contacted')}>Send check-in message</N.Button>{optOut(s) && <span className="muted">Opted out of optional nudges.</span>}<N.Button onClick={() => act(o, 'Snoozed')}>Snooze 3 days</N.Button><N.Button onClick={() => act(o, 'Dismissed')}>Not needed</N.Button></div></Box>; }) : <N.EmptyState title="Queue clear" body="Nothing waiting. New signals add students here." />}<Receipt r={rc} /></div>
    <aside className="stack"><Box title="Handled">{A.outreach.filter((o) => o.st !== 'Queued').map((o, i) => <div key={i} style={{ fontSize: 13 }}>{stu(A, o.sid).name} · <span className="muted">{o.st}</span></div>)}</Box></aside></div>;
}

function CommunicationComposer() {
  const [A, setA] = useAdv(); const [to, setTo] = useState([]); const [subj, setSubj] = useState(''); const [body, setBody] = useState(''); const [rc, setRc] = useState(null);
  const tog = (id) => setTo(to.includes(id) ? to.filter((x) => x !== id) : [...to, id]);
  const risky = /(gpa|grade|probation|hold|balance)/i.test(subj); const merged = body.replace(/\{first\}/g, to[0] ? stu(A, to[0]).name.split(' ')[0] : 'Jordan');
  return <div className="two"><div className="stack"><Box title="To">{A.students.map((s) => <label key={s.id} className="row" style={{ fontSize: 13 }}><input type="checkbox" checked={to.includes(s.id)} onChange={() => tog(s.id)} /> {s.name}</label>)}</Box>
    <N.TextField label="Subject" value={subj} onChange={(e) => setSubj(e.target.value)} />{risky && <N.Notice head="Subject lines show on lock screens">Keep grades, holds and balances out of the subject. Put them in the body.</N.Notice>}
    <label style={{ display: 'grid', gap: 4, fontSize: 12, color: 'var(--text-secondary)' }}>Message (use {'{first}'} for first name)<textarea rows={5} value={body} onChange={(e) => setBody(e.target.value)} style={{ font: 'inherit', fontSize: 14, padding: 8, borderRadius: 6, border: '1px solid var(--border-subtle)', background: 'var(--surface-base)', color: 'var(--text-primary)' }}></textarea></label>
    <N.Button variant="primary" disabled={!to.length || !subj.trim() || !body.trim() || risky} disabledReason={risky ? 'Fix the subject line' : 'Add recipients, subject and message'} onClick={() => { setA({ ...A, msgs: [...A.msgs, ...to.map((sid) => ({ sid, subj, at: now() }))], log: audit(A, 'Message “' + subj + '” to ' + to.length) }); setRc({ head: 'Sent individually', body: to.length + ' student(s) · each sees only their own copy', ref: ref('MSG') }); setTo([]); setSubj(''); setBody(''); }}>Send</N.Button><Receipt r={rc} /></div>
    <aside className="stack"><Box title="Preview"><b>{subj || 'Subject'}</b><p style={{ margin: 0, fontSize: 14, whiteSpace: 'pre-wrap' }}>{merged || 'Message preview'}</p></Box></aside></div>;
}

function ReferToOffice() {
  const [A, setA] = useAdv(); const [sel] = useSel(); const s = stu(A, sel); const [o, setO] = useState('Tutoring centre'); const [why, setWhy] = useState(''); const [ok, setOk] = useState(false); const [rc, setRc] = useState(null);
  const need = (OFFICES.find((x) => x[0] === o) || [])[1]; const blocked = need && !s.consent[need] && !ok;
  return <div className="two"><div className="stack"><Pick /><Box title={'Refer ' + s.name}><N.Segmented label="Office" value={o} onChange={(v) => { setO(v); setOk(false); }} options={OFFICES.map(([x]) => ({ value: x, label: x }))} /><N.TextField label="Reason (shared with the office)" value={why} onChange={(e) => setWhy(e.target.value)} placeholder="Facts the office needs to reach out" />
    {need && !s.consent[need] && <label className="row" style={{ fontSize: 13 }}><input type="checkbox" checked={ok} onChange={(e) => setOk(e.target.checked)} /> {s.name} agreed to this referral in our meeting today.</label>}
    <N.Button variant="primary" disabled={!why.trim() || blocked} disabledReason={blocked ? 'This office needs the student’s agreement' : 'Add a reason'} onClick={() => { const id = ref('RF'); setA({ ...A, referrals: [...A.referrals, { id, sid: s.id, office: o, reason: why, st: 'Sent', consent: true }], log: audit(A, 'Referred ' + s.name + ' to ' + o) }); setRc({ head: 'Referral sent', body: o + ' will contact ' + s.name + ' within 2 business days', ref: id }); setWhy(''); setOk(false); }}>Send referral</N.Button></Box><Receipt r={rc} /></div>
    <aside className="stack"><Box title="Track it">Referral workflow shows status. The office decides how to follow up.</Box></aside></div>;
}

function ReviewConsentedShare() {
  const [A, setA] = useAdv(); const [sel] = useSel(); const s = stu(A, sel); const [rc, setRc] = useState(null);
  const data = { plan: 'Spring plan · ' + s.plan.join(', '), aid: 'Aid package: accepted · SAP met', wellbeing: 'Accommodation letter on file (details with Accessibility services)' };
  const ask = (k) => { setA({ ...A, msgs: [...A.msgs, { sid: s.id, subj: 'Request to share ' + k, at: now() }], log: audit(A, 'Asked ' + s.name + ' to share ' + k) }); setRc({ head: 'Request sent', body: s.name + ' decides in the student app', ref: ref('CNS') }); };
  return <div className="two"><div className="stack"><Pick />{Object.keys(s.consent).map((k) => <Box key={k} title={k} aside={<Chip tone={s.consent[k] ? 'ok' : undefined}>{s.consent[k] ? 'Shared' : 'Not shared'}</Chip>}>{s.consent[k] ? <><span style={{ fontSize: 14 }}>{data[k]}</span><button className="link-quiet" style={{ justifySelf: 'start' }} onClick={() => { setA({ ...A, students: A.students.map((x) => (x.id === s.id ? { ...x, consent: { ...x.consent, [k]: false } } : x)), referrals: A.referrals.map((r) => (r.sid === s.id && (OFFICES.find((o) => o[0] === r.office) || [])[1] === k ? { ...r, consent: false } : r)), log: audit(A, s.name + ' revoked sharing: ' + k) }); setRc({ head: 'Sharing revoked', body: 'Hidden immediately · related referrals pause', ref: ref('CNS') }); }}>Simulate: student revokes</button></> : <div className="row"><span className="muted">Hidden.</span><N.Button onClick={() => ask(k)}>Ask to share</N.Button></div>}</Box>)}<Receipt r={rc} /></div>
    <aside className="stack"><Box title="Logged">Every view of shared information is recorded and visible to the student.</Box></aside></div>;
}

Object.assign(window.EVERY_BESPOKE, { 'D:Success plan': SuccessPlan, 'D:Referral workflow': ReferralWorkflow, 'D:Support request history': SupportRequestHistory, 'D:Risk and priority signals': RiskAndPrioritySignals, 'D:Outreach queue': OutreachQueue, 'D:Communication composer': CommunicationComposer, 'D:Refer to office': ReferToOffice, 'D:Review consented share': ReviewConsentedShare });
})();
