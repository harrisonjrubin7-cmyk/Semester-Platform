const { useComposition, Captions, Easing, animate, clamp } = window;
const C = { canvas: '#f4f1ea', ink: '#1b1a17', sub: '#5d5d60', line: 'rgba(27,26,23,.14)', navy: '#1d2d3d', blue: '#416180', ok: '#3e6141', okBg: '#e6efe4', bad: '#a3301f', badBg: '#f6e7e3', pend: '#7a5310', pendBg: '#f6eddc', unk: '#5d5d60', unkBg: '#ecebe8', paper: '#fbfaf7' };
const HEAD = "'Barlow Condensed','Barlow',sans-serif", BODY = "'Barlow',sans-serif";
const MOTION = {
  enter: (T, s, d = 0.6) => animate({ from: 0, to: 1, start: s, end: s + d, ease: Easing.easeOutCubic })(T),
  draw: (T, s, d = 1) => animate({ from: 0, to: 1, start: s, end: s + d, ease: Easing.easeInOutCubic })(T),
  pop: (T, s, d = 0.45) => animate({ from: 0, to: 1, start: s, end: s + d, ease: Easing.easeOutBack })(T),
};
const mix = (a, b, p) => a + (b - a) * p;

function Chip({ kind, text }) {
  const m = { ok: [C.ok, C.okBg], bad: [C.bad, C.badBg], pend: [C.pend, C.pendBg], unk: [C.unk, C.unkBg] }[kind];
  return <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '5px 12px', borderRadius: 999, background: m[1], color: m[0], font: `600 20px ${BODY}`, border: kind === 'unk' ? `1px dashed ${C.unk}` : `1px solid ${m[0]}33`, whiteSpace: 'nowrap' }}>{text}</span>;
}

function Row({ title, chip, source, o, y, glow }) {
  return <div style={{ opacity: o, transform: `translateY(${(1 - o) * 18}px)`, padding: '16px 18px', borderRadius: 12, background: '#fff', border: `1px solid ${glow ? C.blue : C.line}`, boxShadow: glow ? `0 0 0 4px ${C.blue}26` : 'none', display: 'grid', gap: 8 }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 10 }}><span style={{ font: `600 23px/1.15 ${BODY}`, color: C.ink }}>{title}</span><Chip {...chip} /></div>
    <span style={{ font: `500 20px/1.25 ${BODY}`, color: C.sub }}>{source}</span>
  </div>;
}

