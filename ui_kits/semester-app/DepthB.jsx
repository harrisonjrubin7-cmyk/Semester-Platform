// Depth pass B: employer, club leader, financial operations, executive.
const DPB = window.SemesterDesignSystem_e9f3ba;
const DPBH = ({ k, t, s, children }) => <div className="ph"><div><div className="kicker">{k}</div><h1>{t}</h1>{s && <p className="muted">{s}</p>}</div>{children}</div>;
const DPBP = ({ s, tone }) => <span className="pill" data-tone={tone || { submitted: 'pending', 'pending review': 'pending', approved: 'confirmed', declined: 'blocked', interviewing: 'pending', offer: 'confirmed', new: 'pending', 'needs second approver': 'pending', issued: 'confirmed', active: 'confirmed', 'at risk': 'blocked', requested: 'pending', funded: 'confirmed' }[s] || 'pending'}>{s}</span>;
const dpbUpd = (rows, setRows, i, col, v) => setRows(rows.map((r, j) => (j === i ? r.map((c, k) => (k === col ? v : c)) : r)));

function DpbEmployerPost() {
  const [p, setP] = window.useLS('sem-dpb-post', { title: '', paid: true, learn: false, sup: false, st: 'draft' });
  const unpaidOk = p.paid || (p.learn && p.sup);
  return <div className="stack"><DPBH k="Employer · Ryman Health" t="Post an opportunity" s="Career Hub reviews every posting before students see it." />
    {p.st === 'draft' ? <div className="card"><label className="lbl" htmlFor="dpb-t">Role title</label><input id="dpb-t" className="ta" value={p.title} onChange={(e) => setP({ ...p, title: e.target.value })} /><DPB.Switch label="Paid role" checked={p.paid} onChange={(v) => setP({ ...p, paid: v })} />{!p.paid && <><p className="muted" style={{ margin: 0 }}>Unpaid internships must pass the primary-beneficiary test.</p><label className="row"><input type="checkbox" checked={p.learn} onChange={(e) => setP({ ...p, learn: e.target.checked })} />Tied to the student’s education, with training</label><label className="row"><input type="checkbox" checked={p.sup} onChange={(e) => setP({ ...p, sup: e.target.checked })} />Doesn’t replace paid staff; close supervision</label></>}<DPB.Button variant="primary" disabled={!p.title.trim() || !unpaidOk} onClick={() => setP({ ...p, st: 'pending review' })}>Submit for review</DPB.Button></div>
      : <div className="card"><div className="li"><span><b>{p.title}</b></span><DPBP s={p.st} /></div><p className="muted" style={{ margin: 0 }}>Career Hub usually reviews within 2 business days.</p><button className="lnk" style={{ justifySelf: 'start' }} onClick={() => setP({ ...p, st: 'draft', title: '' })}>Post another</button></div>}</div>;
}
function DpbEmployerApplicants() {
  const [rows, setRows] = window.useLS('sem-dpb-apps', [['Maya Chen', 'Chemistry ’29', 'Portfolio + résumé shared', 'new'], ['Leo Martins', 'Biomed. eng. ’28', 'Résumé shared', 'interviewing'], ['Grace Lin ’21', 'Alumna · policy', 'Profile shared', 'new']]);
  return <div className="stack"><DPBH k="Employer · Summer analyst intern" t="Applicants" s="You see only what each applicant chose to share. Grades and transcripts are never shared unless the student attaches them." />
    <div className="card">{rows.map((r, i) => <div key={r[0]} className="ri"><span><b>{r[0]}</b> · {r[1]}<div className="muted">{r[2]}</div></span><span className="row"><DPBP s={r[3]} />{r[3] === 'new' && <DPB.Button variant="secondary" onClick={() => dpbUpd(rows, setRows, i, 3, 'interviewing')}>Invite to interview</DPB.Button>}{r[3] === 'interviewing' && <DPB.Button variant="primary" onClick={() => dpbUpd(rows, setRows, i, 3, 'offer')}>Make offer</DPB.Button>}</span></div>)}</div></div>;
}

