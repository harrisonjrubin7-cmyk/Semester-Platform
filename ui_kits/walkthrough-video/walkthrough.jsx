// Semester · 90-second walkthrough of the four connected Vanderbilt journeys. Sample data.
const { useComposition, Captions, animate, Easing, clamp } = window;

// The only three motion helpers in this piece.
const MOTION = {
  enter: (T, start, dur = 0.7) => animate({ from: 0, to: 1, start, end: start + dur, ease: Easing.easeOutCubic })(T),
  draw: (T, start, dur = 1.2) => animate({ from: 0, to: 1, start, end: start + dur, ease: Easing.easeInOutQuad })(T),
  pop: (T, start, dur = 0.5) => animate({ from: 0, to: 1, start, end: start + dur, ease: Easing.easeOutBack })(T),
};
const C = { ink: '#eceef2', dim: 'rgba(236,238,242,.62)', canvas: '#090a0e', paper: '#f4f1ea', paperInk: '#1b1a17', paperDim: 'rgba(27,26,23,.66)', line: 'rgba(27,26,23,.14)', blue: '#94bce3', action: '#3d5d82', ok: '#2f7d4f', bad: '#b3261e', warn: '#9a6400' };
const F = { body: 'var(--font-body, Barlow, sans-serif)', head: 'var(--font-heading, "Barlow Condensed", sans-serif)', display: 'var(--font-display, Cinzel, serif)', mono: 'var(--font-mono, ui-monospace, monospace)' };
const between = (T, a, b, fade = 0.5) => clamp(Math.min((T - a) / fade, (b - T) / fade), 0, 1);
const chip = (txt, color) => <span style={{ display: 'inline-block', fontSize: 15, padding: '3px 12px', borderRadius: 999, border: `1.5px solid ${color}`, color, fontWeight: 600, whiteSpace: 'nowrap' }}>{txt}</span>;

function Opening() {
  const { T, CUES } = useComposition();
  const o = between(T, CUES.Opening - 1, CUES.Problem, 0.6);
  const a = MOTION.enter(T, CUES.Opening + 0.3, 1.0), b = MOTION.enter(T, CUES.Opening + 1.6, 0.9);
  const s = 1 + 0.04 * clamp((T - CUES.Opening) / 8, 0, 1);
  return <div style={{ position: 'absolute', inset: 0, display: 'grid', placeItems: 'center', opacity: o }}>
    <div style={{ textAlign: 'center', transform: `scale(${s})` }}>
      <div style={{ fontFamily: F.head, letterSpacing: '.3em', fontSize: 40, color: '#d4d9e2', opacity: a, transform: `translateY(${(1 - a) * 20}px)` }}>SEMESTER</div>
      <div style={{ fontFamily: F.display, fontSize: 88, color: C.ink, marginTop: 28, opacity: b, transform: `translateY(${(1 - b) * 24}px)` }}>One account. Every workspace.</div>
      <div style={{ fontSize: 30, color: C.dim, marginTop: 24, opacity: MOTION.enter(T, CUES.Opening + 3.2) }}>Four journeys at Vanderbilt, on one shared record.</div>
    </div>
  </div>;
}

