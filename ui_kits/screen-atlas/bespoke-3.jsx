// Bespoke batch 3: community & moderation, family, career/employer, ops command center. Keyed "G:Screen name". Sample data only.
(() => {
const N = window.SemesterDesignSystem_e9f3ba; const { useState } = React;
const Card = ({ title, children, aside }) => <section className="card"><div className="row" style={{ justifyContent: 'space-between' }}><N.SectionLabel>{title}</N.SectionLabel>{aside}</div>{children}</section>;
const Line = ({ a, b, c }) => <div className="nx" style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) auto', gap: '2px 12px' }}><b>{a}</b><span>{c}</span>{b && <span className="muted" style={{ gridColumn: '1 / -1' }}>{b}</span>}</div>;
const Row = ({ title, help, children }) => <div className="setting"><div><b>{title}</b>{help && <p className="muted" style={{ margin: '2px 0 0' }}>{help}</p>}</div><div className="row">{children}</div></div>;
const toggle = (set) => (id) => set((x) => x.includes(id) ? x.filter((y) => y !== id) : [...x, id]);

/* H · Community & moderation */
function CommunityFeed() {
  const [liked, setLiked] = useState([]); const like = toggle(setLiked);
  const posts = [['p1', 'Study group · BIO 2100', 'Ana (alias: cellwalker)', 'Anyone want to review membrane transport before Thursday? Library room 2B is booked 6–8.', 12, 'Endorsed by TA'], ['p2', 'Housing · Kissam', 'Resident advisor', 'Quiet hours start at 10 pm during midterm week. Laundry room 3 is fixed.', 31, ''], ['p3', 'Marketplace', 'Jordan P.', 'Selling a used Campbell Biology 12th ed. $40, meet at the library desk.', 4, '']];
  return <div className="two"><div className="stack">{posts.map(([id, where, who, body, n, tag]) => <section key={id} className="card"><div className="kicker">{where}</div><Line a={who} c={tag && <N.StatusChip status="verified" label={tag} />} /><p style={{ margin: 0 }}>{body}</p><div className="row"><N.Button variant="ghost" onClick={() => like(id)} aria-pressed={liked.includes(id)}>{liked.includes(id) ? '✓ Helpful' : 'Helpful'} · {n + (liked.includes(id) ? 1 : 0)}</N.Button><N.Button variant="ghost">Reply</N.Button><N.Button variant="ghost">Report</N.Button></div></section>)}</div>
    <aside className="stack"><Card title="Your communities"><Line a="BIO 2100 study group" b="18 members · course-linked" /><Line a="Kissam Hall" b="Residents only" /><Line a="Pre-med society" b="Organization · 240 members" /></Card><N.Notice head="Posting as">Your alias “cellwalker” in course spaces. Your real name in Kissam Hall. Change it in Alias settings.</N.Notice></aside></div>;
}
function ReportContent() {
  const [why, setWhy] = useState(''); const [sent, setSent] = useState(false);
  if (sent) return <N.Notice head="✓ Report received · RPT-4471">A moderator reviews it within 24 hours. The poster isn’t told who reported. You’ll get the outcome in Activity.</N.Notice>;
  return <div className="two"><Card title="What’s wrong with this post?"><N.Segmented label="Reason" value={why} onChange={setWhy} options={['Harassment', 'Hate', 'Spam or scam', 'Self-harm', 'Academic integrity', 'Other']} />{why === 'Self-harm' && <N.Notice head="If someone is in danger now">Call 911 or campus safety at 615-322-2745. Reporting here also alerts the care team.</N.Notice>}<div className="row"><N.Button variant="primary" disabled={!why} onClick={() => setSent(true)}>Send report</N.Button><N.Button variant="ghost">Cancel</N.Button></div></Card>
    <Card title="What happens next"><N.DecisionTrail items={[{ title: 'You report', state: 'current' }, { title: 'Moderator reviews against community guidelines', state: 'waiting' }, { title: 'Action or no action, with a reason', state: 'waiting' }, { title: 'Poster can appeal once', state: 'waiting' }]} /></Card></div>;
}
function ModReports() {
  const [sel, setSel] = useState(0); const [done, setDone] = useState({});
  const items = [['RPT-4471', 'Harassment', 'Comment in BIO 2100 study group', 'breach', '2 h', 3], ['RPT-4468', 'Spam or scam', 'Marketplace listing · “cheap textbooks wire only”', 'soon', '40 m', 7], ['RPT-4460', 'Academic integrity', 'Post sharing quiz answers', 'ok', '6 h', 1]];
  const it = items[sel];
  return <div className="two"><div className="stack">{items.map((x, i) => <button key={x[0]} className="qrow" aria-pressed={i === sel} onClick={() => setSel(i)}><div className="row" style={{ justifyContent: 'space-between', alignItems: 'flex-start' }}><span className="kicker" style={{ flex: '1 1 0', minWidth: 0 }}>{x[1]} · {x[0]}</span>{done[x[0]] ? <N.StatusChip status="approved" label={done[x[0]]} /> : <N.SlaTimer state={x[3]} remaining={x[4]} />}</div><b>{x[2]}</b><span className="muted">{x[5]} report{x[5] > 1 ? 's' : ''}</span></button>)}</div>
    <aside className="stack"><Card title={it[0] + ' · ' + it[1]}><blockquote style={{ margin: 0, padding: '8px 12px', borderLeft: '3px solid var(--border-strong)', background: 'var(--action-secondary)' }}>Content shown to moderators only. Reporter identity hidden.</blockquote><N.Fields items={[{ field: 'Guideline', value: it[1] === 'Spam or scam' ? '4.2 No scams or off-platform payment' : '2.1 No targeted harassment' }, { field: 'Poster history', value: '1 prior warning · 2025' }, { field: 'Space', value: it[2].split('·')[0] }]} />
      <div className="row"><N.Button variant="primary" onClick={() => setDone({ ...done, [it[0]]: 'Removed' })}>Remove and warn</N.Button><N.Button onClick={() => setDone({ ...done, [it[0]]: 'No action' })}>No action</N.Button><N.Button variant="ghost">Escalate</N.Button></div></Card><N.Notice head="Restrictions over 7 days">Need a second moderator. Every action is logged in the moderation audit trail.</N.Notice></aside></div>;
}
function AppealDecision() {
  const [st, setSt] = useState('pending');
  return <div className="two"><Card title="Appeal · APL-212"><N.Fields items={[{ field: 'Original action', value: 'Post removed · 2.1 targeted harassment' }, { field: 'Decided by', value: 'Moderator M. Ortiz · 2 Oct' }, { field: 'Appellant says', value: '“I was quoting the other person to report it.”' }, { field: 'Reviewer', value: 'Different moderator required' }]} /><N.ApprovalBanner state={st} what="Restore the post and remove the warning" requestedBy="Appellant" approver="Senior moderator" onApprove={() => setSt('approved')} onReject={() => setSt('rejected')} /></Card>
    <Card title="Trail"><N.DecisionTrail items={[{ title: 'Reported', when: '1 Oct', state: 'done' }, { title: 'Removed', who: 'M. Ortiz', when: '2 Oct', state: 'done' }, { title: 'Appeal filed', when: '3 Oct', state: 'done' }, { title: 'Second review', state: st === 'pending' ? 'current' : 'done', detail: st === 'pending' ? '' : st === 'approved' ? 'Restored' : 'Upheld · final' }]} /></Card></div>;
}
function AliasSettings() {
  const [f, setF] = useState({ course: 'Alias', housing: 'Real name', org: 'Real name', market: 'Alias' });
  return <div className="two"><Card title="How you appear in each space">{[['course', 'Course and study spaces'], ['housing', 'Residence hall'], ['org', 'Organizations'], ['market', 'Marketplace']].map(([k, l]) => <Row key={k} title={l}><N.Segmented label={l} value={f[k]} onChange={(v) => setF({ ...f, [k]: v })} options={['Real name', 'Alias']} /></Row>)}<N.TextField label="Alias" value="cellwalker" onChange={() => {}} hint="Unique on your campus. Moderators can still see who you are." /></Card>
    <N.Notice head="Aliases aren’t anonymity">Moderators and the conduct office can see your real name if a report is filed. Faculty see your alias in course spaces unless you post an assignment.</N.Notice></div>;
}
function SafeMeetup() {
  return <div className="two"><Card title="Arrange a meet-up · Campbell Biology 12th ed."><N.Fields items={[{ field: 'Buyer', value: 'Jordan P. · verified student' }, { field: 'Price', value: '$40 · agreed in chat' }, { field: 'Place', value: 'Library main desk (staffed, on camera)' }, { field: 'When', value: 'Thu 9 Oct · 3:00 pm' }]} /><div className="row"><N.Button variant="primary">Confirm meet-up</N.Button><N.Button>Suggest another safe spot</N.Button></div></Card>
    <N.Notice head="Stay safe">Pay in person or through Semester checkout. Never wire money or share codes. Semester flags listings that ask for off-platform payment.</N.Notice></div>;
}

/* I · Family & guardian */
function ConsentScope() {
  const cats = [['bal', 'Billing balance and due dates', true], ['holds', 'Holds that block registration', true], ['sched', 'Class schedule', false], ['grades', 'Grades', false], ['aid', 'Financial aid status', false]];
  const [on, setOn] = useState(cats.filter((c) => c[2]).map((c) => c[0])); const flip = toggle(setOn); const [until, setUntil] = useState('End of spring 2027');
  return <div className="two"><Card title="Share with Maria Reyes (parent)">{cats.map(([id, l]) => <Row key={id} title={l}><N.Switch label={l} checked={on.includes(id)} onChange={() => flip(id)} /></Row>)}<N.Select label="Until" value={until} onChange={(e) => setUntil(e.target.value)} options={['30 days', 'End of fall 2026', 'End of spring 2027', 'Until I turn it off']} /><N.Button variant="primary">Send invitation</N.Button></Card>
    <aside className="stack"><N.Notice head="What Maria will see">{on.length} categor{on.length === 1 ? 'y' : 'ies'}, until {until.toLowerCase()}. Never your messages, notes, advising or health records.</N.Notice><N.Notice head="FERPA">Sharing is your choice. You can change or revoke it any time, and Maria is told when you do.</N.Notice></aside></div>;
}
function FamilyShared() {
  return <div className="stack"><div className="tiles"><N.MetricTile label="Balance due" value="$1,240.00" source="official" updated="Bursar · today" /><N.MetricTile label="Due" value="15 Nov" source="official" /><N.MetricTile label="Holds" value="1" source="official" updated="Registrar" /></div>
    <div className="two"><Card title="Hold · Immunization record"><p style={{ margin: 0 }}>Blocks spring registration. Elena needs to upload proof to Student Health. Only she can clear it.</p><N.Button>Send Elena a reminder</N.Button></Card><Card title="Shared by Elena"><N.Fields items={[{ field: 'Categories', value: 'Billing balance, Holds' }, { field: 'Until', value: '31 May 2027' }, { field: 'Not shared', value: 'Grades, schedule, aid, messages' }]} /></Card></div></div>;
}
function AccessHistory() {
  const rows = [['Today 8:12 am', 'Maria Reyes', 'Viewed billing balance', 'Shared'], ['Yesterday', 'Maria Reyes', 'Viewed holds', 'Shared'], ['2 Oct', 'Advisor K. Lee', 'Viewed study plan', 'Shared'], ['28 Sep', 'Maria Reyes', 'Tried to view grades', 'Not shared ⊘']];
  return <div className="stack"><N.DataTable caption="Who looked at what you shared · last 90 days" columns={[{ key: 0, label: 'When' }, { key: 1, label: 'Who' }, { key: 2, label: 'What' }, { key: 3, label: 'Basis' }]} rows={rows.map((r) => ({ ...r }))} /><N.Notice head="Kept for 7 years">Access history stays after you revoke sharing, so you can always see what was seen.</N.Notice></div>;
}
function Revocation() {
  const [gone, setGone] = useState([]);
  const d = [['Maria Reyes', 'Parent', ['Billing balance', 'Holds'], '31 May 2027'], ['Advisor K. Lee', 'Advisor', ['Study plan'], 'Fri 12 Dec']];
  return <div className="stack">{d.map(([w, r, s, e]) => <N.DelegationRow key={w} who={w} role={r} scope={s} expires={e} state={gone.includes(w) ? 'revoked' : 'active'} onRevoke={() => setGone([...gone, w])} />)}{gone.length > 0 && <N.Notice head="✓ Revoked now">{gone.join(' and ')} lost access immediately and were notified. Access history is kept.</N.Notice>}</div>;
}

/* J · Career, employer, alumni */
function SkillEvidence() {
  const ev = [['Lab report: membrane transport', 'BIO 2100 · graded A-', 'reviewed', 'Data analysis, scientific writing'], ['Research poster', 'Faculty-reviewed · Dr. Chen', 'reviewed', 'Experimental design'], ['Python notebook', 'Self-described', 'self', 'Python, statistics'], ['CPR certification', 'American Red Cross · expires 2027', 'credential', 'First aid']];
  const lab = { reviewed: 'Reviewed evidence', self: 'Self-described', credential: 'Official credential' };
  const [pick, setPick] = useState(['Lab report: membrane transport', 'CPR certification']); const flip = toggle(setPick);
  return <div className="two"><div className="stack">{ev.map(([t, s, k, sk]) => <section key={t} className="card"><Line a={t} c={<N.StatusChip status={k === 'self' ? 'draft' : 'verified'} label={lab[k]} />} b={s + ' · ' + sk} /><N.Switch label="Use in portfolio" checked={pick.includes(t)} onChange={() => flip(t)} /></section>)}</div>
    <aside className="stack"><N.Notice head="You choose">Nothing becomes portfolio material on its own. A grade is not a verified skill; each item keeps its label wherever you share it.</N.Notice><N.MetricTile label="In portfolio" value={String(pick.length)} unit="items" source="personal" /></aside></div>;
}
function ApplicationsJ() {
  const apps = [['Vanderbilt Medical Center', 'Research assistant · summer', 'Interview', 'Thu 16 Oct, 2 pm'], ['Genentech', 'Biology intern', 'Submitted', 'Applied 28 Sep'], ['Nashville Food Project', 'Volunteer coordinator', 'Offer', 'Reply by 20 Oct']];
  return <div className="stack"><div className="tiles"><N.MetricTile label="Active" value="3" source="personal" /><N.MetricTile label="Interviews" value="1" source="connected" updated="Employer portal" /><N.MetricTile label="Offers" value="1" source="connected" /></div><N.DataTable caption="Applications" columns={[{ key: 0, label: 'Employer' }, { key: 1, label: 'Role' }, { key: 2, label: 'Stage', render: (r) => <N.StatusChip status={r[2] === 'Offer' ? 'approved' : r[2] === 'Interview' ? 'pending' : 'queued'} label={r[2]} /> }, { key: 3, label: 'Next' }]} rows={apps.map((a) => ({ ...a }))} /><N.Notice head="What employers see">Only the portfolio and documents you attached to each application. Never your transcript unless you send it.</N.Notice></div>;
}
function EmployerConsentProfile() {
  return <div className="two"><Card title="Elena Reyes · shared with Vanderbilt Medical Center" aside={<N.StatusChip status="verified" label="Shared by student" />}><N.Fields items={[{ field: 'Program', value: 'B.S. Biological Sciences · class of 2028' }, { field: 'Portfolio', value: '2 items · 1 reviewed, 1 credential' }, { field: 'Resume', value: 'resume-reyes-oct.pdf' }, { field: 'Shared until', value: '30 Nov 2026' }]} /><div className="row"><N.Button variant="primary">Schedule interview</N.Button><N.Button>Move stage</N.Button></div></Card>
    <Card title="⊘ Not visible to employers"><ul style={{ margin: 0, paddingLeft: 18, display: 'grid', gap: 4 }}><li>Transcript and GPA (unless sent)</li><li>Other applications</li><li>Advising, health, conduct, finance</li><li>Contact details beyond what was shared</li></ul></Card></div>;
}
function EmployerOpportunity() {
  const [paid, setPaid] = useState('Paid');
  return <div className="two"><Card title="New opportunity"><N.TextField label="Title" value="Research assistant · summer 2027" onChange={() => {}} /><N.Segmented label="Pay" value={paid} onChange={setPaid} options={['Paid', 'Unpaid', 'Stipend']} />{paid === 'Unpaid' && <N.Notice head="Needs review">Unpaid roles are reviewed by career services against the Department of Labor test before posting.</N.Notice>}<N.Select label="Who can see it" value="Biology and pre-med students" onChange={() => {}} options={['All students', 'Biology and pre-med students', 'Alumni only']} /><N.Button variant="primary">Submit for review</N.Button></Card>
    <Card title="Review"><N.DecisionTrail items={[{ title: 'Draft', state: 'done' }, { title: 'Career services review', state: 'current', detail: 'Usually 2 business days' }, { title: 'Posted to eligible students', state: 'waiting' }]} /></Card></div>;
}
function CredentialWallet() {
  return <div className="stack">{[['B.S. Biological Sciences (in progress)', 'Registrar · expected May 2028', 'pending'], ['CPR / First aid', 'American Red Cross · renew by Mar 2027', 'verified'], ['Lab safety microcredential', 'Vanderbilt EHS · issued Sep 2026', 'verified']].map(([t, s, st]) => <section key={t} className="card"><Line a={t} b={s} c={<N.StatusChip status={st} />} /><div className="row"><N.Button variant="ghost">Share link</N.Button><N.Button variant="ghost">Download</N.Button></div></section>)}<N.Notice head="Verifiable">Shared links let employers confirm with the issuer. You can expire a link any time.</N.Notice></div>;
}

/* N · Operations Command Center */
function ExecOverview() {
  return <div className="stack"><div className="tiles"><N.MetricTile label="ARR" value="$4.82M" source="official" updated="Billing · today" delta="+6.1% QoQ" /><N.MetricTile label="Live tenants" value="14" source="official" updated="Console" /><N.MetricTile label="Open Sev 1–2" value="1" source="connected" updated="Monitor" /><N.MetricTile label="Renewals due 90 d" value="3" source="official" updated="Contracts" /></div>
    <div className="two"><Card title="Needs a decision"><Line a="Refund $1,800 · Fisk University" b="Two-person rule · waiting on second approver" c={<N.SlaTimer state="soon" remaining="3 h" />} /><Line a="Break-glass request · Belmont IT" b="4 h max · no student records" c={<N.SlaTimer state="ok" remaining="1 h 20 m" />} /><Line a="Pause rollout 26.10 · Lipscomb" b="Error budget 82% spent" c={<N.SlaTimer state="breach" remaining="20 m" />} /></Card>
      <Card title="Account health"><Line a="Vanderbilt" c={<N.HealthBadge band="healthy" score={86} />} /><Line a="Fisk University" c={<N.HealthBadge band="watch" driver="Adoption flat 4 wks" />} /><Line a="Lipscomb" c={<N.HealthBadge band="atrisk" driver="Open incident" />} /></Card></div></div>;
}
function Tenant360() {
  return <div className="stack"><div className="tiles"><N.MetricTile label="Active users 7 d" value="11,204" source="official" updated="Console" /><N.MetricTile label="Modules live" value="6 of 9" source="official" /><N.MetricTile label="Sync freshness" value="12" unit="min" source="connected" updated="Banner" /><N.MetricTile label="Open tickets" value="7" source="connected" /></div>
    <div className="two"><Card title="Vanderbilt University · tenant vu-prod"><N.Fields items={[{ field: 'Plan', value: 'Campus · 3-year · renews 1 Jul 2027' }, { field: 'Identity', value: 'Okta SAML · SCIM on' }, { field: 'Systems', value: 'Banner SIS, Brightspace, StarRez' }, { field: 'Data region', value: 'US-East · tenant-isolated' }]} /></Card><Card title="⊘ Not visible here"><p style={{ margin: 0 }}>Student records, grades and messages. Ops sees tenant configuration, health and aggregate usage only. Access needs a break-glass request.</p></Card></div></div>;
}
function RefundsJ() {
  const [st, setSt] = useState('pending');
  return <div className="two"><Card title="Refund REF-3307 · Fisk University"><N.ActionPreview subject="Refund" says="Refund $1,800.00 to Fisk University" exactly="Credit on invoice INV-20931 · card ending 4410" doesNotChange="Subscription, entitlements and seats stay as they are" recovery={{ kind: 'request', how: 'A new invoice can be issued by finance' }} /><N.ApprovalBanner state={st} what="Refund $1,800.00" requestedBy="J. Patel (support)" approver="Finance lead" onApprove={() => setSt('approved')} onReject={() => setSt('rejected')} /></Card>
    <Card title="Why"><p style={{ margin: 0 }}>Double charge on the September invoice after a plan change. Customer confirmed on ticket TCK-8841.</p><N.Notice head="Two-person rule">Refunds over $50 need a second approver who didn’t request them.</N.Notice></Card></div>;
}
function FeatureFlags() {
  const [f, setF] = useState({ 'ai.copilot.v2': '25%', 'reg.waitlist.auto': 'On', 'fin.payment_plans': 'Off' });
  return <div className="stack"><N.DataTable caption="Feature flags · production" columns={[{ key: 'k', label: 'Flag', render: (r) => <code>{r.k}</code> }, { key: 'o', label: 'Owner' }, { key: 's', label: 'State', render: (r) => <N.Segmented label={r.k} value={f[r.k]} onChange={(v) => setF({ ...f, [r.k]: v })} options={['Off', '25%', 'On']} /> }, { key: 'n', label: 'Note' }]} rows={[{ k: 'ai.copilot.v2', o: 'AI team', n: 'Eval pass 94%' }, { k: 'reg.waitlist.auto', o: 'Registration', n: 'Live at 14 tenants' }, { k: 'fin.payment_plans', o: 'Finance', n: 'Waiting on legal review' }]} /><N.Notice head="Institutions decide too">A flag makes a feature available. Each institution still turns it on in its own console.</N.Notice></div>;
}
function Incidents() {
  return <div className="two"><Card title="INC-0193 · Sev 2 · Grade sync delayed" aside={<N.StatusChip status="pending" label="Mitigating" />}><N.Fields items={[{ field: 'Impact', value: 'Brightspace grades 2 h behind at 3 tenants' }, { field: 'Technical lead', value: 'R. Okafor' }, { field: 'Comms lead', value: 'S. Diaz' }, { field: 'Status page', value: 'Updated 14 min ago' }]} /><div className="row"><N.Button variant="primary">Post update</N.Button><N.Button>Pause affected rollout</N.Button></div></Card>
    <Card title="Timeline"><N.DecisionTrail items={[{ title: 'Triage', when: '09:02', state: 'done' }, { title: 'Severity declared · Sev 2', when: '09:10', state: 'done' }, { title: 'Mitigation · queue drained', when: '09:41', state: 'current' }, { title: 'Resolved', state: 'waiting' }, { title: 'Postmortem within 5 days', state: 'waiting' }]} /></Card></div>;
}
function BreakGlass() {
  const [st, setSt] = useState('pending');
  return <div className="two"><Card title="Break-glass · Belmont University"><N.Fields items={[{ field: 'Requested by', value: 'A. Kim (support engineering)' }, { field: 'Reason', value: 'SSO loop for all faculty since 08:40 · TCK-8902' }, { field: 'Scope', value: 'Tenant identity configuration only' }, { field: 'Duration', value: '2 h (max 4 h)' }]} /><N.ApprovalBanner state={st} what="Grant 2 h configuration access" requestedBy="A. Kim" approver="Security on-call" onApprove={() => setSt('approved')} onReject={() => setSt('rejected')} /></Card>
    <N.Notice head="⊘ Never included">Student records, grades, messages or files. Every action during the session is recorded and sent to Belmont’s IT admin.</N.Notice></div>;
}
function ClaimsRegister() {
  const rows = [['“FERPA-aligned data handling”', 'Site · Trust page', 'Evidence: DPA template, access review', 'verified'], ['“SOC 2 Type II”', 'Sales deck', 'Audit in progress · not yet claimable', 'hold'], ['“Works with Banner”', 'Product page', 'Connector live at 6 tenants', 'verified'], ['“99.9% uptime”', 'Pricing', 'SLO met 2 of last 3 months', 'review']];
  return <div className="stack"><N.DataTable caption="Public claims and their evidence" columns={[{ key: 0, label: 'Claim' }, { key: 1, label: 'Where' }, { key: 2, label: 'Evidence' }, { key: 3, label: 'Status', render: (r) => <N.StatusChip status={r[3] === 'review' ? 'pending' : r[3]} label={r[3] === 'hold' ? 'Do not use' : r[3] === 'review' ? 'Needs review' : 'Supported'} /> }]} rows={rows.map((r) => ({ ...r }))} /><N.Notice head="Rule">No claim goes public without evidence on file. Unsupported claims are pulled from every surface listed.</N.Notice></div>;
}

Object.assign(window.ATLAS_BESPOKE = window.ATLAS_BESPOKE || {}, {
  'H:Community feed': CommunityFeed, 'H:Comments/reactions': CommunityFeed, 'H:Report content': ReportContent, 'H:Mod: Reports queue': ModReports, 'H:Mod: Content review': ModReports, 'H:Mod: Appeals': AppealDecision, 'H:Appeal decision': AppealDecision, 'H:Alias/pseudonym settings': AliasSettings, 'H:Set profile visibility per field': AliasSettings, 'H:Arrange safe meet-up': SafeMeetup,
  'I:Consent scope': ConsentScope, 'I:Shared categories': ConsentScope, 'I:Time-limited access': ConsentScope, 'I:Shared items': FamilyShared, 'I:Access history': AccessHistory, 'I:Audit retained': AccessHistory, 'I:Revocation': Revocation,
  'J:Skill evidence': SkillEvidence, 'J:Verified skill claims': SkillEvidence, 'J:Portfolio': SkillEvidence, 'J:Applications': ApplicationsJ, 'J:Employer: Consent-based profile': EmployerConsentProfile, 'J:Employer: Opportunity creation': EmployerOpportunity, 'J:Credential wallet': CredentialWallet, 'J:Alumni: Credential history': CredentialWallet,
  'N:Executive Overview': ExecOverview, 'N:Tenant 360': Tenant360, 'N:Refunds/credits': RefundsJ, 'N:Feature flags': FeatureFlags, 'N:Incidents': Incidents, 'N:Break-glass': BreakGlass, 'N:Claims register': ClaimsRegister,
});
})();
