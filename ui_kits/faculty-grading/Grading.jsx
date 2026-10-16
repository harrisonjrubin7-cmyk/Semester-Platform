const G = window.SemesterDesignSystem_e9f3ba;
function SegG({ label, ...p }) { return <div className="seg-field"><span className="seg-label" aria-hidden="true">{label}</span><G.Segmented label={label} {...p} /></div>; }
const RUBRIC = [{ id: 'thesis', name: 'Thesis and argument', max: 10 }, { id: 'evidence', name: 'Use of evidence', max: 10 }, { id: 'method', name: 'Method and analysis', max: 15 }, { id: 'writing', name: 'Clarity and structure', max: 5 }];
const SUBS = [
  { id: 's1', name: 'Maya Chen', attempt: 1, at: 'Mon 5 Oct, 11:42 pm', late: false, accom: null, files: ['lab-report-3.pdf'], ai: { thesis: 8, evidence: 7, method: 11, writing: 4, note: 'Clear hypothesis; the error analysis skips the second titration.' } },
  { id: 's2', name: 'Jordan Ellis', attempt: 2, at: 'Tue 6 Oct, 1:10 am', late: true, accom: 'Extended deadline: +48 h (approved by Disability Services)', files: ['report-v2.pdf', 'data.csv'], ai: null },
  { id: 's3', name: 'Priya Natarajan', attempt: 1, at: 'Mon 5 Oct, 9:03 pm', late: false, accom: null, files: ['chem210-lab3.docx'], ai: { thesis: 9, evidence: 9, method: 13, writing: 5, note: 'Strong method section; cite the uncertainty source.' } },
];
const STATE_TONE = { draft: 'pending', returned: 'confirmed', submitted_for_approval: 'pending', approved: 'confirmed', synced: 'confirmed' };
const STATE_LABEL = { draft: 'Draft', returned: 'Feedback returned', submitted_for_approval: 'Submitted for approval', approved: 'Approved by registrar', synced: 'Synced to SIS' };
function Grading() {
  const [i, setI] = React.useState(0); const s = SUBS[i];
  const [grades, setGrades] = React.useState(() => Object.fromEntries(SUBS.map((x) => [x.id, { scores: {}, fb: '', state: 'draft', fromAi: false, reviewed: false, hist: [] }])));
  const g = grades[s.id]; const set = (p) => setGrades({ ...grades, [s.id]: { ...g, ...p } });
  const [toast, setToast] = React.useState(''); const [phase, setPhase] = React.useState('ready');
  const total = RUBRIC.reduce((a, r) => a + (Number(g.scores[r.id]) || 0), 0); const max = RUBRIC.reduce((a, r) => a + r.max, 0);
  const complete = RUBRIC.every((r) => g.scores[r.id] !== undefined && g.scores[r.id] !== '');
  const invalid = RUBRIC.filter((r) => g.scores[r.id] !== undefined && g.scores[r.id] !== '' && (Number(g.scores[r.id]) < 0 || Number(g.scores[r.id]) > r.max));
  const locked = g.state === 'submitted_for_approval' || g.state === 'approved' || g.state === 'synced';
  const useAi = () => { set({ scores: { ...s.ai }, fb: s.ai.note, fromAi: true, reviewed: false, hist: [...g.hist, 'AI suggestion applied as draft'] }); };
  const save = () => { set({ hist: [...g.hist, 'Draft saved · ' + total + '/' + max] }); setToast('Draft saved. Students can’t see drafts.'); };
  const ret = () => { if (g.fromAi && !g.reviewed) return setToast('Review the AI suggestion before returning feedback.'); set({ state: 'returned', hist: [...g.hist, 'Feedback returned to student'] }); setToast('Feedback returned. The student sees it now; the grade is still working, not official.'); };
  const allReviewed = SUBS.every((x) => { const y = grades[x.id]; return !(y.fromAi && !y.reviewed) && RUBRIC.every((r) => y.scores[r.id] !== undefined && y.scores[r.id] !== ''); });
  const submitAll = () => { setPhase('saving'); setTimeout(() => { setGrades(Object.fromEntries(Object.entries(grades).map(([k, v]) => [k, { ...v, state: 'submitted_for_approval', hist: [...v.hist, 'Submitted for approval (api.submit_grades_for_approval)'] }]))); setPhase('ready'); setToast('3 grades submitted for approval. The registrar approves; then they sync to the SIS.'); }, 700); };
  return <div className="app"><div className="top"><img src="../../assets/logo-horizontal-reversed.svg" alt="Semester" style={{ height: 18 }} /><span className="tt">Teaching</span><span className="crumb">CHEM 210 · Section 02 · Lab report 3</span></div>
    <div className="page"><div className="row" style={{ justifyContent: 'space-between' }}><div><div className="kicker">/app/submissions/{s.id}/review · grade.manage on this section</div><h1>Grading workspace</h1></div><div className="row"><G.Button variant="ghost" disabled={i === 0} onClick={() => setI(i - 1)}>Previous</G.Button><span className="muted">{i + 1} of {SUBS.length}</span><G.Button variant="ghost" disabled={i === SUBS.length - 1} onClick={() => setI(i + 1)}>Next</G.Button></div></div>
      <div className="split">
        <div className="card"><div className="row" style={{ justifyContent: 'space-between' }}><div><b>{s.name}</b><div className="muted">Attempt {s.attempt} · submitted {s.at}</div></div>{s.late ? <span className="cxs" data-state="pending">After due date</span> : <span className="cxs" data-state="confirmed">On time</span>}</div>
          {s.accom && <G.Notice head="Permitted accommodation">{s.accom}. Shown only to graders of this section.</G.Notice>}
          <div className="doc" role="document" aria-label="Student work"><div className="kicker">{s.files[0]}</div><p><b>Determination of acetic acid concentration by titration</b></p><p>Hypothesis: the commercial vinegar sample contains 5.0% acetic acid by mass, within the label tolerance…</p><p className="muted">[Student document renders here from protected storage. Files: {s.files.join(', ')}.]</p></div></div>
        <div className="stack"><div className="card"><div className="row" style={{ justifyContent: 'space-between' }}><G.SectionLabel>Rubric · v1</G.SectionLabel><span className="cxs" data-state={STATE_TONE[g.state]}>{STATE_LABEL[g.state]}</span></div>
          {s.ai && !locked && !g.fromAi && <div className="aibox"><span><b>AI suggestion available.</b> It stays a draft until you review each score.</span><G.Button variant="secondary" onClick={useAi}>Apply as draft</G.Button></div>}
          {!s.ai && <p className="muted" style={{ margin: 0 }}>No AI suggestion: course rules allow suggestions only on first attempts.</p>}
          {RUBRIC.map((r) => <div key={r.id} className="crit"><label htmlFor={'c-' + r.id}>{r.name}</label><div className="row" style={{ gap: 6 }}><input id={'c-' + r.id} type="number" min="0" max={r.max} disabled={locked} value={g.scores[r.id] ?? ''} aria-invalid={invalid.includes(r) || undefined} onChange={(e) => set({ scores: { ...g.scores, [r.id]: e.target.value }, reviewed: g.fromAi ? g.reviewed : true })} /><span className="muted">/ {r.max}</span></div></div>)}
          {invalid.length > 0 && <span className="cxs" data-state="blocked" role="alert">{invalid.map((r) => r.name).join(', ')}: must be between 0 and the maximum.</span>}
          <div className="row" style={{ justifyContent: 'space-between' }}><b>Total</b><b className="mono">{total} / {max}</b></div>
          <G.TextField label="Feedback to the student" value={g.fb} disabled={locked} onChange={(e) => set({ fb: e.target.value })} placeholder="What went well, what to change next time" />
          {g.fromAi && !locked && <G.Switch label="I reviewed every AI-suggested score and the feedback" checked={g.reviewed} onChange={(v) => set({ reviewed: v, hist: v ? [...g.hist, 'AI suggestion reviewed by grader'] : g.hist })} />}
          <div className="row"><G.Button variant="secondary" disabled={locked || invalid.length > 0} onClick={save}>Save draft</G.Button><G.Button variant="primary" disabled={locked || !complete || invalid.length > 0 || g.state === 'returned'} onClick={ret}>Return feedback</G.Button></div></div>
          <div className="card"><G.SectionLabel>History</G.SectionLabel>{g.hist.length === 0 ? <p className="muted" style={{ margin: 0 }}>No changes yet.</p> : <ol className="plain">{g.hist.map((h, k) => <li key={k}>{h}</li>)}</ol>}</div></div></div>
      <div className="card"><div className="row" style={{ justifyContent: 'space-between' }}><div><b>Submit section grades for approval</b><div className="muted">Working grades become official only after registrar approval and SIS sync. AI-suggested scores must be reviewed first.</div></div><G.Button variant="primary" disabled={!allReviewed || phase === 'saving' || Object.values(grades).every((v) => v.state === 'submitted_for_approval')} onClick={submitAll}>{phase === 'saving' ? 'Submitting…' : 'Submit for approval'}</G.Button></div>
        {!allReviewed && <span className="muted">Waiting on: {SUBS.filter((x) => { const y = grades[x.id]; return (y.fromAi && !y.reviewed) || !RUBRIC.every((r) => y.scores[r.id] !== undefined && y.scores[r.id] !== ''); }).map((x) => x.name).join(', ')}</span>}</div>
      {toast && <div className="toast" role="status" aria-live="polite">{toast}<button className="lnk" onClick={() => setToast('')}>Dismiss</button></div>}
    </div></div>;
}
ReactDOM.createRoot(document.getElementById('root')).render(<Grading />);
