const N2 = window.SemesterDesignSystem_e9f3ba;
function SegLN2({ label, ...p }) { return <div className="seg-field"><span className="seg-label" aria-hidden="true">{label}</span><N2.Segmented label={label} {...p} /></div>; }
const __SegLN2_ = 0; const E2 = window.ECO;
function Chain({ items, small }) { return <div className="loop">{items.map((c, i) => <React.Fragment key={c}><span>{c}</span>{i < items.length - 1 && <span className="ar" aria-hidden="true">→</span>}</React.Fragment>)}</div>; }
function EcoSystems() {
  const [sel, setSel] = React.useState('Registration'); const linked = E2.gridLinks[sel] || [];
  const [ws, setWs] = React.useState('Personal');
  return <div className="stack">
    <p className="lead">One native ecosystem: public experience, entry and identity, product systems, a shared core, three foundations and trust infrastructure. The arrows are governed connections, not universal data sharing.</p>
    <div className="stackd">
      {E2.layers.map(([n, items]) => <div key={n} className="layer"><span className="kicker">{n}</span><div className="chips light">{items.map((x) => <span key={x}>{x}</span>)}</div></div>)}
      <div className="envs">{E2.envs.map((x) => <div key={x.id} className="layer"><span className="kicker">{x.name}</span><span className="muted">{x.who}</span></div>)}</div>
      <div className="layer"><span className="kicker">Native product systems · select one to see its governed connections</span>
        <div className="pgrid" role="group" aria-label="Product systems">{E2.grid.flat().map((p) => <button key={p} aria-pressed={p === sel} data-l={linked.includes(p) || undefined} onClick={() => setSel(p)}>{p}</button>)}</div>
        <p className="muted" style={{ margin: 0 }}><b>{sel}</b> connects to {linked.join(', ')}. Each connection carries only what its rule permits.</p></div>
      <div className="found"><span className="kicker" style={{ color: 'rgba(236,238,242,.64)' }}>Shared Semester platform core</span><div className="chips">{E2.core.map((f) => <span key={f}>{f}</span>)}</div></div>
      <div className="envs">{E2.pillars.map(([n, items]) => <div key={n} className="layer"><span className="kicker">{n}</span><ul className="ul">{items.map((x) => <li key={x}>{x}</li>)}</ul></div>)}</div>
      <div className="layer"><span className="kicker">Infrastructure and trust foundation</span><div className="chips light">{E2.infra.map((x) => <span key={x}>{x}</span>)}</div></div>
    </div>
    <div className="two">
      <div className="card"><N2.SectionLabel>What makes a component native</N2.SectionLabel><N2.Fields items={E2.native.map(([f, v]) => ({ field: f, value: v }))} /><N2.Notice head="Not native">A vendor dashboard embedded in Semester. An infrastructure provider under Semester-owned workflows still fits.</N2.Notice></div>
      <div className="card"><N2.SectionLabel>Workspace families</N2.SectionLabel><SegLN2 label="Environment" value={ws} onChange={setWs} options={Object.keys(E2.workspaces)} /><div className="wsl">{E2.workspaces[ws].map(([n, d]) => <div key={n}><b>{n}</b>{d && <span className="muted">{d}</span>}</div>)}</div>{ws === 'Company' && <p className="note" style={{ margin: 0 }}>Semester employment never grants access to institution-held records.</p>}</div>
    </div>
    <div className="scrollx"><N2.DataTable caption="Shared surfaces bring permitted work to people — interfaces over the engines, not copies of the records" columns={[{ key: 0, label: 'Surface' }, { key: 1, label: 'Connected information' }, { key: 2, label: 'Example' }]} rows={E2.surfaces.map((s) => ({ ...s }))} /></div>
  </div>;
}
function EcoJourneysAD() {
  const [j, setJ] = React.useState('A'); const J = E2.journeysAD.find((x) => x.id === j);
  const keys = J.branch ? Object.keys(J.branch) : []; const [br, setBr] = React.useState(null); const [step, setStep] = React.useState(0);
  React.useEffect(() => { setStep(0); setBr(J.branch ? Object.keys(J.branch)[0] : null); }, [j]);
  const steps = J.steps.map((s) => s === '{branch}' ? br + ' — ' + J.branch[br] : s);
  return <div className="stack"><p className="lead">The strongest proof of a native ecosystem is one journey crossing several systems.</p>
    <N2.Tabs label="Journey" items={E2.journeysAD.map((x) => ({ id: x.id, label: x.id + ' · ' + x.name }))} current={j} onChange={setJ} />
    <div className="row">{J.branch && <SegLN2 label="Outcome" value={br || keys[0]} onChange={(v) => { setBr(v); }} options={keys} />}<N2.Button variant="primary" disabled={step >= steps.length} onClick={() => setStep(step + 1)}>{step === 0 ? 'Start' : 'Next step'}</N2.Button><N2.Button onClick={() => setStep(steps.length)}>Show all</N2.Button><N2.Button variant="ghost" onClick={() => setStep(0)}>Reset</N2.Button></div>
    <div className="two"><ol className="flow">{steps.map((s, i) => <li key={i} data-s={i < step ? 'done' : i === step ? 'now' : 'wait'}><b>{i + 1}. {s}</b></li>)}</ol>
      <aside className="stack"><N2.ProgressState label={'Journey ' + J.id} done={Math.min(step, steps.length)} total={steps.length} /><N2.Notice head="Boundary">{J.boundary}</N2.Notice>{step >= steps.length && <N2.Notice head="Complete">{'Every step left a receipt and an audit record.'}</N2.Notice>}</aside></div></div>;
}
function EcoConnect() {
  const [r, setR] = React.useState(0); const [run, setRun] = React.useState(0);
  const path = [...E2.command, ...E2.eventOut, 'Authorized consumers'];
  return <div className="stack"><p className="lead">Two complementary paths. The command path asks the owning domain to do something. The event path reports a completed fact to authorized consumers.</p>
    <div className="two"><div className="card"><N2.SectionLabel>Command path → event path</N2.SectionLabel><ol className="flow small">{path.map((s, i) => <li key={s} data-s={i < run ? 'done' : i === run ? 'now' : 'wait'}>{i < 4 ? 'Command · ' : i < 6 ? 'Committed · ' : 'Event · '}{s}</li>)}</ol><div className="chips light">{E2.consumers.map((c) => <span key={c} style={{ opacity: run >= path.length ? 1 : .45 }}>{c}</span>)}</div><div className="row"><N2.Button variant="primary" disabled={run >= path.length} onClick={() => setRun(run + 1)}>{run === 0 ? 'Run a command' : 'Next'}</N2.Button><N2.Button variant="ghost" onClick={() => setRun(0)}>Reset</N2.Button></div></div>
      <div className="card"><N2.SectionLabel>Record envelope · one enrollment, one authority</N2.SectionLabel><N2.Fields items={E2.envelope.map(([f, v]) => ({ field: f, value: v }))} /><p className="muted" style={{ margin: 0 }}>The registrar record, faculty roster, advisor view and student schedule never each claim to be authoritative.</p></div></div>
    <div className="card"><N2.SectionLabel>Connection rules · select one</N2.SectionLabel><div className="pgrid rules">{E2.rules.map((x, i) => <button key={x[0]} aria-pressed={i === r} onClick={() => setR(i)}>{x[0]}</button>)}</div><div className="two"><N2.Notice head="Native behavior">{E2.rules[r][1]}</N2.Notice><N2.Notice head="Required boundary">{E2.rules[r][2]}</N2.Notice></div></div>
    <div className="card"><N2.SectionLabel>One account · separate contexts</N2.SectionLabel><div className="scrollx"><table className="rj"><thead><tr><th>Context</th><th>Holds</th>{E2.ctxFacets.map((f) => <th key={f}>{f}</th>)}</tr></thead><tbody>{E2.contexts.map(([c, h]) => <tr key={c}><td><b>{c}</b></td><td className="muted">{h}</td>{E2.ctxFacets.map((f) => <td key={f} aria-label={f + ' separate'}>◆</td>)}</tr>)}</tbody></table></div><p className="muted" style={{ margin: 0 }}>◆ separate per context. The interface may be unified; security and authority boundaries stay explicit.</p></div>
  </div>;
}
function EcoComplete() {
  const [ok, setOkS] = React.useState(() => JSON.parse(localStorage.getItem('sem-eco-done') || '{}'));
  const setOk = (m) => { setOkS(m); localStorage.setItem('sem-eco-done', JSON.stringify(m)); };
  const n = E2.completion.filter(([d]) => E2.standard.every((s) => ok[d + ':' + s])).length;
  return <div className="stack"><p className="lead">Semester owns every core product capability and its connections from inception. That doesn’t mean pretending planned modules are finished, or replacing banks, identity providers, hosting or device operating systems.</p>
    <div className="envs">
      <div className="card"><N2.SectionLabel>Native finance</N2.SectionLabel>{E2.finance.map(([n2, c]) => <div key={n2} className="nx"><b>{n2}</b><span className="muted">{c}</span></div>)}<p className="note" style={{ margin: 0 }}>Boundary: authorized money movement and settlement infrastructure. No specific processor required.</p></div>
      <div className="card"><N2.SectionLabel>Native intelligence</N2.SectionLabel><ul className="ul">{E2.ai.map((x) => <li key={x}>{x}</li>)}</ul><Chain items={E2.aiChain} /><p className="note" style={{ margin: 0 }}>Never an independent registrar, finance approver or policy authority.</p></div>
      <div className="card"><N2.SectionLabel>Native infrastructure</N2.SectionLabel><ol className="flow small">{E2.pipeline.map((s) => <li key={s} data-s="done">{s}</li>)}</ol><p className="muted" style={{ margin: 0 }}>Owns deployment contracts, environment controls, secrets, observability, backup and recovery, portability.</p></div>
    </div>
    <div className="card"><div className="row" style={{ justifyContent: 'space-between' }}><N2.SectionLabel>Completion is connection-based · {n} of {E2.completion.length} domains meet the standard</N2.SectionLabel><span className="muted">Tick only with evidence · saved on this device</span></div>
      <div className="scrollx"><table className="rj"><thead><tr><th>Domain</th><th>Complete connected behavior</th>{E2.standard.map((s) => <th key={s}>{s}</th>)}</tr></thead><tbody>{E2.completion.map(([d, b]) => <tr key={d}><td><b>{d}</b></td><td className="muted">{b}</td>{E2.standard.map((s) => { const k = d + ':' + s; return <td key={s}><input type="checkbox" aria-label={d + ' · ' + s} checked={!!ok[k]} onChange={(e) => setOk({ ...ok, [k]: e.target.checked })} /></td>; })}</tr>)}</tbody></table></div>
      <N2.Notice head="Governing standard">Every native component has an owner, authoritative records, controlled inputs, permitted outputs, complete workflows, failure handling and lifecycle closure. Every connection preserves those properties.</N2.Notice></div>
  </div>;
}
Object.assign(window, { EcoSystems, EcoJourneysAD, EcoConnect, EcoComplete });