function Piece() {
  const { T, CUES } = useComposition();
  const Q = CUES;
  // Camera: push in on the phone in Morning, settle wide for Checklist/Route, push to center for Close.
  const camEnd = MOTION.draw(T, Q.Close - 0.2, 1.2);
  const zoom = [[Q.Morning, 3.6, 1, 1.18], [Q.Rewind, 1.4, 1.18, 1], [Q.Checklist, 1.4, 1, 1.32], [Q.Route + 0.2, 1.0, 1.32, 1], [Q.Ready, 1.2, 1, 1.32], [Q.Close - 0.2, 1.2, 1.32, 1]];
  let scale = 1; for (const [st, d, a, b] of zoom) { if (T >= st) scale = mix(a, b, MOTION.draw(T, st, d)); }
  const originY = mix(540, 600, MOTION.draw(T, Q.Checklist, 1.4)) ;
  const phoneX = mix(0, -260, camEnd);
  // Phone screen content
  const lock = 1 - MOTION.enter(T, Q.Rewind + 0.6, 0.5);
  const notif = MOTION.pop(T, Q.Morning + 1.0);
  const dip = (c) => Math.min(1, Math.abs(T - c) / 0.18); const clockO = Math.min(dip(Q.Rewind + 0.9), dip(Q.Rewind + 1.6));
  const app = MOTION.enter(T, Q.Rewind + 1.4, 0.7);
  const r = (k) => MOTION.enter(T, Q.Checklist + 0.1 + k * 0.6);
  const holdSel = T >= Q.Route && T < Q.Ready;
  const holdState = T < Q.Route + 1.6 ? { kind: 'bad', text: 'Blocked' } : T < Q.Route + 4.2 ? { kind: 'pend', text: 'With an office' } : { kind: 'ok', text: 'Ready' };
  const prereq = T < Q.Route + 4.8 ? { kind: 'unk', text: 'Unknown' } : { kind: 'ok', text: 'Ready' };
  const advising = T < Q.Ready + 0.4 ? { kind: 'pend', text: 'Review needed' } : { kind: 'ok', text: 'Booked' };
  const office = MOTION.enter(T, Q.Route + 0.8, 0.7) * (1 - MOTION.enter(T, Q.Ready + 0.2, 0.5));
  const wire = MOTION.draw(T, Q.Route + 0.6, 1.0) * (1 - MOTION.enter(T, Q.Ready + 0.2, 0.5));
  const cleared = MOTION.enter(T, Q.Route + 4.0, 0.5);
  const allReady = MOTION.pop(T, Q.Ready + 0.8, 0.6);
  const receipt = MOTION.enter(T, Q.Ready + 1.8);
  const close = MOTION.enter(T, Q.Close + 0.4, 0.8);
  const closeItems = (k) => MOTION.enter(T, Q.Close + 1.2 + k * 0.35);
  const clock = T < Q.Rewind + 0.9 ? '7:00' : T < Q.Rewind + 1.6 ? '6:41' : '9:08';
  return <div data-screen-label={'t=' + Math.floor(T) + 's'} style={{ position: 'absolute', inset: 0, background: C.canvas, overflow: 'hidden', fontFamily: BODY }}>
    {/* desk surface + window light: the room the phone lives in */}
    <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, height: 300, background: '#e7e1d4', borderTop: `1px solid ${C.line}` }}></div>
    <div style={{ position: 'absolute', right: 120, top: 90, width: 520, height: 620, border: `14px solid #e2dccf`, borderRadius: 6, opacity: 0.7 * (1 - close) }}><div style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, width: 14, marginLeft: -7, background: '#e2dccf' }}></div><div style={{ position: 'absolute', top: '50%', left: 0, right: 0, height: 14, marginTop: -7, background: '#e2dccf' }}></div></div>
    <div style={{ position: 'absolute', inset: 0, transform: `translateX(${phoneX}px) scale(${scale})`, transformOrigin: `680px ${originY}px` }}>
      {/* phone */}
      <div style={{ position: 'absolute', left: 420, top: 50, width: 520, height: 980, borderRadius: 58, background: '#111216', padding: 14, boxShadow: '0 40px 80px rgba(27,26,23,.18)' }}>
        <div style={{ position: 'relative', width: '100%', height: '100%', borderRadius: 42, overflow: 'hidden', background: C.paper }}>
          {/* lock screen */}
          <div style={{ position: 'absolute', inset: 0, background: C.navy, opacity: lock, display: 'grid', alignContent: 'start', justifyItems: 'center', paddingTop: 110, gap: 6 }}>
            <span style={{ font: `500 20px ${BODY}`, color: 'rgba(236,238,242,.75)' }}>{T < Q.Rewind + 0.9 ? 'Monday, 2 November' : 'Monday, 12 October'}</span>
            <span style={{ font: `600 120px/1 ${HEAD}`, color: '#eceef2', opacity: clockO, transform: `translateY(${(1 - clockO) * -24}px)`, display: 'inline-block' }}>{clock}</span>
            <div style={{ marginTop: 60, width: 450, padding: '18px 20px', borderRadius: 20, background: 'rgba(250,250,252,.94)', opacity: notif * (1 - MOTION.enter(T, Q.Rewind, 0.4)), transform: `translateY(${(1 - notif) * -30}px) scale(${mix(0.92, 1, notif)})`, display: 'grid', gap: 4 }}>
              <span style={{ font: `600 17px ${BODY}`, color: C.sub, letterSpacing: '.04em', textTransform: 'uppercase' }}>Registration · now</span>
              <span style={{ font: `600 25px ${BODY}`, color: C.ink }}>Registration blocked</span>
              <span style={{ font: `400 21px/1.3 ${BODY}`, color: C.ink }}>A hold on your account. Contact the bursar's office.</span>
            </div>
          </div>
          {/* Semester checklist */}
          <div style={{ position: 'absolute', inset: 0, opacity: app, padding: '60px 22px 22px', display: 'grid', alignContent: 'start', gap: 14 }}>
            <img src="../../../assets/logo-horizontal.svg" alt="" style={{ height: 24, justifySelf: 'start' }} />
            <div style={{ display: 'grid', gap: 2 }}><span style={{ font: `600 17px/1.3 ${BODY}`, letterSpacing: '.06em', textTransform: 'uppercase', color: C.sub }}>Spring registration · opens Mon 2 Nov, 7:00 am</span><span style={{ font: `600 42px/1.05 ${HEAD}`, color: C.ink }}>{allReady > 0.5 ? 'You’re ready.' : 'Ready for spring?'}</span></div>
            <Row o={r(0)} title="Registration window" chip={{ kind: 'ok', text: 'Ready · 9:08 am' }} source="Banner SIS · checked 6 min ago" />
            <Row o={r(1)} glow={holdSel} title="Account hold" chip={holdState} source={cleared > 0.5 ? 'Bursar · cleared today 2:14 pm' : 'Bursar · $120 lab fee unpaid'} />
            <Row o={r(2)} title="CHEM 210 prerequisite" chip={prereq} source={prereq.kind === 'unk' ? 'Transcript record missing · not assumed' : 'Registrar · AP credit posted'} />
            <Row o={r(3)} title="Advising check-in" chip={advising} source={advising.kind === 'ok' ? 'Thu 15 Oct, 10:30 am · K. Lee' : 'Required before spring registration'} />
            <div style={{ opacity: receipt, transform: `translateY(${(1 - receipt) * 14}px)`, padding: '14px 16px', borderRadius: 12, background: C.okBg, border: `1px solid ${C.ok}44`, font: `500 20px/1.35 ${BODY}`, color: C.ink }}>This isn’t enrollment. You’ll pick classes in Banner when your window opens.</div>
          </div>
        </div>
      </div>
      {/* routing wire + office card */}
      <svg width="1920" height="1080" style={{ position: 'absolute', inset: 0, overflow: 'visible' }}><path d="M 948 400 C 1020 400, 1030 360, 1100 360" fill="none" stroke={C.blue} strokeWidth="3" strokeDasharray="300" strokeDashoffset={300 * (1 - wire)} strokeLinecap="round" /></svg>
      <div style={{ position: 'absolute', left: 1100, top: 250, width: 480, padding: '24px 26px', borderRadius: 12, background: '#fff', border: `1px solid ${C.line}`, boxShadow: '0 18px 40px rgba(27,26,23,.10)', opacity: office, transform: `translateX(${(1 - office) * 40}px)`, display: 'grid', gap: 10 }}>
        <span style={{ font: `600 18px ${BODY}`, letterSpacing: '.06em', textTransform: 'uppercase', color: C.sub }}>Routed to · Bursar office</span>
        <span style={{ font: `600 30px ${BODY}`, color: C.ink }}>Hold: $120 lab fee</span>
        <span style={{ font: `500 23px/1.35 ${BODY}`, color: C.sub }}>Shared: name, student ID, hold reference. Nothing else.</span>
        <div style={{ display: 'flex', gap: 8 }}><Chip kind={cleared > 0.5 ? 'ok' : 'pend'} text={cleared > 0.5 ? 'Cleared · 2:14 pm' : 'In review'} /></div>
      </div>
    </div>
    {/* close card */}
    <div style={{ position: 'absolute', left: 790, top: 240, width: 960, opacity: close, transform: `translateY(${(1 - close) * 24}px)`, display: 'grid', gap: 22 }}>
      <img src="../../../assets/logo-horizontal.svg" alt="Semester" style={{ height: 40, justifySelf: 'start' }} />
      <span style={{ font: `600 76px/1.0 ${HEAD}`, color: C.ink, letterSpacing: '-.01em' }}>Every student ready before their window opens</span>
      <div style={{ display: 'grid', gap: 10 }}>{['One term, a cohort you choose', 'Read-only: your SIS stays the record', 'Clean exit: export, delete, certificate'].map((s, k) => <span key={s} style={{ opacity: closeItems(k), transform: `translateX(${(1 - closeItems(k)) * 16}px)`, font: `500 30px ${BODY}`, color: C.ink }}>— {s}</span>)}</div>
      <span style={{ opacity: closeItems(3), justifySelf: 'start', padding: '16px 26px', borderRadius: 6, background: C.blue, color: '#fff', font: `600 26px ${BODY}` }}>Book a scoping call · [domain]/pilot</span>
    </div>
    <Captions style={{ left: 1100, right: 100, top: 740, bottom: 'auto', textAlign: 'left', font: `600 52px/1.08 ${HEAD}`, color: C.ink, textShadow: 'none' }} items={[
      { at: Q.Morning + 1.6, until: Q.Rewind, text: '7:00 am. Registration opens. Too late to fix a hold.' },
      { at: Q.Rewind + 0.4, until: Q.Checklist, text: 'Three weeks earlier.' },
      { at: Q.Checklist + 1.0, until: Q.Route, text: 'Every blocker, from your systems, with how fresh it is.' },
      { at: Q.Route + 0.6, until: Q.Ready, text: 'Each one goes to the office that owns it.' },
      { at: Q.Ready + 0.8, until: Q.Close, text: 'Ready. Honest about what it isn’t.' },
    ]} />
  </div>;
}

function App() {
  const [t, setTweak] = window.useTweaks(window.TWEAK_DEFAULTS);
  return <>
    <window.CompositionStage width={1920} height={1080} scenes={window.OM_SCENES} playback={window.OM_PLAYBACK} bg={C.canvas}><Piece /></window.CompositionStage>
    <window.TweaksPanel><window.TweakSection label="Editor" /><window.TweakToggle label="Motion editor" value={t.motionEditor} onChange={(v) => setTweak('motionEditor', v)} /></window.TweaksPanel>
  </>;
}
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
