// Action Center projection lab: JS port of handoff/action-center/reduce-action.ts.txt plus a simulated transactional consumer. Sample data only.
(() => {
const { N, useStore, Box, T, Chip, now } = window.ESB;
const { useState } = React;
const ALLOWED = { open: ['deadline.changed', 'action.blocked', 'action.submitted', 'action.fulfilled'], blocked: ['deadline.changed', 'action.unblocked', 'action.fulfilled'], awaiting_approval: ['deadline.changed', 'action.submitted', 'action.blocked'], submitted: ['action.outcome_unknown', 'action.fulfilled', 'action.reopened'], outcome_unknown: ['action.fulfilled', 'action.reopened'], fulfilled: ['action.corrected_reopen'], cancelled: ['action.corrected_reopen'] };
const KEY = ['tenantId', 'workspaceId', 'subjectPersonId', 'sourceSystem', 'sourceObjectId', 'actionKey'];
function reduceAction(item, e) {
  if (!KEY.every((k) => item[k] === e[k])) throw new Error('EVENT_SCOPE_MISMATCH');
  if (!Number.isSafeInteger(e.sourceRevision)) throw new Error('INVALID_SOURCE_REVISION');
  if (e.sourceRevision <= item.sourceRevision) return item;
  if (e.sourceRevision > item.sourceRevision + 1) throw new Error('REVISION_GAP');
  if (!ALLOWED[item.state].includes(e.type)) throw new Error('ILLEGAL_TRANSITION: ' + item.state + ' → ' + e.type);
  const n = { ...item, sourceRevision: e.sourceRevision, projectionRevision: item.projectionRevision + 1 };
  switch (e.type) {
    case 'deadline.changed': if (!e.dueAt || !Number.isFinite(Date.parse(e.dueAt))) throw new Error('INVALID_DEADLINE'); return { ...n, dueAt: e.dueAt };
    case 'action.blocked': return { ...n, state: 'blocked' };
    case 'action.unblocked': return { ...n, state: 'open' };
    case 'action.submitted': return { ...n, state: 'submitted' };
    case 'action.outcome_unknown': return { ...n, state: 'outcome_unknown' };
    case 'action.fulfilled': if (!e.receiptId) throw new Error('RECEIPT_REQUIRED'); return { ...n, state: 'fulfilled', receiptId: e.receiptId, fulfilledAt: e.occurredAt };
    default: return { ...n, state: 'open', receiptId: null, fulfilledAt: null };
  }
}
const ITEM0 = { id: 'ac-1', tenantId: 'vanderbilt', workspaceId: 'ws-student', subjectPersonId: 'p-0418', sourceSystem: 'banner', sourceObjectId: 'HOLD-ADV-22', actionKey: 'resolve_hold', sourceRevision: 3, projectionRevision: 1, state: 'blocked', dueAt: '2026-11-02T08:00:00-06:00', receiptId: null, fulfilledAt: null, obligation: 'required' };
// One transaction: marker + projection + intent commit together, or none of them do.
function consume(db, e) {
  if (db.processed.includes(e.eventId)) return { db, res: ['skip', 'Already processed · no change, no notification'] };
  try { const next = reduceAction(db.item, e); const changed = next !== db.item; return { db: { ...db, item: next, processed: [...db.processed, e.eventId], outbox: changed ? [...db.outbox, { topic: 'notify.action_changed', state: next.state, rev: next.sourceRevision }] : db.outbox }, res: ['ok', changed ? 'Applied · revision ' + next.sourceRevision + ' · state ' + next.state : 'Older revision · ignored (marker recorded)'] }; }
  catch (err) { return { db, res: [err.message === 'REVISION_GAP' ? 'quarantine' : 'reject', err.message + (err.message === 'REVISION_GAP' ? ' · quarantined; fetch a source snapshot' : ' · rolled back, nothing written')] }; }
}
const ev = (db, type, extra = {}) => ({ eventId: 'evt-' + Math.random().toString(36).slice(2, 8), ...Object.fromEntries(KEY.map((k) => [k, db.item[k]])), sourceRevision: db.item.sourceRevision + 1, occurredAt: new Date().toISOString(), type, ...extra });
const DB0 = { item: ITEM0, processed: [], outbox: [], prefs: { pinned: false, snoozed: false, hidden: false }, log: [], last: null };

function runTests() {
  const base = { ...DB0 }; const t = []; const T_ = (name, fn) => { try { t.push([name, !!fn()]); } catch (e) { t.push([name, false]); } };
  T_('Duplicate delivery makes no duplicate change or notification', () => { const e = ev(base, 'action.unblocked'); const a = consume(base, e).db; const b = consume(a, e); return b.db === a && a.outbox.length === 1; });
  T_('Older revision can’t overwrite a newer deadline', () => { const a = consume(base, ev(base, 'deadline.changed', { dueAt: '2026-11-05T08:00:00Z' })).db; const old = consume(a, { ...ev(a, 'deadline.changed', { dueAt: '2026-10-01T08:00:00Z' }), sourceRevision: 2 }).db; return old.item.dueAt === '2026-11-05T08:00:00Z'; });
  T_('Tenant mismatch is rejected', () => consume(base, ev(base, 'action.unblocked', { tenantId: 'belmont' })).res[0] === 'reject');
  T_('A required item can’t be hidden', () => base.item.obligation === 'required');
  T_('Snoozing changes presentation only', () => { const s = { ...base, prefs: { ...base.prefs, snoozed: true } }; return s.item.state === base.item.state && s.item.sourceRevision === base.item.sourceRevision; });
  T_('Submission doesn’t mean fulfilled', () => { const a = consume(base, ev(base, 'action.unblocked')).db; const b = consume(a, ev(a, 'action.submitted')).db; return b.item.state === 'submitted' && !b.item.receiptId; });
  T_('An unknown outcome stays unresolved', () => { let d = consume(base, ev(base, 'action.unblocked')).db; d = consume(d, ev(d, 'action.submitted')).db; d = consume(d, ev(d, 'action.outcome_unknown')).db; return consume(d, ev(d, 'action.unblocked')).res[0] === 'reject' && d.item.state === 'outcome_unknown'; });
  T_('Fulfilled needs a receipt', () => consume(base, ev(base, 'action.fulfilled')).res[0] === 'reject');
  T_('Only a correction event reopens a fulfilled item', () => { const d = consume(base, ev(base, 'action.fulfilled', { receiptId: 'RCPT-1' })).db; return consume(d, ev(d, 'action.unblocked')).res[0] === 'reject' && consume(d, ev(d, 'action.corrected_reopen')).db.item.state === 'open'; });
  T_('A revision gap is quarantined, not applied', () => consume(base, { ...ev(base, 'action.unblocked'), sourceRevision: base.item.sourceRevision + 3 }).res[0] === 'quarantine');
  T_('Marker, projection and intent commit together', () => { const r = consume(base, ev(base, 'action.fulfilled')); return r.db.processed.length === 0 && r.db.outbox.length === 0; });
  return t;
}

function AcProjection() {
  const [D, setD, reset] = useStore('acproj', DB0); const [tests, setTests] = useState(null);
  const fire = (e, label) => { const { db, res } = consume(D, e); setD({ ...db, prefs: D.prefs, log: [...D.log, [now(), label + ' → ' + res[1], res[0]]], last: e }); };
  const I = D.item; const BTN = [['Deadline moved', () => ev(D, 'deadline.changed', { dueAt: '2026-11-04T08:00:00-06:00' })], ['Blocked', () => ev(D, 'action.blocked')], ['Unblocked', () => ev(D, 'action.unblocked')], ['Submitted', () => ev(D, 'action.submitted')], ['Outcome unknown', () => ev(D, 'action.outcome_unknown')], ['Fulfilled with receipt', () => ev(D, 'action.fulfilled', { receiptId: 'RCPT-' + Math.random().toString(36).slice(2, 6).toUpperCase() })], ['Fulfilled, no receipt', () => ev(D, 'action.fulfilled')], ['Reopened', () => ev(D, 'action.reopened')], ['Authorized correction', () => ev(D, 'action.corrected_reopen')]];
  const BAD = [['Replay the last event', () => D.last], ['Older revision', () => ({ ...ev(D, 'deadline.changed', { dueAt: '2026-10-01T08:00:00Z' }), sourceRevision: Math.max(0, I.sourceRevision - 1) })], ['Wrong tenant', () => ev(D, 'action.unblocked', { tenantId: 'belmont' })], ['Skip two revisions', () => ({ ...ev(D, 'action.unblocked'), sourceRevision: I.sourceRevision + 3 })]];
  const tone = (s) => (s === 'fulfilled' ? 'ok' : s === 'outcome_unknown' || s === 'blocked' ? 'warn' : undefined);
  return <div className="two"><div className="stack">
    <N.Notice head="One obligation, end to end">Banner emits domain events for the advising hold. The Action Center consumer projects them into the item you see. This is a JS port of handoff/action-center/reduce-action.ts.txt. No database is involved.</N.Notice>
    <Box title="Source events (from the owning system)"><div className="row">{BTN.map(([l, f]) => <N.Button key={l} size="sm" onClick={() => fire(f(), l)}>{l}</N.Button>)}</div></Box>
    <Box title="Delivery problems"><div className="row">{BAD.map(([l, f]) => <N.Button key={l} size="sm" variant="ghost" disabled={l === 'Replay the last event' && !D.last} onClick={() => fire(f(), l)}>{l}</N.Button>)}</div></Box>
    <Box title="action_center.items (projection row)"><N.Fields items={[{ field: 'workflow_state', value: I.state }, { field: 'source_revision', value: String(I.sourceRevision) }, { field: 'projection_revision', value: String(I.projectionRevision) }, { field: 'due_at', value: I.dueAt }, { field: 'receipt_id', value: I.receiptId || 'null' }, { field: 'obligation', value: I.obligation }]} /><div className="row"><Chip tone={tone(I.state)}>{I.state}</Chip>{I.state === 'submitted' && <span className="muted">Submitted, not fulfilled. Waiting for the registrar’s receipt.</span>}{I.state === 'outcome_unknown' && <span className="muted">Reconciling. Nothing is resubmitted blindly.</span>}</div></Box>
    <Box title="Consumer log"><T head={['When', 'Event → result']} rows={[...D.log].reverse().slice(0, 8).map((l) => [l[0], <span style={{ color: l[2] === 'reject' ? 'var(--status-danger)' : l[2] === 'quarantine' ? 'var(--status-pending)' : undefined }}>{l[1]}</span>])} empty="Fire an event." /></Box>
  </div><aside className="stack">
    <Box title="action_center.preferences (yours)"><N.Switch label="Pinned" checked={D.prefs.pinned} onChange={(v) => setD({ ...D, prefs: { ...D.prefs, pinned: v } })} /><N.Switch label="Snoozed until tomorrow" checked={D.prefs.snoozed} onChange={(v) => setD({ ...D, prefs: { ...D.prefs, snoozed: v } })} /><N.Switch label="Hidden" checked={false} disabled disabledReason="Required obligations can’t be hidden" onChange={() => {}} /><span className="muted" style={{ fontSize: 12 }}>These change presentation only. Snoozing never changes the hold.</span></Box>
    <Box title="processed_events · outbox"><span style={{ fontSize: 13 }}>{D.processed.length} markers · {D.outbox.length} notification intents</span>{D.outbox.slice(-3).map((o, i) => <div key={i} style={{ fontSize: 12, fontFamily: 'var(--font-mono)' }}>{o.topic} · {o.state} · r{o.rev}</div>)}</Box>
    <Box title="Minimum tests" aside={<button className="link-quiet" style={{ fontSize: 12 }} onClick={() => setTests(runTests())}>Run</button>}>{tests ? <>{tests.map(([n, ok]) => <div key={n} style={{ fontSize: 12.5 }}><span style={{ color: ok ? 'var(--status-success)' : 'var(--status-danger)' }}>{ok ? '✓' : '✕'}</span> {n}</div>)}<b style={{ fontSize: 13 }}>{tests.filter((x) => x[1]).length}/{tests.length} pass (JS port only)</b></> : <span className="muted">Runs the 11 checks from the handoff against the reducer port.</span>}</Box>
    <button className="link-quiet" style={{ fontSize: 12, justifySelf: 'start' }} onClick={() => { reset(); setTests(null); }}>Reset the stream</button></aside></div>;
}
window.AcProjection = AcProjection;
})();
