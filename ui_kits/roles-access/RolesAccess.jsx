// Roles & access: role switcher, admin console, permission matrix, build checklist. Data: window.R51. State in localStorage 'sem-roles51'.
const { FAM, ROLES, CAPS, LV, lvl, locked, SOD, CHECK, ACTS, RANK } = window.R51;
const { useState, useEffect, useMemo } = React;
const RKEY = 'sem-roles51';
const PEOPLE0 = [
  { id: 'p1', name: 'Maya Chen', email: 'maya.chen@vanderbilt.edu', src: 'SCIM', st: 'Active', grants: [{ role: 'student', scope: 'Self', exp: '', by: 'SCIM', appr: '—', at: '2025-08-20' }, { role: 'worker', scope: 'Library circulation', exp: '2027-05-15', by: 'SCIM', appr: '—', at: '2026-08-25' }] },
  { id: 'p2', name: 'Dr. R. Ortiz', email: 'r.ortiz@vanderbilt.edu', src: 'SCIM', st: 'Active', grants: [{ role: 'faculty', scope: 'CHEM 2210 §01–02', exp: '2026-12-31', by: 'SCIM', appr: '—', at: '2026-08-01' }] },
  { id: 'p3', name: 'L. Park', email: 'l.park@vanderbilt.edu', src: 'SCIM', st: 'Active', grants: [{ role: 'registrar', scope: 'Institution', exp: '', by: 'SCIM', appr: '—', at: '2024-07-01' }] },
  { id: 'p4', name: 'K. Brown', email: 'k.brown@vanderbilt.edu', src: 'SCIM', st: 'Active', grants: [{ role: 'advisor', scope: 'Caseload: 142 students', exp: '', by: 'SCIM', appr: '—', at: '2025-01-10' }] },
  { id: 'p5', name: 'D. Novak', email: 'd.novak@vanderbilt.edu', src: 'Manual', st: 'Active', grants: [{ role: 'inst_it', scope: 'Tenant: Vanderbilt', exp: '2026-12-01', by: 'R. Singh', appr: 'T. Nguyen', at: '2026-09-01' }] },
  { id: 'p6', name: 'Dana Chen', email: 'dana.chen@example.com', src: 'Invite', st: 'Active', grants: [{ role: 'family', scope: 'Shared by Maya Chen: released grades, billing', exp: '2026-12-20', by: 'Maya Chen', appr: 'Student consent', at: '2026-10-01' }] },
  { id: 'p7', name: 'A. Rivera', email: 'a.rivera@semester.example', src: 'Semester SSO', st: 'Active', grants: [{ role: 'sem_support', scope: 'Tickets assigned · 4 h sessions', exp: '2027-01-31', by: 'Ops lead', appr: 'Security lead', at: '2026-08-01' }] }
];
const S0 = { ov: {}, pending: [], people: PEOPLE0, reviews: {}, check: {}, log: [] };
const load = () => { try { return { ...S0, ...JSON.parse(localStorage.getItem(RKEY) || '{}') }; } catch (e) { return S0; } };
const now = () => new Date().toLocaleString();
const TODAY = new Date().toISOString().slice(0, 10);
const roleOf = (k) => ROLES.find((r) => r[0] === k);
const famOf = (n) => FAM.find((f) => f[0] === n);
const privileged = (r, ov) => r[2] <= 2 || CAPS.some((c) => ['A', 'B'].includes(lvl(r, c[0], ov)) || (['identity.admin', 'tenant.admin', 'security.ops', 'integration.admin'].includes(c[0]) && ['W', 'A'].includes(lvl(r, c[0], ov))));
const sodFor = (levels) => SOD.filter(([a, b]) => levels[a] && levels[b] && RANK[levels[a]] >= 2 && RANK[levels[b]] >= 2);
const Lv = ({ v, lock }) => <span className={'lv lv-' + (v || 'n')} title={lock ? 'Prohibited for this role family' : LV[v][1]}>{lock ? '🔒' : LV[v][0]}</span>;