const TOOLS = [['LMS', 'Deadline moved'], ['YES', 'Advising hold'], ['Email', 'Registration opens Nov 4'], ['Syllabus PDF', 'Reflection due'], ['Portal', 'Balance due'], ['Spreadsheet', 'My plan']];
function Problem() {
  const { T, CUES } = useComposition();
  const o = between(T, CUES.Problem, CUES.Onboarding, 0.6);
  const gather = MOTION.draw(T, CUES.Problem + 6, 2.2);
  return <div style={{ position: 'absolute', inset: 0, opacity: o }}>
    <div style={{ position: 'absolute', left: 160, top: 120, fontFamily: F.head, fontWeight: 600, fontSize: 64, color: C.ink, opacity: MOTION.enter(T, CUES.Problem + 0.2) }}>A semester lives in a dozen places.</div>
    {TOOLS.map(([t, d], i) => {
      const e = MOTION.pop(T, CUES.Problem + 0.8 + i * 0.45);
      const sx = 200 + (i % 3) * 520, sy = 300 + Math.floor(i / 3) * 260, ex = 760, ey = 700;
      const x = sx + (ex - sx) * gather, y = sy + (ey - sy) * gather, r = (i % 2 ? 4 : -5) * (1 - gather);
      return <div key={t} style={{ position: 'absolute', left: x, top: y, width: 400, padding: '22px 26px', background: C.paper, color: C.paperInk, borderRadius: 14, transform: `rotate(${r}deg) scale(${0.6 + 0.4 * e})`, opacity: e * (1 - gather), boxShadow: '0 18px 40px rgba(0,0,0,.35)' }}>
        <div style={{ fontSize: 18, color: C.paperDim, textTransform: 'uppercase', letterSpacing: '.08em' }}>{t}</div>
        <div style={{ fontSize: 30, fontWeight: 600, marginTop: 6 }}>{d}</div>
      </div>;
    })}
    <div style={{ position: 'absolute', left: 0, right: 0, top: 470, textAlign: 'center', fontFamily: F.display, fontSize: 64, color: C.ink, opacity: MOTION.enter(T, CUES.Problem + 7.6, 0.9) }}>Semester puts them in one place — with the source on every fact.</div>
  </div>;
}

// ---------- the app window (persists Onboarding → Trust) ----------
const NAV = [['inst', 'Institution console'], ['student', 'Student'], ['registrar', 'Registrar'], ['faculty', 'Faculty']];
function navActive(T, CUES) { return T < CUES.Student ? 'inst' : T < CUES.Registrar ? 'student' : T < CUES.Faculty ? 'registrar' : T < CUES.Trust ? 'faculty' : 'student'; }

const STEPS = ['Pilot agreement signed', 'Data map approved', 'Vanderbilt SSO', 'YES read connection', 'Staging rehearsal', 'Vanderbilt approves activation', 'First cohort live'];
function OnboardingPanel() {
  const { T, CUES } = useComposition();
  const o = between(T, CUES.Onboarding + 0.4, CUES.Student + 0.3, 0.5);
  return <div style={{ position: 'absolute', inset: 0, padding: 48, opacity: o }}>
    <div style={{ fontSize: 18, color: C.paperDim, textTransform: 'uppercase', letterSpacing: '.08em' }}>Vanderbilt onboarding</div>
    <div style={{ fontFamily: F.head, fontWeight: 600, fontSize: 48, marginTop: 6 }}>Nothing turns on until every step is done.</div>
    <div style={{ display: 'grid', gap: 9, marginTop: 24, maxWidth: 900 }}>
      {STEPS.map((s, i) => { const d = MOTION.pop(T, CUES.Onboarding + 1.6 + i * 1.05, 0.4), done = d > 0.5;
        return <div key={s} style={{ display: 'flex', alignItems: 'center', gap: 18, padding: '11px 20px', borderRadius: 10, border: `1.5px solid ${done ? C.ok : C.line}`, background: done ? 'rgba(47,125,79,.06)' : '#fff' }}>
          <span style={{ width: 34, height: 34, borderRadius: '50%', display: 'grid', placeItems: 'center', background: done ? C.ok : 'transparent', border: done ? 'none' : `1.5px solid ${C.line}`, color: done ? '#fff' : C.paperDim, fontWeight: 700, fontSize: 18, transform: `scale(${0.8 + 0.2 * d})` }}>{done ? '✓' : i + 1}</span>
          <span style={{ fontSize: 26, fontWeight: 500 }}>{s}</span>
        </div>; })}
    </div>
  </div>;
}

