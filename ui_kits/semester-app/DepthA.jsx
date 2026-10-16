// Depth pass A: TA, support desk, marketplace moderation, family delegate workspaces.
const DPA = window.SemesterDesignSystem_e9f3ba;
const DPAH = ({ k, t, s, children }) => <div className="ph"><div><div className="kicker">{k}</div><h1>{t}</h1>{s && <p className="muted">{s}</p>}</div>{children}</div>;
const DPAP = ({ s, tone }) => <span className="pill" data-tone={tone || { open: 'pending', waiting: 'pending', resolved: 'confirmed', done: 'confirmed', approved: 'confirmed', declined: 'blocked', verified: 'confirmed', pending: 'pending', rejected: 'blocked', refunded: 'confirmed', 'in progress': 'pending', breached: 'blocked', paid: 'confirmed', due: 'pending', expired: 'unknown', active: 'confirmed' }[s] || 'pending'}>{s}</span>;
const dpaUpd = (rows, setRows, i, col, v) => setRows(rows.map((r, j) => (j === i ? r.map((c, k) => (k === col ? v : c)) : r)));

function DpaTaSections() {
  const rows = [['Lab 02A', 'Tue 2:10', 18, 3], ['Lab 02B', 'Thu 2:10', 20, 1]];
  return <div className="stack"><DPAH k="TA · Rafael Diaz · CHEM 210" t="My sections" s="You see only the two lab sections assigned to you. Lecture sections and other TAs’ students are out of scope." />
    <div className="grid2">{rows.map(([s, t, n, todo]) => <div key={s} className="card"><div className="row" style={{ justifyContent: 'space-between' }}><b>{s}</b><span className="muted">{t}</span></div><div className="li"><span>Students</span><span>{n}</span></div><div className="li"><span>Lab reports to grade</span><span>{todo}</span></div><DPA.Button variant="secondary" onClick={() => { location.hash = '/ta/queue'; }}>Open grading</DPA.Button></div>)}</div>
    <DPA.Notice head="What you can’t do">Release grades, change the grading policy, or see accommodation details beyond the instruction (“extended time 1.5×”). Those stay with Dr. Alvarez.</DPA.Notice></div>;
}
function DpaTaHours() {
  const [q, setQ] = window.useLS('sem-dpa-taq', [['Maya Chen', 'Lab 3 error analysis', 'waiting'], ['Ava Kim', 'Titration curve shape', 'waiting'], ['Sam Rivera', 'Extension question', 'waiting']]);
  const [open, setOpen] = window.useLS('sem-dpa-taopen', true);
  return <div className="stack"><DPAH k="TA · office hours" t="Office hours queue" s="Students join from Course → Office hours. You see their question, not their grades."><DPA.Switch label="Queue open" checked={open} onChange={setOpen} /></DPAH>
    <div className="card">{q.map((r, i) => <div key={r[0]} className="li"><span><b>{i + 1}. {r[0]}</b><span className="muted"> · {r[1]}</span></span><span className="row"><DPAP s={r[2]} />{r[2] === 'waiting' && <DPA.Button variant="primary" onClick={() => dpaUpd(q, setQ, i, 2, 'in progress')}>Start</DPA.Button>}{r[2] === 'in progress' && <DPA.Button variant="secondary" onClick={() => dpaUpd(q, setQ, i, 2, 'done')}>Done</DPA.Button>}</span></div>)}{r0(q)}</div>
    {q.some((r) => r[1].includes('Extension')) && <p className="muted">Extension questions route to the instructor. Use “Refer to instructor” rather than deciding.</p>}</div>;
}
const r0 = (q) => (!q.some((r) => r[2] !== 'done') ? <p className="muted" style={{ margin: 0 }}>Queue clear.</p> : null);
function DpaTaRegrades() {
  const [rows, setRows] = window.useLS('sem-dpa-targ', [['Jordan Ellis', 'Lab 2 · Analysis', '“I tied it to Q vs K in §3.”', 'open'], ['Ava Kim', 'Lab 2 · Data', '“Figure 2 axis was labeled.”', 'open']]);
  return <div className="stack"><DPAH k="TA · regrades" t="Regrade requests in my sections" s="You can recommend. The instructor makes the change and it’s logged with the original score." />
    <div className="card">{rows.map((r, i) => <div key={r[0]} className="ri"><span><b>{r[0]}</b> · {r[1]}<div className="muted">{r[2]}</div></span><span className="row">{r[3] === 'open' ? <><DPA.Button variant="secondary" onClick={() => dpaUpd(rows, setRows, i, 3, 'declined')}>Recommend keep</DPA.Button><DPA.Button variant="primary" onClick={() => dpaUpd(rows, setRows, i, 3, 'approved')}>Recommend +1</DPA.Button></> : <DPAP s={r[3] === 'approved' ? 'sent to instructor' : 'kept · sent to instructor'} tone="pending" />}</span></div>)}</div></div>;
}