function decide(r, act, ov, ctx) {
  const [label, cap, need] = act; const v = lvl(r, cap, ov); const steps = []; const push = (n, ok, why) => steps.push([n, ok, why]);
  push('Authenticated session', !ctx.revoked, ctx.revoked ? 'Session ended when membership was revoked' : r[4]);
  push('Membership active', !ctx.revoked, ctx.revoked ? 'Revoked — every request denies' : 'Active');
  push('Tenant matches resource', !ctx.cross, ctx.cross ? 'Resource belongs to another institution — denied regardless of role' : 'Same tenant');
  push('Role grants capability', !!v, v ? r[1] + ' → ' + cap + ' (' + LV[v][0] + ')' : r[1] + ' has no ' + cap);
  let scopeOk = true, why = 'Not needed';
  if (v === 'G') { scopeOk = ctx.grant; why = ctx.grant ? 'Student grant active until 2026-12-20' : 'No active student grant'; }
  else if (v === 'C') { scopeOk = ctx.assigned; why = ctx.assigned ? 'Assigned (section / caseload / org)' : 'Not assigned to this record'; }
  else if (v === 'B') { scopeOk = ctx.glass; why = ctx.glass ? 'Break-glass open · 60 min · reason logged · reviewed within 24 h' : 'Requires a break-glass session'; }
  else if (v === 'X') { scopeOk = cap === 'company.aggregate'; why = 'Aggregate counts only (min cell 10)'; }
  else if (v === 'S') { scopeOk = need === 'S'; why = need === 'S' ? 'Own record' : 'Self-only level can’t reach other people’s data'; }
  push('Scope / delegation', !!v && scopeOk, why);
  const enough = !!v && (need === 'S' ? ['S', 'W', 'A'].includes(v) : need === 'A' ? v === 'A' : RANK[v] >= RANK[need] || (['G', 'C', 'B'].includes(v) && ['R', 'C'].includes(need)));
  push('Level sufficient', enough, v ? 'Needs ' + LV[need][0] + ', has ' + LV[v][0] : '—');
  const flag = cap === 'ai.use' ? ctx.ai : true; push('Feature flag on for tenant', flag, cap === 'ai.use' ? (ctx.ai ? 'ai.assist.enabled = true' : 'ai.assist.enabled = false (fail closed → non-AI path)') : 'n/a');
  const ok = steps.every((s) => s[1]);
  const obl = ok ? [need === 'A' && 'Second approver required before effect', v === 'B' && 'Break-glass review', 'Audit event: ' + cap + '.' + (ok ? 'allowed' : 'denied'), ['grades.release', 'registration.submit', 'finance.student', 'identity.admin'].includes(cap) && 'Preview → confirm → receipt'].filter(Boolean) : ['Audit event: ' + cap + '.denied', 'Forbidden state shown, with who to ask'];
  return { ok, steps, obl, v };
}

function Switcher({ S, set }) {
  const [rk, setRk] = useState('advisor'); const r = roleOf(rk); const [ai, setAi] = useState(1); const [ctx, setCtx] = useState({ revoked: false, cross: false, grant: true, assigned: true, glass: false, ai: true }); const [sel, setSel] = useState(4);
  const res = ACTS.map((a) => decide(r, a, S.ov, ctx)); const cur = res[sel]; const fam = famOf(r[2]);
  const nav = [...new Set(CAPS.filter((c) => lvl(r, c[0], S.ov)).map((c) => c[2]))];
  const tog = (k, l) => <label className="row sm"><input type="checkbox" checked={ctx[k]} onChange={(e) => setCtx({ ...ctx, [k]: e.target.checked })} /> {l}</label>;
  return <div className="two"><div className="stack">
    <div className="row"><label className="f">Sign in as<select value={rk} onChange={(e) => { setRk(e.target.value); }}>{FAM.map((f) => <optgroup key={f[0]} label={f[0] + '. ' + f[1]}>{ROLES.filter((x) => x[2] === f[0]).map((x) => <option key={x[0]} value={x[0]}>{x[1]}</option>)}</optgroup>)}</select></label><span className="chip">{fam[3]}</span><span className="muted">{r[4]}</span></div>
    <div className="card"><div className="kicker">{fam[1]}</div><h2>{r[1]}</h2><p className="muted" style={{ margin: 0 }}>{r[3]}</p><div className="row"><b className="sm">Navigation shows:</b>{nav.length ? nav.map((n) => <span key={n} className="chip">{n}</span>) : <span className="muted">Public pages only</span>}</div></div>
    <div className="card"><h3>Try an action</h3><table><tbody>{ACTS.map((a, i) => <tr key={a[0]} className={i === sel ? 'sel' : ''} onClick={() => setSel(i)}><td>{a[0]}</td><td className="mono">{a[1]}</td><td>{res[i].ok ? <span className="chip ok">Allowed</span> : <span className="chip bad">Denied</span>}</td></tr>)}</tbody></table></div></div>
    <aside className="stack"><div className="card"><h3>Context</h3>{tog('grant', 'Student has shared with this person')}{tog('assigned', 'Assigned to this section / caseload')}{tog('glass', 'Break-glass session open')}{tog('ai', 'AI enabled for tenant')}{tog('cross', 'Resource is in another institution')}{tog('revoked', 'Membership revoked')}</div>
      <div className="card"><h3>{ACTS[sel][0]}</h3><div className={'note ' + (cur.ok ? 'ok' : 'bad')}><b>{cur.ok ? 'Allowed' : 'Denied'}</b> · policy evaluated on the server, not the UI</div>{cur.steps.map(([n, ok, w]) => <div key={n} className="chk"><span className={'chip ' + (ok ? 'ok' : 'bad')}>{ok ? '✓' : '✕'}</span><span><b>{n}</b> · <span className="muted">{w}</span></span></div>)}<div className="sm"><b>Obligations</b>{cur.obl.map((o) => <div key={o} className="muted">• {o}</div>)}</div></div></aside></div>;
}

