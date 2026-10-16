const W = window.SemesterDesignSystem_e9f3ba; const F = window.CWF;
function SegW({ label, ...p }) { return <div className="seg-field"><span className="seg-label" aria-hidden="true">{label}</span><W.Segmented label={label} {...p} /></div>; }
const docHref = (d) => '../../docs/legal/' + encodeURIComponent(d) + '.html';
function Workflows() {
  const [id, setId] = React.useState(() => location.hash.slice(1) || 'deal'); const f = F.find((x) => x.id === id) || F[0];
  const [at, setAt] = React.useState(0); const [view, setView] = React.useState('lanes');
  const [done, setDoneS] = React.useState(() => JSON.parse(localStorage.getItem('sem-cwf') || '{}')); const setDone = (m) => { setDoneS(m); localStorage.setItem('sem-cwf', JSON.stringify(m)); };
  React.useEffect(() => { setAt(0); history.replaceState(null, '', '#' + id); }, [id]);
  const s = f.steps[at]; const key = (i) => f.id + ':' + i; const n = f.steps.filter((_, i) => done[key(i)]).length;
  return <div className="app"><div className="top"><img src="../../assets/logo-horizontal-reversed.svg" alt="Semester" style={{ height: 18 }} /><span className="tt">Company workflows</span><span className="muted" style={{ marginLeft: 'auto', color: 'rgba(236,238,242,.64)' }}>Each step: owner, document, gate</span></div>
    <div className="page"><div><div className="kicker">Semester company · how work moves</div><h1>Who does what, on which paper, and what must be true first</h1></div>
      <div className="row"><SegW label="Workflow" value={id} onChange={setId} options={F.map((x) => ({ value: x.id, label: x.name }))} /><SegW label="View" value={view} onChange={setView} options={[{ value: 'lanes', label: 'Swimlanes' }, { value: 'list', label: 'Checklist' }]} /></div>
      {view === 'lanes' ? <div className="card"><div className="scrollx"><div className="lanes" style={{ gridTemplateColumns: '150px repeat(' + f.steps.length + ', minmax(120px, 1fr))' }}>
        {f.lanes.map((lane) => <React.Fragment key={lane}><div className="lh">{lane}</div>{f.steps.map((st, i) => <div key={i} className="lc">{st[0] === lane && <button className="node" aria-pressed={i === at} data-done={done[key(i)] || undefined} onClick={() => setAt(i)}><span className="ni">{i + 1}</span>{st[1]}{st[2] && <span className="nd">{st[2]}</span>}</button>}</div>)}</React.Fragment>)}
      </div></div></div>
      : <ol className="cl">{f.steps.map((st, i) => <li key={i}><W.Switch label={(i + 1) + '. ' + st[1] + ' · ' + st[0]} checked={!!done[key(i)]} onChange={(v) => setDone({ ...done, [key(i)]: v })} /></li>)}</ol>}
      <div className="two"><div className="card"><div className="kicker">Step {at + 1} of {f.steps.length} · {s[0]}</div><h2 className="h2">{s[1]}</h2>
        <W.Fields items={[{ field: 'Owner', value: s[0] }, { field: 'Document', value: s[2] ? <a href={docHref(s[2])} target="_blank" rel="noreferrer">{s[2]} ↗</a> : 'None' }, { field: 'Gate', value: s[3] }]} />
        <div className="row"><W.Button variant="ghost" disabled={at === 0} onClick={() => setAt(at - 1)}>Previous</W.Button><W.Button variant="primary" disabled={at >= f.steps.length - 1} onClick={() => setAt(at + 1)}>Next step</W.Button><W.Switch label="Gate met" checked={!!done[key(at)]} onChange={(v) => setDone({ ...done, [key(at)]: v })} /></div></div>
        <div className="card"><div className="kicker">Progress · saved on this device</div><W.ProgressState label={f.name} done={n} total={f.steps.length} /><W.Notice head="Rule">A step isn’t done because its document exists. It’s done when its gate is met and the evidence is filed.</W.Notice><a href="../../docs/legal/index.html" target="_blank" rel="noreferrer">Legal library ↗</a></div></div>
    </div></div>;
}
ReactDOM.createRoot(document.getElementById('root')).render(<Workflows />);
