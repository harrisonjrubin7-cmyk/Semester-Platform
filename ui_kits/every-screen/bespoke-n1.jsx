// Bespoke Ops screens (group N), batch 1: shared store window.ESN ('sem-b:ops'), helpers, inbox, tenants, customers, accounts, pilots, implementation, success, renewals. Sample data only.
(() => {
const { N, useStore, ref, Box, Receipt, T, Chip, Bar, Log, now } = window.ESB;
const { useState } = React;
const TODAY = '2026-10-08';
const OPS0 = {
  inbox: [{ id: 'OI-1', k: 'Approval', t: 'DPA v3 redlines need founder sign-off', from: 'Counsel', due: '2026-10-10', st: 'Open', own: null }, { id: 'OI-2', k: 'Escalation', t: 'Vanderbilt: grade sync delayed (INC-7)', from: 'Support', due: '2026-10-08', st: 'Open', own: 'R. Ortiz' }, { id: 'OI-3', k: 'Request', t: 'Access review sign-off for September', from: 'Security', due: '2026-10-12', st: 'Open', own: null }, { id: 'OI-4', k: 'Decision', t: 'Pilot pricing floor', from: 'Founder', due: '2026-10-15', st: 'Open', own: null }],
  tenants: [{ id: 't-vu', n: 'Vanderbilt (pilot)', env: 'Production', region: 'US', st: 'Pilot', users: 412, sis: 'Banner', lms: 'Canvas', health: 'Watch', plan: 'Pilot' }, { id: 't-ru', n: 'Riverside CC (sandbox)', env: 'Sandbox', region: 'US', st: 'Evaluating', users: 18, sis: 'Colleague', lms: 'Moodle', health: 'Good', plan: '—' }, { id: 't-demo', n: 'Demo University', env: 'Demo', region: 'US', st: 'Internal', users: 40, sis: 'Synthetic', lms: 'Synthetic', health: 'Good', plan: '—' }],
  customers: [{ id: 'c-vu', n: 'Vanderbilt University', tenant: 't-vu', stage: 'Pilot', arr: 0, sponsor: 'Dr. A. Rivera (Provost office)', champ: 'J. Lee (Academic Tech)', renew: '2027-05-31', risk: ['Sponsor not yet confirmed budget', 'Grade sync incident this week'] }, { id: 'c-ru', n: 'Riverside Community College', tenant: 't-ru', stage: 'Evaluation', arr: 0, sponsor: '—', champ: 'M. Grant (IT)', renew: null, risk: ['No sponsor'] }],
  stake: [['c-vu', 'Dr. A. Rivera', 'Executive sponsor', 'Supportive', '2026-10-01'], ['c-vu', 'J. Lee', 'Champion', 'Strong', '2026-10-07'], ['c-vu', 'R. Mills', 'Registrar (data owner)', 'Cautious', '2026-09-28'], ['c-vu', 'P. Shah', 'CISO', 'Reviewing HECVAT', '2026-09-30'], ['c-ru', 'M. Grant', 'IT lead', 'Curious', '2026-09-15']],
  decisions: [{ id: 'D-12', t: 'Read-only SIS for pilot', why: 'Write-back needs rollback proof first', by: 'Founder + Registrar', at: '2026-08-10', rev: '2026-12-01', st: 'Active' }, { id: 'D-13', t: 'No AI on student records', why: 'Policy AIP-03; evidence pending', by: 'Founder', at: '2026-09-02', rev: '2027-03-01', st: 'Active' }],
  pilot: { metrics: [['Weekly active students', 'Product analytics (aggregated)', 180, 250, 'Measured'], ['Students who planned ≥1 study block', 'Product analytics', 62, null, 'Measured · no target'], ['Advisor time saved per week', 'Self-report survey (n=6)', 3.5, null, 'Self-reported — not measured'], ['Missed-deadline rate', 'Not instrumented', null, null, 'Not measured'], ['Retention / GPA impact', 'Requires approved study design', null, null, 'Not claimable']], outcomes: [] },
  projects: [{ id: 'IP-1', cust: 'c-vu', n: 'Vanderbilt pilot implementation', st: 'In progress', ms: [['Kickoff', '2026-08-01', 'Done'], ['SIS read connection active', '2026-08-20', 'Done'], ['LTI launch in 3 courses', '2026-09-05', 'Done'], ['Advisor workspace training', '2026-10-15', 'Upcoming'], ['Mid-pilot review', '2026-11-15', 'Upcoming'], ['Pilot readout', '2027-01-20', 'Upcoming']] }],
  plans: [{ id: 'SP-1', cust: 'c-vu', goal: 'Show weekly planning adoption ≥ 250 students', owner: 'CS lead', actions: [['Advisor nudges in week 6', 'Open'], ['Add 5 more Canvas courses', 'Open'], ['Student ambassadors', 'Done']] }],
  qbrs: [{ id: 'QBR-1', cust: 'c-vu', at: '2026-11-15', st: 'Planned', agenda: ['Adoption vs target', 'Incidents + fixes', 'Roadmap asks', 'Renewal path'] }],
  renewals: [{ id: 'RN-1', cust: 'c-vu', at: '2027-05-31', st: 'Not started', arr: 0, proposed: 48000, risk: 'Medium' }],
  log: []
};
const useOps = () => useStore('ops', OPS0);
const audit = (S, w, who = 'Operator') => [...S.log, [now(), w + ' · ' + who]];
const area = { font: 'inherit', fontSize: 14, padding: 8, borderRadius: 6, border: '1px solid var(--border-subtle)', background: 'var(--surface-base)', color: 'var(--text-primary)', width: '100%' };
const Ph = ({ label }) => <div style={{ border: '1px dashed var(--border-subtle)', borderRadius: 8, minHeight: 90, display: 'grid', placeItems: 'center', fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-secondary)' }}>{label}</div>;
const Pills = ({ steps, i }) => <div className="row" style={{ gap: 4 }}>{steps.map((s, k) => <span key={s} style={{ fontSize: 10.5, padding: '3px 6px', borderRadius: 3, border: '1px solid var(--border-subtle)', background: k < i ? 'var(--action-primary)' : k === i ? 'var(--surface-raised)' : 'transparent', color: k < i ? 'var(--text-on-action, #fff)' : 'var(--text-secondary)' }}>{s}</span>)}</div>;
// Generic record list + detail + state transitions
function Rec({ rows, cols, cell, title, detail, moves, onMove, empty, aside }) {
  const [i, setI] = useState(0); const r = rows[Math.min(i, rows.length - 1)];
  return <div className="two"><T head={cols} rows={rows.map(cell)} onRow={setI} sel={i} empty={empty} /><aside className="stack">{r && <Box title={title(r)}>{detail && detail(r)}{moves && <div className="row">{moves(r).map(([l, p, dis]) => <N.Button key={l} disabled={!!dis} disabledReason={dis || ''} onClick={() => onMove(r, p, l)}>{l}</N.Button>)}</div>}</Box>}{aside}</aside></div>;
}
const tone = (s) => (/Done|Active|Good|Paid|Signed|Won|Resolved|Closed|Approved|Live|Healthy|Met/.test(s) ? 'ok' : /Risk|Overdue|Failed|Breach|Bad|Lost|Critical|Past due|Blocked/.test(s) ? 'bad' : /Watch|Open|Pending|Draft|Upcoming|In progress|Planned|Medium/.test(s) ? 'warn' : undefined);
window.ESN = { TODAY, useOps, audit, area, Ph, Pills, Rec, tone, OPS0 };

function OperationsInbox() {
  const [S, setS, reset] = useOps(); const [rc, setRc] = useState(null); const open = S.inbox.filter((x) => x.st === 'Open').sort((a, b) => a.due.localeCompare(b.due));
  const act = (x, p, msg) => { setS({ ...S, inbox: S.inbox.map((y) => (y.id === x.id ? { ...y, ...p } : y)), log: audit(S, x.id + ' ' + msg) }); setRc({ head: msg, body: x.t, ref: x.id }); };
  return <div className="two"><div className="stack">{open.map((x) => <Box key={x.id} title={x.t} aside={<span className="row"><Chip>{x.k}</Chip><Chip tone={x.due <= TODAY ? 'bad' : 'warn'}>{x.due <= TODAY ? 'Due today' : 'Due ' + x.due}</Chip></span>}><span className="muted">From {x.from} · {x.own ? 'Owner ' + x.own : 'Unowned'}</span><div className="row">{!x.own && <N.Button onClick={() => act(x, { own: 'Me' }, 'claimed')}>Claim</N.Button>}<N.Button variant="primary" disabled={!x.own} disabledReason="Claim it first" onClick={() => act(x, { st: 'Done' }, 'completed')}>Mark done</N.Button><N.Button onClick={() => act(x, { own: 'Security lead' }, 'routed to Security lead')}>Route</N.Button></div></Box>)}{!open.length && <N.EmptyState title="Inbox clear" body="Approvals, escalations and decisions land here." />}<Receipt r={rc} /></div><aside className="stack"><Box title="Rule">Every item has one owner and a due date. Unowned items older than a day escalate to the founder.</Box><button className="link-quiet" style={{ fontSize: 12 }} onClick={reset}>Reset sample data</button></aside></div>;
}

function MyWork() {
  const [S, setS] = useOps(); const mine = S.inbox.filter((x) => x.own === 'Me'); const ms = S.projects.flatMap((p) => p.ms.filter((m) => m[2] === 'Upcoming').slice(0, 1).map((m) => [p.n, m]));
  return <div className="two"><div className="stack"><Box title={'Claimed · ' + mine.length}>{mine.length ? mine.map((x) => <div key={x.id} className="row" style={{ justifyContent: 'space-between', fontSize: 14 }}><span>{x.t}</span><Chip tone={tone(x.st)}>{x.st}</Chip></div>) : <span className="muted">Claim items in Operations Inbox.</span>}</Box><Box title="Next milestones">{ms.map(([p, m]) => <div key={p} style={{ fontSize: 14 }}>{m[0]} · {m[1]} <span className="muted">({p})</span></div>)}</Box><Box title="Renewals in 9 months">{S.renewals.map((r) => <div key={r.id} style={{ fontSize: 14 }}>{S.customers.find((c) => c.id === r.cust).n} · {r.at} · {r.st}</div>)}</Box></div><aside className="stack"><Box title="Recent"><Log items={S.log.slice(-6)} /></Box></aside></div>;
}

function TenantDirectory() {
  const [S] = useOps(); return <div className="stack"><T head={['Tenant', 'Environment', 'Region', 'Status', 'Users', 'SIS / LMS', 'Health']} rows={S.tenants.map((t) => [<b>{t.n}</b>, <Chip tone={t.env === 'Production' ? 'bad' : undefined}>{t.env}</Chip>, t.region, t.st, t.users, t.sis + ' / ' + t.lms, <Chip tone={tone(t.health)}>{t.health}</Chip>])} /><span className="muted">Production tenants hold real student data — operator access goes through Break-glass with a reason.</span></div>;
}

function Tenant360() {
  const [S] = useOps(); const [id, setId] = useState('t-vu'); const t = S.tenants.find((x) => x.id === id); const c = S.customers.find((x) => x.tenant === id);
  return <div className="two"><div className="stack"><N.Segmented label="Tenant" value={id} onChange={setId} options={S.tenants.map((x) => ({ value: x.id, label: x.n }))} /><div className="tiles"><N.MetricTile label="Users" value={String(t.users)} source="official" updated="Now" /><N.MetricTile label="Health" value={t.health} source="estimated" updated="Account health" /><N.MetricTile label="Plan" value={t.plan} source="official" updated="Subscriptions" /></div><Box title="Configuration">SIS {t.sis} (read-only) · LMS {t.lms} · region {t.region} · env {t.env}</Box></div><aside className="stack"><Box title="Customer">{c ? c.n + ' · ' + c.stage : 'Internal tenant'}</Box><Box title="What you can't see here">Student records. This view shows configuration and counts only.</Box></aside></div>;
}

function CustomerDirectory() {
  const [S] = useOps(); return <T head={['Customer', 'Stage', 'ARR', 'Sponsor', 'Champion', 'Renewal']} rows={S.customers.map((c) => [<b>{c.n}</b>, c.stage, c.arr ? '$' + c.arr.toLocaleString() : '$0 (pilot)', c.sponsor, c.champ, c.renew || '—'])} />;
}

function Customer360() {
  const [S] = useOps(); const [id, setId] = useState('c-vu'); const c = S.customers.find((x) => x.id === id); const st = S.stake.filter((s) => s[0] === id); const p = S.projects.find((x) => x.cust === id);
  return <div className="two"><div className="stack"><N.Segmented label="Customer" value={id} onChange={setId} options={S.customers.map((x) => ({ value: x.id, label: x.n }))} /><Box title={c.n + ' · ' + c.stage}><T head={['Person', 'Role', 'Stance', 'Last contact']} rows={st.map((s) => s.slice(1))} /></Box>{p && <Box title={p.n}>{p.ms.map((m) => <div key={m[0]} className="row" style={{ justifyContent: 'space-between', fontSize: 13 }}><span>{m[0]} · {m[1]}</span><Chip tone={tone(m[2])}>{m[2]}</Chip></div>)}</Box>}</div><aside className="stack"><Box title="Risks" tone={c.risk.length ? 'warn' : undefined}>{c.risk.map((r) => <div key={r} style={{ fontSize: 13 }}>• {r}</div>)}</Box></aside></div>;
}

function Accounts() {
  const [S] = useOps(); return <div className="two"><T head={['Account', 'Type', 'Billing contact', 'Terms']} rows={[['Vanderbilt University', 'Institution', 'AP office · ap@vanderbilt.example', 'Net 45 · PO required'], ['Riverside CC', 'Institution', '—', '—'], ['StudyBuddy Inc.', 'Partner', 'dev@studybuddy.example', 'Partner agreement v2']]} /><aside className="stack"><Box title="Account ≠ tenant">One account can own several tenants (prod + sandbox). Billing follows the account.</Box></aside></div>;
}

function Stakeholders() {
  const [S, setS] = useOps(); const [d, setD] = useState({ n: '', role: '', stance: 'Unknown' });
  return <div className="two"><div className="stack"><T head={['Customer', 'Person', 'Role', 'Stance', 'Last contact']} rows={S.stake.map((s) => [S.customers.find((c) => c.id === s[0]).n, ...s.slice(1)])} /><Box title="Add stakeholder (Vanderbilt)"><div className="row"><N.TextField label="Name" value={d.n} onChange={(e) => setD({ ...d, n: e.target.value })} /><N.TextField label="Role" value={d.role} onChange={(e) => setD({ ...d, role: e.target.value })} /></div><N.Button disabled={!d.n.trim() || !d.role.trim()} disabledReason="Name and role" onClick={() => { setS({ ...S, stake: [...S.stake, ['c-vu', d.n, d.role, d.stance, TODAY]], log: audit(S, 'Stakeholder added: ' + d.n) }); setD({ n: '', role: '', stance: 'Unknown' }); }}>Add</N.Button></Box></div><aside className="stack"><Box title="Coverage">Every institution needs a sponsor, a data owner (registrar), and a security contact before production.</Box></aside></div>;
}

function DecisionLog() {
  const [S, setS] = useOps(); const [d, setD] = useState({ t: '', why: '', by: '', rev: '' }); const [rc, setRc] = useState(null);
  return <div className="two"><div className="stack"><T head={['ID', 'Decision', 'Why', 'By', 'Review by', 'Status']} rows={S.decisions.map((x) => [x.id, <b>{x.t}</b>, x.why, x.by, x.rev, <Chip tone={tone(x.st)}>{x.st}</Chip>])} /><Box title="Record a decision"><N.TextField label="Decision" value={d.t} onChange={(e) => setD({ ...d, t: e.target.value })} /><N.TextField label="Why (incl. options rejected)" value={d.why} onChange={(e) => setD({ ...d, why: e.target.value })} /><div className="row"><N.TextField label="Decided by" value={d.by} onChange={(e) => setD({ ...d, by: e.target.value })} /><N.TextField label="Review by" type="date" value={d.rev} onChange={(e) => setD({ ...d, rev: e.target.value })} /></div><N.Button variant="primary" disabled={!d.t.trim() || d.why.trim().length < 10 || !d.by.trim() || !d.rev} disabledReason="Every field, including a review date" onClick={() => { const id = ref('D'); setS({ ...S, decisions: [...S.decisions, { id, ...d, at: TODAY, st: 'Active' }], log: audit(S, 'Decision ' + id + ' recorded', d.by) }); setRc({ head: 'Recorded', body: 'Append-only · supersede with a new decision, never edit', ref: id }); setD({ t: '', why: '', by: '', rev: '' }); }}>Record</N.Button></Box><Receipt r={rc} /></div><aside className="stack"><Box title="Why log">So the next person knows what was decided, by whom, and when to revisit.</Box></aside></div>;
}

function PilotMetrics() {
  const [S] = useOps(); return <div className="two"><T head={['Metric', 'Source', 'Value', 'Target', 'Status']} rows={S.pilot.metrics.map((m) => [<b>{m[0]}</b>, m[1], m[2] == null ? '—' : m[2], m[3] == null ? '—' : m[3], <Chip tone={/Not/.test(m[4]) ? 'bad' : /Self/.test(m[4]) ? 'warn' : 'ok'}>{m[4]}</Chip>])} /><aside className="stack"><Box title="Honest labels">“Not measured” and “Not claimable” stay visible. Outcome claims (retention, GPA) need an approved study, not product analytics.</Box></aside></div>;
}

function PilotOutcomes() {
  const [S, setS] = useOps(); const [t, setT] = useState(''); const [basis, setBasis] = useState('Measured'); const [rc, setRc] = useState(null); const O = S.pilot.outcomes;
  const ok = t.trim().length > 10 && !(basis !== 'Approved study' && /retention|gpa|graduat|improv/i.test(t));
  return <div className="two"><div className="stack"><T head={['Statement', 'Basis', 'Recorded']} rows={O.map((o) => [o.t, <Chip tone={o.b === 'Measured' ? 'ok' : 'warn'}>{o.b}</Chip>, o.at])} empty="No outcome statements yet." /><Box title="Add an outcome statement"><N.TextField label="Statement" value={t} onChange={(e) => setT(e.target.value)} placeholder="e.g. 180 weekly active students in week 6" /><N.Segmented label="Basis" value={basis} onChange={setBasis} options={['Measured', 'Self-reported', 'Approved study'].map((x) => ({ value: x, label: x }))} />{!ok && t.trim().length > 10 && <N.Notice head="Can't claim this">Student-outcome claims (retention, GPA, graduation, "improves") need an approved study basis.</N.Notice>}<N.Button variant="primary" disabled={!ok} disabledReason="Statement with a valid basis" onClick={() => { setS({ ...S, pilot: { ...S.pilot, outcomes: [...O, { t, b: basis, at: TODAY }] }, log: audit(S, 'Pilot outcome recorded (' + basis + ')') }); setRc({ head: 'Recorded', body: 'Shows with its basis label everywhere it is quoted', ref: ref('PO') }); setT(''); }}>Record</N.Button></Box><Receipt r={rc} /></div><aside className="stack"><Box title="Feeds">Claims register checks marketing copy against these statements.</Box></aside></div>;
}

function ImplementationProjects() {
  const [S] = useOps(); return <T head={['Project', 'Customer', 'Status', 'Milestones done']} rows={S.projects.map((p) => [<b>{p.n}</b>, S.customers.find((c) => c.id === p.cust).n, <Chip tone={tone(p.st)}>{p.st}</Chip>, p.ms.filter((m) => m[2] === 'Done').length + '/' + p.ms.length])} />;
}

function ImplementationMilestones() {
  const [S, setS] = useOps(); const p = S.projects[0]; const [rc, setRc] = useState(null);
  const done = (i) => { const ms = p.ms.map((m, k) => (k === i ? [m[0], m[1], 'Done'] : m)); setS({ ...S, projects: [{ ...p, ms }], log: audit(S, 'Milestone done: ' + p.ms[i][0]) }); setRc({ head: 'Milestone done', body: p.ms[i][0] + ' · customer champion notified', ref: ref('MS') }); };
  return <div className="two"><div className="stack">{p.ms.map((m, i) => <div key={m[0]} className="row" style={{ justifyContent: 'space-between', borderBottom: '1px solid var(--border-subtle)', paddingBottom: 6 }}><span style={{ fontSize: 14 }}>{m[0]} · <span className="muted">{m[1]}</span></span>{m[2] === 'Done' ? <Chip tone="ok">Done</Chip> : <N.Button disabled={i > 0 && p.ms[i - 1][2] !== 'Done'} disabledReason="Previous milestone first" onClick={() => done(i)}>Mark done</N.Button>}</div>)}<Receipt r={rc} /></div><aside className="stack"><Box title="Evidence">Each milestone links to its evidence (e.g. sandbox report, training attendance).</Box></aside></div>;
}

function SuccessPlans() {
  const [S, setS] = useOps(); const P = S.plans[0];
  return <div className="two"><Box title={'Goal: ' + P.goal}>{P.actions.map((a, i) => <label key={a[0]} className="row" style={{ fontSize: 14 }}><input type="checkbox" checked={a[1] === 'Done'} onChange={(e) => setS({ ...S, plans: [{ ...P, actions: P.actions.map((x, k) => (k === i ? [x[0], e.target.checked ? 'Done' : 'Open'] : x)) }], log: audit(S, 'Success action ' + (e.target.checked ? 'done' : 'reopened') + ': ' + a[0]) })} /> {a[0]}</label>)}<Bar v={P.actions.filter((a) => a[1] === 'Done').length} max={P.actions.length} label="Actions done" right={P.actions.filter((a) => a[1] === 'Done').length + '/' + P.actions.length} /></Box><aside className="stack"><Box title="Measure">Progress on the goal comes from Pilot metrics, not from checked actions.</Box></aside></div>;
}

function QBRs() {
  const [S, setS] = useOps(); const Q = S.qbrs[0]; const [notes, setNotes] = useState('');
  return <div className="two"><div className="stack"><Box title={'QBR · ' + Q.at} aside={<Chip tone={tone(Q.st)}>{Q.st}</Chip>}>{Q.agenda.map((a) => <div key={a} style={{ fontSize: 14 }}>• {a}</div>)}<textarea rows={3} value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="Outcomes and commitments" style={area}></textarea><N.Button variant="primary" disabled={Q.st === 'Held' || notes.trim().length < 10} disabledReason="Write outcomes" onClick={() => setS({ ...S, qbrs: [{ ...Q, st: 'Held', notes }], log: audit(S, 'QBR held') })}>Record as held</N.Button></Box></div><aside className="stack"><Box title="Bring">Measured metrics with labels, incident summary, open asks. No outcome claims without a basis.</Box></aside></div>;
}

function Renewals() {
  const [S, setS] = useOps(); return <Rec rows={S.renewals} cols={['Customer', 'Date', 'Proposed', 'Risk', 'Status']} cell={(r) => [S.customers.find((c) => c.id === r.cust).n, r.at, '$' + r.proposed.toLocaleString(), <Chip tone={tone(r.risk)}>{r.risk}</Chip>, r.st]} title={(r) => 'Renewal ' + r.id} detail={(r) => <span className="muted">Converts pilot → paid. Needs signed contract + PO before entitlement changes.</span>} moves={(r) => [['Start conversation', { st: 'In progress' }, r.st !== 'Not started' && 'Started'], ['Mark won', { st: 'Won' }, r.st !== 'In progress' && 'Start first'], ['Mark lost', { st: 'Lost' }, r.st !== 'In progress' && 'Start first']]} onMove={(r, p, l) => setS({ ...S, renewals: S.renewals.map((x) => (x.id === r.id ? { ...x, ...p } : x)), log: audit(S, r.id + ' ' + l) })} />;
}

function AccountHealth() {
  const [S] = useOps(); const F = [['Adoption vs target', 180 / 250, 'Pilot metrics'], ['Open P1 incidents', 0.6, 'INC-7 this week'], ['Sponsor engagement', 0.7, 'Last contact 7 days'], ['Support tickets trend', 0.8, 'Stable']];
  return <div className="two"><Box title="Vanderbilt · Watch">{F.map(([l, v, s]) => <Bar key={l} label={l} v={Math.round(v * 100)} max={100} right={s} tone={v < 0.7 ? 'warn' : undefined} />)}</Box><aside className="stack"><Box title="Estimated">Health is a weighted estimate for prioritizing attention — not a measure of student outcomes or a contractual SLA.</Box></aside></div>;
}

Object.assign(window.EVERY_BESPOKE, { 'N:Operations Inbox': OperationsInbox, 'N:My Work': MyWork, 'N:Tenant Directory': TenantDirectory, 'N:Tenant 360': Tenant360, 'N:Customer Directory': CustomerDirectory, 'N:Customer 360': Customer360, 'N:Accounts': Accounts, 'N:Stakeholders': Stakeholders, 'N:Decision log': DecisionLog, 'N:Pilot metrics': PilotMetrics, 'N:Pilot outcomes': PilotOutcomes, 'N:Implementation projects': ImplementationProjects, 'N:Implementation milestones': ImplementationMilestones, 'N:Success plans': SuccessPlans, 'N:QBRs': QBRs, 'N:Renewals': Renewals, 'N:Account health': AccountHealth });
})();