function Admin({ S, set }) {
  const [pi, setPi] = useState('p5'); const P = S.people.find((p) => p.id === pi) || S.people[0]; const [g, setG] = useState({ role: 'registrar', scope: '', exp: '', by: 'D. Novak', appr: '' }); const [err, setErr] = useState('');
  const levels = (grants) => { const L = {}; grants.forEach((x) => { const r = roleOf(x.role); CAPS.forEach((c) => { const v = lvl(r, c[0], S.ov); if (RANK[v] > RANK[L[c[0]] || '']) L[c[0]] = v; }); }); return L; };
  const curSod = sodFor(levels(P.grants));
  const add = () => { const r = roleOf(g.role); const priv = privileged(r, S.ov); const days = g.exp ? (new Date(g.exp) - new Date(TODAY)) / 864e5 : Infinity;
    if (!g.scope.trim()) return setErr('Scope is required (which tenant, section, caseload or org).');
    if (priv && !g.appr.trim()) return setErr(r[1] + ' is privileged — an approver is required.');
    if (priv && g.appr.trim().toLowerCase() === g.by.trim().toLowerCase()) return setErr('Approver must be a different person from the requester.');
    if (priv && (days > 90 || days <= 0)) return setErr('Privileged grants need an expiry within 90 days.');
    const nx = [...P.grants, { role: g.role, scope: g.scope, exp: g.exp, by: g.by, appr: g.appr || '—', at: TODAY }]; const sd = sodFor(levels(nx));
    if (sd.length) return setErr('Separation of duties: ' + sd.map((x) => x[2]).join('; ') + '.');
    set({ people: S.people.map((p) => (p.id === P.id ? { ...p, grants: nx } : p)), log: [...S.log, [now(), 'Granted ' + r[1] + ' to ' + P.name + ' (' + g.scope + ') · approved by ' + (g.appr || 'n/a'), g.by]] }); setErr(''); setG({ ...g, scope: '', exp: '', appr: '' }); };
  const revoke = (i) => { const x = P.grants[i]; set({ people: S.people.map((p) => (p.id === P.id ? { ...p, grants: p.grants.filter((_, k) => k !== i) } : p)), log: [...S.log, [now(), 'Revoked ' + roleOf(x.role)[1] + ' from ' + P.name + ' · sessions ended, open tasks reassigned', 'Admin']] }); };
  const offboard = () => set({ people: S.people.map((p) => (p.id === P.id ? { ...p, st: 'Offboarded', grants: [] } : p)), log: [...S.log, [now(), 'Offboarded ' + P.name + ' · all grants revoked, tokens revoked, shares they received ended', 'Admin']] });
  const priv = S.people.flatMap((p) => p.grants.map((x, i) => ({ p, x, i, r: roleOf(x.role) }))).filter((o) => privileged(o.r, S.ov));
  const review = (o, keep) => { const k = o.p.id + ':' + o.i + ':' + o.x.role; set({ reviews: { ...S.reviews, [k]: keep ? 'Certified ' + TODAY : 'Revoked' }, people: keep ? S.people : S.people.map((p) => (p.id === o.p.id ? { ...p, grants: p.grants.filter((_, j) => j !== o.i) } : p)), log: [...S.log, [now(), (keep ? 'Certified ' : 'Revoked in review: ') + o.r[1] + ' · ' + o.p.name, 'Access reviewer']] }); };
  return <div className="two"><div className="stack">
    <div className="card"><h3>People</h3><table><thead><tr><th>Person</th><th>Source</th><th>Roles</th><th>Status</th></tr></thead><tbody>{S.people.map((p) => <tr key={p.id} className={p.id === pi ? 'sel' : ''} onClick={() => setPi(p.id)}><td><b>{p.name}</b><div className="muted">{p.email}</div></td><td>{p.src}</td><td>{p.grants.map((x) => roleOf(x.role)[1]).join(', ') || '—'}</td><td><span className={'chip ' + (p.st === 'Active' ? 'ok' : '')}>{p.st}</span></td></tr>)}</tbody></table></div>
    <div className="card"><h3>Access review · privileged grants</h3><table><tbody>{priv.map((o) => { const k = o.p.id + ':' + o.i + ':' + o.x.role; const exp = o.x.exp && o.x.exp < TODAY; return <tr key={k}><td>{o.p.name}</td><td>{o.r[1]}</td><td>{o.x.exp || <span className="chip bad">No expiry</span>}{exp && <span className="chip bad">Expired</span>}</td><td>{S.reviews[k] ? <span className="chip ok">{S.reviews[k]}</span> : <span className="row"><button className="btn" onClick={() => review(o, true)}>Certify</button><button className="btn" onClick={() => review(o, false)}>Revoke</button></span>}</td></tr>; })}</tbody></table><span className="muted">Monthly. Unreviewed privileged grants expire at the end of the cycle.</span></div></div>
    <aside className="stack"><div className="card"><h3>{P.name}</h3>{P.grants.map((x, i) => { const r = roleOf(x.role); return <div key={i} className="grant"><div><b>{r[1]}</b> <span className="muted">· {x.scope}</span></div><div className="muted sm">{x.exp ? 'Expires ' + x.exp : 'No expiry'} · by {x.by} · approved {x.appr}</div>{x.src !== 'SCIM' && <button className="btn" onClick={() => revoke(i)}>Revoke</button>}</div>; })}{curSod.length > 0 && <div className="note bad">{curSod.map((x) => x[2]).join('; ')}</div>}{P.st === 'Active' && <button className="btn" onClick={offboard}>Offboard person</button>}</div>
      <div className="card"><h3>Grant a role</h3><label className="f">Role<select value={g.role} onChange={(e) => setG({ ...g, role: e.target.value })}>{FAM.map((f) => <optgroup key={f[0]} label={f[1]}>{ROLES.filter((x) => x[2] === f[0]).map((x) => <option key={x[0]} value={x[0]}>{x[1]}{privileged(x, S.ov) ? ' ★' : ''}</option>)}</optgroup>)}</select></label><label className="f">Scope<input value={g.scope} onChange={(e) => setG({ ...g, scope: e.target.value })} placeholder="e.g. Tenant: Vanderbilt · or CHEM 2210 §03" /></label><div className="row"><label className="f">Expires<input type="date" value={g.exp} onChange={(e) => setG({ ...g, exp: e.target.value })} /></label><label className="f">Requested by<input value={g.by} onChange={(e) => setG({ ...g, by: e.target.value })} /></label><label className="f">Approver<input value={g.appr} onChange={(e) => setG({ ...g, appr: e.target.value })} /></label></div>{privileged(roleOf(g.role), S.ov) && <span className="muted">★ Privileged: approver ≠ requester, expiry ≤ 90 days.</span>}{err && <div className="note bad" role="alert">{err}</div>}<button className="btn p" onClick={add}>Grant</button></div>
      <div className="card"><h3>Audit</h3>{S.log.slice(-8).reverse().map((l, i) => <div key={i} className="sm"><span className="muted">{l[0]}</span> · {l[1]} · <i>{l[2]}</i></div>)}{!S.log.length && <span className="muted">Nothing yet.</span>}</div></aside></div>;
}