function DpbClubRoster() {
  const [apps, setApps] = window.useLS('sem-dpb-capps', [['Nia Brooks', 'Wants to join the outreach team', 'submitted'], ['Ken Ito', 'Transfer, pre-med', 'submitted']]);
  const [tr, setTr] = window.useLS('sem-dpb-trans', false);
  return <div className="stack"><DPBH k="Club leader · Pre-Health Society" t="Roster and officers" s="Officer roles carry permissions. When terms end, access moves to the new officer automatically." />
    <div className="grid2"><div className="card"><div className="lbl">Join requests</div>{apps.map((r, i) => <div key={r[0]} className="li"><span><b>{r[0]}</b><span className="muted"> · {r[1]}</span></span><span className="row"><DPBP s={r[2]} />{r[2] === 'submitted' && <><DPB.Button variant="secondary" onClick={() => dpbUpd(apps, setApps, i, 2, 'declined')}>Decline</DPB.Button><DPB.Button variant="primary" onClick={() => dpbUpd(apps, setApps, i, 2, 'approved')}>Approve</DPB.Button></>}</span></div>)}</div>
      <div className="card"><div className="lbl">Officers</div>{[['President', 'Maya Chen', 'until May 2027'], ['Treasurer', 'Jordan Ellis', 'until May 2027'], ['Outreach', tr ? 'Ava Kim' : 'Priya Shah', tr ? 'from today' : 'until Dec 2026']].map(([r, n, u]) => <div key={r} className="li"><span><b>{r}</b> · {n}</span><span className="muted">{u}</span></div>)}{!tr && <DPB.Button variant="secondary" onClick={() => setTr(true)}>Hand outreach role to Ava Kim</DPB.Button>}{tr && <p className="muted" style={{ margin: 0 }}>Priya’s officer access ended; Ava’s started. Student Life notified.</p>}</div></div></div>;
}
function DpbClubEvents() {
  const [checked, setChecked] = window.useLS('sem-dpb-check', 0); const [live, setLive] = React.useState(false);
  return <div className="stack"><DPBH k="Club leader · events" t="MCAT study night" s="Thu 23 Oct · Stevenson 1210 · capacity 60" />
    <div className="grid3"><DPB.MetricTile label="RSVPs" value="54" /><DPB.MetricTile label="Waitlist" value="7" /><DPB.MetricTile label="Checked in" value={String(checked)} /></div>
    <div className="card">{live ? <><div style={{ width: 160, height: 160, border: '1px dashed var(--border-strong)', borderRadius: 6, display: 'grid', placeItems: 'center' }}><span className="mono muted">check-in QR</span></div><p className="muted" style={{ margin: 0 }}>Students scan with Semester. The code rotates every 30 s so it can’t be shared.</p><div className="row"><DPB.Button variant="secondary" onClick={() => setChecked(checked + 1)}>Simulate a scan</DPB.Button><DPB.Button variant="ghost" onClick={() => setLive(false)}>End check-in</DPB.Button></div></> : <DPB.Button variant="primary" onClick={() => setLive(true)}>Start check-in</DPB.Button>}</div>
    <p className="muted">Attendance feeds the club’s participation history and Student Life’s engagement reporting, in aggregate.</p></div>;
}
function DpbClubBudget() {
  const [reqs, setReqs] = window.useLS('sem-dpb-budget', [['Pizza for study night', 180, 'requested'], ['Speaker honorarium', 400, 'funded']]);
  const [amt, setAmt] = React.useState(''); const [what, setWhat] = React.useState('');
  return <div className="stack"><DPBH k="Club leader · funds" t="Club budget" s="Requests go to Student Government Finance. Spending posts to the club’s account in the campus ledger." />
    <div className="grid3"><DPB.MetricTile label="Allocation this year" value="$2,500" /><DPB.MetricTile label="Spent" value="$400" /><DPB.MetricTile label="Pending" value={'$' + reqs.filter((r) => r[2] === 'requested').reduce((s, r) => s + r[1], 0)} /></div>
    <div className="card">{reqs.map((r) => <div key={r[0]} className="li"><span>{r[0]}</span><span className="row"><span className="mono">${r[1]}</span><DPBP s={r[2]} /></span></div>)}<div className="row"><input className="ta" style={{ flex: 2 }} placeholder="What for" value={what} onChange={(e) => setWhat(e.target.value)} aria-label="What for" /><input className="num" style={{ width: 100 }} type="number" placeholder="$" value={amt} onChange={(e) => setAmt(e.target.value)} aria-label="Amount" /><DPB.Button variant="primary" disabled={!what.trim() || !(+amt > 0)} onClick={() => { setReqs([...reqs, [what.trim(), +amt, 'requested']]); setWhat(''); setAmt(''); }}>Request</DPB.Button></div></div></div>;
}