function MayaCard({ T, CUES, scale = 1 }) {
  const ready = T >= CUES.Registrar + 7.2, stale = T >= CUES.Trust + 2.4;
  const flip = MOTION.pop(T, CUES.Registrar + 7.2, 0.6);
  const graded = T >= CUES.Faculty + 4.6;
  const state = stale ? ['Can’t confirm right now', C.warn, 'Vanderbilt YES hasn’t updated since 9:42.'] : ready ? ['Ready', C.ok, 'All checks current and passed.'] : ['Blocked', C.bad, 'Advising hold — contact Advising.'];
  return <div style={{ background: '#fff', border: `1.5px solid ${C.line}`, borderRadius: 14, padding: 26, width: 620 * scale, transform: `scale(${scale}) rotateX(${ready && !stale ? (1 - flip) * 90 : 0}deg)`, transformOrigin: 'top left', display: 'grid', gap: 12 }}>
    <div style={{ fontSize: 17, color: C.paperDim, textTransform: 'uppercase', letterSpacing: '.08em' }}>Today · Maya Chen</div>
    <div style={{ fontFamily: F.head, fontWeight: 600, fontSize: 36 }}>Ready to register for Spring 2027?</div>
    <div style={{ borderLeft: `5px solid ${state[1]}`, padding: '10px 16px', background: 'rgba(0,0,0,.03)', fontSize: 24 }}><b style={{ color: state[1] }}>{state[0]}</b> — {state[2]}</div>
    <div style={{ fontSize: 17, color: C.paperDim }}>{stale ? 'Stale · Vanderbilt YES' : 'Institution verified · Vanderbilt YES · synced 9:42'}</div>
    <div style={{ fontSize: 19, color: C.paperDim, borderTop: `1px solid ${C.line}`, paddingTop: 10 }}>This is not enrollment. You still register in YES.</div>
    <div style={{ fontSize: 22, display: 'flex', justifyContent: 'space-between', borderTop: `1px solid ${C.line}`, paddingTop: 10 }}><span>BUS 1400 · Quiz 2</span><b>{graded ? '9 / 10' : '—'}</b></div>
    {T >= CUES.Faculty + 10.4 && <div style={{ fontSize: 20 }}>Final grade <b>A-</b> {chip('official · posted by Registrar', C.ok)}</div>}
  </div>;
}

function StudentPanel() {
  const { T, CUES } = useComposition();
  const o = between(T, CUES.Student + 0.2, CUES.Registrar + 0.3, 0.5) + between(T, CUES.Trust, CUES.Close + 0.3, 0.5);
  return <div style={{ position: 'absolute', inset: 0, padding: 48, opacity: clamp(o, 0, 1), display: 'flex', gap: 40 }}>
    <MayaCard T={T} CUES={CUES} />
    <div style={{ display: 'grid', gap: 14, alignContent: 'start', paddingTop: 10, opacity: MOTION.enter(T, CUES.Student + 4) }}>
      <div style={{ fontSize: 20, color: C.paperDim, textTransform: 'uppercase', letterSpacing: '.08em' }}>Every check shows its source</div>
      {[['Registration holds', T < CUES.Registrar + 7.2 ? chip('Advising hold', C.bad) : chip('none', C.ok)], ['Time ticket', <b style={{ fontSize: 22 }}>Nov 4, 8:00 am</b>], ['Source', chip(T >= CUES.Trust + 2.4 ? 'Stale' : 'Institution verified', T >= CUES.Trust + 2.4 ? C.warn : C.ok)]].map(([l, v], i) => <div key={l} style={{ display: 'flex', alignItems: 'center', gap: 16, fontSize: 24, opacity: MOTION.enter(T, CUES.Student + 4.4 + i * 0.6) }}><span style={{ width: 240 }}>{l}</span>{v}</div>)}
    </div>
  </div>;
}