function Matrix({ S, set }) {
  const [fam, setFam] = useState(0); const [ed, setEd] = useState(null); const [who, setWho] = useState('Security lead'); const [appr, setAppr] = useState('');
  const rows = ROLES.filter((r) => !fam || r[2] === fam);
  const propose = (r, c, to) => { set({ pending: [...S.pending, { id: 'CHG-' + (S.pending.length + 101), role: r[0], cap: c, from: lvl(r, c, S.ov), to, by: who, at: now() }] }); setEd(null); };
  const apply = (p, ok) => { if (ok && (!appr.trim() || appr.trim() === p.by)) return alert('Approver must be named and different from ' + p.by); const ov = { ...S.ov }; if (ok) ov[p.role] = { ...(ov[p.role] || {}), [p.cap]: p.to }; set({ ov, pending: S.pending.filter((x) => x.id !== p.id), log: [...S.log, [now(), (ok ? 'Approved ' : 'Rejected ') + p.id + ': ' + roleOf(p.role)[1] + ' ' + p.cap + ' ' + (LV[p.from][0]) + ' → ' + LV[p.to][0], ok ? appr : who]] }); };
  const exportReg = () => { const reg = ROLES.map((r) => ({ key: r[0], title: r[1], family: famOf(r[2])[1], build_order: r[2], purpose: r[3], identity_provider: r[4], shell: famOf(r[2])[3], default_access: CAPS.filter((c) => lvl(r, c[0], S.ov)).map((c) => c[0] + ':' + LV[lvl(r, c[0], S.ov)][0].toLowerCase()), prohibited_access: (window.R51.LOCK[r[2]] || []), maturity: Object.fromEntries(CHECK.map((k, i) => [k, !!(S.check[r[0]] || {})[i]])) })); const a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([JSON.stringify(reg, null, 2)], { type: 'application/json' })); a.download = 'registry-roles.json'; a.click(); };
  return <div className="stack"><div className="row"><label className="f">Family<select value={fam} onChange={(e) => setFam(+e.target.value)}><option value={0}>All 51 roles</option>{FAM.map((f) => <option key={f[0]} value={f[0]}>{f[0]}. {f[1]}</option>)}</select></label><label className="f">You are<input value={who} onChange={(e) => setWho(e.target.value)} /></label><button className="btn" onClick={exportReg}>Export registry JSON</button><span className="muted">Click a cell to propose a change. 🔒 = prohibited for that family. Changes apply only after a second person approves.</span></div>
    <div className="mx"><table><thead><tr><th className="sticky">Role</th>{CAPS.map((c) => <th key={c[0]} className="vert" title={c[1] + ' · ' + c[3]}><span>{c[1]}</span></th>)}</tr></thead><tbody>{FAM.filter((f) => !fam || f[0] === fam).map((f) => <React.Fragment key={f[0]}><tr className="fam"><td colSpan={CAPS.length + 1}>{f[0]}. {f[1]} · <span className="muted">{f[2]}</span></td></tr>{rows.filter((r) => r[2] === f[0]).map((r) => { const L = Object.fromEntries(CAPS.map((c) => [c[0], lvl(r, c[0], S.ov)])); const sd = sodFor(L); return <tr key={r[0]}><td className="sticky"><b>{r[1]}</b>{sd.length > 0 && <span className="chip bad" title={sd.map((x) => x[2]).join('; ')}>SoD</span>}</td>{CAPS.map((c) => { const lk = locked(r, c[0]); const pend = S.pending.find((p) => p.role === r[0] && p.cap === c[0]); return <td key={c[0]} className={'cell' + (pend ? ' pend' : '')} onClick={() => !lk && setEd({ r, c: c[0] })}><Lv v={L[c[0]]} lock={lk} /></td>; })}</tr>; })}</React.Fragment>)}</tbody></table></div>
    {ed && <div className="card pop"><b>{ed.r[1]} · {ed.c}</b><div className="row">{Object.keys(LV).map((k) => <button key={k} className={'btn' + (lvl(ed.r, ed.c, S.ov) === k ? ' p' : '')} onClick={() => propose(ed.r, ed.c, k)}>{LV[k][0]}</button>)}<button className="btn" onClick={() => setEd(null)}>Cancel</button></div><span className="muted">{Object.entries(LV).map(([k, v]) => v[0] + ': ' + v[1]).join(' · ')}</span></div>}
    <div className="card"><h3>Pending changes · {S.pending.length}</h3>{S.pending.length ? <><label className="f">Approver<input value={appr} onChange={(e) => setAppr(e.target.value)} /></label><table><tbody>{S.pending.map((p) => <tr key={p.id}><td className="mono">{p.id}</td><td>{roleOf(p.role)[1]}</td><td className="mono">{p.cap}</td><td>{LV[p.from][0]} → <b>{LV[p.to][0]}</b></td><td className="muted">{p.by}</td><td className="row"><button className="btn p" onClick={() => apply(p, true)}>Approve</button><button className="btn" onClick={() => apply(p, false)}>Reject</button></td></tr>)}</tbody></table></> : <span className="muted">None.</span>}</div></div>;
}