function DpaSupportCase() {
  const [c, setC] = window.useLS('sem-dpa-case', { st: 'open', reply: '', sent: [] });
  const macros = [['SSO reset', 'I’ve reset your Vanderbilt sign-in link. Sign out everywhere, then sign in again from semester.co.'], ['Hold explained', 'Your hold is from the Bursar. Paying the balance or starting a plan clears it within an hour.'], ['Route to registrar', 'This needs the registrar. I’ve passed it on with your request ID; they reply within 2 business days.']];
  return <div className="stack"><DPAH k="Support desk · case SUP-2210" t="Can’t see spring classes in cart" s="Opened by Maya Chen · 2 h ago · first reply due in 2 h"><DPAP s={c.st} /></DPAH>
    <div className="grid2"><div className="card"><div className="lbl">Conversation</div><div className="mm">I added CHEM 2220 last night and it’s gone this morning.</div>{c.sent.map((m, i) => <div key={i} className="mm me">{m}</div>)}<div className="lbl">Macros</div><div className="wk">{macros.map(([l, t]) => <button key={l} onClick={() => setC({ ...c, reply: t })}>{l}</button>)}</div><textarea className="ta" rows="3" value={c.reply} onChange={(e) => setC({ ...c, reply: e.target.value })} aria-label="Reply"></textarea><div className="row"><DPA.Button variant="primary" disabled={!c.reply.trim()} onClick={() => setC({ ...c, sent: [...c.sent, c.reply], reply: '', st: 'waiting' })}>Send</DPA.Button><DPA.Button variant="secondary" onClick={() => setC({ ...c, st: 'resolved' })}>Resolve</DPA.Button></div></div>
      <div className="card"><div className="lbl">What support can see</div><div className="li"><span>Account</span><span>Active · SSO linked</span></div><div className="li"><span>Cart sync</span><span className="muted">YES timed out at 07:00:04</span></div><div className="li"><span>Grades, balances, notes</span><span className="muted">Not visible to support</span></div><p className="muted" style={{ margin: 0 }}>Need more? Request time-boxed access with a reason; it’s logged.</p><button className="lnk" style={{ justifySelf: 'start' }} onClick={() => { location.hash = '/institution/regops'; }}>See registration operations</button></div></div></div>;
}
function DpaSupportSla() {
  const rows = [['First reply', '4 h', '94%', '2 breached'], ['Resolution, standard', '3 business days', '89%', '5 breached'], ['Resolution, urgent', '8 h', '100%', '0']];
  return <div className="stack"><DPAH k="Support desk · this week" t="Service levels" s="Breaches link to the case so a lead can follow up." />
    <div className="grid3"><DPA.MetricTile label="Open cases" value="38" /><DPA.MetricTile label="Median first reply" value="1 h 12 m" /><DPA.MetricTile label="Satisfaction" value="4.6 / 5" /></div>
    <div className="card scrollx"><table className="t"><thead><tr><th>Target</th><th>Goal</th><th>Met</th><th>Breaches</th></tr></thead><tbody>{rows.map((r) => <tr key={r[0]}>{r.map((x, i) => <td key={i}>{i === 0 ? <b>{x}</b> : x}</td>)}</tr>)}</tbody></table></div>
    <div className="card"><div className="lbl">Top topics</div>{[['Sign-in and SSO', 31], ['Registration cart', 22], ['Holds', 18], ['Meal plan', 9]].map(([t, n]) => <div key={t} style={{ display: 'grid', gap: 4 }}><div className="row" style={{ justifyContent: 'space-between' }}><span>{t}</span><span className="mono">{n}</span></div><div className="prog2"><i style={{ width: n * 3 + '%' }}></i></div></div>)}</div></div>;
}

