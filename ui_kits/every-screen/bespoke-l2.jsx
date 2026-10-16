// Bespoke Integrations screens (group L), batch 2: mapping, transforms, schedule, DLQ, replay, reconciliation, drift, duplicates, freshness. Uses window.ESL. Sample data only.
(() => {
const { N, ref, Box, Receipt, T, Chip, Bar, now } = window.ESB;
const { useInt, audit } = window.ESL;
const { useState } = React;

function MappingStudio() {
  const [S, setS] = useInt(); const M = S.maps; const [rows, setRows] = useState(M.draft || M.rows); const [rc, setRc] = useState(null); const ch = JSON.stringify(rows) !== JSON.stringify(M.rows);
  const req = rows.filter((r) => r[3] === 'Required' && !r[1].trim());
  return <div className="two"><div className="stack"><T head={['Semester field', 'Source field (OneRoster)', 'Transform', 'Need']} rows={rows.map((r, i) => [<span style={{ fontFamily: 'var(--font-mono)', fontSize: 12 }}>{r[0]}</span>, <input aria-label={'Source for ' + r[0]} value={r[1]} onChange={(e) => setRows(rows.map((x, j) => (j === i ? [x[0], e.target.value, x[2], x[3]] : x)))} style={{ font: 'inherit', padding: 4, width: '100%' }} />, <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12 }}>{r[2]}</span>, r[3] === 'Required' ? <Chip tone={r[1].trim() ? undefined : 'bad'}>Required</Chip> : 'Optional'])} /><div className="row"><N.Button variant="primary" disabled={!ch || req.length > 0} disabledReason={req.length ? 'Map every required field' : 'No changes'} onClick={() => { setS({ ...S, maps: { ...M, draft: rows }, log: audit(S, 'Mapping v' + (M.ver + 1) + ' drafted') }); setRc({ head: 'Draft saved', body: 'v' + (M.ver + 1) + ' · needs source-owner approval in Mapping versions before it runs', ref: ref('MAP') }); }}>Save as draft v{M.ver + 1}</N.Button>{ch && <N.Button onClick={() => setRows(M.rows)}>Discard</N.Button>}</div><Receipt r={rc} /></div><aside className="stack"><Box title="Preview (sample record)"><div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, whiteSpace: 'pre-wrap' }}>{'sourcedId: " S-0418 " → ' + (rows[0][1] ? 'S-0418' : '—') + '\nstatus: tobedeleted → ' + (rows[2][1] ? 'dropped' : '—') + '\nacademicSession.title: 2026FA → ' + (rows[3][1] ? 'F26' : '—')}</div></Box></aside></div>;
}

function MappingVersions() {
  const [S, setS] = useInt(); const M = S.maps; const [who, setWho] = useState('R. Mills (Registrar)'); const [rc, setRc] = useState(null);
  const approve = () => { setS({ ...S, maps: { ver: M.ver + 1, rows: M.draft, draft: null, hist: [[M.ver + 1, now(), 'Approved draft', who], ...M.hist] }, log: audit(S, 'Mapping v' + (M.ver + 1) + ' approved', who) }); setRc({ head: 'v' + (M.ver + 1) + ' live', body: 'Applies to new syncs; past facts keep the version they were mapped with', ref: ref('MV') }); };
  return <div className="two"><div className="stack"><T head={['Version', 'When', 'Change', 'Approved by']} rows={M.hist.map((h) => ['v' + h[0], h[1], h[2], h[3]])} />{M.draft ? <Box title={'Draft v' + (M.ver + 1) + ' waiting'} tone="warn"><N.TextField label="Approver (source owner)" value={who} onChange={(e) => setWho(e.target.value)} /><div className="row"><N.Button variant="primary" disabled={!/registrar/i.test(who)} disabledReason="Source owner (Registrar) must approve" onClick={approve}>Approve and publish</N.Button><N.Button onClick={() => setS({ ...S, maps: { ...M, draft: null }, log: audit(S, 'Draft rejected', who) })}>Reject</N.Button></div></Box> : <span className="muted">No draft. Create one in Mapping studio.</span>}<Receipt r={rc} /></div><aside className="stack"><Box title="Rollback">Restoring an earlier version creates a new version; history isn't rewritten.</Box></aside></div>;
}

