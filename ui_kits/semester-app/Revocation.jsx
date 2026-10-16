// DC-02 revocation lab: assignment loss vs token revocation vs session invalidation (uploads/ferpa-checklist-2.pdf).
const RVX = window.SemesterDesignSystem_e9f3ba;
const RVX_INIT = { assigned: { s1: true, s2: true, s3: false }, sessions: { laptop: true, phone: true }, refresh: true, jwtRevoked: false, disabled: false, replicas: { r1: 0, r2: 0, r3: 0 }, relSvc: true, t0: null, log: [] };
function RvxLab() {
  const [s, setS] = window.useLS('sem-rvx', RVX_INIT); const [now, setNow] = React.useState(Date.now());
  React.useEffect(() => { const t = setInterval(() => setNow(Date.now()), 500); return () => clearInterval(t); }, []);
  const age = s.t0 ? (now - s.t0) / 1000 : 0; const propagated = (r) => !s.t0 || age >= [0.5, 2, 4][['r1', 'r2', 'r3'].indexOf(r)];
  const decide = (kind, opts = {}) => {
    const dev = opts.dev || 'laptop'; const rep = opts.rep || 'r1';
    if (s.disabled) return [401, 'User disabled'];
    if (!s.relSvc) return [503, 'Relationship service unavailable: fail closed'];
    if (kind === 'refresh') return s.refresh && !s.disabled ? (s.assigned.s1 ? [200, 'New token issued'] : [200, 'New token issued, but Student 1 still denied']) : [400, 'Refresh token revoked: invalid_grant'];
    if (!s.sessions[dev]) return [401, 'Session invalidated on ' + dev];
    if (kind === 'oldjwt' && s.jwtRevoked) return [401, 'JWT jti on deny-list'];
    if (!s.assigned.s1) return propagated(rep) ? [403, 'No current advising relationship'] : [200, 'Stale cache on ' + rep + ' (inside ' + (['r1', 'r2', 'r3'].indexOf(rep) === 0 ? '0.5' : ['r1', 'r2', 'r3'].indexOf(rep) === 1 ? '2' : '4') + ' s window)'];
    return [200, 'Allowed · Student 1 audit'];
  };
  const run = (label, kind, opts) => { const [code, msg] = decide(kind, opts); setS((x) => ({ ...x, log: [[new Date().toLocaleTimeString([], { hour: 'numeric', minute: '2-digit', second: '2-digit' }), label, code, msg], ...x.log].slice(0, 10) })); };
  const set = (patch, note) => setS({ ...s, ...patch, t0: note ? Date.now() : s.t0, log: note ? [[new Date().toLocaleTimeString([], { hour: 'numeric', minute: '2-digit', second: '2-digit' }), note, 'T0', 'Revocation committed'], ...s.log].slice(0, 10) : s.log });
  const tone = (c) => (c === 200 ? 'confirmed' : c === 'T0' ? 'unknown' : 'blocked');
  return <div className="stack"><div className="ph"><div><div className="kicker">Trust · DC-02</div><h1>Revocation lab</h1><p className="muted">Three different events: losing an assignment, revoking a token, invalidating a session. A still-valid login must never override a revoked student-level permission.</p></div><button className="lnk" onClick={() => setS(RVX_INIT)}>Reset</button></div>
    <div className="grid2"><div className="card"><div className="lbl">Advisor A · synthetic test identity</div>
      <RVX.Switch label="Assigned to Student 1" checked={s.assigned.s1} onChange={(v) => set({ assigned: { ...s.assigned, s1: v } }, v ? null : 'Assignment to Student 1 removed')} />
      <RVX.Switch label="Session on laptop" checked={s.sessions.laptop} onChange={(v) => set({ sessions: { ...s.sessions, laptop: v } })} />
      <RVX.Switch label="Session on phone" checked={s.sessions.phone} onChange={(v) => set({ sessions: { ...s.sessions, phone: v } })} />
      <div className="row"><RVX.Button variant="secondary" onClick={() => set({ sessions: { laptop: false, phone: false } }, 'All sessions invalidated')}>Invalidate all sessions</RVX.Button><RVX.Button variant="secondary" onClick={() => set({ refresh: false }, 'Refresh-token family revoked')}>Revoke refresh family</RVX.Button><RVX.Button variant="secondary" onClick={() => set({ jwtRevoked: true }, 'Access JWT added to deny-list')}>Deny-list JWT</RVX.Button><RVX.Button variant="secondary" onClick={() => set({ disabled: true }, 'User disabled')}>Disable user</RVX.Button></div>
      <RVX.Switch label="Relationship service available" checked={s.relSvc} onChange={(v) => set({ relSvc: v })} />
      {s.t0 && <p className="muted" style={{ margin: 0 }}>T0 + {age.toFixed(1)} s · replicas updated: {['r1', 'r2', 'r3'].filter(propagated).length}/3 · target: all new protected responses blocked within 5 s.</p>}</div>
      <div className="card"><div className="lbl">Requests</div><div className="wk">{[['Open Student 1 (laptop)', 'read', { dev: 'laptop' }], ['Open Student 1 (phone)', 'read', { dev: 'phone' }], ['Replay old JWT', 'oldjwt', {}], ['Refresh token', 'refresh', {}], ['Hit replica r2', 'read', { rep: 'r2' }], ['Hit replica r3', 'read', { rep: 'r3' }], ['Queued export: deliver', 'read', {}]].map(([l, k, o]) => <button key={l} onClick={() => run(l, k, o)}>{l}</button>)}</div>
        <div className="lbl">Results</div>{s.log.map((l, i) => <div key={i} className="li"><span><span className="mono muted" style={{ fontSize: 11 }}>{l[0]}</span> {l[1]}<div className="muted" style={{ fontSize: 12 }}>{l[3]}</div></span><span className="pill" data-tone={tone(l[2])}>{l[2]}</span></div>)}{!s.log.length && <p className="muted" style={{ margin: 0 }}>Make a request, then change something and try again.</p>}</div></div>
    <div className="card"><div className="lbl">Pass criteria</div><ul className="fl">{['Losing an assignment stops access to that student, even with a valid login', 'Session invalidation defeats copied-credential replay on every device', 'Refresh revocation covers the whole token family', 'Old JWTs are rejected within the enforcement target', 'Exports are rechecked right before delivery', 'Outages fail closed', '401 for bad authentication, 403 (or a consistent 404) for missing permission', 'Reports store token fingerprints, never raw tokens'].map((x) => <li key={x}>{x}</li>)}</ul><p className="muted" style={{ margin: 0 }}>Rotating a shared signing key to remove one advisor is the wrong tool. Already-displayed data can’t be unseen; the test proves no further delivery.</p></div></div>;
}
window.SEM_WS.trust.nav.push(['revocation', 'DC-02 revocation lab', 'privacy']);
window.SEM_SCREENS.trust.revocation = RvxLab;
