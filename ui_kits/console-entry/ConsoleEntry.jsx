const CE = window.SemesterDesignSystem_e9f3ba;
function SegCE({ label, ...p }) { return <div className="seg-field"><span className="seg-label" aria-hidden="true">{label}</span><CE.Segmented label={label} {...p} /></div>; }
// Mirrors app/src/lib/console/workspaces.ts at main (e560ee09f5bb). Sample grants only.
const WS = [['command', 'Command center', 'console:operate', 'platform'], ['support', 'Support', 'support:ticket', 'platform'], ['approvals', 'Approvals', 'console:operate', 'platform'], ['breakglass', 'Break-glass', 'console:operate', 'platform'], ['audit', 'Audit', 'console:operate', 'platform'], ['tenant-operations', 'Tenant operations', 'tenant:implement', 'school'], ['privacy', 'Privacy requests', 'data_request:handle', 'school'], ['integration-health', 'Integration health', 'integration:view', 'school'], ['release-incidents', 'Release & incidents', 'incident:communicate', 'platform'], ['customers', 'Customers', 'console:operate', 'platform'], ['figures', 'Figures', 'console:operate', 'platform'], ['finance', 'Finance model', 'console:operate', 'platform'], ['releases', 'Releases and flags', 'console:operate', 'platform'], ['launch', 'Launch readiness', 'console:operate', 'platform'], ['controls', 'Trust controls', 'console:operate', 'platform'], ['evidence', 'Evidence', 'console:operate', 'platform'], ['views', 'Views', 'console:operate', 'platform']];
const GRANTS = [['console:operate', 'platform', 'Console shell'], ['support:ticket', 'platform', 'Support queue'], ['tenant:implement', 'school', 'Tenant operations · Fisk University'], ['data_request:handle', 'school', 'Privacy requests · Fisk University'], ['integration:view', 'school', 'Integration health · Fisk University'], ['incident:communicate', 'platform', 'Release & incidents']];
const PEOPLE = { student: { name: 'Elena Reyes', email: 'elena.reyes@vanderbilt.edu', grants: [] }, operator: { name: 'Jordan Patel', email: 'jordan@semester.app', grants: ['console:operate', 'support:ticket'] }, impl: { name: 'Ana Ruiz', email: 'ana@semester.app', grants: ['console:operate', 'tenant:implement', 'integration:view'] } };