function RegistrarPanel() {
  const { T, CUES } = useComposition();
  const o = between(T, CUES.Registrar + 0.2, CUES.Faculty + 0.3, 0.5);
  const typed = 'YES shows the advising meeting was completed'.slice(0, Math.floor(clamp((T - CUES.Registrar - 3.2) / 2.2, 0, 1) * 44));
  const clicked = T >= CUES.Registrar + 6.2;
  return <div style={{ position: 'absolute', inset: 0, padding: 48, opacity: o }}>
    <div style={{ fontSize: 18, color: C.paperDim, textTransform: 'uppercase', letterSpacing: '.08em' }}>Registrar · L. Park</div>
    <div style={{ fontFamily: F.head, fontWeight: 600, fontSize: 44, marginTop: 6 }}>Readiness queue</div>
    <div style={{ marginTop: 22, background: '#fff', border: `1.5px solid ${C.line}`, borderRadius: 12, padding: 22, width: 1000, display: 'grid', gap: 14 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 18, fontSize: 24 }}><b style={{ width: 200 }}>Maya Chen</b>{clicked ? chip('ready', C.ok) : chip('blocked', C.bad)}<span style={{ color: C.paperDim }}>Advising hold — Advising</span></div>
      <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
        <div style={{ flex: 1, border: `1.5px solid ${C.line}`, borderRadius: 8, padding: '12px 14px', fontSize: 22, minHeight: 30, background: '#fafaf7' }}>{typed || <span style={{ color: C.paperDim }}>Reason (required)</span>}<span style={{ opacity: T > CUES.Registrar + 3 && T < CUES.Registrar + 6 && Math.floor(T * 2) % 2 ? 1 : 0 }}>|</span></div>
        <div style={{ padding: '12px 20px', borderRadius: 8, background: clicked ? C.ok : C.action, color: '#fff', fontSize: 21, fontWeight: 600, transform: `scale(${T > CUES.Registrar + 6 && T < CUES.Registrar + 6.3 ? 0.95 : 1})` }}>{clicked ? 'Released · re-checked' : 'Record hold released in YES'}</div>
      </div>
      <div style={{ fontSize: 18, color: C.paperDim }}>Holds are owned by YES. Semester records what YES confirmed — it never edits YES.</div>
    </div>
    <div style={{ position: 'absolute', right: 40, top: 300, opacity: MOTION.enter(T, CUES.Registrar + 6.6) }}><MayaCard T={T} CUES={CUES} scale={0.8} /></div>
  </div>;
}

function FacultyPanel() {
  const { T, CUES } = useComposition();
  const o = between(T, CUES.Faculty + 0.2, CUES.Trust + 0.3, 0.5);
  const rel = T >= CUES.Faculty + 4.6, sub = T >= CUES.Faculty + 7.6, posted = T >= CUES.Faculty + 10.4;
  return <div style={{ position: 'absolute', inset: 0, padding: 48, opacity: o }}>
    <div style={{ fontSize: 18, color: C.paperDim, textTransform: 'uppercase', letterSpacing: '.08em' }}>Faculty · Prof. Triana · BUS 1400</div>
    <div style={{ fontFamily: F.head, fontWeight: 600, fontSize: 44, marginTop: 6 }}>Graded isn’t released.</div>
    <div style={{ marginTop: 22, background: '#fff', border: `1.5px solid ${C.line}`, borderRadius: 12, width: 900, overflow: 'hidden' }}>
      {[['Student', 'Quiz 2', 'Final'], ['Maya Chen', rel ? <span>9 / 10 {chip('released', C.ok)}</span> : <span>9 / 10 {chip('draft', C.paperDim)}</span>, posted ? chip('A- posted', C.ok) : sub ? chip('A- submitted', C.warn) : '—'], ['Jordan Ellis', '8 / 10 ' , '—']].map((r, i) => <div key={i} style={{ display: 'grid', gridTemplateColumns: '1.2fr 1.4fr 1fr', padding: '16px 22px', borderTop: i ? `1px solid ${C.line}` : 'none', fontSize: i ? 24 : 17, color: i ? C.paperInk : C.paperDim, fontWeight: i ? 400 : 600 }}>{r.map((c, j) => <div key={j}>{c}</div>)}</div>)}
    </div>
    <div style={{ position: 'absolute', right: 40, top: 280, opacity: MOTION.enter(T, CUES.Faculty + 5) }}><MayaCard T={T} CUES={CUES} scale={0.8} /></div>
  </div>;
}