function DpbFinRefunds() {
  const [rows, setRows] = window.useLS('sem-dpb-ref', [['RF-201', 'Taylor Brooks', 'Dropped course in add/drop', 320, 'new', 0], ['RF-202', 'Ava Kim', 'Housing deposit returned', 600, 'new', 0], ['RF-203', 'Sam Patel', 'Overpayment', 95, 'issued', 1]]);
  const appr = (i) => { const r = rows[i]; const n = r[5] + 1; setRows(rows.map((x, j) => (j === i ? [x[0], x[1], x[2], x[3], x[3] >= 500 && n < 2 ? 'needs second approver' : 'issued', n] : x))); };
  return <div className="stack"><DPBH k="Financial operations · refunds" t="Refund queue" s="Refunds of $500 or more need two approvers. Money returns on the original rail; the ledger posts a reversal." />
    <div className="card scrollx"><table className="t"><thead><tr><th>Refund</th><th>Student</th><th>Reason</th><th>Amount</th><th>State</th><th></th></tr></thead><tbody>{rows.map((r, i) => <tr key={r[0]}><td className="mono">{r[0]}</td><td>{r[1]}</td><td>{r[2]}</td><td className="mono">${r[3]}</td><td><DPBP s={r[4]} /></td><td>{r[4] !== 'issued' && <DPB.Button variant="primary" onClick={() => appr(i)}>{r[5] === 1 ? 'Second approval' : 'Approve'}</DPB.Button>}</td></tr>)}</tbody></table></div>
    <button className="lnk" style={{ justifySelf: 'start' }} onClick={() => { location.hash = '/finops/payments'; }}>Payment and hold state machines</button></div>;
}
function DpbFinPlans() {
  const [rows, setRows] = window.useLS('sem-dpb-plans', [['Taylor Brooks', '$2,140 · 4 payments', 'requested'], ['Jordan Ellis', '$3,600 · 5 payments', 'active'], ['Leo Martins', '$1,800 · 3 payments · missed 1', 'at risk']]);
  return <div className="stack"><DPBH k="Financial operations · payment plans" t="Payment plans" s="Approving a plan with a first payment releases the bursar hold." />
    <div className="card">{rows.map((r, i) => <div key={r[0]} className="li"><span><b>{r[0]}</b><span className="muted"> · {r[1]}</span></span><span className="row"><DPBP s={r[2]} />{r[2] === 'requested' && <DPB.Button variant="primary" onClick={() => dpbUpd(rows, setRows, i, 2, 'active')}>Approve plan</DPB.Button>}{r[2] === 'at risk' && <DPB.Button variant="secondary" onClick={() => { location.hash = '/student/messages'; }}>Reach out</DPB.Button>}</span></div>)}</div></div>;
}
function DpbExecRetention() {
  const rows = [['First-year', 1640, '94.1%', '+0.8'], ['Sophomore', 1590, '92.3%', '+0.2'], ['Transfer', 410, '88.0%', '−1.4'], ['First-generation', 980, '91.6%', '+2.1']];
  return <div className="stack"><DPBH k="Executive OS · retention" t="Fall-to-spring persistence" s="By cohort, against last year. Groups under 10 are suppressed." />
    <div className="card scrollx"><table className="t"><thead><tr><th>Cohort</th><th>Students</th><th>Persisting</th><th>vs last year</th></tr></thead><tbody>{rows.map((r) => <tr key={r[0]}>{r.map((c, i) => <td key={i}>{i === 0 ? <b>{c}</b> : c}</td>)}</tr>)}</tbody></table></div>
    <p className="muted">Sample data. <button className="lnk" onClick={() => { location.hash = '/success/cohorts'; }}>See cohort programs</button></p></div>;
}

const DBW = window.SEM_WS, DBS = window.SEM_SCREENS;
DBW.employer.nav.push(['post', 'Post an opportunity', 'work'], ['applicants', 'Applicants', 'people']);
DBW.clubs.nav.push(['roster', 'Roster and officers', 'people'], ['events', 'Event check-in', 'today'], ['budget', 'Club budget', 'costs']);
DBW.finops.nav.push(['refunds', 'Refund queue', 'refresh'], ['plans', 'Payment plans', 'sheet']);
DBW.executive.nav.push(['retention', 'Retention', 'analyse']);
DBS.employer = Object.assign(DBS.employer || {}, { post: DpbEmployerPost, applicants: DpbEmployerApplicants });
DBS.clubs = Object.assign(DBS.clubs || {}, { roster: DpbClubRoster, events: DpbClubEvents, budget: DpbClubBudget });
DBS.finops = Object.assign(DBS.finops || {}, { refunds: DpbFinRefunds, plans: DpbFinPlans });
DBS.executive = Object.assign(DBS.executive || {}, { retention: DpbExecRetention });