function Build({ S, set }) {
  const [rk, setRk] = useState('student'); const r = roleOf(rk); const C = S.check[rk] || {}; const done = (k) => CHECK.filter((_, i) => (S.check[k] || {})[i]).length;
  return <div className="two"><div className="stack">{FAM.map((f) => { const R = ROLES.filter((x) => x[2] === f[0]); const tot = R.reduce((a, x) => a + done(x[0]), 0); return <div key={f[0]} className="card"><div className="row" style={{ justifyContent: 'space-between' }}><b>{f[0]}. {f[1]}</b><span className="muted">{tot}/{R.length * CHECK.length} checks · {f[2]}</span></div><div className="bar"><i style={{ width: (100 * tot) / (R.length * CHECK.length) + '%' }}></i></div><div className="row">{R.map((x) => <button key={x[0]} className={'chip' + (x[0] === rk ? ' on' : '')} onClick={() => setRk(x[0])}>{x[1]} · {done(x[0])}/16</button>)}</div></div>; })}</div>
    <aside className="stack"><div className="card"><div className="kicker">Build order {r[2]} · {famOf(r[2])[1]}</div><h3>{r[1]}</h3>{CHECK.map((k, i) => <label key={k} className="row sm"><input type="checkbox" checked={!!C[i]} onChange={(e) => set({ check: { ...S.check, [rk]: { ...C, [i]: e.target.checked } }, log: [...S.log, [now(), r[1] + ': ' + k + (e.target.checked ? ' ✓' : ' unchecked'), 'Role owner']] })} /> {k}</label>)}<span className="muted">Each box is a separate fact backed by repository evidence — not a single “done” field.</span></div></aside></div>;
}

