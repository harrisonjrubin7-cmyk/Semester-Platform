// Study studio modes, part A: Home grid, Cards, Read, Field guide, Slides, Watch, Cram. Uses window.GUIDE.
const Q = window.SemesterDesignSystem_e9f3ba; const G = window.GUIDE;
const allCards = () => G.units.flatMap((u) => u.cards.map(([q, a], i) => ({ id: u.id + '.' + i, unit: u.id, q, a })));
window.allCards = allCards;
function UnitPick({ value, onChange, allLabel = 'Whole guide' }) { return <Q.Select label="Scope" value={String(value)} onChange={(e) => onChange(e.target.value === 'all' ? 'all' : Number(e.target.value))} options={[{ value: 'all', label: allLabel }, ...G.units.map((u) => ({ value: String(u.id), label: 'Unit ' + u.id + ' · ' + u.title }))]} />; }
window.UnitPick = UnitPick;
function useKeys(map) { React.useEffect(() => { const f = (e) => { if (e.target.closest('input,textarea,select')) return; const h = map[e.key]; if (h) { e.preventDefault(); h(); } }; addEventListener('keydown', f); return () => removeEventListener('keydown', f); }); }

function Cards() {
  const [scope, setScope] = React.useState('all'); const deck = allCards().filter((c) => scope === 'all' || c.unit === scope);
  const [i, setI] = React.useState(0); const [flip, setFlip] = React.useState(false); const [known, setKnown] = React.useState(() => JSON.parse(localStorage.getItem('sem-cards-known') || '{}'));
  React.useEffect(() => { setI(0); setFlip(false); }, [scope]); const c = deck[Math.min(i, deck.length - 1)];
  const mark = (k) => { const n = { ...known, [c.id]: k }; setKnown(n); localStorage.setItem('sem-cards-known', JSON.stringify(n)); setFlip(false); setI((i + 1) % deck.length); };
  useKeys({ ' ': () => setFlip(!flip), ArrowRight: () => { setI((i + 1) % deck.length); setFlip(false); }, ArrowLeft: () => { setI((i - 1 + deck.length) % deck.length); setFlip(false); } });
  const k = deck.filter((x) => known[x.id] === 'got').length;
  return <div className="stack"><div className="row"><UnitPick value={scope} onChange={setScope} /><span className="muted">{k} of {deck.length} marked known</span></div>
    <button className="flash" onClick={() => setFlip(!flip)} aria-live="polite"><span className="kicker">Unit {c.unit} · card {i + 1} of {deck.length} · {flip ? 'Answer' : 'Question'}</span><span className="fq">{flip ? c.a : c.q}</span>{!flip && <span className="muted">Tap, or press Space</span>}</button>
    <div className="row" style={{ justifyContent: 'center' }}><Q.Button variant="ghost" onClick={() => { setI((i - 1 + deck.length) % deck.length); setFlip(false); }}>← Previous</Q.Button>{flip ? <><Q.Button variant="secondary" onClick={() => mark('again')}>Again</Q.Button><Q.Button variant="primary" onClick={() => mark('got')}>Got it</Q.Button></> : <Q.Button variant="primary" onClick={() => setFlip(true)}>Flip</Q.Button>}<Q.Button variant="ghost" onClick={() => { setI((i + 1) % deck.length); setFlip(false); }}>Next →</Q.Button></div></div>;
}
function Gloss({ text, gloss }) { const terms = gloss.map((g) => g[0]); const re = new RegExp('(' + terms.map((t) => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|') + ')', 'i'); return text.split(re).map((part, k) => { const g = gloss.find((x) => x[0].toLowerCase() === part.toLowerCase()); return g ? <abbr key={k} className="gl" title={g[1]} tabIndex={0}>{part}<span className="gt" role="tooltip">{g[1]}</span></abbr> : part; }); }
function Read() {
  const [u, setU] = React.useState(1); const unit = G.units.find((x) => x.id === u);
  return <div className="read"><nav className="toc" aria-label="Units">{G.units.map((x) => <button key={x.id} aria-current={x.id === u || undefined} onClick={() => setU(x.id)}>{x.id}. {x.title}</button>)}</nav>
    <article className="prose"><div className="kicker">Unit {unit.id} of {G.units.length}</div><h2>{unit.title}</h2>{unit.prose.map((p, k) => <p key={k}><Gloss text={p} gloss={unit.gloss} /></p>)}
      <aside className="glossbox"><b>Glossary</b><dl>{unit.gloss.map(([t, d]) => <React.Fragment key={t}><dt>{t}</dt><dd>{d}</dd></React.Fragment>)}</dl></aside>
      <div className="row"><Q.Button variant="ghost" disabled={u === 1} onClick={() => setU(u - 1)}>← Unit {u - 1}</Q.Button><Q.Button variant="primary" disabled={u === G.units.length} onClick={() => setU(u + 1)}>Unit {u + 1} →</Q.Button></div></article></div>;
}
function FieldGuide() {
  const [shown, setShown] = React.useState({});
  return <article className="fg"><header className="mast"><span className="kicker">{G.course} · {G.edition}</span><h2>{G.title}</h2><span className="muted">{G.author}</span></header>
    <ol className="fgtoc">{G.units.map((u) => <li key={u.id}><a href={'#fg-' + u.id} onClick={(e) => { e.preventDefault(); document.getElementById('fg-' + u.id).scrollIntoView ? window.scrollTo({ top: document.getElementById('fg-' + u.id).getBoundingClientRect().top + scrollY - 80, behavior: 'smooth' }) : null; }}>{u.title}</a></li>)}</ol>
    {G.units.map((u) => <section key={u.id} id={'fg-' + u.id} className="fgs"><h3><span className="num">{String(u.id).padStart(2, '0')}</span>{u.title}</h3>{u.prose.map((p, k) => <p key={k}>{p}</p>)}
      <div className="fgcols"><div><b className="kicker">Terms</b><dl>{u.gloss.map(([t, d]) => <React.Fragment key={t}><dt>{t}</dt><dd>{d}</dd></React.Fragment>)}</dl></div>
        <div><b className="kicker">Self-test</b><ol>{u.cards.slice(0, 3).map(([q, a], k) => { const id = u.id + '.' + k; return <li key={k}>{q} <button className="lnk" onClick={() => setShown({ ...shown, [id]: !shown[id] })}>{shown[id] ? 'Hide' : 'Show answer'}</button>{shown[id] && <div className="muted">{a}</div>}</li>; })}</ol></div></div></section>)}
    <section className="fgs"><h3>Glossary</h3><dl className="fullgloss">{G.units.flatMap((u) => u.gloss).sort((a, b) => a[0].localeCompare(b[0])).map(([t, d]) => <React.Fragment key={t}><dt>{t}</dt><dd>{d}</dd></React.Fragment>)}</dl></section></article>;
}
function deckFor(u) { const unit = G.units.find((x) => x.id === u); return [{ t: 'title', h: unit.title, s: 'Unit ' + unit.id + ' · ' + G.course }, ...unit.prose.map((p) => ({ t: 'point', h: p.split('. ')[0] + '.', s: p.split('. ').slice(1).join('. ') })), ...unit.cards.flatMap(([q, a]) => [{ t: 'q', h: q }, { t: 'a', h: a, s: q }])]; }
window.deckFor = deckFor;
function Slides() {
  const [u, setU] = React.useState(1); const d = deckFor(u); const [i, setI] = React.useState(0); React.useEffect(() => setI(0), [u]); const s = d[i];
  useKeys({ ArrowRight: () => setI(Math.min(d.length - 1, i + 1)), ArrowLeft: () => setI(Math.max(0, i - 1)) });
  return <div className="stack"><div className="row"><Q.Select label="Deck" value={String(u)} onChange={(e) => setU(Number(e.target.value))} options={G.units.map((x) => ({ value: String(x.id), label: 'Unit ' + x.id + ' · ' + x.title }))} /><span className="muted">Slide {i + 1} of {d.length} · ← → to move</span></div>
    <div className="slide" data-t={s.t}>{s.t === 'q' && <span className="kicker">Question</span>}{s.t === 'a' && <span className="kicker">Answer</span>}<div className="sh">{s.h}</div>{s.s && <div className="ss">{s.s}</div>}</div>
    <div className="row" style={{ justifyContent: 'center' }}><Q.Button variant="ghost" disabled={i === 0} onClick={() => setI(i - 1)}>←</Q.Button><div className="dots">{d.map((_, k) => <i key={k} data-on={k === i || undefined} onClick={() => setI(k)}></i>)}</div><Q.Button variant="primary" disabled={i === d.length - 1} onClick={() => setI(i + 1)}>→</Q.Button></div></div>;
}
function Watch() {
  const [u, setU] = React.useState(1); const d = deckFor(u); const [i, setI] = React.useState(0); const [playing, setPlaying] = React.useState(false); const ok = 'speechSynthesis' in window;
  const say = (k) => { if (!ok) return; speechSynthesis.cancel(); const s = d[k]; const ut = new SpeechSynthesisUtterance((s.t === 'q' ? 'Question. ' : s.t === 'a' ? 'Answer. ' : '') + s.h + ' ' + (s.t === 'a' ? '' : s.s || '')); ut.rate = 1; ut.onend = () => { if (k + 1 < d.length) { setI(k + 1); say(k + 1); } else setPlaying(false); }; speechSynthesis.speak(ut); };
  React.useEffect(() => () => ok && speechSynthesis.cancel(), []); React.useEffect(() => { if (ok) speechSynthesis.cancel(); setPlaying(false); setI(0); }, [u]);
  const s = d[i];
  return <div className="stack"><div className="row"><Q.Select label="Lesson" value={String(u)} onChange={(e) => setU(Number(e.target.value))} options={G.units.map((x) => ({ value: String(x.id), label: 'Lesson ' + x.id + ' · ' + x.title }))} />{!ok && <span className="pill" data-tone="pending">This browser can’t narrate; captions only</span>}</div>
    <div className="slide watch" data-t={s.t}><div className="sh">{s.h}</div>{s.s && s.t !== 'a' && <div className="ss">{s.s}</div>}<div className="cap" aria-live="polite">{playing ? '▶ Narrating slide ' + (i + 1) + ' of ' + d.length : 'Paused · slide ' + (i + 1) + ' of ' + d.length}</div></div>
    <div className="prog"><i style={{ width: ((i + 1) / d.length * 100) + '%' }}></i></div>
    <div className="row" style={{ justifyContent: 'center' }}><Q.Button variant="ghost" disabled={i === 0} onClick={() => { setI(i - 1); if (playing) say(i - 1); }}>⏮</Q.Button><Q.Button variant="primary" onClick={() => { if (playing) { ok && speechSynthesis.cancel(); setPlaying(false); } else { setPlaying(true); say(i); } }}>{playing ? 'Pause' : 'Play lesson'}</Q.Button><Q.Button variant="ghost" disabled={i === d.length - 1} onClick={() => { setI(i + 1); if (playing) say(i + 1); }}>⏭</Q.Button></div></div>;
}
function Cram() {
  return <article className="cram"><header className="row" style={{ justifyContent: 'space-between' }}><div><span className="kicker">{G.course} · the night before</span><h2 style={{ margin: 0 }}>Everything on one page</h2></div><Q.Button variant="secondary" onClick={() => print()}>Print</Q.Button></header>
    <div className="cramgrid">{G.units.map((u) => <section key={u.id}><h4>{u.id}. {u.title}</h4><p>{u.prose[0]}</p><ul>{u.cards.map(([q, a]) => <li key={q}><b>{q}</b> {a}</li>)}</ul><p className="muted">{u.gloss.map((g) => g[0] + ': ' + g[1]).join(' · ')}</p></section>)}</div></article>;
}
window.STUDIO_A = { Cards, Read, FieldGuide, Slides, Watch, Cram };
