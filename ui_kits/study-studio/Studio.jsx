// Study studio: home ("One course. Eleven study formats."), create-guide flow (choose sources → build → save with course), mode router.
const H = window.SemesterDesignSystem_e9f3ba; const GU = window.GUIDE; const GE = window.GUIDE_EXTRA;
const EMBED = new URLSearchParams(location.search).has('embed');
const SRC = [{ id: 'lec', t: 'Dr. Okafor’s lecture slides, weeks 1–13', k: 'Course resource', n: 13 }, { id: 'txt', t: 'Mankiw, Principles of Microeconomics, ch. 1–17', k: 'Course reading', n: 17 }, { id: 'ps', t: 'Problem sets 1–8 with posted solutions', k: 'Course resource', n: 8 }, { id: 'notes', t: 'Your notes', k: 'Personal', n: 41 }, { id: 'peer', t: 'Shared notes from a classmate', k: 'Not allowed', n: 0, off: true }];
const MODES = () => { const c = window.allCards().length; return [
  ['cards', 'Cards', 'Tap to flip. One question at a time, by unit or the whole guide.', c + ' cards'],
  ['read', 'Read', 'The guide as prose, unit by unit, with the glossary in place.', GU.units.length + ' units'],
  ['field', 'Field guide', 'The whole thing as the published guide: masthead, sections, glossary, self-test.', GU.units.length + ' sections'],
  ['watch', 'Watch', 'A narrated lesson per unit, the slide changing as the voice moves.', GU.units.length + ' lessons'],
  ['slides', 'Slides', 'The unit as a deck: one point per slide, question before answer.', GU.units.length + ' decks'],
  ['doc', 'Doc', 'The whole guide as a Word file, a PDF, or a page you can print.', '3 formats'],
  ['quiz', 'Quiz', 'Multiple choice, true-or-false and a round of matching, marked as you go, with the wrong answers drawn from the guide.', c + ' cards in play'],
  ['figures', 'Figures', 'The diagrams (curves, flows and frames) with what each one shows.', GE.figures.length + ' figures'],
  ['cases', 'Cases', 'Worked examples in full, with the reasoning left in.', GE.cases.length + ' cases'],
  ['cram', 'Cram', 'Everything on one page for the night before: no flipping, no waiting.', GU.units.length + ' units'],
  ['listen', 'Listen', 'The podcast editions, with chapter marks that seek.', GE.episodes.length + ' episode' + (GE.episodes.length === 1 ? '' : 's')],
]; };
function Create({ onDone, onCancel }) {
  const [pick, setPick] = React.useState({ lec: true, txt: true, ps: true, notes: false }); const [step, setStep] = React.useState(0); const [prog, setProg] = React.useState(0);
  const n = Object.values(pick).filter(Boolean).length;
  React.useEffect(() => { if (step !== 1) return; const id = setInterval(() => setProg((p) => { if (p >= 100) { clearInterval(id); setStep(2); return 100; } return p + 7; }), 120); return () => clearInterval(id); }, [step]);
  const labels = ['Reading sources', 'Drafting units', 'Writing cards and quiz items', 'Matching quotations to sources', 'Drawing figures', 'Checking every claim has a source'];
  return <div className="card create"><div className="kicker">Create study guide · step {step + 1} of 3</div>
    {step === 0 && <><h2 style={{ margin: 0 }}>Choose sources</h2><p className="muted" style={{ margin: 0 }}>The guide uses only what you select. Every card and claim links back to one of these.</p>
      {SRC.map((s) => <label key={s.id} className="srcrow" data-off={s.off || undefined}><input type="checkbox" disabled={s.off} checked={!!pick[s.id]} onChange={(e) => setPick({ ...pick, [s.id]: e.target.checked })} /><span><b>{s.t}</b><span className="muted">{s.off ? 'Course AI rule: classmates’ work can’t be used as a source' : s.k + ' · ' + s.n + ' items'}</span></span></label>)}
      <div className="row"><H.Button variant="ghost" onClick={onCancel}>Cancel</H.Button><H.Button variant="primary" disabled={!n} onClick={() => setStep(1)}>Build from {n} source{n === 1 ? '' : 's'}</H.Button></div></>}
    {step === 1 && <><h2 style={{ margin: 0 }}>Building your guide</h2><div className="prog"><i style={{ width: prog + '%' }}></i></div><span aria-live="polite">{labels[Math.min(labels.length - 1, Math.floor(prog / 17))]}…</span></>}
    {step === 2 && <><h2 style={{ margin: 0 }}>Ready to save</h2><p style={{ margin: 0 }}>{GU.units.length} units · {window.allCards().length} cards · {GE.figures.length} figures · {GE.cases.length} cases, built from {n} source{n === 1 ? '' : 's'}.</p><H.Notice head="Before you rely on it">Spot-check a few cards against the reading. Quotations are matched to their source; paraphrases are marked as yours.</H.Notice>
      <div className="row"><H.Button variant="ghost" onClick={() => setStep(0)}>Change sources</H.Button><H.Button variant="primary" onClick={() => { localStorage.setItem('sem-guide-saved', JSON.stringify({ at: new Date().toISOString(), sources: Object.keys(pick).filter((k) => pick[k]) })); onDone(); }}>Save with {GU.course}</H.Button></div></>}</div>;
}
function Studio() {
  const [mode, setMode] = React.useState(() => location.hash.slice(1) || 'home'); React.useEffect(() => { history.replaceState(null, '', '#' + mode); scrollTo(0, 0); }, [mode]);
  const [saved, setSaved] = React.useState(() => JSON.parse(localStorage.getItem('sem-guide-saved') || 'null'));
  const M = { ...window.STUDIO_A, ...window.STUDIO_B }; const map = { cards: M.Cards, read: M.Read, field: M.FieldGuide, watch: M.Watch, slides: M.Slides, doc: M.Doc, quiz: M.Quiz, figures: M.Figures, cases: M.Cases, cram: M.Cram, listen: M.Listen };
  const modes = MODES(); const cur = modes.find((m) => m[0] === mode); const View = map[mode];
  return <div className="app">{!EMBED && <div className="top"><img src="../../assets/logo-horizontal-reversed.svg" alt="Semester" style={{ height: 18 }} /><span className="tt">Study studio</span><span className="crumb">{GU.course} · {GU.title}</span></div>}
    <div className="page">{mode === 'home' && <><div className="ph"><div><div className="kicker">{GU.course} · {saved ? 'Guide saved ' + new Date(saved.at).toLocaleDateString() : 'Sample guide'}</div><h1>One course. Eleven study formats.</h1><p className="muted">Choose sources, create a guide, and save it with your course.</p></div><H.Button variant="primary" onClick={() => setMode('create')}>Create study guide</H.Button></div>
      <h2 className="h2">Every way to study this course</h2><div className="modes">{modes.map(([k, t, d, c]) => <button key={k} className="mode" onClick={() => setMode(k)}><b>{t}</b><span>{d}</span><span className="mc">{c}</span></button>)}</div></>}
      {mode === 'create' && <Create onCancel={() => setMode('home')} onDone={() => { setSaved(JSON.parse(localStorage.getItem('sem-guide-saved'))); setMode('home'); }} />}
      {View && <><div className="ph"><div><button className="lnk" onClick={() => setMode('home')}>← All formats</button><h1>{cur[1]}</h1><p className="muted">{cur[2]}</p></div><H.Select label="Format" value={mode} onChange={(e) => setMode(e.target.value)} options={modes.map((m) => ({ value: m[0], label: m[1] }))} /></div><View /></>}
    </div></div>;
}
ReactDOM.createRoot(document.getElementById('root')).render(<Studio />);
