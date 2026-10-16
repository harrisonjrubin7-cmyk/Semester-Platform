// Grouped, filterable navigation rail for large workspaces + workspace-aware mobile tabs. Loaded last before render.
const NVX = window.SemesterDesignSystem_e9f3ba;
window.SEM_NAV_GROUPS = {
  student: [['Today', ['today', 'firstrun', 'briefing', 'nextsteps', 'actions', 'notifications', 'calendar', 'masterplan', 'launchpad', 'search', 'changes']], ['Classes', ['courses', 'assignments', 'coursework', 'quiz', 'feedback', 'grades', 'gradebook', 'study', 'toolkit', 'teach', 'write', 'solve', 'sources', 'groupwork']], ['Degree and registration', ['degree', 'scenario', 'advise', 'majors', 'regplan', 'registration', 'register', 'advising', 'transcript', 'recovery']], ['AI', ['ai', 'recommendation']], ['Money', ['account', 'bill', 'plan']], ['Campus life', ['clubs', 'activities', 'opportunities', 'market', 'abroad', 'housing', 'housingportal', 'dining', 'maps', 'career']], ['Social and network', ['feed', 'me-social', 'social-privacy', 'community', 'network', 'messages']], ['Me', ['me', 'profile', 'family', 'help', 'privacy', 'trustroom', 'everything']]],
  trust: [['Records and access', ['audit', 'matrix', 'monitor', 'permissions', 'ferpa', 'fieldmap', 'dataflow', 'revocation', 'drills', 'cloud', 'contract', 'dpa']], ['Social safety', ['social', 'ranking', 'safety', 'incident', 'manage']], ['AI governance', ['airisk', 'aiaudit', 'release']]],
  studio: [['Work', ['home', 'files', 'course', 'make', 'assignment']], ['Create', ['doc', 'sheet', 'slides', 'math', 'research', 'export']], ['Collaborate', ['share', 'session', 'sync', 'branches', 'grading']], ['Plan and AI', ['calendar', 'assistant', 'ask', 'intelligence', 'policy']]],
  institution: [['Operate', ['os', 'queue', 'term', 'announce', 'handoffs', 'documents']], ['Registrar', ['registrar', 'regops', 'records', 'exceptions', 'substitutions', 'onbverify']], ['Configure', ['people', 'integrations', 'authority', 'entitlements', 'activation', 'segments', 'workflows']]],
  company: [['Revenue', ['home', 'pipeline', 'quotes', 'contracts', 'agreements', 'billing', 'lifecycle']], ['Finance', ['ledger', 'recon', 'payouts', 'risk']], ['Customers', ['account', 'support', 'playbooks', 'kb', 'vendors', 'os']]],
  operations: [['Run', ['home', 'incidents', 'releases', 'access', 'privacy', 'deadletters', 'notify', 'architecture']], ['Integrations', ['lti', 'ltiseq', 'lticompliance', 'ltitrace', 'jwt']], ['Social delivery', ['feeddelivery']]],
  faculty: [['Teach', ['home', 'course', 'roster', 'announce']], ['Assess', ['builder', 'bank', 'inbox', 'grading', 'grade', 'gradebook', 'gbcontrols', 'posting', 'requests']], ['LMS sync', ['gradesync', 'lineitem', 'coursecopy']]],
  social: [['Browse', ['home', 'reels', 'video', 'thread', 'comments']], ['Create and profile', ['compose', 'profile', 'project', 'studio', 'accounts']], ['Quality', ['tests']]],
};
window.SEM_TABS = {
  student: [['today', 'Today', 'today'], ['courses', 'Courses', 'courses'], ['feed', 'Feed', 'classmates'], ['ai', 'Ask', 'ask'], ['__menu', 'More', 'apps']],
  studio: [['home', 'Home', 'today'], ['files', 'Files', 'apps'], ['make', 'Make', 'write'], ['calendar', 'Calendar', 'today'], ['__menu', 'More', 'apps']],
  social: [['home', 'Home', 'today'], ['reels', 'Video', 'opportunities'], ['compose', 'Create', 'write'], ['profile', 'Profile', 'person'], ['__menu', 'More', 'apps']],
};
function SemRail({ W, ws, page }) {
  const [q, setQ] = React.useState(''); const [shut, setShut] = window.useLS('sem-nav-shut-' + ws, {});
  const G = window.SEM_NAV_GROUPS[ws]; const byKey = Object.fromEntries(W.nav.map((n) => [n[0], n]));
  const link = ([k, l, ic]) => <a key={k} href={'#/' + ws + '/' + k} aria-current={page === k || (!page && k === W.nav[0][0]) ? 'page' : undefined}><NVX.Icon name={ic} /><span>{l}</span></a>;
  const match = (n) => !q || n[1].toLowerCase().includes(q.toLowerCase());
  const big = W.nav.length > 12;
  let groups = null;
  if (G) { const used = new Set(G.flatMap((g) => g[1])); const rest = W.nav.filter((n) => !used.has(n[0])).map((n) => n[0]); groups = [...G, ...(rest.length ? [['More', rest]] : [])].map(([t, ks]) => [t, ks.map((k) => byKey[k]).filter(Boolean)]).filter((g) => g[1].length); }
  return <nav className="rail" aria-label={W.label + ' navigation'}>{big && <input className="ta" style={{ fontSize: 13, padding: '6px 8px', marginBottom: 6 }} placeholder={'Find in ' + W.label} value={q} onChange={(e) => setQ(e.target.value)} aria-label={'Find in ' + W.label} />}
    {groups ? groups.map(([t, items]) => { const vis = items.filter(match); if (!vis.length) return null; const open = q || !shut[t] || items.some((n) => n[0] === page); return <div key={t} style={{ display: 'grid', gap: 2 }}><button className="lnk" style={{ fontSize: 10.5, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--text-secondary)', padding: '10px 10px 4px', textAlign: 'left' }} aria-expanded={!!open} onClick={() => setShut({ ...shut, [t]: !shut[t] })}>{open ? '▾' : '▸'} {t}</button>{open && vis.map(link)}</div>; }) : W.nav.filter(match).map(link)}
    {q && !W.nav.some(match) && <span className="muted" style={{ padding: 10, fontSize: 13 }}>No match.</span>}</nav>;
}
window.SemRail = SemRail;

function SemMobileMenu() {
  const ws = (location.hash.split('/')[1]) || 'student'; const W = window.SEM_WS[ws] || window.SEM_WS.student; const [q, setQ] = React.useState('');
  const G = window.SEM_NAV_GROUPS[ws]; const byKey = Object.fromEntries(W.nav.map((n) => [n[0], n])); const used = new Set(G ? G.flatMap((g) => g[1]) : []);
  const groups = G ? [...G.map(([t, ks]) => [t, ks.map((k) => byKey[k]).filter(Boolean)]), ['More', W.nav.filter((n) => !used.has(n[0]))]].filter((g) => g[1].length) : [[W.label, W.nav]];
  const m = (n) => !q || n[1].toLowerCase().includes(q.toLowerCase());
  return <div className="stack"><div className="ph"><div><div className="kicker">{W.label}</div><h1>Menu</h1></div></div>
    <label className="lbl" htmlFor="mm-ws">Switch workspace</label><select id="mm-ws" className="ta" value={ws} onChange={(e) => { location.hash = '/' + e.target.value + '/' + window.SEM_WS[e.target.value].nav[0][0]; }}>{window.SEM_OS_GROUPS.map(([g, ids]) => <optgroup key={g} label={g}>{ids.filter((k) => window.SEM_WS[k]).map((k) => <option key={k} value={k}>{window.SEM_WS[k].label}</option>)}</optgroup>)}</select>
    <input className="ta" placeholder={'Find in ' + W.label} value={q} onChange={(e) => setQ(e.target.value)} aria-label="Find a screen" />
    {groups.map(([t, items]) => { const vis = items.filter(m); return vis.length ? <div key={t} className="card"><div className="lbl">{t}</div>{vis.map(([k, l, ic]) => <a key={k} className="li" style={{ textDecoration: 'none', color: 'inherit', minHeight: 44 }} href={'#/' + ws + '/' + k}><span className="row"><NVX.Icon name={ic} />{l}</span><span className="muted">›</span></a>)}</div> : null; })}</div>;
}
Object.keys(window.SEM_WS).forEach((ws) => { window.SEM_SCREENS[ws] = window.SEM_SCREENS[ws] || {}; window.SEM_SCREENS[ws].__menu = SemMobileMenu; });