function ConsoleEntry() {
  const [who, setWho] = React.useState('operator'); const [g, setG] = React.useState(PEOPLE.operator.grants); const [cloud, setCloud] = React.useState(true); const [signed, setSigned] = React.useState(true); const [flag, setFlag] = React.useState(false);
  const [menu, setMenu] = React.useState(true); const [screen, setScreen] = React.useState('app'); const [tab, setTab] = React.useState('command'); const [typed, setTyped] = React.useState(false);
  const pick = (k) => { setWho(k); setG(PEOPLE[k].grants); setScreen('app'); setMenu(true); setTyped(false); setTab('command'); };
  const p = PEOPLE[who];
  const holds = g.includes('console:operate');
  const visible = WS.filter(([id, , cap]) => g.includes(cap) && (id !== 'support' || flag));
  const showEntry = cloud && signed && holds;
  const gate = !cloud ? 'Sign in with an operator account to open the operations console. There is no demo of it: without the account service there is nothing to operate.' : !signed ? 'Sign in with an operator account to open the operations console.' : !holds ? 'This account holds no console:operate grant at platform scope, so there is nothing to show. Grants come from role_grants, not from a setting.' : null;
  const cur = visible.find((w) => w[0] === tab) ? tab : (visible[0] || [])[0];
  const open = () => { setScreen('console'); setMenu(false); };
  return <div className="ce-wrap">
    <aside className="ce-ctl"><div className="kicker">Try it as</div>
      <SegCE label="Account" value={who} onChange={pick} options={[{ value: 'student', label: 'Student' }, { value: 'operator', label: 'Support operator' }, { value: 'impl', label: 'Implementation' }]} />
      <div className="kicker">Grants in role_grants (sample)</div>
      {GRANTS.map(([c, s, l]) => <CE.Switch key={c} label={l + ' · ' + c} checked={g.includes(c)} onChange={(v) => setG(v ? [...g, c] : g.filter((x) => x !== c))} />)}
      <div className="kicker">Environment</div>
      <CE.Switch label="Account service configured (cloudConfigured)" checked={cloud} onChange={setCloud} />
      <CE.Switch label="Signed in" checked={signed} onChange={setSigned} />
      <CE.Switch label="supportTickets flag on" checked={flag} onChange={setFlag} />
      <CE.Notice head="What this shows">The proposed Operations entry (Phase B), and the real console gate and workspace filter from the repo. The entry is discovery only; the database still authorizes every read.</CE.Notice>
      <a href="../../docs/operations/Operations%20Console%20Visibility.html" target="_blank" rel="noreferrer">Visibility audit ↗</a></aside>
    <div className="ce-app">
      <header className="ce-top"><span className="ce-brand">Semester</span><span className="ce-where">{screen === 'console' ? 'Operations' : 'Today'}</span>
        <button type="button" className="ce-me" aria-expanded={menu} aria-haspopup="menu" onClick={() => setMenu(!menu)}>{signed ? p.name.split(' ').map((x) => x[0]).join('') : '?'}</button></header>
      {menu && <div className="ce-menu" role="menu" aria-label="Account">
        {signed ? <div className="ce-id"><b>{p.name}</b><span>{p.email}</span></div> : <div className="ce-id"><b>Not signed in</b></div>}
        <div className="ce-sec">Workspaces</div>
        <button role="menuitemradio" aria-checked={screen === 'app'} className="ce-item" onClick={() => { setScreen('app'); setMenu(false); }}><span>Semester</span><small>Your term</small></button>
        {showEntry && <button role="menuitemradio" aria-checked={screen === 'console'} className="ce-item" onClick={open}><span>Operations</span><small>{visible.length} workspace{visible.length === 1 ? '' : 's'} · from your grants</small></button>}
        <div className="ce-sep"></div>
        <button role="menuitem" className="ce-item"><span>Profile</span></button><button role="menuitem" className="ce-item"><span>{signed ? 'Sign out' : 'Sign in'}</span></button>
        {!showEntry && <p className="ce-note">{!cloud ? 'No Operations entry: this build has no account service.' : !signed ? 'No Operations entry until you sign in.' : 'No Operations entry: this account has no console:operate grant.'}</p>}
      </div>}
      <main className="ce-main">
        {screen === 'app' && <div className="stack"><div className="kicker">Wed 7 Oct</div><h1 className="ce-h1">Today</h1><p className="muted">The student app is unchanged. Students never see an Operations entry.</p>
          <div className="row"><CE.Button variant="ghost" onClick={() => { setTyped(true); setScreen('console'); setMenu(false); }}>Type #/console in the address bar</CE.Button></div></div>}
        {screen === 'console' && (gate ? <div className="stack"><div className="kicker">#/console{typed ? ' · typed directly' : ''}</div><h1 className="ce-h1">Operations console</h1><CE.Notice head="Notice">{gate}</CE.Notice><p className="muted">Direct calls to console functions are refused by the database too. This screen is a courtesy, not the authorization.</p></div>
          : <div className="stack">
            <div className="ce-ctx" role="group" aria-label="Context"><span><b>Environment</b> ◇ Staging</span><span><b>Scope</b> All</span><span><b>Operator</b> {p.email}</span><span><b>Role</b> {g.join(', ')}</span><span><b>MFA</b> Fresh · 3 min</span><span><b>Support access</b> None</span></div>
            <CE.TextField label="Filter this view" value="" onChange={() => {}} />
            <div className="ce-tabs" role="tablist" aria-label="Console views">{visible.map(([id, l]) => <button key={id} role="tab" aria-selected={id === cur} className="ce-tab" onClick={() => setTab(id)}>{l}</button>)}</div>
            {cur === 'support' ? <div className="stack"><CE.DataTable caption="Support cases · sample" columns={[{ key: 0, label: 'Case' }, { key: 1, label: 'School' }, { key: 2, label: 'Topic' }, { key: 3, label: 'Owner' }, { key: 4, label: 'Status', render: (r) => <CE.StatusChip status={r[4] === 'Open' ? 'pending' : 'approved'} label={r[4]} /> }]} rows={[['TCK-8841', 'Fisk University', 'Double charge on invoice', 'Unassigned', 'Open'], ['TCK-8902', 'Belmont University', 'SSO loop for faculty', 'A. Kim', 'Open'], ['TCK-8790', 'Vanderbilt', 'Roster missing section', 'J. Patel', 'Resolved']].map((r) => ({ ...r }))} /><p className="muted">Metadata only. Student content needs a separate, student-approved support-access window.</p></div>
              : <CE.EmptyState title={(visible.find((w) => w[0] === cur) || [, ''])[1]} body="Rendered by the existing component in app/src/components/console/. Shown here as a placeholder." />}
            <p className="muted">{WS.length - visible.length} of {WS.length} workspaces hidden from this account{!flag && g.includes('support:ticket') ? ' (Support is hidden while supportTickets is off)' : ''}.</p></div>)}
      </main></div></div>;
}
ReactDOM.createRoot(document.getElementById('root')).render(<ConsoleEntry />);
