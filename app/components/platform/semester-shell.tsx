'use client';

import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import type { ScreenDefinition } from '@/lib/platform/catalog';
import { screens } from '@/lib/platform/catalog';
import { modeFor, screenProfile, workspaceGroups, workspaceHome, workspaceNames } from '@/lib/platform/presentation';
import { upstreamDestinations, upstreamGroups, upstreamRouteFor, upstreamSemester, upstreamStudyModes } from '@/lib/platform/upstream';
import { Icon } from './icon';

type ViewState = 'default' | 'loading' | 'empty' | 'error' | 'offline' | 'denied';

const navIcons = ['home', 'book', 'calendar', 'check', 'message', 'spark'];

export function SemesterShell({ definition, workspaceScreens }: { definition: ScreenDefinition; workspaceScreens: readonly ScreenDefinition[] }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [switcherOpen, setSwitcherOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [viewState, setViewState] = useState<ViewState>('default');
  const [toast, setToast] = useState('');
  const [completeItems, setCompleteItems] = useState<string[]>([]);

  useEffect(() => {
    setMenuOpen(false);
    setSearchOpen(false);
    setViewState('default');
  }, [definition.workspace, definition.slug]);

  useEffect(() => {
    if (!toast) return;
    const timeout = window.setTimeout(() => setToast(''), 2600);
    return () => window.clearTimeout(timeout);
  }, [toast]);

  const results = useMemo(() => {
    const normalized = query.toLowerCase().trim();
    if (!normalized) return screens.slice(0, 8);
    return screens.filter((screen) => `${screen.label} ${workspaceNames[screen.workspace]}`.toLowerCase().includes(normalized)).slice(0, 10);
  }, [query]);

  const mode = modeFor(definition.workspace, definition.slug);
  const userName = definition.workspace === 'student' ? 'Maya' : definition.workspace === 'faculty' ? 'Dr. Chen' : 'Alex';

  const complete = (item: string) => {
    setCompleteItems((current) => current.includes(item) ? current.filter((value) => value !== item) : [...current, item]);
    setToast(completeItems.includes(item) ? 'Moved back to your list' : 'Nice work — marked complete');
  };

  return (
    <div className="semester-app">
      <aside className={`sidebar ${menuOpen ? 'is-open' : ''}`} aria-label="Semester navigation">
        <div className="brand-row">
          <Link href="/os/student/today" className="brand" aria-label="Semester home"><span className="brand-glyph">S</span><span>semester</span></Link>
          <button className="icon-button sidebar-close" onClick={() => setMenuOpen(false)} aria-label="Close menu"><Icon name="close" /></button>
        </div>

        <button className="workspace-switcher" onClick={() => setSwitcherOpen(!switcherOpen)} aria-expanded={switcherOpen}>
          <span className="workspace-avatar">{workspaceNames[definition.workspace]?.slice(0, 1)}</span>
          <span><small>Workspace</small><strong>{workspaceNames[definition.workspace]}</strong></span>
          <Icon name="chevron" size={16} className={switcherOpen ? 'rotate' : ''} />
        </button>

        {switcherOpen && <div className="workspace-menu">
          {workspaceGroups.map((group) => <div key={group.label}><p>{group.label}</p>{group.workspaces.map((workspace) => <Link key={workspace} href={`/os/${workspace}/${workspaceHome[workspace]}`} className={workspace === definition.workspace ? 'active' : ''}>{workspaceNames[workspace]}</Link>)}</div>)}
        </div>}

        <nav className="screen-nav" aria-label={`${workspaceNames[definition.workspace]} screens`}>
          <p className="nav-label">Workspace</p>
          {workspaceScreens.map((screen, index) => (
            <Link key={screen.slug} href={`/os/${screen.workspace}/${screen.slug}`} className={screen.slug === definition.slug ? 'active' : ''}>
              <Icon name={navIcons[index % navIcons.length]} size={18} /><span>{screen.label}</span>{screen.slug === definition.slug && <i />}
            </Link>
          ))}
        </nav>

        <div className="sidebar-footer">
          <button onClick={() => setToast('Help center opened')}><span className="help-dot">?</span>Help & support</button>
          <div className="profile-row"><div className="profile-avatar">{userName.split(' ').map((part) => part[0]).join('')}</div><span><strong>{userName} Rivera</strong><small>{definition.workspace === 'student' ? 'Class of 2027' : workspaceNames[definition.workspace]}</small></span><Icon name="more" size={18} /></div>
        </div>
      </aside>

      {menuOpen && <button className="scrim" onClick={() => setMenuOpen(false)} aria-label="Close navigation" />}

      <div className="app-main">
        <header className="topbar">
          <button className="icon-button mobile-menu" onClick={() => setMenuOpen(true)} aria-label="Open menu"><Icon name="menu" /></button>
          <button className="global-search" onClick={() => setSearchOpen(true)}><Icon name="search" size={18} /><span>Search Semester</span><kbd>⌘ K</kbd></button>
          <div className="top-actions">
            <div className="status-pill"><span />All systems connected</div>
            <button className="icon-button" aria-label="Ask Semester" onClick={() => setToast('Semester Intelligence is ready')}><Icon name="spark" /></button>
            <button className="icon-button notification-button" aria-label="Notifications" onClick={() => setToast('You’re all caught up')}><Icon name="bell" /><i /></button>
          </div>
        </header>

        <main id="main-content" className="content">
          <div className="page-topline">
            <div><div className="eyebrow"><span>{workspaceNames[definition.workspace]}</span><b>•</b>{mode}</div><h1>{definition.label}</h1><p>{subtitleFor(definition, userName)}</p></div>
            <div className="page-actions">
              <select aria-label="Preview screen state" value={viewState} onChange={(event) => setViewState(event.target.value as ViewState)}>
                <option value="default">Live view</option><option value="loading">Loading</option><option value="empty">Empty</option><option value="error">Error</option><option value="offline">Offline</option><option value="denied">No permission</option>
              </select>
              <button className="primary-button" onClick={() => setToast(primaryAction(definition))}><Icon name="plus" size={17} />{primaryLabel(definition)}</button>
            </div>
          </div>

          <SourceBar mode={mode} />
          <ScreenState state={viewState} onReset={() => setViewState('default')}>
            <ScreenContent definition={definition} completed={completeItems} onComplete={complete} onToast={setToast} />
          </ScreenState>
        </main>
      </div>

      {searchOpen && <div className="command-backdrop" role="presentation" onMouseDown={() => setSearchOpen(false)}>
        <div className="command-palette" role="dialog" aria-modal="true" aria-label="Search Semester" onMouseDown={(event) => event.stopPropagation()}>
          <div className="command-input"><Icon name="search" /><input autoFocus value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search screens, tools, and people…" /><button onClick={() => setSearchOpen(false)}>esc</button></div>
          <p className="command-label">{query ? 'Best matches' : 'Quick access'}</p>
          <div className="command-results">{results.map((screen) => <Link key={`${screen.workspace}-${screen.slug}`} href={`/os/${screen.workspace}/${screen.slug}`}><span className="result-icon"><Icon name="grid" size={18} /></span><span><strong>{screen.label}</strong><small>{workspaceNames[screen.workspace]}</small></span><Icon name="arrow" size={17} /></Link>)}</div>
        </div>
      </div>}

      {toast && <div className="toast" role="status"><Icon name="check" size={18} />{toast}</div>}
    </div>
  );
}

function SourceBar({ mode }: { mode: string }) {
  const connected = mode !== 'Native';
  return <div className="source-bar"><span className={`source-icon ${connected ? 'connected' : ''}`}><Icon name={connected ? 'shield' : 'spark'} size={16} /></span><div><strong>{mode}</strong><small>{connected ? 'Synced with the university system 4 min ago' : 'Managed securely in Semester'}</small></div><span className="source-health"><i />{connected ? 'Current' : 'Saved'}</span></div>;
}

function ScreenState({ state, onReset, children }: { state: ViewState; onReset: () => void; children: React.ReactNode }) {
  if (state === 'default') return <>{children}</>;
  if (state === 'loading') return <div className="state-grid"><div className="skeleton wide"/><div className="skeleton"/><div className="skeleton"/><div className="skeleton tall"/></div>;
  const copy = {
    empty: ['A clean slate', 'There’s nothing here yet. Create your first item when you’re ready.', 'Create item', 'spark'],
    error: ['We hit a snag', 'Your work is safe. Try loading this view again.', 'Try again', 'shield'],
    offline: ['You’re working offline', 'Changes will sync automatically when your connection returns.', 'Keep working', 'cloud'],
    denied: ['This space is restricted', 'Ask your workspace administrator if you need access.', 'Request access', 'shield'],
  }[state];
  return <div className="empty-state"><span><Icon name={copy[3]} size={30}/></span><h2>{copy[0]}</h2><p>{copy[1]}</p><button className="secondary-button" onClick={onReset}>{copy[2]}</button></div>;
}

function ScreenContent({ definition, completed, onComplete, onToast }: { definition: ScreenDefinition; completed: string[]; onComplete: (item: string) => void; onToast: (message: string) => void }) {
  const slug = definition.slug;
  if ((definition.workspace === 'os' && slug === 'home') || (definition.workspace === 'student' && slug === 'today')) return <UpstreamSemesterScreen />;
  if (definition.workspace === 'institution' && ['integrations', 'activation', 'authority'].includes(slug)) return <LiveIntegrationsScreen onToast={onToast} />;
  const upstreamRoute = upstreamRouteFor(definition);
  if (upstreamRoute) return <LiveProductRoute definition={definition} route={upstreamRoute} />;
  if (['grades', 'gradebook', 'transcript', 'records', 'roster'].some((word) => slug.includes(word))) return <AcademicScreen definition={definition} onToast={onToast} />;
  if (definition.workspace === 'studio' || ['write', 'solve', 'coursework', 'builder'].includes(slug)) return <StudioScreen definition={definition} onToast={onToast} />;
  if (['social', 'messages', 'feed', 'community', 'network', 'thread'].some((word) => slug.includes(word)) || definition.workspace === 'social') return <CommunityScreen definition={definition} onToast={onToast} />;
  if (['operations', 'trust', 'institution', 'executive', 'insights', 'company'].includes(definition.workspace)) return <OperationsScreen definition={definition} onToast={onToast} />;
  return <UniversalScreen definition={definition} completed={completed} onComplete={onComplete} onToast={onToast} />;
}

function LiveProductRoute({ definition, route }: { definition: ScreenDefinition; route: string }) {
  const href = `${upstreamSemester.production}#/${route}`;
  return <section className="panel upstream-frame-card live-product-route">
    <div className="frame-toolbar">
      <span><i/>Live Semester runtime · {definition.component}</span>
      <code>/{route}</code>
      <a href={href} target="_blank" rel="noreferrer" aria-label={`Open ${definition.label} in a new tab`}><Icon name="arrow" size={16}/></a>
    </div>
    <iframe className="upstream-frame" title={`${definition.label} live application`} src={href} allow="microphone; camera; clipboard-read; clipboard-write" />
  </section>;
}

function UpstreamSemesterScreen() {
  const [view, setView] = useState<'product' | 'catalog' | 'system'>('product');
  const [filter, setFilter] = useState('');
  const destinations = upstreamDestinations.filter((item) => `${item.label} ${item.group}`.toLowerCase().includes(filter.toLowerCase()));

  return <div className="upstream-shell">
    <section className="panel upstream-hero">
      <div>
        <p className="card-kicker">GITHUB MAIN · {upstreamSemester.commit}</p>
        <h2>The complete Semester product is connected.</h2>
        <p>This workspace now carries the repository’s production experience alongside the broader role and institutional OS. Open the live product here, inspect every registered destination, or review the incorporated system surface.</p>
      </div>
      <div className="upstream-actions">
        <a className="secondary-action" href={upstreamSemester.repository} target="_blank" rel="noreferrer">View repository <Icon name="arrow" size={15}/></a>
        <a className="primary-button" href={upstreamSemester.production} target="_blank" rel="noreferrer">Open full screen <Icon name="arrow" size={15}/></a>
      </div>
      <div className="upstream-metrics">
        <Metric label="Destinations" value={String(upstreamSemester.stats.destinations)} note="From the live registry"/>
        <Metric label="Study modes" value={String(upstreamSemester.stats.studyModes)} note="One course, many ways"/>
        <Metric label="Routed screens" value={`${upstreamSemester.stats.routedScreens}+`} note="Lazy-loaded product UI"/>
        <Metric label="Verification" value="1,620" note="Repository test files"/>
      </div>
    </section>

    <div className="upstream-tabs" role="tablist" aria-label="Full Semester views">
      {([['product', 'Live product'], ['catalog', 'Product catalog'], ['system', 'System map']] as const).map(([id, label]) => <button key={id} role="tab" aria-selected={view === id} className={view === id ? 'active' : ''} onClick={() => setView(id)}>{label}</button>)}
    </div>

    {view === 'product' && <section className="panel upstream-frame-card">
      <div className="frame-toolbar"><span><i/>Production · GitHub Pages</span><code>{upstreamSemester.production}</code><a href={upstreamSemester.production} target="_blank" rel="noreferrer" aria-label="Open product in a new tab"><Icon name="arrow" size={16}/></a></div>
      <iframe className="upstream-frame" title="Complete Semester production application" src={upstreamSemester.production} allow="microphone; camera; clipboard-read; clipboard-write" />
    </section>}

    {view === 'catalog' && <section className="panel upstream-catalog">
      <div className="catalog-head"><div><p className="card-kicker">APP/SRC/LIB/NAV.TS</p><h2>Every product destination</h2></div><label><Icon name="search" size={16}/><input value={filter} onChange={(event) => setFilter(event.target.value)} placeholder="Filter products…" /></label></div>
      <div className="destination-groups">{upstreamGroups.map((group) => {
        const items = destinations.filter((item) => item.group === group);
        if (!items.length) return null;
        return <div className="destination-group" key={group}><h3>{group}<span>{items.length}</span></h3><div>{items.map((item) => <a key={item.screen} href={`${upstreamSemester.production}#/${item.screen}`} target="_blank" rel="noreferrer"><span>{item.label.slice(0, 1)}</span><strong>{item.label}</strong><Icon name="arrow" size={14}/></a>)}</div></div>;
      })}</div>
    </section>}

    {view === 'system' && <div className="upstream-system">
      <section className="panel"><p className="card-kicker">LEARNING ENGINE</p><h2>Eleven ways through the same material</h2><div className="mode-cloud">{upstreamStudyModes.map((mode, index) => <span key={mode}><b>{String(index + 1).padStart(2, '0')}</b>{mode}</span>)}</div></section>
      <section className="panel system-layers"><p className="card-kicker">INCORPORATED SURFACE</p><h2>Repository capability layers</h2>{[
        ['Product', 'Student semester, course, study, creation, campus, life and beyond-term experiences'],
        ['Institution', 'Operations console, role gates, registration, gradebook, enrollment and support workflows'],
        ['Intelligence', 'Grounded assistance, source validation, provider routing, evaluation and kill switches'],
        ['Platform', 'Offline PWA, sync, import/export, notifications, deep links, accessibility and responsive shells'],
        ['Assurance', '238 database migrations, audit evidence, privacy controls, release profiles and operational registers'],
      ].map(([name, copy], index) => <div key={name}><span>{index + 1}</span><p><strong>{name}</strong><small>{copy}</small></p><Icon name="check" size={15}/></div>)}</section>
    </div>}
  </div>;
}

const integrationCapabilities = [
  { id: 'sis.read', name: 'Student information system', provider: 'OneRoster 1.2', description: 'Stage sessions, courses, users, and enrollments for reconciliation.', status: 'Sandbox', tone: 'green' },
  { id: 'lms.lti', name: 'Learning management system', provider: 'LTI 1.3', description: 'Verified course launches with single-use nonces and deployment allow-lists.', status: 'Ready', tone: 'green' },
  { id: 'messaging.send', name: 'Connected messaging', provider: 'Postmark + in-app', description: 'Institution-scoped messages with delivery state and rate limits.', status: 'Off', tone: 'soft' },
  { id: 'payments.checkout', name: 'Payments', provider: 'Stripe Checkout', description: 'Hosted checkout and signature-verified, forward-only payment status.', status: 'Off', tone: 'soft' },
  { id: 'writes.registration', name: 'Institutional commands', provider: 'SIS outbox', description: 'Idempotent registration, grade, and record command receipts.', status: 'Off', tone: 'soft' },
];

function LiveIntegrationsScreen({ onToast }: { onToast: (message: string) => void }) {
  const [selected, setSelected] = useState(integrationCapabilities[0]);
  const [approval, setApproval] = useState('');
  const [enabled, setEnabled] = useState<string[]>(['sis.read', 'lms.lti']);
  const [killSwitch, setKillSwitch] = useState(false);

  const toggle = () => {
    if (!enabled.includes(selected.id) && !approval.trim()) {
      onToast('Approval reference is required before activation');
      return;
    }
    setEnabled((current) => current.includes(selected.id) ? current.filter((id) => id !== selected.id) : [...current, selected.id]);
    onToast(enabled.includes(selected.id) ? `${selected.name} switched off` : `${selected.name} enabled for sandbox testing`);
  };

  return <div className="integration-layout">
    <section className="panel integration-list">
      <div className="panel-heading"><div><p className="card-kicker">CONNECTIONS</p><h2>Live capabilities</h2></div><span className="environment-badge"><i/>Sandbox</span></div>
      <p className="integration-intro">Every connection is off by default, scoped to this institution, and checked again on every request.</p>
      {integrationCapabilities.map((capability) => {
        const isEnabled = enabled.includes(capability.id) && !killSwitch;
        return <button key={capability.id} className={selected.id === capability.id ? 'active' : ''} onClick={() => setSelected(capability)}>
          <span className="integration-mark"><Icon name={capability.id.includes('payments') ? 'grid' : capability.id.includes('messaging') ? 'message' : 'shield'} size={18}/></span>
          <span><strong>{capability.name}</strong><small>{capability.provider}</small></span>
          <span className={`badge ${isEnabled ? 'green' : 'soft'}`}>{isEnabled ? capability.status : killSwitch && enabled.includes(capability.id) ? 'Locked' : 'Off'}</span>
          <Icon name="chevron" size={15}/>
        </button>;
      })}
    </section>

    <section className="panel integration-detail">
      <div className="integration-title"><span className="integration-mark large"><Icon name="shield"/></span><div><p className="card-kicker">{selected.id}</p><h2>{selected.name}</h2><p>{selected.description}</p></div><button className={`capability-toggle ${enabled.includes(selected.id) && !killSwitch ? 'on' : ''}`} onClick={toggle} aria-label={`Toggle ${selected.name}`}><i/></button></div>
      <div className="guardrail-callout"><Icon name="shield" size={18}/><div><strong>Deny by default</strong><p>Activation requires a named approver, an approval reference, an active connection, and a workspace grant. The kill switch wins immediately.</p></div></div>
      <div className="integration-form">
        <label><span>Connection</span><div><i className="healthy"/>Vanderbilt sandbox · {selected.provider}</div></label>
        <label><span>Approval reference</span><input value={approval} onChange={(event) => setApproval(event.target.value)} placeholder="e.g. STAGING-TEST-001" /></label>
        <label><span>Last verification</span><div>October 11, 2026 at 5:42 PM CT</div></label>
      </div>
      <div className="detail-actions"><button className="secondary-action" onClick={() => onToast(`${selected.name} connection test passed in sandbox`)}>Run connection test</button><button className="primary-button" onClick={toggle}>{enabled.includes(selected.id) ? 'Disable capability' : 'Enable in sandbox'}</button></div>
      <div className="kill-switch"><div><span><Icon name="shield" size={16}/></span><p><strong>Emergency kill switch</strong><small>Refuses all calls within one request, even when the capability is enabled.</small></p></div><button className={killSwitch ? 'is-on' : ''} onClick={() => { setKillSwitch(!killSwitch); onToast(!killSwitch ? 'Kill switch engaged — live calls are locked' : 'Kill switch released'); }}><i/></button></div>
    </section>

    <section className="panel integration-events"><div className="panel-heading"><div><p className="card-kicker">AUDIT TRAIL</p><h2>Recent connection events</h2></div><button className="text-button" onClick={() => onToast('Audit package prepared')}>Export evidence</button></div>{[
      ['SIS batch staged', '4,281 records · staging only', '5:42 PM', 'check'],
      ['LTI launch verified', 'ECON 201 · deployment allow-list', '4:18 PM', 'check'],
      ['Capability change blocked', 'Missing approval reference', '2:31 PM', 'shield'],
    ].map((event) => <div key={event[0]}><span><Icon name={event[3]} size={15}/></span><p><strong>{event[0]}</strong><small>{event[1]}</small></p><time>{event[2]}</time></div>)}</section>
  </div>;
}

export function TodayScreen({ completed, onComplete, onToast }: { completed: string[]; onComplete: (item: string) => void; onToast: (message: string) => void }) {
  const tasks = [
    { id: 'problem-set', time: '11:59 PM', title: 'Problem Set 6', course: 'ECON 201', tone: 'coral' },
    { id: 'reading', time: 'Tomorrow', title: 'Read: The Federalist No. 10', course: 'HIST 110', tone: 'blue' },
    { id: 'lab', time: 'Fri, 2:00 PM', title: 'Lab report draft', course: 'BSCI 151', tone: 'green' },
  ];
  return <div className="dashboard-grid">
    <section className="hero-card"><div><p className="card-kicker">SUNDAY, OCTOBER 11</p><h2>Good afternoon, Maya.</h2><p>You have a focused week ahead. Let’s make it manageable.</p><button onClick={() => onToast('Your day is open in the planner')}>Plan my day <Icon name="arrow" size={16}/></button></div><div className="progress-orbit"><span><strong>72%</strong><small>week ready</small></span></div></section>
    <section className="panel agenda-panel"><div className="panel-heading"><div><p className="card-kicker">UP NEXT</p><h2>Today’s schedule</h2></div><Link href="/os/student/calendar">Full calendar <Icon name="arrow" size={15}/></Link></div><div className="timeline">
      <div className="timeline-item is-now"><time>2:00</time><i/><div><span className="badge orange">In 25 min</span><strong>ECON 201 · Intermediate Micro</strong><small>Buttrick Hall 102 · 50 min</small></div><button aria-label="More options"><Icon name="more"/></button></div>
      <div className="timeline-item"><time>4:30</time><i/><div><strong>Study block</strong><small>Problem Set 6 · Central Library</small></div><button aria-label="More options"><Icon name="more"/></button></div>
      <div className="timeline-item"><time>6:00</time><i/><div><strong>Dinner with Sam</strong><small>Rand Dining Center</small></div><button aria-label="More options"><Icon name="more"/></button></div>
    </div></section>
    <section className="panel task-panel"><div className="panel-heading"><div><p className="card-kicker">PRIORITIES</p><h2>What needs attention</h2></div><Link href="/os/student/assignments">View all <Icon name="arrow" size={15}/></Link></div><div className="task-list">{tasks.map((task) => <button key={task.id} className={completed.includes(task.id) ? 'is-done' : ''} onClick={() => onComplete(task.id)}><span className="task-check"><Icon name="check" size={15}/></span><i className={task.tone}/><span><strong>{task.title}</strong><small>{task.course}</small></span><time>{task.time}</time></button>)}</div></section>
    <section className="panel pulse-panel"><div className="panel-heading"><div><p className="card-kicker">SEMESTER PULSE</p><h2>You’re on track</h2></div><span className="trend">↗ 4%</span></div><div className="pulse-chart"><div className="chart-bars">{[42,55,50,72,66,85,78].map((height, index) => <i key={index} style={{height: `${height}%`}} />)}</div><div className="chart-labels"><span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span><span>S</span></div></div><p className="insight"><Icon name="spark" size={17}/>Your strongest focus window is 3–5 PM. I saved two open blocks there.</p></section>
  </div>;
}

function AcademicScreen({ definition, onToast }: { definition: ScreenDefinition; onToast: (message: string) => void }) {
  const rows = [
    ['ECON 201', 'Intermediate Microeconomics', 'A−', '91.4%', 'On track'],
    ['HIST 110', 'American Political Thought', 'A', '94.8%', 'On track'],
    ['BSCI 151', 'Introductory Biology', 'B+', '88.2%', 'Watch'],
    ['MATH 2300', 'Multivariable Calculus', 'A−', '92.0%', 'On track'],
  ];
  return <div className="content-stack"><div className="metric-row"><Metric label="Current GPA" value="3.72" note="+0.08 this term"/><Metric label="Credits earned" value="74" note="61% complete"/><Metric label="This term" value="15" note="5 courses"/><Metric label="Degree progress" value="68%" note="Expected May 2027"/></div><section className="panel table-panel"><div className="panel-heading"><div><p className="card-kicker">ACADEMIC RECORD</p><h2>{definition.label}</h2></div><button className="text-button" onClick={() => onToast('Official record export prepared')}>Export record</button></div><div className="data-table"><div className="table-row table-head"><span>Course</span><span>Title</span><span>Grade</span><span>Score</span><span>Status</span></div>{rows.map((row) => <button className="table-row" key={row[0]} onClick={() => onToast(`${row[0]} details opened`)}><strong>{row[0]}</strong><span>{row[1]}</span><b>{row[2]}</b><span>{row[3]}</span><span className={`badge ${row[4] === 'Watch' ? 'orange' : 'green'}`}>{row[4]}</span></button>)}</div></section></div>;
}

function StudioScreen({ definition, onToast }: { definition: ScreenDefinition; onToast: (message: string) => void }) {
  const profile = screenProfile(definition);
  return <div className="studio-layout"><section className="panel file-rail"><div className="panel-heading"><h2>{definition.label}</h2><button onClick={() => onToast(`New ${profile.singular} created`)}><Icon name="plus" size={17}/></button></div>{profile.items.map((file, index) => <button key={file} className={index === 0 ? 'active' : ''}><span className="file-type">{profile.symbols[index]}</span><span><strong>{file}</strong><small>{index === 0 ? 'Open now' : `Edited ${index + 1}h ago`}</small></span></button>)}</section><section className="panel editor"><div className="editor-toolbar"><div><button><strong>B</strong></button><button><em>I</em></button><button>{profile.tool}</button><button>☷</button></div><span>{profile.status}</span><button className="share-button" onClick={() => onToast(`${definition.label} sharing controls opened`)}>Share</button></div><div className="paper"><p className="doc-overline">{definition.workspace} · {definition.component}</p><h2>{profile.title}</h2><p>{profile.description}</p><h3>{profile.section}</h3><p>{profile.detail}</p><div className="formula">{profile.formula}</div><p className="muted-line">{profile.prompt}</p></div><div className="assistant-dock"><Icon name="spark"/><input aria-label={`Ask Semester about ${definition.label}`} placeholder={`Ask about ${definition.label.toLowerCase()}…`}/><button onClick={() => onToast(`${definition.label} request preview ready`)}><Icon name="arrow"/></button></div></section></div>;
}

function CommunityScreen({ definition, onToast }: { definition: ScreenDefinition; onToast: (message: string) => void }) {
  const profile = screenProfile(definition);
  const posts = [
    { initials: 'JL', name: 'Jordan Lee', context: `${profile.context} · 18 min`, text: profile.community[0], color: 'gold' },
    { initials: 'AP', name: 'Avery Patel', context: `${definition.label} · 1 hr`, text: profile.community[1], color: 'green' },
  ];
  return <div className="community-layout"><div className="feed-column"><section className="panel composer"><div className="profile-avatar">MR</div><button onClick={() => onToast(`${definition.label} composer opened`)}>Share in {definition.label.toLowerCase()}…</button><button aria-label="Add media">▧</button></section>{posts.map((post, index) => <article className="panel post" key={post.name}><div className="post-author"><div className={`profile-avatar ${post.color}`}>{post.initials}</div><span><strong>{post.name}</strong><small>{post.context}</small></span><button aria-label={`More options for ${post.name}`}><Icon name="more"/></button></div><p>{post.text}</p><div className="post-placeholder"><span>{profile.items[index].toUpperCase()}</span></div><div className="post-actions"><button onClick={() => onToast('Added to helpful')}>♡ Helpful <span>{profile.seed % 17 + 3}</span></button><button onClick={() => onToast('Reply composer opened')}>○ Reply <span>{profile.seed % 6 + 1}</span></button><button onClick={() => onToast('Saved to your collection')}>⌑ Save</button></div></article>)}</div><aside className="panel community-aside"><p className="card-kicker">{definition.label.toUpperCase()}</p>{profile.items.map((circle, index) => <button key={circle}><span>{circle.slice(0,2).toUpperCase()}</span><strong>{circle}</strong><small>{(profile.seed + index * 3) % 9 + 1} new</small></button>)}</aside></div>;
}

function OperationsScreen({ definition, onToast }: { definition: ScreenDefinition; onToast: (message: string) => void }) {
  const profile = screenProfile(definition);
  return <div className="content-stack"><div className="route-identity"><span>{definition.component}</span><strong>{definition.label}</strong><small>{profile.description}</small></div><div className="metric-row">{profile.metrics.map((metric) => <Metric key={metric[0]} label={metric[0]} value={metric[1]} note={metric[2]}/>)}</div>{profile.kind === 'forecast' && <section className="panel route-forecast"><div className="panel-heading"><div><p className="card-kicker">{profile.context.toUpperCase()}</p><h2>{profile.title}</h2></div><button className="text-button" onClick={() => onToast(`${definition.label} forecast refreshed`)}>Refresh forecast</button></div><div className="forecast-chart">{profile.bars.map((height, index) => <i key={index} style={{height: `${height}%`}}><span>{index + 1}</span></i>)}</div><p><Icon name="spark" size={16}/>{profile.detail}</p></section>}<div className="ops-grid"><section className="panel table-panel"><div className="panel-heading"><div><p className="card-kicker">{profile.kicker}</p><h2>{profile.section}</h2></div><button className="text-button" onClick={() => onToast(`${definition.label} filters updated`)}>Filter</button></div><div className="queue-list">{profile.rows.map((row) => <button key={row[0]} onClick={() => onToast(`${row[0]} opened in ${definition.label}`)}><span className="record-id">{row[0]}</span><span><strong>{row[1]}</strong><small>{row[2]}</small></span><time>{row[3]}</time><span className={`badge ${row[4] === 'High' ? 'red' : row[4] === 'Watch' ? 'orange' : 'green'}`}>{row[4]}</span><Icon name="chevron" size={16}/></button>)}</div></section><aside className="panel activity-panel"><div className="panel-heading"><h2>{profile.activityTitle}</h2><button aria-label={`More ${definition.label} activity`}><Icon name="more"/></button></div>{profile.activity.map((activity, index) => <div key={activity}><span className={index === 1 ? 'orange' : ''}><Icon name={index === 1 ? 'shield' : 'check'} size={15}/></span><p><strong>{activity}</strong><small>{index * 11 + 3} min ago · {profile.context}</small></p></div>)}</aside></div></div>;
}

function UniversalScreen({ definition, completed, onComplete, onToast }: { definition: ScreenDefinition; completed: string[]; onComplete: (item: string) => void; onToast: (message: string) => void }) {
  const profile = screenProfile(definition);
  return <div className="content-stack"><div className="route-identity"><span>{definition.component}</span><strong>{definition.label}</strong><small>{profile.description}</small></div><div className="metric-row">{profile.metrics.map((metric) => <Metric key={metric[0]} label={metric[0]} value={metric[1]} note={metric[2]}/>)}</div><div className={`generic-grid route-kind-${profile.kind}`}><section className="panel"><div className="panel-heading"><div><p className="card-kicker">{profile.kicker}</p><h2>{profile.section}</h2></div><button className="text-button" onClick={() => onToast(`${definition.label} sorted`)}>Sort by priority</button></div>{profile.kind === 'forecast' && <div className="forecast-chart compact">{profile.bars.map((height, index) => <i key={index} style={{height: `${height}%`}}><span>{index + 1}</span></i>)}</div>}<div className="action-list">{profile.items.map((item, index) => <button key={item} className={completed.includes(item) ? 'is-done' : ''} onClick={() => onComplete(item)}><span className="task-check"><Icon name="check" size={15}/></span><span><strong>{item}</strong><small>{index === 0 ? `${profile.context} · updated today` : `${profile.kind} item ${index + 1}`}</small></span><span className={`badge ${index === 0 ? 'orange' : 'soft'}`}>{index === 0 ? 'Needs review' : profile.badges[index]}</span><Icon name="chevron" size={16}/></button>)}</div></section><aside className="panel next-step"><span className="feature-icon"><Icon name={profile.icon}/></span><p className="card-kicker">{profile.nextKicker}</p><h2>{profile.title}</h2><p>{profile.detail}</p><button className="primary-button" onClick={() => onToast(`${definition.label} workflow started`)}>{profile.cta} <Icon name="arrow" size={16}/></button></aside></div></div>;
}

function Metric({ label, value, note }: { label: string; value: string; note: string }) { return <div className="panel metric"><p>{label}</p><strong>{value}</strong><small>{note}</small></div>; }

function subtitleFor(definition: ScreenDefinition, name: string) {
  if (definition.workspace === 'student' && definition.slug === 'today') return `Here’s what matters today, ${name}.`;
  const descriptions: Record<string, string> = { faculty: 'Teach, assess, and support every learner from one place.', institution: 'Coordinate people, systems, and policy with a clear audit trail.', operations: 'Monitor the platform and act with confidence.', trust: 'Understand access, controls, and evidence across Semester.', studio: 'Create, think, and collaborate with governed intelligence.', social: 'Learn and connect with your campus community.' };
  return descriptions[definition.workspace] ?? `Everything you need for ${definition.label.toLowerCase()}, in one clear workspace.`;
}
function primaryLabel(definition: ScreenDefinition) { return ['home', 'today', 'overview'].includes(definition.slug) ? 'Quick action' : `New ${definition.label.toLowerCase().replace(/s$/, '')}`; }
function primaryAction(definition: ScreenDefinition) { return `${primaryLabel(definition)} started`; }
