// Bespoke Student accounts screens (group F), batch 1: student ledger views + payment. Shared ledger store window.ESF ('sem-b:acct'). Sample data only.
(() => {
const { N, useStore, ref, Box, Receipt, T, Chip, Bar, Log, now } = window.ESB;
const { useState } = React;
const STU = 'Jordan Okafor (student)';
const L = (id, date, kind, desc, amt, st = 'Posted') => ({ id, date, kind, desc, amt, st });
const ACCT0 = {
  ledger: [L('C-101', '2026-07-15', 'charge', 'Tuition · Fall 2026 (15 cr)', 9450), L('C-102', '2026-07-15', 'charge', 'Student activity fee', 180), L('C-103', '2026-07-15', 'charge', 'Housing · Hall B double', 4200), L('C-104', '2026-08-30', 'charge', 'CHEM 2210 lab fee', 95), L('C-105', '2026-09-20', 'charge', 'Library fine', 25),
    L('A-201', '2026-08-20', 'aid', 'Pell Grant (disbursed)', 3698), L('A-202', '2026-08-20', 'aid', 'Founders Scholarship', 4000), L('A-203', '2026-09-28', 'aid', 'Direct Subsidized Loan (pending)', 2750, 'Pending'), L('K-301', '2026-09-05', 'credit', 'Meal plan downgrade adjustment', 310),
    L('P-401', '2026-08-15', 'payment', 'Card payment · ••4421', 1500), L('P-402', '2026-09-15', 'payment', 'Plan installment 1 of 4', 640)],
  plan: { on: true, n: 4, each: 640, paid: 1, dates: ['2026-09-15', '2026-10-15', '2026-11-15', '2026-12-15'] },
  refunds: [], pay: [], requests: [{ id: 'RQ-11', who: 'S. Lee (Accounts)', kind: 'credit', desc: 'Waive library fine (returned in grace period)', amt: 25, st: 'Pending approval', by: 'S. Lee (Accounts)' }],
  supports: [], disputes: [{ id: 'DS-7', sid: 'S-0533', what: 'Card chargeback · $640', st: 'Evidence due', due: '2026-10-14' }], dunning: { on: true, paused: [] },
  recon: { st: 'Not run', diffs: [] }, closed: [], budget: { income: 1200, items: [['Rent / housing', 0], ['Food', 350], ['Books & supplies', 60], ['Transport', 80], ['Phone', 45], ['Personal', 120]] },
  log: []
};
const useAcct = () => useStore('acct', ACCT0);
const $ = (n) => (n < 0 ? '−' : '') + '$' + Math.abs(n).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const sum = (A, kinds, st) => A.ledger.filter((e) => kinds.includes(e.kind) && (!st || e.st === st)).reduce((x, e) => x + e.amt, 0);
const bal = (A) => sum(A, ['charge', 'refund']) - sum(A, ['credit', 'payment', 'aid'], 'Posted');
const pending = (A) => sum(A, ['aid'], 'Pending');
const audit = (A, what, who = STU) => [...A.log, [now(), what + ' · ' + who]];
window.ESF = { STU, ACCT0, useAcct, $, sum, bal, pending, audit };

function AccountSummary() {
  const [A, , reset] = useAcct(); const b = bal(A); const p = pending(A); const next = A.plan.on ? A.plan.dates[A.plan.paid] : null;
  return <div className="stack"><div className="tiles"><N.MetricTile label="Balance owed now" value={$(b)} source="official" updated="Ledger · live" /><N.MetricTile label="After pending aid" value={$(b - p)} source="estimated" updated={'Includes ' + $(p) + ' pending'} /><N.MetricTile label="Next payment" value={next ? $(A.plan.each) : '—'} source="official" updated={next ? 'Due ' + next : 'No plan'} /></div>
    <div className="two"><div className="stack"><T head={['Date', 'Item', 'Amount', 'Status']} rows={A.ledger.slice().sort((a, b2) => b2.date.localeCompare(a.date)).slice(0, 8).map((e) => [e.date, e.desc, <span style={{ fontVariantNumeric: 'tabular-nums' }}>{['charge', 'refund'].includes(e.kind) ? $(e.amt) : $(-e.amt)}</span>, e.st === 'Pending' ? <Chip tone="warn">Pending</Chip> : e.st])} /></div>
      <aside className="stack"><Box title="Read this first">Pending aid isn't money yet — it lowers your balance only when it's disbursed. Holds are placed if more than {$(200)} is 30 days late.</Box><button className="link-quiet" style={{ fontSize: 12 }} onClick={reset}>Reset sample data</button></aside></div></div>;
}

function Charges() {
  const [A] = useAcct(); const [sel, setSel] = useState(0); const C = A.ledger.filter((e) => e.kind === 'charge'); const c = C[sel];
  return <div className="two"><T head={['Date', 'Charge', 'Amount']} rows={C.map((e) => [e.date, e.desc, $(e.amt)])} onRow={setSel} sel={sel} />
    <aside className="stack">{c && <Box title={c.desc}><div className="row" style={{ justifyContent: 'space-between' }}><span>Amount</span><b>{$(c.amt)}</b></div><span className="muted">Posted {c.date} · ref {c.id}</span><span style={{ fontSize: 13 }}>{/Tuition/.test(c.desc) ? 'Flat rate 12–18 credits. Dropping below 12 after census doesn’t lower it.' : /Housing/.test(c.desc) ? 'Set by Residence Life. Questions go to housing@example.edu.' : 'Departmental charge. Ask Student Accounts if this looks wrong.'}</span><span className="muted">Think it's wrong? Open a request in Financial support request.</span></Box>}<Box title="Total charges"><b>{$(C.reduce((x, e) => x + e.amt, 0))}</b></Box></aside></div>;
}

function Credits() {
  const [A] = useAcct(); const C = A.ledger.filter((e) => ['credit', 'aid', 'payment'].includes(e.kind));
  const g = [['aid', 'Financial aid'], ['credit', 'Adjustments'], ['payment', 'Payments']];
  return <div className="two"><div className="stack">{g.map(([k, l]) => <Box key={k} title={l}><T head={['Date', 'Item', 'Amount', 'Status']} rows={C.filter((e) => e.kind === k).map((e) => [e.date, e.desc, $(e.amt), e.st === 'Pending' ? <Chip tone="warn">Pending</Chip> : <Chip tone="ok">Posted</Chip>])} empty="None." /></Box>)}</div>
    <aside className="stack"><Box title="Totals"><div className="row" style={{ justifyContent: 'space-between' }}><span>Posted</span><b>{$(sum(A, ['credit', 'aid', 'payment'], 'Posted'))}</b></div><div className="row" style={{ justifyContent: 'space-between' }}><span>Pending</span><b>{$(pending(A))}</b></div></Box></aside></div>;
}

function Installments() {
  const [A, setA] = useAcct(); const [n, setN] = useState(4); const [rc, setRc] = useState(null); const P = A.plan; const b = bal(A);
  const enroll = () => { const each = Math.ceil((b / n) * 100) / 100; setA({ ...A, plan: { on: true, n, each, paid: 0, dates: Array.from({ length: n }, (_, i) => '2026-' + String(10 + i).padStart(2, '0') + '-15').map((d) => d > '2026-12-15' ? '2026-12-15' : d) }, log: audit(A, 'Enrolled in ' + n + '-payment plan') }); setRc({ head: 'Enrolled', body: n + ' payments of ' + $(each) + ' · $35 plan fee waived for sample', ref: ref('PLN') }); };
  return <div className="two"><div className="stack">{P.on ? <Box title={'Payment plan · ' + P.paid + ' of ' + P.n + ' paid'}><Bar v={P.paid} max={P.n} label="Progress" right={$(P.each * P.paid) + ' of ' + $(P.each * P.n)} />{P.dates.map((d, i) => <div key={d + i} className="row" style={{ justifyContent: 'space-between', fontSize: 13 }}><span>Installment {i + 1} · {d}</span>{i < P.paid ? <Chip tone="ok">Paid</Chip> : i === P.paid ? <Chip tone="warn">Next</Chip> : <span className="muted">{$(P.each)}</span>}</div>)}</Box>
      : <Box title="Set up a plan"><N.Segmented label="Payments" value={String(n)} onChange={(v) => setN(+v)} options={['2', '3', '4'].map((x) => ({ value: x, label: x }))} /><span>{n} payments of about <b>{$(b / n)}</b></span><N.Button variant="primary" disabled={b <= 0} disabledReason="Nothing owed" onClick={enroll}>Enroll</N.Button></Box>}<Receipt r={rc} /></div>
    <aside className="stack"><Box title="Rules">Plans end by Dec 15. A missed installment gets a reminder, then a hold after 30 days. Staff review changes in Payment plan review.</Box></aside></div>;
}

function DueDates() {
  const [A] = useAcct(); const today = '2026-10-08';
  const items = [...(A.plan.on ? A.plan.dates.map((d, i) => [d, 'Installment ' + (i + 1), $(A.plan.each), i < A.plan.paid]) : [['2026-08-20', 'Full balance due', $(bal(A)), false]]), ['2026-10-31', 'Loan entrance counseling', '—', false], ['2026-11-02', 'Spring registration (no past-due balance)', '—', false]].sort((a, b) => a[0].localeCompare(b[0]));
  return <div className="two"><T head={['Date', 'What', 'Amount', '']} rows={items.map(([d, w, a, done]) => [d, w, a, done ? <Chip tone="ok">Done</Chip> : d < today ? <Chip tone="bad">Past due</Chip> : <Chip>{Math.round((new Date(d) - new Date(today)) / 864e5)} days</Chip>])} /><aside className="stack"><Box title="Reminders">Email 7 days and 1 day before. Change channels in Notification settings.</Box></aside></div>;
}

function Statements() {
  const [A] = useAcct(); const months = ['2026-07', '2026-08', '2026-09']; const [m, setM] = useState('2026-09');
  const upto = A.ledger.filter((e) => e.date.slice(0, 7) <= m && e.st === 'Posted'); const inM = upto.filter((e) => e.date.startsWith(m));
  const b = (xs) => xs.reduce((x, e) => x + (['charge', 'refund'].includes(e.kind) ? e.amt : -e.amt), 0);
  const dl = () => { const s = 'date,ref,item,amount\n' + inM.map((e) => [e.date, e.id, '"' + e.desc + '"', ['charge', 'refund'].includes(e.kind) ? e.amt : -e.amt].join(',')).join('\n'); const a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([s], { type: 'text/csv' })); a.download = 'statement-' + m + '.csv'; a.click(); };
  return <div className="two"><div className="stack"><N.Segmented label="Statement" value={m} onChange={setM} options={months.map((x) => ({ value: x, label: x }))} /><T head={['Date', 'Item', 'Amount']} rows={inM.map((e) => [e.date, e.desc, ['charge', 'refund'].includes(e.kind) ? $(e.amt) : $(-e.amt)])} empty="No activity this month." /></div>
    <aside className="stack"><Box title={'Statement ' + m}><div className="row" style={{ justifyContent: 'space-between' }}><span>Opening</span><b>{$(b(upto.filter((e) => e.date.slice(0, 7) < m)))}</b></div><div className="row" style={{ justifyContent: 'space-between' }}><span>Activity</span><b>{$(b(inM))}</b></div><div className="row" style={{ justifyContent: 'space-between' }}><span>Closing</span><b>{$(b(upto))}</b></div><N.Button onClick={dl}>Download CSV</N.Button></Box></aside></div>;
}

function PaymentProviderHandoff() {
  const [A, setA] = useAcct(); const [amt, setAmt] = useState(String(A.plan.on ? A.plan.each : 500)); const [sim, setSim] = useState('ok'); const [st, setSt] = useState(null); const [rc, setRc] = useState(null);
  const v = Number(amt); const okAmt = v >= 1 && v <= bal(A);
  const go = () => { const id = ref('PAY'); setSt('redirect'); setTimeout(() => { if (sim === 'ok') { setA({ ...A, ledger: [...A.ledger, L('P-' + id, '2026-10-08', 'payment', 'Card payment · provider ' + id, v)], plan: A.plan.on ? { ...A.plan, paid: Math.min(A.plan.n, A.plan.paid + (v >= A.plan.each ? 1 : 0)) } : A.plan, pay: [...A.pay, { id, v, st: 'Confirmed' }], log: audit(A, 'Payment ' + $(v) + ' confirmed by provider') }); setRc({ head: 'Payment confirmed', body: $(v) + ' posted to your account', ref: id }); } else if (sim === 'decline') { setRc({ head: 'Card declined', body: 'Nothing was charged. Try another card.', ref: id }); } else { setA({ ...A, pay: [...A.pay, { id, v, st: 'Outcome unknown' }], log: audit(A, 'Payment ' + $(v) + ' outcome unknown') }); setRc({ head: 'We’re checking with the provider', body: 'Don’t pay again. It resolves in Staff: Reconciliation', ref: id }); } setSt(null); }, 900); };
  return <div className="two"><div className="stack"><Box title="Pay online"><N.TextField label="Amount (USD)" value={amt} onChange={(e) => setAmt(e.target.value)} error={amt && !okAmt ? 'Between $1 and your balance ' + $(bal(A)) : undefined} /><N.Segmented label="Sample provider result" value={sim} onChange={setSim} options={[{ value: 'ok', label: 'Approved' }, { value: 'decline', label: 'Declined' }, { value: 'timeout', label: 'Timeout' }]} /><N.Button variant="primary" disabled={!okAmt || !!st || A.pay.some((p) => p.st === 'Outcome unknown')} disabledReason={A.pay.some((p) => p.st === 'Outcome unknown') ? 'A payment is still being checked' : 'Enter a valid amount'} onClick={go}>{st ? 'Opening secure payment page…' : 'Continue to secure payment'}</N.Button><span className="muted">Card details are entered on the provider's page. Semester never sees them.</span></Box><Receipt r={rc} /></div>
    <aside className="stack"><Box title="Your payments">{A.pay.length ? A.pay.map((p) => <div key={p.id} className="row" style={{ justifyContent: 'space-between', fontSize: 13 }}><span>{$(p.v)}</span><Chip tone={p.st === 'Confirmed' ? 'ok' : 'warn'}>{p.st}</Chip></div>) : <span className="muted">None this session.</span>}</Box></aside></div>;
}

function RefundStatus() {
  const [A, setA] = useAcct(); const b = bal(A); const credit = -b; const [rc, setRc] = useState(null); const [m, setM] = useState('direct');
  const steps = ['Requested', 'Approved', 'Sent', 'Received'];
  return <div className="two"><div className="stack"><Box title="Credit balance">{credit > 0 ? <><b style={{ fontSize: 22 }}>{$(credit)}</b><N.Segmented label="Send to" value={m} onChange={setM} options={[{ value: 'direct', label: 'Direct deposit' }, { value: 'check', label: 'Mailed check' }]} /><N.Button variant="primary" disabled={A.refunds.some((r) => r.st !== 'Received')} disabledReason="A refund is already in progress" onClick={() => { const id = ref('RF'); setA({ ...A, refunds: [...A.refunds, { id, amt: credit, m, st: 'Requested' }], log: audit(A, 'Refund requested ' + $(credit)) }); setRc({ head: 'Requested', body: 'Staff review within 3 business days', ref: id }); }}>Request refund</N.Button></> : <span className="muted">You owe {$(b)}, so there's nothing to refund. Refunds appear when aid or payments exceed charges.</span>}</Box>
    {A.refunds.map((r) => <Box key={r.id} title={r.id + ' · ' + $(r.amt)}><div className="row" style={{ gap: 4 }}>{steps.map((s, i) => <span key={s} style={{ fontSize: 11, padding: '3px 8px', borderRadius: 3, background: i <= steps.indexOf(r.st) ? 'var(--action-primary)' : 'var(--surface-raised)', color: i <= steps.indexOf(r.st) ? 'var(--text-on-action, #fff)' : 'var(--text-secondary)' }}>{s}</span>)}{r.st === 'Rejected' && <Chip tone="bad">Rejected</Chip>}</div></Box>)}<Receipt r={rc} /></div>
    <aside className="stack"><Box title="Tip">Pending loans can create a credit once disbursed. Try Staff: Refund review to approve a request.</Box></aside></div>;
}

Object.assign(window.EVERY_BESPOKE, { 'F:Account summary': AccountSummary, 'F:Charges': Charges, 'F:Credits': Credits, 'F:Installments': Installments, 'F:Due dates': DueDates, 'F:Statements': Statements, 'F:Payment provider handoff': PaymentProviderHandoff, 'F:Refund status': RefundStatus });
})();