const TF = [['trim', '" S-0418 "', 'S-0418'], ['concat', 'Jordan + Okafor', 'Jordan Okafor'], ['map', 'tobedeleted', 'dropped'], ['term_code', '2026FA', 'F26'], ['institution_scale', '87', 'B+ (institution scale v2)'], ['tz_normalize', '2026-10-16 23:59 (no tz)', 'REJECT → dead-letter: timezone required']];
function FieldTransformations() {
  const [i, setI] = useState(4); const t = TF[i];
  return <div className="two"><T head={['Transform', 'Input', 'Output']} rows={TF.map((x) => [<span style={{ fontFamily: 'var(--font-mono)' }}>{x[0]}</span>, x[1], /REJECT/.test(x[2]) ? <Chip tone="bad">{x[2]}</Chip> : x[2]])} onRow={setI} sel={i} /><aside className="stack"><Box title={t[0]}><span style={{ fontSize: 14 }}>{t[0] === 'institution_scale' ? 'Uses the institution’s published grade scale — never guessed. Scale version is stored with each fact.' : t[0] === 'tz_normalize' ? 'Missing timezone is rejected, not assumed. Wrong deadlines are worse than missing ones.' : 'Pure, versioned, unit-tested. Same input always gives the same output.'}</span></Box></aside></div>;
}