const FEED = [['Onboarding', 9.6, 'Vanderbilt', 'First cohort live — sign-in and read-only YES on'], ['Student', 3, 'Maya Chen', 'Readiness: unknown → blocked'], ['Registrar', 6.4, 'L. Park', 'Advising hold released (YES confirmed)'], ['Registrar', 7.2, 'Semester', 'Re-check for Maya: blocked → ready'], ['Faculty', 4.6, 'Prof. Triana', 'Released Quiz 2 to Maya Chen'], ['Faculty', 7.6, 'Prof. Triana', 'Submitted final grade A- → registrar'], ['Faculty', 10.4, 'L. Park', 'Posted BUS 1400 A- to official record'], ['Trust', 2.4, 'Operations', 'YES stopped updating — results say “can’t confirm”']];
function Feed() {
  const { T, CUES } = useComposition();
  const o = between(T, CUES.Onboarding + 0.4, CUES.Close + 0.4, 0.6);
  const shown = FEED.filter(([s, d]) => T >= CUES[s] + d);
  return <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: 360, borderLeft: `1px solid ${C.line}`, padding: '28px 22px', opacity: o, background: '#fbfaf6', display: 'grid', alignContent: 'start', gap: 12 }}>
    <div style={{ fontSize: 16, color: C.paperDim, textTransform: 'uppercase', letterSpacing: '.08em' }}>What just happened</div>
    {shown.slice(-7).reverse().map(([s, d, who, what], i) => { const e = MOTION.enter(T, CUES[s] + d, 0.5); return <div key={s + d} style={{ borderLeft: `4px solid ${i === 0 ? C.action : C.line}`, padding: '6px 12px', fontSize: 17, opacity: e, transform: `translateX(${(1 - e) * 20}px)` }}><b>{who}</b> · {what}<div style={{ fontFamily: F.mono, fontSize: 13, color: C.paperDim, marginTop: 2 }}>receipt · audit</div></div>; })}
  </div>;
}

function AppWindow() {
  const { T, CUES } = useComposition();
  const show = between(T, CUES.Onboarding, CUES.Close + 0.6, 0.8);
  const rise = MOTION.enter(T, CUES.Onboarding, 1.0);
  const act = navActive(T, CUES);
  // camera: slow push-in per section, zoom toward the Maya card in Registrar/Faculty
  const z = 1 + 0.03 * Math.sin(T * 0.2) + 0.05 * MOTION.draw(T, CUES.Registrar + 6, 1.6) * (1 - MOTION.draw(T, CUES.Faculty - 0.6, 1.0)) + 0.05 * MOTION.draw(T, CUES.Faculty + 9.6, 1.4) * (1 - MOTION.draw(T, CUES.Trust - 0.4, 0.8));
  const sis = T >= CUES.Trust + 2.4;
  return <div style={{ position: 'absolute', left: 120, top: 70, width: 1680, height: 820, opacity: show, transform: `translateY(${(1 - rise) * 60}px) scale(${z})`, transformOrigin: '72% 48%', borderRadius: 18, overflow: 'hidden', background: C.paper, color: C.paperInk, fontFamily: F.body, boxShadow: '0 40px 120px rgba(0,0,0,.55)' }}>
    <div style={{ height: 56, display: 'flex', alignItems: 'center', gap: 22, padding: '0 22px', borderBottom: `1px solid ${C.line}`, background: '#fff' }}>
      <b style={{ fontFamily: F.head, letterSpacing: '.2em', fontSize: 20 }}>SEMESTER</b>
      <span style={{ fontSize: 17, color: C.paperDim }}>Vanderbilt University · Spring 2027 pilot</span>
      <span style={{ marginLeft: 'auto', fontSize: 16 }}>YES (SIS): {chip(sis ? 'stale since 9:42' : 'current · 9:42', sis ? C.warn : C.ok)}</span>
    </div>
    <div style={{ position: 'absolute', top: 56, left: 0, bottom: 0, width: 230, borderRight: `1px solid ${C.line}`, padding: '22px 12px', display: 'grid', alignContent: 'start', gap: 6, background: '#fff' }}>
      {NAV.map(([k, l]) => <div key={k} style={{ padding: '12px 14px', borderRadius: 8, fontSize: 19, background: act === k ? 'rgba(61,93,130,.12)' : 'transparent', fontWeight: act === k ? 700 : 400, color: act === k ? C.action : C.paperInk }}>{l}</div>)}
    </div>
    <div style={{ position: 'absolute', top: 56, left: 230, right: 360, bottom: 0 }}>
      <OnboardingPanel /><StudentPanel /><RegistrarPanel /><FacultyPanel /><TrustOverlay />
    </div>
    <div style={{ position: 'absolute', top: 56, right: 0, bottom: 0, width: 360 }}><Feed /></div>
  </div>;
}

