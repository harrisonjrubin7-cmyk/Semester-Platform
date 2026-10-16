// LTI compliance audit (Canvas vs Blackboard) + line-item resolver walk-through. From the sequence-builder PDF.
const LCK = window.SemesterDesignSystem_e9f3ba;
const LCKH = ({ k, t, s }) => <div className="ph"><div><div className="kicker">{k}</div><h1>{t}</h1>{s && <p className="muted">{s}</p>}</div></div>;
const AUDIT = [
  ['Registration', 'Enabled LTI Developer Key, then account or course deployment', 'Registered application and institution-approved deployment'],
  ['Platform signing keys', 'Use the JWKS for the right environment (production, beta, test). Production: sso.canvaslms.com/api/lti/security/jwks', 'Record and validate the key configuration supplied with the registration'],
  ['Semester public key', 'public_jwk_url (preferred) or inline public_jwk on the key', 'Blackboard fetches Semester’s JWKS to check client assertions'],
  ['Client identity', 'Developer Key client id', 'Registered application client id'],
  ['Deployment → institution', 'One key can have many deployments: map each one', 'Map each approved deployment to its institution'],
  ['AGS scopes', 'Declared explicitly in the key configuration', 'Launch-advertised scopes plus registration permissions'],
  ['Line item in launch', 'Read from the validated AGS claim', 'Graded content can advertise lineitem; course tools may advertise only lineitems'],
  ['Creating a column', 'Needs the lineitem write scope', 'Direct POST makes a tool-owned column but can’t set resourceLinkId; that link comes from Deep Linking'],
];
const KEYS = ['Platform public keys kept separate from Semester’s', 'Semester private keys only in managed secret storage', 'Only public key material published', 'Signing kid matches a published key', 'Rotation tested with old and new keys overlapping', 'Unsupported algorithms rejected', 'Platform keys cached with controlled refresh', 'Outbound network controls on key fetches', 'Tests: bad signature, unknown key, expired token, replay'];
const AGS_SCOPE_CHECKS = ['Request only the scopes the operation needs', 'Check the scopes the token actually grants', 'Missing service = unavailable, not an error to retry', 'Column creation off without write scope', 'Instructor changes made directly in the LMS tested', 'Student visibility checked before sending feedback', 'Column deletion treated as a separate destructive action'];
function LtiCompliance() { const [plat, setPlat] = React.useState('both'); const [c, setC] = window.useLS('sem-lti-audit', {}); const tick = (k) => (v) => setC({ ...c, [k]: v }); const all = [...KEYS, ...AGS_SCOPE_CHECKS]; const done = all.filter((x) => c[x]).length;
  return <div className="stack"><LCKH k="Operations · integrations" t="LTI 1.3 compliance audit" s="An implementation review, not a claim of formal LTI certification. Ticks are saved on this device." /><div className="seg-field"><span className="seg-label" aria-hidden="true">Compare</span><LCK.Segmented label="Compare" value={plat} onChange={setPlat} options={[{ value: 'both', label: 'Both' }, { value: 'canvas', label: 'Canvas' }, { value: 'blackboard', label: 'Blackboard' }]} /></div>
    <div className="card scrollx"><table className="t"><thead><tr><th>Area</th>{plat !== 'blackboard' && <th>Canvas</th>}{plat !== 'canvas' && <th>Blackboard Learn</th>}</tr></thead><tbody>{AUDIT.map(([a, cv, bb]) => <tr key={a}><td><b>{a}</b></td>{plat !== 'blackboard' && <td>{cv}</td>}{plat !== 'canvas' && <td>{bb}</td>}</tr>)}</tbody></table></div>
    <div className="grid2"><div className="card"><LCK.SectionLabel>Keys and JWKS</LCK.SectionLabel>{KEYS.map((x) => <LCK.Switch key={x} label={x} checked={!!c[x]} onChange={tick(x)} />)}</div><div className="card"><LCK.SectionLabel>AGS scopes</LCK.SectionLabel>{AGS_SCOPE_CHECKS.map((x) => <LCK.Switch key={x} label={x} checked={!!c[x]} onChange={tick(x)} />)}<LCK.Notice head="Blackboard warning">Deleting a column removes its attempts and grades, and support can’t restore them.</LCK.Notice></div></div>
    <LCK.ProgressState label="Audit items checked" done={done} total={all.length} /></div>; }

function LineItemResolver() { const [a, setA] = React.useState({}); const set = (k, v) => setA({ ...a, [k]: v });
  const Ask = ({ k, q }) => <div className="li"><span>{q}</span><span className="row"><LCK.Button variant={a[k] === true ? 'primary' : 'secondary'} onClick={() => set(k, true)}>Yes</LCK.Button><LCK.Button variant={a[k] === false ? 'primary' : 'secondary'} onClick={() => set(k, false)}>No</LCK.Button></span></div>;
  let out = null;
  if (a.lineitem === true) out = ['confirmed', 'Validate the URL against the platform’s origin, then bind the existing column (bound_by = launch_claim).'];
  else if (a.lineitem === false && a.container === false) out = ['blocked', 'Grade passback unavailable for this placement. Show the instructor an administrator action.'];
  else if (a.container && a.match === true) out = ['confirmed', 'Reuse the column whose resourceId and tag match (bound_by = discovered).'];
  else if (a.container && a.match === false && a.write === false) out = ['blocked', 'Action required: no lineitem write scope, so Semester can’t create the column.'];
  else if (a.container && a.match === false && a.write === true) out = ['pending', 'claim_lineitem() → POST { label, scoreMaximum, resourceId, tag } → bind_lineitem() with the returned URL. On timeout: mark_lineitem_unknown() and rediscover before any new POST.'];
  return <div className="stack"><LCKH k="Faculty assignment · grade column" t="Line-item resolver" s="How Semester finds or creates the gradebook column, without ever creating two." /><div className="card"><Ask k="lineitem" q="Does the validated launch include a lineitem URL?" />{a.lineitem === false && <Ask k="container" q="Does it include a lineitems container?" />}{a.lineitem === false && a.container && <Ask k="match" q="Does an existing column match our resourceId and tag?" />}{a.lineitem === false && a.container && a.match === false && <Ask k="write" q="Is the lineitem write scope granted?" />}</div>
    {out && <div className="card"><span className="pill" data-tone={out[0]}>{out[0] === 'confirmed' ? 'Bind' : out[0] === 'blocked' ? 'Stop' : 'Create once'}</span><span>{out[1]}</span></div>}<LCK.Button variant="ghost" onClick={() => setA({})}>Start over</LCK.Button></div>; }

Object.assign(window.SEM_SCREENS.operations, { lticompliance: LtiCompliance });
Object.assign(window.SEM_SCREENS.faculty, { lineitem: LineItemResolver });