function SyncSchedule() {
  const [S, setS] = useInt(); const opts = ['Webhook', 'Every 15 min + webhook', 'Hourly', 'Nightly 02:00', 'On post', 'Live check at registration'];
  return <div className="two"><T head={['Feed', 'Schedule']} rows={Object.entries(S.sched).map(([f, v]) => [<span style={{ fontFamily: 'var(--font-mono)' }}>{f}</span>, <select aria-label={'Schedule ' + f} value={v} onChange={(e) => setS({ ...S, sched: { ...S.sched, [f]: e.target.value }, log: audit(S, f + ' schedule → ' + e.target.value) })} style={{ font: 'inherit', padding: 4 }}>{opts.map((o) => <option key={o}>{o}</option>)}</select>])} /><aside className="stack"><Box title="Holds">{/Live/.test(S.sched['sis.holds']) ? 'Registration re-checks holds live against the SIS.' : <span style={{ color: 'var(--status-danger)' }}>Holds aren't live-checked — registration could act on a stale hold.</span>}</Box><Box title="Budgets">Schedules must meet each feed's freshness budget (Data freshness).</Box></aside></div>;
}

function DeadLetterQueue() {
  const [S, setS] = useInt(); const [rc, setRc] = useState(null); const q = S.dlq.filter((d) => d.st === 'Queued');
  const act = (d, st) => { setS({ ...S, dlq: S.dlq.map((x) => (x.id === d.id ? { ...x, st } : x)), replays: st === 'Replay requested' ? [...S.replays, { id: ref('RP'), dlq: d.id, feed: d.feed, n: d.n, st: 'Pending approval' }] : S.replays, log: audit(S, d.id + ' → ' + st) }); setRc({ head: st, body: d.feed + ' · ' + d.err, ref: d.id }); };
  return <div className="two"><div className="stack">{q.length ? q.map((d) => <Box key={d.id} title={d.feed + ' · ' + d.n + ' message(s)'} aside={<span className="muted">{d.at}</span>}><span style={{ fontSize: 14 }}>{d.err}</span><div className="row"><N.Button variant="primary" onClick={() => act(d, 'Replay requested')}>Fix upstream → request replay</N.Button><N.Button onClick={() => act(d, 'Discarded (reason logged)')}>Discard</N.Button></div></Box>) : <N.EmptyState title="Dead-letter queue empty" body="Rejected messages land here instead of being dropped silently." />}<Receipt r={rc} /></div><aside className="stack"><Box title="Never silent">A rejected message lowers that feed's freshness and shows in Data freshness until resolved.</Box></aside></div>;
}

function ReplayRequest() {
  const [S, setS] = useInt(); const [who, setWho] = useState(''); const [rc, setRc] = useState(null);
  const go = (r) => { setS({ ...S, replays: S.replays.map((x) => (x.id === r.id ? { ...x, st: 'Replayed · ' + r.n + ' applied, 0 duplicates' } : x)), dlq: S.dlq.map((d) => (d.id === r.dlq ? { ...d, st: 'Resolved' } : d)), log: audit(S, 'Replay ' + r.id + ' approved by ' + who) }); setRc({ head: 'Replayed', body: 'Same event keys reused — consumers dedupe, so nothing doubles', ref: r.id }); };
  return <div className="two"><div className="stack"><T head={['Replay', 'Feed', 'Messages', 'Status', '']} rows={S.replays.map((r) => [r.id, r.feed, r.n, r.st, r.st === 'Pending approval' ? <N.Button disabled={!who.trim()} disabledReason="Approver name" onClick={() => go(r)}>Approve replay</N.Button> : ''])} empty="No replay requests. Create one from the dead-letter queue." /><N.TextField label="Approver" value={who} onChange={(e) => setWho(e.target.value)} /><Receipt r={rc} /></div><aside className="stack"><Box title="Bounded">Replays run with the original event IDs inside a time window; they can't skip validation.</Box></aside></div>;
}

function ReconciliationDashboard() {
  const [S, setS] = useInt(); const R = S.recon; const [rc, setRc] = useState(null);
  const run = () => setS({ ...S, recon: { st: 'Differences', at: now(), diffs: [{ k: 'enrollment S-0844 CHEM 2210', sis: 'dropped (Oct 7)', sem: 'enrolled', fix: 'Apply SIS' }, { k: 'hold S-0610', sis: 'none', sem: 'Balance hold', fix: 'Apply SIS' }, { k: 'grade S-0533 PS3', sis: '—', sem: '15 (posted)', fix: 'Passback pending — no action' }] }, log: audit(S, 'Reconciliation run · 3 differences') });
  const fix = (d) => { const left = R.diffs.filter((x) => x !== d); setS({ ...S, recon: { ...R, diffs: left, st: left.length ? 'Differences' : 'Matched' }, log: audit(S, 'Reconciled ' + d.k + ' → ' + d.fix) }); setRc({ head: 'Resolved', body: d.k + ' · SIS is the source of truth for this field', ref: ref('REC') }); };
  return <div className="two"><div className="stack"><div className="row"><N.Button variant="primary" onClick={run}>Compare SIS ↔ Semester</N.Button><Chip tone={R.st === 'Matched' ? 'ok' : R.st === 'Not run' ? undefined : 'warn'}>{R.st}</Chip></div><T head={['Record', 'SIS', 'Semester', '']} rows={R.diffs.map((d) => [d.k, d.sis, d.sem, /no action/.test(d.fix) ? <span className="muted">{d.fix}</span> : <N.Button onClick={() => fix(d)}>{d.fix}</N.Button>])} empty={R.st === 'Matched' ? 'All compared records match.' : 'Run to compare.'} /><Receipt r={rc} /></div><aside className="stack"><Box title="Direction">For official fields the SIS wins. Semester never "fixes" the SIS from its copy.</Box></aside></div>;
}

function SchemaDriftDashboard() {
  const [S, setS] = useInt(); const [rc, setRc] = useState(null);
  const act = (d, st) => { setS({ ...S, drift: S.drift.map((x) => (x.f === d.f ? { ...x, st } : x)), log: audit(S, 'Drift ' + d.f + ' → ' + st) }); setRc({ head: st, body: d.f, ref: ref('DRF') }); };
  return <div className="two"><div className="stack">{S.drift.map((d) => <Box key={d.f} title={d.f} aside={<Chip tone={d.st === 'Open' ? 'warn' : 'ok'}>{d.st}</Chip>}><span style={{ fontSize: 14 }}>{d.ch}</span><span className="muted">Detected {d.at}</span>{d.st === 'Open' && <div className="row"><N.Button onClick={() => act(d, 'Mapping draft created')}>Draft mapping change</N.Button><N.Button onClick={() => act(d, 'Ignored (unmapped field)')}>Ignore (not mapped)</N.Button></div>}</Box>)}<Receipt r={rc} /></div><aside className="stack"><Box title="Fail safe">A changed format on a mapped field pauses that field — it doesn't guess. New unmapped fields are ignored, never stored by default.</Box></aside></div>;
}

function DuplicateResolution() {
  const [S, setS] = useInt(); const [rc, setRc] = useState(null);
  const act = (d, st) => { setS({ ...S, dupes: S.dupes.map((x) => (x.id === d.id ? { ...x, st } : x)), log: audit(S, d.id + ' → ' + st, 'Registrar') }); setRc({ head: st, body: d.a[1] + ' / ' + d.b[1], ref: d.id }); };
  return <div className="two"><div className="stack">{S.dupes.map((d) => { const same = d.a[2] === d.b[2]; return <Box key={d.id} title={'Possible duplicate · ' + (same ? 'same email' : 'similar name')} aside={<Chip tone={d.st === 'Open' ? 'warn' : 'ok'}>{d.st}</Chip>}><T head={['', 'ID', 'Name', 'Email']} rows={[['A', ...d.a], ['B', ...d.b]]} />{d.st === 'Open' && <div className="row"><N.Button variant="primary" disabled={!same} disabledReason="Different emails — confirm with the student first" onClick={() => act(d, 'Merged → ' + d.a[0] + ' (B kept as alias)')}>Merge into A</N.Button><N.Button onClick={() => act(d, 'Not the same person')}>Not the same person</N.Button></div>}</Box>; })}<Receipt r={rc} /></div><aside className="stack"><Box title="Rule">Merges need the registrar, are reversible, and keep the old ID as an alias so links don't break. Never merge on name alone.</Box></aside></div>;
}

function DataFreshness() {
  const [S] = useInt(); const dlqFeeds = new Set(S.dlq.filter((d) => d.st === 'Queued').map((d) => d.feed));
  return <div className="two"><div className="stack">{S.fresh.map(([f, age, budget]) => { const bad = age > budget || dlqFeeds.has(f); return <div key={f} style={{ display: 'grid', gap: 2 }}><Bar label={f} v={Math.min(age, budget)} max={budget} right={(age < 60 ? age + ' min' : Math.round(age / 60) + ' h') + ' / budget ' + (budget < 60 ? budget + ' min' : Math.round(budget / 60) + ' h')} tone={bad ? 'bad' : undefined} />{dlqFeeds.has(f) && <span style={{ fontSize: 12, color: 'var(--status-danger)' }}>Degraded: messages in dead-letter queue</span>}</div>; })}</div><aside className="stack"><Box title="What students see">Over budget → “may be out of date” on that fact. Consequential actions (registration) re-check live instead.</Box><Box title="Age">Measured from the source's update time when known — not from when we last synced.</Box></aside></div>;
}

Object.assign(window.EVERY_BESPOKE, { 'L:Mapping studio': MappingStudio, 'L:Mapping versions': MappingVersions, 'L:Field transformations': FieldTransformations, 'L:Sync schedule': SyncSchedule, 'L:Dead-letter queue': DeadLetterQueue, 'L:Replay request': ReplayRequest, 'L:Reconciliation dashboard': ReconciliationDashboard, 'L:Schema drift dashboard': SchemaDriftDashboard, 'L:Duplicate resolution': DuplicateResolution, 'L:Data freshness': DataFreshness });
})();