const TABS = [['switch', 'Role switcher'], ['admin', 'Admin console'], ['matrix', 'Permission matrix'], ['build', 'Build checklist']];
function RolesAccess() {
  const [S, setS] = useState(load); const [tab, setTab] = useState(() => localStorage.getItem(RKEY + ':tab') || 'switch');
  useEffect(() => { localStorage.setItem(RKEY, JSON.stringify(S)); }, [S]); useEffect(() => { localStorage.setItem(RKEY + ':tab', tab); }, [tab]);
  const set = (p) => setS((s) => ({ ...s, ...p }));
  return <div className="page"><header className="ph"><div><div className="kicker">Semester · roles & access · {ROLES.length} roles · {CAPS.length} capabilities · {FAM.length} families</div><h1>Roles & access</h1><p className="muted" style={{ maxWidth: '78ch', margin: '6px 0 0' }}>51 roles handled as permission bundles with a lifecycle — not 51 separate apps. Policy decisions here are a design model of what the server enforces; nothing is read from a live policy engine.</p></div><button className="btn" onClick={() => { if (confirm('Reset everything on this page?')) setS(S0); }}>Reset</button></header>
    <nav className="tabs" role="tablist">{TABS.map(([k, l]) => <button key={k} role="tab" aria-selected={tab === k} onClick={() => setTab(k)}>{l}</button>)}</nav>
    {tab === 'switch' ? <Switcher S={S} set={set} /> : tab === 'admin' ? <Admin S={S} set={set} /> : tab === 'matrix' ? <Matrix S={S} set={set} /> : <Build S={S} set={set} />}</div>;
}
ReactDOM.createRoot(document.getElementById('root')).render(<RolesAccess />);