function TrustOverlay() {
  const { T, CUES } = useComposition();
  const o = between(T, CUES.Trust + 2.6, CUES.Close + 0.2, 0.5);
  return <div style={{ position: 'absolute', left: 708, top: 330, width: 360, opacity: o, display: 'grid', gap: 12 }}>
    {[['Stale data is never “ready”', 'enforced by the database'], ['Nobody approves their own exception', 'separation of duties'], ['Every action leaves a receipt', 'and an audit line']].map(([h, s], i) => { const e = MOTION.pop(T, CUES.Trust + 4 + i * 0.7); return <div key={h} style={{ background: '#fff', border: `1.5px solid ${C.line}`, borderRadius: 12, padding: '16px 20px', opacity: e, transform: `translateY(${(1 - e) * 14}px)` }}><div style={{ fontSize: 22, fontWeight: 700 }}>{h}</div><div style={{ fontSize: 17, color: C.paperDim }}>{s}</div></div>; })}
  </div>;
}

function Close() {
  const { T, CUES } = useComposition();
  const o = MOTION.enter(T, CUES.Close + 0.4, 0.9);
  return <div style={{ position: 'absolute', inset: 0, display: 'grid', placeItems: 'center', opacity: o }}>
    <div style={{ textAlign: 'center', maxWidth: 1500, transform: `scale(${1 + 0.03 * clamp((T - CUES.Close) / 8, 0, 1)})` }}>
      <div style={{ fontFamily: F.display, fontSize: 66, lineHeight: 1.15, color: C.ink }}>Signed paid pilot with Vanderbilt — launch Spring 2027, pending institutional activation.</div>
      <div style={{ fontFamily: F.head, letterSpacing: '.3em', fontSize: 34, color: '#d4d9e2', marginTop: 48, opacity: MOTION.enter(T, CUES.Close + 2.4) }}>SEMESTER</div>
    </div>
  </div>;
}

function Walkthrough() {
  const { T, CUES } = useComposition();
  React.useEffect(() => { const el = document.querySelector('[data-om-exportable-video-with-duration-secs]'); if (el) el.setAttribute('data-screen-label', 't=' + Math.floor(T) + 's'); }, [Math.floor(T)]);
  const caps = [
    [CUES.Opening + 0.6, 'Semester gives every student one clear next step.'],
    [CUES.Problem + 0.4, 'Today, a semester lives in a dozen systems.'],
    [CUES.Problem + 6.2, 'Semester brings it into one place, and shows where every fact came from.'],
    [CUES.Onboarding + 0.6, 'It starts with Vanderbilt. Nothing turns on until every onboarding step is done.'],
    [CUES.Student + 0.4, 'Maya checks whether she’s ready to register.'],
    [CUES.Student + 6.6, 'An advising hold blocks her — and Semester tells her who to contact. It never calls this enrollment.'],
    [CUES.Registrar + 0.4, 'In the registrar’s queue, Maya’s case is waiting.'],
    [CUES.Registrar + 5.6, 'When YES confirms the hold is cleared, the registrar records it — and Maya’s check updates on its own.'],
    [CUES.Faculty + 0.4, 'Professor Triana grades a quiz. A draft stays a draft.'],
    [CUES.Faculty + 4.6, 'Released, it appears for Maya. The final grade becomes official only when the registrar posts it.'],
    [CUES.Trust + 0.4, 'If Vanderbilt’s system stops updating, Semester says so.'],
    [CUES.Trust + 4.6, 'No false certainty. No self-approval. A receipt for every action.'],
    [CUES.Close + 0.6, 'Semester. Built with Vanderbilt, for Spring 2027.'],
  ].map(([at, text]) => ({ at, text }));
  return <div style={{ position: 'absolute', inset: 0, background: C.canvas, fontFamily: F.body, overflow: 'hidden' }}>
    <Opening /><Problem /><AppWindow /><Close />
    <Captions items={caps} style={{ bottom: 28, font: `500 32px ${F.body}`, color: C.ink }} />
  </div>;
}
window.Walkthrough = Walkthrough;
