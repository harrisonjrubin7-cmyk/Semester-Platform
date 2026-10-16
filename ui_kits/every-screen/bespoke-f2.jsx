// Bespoke Student accounts screens (group F), batch 2: aid, budgeting, support, staff queues. Uses window.ESF. Sample data only.
(() => {
const { N, ref, Box, Receipt, T, Chip, Bar, now } = window.ESB;
const { STU, useAcct, $, bal, pending, audit } = window.ESF;
const { useState } = React;
const STAFF = 'S. Lee (Accounts)';

function ScholarshipView() {
  const [A] = useAcct(); const S = [['Founders Scholarship', 4000, 'Renewable · keep GPA ≥ 3.0 and 30 credits/year', 2.61 >= 3.0], ['Pell Grant', 3698, 'Federal · full-time enrollment', true], ['Biology Dept. Award', 1000, 'Apply by Feb 1 · sophomores in good standing', null]];
  return <div className="two"><div className="stack">{S.map(([n, a, r, ok]) => <Box key={n} title={n} aside={ok === null ? <Chip>Open to apply</Chip> : ok ? <Chip tone="ok">On track</Chip> : <Chip tone="bad">At risk</Chip>}><b>{$(a)} / year</b><span style={{ fontSize: 13 }}>{r}</span>{ok === false && <span className="muted">Current GPA 2.61. Renewal is checked after spring grades. Talk to your advisor about a success plan.</span>}</Box>)}</div><aside className="stack"><Box title="On your account">{$(A.ledger.filter((e) => e.kind === 'aid' && /Scholar|Pell/.test(e.desc)).reduce((x, e) => x + e.amt, 0))} applied this term.</Box></aside></div>;
}

function FinancialAidHandoff() {
  const [A, setA] = useAcct(); const [q, setQ] = useState('pending'); const [rc, setRc] = useState(null);
  const topics = { pending: 'Why is my loan still pending?', sap: 'Satisfactory academic progress', change: 'Change in family income', other: 'Something else' };
  return <div className="two"><div className="stack"><N.Notice head="This is the Financial Aid office’s decision">Student Accounts shows aid once posted. Awards, eligibility and appeals are handled by Financial Aid — we pass your question over with context so you don't repeat yourself.</N.Notice><Box title="What we'll send"><div style={{ fontSize: 13 }}>Balance {$(bal(A))} · pending aid {$(pending(A))} · term Fall 2026</div><N.Segmented label="Topic" value={q} onChange={setQ} options={Object.entries(topics).map(([v, l]) => ({ value: v, label: l }))} /><N.Button variant="primary" onClick={() => { const id = ref('FA'); setA({ ...A, supports: [...A.supports, { id, kind: 'Aid handoff', topic: topics[q], st: 'With Financial Aid' }], log: audit(A, 'Handoff to Financial Aid · ' + topics[q]) }); setRc({ head: 'Sent to Financial Aid', body: 'Reply in 3–5 business days', ref: id }); }}>Send to Financial Aid</N.Button></Box><Receipt r={rc} /></div>
    <aside className="stack"><Box title="Pending loan">{pending(A) > 0 ? 'Direct Subsidized Loan needs entrance counseling + master promissory note before it disburses.' : 'Nothing pending.'}</Box></aside></div>;
}

function BudgetPlanner() {
  const [A, setA] = useAcct(); const B = A.budget; const set = (p) => setA({ ...A, budget: { ...B, ...p } });
  const out = B.items.reduce((x, i) => x + Number(i[1] || 0), 0); const left = B.income - out;
  return <div className="two"><div className="stack"><Box title="Monthly money in"><N.TextField label="Income (job, family, refunds)" type="number" value={String(B.income)} onChange={(e) => set({ income: Number(e.target.value) || 0 })} /></Box><Box title="Monthly money out">{B.items.map(([l, v], i) => <N.TextField key={l} label={l} type="number" value={String(v)} onChange={(e) => set({ items: B.items.map((x, j) => (j === i ? [x[0], Number(e.target.value) || 0] : x)) })} />)}<span className="muted">Housing is billed to your account this term, so it starts at $0.</span></Box></div>
    <aside className="stack"><Box title="Each month" tone={left < 0 ? 'bad' : undefined}><b style={{ fontSize: 24 }}>{$(left)}</b><span className="muted">{left < 0 ? 'You’re short. See Emergency aid resources.' : 'Left after expenses.'}</span>{B.items.map(([l, v]) => <Bar key={l} label={l} v={Number(v)} max={Math.max(out, 1)} right={$(Number(v))} />)}</Box><span className="muted">Saved on this device only. Not shared with anyone.</span></aside></div>;
}

function CostPlanner() {
  const [cr, setCr] = useState(15); const [hous, setHous] = useState('hall'); const [meal, setMeal] = useState('14'); const [aid, setAid] = useState(7698);
  const tuition = cr >= 12 ? 9450 : cr * 790; const H = { hall: 4200, apt: 3600, home: 0 }[hous]; const M = { '19': 2900, '14': 2450, '0': 0 }[meal]; const total = tuition + 180 + H + M; const net = total - aid;
  return <div className="two"><div className="stack"><Box title="Spring 2027 assumptions"><N.TextField label="Credits" type="number" value={String(cr)} onChange={(e) => setCr(Math.max(0, Math.min(21, Number(e.target.value) || 0)))} />{cr < 12 && <N.Notice head="Below full-time">Tuition is per credit and some aid (Pell, scholarships) may drop.</N.Notice>}<N.Segmented label="Housing" value={hous} onChange={setHous} options={[{ value: 'hall', label: 'Residence hall' }, { value: 'apt', label: 'Campus apartment' }, { value: 'home', label: 'Off campus' }]} /><N.Segmented label="Meal plan" value={meal} onChange={setMeal} options={[{ value: '19', label: '19/week' }, { value: '14', label: '14/week' }, { value: '0', label: 'None' }]} /><N.TextField label="Expected aid" type="number" value={String(aid)} onChange={(e) => setAid(Number(e.target.value) || 0)} /></Box></div>
    <aside className="stack"><Box title="Estimate">{[['Tuition', tuition], ['Fees', 180], ['Housing', H], ['Meals', M], ['Aid', -aid]].map(([l, v]) => <div key={l} className="row" style={{ justifyContent: 'space-between', fontSize: 13 }}><span>{l}</span><span>{$(v)}</span></div>)}<div className="row" style={{ justifyContent: 'space-between', borderTop: '1px solid var(--border-subtle)', paddingTop: 6 }}><b>You pay</b><b>{$(net)}</b></div><span className="muted">Estimate only. Official charges post in December.</span></Box></aside></div>;
}

const EMG = [['Emergency grant', 'Up to $500, no repayment. Decision in 2 business days.', 'grant'], ['Short-term loan', 'Up to $1,000, 0% interest, repay within 90 days.', 'loan'], ['Food pantry', 'Student Union B12. No application.', null], ['Laptop loan', 'Library desk, semester-long.', null], ['Housing emergency', 'Dean of Students on-call: 555-0199.', null]];
function EmergencyAidResources() {
  const [sel, setSel] = useState(null);
  return <div className="two"><div className="stack">{EMG.map(([n, d, k]) => <Box key={n} title={n} aside={k ? <N.Button onClick={() => setSel(n)}>Apply</N.Button> : null}><span style={{ fontSize: 14 }}>{d}</span></Box>)}{sel && <N.Notice head={'Apply for ' + sel}>Continue in Financial support request — it's prefilled with this type.</N.Notice>}</div><aside className="stack"><Box title="Right now">If you're unsafe or have nowhere to sleep tonight, call 555-0199 any time.</Box></aside></div>;
}

function FinancialSupportRequest() {
  const [A, setA] = useAcct(); const [kind, setKind] = useState('Emergency grant'); const [amt, setAmt] = useState(''); const [why, setWhy] = useState(''); const [rc, setRc] = useState(null);
  const max = { 'Emergency grant': 500, 'Short-term loan': 1000, 'Charge dispute': 9999, 'Late fee waiver': 100 }[kind]; const v = Number(amt); const ok = v > 0 && v <= max && why.trim().length >= 10;
  return <div className="two"><div className="stack"><Box title="New request"><N.Segmented label="Type" value={kind} onChange={setKind} options={Object.keys({ 'Emergency grant': 1, 'Short-term loan': 1, 'Charge dispute': 1, 'Late fee waiver': 1 }).map((x) => ({ value: x, label: x }))} /><N.TextField label={'Amount (max ' + $(max) + ')'} value={amt} onChange={(e) => setAmt(e.target.value)} error={amt && (v <= 0 || v > max) ? 'Enter up to ' + $(max) : undefined} /><N.TextField label="What happened (at least 10 characters)" value={why} onChange={(e) => setWhy(e.target.value)} /><N.Button variant="primary" disabled={!ok} disabledReason="Complete the form" onClick={() => { const id = ref('SR'); setA({ ...A, supports: [...A.supports, { id, kind, amt: v, why, st: 'Submitted' }], log: audit(A, kind + ' request ' + $(v)) }); setRc({ head: 'Submitted', body: 'A staff member reviews it — see status here', ref: id }); setAmt(''); setWhy(''); }}>Submit</N.Button></Box><Receipt r={rc} /></div>
    <aside className="stack"><Box title="Your requests"><T head={['Ref', 'Type', 'Status']} rows={A.supports.map((s) => [<span style={{ fontFamily: 'var(--font-mono)' }}>{s.id}</span>, s.kind, <Chip tone={/Approved/.test(s.st) ? 'ok' : /Declined/.test(s.st) ? 'bad' : 'warn'}>{s.st}</Chip>])} empty="None yet." /></Box></aside></div>;
}

const ACCTS = [['S-0418', 'J. Okafor', 2400, 12, 'Plan'], ['S-0533', 'F. Ali', 640, 41, 'Chargeback'], ['S-0592', 'L. Chen', 0, 0, 'Clear'], ['S-0610', 'M. Diaz', 1890, 34, 'Hold placed'], ['S-0733', 'A. Patel', -420, 0, 'Credit'], ['S-0801', 'K. Brown', 310, 8, 'Reminder sent']];
function StaffAccountQueue() {
  const [f, setF] = useState('all'); const rows = ACCTS.filter((r) => f === 'all' || (f === 'late' ? r[3] >= 30 : f === 'credit' ? r[2] < 0 : r[4] === 'Chargeback'));
  return <div className="stack"><N.Segmented label="Show" value={f} onChange={setF} options={[{ value: 'all', label: 'All' }, { value: 'late', label: '30+ days late' }, { value: 'credit', label: 'Credit balances' }, { value: 'dispute', label: 'Disputes' }]} /><T head={['Student', 'Name', 'Balance', 'Days late', 'State']} rows={rows.map((r) => [<span style={{ fontFamily: 'var(--font-mono)' }}>{r[0]}</span>, r[1], $(r[2]), r[3] || '—', <Chip tone={r[3] >= 30 ? 'bad' : r[2] < 0 ? 'ok' : undefined}>{r[4]}</Chip>])} empty="No accounts match." /><span className="muted">Staff view · {STAFF}. Opening an account is logged.</span></div>;
}

function StaffRequestQueue() {
  const [A, setA] = useAcct(); const [rc, setRc] = useState(null); const q = A.supports.filter((s) => s.st === 'Submitted');
  const dec = (s, ok) => { const posted = ok && s.kind === 'Emergency grant'; setA({ ...A, supports: A.supports.map((x) => (x.id === s.id ? { ...x, st: ok ? 'Approved' : 'Declined' } : x)), ledger: posted ? [...A.ledger, { id: 'K-' + s.id, date: '2026-10-08', kind: 'credit', desc: 'Emergency grant ' + s.id, amt: s.amt, st: 'Posted' }] : A.ledger, log: audit(A, (ok ? 'Approved ' : 'Declined ') + s.id, STAFF) }); setRc({ head: ok ? 'Approved' : 'Declined', body: s.kind + (posted ? ' · ' + $(s.amt) + ' credited' : '') + ' · student notified', ref: s.id }); };
  return <div className="two"><div className="stack">{q.length ? q.map((s) => <Box key={s.id} title={s.kind + ' · ' + $(s.amt || 0)} aside={<span style={{ fontFamily: 'var(--font-mono)', fontSize: 12 }}>{s.id}</span>}><span style={{ fontSize: 14 }}>{s.why}</span><div className="row"><N.Button variant="primary" onClick={() => dec(s, true)}>Approve</N.Button><N.Button onClick={() => dec(s, false)}>Decline</N.Button></div></Box>) : <N.EmptyState title="No requests waiting" body="Submit one from Financial support request to see it here." />}<Receipt r={rc} /></div><aside className="stack"><Box title="Handled">{A.supports.filter((s) => s.st !== 'Submitted').map((s) => <div key={s.id} style={{ fontSize: 13 }}>{s.id} · {s.st}</div>)}</Box></aside></div>;
}

Object.assign(window.EVERY_BESPOKE, { 'F:Scholarship view': ScholarshipView, 'F:Financial-aid handoff': FinancialAidHandoff, 'F:Budget planner': BudgetPlanner, 'F:Cost planner': CostPlanner, 'F:Emergency aid resources': EmergencyAidResources, 'F:Financial support request': FinancialSupportRequest, 'F:Staff: Account queue': StaffAccountQueue, 'F:Staff: Request queue': StaffRequestQueue });
})();
