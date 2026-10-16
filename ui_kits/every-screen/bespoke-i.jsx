// Bespoke Family & guardian screens (group I). One shared consent record in localStorage 'sem-b:family'. Sample data only.
(() => {
const { N, useStore, ref, Box, Receipt, T, Chip, Log, now } = window.ESB;
const { useState } = React;
const CATS = [['schedule', 'Class schedule'], ['grades', 'Final grades'], ['holds', 'Holds that block registration'], ['balance', 'Account balance'], ['aid', 'Financial aid status'], ['deadlines', 'Key dates and deadlines']];
const NEVER = ['Counseling and health records', 'Disciplinary records', 'Messages with advisors', 'Accessibility accommodations', 'Location or attendance by class'];
const FAM0 = { st: 'sent', code: 'FAM-4821', rel: null, cats: {}, until: null, comms: { deadlines: 'email', balance: 'email', holds: 'off', grades: 'off' }, quiet: true, tickets: [], log: [['Oct 1 · 09:12', 'Invitation sent to dana.chen@example.com', 'Maya Chen (student)']] };
const useFam = () => useStore('family', FAM0);
const add = (F, what, who) => [...F.log, [now(), what, who]];
const STU = 'Maya Chen (student)', GUA = 'Dana Chen (guardian)';
const ST = { sent: ['Invitation sent', 'warn'], accepted: ['Accepted · waiting for student', 'warn'], active: ['Active', 'ok'], declined: ['Declined', 'bad'], revoked: ['Revoked', 'bad'], expired: ['Expired', 'bad'] };
const Status = ({ F }) => { const live = F.st === 'active' && F.until && F.until < new Date().toISOString().slice(0, 10) ? 'expired' : F.st; const [l, t] = ST[live]; return <Chip tone={t}>{l}</Chip>; };
const isLive = (F) => F.st === 'active' && !(F.until && F.until < new Date().toISOString().slice(0, 10));
const Gate = ({ need, F, children }) => need(F) ? children : <N.Notice head="Not available yet">This step needs an active, confirmed connection. Current status: <Status F={F} />. Start from Invitation acceptance.</N.Notice>;

function InvitationAcceptance() {
  const [F, setF, reset] = useFam(); const [code, setCode] = useState(''); const [ok, setOk] = useState(false); const [rc, setRc] = useState(null);
  const bad = code && code.trim().toUpperCase() !== F.code;
  return <div className="two"><div className="stack"><Box title="Invitation from Maya Chen" aside={<Status F={F} />}><p style={{ margin: 0 }}>Maya invited you to see parts of her Semester record. You'll only see what she chooses to share, and she can stop sharing at any time.</p>
    {F.st === 'sent' ? <><N.TextField label="Invitation code (from the email)" value={code} onChange={(e) => setCode(e.target.value)} placeholder="FAM-0000" error={bad ? 'That code doesn’t match this invitation' : undefined} />
      <label className="row" style={{ fontSize: 13 }}><input type="checkbox" checked={ok} onChange={(e) => setOk(e.target.checked)} /> I understand Maya controls what is shared and can revoke access.</label>
      <div className="row"><N.Button variant="primary" disabled={!ok || !code || bad} disabledReason="Enter the code and confirm you understand" onClick={() => { setF({ ...F, st: 'accepted', log: add(F, 'Invitation accepted', GUA) }); setRc({ head: 'Accepted', body: 'Maya will be asked to confirm your relationship', ref: ref('INV') }); }}>Accept invitation</N.Button><N.Button onClick={() => setF({ ...F, st: 'declined', log: add(F, 'Invitation declined', GUA) })}>Decline</N.Button></div><span className="muted">Sample code: {F.code}</span></>
      : <p className="muted" style={{ margin: 0 }}>This invitation has been handled. Next: {F.st === 'accepted' ? 'Maya confirms the relationship.' : F.st === 'active' ? 'see Shared categories.' : 'Maya can send a new invitation.'}</p>}</Box><Receipt r={rc} /></div>
    <aside className="stack"><Box title="What happens next">{['You accept with the code', 'Maya confirms how you’re related', 'Maya picks categories and an end date', 'You see only those categories'].map((s, i) => <div key={i} style={{ fontSize: 13 }}>{i + 1}. {s}</div>)}</Box><button className="link-quiet" style={{ fontSize: 12 }} onClick={() => { reset(); setRc(null); setCode(''); setOk(false); }}>Reset sample data</button></aside></div>;
}

function RelationshipConfirmation() {
  const [F, setF] = useFam(); const [rel, setRel] = useState(F.rel || 'parent'); const [rc, setRc] = useState(null);
  return <div className="two"><div className="stack"><Gate F={F} need={(x) => x.st !== 'sent' && x.st !== 'declined'}><Box title="Student view · confirm Dana Chen" aside={<Status F={F} />}><p style={{ margin: 0 }}>dana.chen@example.com accepted your invitation. Confirm who this is before anything is shared.</p>
    <N.Segmented label="Relationship" value={rel} onChange={setRel} options={[{ value: 'parent', label: 'Parent' }, { value: 'guardian', label: 'Legal guardian' }, { value: 'other', label: 'Other family' }, { value: 'sponsor', label: 'Sponsor / payer' }]} />
    {F.st === 'accepted' ? <div className="row"><N.Button variant="primary" onClick={() => { setF({ ...F, st: 'active', rel, log: add(F, 'Relationship confirmed as ' + rel, STU) }); setRc({ head: 'Confirmed', body: 'Nothing is shared yet — pick categories next', ref: ref('REL') }); }}>Confirm relationship</N.Button><N.Button onClick={() => setF({ ...F, st: 'declined', log: add(F, 'Relationship not confirmed', STU) })}>This isn’t right</N.Button></div>
      : <p className="muted" style={{ margin: 0 }}>Confirmed as <b>{F.rel}</b>.</p>}</Box></Gate><Receipt r={rc} /></div>
    <aside className="stack"><Box title="Why we ask">You're over 18, so you decide. Confirming the relationship doesn't share anything by itself.</Box></aside></div>;
}

function SharedCategories() {
  const [F, setF] = useFam(); const [d, setD] = useState(F.cats); const [rc, setRc] = useState(null);
  const changed = CATS.filter(([k]) => !!d[k] !== !!F.cats[k]);
  return <div className="two"><div className="stack"><Gate F={F} need={isLive}><Box title="What Dana can see" aside={<Chip>{CATS.filter(([k]) => F.cats[k]).length} of {CATS.length} shared</Chip>}>{CATS.map(([k, l]) => <label key={k} className="row" style={{ justifyContent: 'space-between', fontSize: 14, padding: '4px 0', borderBottom: '1px solid var(--border-subtle)' }}><span>{l}</span><input type="checkbox" checked={!!d[k]} onChange={(e) => setD({ ...d, [k]: e.target.checked })} /></label>)}
    <div className="row"><N.Button variant="primary" disabled={!changed.length} disabledReason="No changes" onClick={() => { setF({ ...F, cats: d, log: add(F, 'Sharing changed: ' + changed.map(([k, l]) => (d[k] ? '+' : '−') + l).join(', '), STU) }); setRc({ head: 'Saved', body: changed.length + ' change(s) · Dana is notified', ref: ref('SHR') }); }}>Save sharing</N.Button>{changed.length > 0 && <N.Button onClick={() => setD(F.cats)}>Discard</N.Button>}</div></Box></Gate><Receipt r={rc} /></div>
    <aside className="stack"><Box title="Never shared">{NEVER.map((x) => <div key={x} style={{ fontSize: 13 }}>✕ {x}</div>)}<span className="muted">These can't be turned on here. Some require a separate signed release.</span></Box></aside></div>;
}

function TimeLimitedAccess() {
  const [F, setF] = useFam(); const [conf, setConf] = useState(false); const [rc, setRc] = useState(null);
  const plus = (days) => { const x = new Date(); x.setDate(x.getDate() + days); return x.toISOString().slice(0, 10); };
  const set = (u, label) => { setF({ ...F, until: u, log: add(F, 'Access end set: ' + (u || 'no end date'), STU) }); setRc({ head: 'Updated', body: label, ref: ref('TTL') }); };
  return <div className="two"><div className="stack"><Gate F={F} need={(x) => x.st === 'active'}><Box title="How long Dana has access" aside={<Status F={F} />}><div style={{ fontSize: 22 }}>{F.until ? 'Until ' + F.until : 'No end date'}</div>
    <div className="row">{[[30, '30 days'], [120, 'End of term'], [365, '1 year']].map(([n, l]) => <N.Button key={n} onClick={() => set(plus(n), 'Access ends ' + plus(n))}>{l}</N.Button>)}<N.Button onClick={() => set(plus(-1), 'Set to yesterday to preview expiry')}>Preview expired</N.Button><N.Button onClick={() => set(null, 'No end date')}>No end date</N.Button></div>
    <N.TextField label="Custom end date" type="date" value={F.until || ''} onChange={(e) => set(e.target.value || null, 'Custom end date')} /></Box>
    <Box title="Stop sharing now" tone="bad">{!conf ? <N.Button onClick={() => setConf(true)}>Revoke access</N.Button> : <N.Notice head="Revoke Dana’s access?">Dana is signed out of your record immediately. The audit trail is kept.<div className="row" style={{ marginTop: 8 }}><N.Button variant="primary" onClick={() => { setF({ ...F, st: 'revoked', log: add(F, 'Access revoked', STU) }); setConf(false); setRc({ head: 'Sharing ended at ' + now(), body: 'New access through this permission is blocked. Cleanup is still pending in 1 connected service (billing). Copies already received can’t be recalled here', ref: ref('REV') }); }}>Revoke</N.Button><N.Button onClick={() => setConf(false)}>Cancel</N.Button></div></N.Notice>}</Box></Gate><Receipt r={rc} /></div>
    <aside className="stack"><Box title="On the end date">Access stops automatically. Dana gets one notice 7 days before. Nothing is deleted from your record.</Box></aside></div>;
}

function BillingSupportHandoff() {
  const [F, setF] = useFam(); const [topic, setTopic] = useState('balance'); const [msg, setMsg] = useState(''); const [rc, setRc] = useState(null);
  const seesBal = isLive(F) && F.cats.balance;
  return <div className="two"><div className="stack"><Gate F={F} need={isLive}><Box title="Guardian view · Billing">{seesBal ? <><div className="row" style={{ justifyContent: 'space-between' }}><span>Spring 2027 balance</span><b style={{ fontSize: 22 }}>$2,140.00</b></div><span className="muted">Due Jan 4 · Student Accounts · updated today</span></> : <N.Notice head="Balance not shared">Maya hasn't shared her account balance. You can still contact Student Accounts with general questions.</N.Notice>}<span className="muted">Paying is a separate permission managed by Student Accounts — seeing a balance doesn't let you pay or change anything.</span></Box>
    <Box title="Ask Student Accounts"><N.Segmented label="Topic" value={topic} onChange={setTopic} options={[{ value: 'balance', label: 'Balance' }, { value: 'payer', label: 'Become authorized payer' }, { value: 'plan', label: 'Payment plan' }, { value: 'other', label: 'Other' }]} /><N.TextField label="Message" value={msg} onChange={(e) => setMsg(e.target.value)} placeholder="What do you need help with?" />
      <N.Button variant="primary" disabled={msg.trim().length < 5} disabledReason="Write a short message" onClick={() => { const r = ref('SA'); setF({ ...F, tickets: [...F.tickets, { r, topic, msg, st: 'Received' }], log: add(F, 'Handoff to Student Accounts · ' + topic, GUA) }); setMsg(''); setRc({ head: 'Sent to Student Accounts', body: 'Reply within 2 business days by email', ref: r }); }}>Send</N.Button></Box></Gate><Receipt r={rc} /></div>
    <aside className="stack"><Box title="Your requests"><T head={['Ref', 'Topic', 'Status']} rows={F.tickets.map((t) => [<span style={{ fontFamily: 'var(--font-mono)' }}>{t.r}</span>, t.topic, t.st])} empty="No requests yet." /></Box></aside></div>;
}

const ARTS = [['FERPA basics for families', 'Privacy', 'Why your student controls access once they are in college, and what schools may share without consent.'], ['Reading a tuition bill', 'Billing', 'Charges, credits, aid that is pending versus disbursed, and due dates.'], ['Becoming an authorized payer', 'Billing', 'How Student Accounts sets up payer access, separate from viewing.'], ['Add/drop and withdrawal dates', 'Academics', 'What each deadline means for grades and refunds.'], ['Holds explained', 'Academics', 'Common hold types and who clears them.'], ['Supporting without hovering', 'Wellbeing', 'Conversation starters and campus resources your student can use directly.'], ['Emergency contacts', 'Safety', 'How emergency contacts differ from shared access.']];
function ResourceCenter() {
  const [q, setQ] = useState(''); const [t, setT] = useState('All'); const [open, setOpen] = useState(0); const tops = ['All', ...new Set(ARTS.map((a) => a[1]))];
  const list = ARTS.map((a, i) => [a, i]).filter(([a]) => (t === 'All' || a[1] === t) && (!q || (a[0] + a[2]).toLowerCase().includes(q.toLowerCase())));
  const A = ARTS[open];
  return <div className="two"><div className="stack"><N.TextField label="Search guides" value={q} onChange={(e) => setQ(e.target.value)} placeholder="e.g. holds" /><div className="row">{tops.map((x) => <button key={x} className="chip" aria-pressed={t === x} onClick={() => setT(x)} style={{ cursor: 'pointer', fontWeight: t === x ? 600 : 400 }}>{x}</button>)}</div>
    <div className="list">{list.length ? list.map(([a, i]) => <button key={i} className="qi" onClick={() => setOpen(i)} style={{ all: 'unset', cursor: 'pointer', padding: '8px 4px', borderBottom: '1px solid var(--border-subtle)', fontWeight: open === i ? 600 : 400 }}>{a[0]} <span className="muted">· {a[1]}</span></button>) : <p className="muted">No guides match.</p>}</div></div>
    <aside className="stack"><Box title={A[1]}><b>{A[0]}</b><p style={{ margin: 0, fontSize: 14 }}>{A[2]}</p><span className="muted">Reviewed by Student Affairs · Sept 2026</span></Box></aside></div>;
}

function CommunicationPreferences() {
  const [F, setF] = useFam(); const [rc, setRc] = useState(null);
  const set = (k, v) => { setF({ ...F, comms: { ...F.comms, [k]: v }, log: add(F, 'Notice “' + k + '” → ' + v, GUA) }); setRc({ head: 'Saved', body: k + ': ' + v, ref: ref('COM') }); };
  const rows = [['deadlines', 'Key dates'], ['balance', 'Balance due reminders'], ['holds', 'New holds'], ['grades', 'Final grades posted']];
  const catFor = { deadlines: 'deadlines', balance: 'balance', holds: 'holds', grades: 'grades' };
  return <div className="two"><div className="stack"><Gate F={F} need={isLive}><Box title="Guardian notices">{rows.map(([k, l]) => { const shared = !!F.cats[catFor[k]]; return <div key={k} className="row" style={{ justifyContent: 'space-between', borderBottom: '1px solid var(--border-subtle)', paddingBottom: 8 }}><span style={{ fontSize: 14 }}>{l}{!shared && <span className="muted"> · not shared by Maya</span>}</span>{shared ? <N.Segmented label={l} value={F.comms[k]} onChange={(v) => set(k, v)} options={[{ value: 'email', label: 'Email' }, { value: 'text', label: 'Text' }, { value: 'off', label: 'Off' }]} /> : <Chip>Unavailable</Chip>}</div>; })}
    <label className="row" style={{ fontSize: 13 }}><input type="checkbox" checked={F.quiet} onChange={(e) => setF({ ...F, quiet: e.target.checked, log: add(F, 'Quiet hours ' + (e.target.checked ? 'on' : 'off'), GUA) })} /> Quiet hours 9pm–8am (texts wait until morning)</label></Box></Gate><Receipt r={rc} /></div>
    <aside className="stack"><Box title="Good to know">You only get notices for categories Maya shares. If she stops sharing one, its notices stop too. Emergency alerts follow your emergency-contact setting, not this page.</Box></aside></div>;
}

function PrivacySupportInformation() {
  const [F] = useFam(); const [v, setV] = useState('guardian');
  const shared = CATS.filter(([k]) => isLive(F) && F.cats[k]).map((c) => c[1]);
  return <div className="two"><div className="stack"><N.Segmented label="Read as" value={v} onChange={setV} options={[{ value: 'guardian', label: 'Guardian' }, { value: 'student', label: 'Student' }]} />
    {v === 'guardian' ? <Box title="Your access, in plain words"><p style={{ margin: 0 }}>You can see: {shared.length ? <b>{shared.join(', ')}</b> : <b>nothing right now</b>}.</p><p style={{ margin: 0 }}>You can't change Maya's record, register her for classes, or see advising, health or counseling information.</p><p style={{ margin: 0 }}>Questions about privacy go to the Registrar's office (registrar@example.edu). Billing questions go to Student Accounts.</p></Box>
      : <Box title="Your rights"><p style={{ margin: 0 }}>You decide who sees your education record. You can review every view and change to sharing in Audit retained, change categories any time, and revoke at once.</p><p style={{ margin: 0 }}>The school may still share some information without consent in limited cases (for example a health or safety emergency). Those disclosures are recorded.</p></Box>}</div>
    <aside className="stack"><Box title="Connection"><div className="row" style={{ justifyContent: 'space-between' }}><span>Status</span><Status F={F} /></div><div className="row" style={{ justifyContent: 'space-between', fontSize: 13 }}><span>Relationship</span><b>{F.rel || '—'}</b></div><div className="row" style={{ justifyContent: 'space-between', fontSize: 13 }}><span>Ends</span><b>{F.until || 'No end date'}</b></div></Box></aside></div>;
}

function AuditRetained() {
  const [F] = useFam(); const [who, setWho] = useState('all');
  const rows = F.log.filter((l) => who === 'all' || (who === 'student' ? l[2] === STU : l[2] === GUA)).slice().reverse();
  const csv = () => { const s = 'time,event,actor\n' + F.log.map((l) => l.map((x) => '"' + String(x).replace(/"/g, '""') + '"').join(',')).join('\n'); const a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([s], { type: 'text/csv' })); a.download = 'family-access-audit.csv'; a.click(); };
  return <div className="two"><div className="stack"><div className="row" style={{ justifyContent: 'space-between' }}><N.Segmented label="Actor" value={who} onChange={setWho} options={[{ value: 'all', label: 'Everyone' }, { value: 'student', label: 'Maya' }, { value: 'guardian', label: 'Dana' }]} /><N.Button onClick={csv}>Download CSV</N.Button></div>
    <T head={['When', 'Event', 'By']} rows={rows.map((l) => [l[0], l[1], l[2]])} empty="No events for this actor." /></div>
    <aside className="stack"><Box title="Retention">Every invitation, confirmation, sharing change, request and revocation is kept for 7 years after access ends, even if the connection is removed. Entries can't be edited or deleted.</Box><Box title="Entries"><b style={{ fontSize: 22 }}>{F.log.length}</b></Box></aside></div>;
}

Object.assign(window.EVERY_BESPOKE, { 'I:Invitation acceptance': InvitationAcceptance, 'I:Relationship confirmation': RelationshipConfirmation, 'I:Shared categories': SharedCategories, 'I:Time-limited access': TimeLimitedAccess, 'I:Billing/support handoff': BillingSupportHandoff, 'I:Resource center': ResourceCenter, 'I:Communication preferences': CommunicationPreferences, 'I:Privacy/support information': PrivacySupportInformation, 'I:Audit retained': AuditRetained });
})();