function DpaMarketDisputes() {
  const [rows, setRows] = window.useLS('sem-dpa-disp', [['D-118', 'Organic chem textbook', 'Buyer says pages missing', '$45', 'open'], ['D-119', 'Mini fridge', 'Seller didn’t show at safe spot', '$60', 'open'], ['D-120', 'Concert ticket', 'Ticket already used', '$85', 'open']]);
  return <div className="stack"><DPAH k="Marketplace · disputes" t="Disputes" s="Payments are held by the processor until the buyer confirms or a dispute closes. Semester never holds funds." />
    <div className="card scrollx"><table className="t"><thead><tr><th>Case</th><th>Item</th><th>Issue</th><th>Amount</th><th>State</th><th></th></tr></thead><tbody>{rows.map((r, i) => <tr key={r[0]}><td className="mono">{r[0]}</td><td>{r[1]}</td><td>{r[2]}</td><td className="mono">{r[3]}</td><td><DPAP s={r[4]} /></td><td className="row">{r[4] === 'open' && <><DPA.Button variant="secondary" onClick={() => dpaUpd(rows, setRows, i, 4, 'resolved')}>Release to seller</DPA.Button><DPA.Button variant="primary" onClick={() => dpaUpd(rows, setRows, i, 4, 'refunded')}>Refund buyer</DPA.Button></>}</td></tr>)}</tbody></table></div></div>;
}
function DpaMarketProviders() {
  const [rows, setRows] = window.useLS('sem-dpa-prov', [['Campus Tutors LLC', 'Tutoring', 'W-9, insurance, background check', 'pending'], ['Nashville Sublets Co.', 'Housing', 'Business license', 'pending'], ['CIEE', 'Study abroad', 'Institution agreement', 'verified']]);
  return <div className="stack"><DPAH k="Marketplace · providers" t="Provider verification" s="Unverified providers can’t list to students. The badge students see says exactly what was checked." />
    <div className="card">{rows.map((r, i) => <div key={r[0]} className="ri"><span><b>{r[0]}</b> · {r[1]}<div className="muted">Checks: {r[2]}</div></span><span className="row"><DPAP s={r[3]} />{r[3] === 'pending' && <><DPA.Button variant="secondary" onClick={() => dpaUpd(rows, setRows, i, 3, 'rejected')}>Reject</DPA.Button><DPA.Button variant="primary" onClick={() => dpaUpd(rows, setRows, i, 3, 'verified')}>Verify</DPA.Button></>}</span></div>)}</div></div>;
}

function DpaFamilyBilling() {
  const [paid, setPaid] = window.useLS('sem-dpa-fpay', false);
  return <div className="stack"><DPAH k="Family · Ana Chen · authorized payer for Maya" t="Billing" s="Maya made you an authorized payer. You see the bill and can pay it; you don’t see grades or messages." />
    <div className="grid3"><DPA.MetricTile label="Balance due" value={paid ? '$0.00' : '$1,240.00'} /><DPA.MetricTile label="Due" value="Oct 20" /><DPA.MetricTile label="Plan" value="None" /></div>
    <div className="card"><div className="li"><span>Spring tuition, after aid</span><span className="mono">$1,155.00</span></div><div className="li"><span>Lab fee · CHEM 2220</span><span className="mono">$85.00</span></div>{paid ? <DPA.Notice head="Paid">Receipt sent to you and Maya. The bursar hold, if any, clears within the hour.</DPA.Notice> : <div className="row"><DPA.Button variant="primary" onClick={() => setPaid(true)}>Pay $1,240.00</DPA.Button><DPA.Button variant="secondary" onClick={() => { location.hash = '/student/bill'; }}>See payment plans</DPA.Button></div>}</div></div>;
}
function DpaFamilyConsent() {
  const items = [['Bill and payments', 'Shared', 'May 31, 2027'], ['Holds that block registration', 'Shared', 'May 31, 2027'], ['Grades', 'Not shared', '—'], ['Schedule', 'Not shared', '—'], ['Messages and advising', 'Never shareable here', '—']];
  return <div className="stack"><DPAH k="Family · what Maya shares with you" t="Sharing and consent" s="Maya controls this. Changes take effect right away and you’re notified." />
    <div className="card scrollx"><table className="t"><thead><tr><th>Information</th><th>Status</th><th>Until</th></tr></thead><tbody>{items.map((r) => <tr key={r[0]}><td><b>{r[0]}</b></td><td><DPAP s={r[1]} tone={r[1] === 'Shared' ? 'confirmed' : 'unknown'} /></td><td>{r[2]}</td></tr>)}</tbody></table></div><p className="muted">College students’ records belong to them under FERPA. Ask Maya if you need more.</p></div>;
}

const DAW = window.SEM_WS, DAS = window.SEM_SCREENS;
DAW.ta.nav.push(['sections', 'My sections', 'classmates'], ['hours', 'Office hours', 'meet'], ['regrades', 'Regrade requests', 'proof']);
DAW.support.nav.push(['case', 'Case SUP-2210', 'mail'], ['sla', 'Service levels', 'analyse']);
DAW.marketplace.nav.push(['disputes', 'Disputes', 'costs'], ['providers', 'Provider verification', 'proof']);
DAW.family.nav.push(['billing', 'Billing', 'costs'], ['consent', 'What’s shared', 'privacy']);
DAS.ta = Object.assign(DAS.ta || {}, { sections: DpaTaSections, hours: DpaTaHours, regrades: DpaTaRegrades });
DAS.support = Object.assign(DAS.support || {}, { case: DpaSupportCase, sla: DpaSupportSla });
DAS.marketplace = Object.assign(DAS.marketplace || {}, { disputes: DpaMarketDisputes, providers: DpaMarketProviders });
DAS.family = Object.assign(DAS.family || {}, { billing: DpaFamilyBilling, consent: DpaFamilyConsent });
