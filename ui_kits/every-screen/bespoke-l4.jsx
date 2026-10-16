// Bespoke Integrations screens (group L), batch 4: domain migration lifecycle. Uses window.ESL (S.mig). Sample data only.
(() => {
const { N, ref, Box, Receipt, T, Chip, Bar, now } = window.ESB;
const { useInt, audit } = window.ESL;
const { useState } = React;
const MST = ['Domain inventory', 'Validation', 'Dual run', 'User acceptance', 'Cutover', 'Enhanced monitoring', 'Rollback window', 'Legacy retirement', 'Post-migration review'];
const DOMS = [['Advising notes', 'Legacy advising tool', 'Semester-native candidate', 4210], ['Study groups', 'Spreadsheet + email', 'Semester-native candidate', 380], ['Registration holds', 'Banner SIS', 'Stays SIS-authoritative — mirror only', 1902], ['Final grades', 'Banner SIS', 'Stays SIS-authoritative — not migratable here', 41200]];
const useMig = () => { const [S, setS] = useInt(); const M = S.mig; const put = (p, msg, who) => setS({ ...S, mig: { ...M, ...p }, log: audit(S, msg, who) }); return [M, put]; };
const Steps = ({ i }) => <div className="row" style={{ gap: 4 }}>{MST.map((s, k) => <span key={s} style={{ fontSize: 10.5, padding: '3px 6px', borderRadius: 3, background: k < i ? 'var(--action-primary)' : k === i ? 'var(--surface-raised)' : 'transparent', border: '1px solid var(--border-subtle)', color: k < i ? 'var(--text-on-action, #fff)' : 'var(--text-secondary)' }}>{s}</span>)}</div>;
const Gate = ({ M, at, children }) => (M.stage < at ? <N.EmptyState title={'Finish ' + MST[at - 1] + ' first'} body={'Current step: ' + MST[M.stage]} /> : children);

function DomainInventory() {
  const [M, put] = useMig(); const [rc, setRc] = useState(null);
  return <div className="two"><div className="stack"><Steps i={M.stage} /><T head={['Domain', 'Lives in', 'Authority', 'Records', '']} rows={DOMS.map((d) => [<b>{d[0]}</b>, d[1], /Stays/.test(d[2]) ? <Chip tone="bad">{d[2]}</Chip> : d[2], d[3].toLocaleString(), /Stays/.test(d[2]) ? '' : M.dom === d[0] ? <Chip tone="ok">Selected</Chip> : <N.Button disabled={M.stage > 0} disabledReason="Migration in progress" onClick={() => { put({ dom: d[0], n: d[3], stage: 1 }, 'Selected domain ' + d[0]); setRc({ head: 'Inventoried', body: d[0] + ' · ' + d[3] + ' records · owner and fields listed', ref: ref('MIG') }); }}>Select</N.Button>])} /><Receipt r={rc} /></div><aside className="stack"><Box title="One domain at a time">Official-record domains stay with the SIS. Replacing them needs a separate institution authority decision and new agreements.</Box></aside></div>;
}

function Validation() {
  const [M, put] = useMig(); const [run, setRun] = useState(null);
  return <div className="two"><div className="stack"><Steps i={M.stage} /><Gate M={M} at={1}><Box title={'Validate ' + M.dom}><N.Button onClick={() => setRun({ ok: M.n - 14, bad: 14, orphans: 3 })}>Validate staged import</N.Button>{run && <><div style={{ fontSize: 14 }}><b>{run.ok.toLocaleString()}</b> valid · <b style={{ color: 'var(--status-danger)' }}>{run.bad}</b> invalid · {run.orphans} reference unknown students</div><N.Notice head="Seeded critical mismatches found">Rehearsal deliberately included 5 bad rows — all 5 were caught.</N.Notice><N.Button variant="primary" disabled={M.stage > 1} onClick={() => put({ stage: 2, val: run }, 'Validation passed with exceptions queued')}>Accept with {run.bad} exceptions queued</N.Button></>}</Box></Gate></div><aside className="stack"><Box title="Checks">Required fields · IDs resolve · authorship + private scope preserved · checksums for attachments · no duplicates.</Box></aside></div>;
}

function DualRun() {
  const [M, put] = useMig(); const D = M.dual || { days: 0, diffs: 0 };
  return <div className="two"><div className="stack"><Steps i={M.stage} /><Gate M={M} at={2}><Box title="Old and new side by side"><Bar v={D.days} max={14} label="Days of dual run" right={D.days + '/14'} /><div style={{ fontSize: 14 }}>Unexplained differences: <b style={{ color: D.diffs ? 'var(--status-danger)' : undefined }}>{D.diffs}</b></div><div className="row"><N.Button onClick={() => put({ dual: { days: Math.min(14, D.days + 7), diffs: D.days < 7 ? 2 : 0 } }, 'Dual run +7 days')}>Advance 7 days</N.Button><N.Button variant="primary" disabled={D.days < 14 || D.diffs > 0 || M.stage > 2} disabledReason="14 days with zero unexplained differences" onClick={() => put({ stage: 3 }, 'Dual run complete')}>Complete dual run</N.Button></div></Box></Gate></div><aside className="stack"><Box title="Users stay on the old system">During dual run the legacy tool is still the one people use. Semester runs alongside and is compared daily.</Box></aside></div>;
}

const UAT = [['adv', 'Advisor finds every note for a student'], ['priv', 'Staff-only notes stay hidden from students'], ['stu', 'Student sees only shared notes'], ['kb', 'Keyboard + screen reader can complete the flow'], ['exp', 'Export back to CSV works']];
function UserAcceptance() {
  const [M, put] = useMig(); const U = M.uat || {}; const all = UAT.every(([k]) => U[k]);
  return <div className="two"><div className="stack"><Steps i={M.stage} /><Gate M={M} at={3}><Box title="Acceptance by real users (synthetic data)">{UAT.map(([k, l]) => <label key={k} className="row" style={{ fontSize: 14 }}><input type="checkbox" checked={!!U[k]} onChange={(e) => put({ uat: { ...U, [k]: e.target.checked } }, 'UAT ' + k + (e.target.checked ? ' passed' : ' reopened'))} /> {l}</label>)}<N.Button variant="primary" disabled={!all || M.stage > 3} disabledReason="Every scenario must pass" onClick={() => put({ stage: 4 }, 'UAT signed off', 'Advising lead')}>Sign off</N.Button></Box></Gate></div><aside className="stack"><Box title="Who signs">The domain owner (Advising lead) — not the implementation team.</Box></aside></div>;
}

function Cutover() {
  const [M, put] = useMig(); const [conf, setConf] = useState(false); const [rc, setRc] = useState(null);
  return <div className="two"><div className="stack"><Steps i={M.stage} /><Gate M={M} at={4}><Box title={'Cut over ' + M.dom}>{M.stage > 4 ? <span className="muted">Cut over {M.cut}.</span> : !conf ? <><div style={{ fontSize: 14 }}>Freeze legacy writes → final delta import → reconcile → switch users → announce.</div><N.Button variant="primary" onClick={() => setConf(true)}>Start cutover</N.Button></> : <N.Notice head="Switch users to Semester now?">Legacy goes read-only. Rollback stays available for 30 days.<div className="row" style={{ marginTop: 8 }}><N.Button variant="primary" onClick={() => { put({ stage: 5, cut: now() }, 'Cutover complete', 'Advising lead'); setRc({ head: 'Cut over', body: 'Final delta 0 differences · legacy read-only', ref: ref('CUT') }); setConf(false); }}>Switch</N.Button><N.Button onClick={() => setConf(false)}>Cancel</N.Button></div></N.Notice>}</Box></Gate><Receipt r={rc} /></div><aside className="stack"><Box title="Go/no-go">Needs: validation, dual run, UAT, support staffed, rollback rehearsed.</Box></aside></div>;
}

function EnhancedMonitoring() {
  const [M, put] = useMig();
  return <div className="two"><div className="stack"><Steps i={M.stage} /><Gate M={M} at={5}><Box title="First 14 days">{[['Error rate', '0.2%', 'ok'], ['Support tickets about notes', '6 (2 how-to, 4 missing filter)', 'warn'], ['Missing-record reports', '0', 'ok'], ['p95 load time', '1.4 s', 'ok']].map(([l, v, t]) => <div key={l} className="row" style={{ justifyContent: 'space-between', fontSize: 14 }}><span>{l}</span><Chip tone={t}>{v}</Chip></div>)}<N.Button variant="primary" disabled={M.stage > 5} onClick={() => put({ stage: 6 }, 'Enhanced monitoring period passed')}>Close monitoring period</N.Button></Box></Gate></div><aside className="stack"><Box title="Daily">Reconciliation report to the domain owner every morning during this period.</Box></aside></div>;
}

function RollbackWindow() {
  const [M, put] = useMig(); const [rc, setRc] = useState(null);
  return <div className="two"><div className="stack"><Steps i={M.stage} /><Gate M={M} at={6}><Box title="30-day rollback window" aside={<Chip tone="warn">Day 18 of 30</Chip>}><span style={{ fontSize: 14 }}>Rolling back exports everything created in Semester since cutover into the legacy format and reopens legacy writes.</span><div className="row"><N.Button onClick={() => setRc({ head: 'Rollback rehearsed', body: '212 new notes exported and re-imported to legacy staging · 0 differences', ref: ref('RBW') })}>Rehearse rollback</N.Button><N.Button variant="primary" disabled={M.stage > 6} onClick={() => put({ stage: 7 }, 'Rollback window closed', 'Advising lead')}>Close window</N.Button></div></Box></Gate><Receipt r={rc} /></div><aside className="stack"><Box title="Exit path">Even after the window closes, institution export stays available.</Box></aside></div>;
}

function LegacyRetirement() {
  const [M, put] = useMig(); const [chk, setChk] = useState({}); const L = [['arch', 'Legacy data archived per retention schedule'], ['acc', 'Legacy accounts and credentials removed'], ['con', 'Vendor contract ended (institution decision)'], ['doc', 'Runbooks updated']]; const all = L.every(([k]) => chk[k]);
  return <div className="two"><div className="stack"><Steps i={M.stage} /><Gate M={M} at={7}><Box title="Retire the legacy tool">{L.map(([k, l]) => <label key={k} className="row" style={{ fontSize: 14 }}><input type="checkbox" checked={!!chk[k]} onChange={(e) => setChk({ ...chk, [k]: e.target.checked })} /> {l}</label>)}<N.Button variant="primary" disabled={!all || M.stage > 7} disabledReason="Every step, including the institution's contract decision" onClick={() => put({ stage: 8 }, 'Legacy retired', 'Institution CIO')}>Retire</N.Button></Box></Gate></div><aside className="stack"><Box title="Institution authority">Only the institution can end its legacy contract. A student's or staff member's import consent doesn't retire anything.</Box></aside></div>;
}

function PostMigrationReview() {
  const [M, put] = useMig(); const [t, setT] = useState('');
  return <div className="two"><div className="stack"><Steps i={M.stage} /><Gate M={M} at={8}><Box title={'Review · ' + M.dom}>{[['Records migrated', (M.n || 0).toLocaleString()], ['Exceptions resolved', (M.val ? M.val.bad : 0) + ' of ' + (M.val ? M.val.bad : 0)], ['Dual-run days', '14'], ['Signature → launch', 'Recorded separately from blocked time']].map(([l, v]) => <div key={l} className="row" style={{ justifyContent: 'space-between', fontSize: 14 }}><span>{l}</span><b>{v}</b></div>)}<N.TextField label="What we'd change next time" value={t} onChange={(e) => setT(e.target.value)} /><N.Button variant="primary" disabled={t.trim().length < 10 || M.stage > 8} disabledReason="Write a lesson" onClick={() => put({ stage: 9, lesson: t }, 'Post-migration review filed')}>File review</N.Button>{M.stage > 8 && <button className="link-quiet" onClick={() => put({ stage: 0, dom: null, uat: {}, dual: null, val: null }, 'Migration reset (sample)')}>Start another domain (reset sample)</button>}</Box></Gate></div><aside className="stack"><Box title="No outcome claims">Report what was moved and how it went — not that students “prefer” it, unless that was measured with an approved protocol.</Box></aside></div>;
}

Object.assign(window.EVERY_BESPOKE, { 'L:Domain inventory': DomainInventory, 'L:Validation': Validation, 'L:Dual run': DualRun, 'L:User acceptance': UserAcceptance, 'L:Cutover': Cutover, 'L:Enhanced monitoring': EnhancedMonitoring, 'L:Rollback window': RollbackWindow, 'L:Legacy retirement': LegacyRetirement, 'L:Post-migration review': PostMigrationReview });
})();
