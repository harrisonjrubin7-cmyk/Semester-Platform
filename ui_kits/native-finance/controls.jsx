// Native finance — controls & activation gates (from the native operations execution brief, 14 Oct).
// Reference + simulator only. No provider, no database, no real money.
(function () {
  const { useState } = React;
  const CTX = [
    ['Semester product billing', 'Semester’s accepted commercial contracts and operational ledger', 'Company finance roles'],
    ['Institution student accounts', 'Bursar / ERP until an approved domain cutover', 'Institution student-accounts roles only'],
    ['Marketplace transactions', 'Accepted marketplace / processor arrangement and seller responsibilities', 'Marketplace operators within that arrangement'],
  ];
  const SM = [
    ['Checkout', ['Draft', 'Priced', 'Terms accepted', 'Submitted', 'Awaiting confirmation', 'Completed'], ['Failed', 'Expired']],
    ['Payment attempt', ['Created', 'Method/action required', 'Processing', 'Authorized', 'Captured'], ['Failed', 'Cancelled', 'Expired', 'Unknown']],
    ['Settlement', ['Pending', 'Partial', 'Settled', 'Reconciled'], ['Exception']],
    ['Refund', ['Requested', 'Policy checked', 'Approval', 'Submitted', 'Processing', 'Succeeded'], ['Partial', 'Failed', 'Unknown']],
    ['Invoice', ['Draft', 'Approved', 'Issued', 'Open', 'Partially paid', 'Paid'], ['Void', 'Write-off', 'Dispute']],
    ['Subscription', ['Versioned activation', 'Active', 'Renewal'], ['Grace', 'Suspended', 'Cancelled']],
    ['Payment plan', ['Proposed terms', 'Accepted', 'Installments', 'Completed'], ['Arrears', 'Modified']],
  ];
  const WH = ['Verify the signature against the exact raw payload', 'Durably deduplicate provider events', 'Preserve resource and business-transition identifiers', 'Reconcile authoritative objects when ordering or outcome is uncertain', 'Make processing retry-safe', 'A timeout is not proof the payment failed', 'Never grant entitlements from browser success alone'];
  const LEDGER = ['Integer minor units and explicit currencies', 'Balance independently by book and currency', 'Append-only posted journals', 'Corrections through linked reversing/replacement entries', 'Transactional posting and concurrency protection', 'Unique source-event / business-transition handling', 'Effective time separate from recorded time', 'Rebuildable balances and reconciled projections', 'Approved accounting treatment for fees, refunds, disputes and revenue'];
  const GATES = ['Concurrent and balanced posting', 'Duplicate and out-of-order events', 'Timeout after provider success', 'Partial captures and refunds', 'Concurrent refund limits', 'Settlement and accounting reconciliation', 'Merchant / book isolation', 'Entitlement policy', 'Qualified accounting, payment/legal, security and applicable PCI review', 'Staffed support and operated recovery'];
  const EVENTS = [
    { id: 'evt_1', type: 'payment_intent.processing', sig: true, label: 'processing' },
    { id: 'evt_2', type: 'payment_intent.succeeded', sig: true, label: 'succeeded' },
    { id: 'evt_2', type: 'payment_intent.succeeded', sig: true, label: 'succeeded (duplicate delivery)' },
    { id: 'evt_0', type: 'payment_intent.created', sig: true, label: 'created (arrives late)' },
    { id: 'evt_x', type: 'payment_intent.succeeded', sig: false, label: 'forged — bad signature' },
  ];
  const RANK = { 'payment_intent.created': 0, 'payment_intent.processing': 1, 'payment_intent.succeeded': 2 };
  const ST = { 0: 'Created', 1: 'Processing', 2: 'Captured' };

  function Sim() {
    const [seen, setSeen] = useState([]); const [rank, setRank] = useState(-1); const [log, setLog] = useState([]); const [ent, setEnt] = useState(false);
    const send = (e) => {
      let r;
      if (!e.sig) r = ['bad', '400 — signature check failed on raw body; nothing recorded'];
      else if (seen.includes(e.id)) r = ['', '200 — duplicate ' + e.id + ', no side effects'];
      else if (RANK[e.type] <= rank) { setSeen([...seen, e.id]); r = ['', '200 — recorded as history; state stays ' + ST[rank] + ' (forward-only)']; }
      else { setSeen([...seen, e.id]); setRank(RANK[e.type]); if (RANK[e.type] === 2) setEnt(true); r = ['ok', '200 — ' + ST[RANK[e.type]] + (RANK[e.type] === 2 ? ' · entitlement granted from verified event' : '')]; }
      setLog([[e.label, ...r], ...log]);
    };
    const reset = () => { setSeen([]); setRank(-1); setLog([]); setEnt(false); };
    return <div className="card" style={{ display: 'grid', gap: 10 }}><h3 style={{ margin: 0 }}>Webhook replay simulator</h3>
      <div className="row" style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>{EVENTS.map((e, i) => <button key={i} className="btn" onClick={() => send(e)}>{e.label}</button>)}<button className="btn" onClick={() => { setLog([['browser redirect: “success”', 'warn', 'Ignored for entitlement — waits for the verified event'], ...log]); }}>Browser says success</button><button className="btn" onClick={reset}>Reset</button></div>
      <div style={{ fontSize: 13 }}>Payment state: <b>{rank < 0 ? 'none' : ST[rank]}</b> · Entitlement: <b>{ent ? 'granted' : 'not granted'}</b></div>
      <div style={{ display: 'grid', gap: 4 }}>{log.map((l, i) => <div key={i} style={{ fontSize: 13 }}><span className={'chip ' + l[1]}>{l[0]}</span> {l[2]}</div>)}</div>
      <span style={{ fontSize: 12, color: 'var(--text-secondary)' }}>Ordering uses the business transition, not event creation timestamps. Live code: handoff/live-integration/…/live-payments.</span></div>;
  }

  function Controls() {
    const [g, setG] = useState({});
    const n = GATES.filter((_, i) => g[i]).length;
    return <div style={{ display: 'grid', gap: 14 }}>
      <div className="card"><h2 style={{ margin: 0 }}>Three financial contexts — never one balance</h2><table style={{ width: '100%', borderCollapse: 'collapse', marginTop: 8 }}><thead><tr>{['Context', 'Primary authority', 'Who may see it'].map((h) => <th key={h} style={{ textAlign: 'left', fontSize: 11, padding: 6 }}>{h}</th>)}</tr></thead><tbody>{CTX.map((c) => <tr key={c[0]}>{c.map((x, i) => <td key={i} style={{ padding: 6, fontSize: 13, borderTop: '1px solid var(--border-subtle)' }}>{i === 0 ? <b>{x}</b> : x}</td>)}</tr>)}</tbody></table><div style={{ fontSize: 13, marginTop: 8 }}>A company billing role can’t inspect institution student accounts. Extend the existing records (commercial_products, commercial_prices, billing_accounts, quotes, contracts, subscriptions, invoices, payment_events, credits_refunds) — don’t duplicate them.</div></div>
      <div className="card"><h2 style={{ margin: 0 }}>Separate state machines</h2><div style={{ display: 'grid', gap: 8, marginTop: 8 }}>{SM.map(([n2, happy, side]) => <div key={n2} style={{ fontSize: 13 }}><b>{n2}:</b> {happy.join(' → ')} <span style={{ color: 'var(--text-secondary)' }}>· branches: {side.join(', ')}</span></div>)}</div><div style={{ fontSize: 13, marginTop: 8 }}>A settled payment can later be refunded or disputed; those events never erase the original capture and settlement.</div></div>
      <div className="grid2" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 14 }}>
        <div className="card"><h3 style={{ margin: 0 }}>Webhook and uncertainty rules</h3>{WH.map((w, i) => <div key={i} style={{ fontSize: 13 }}>{i + 1}. {w}</div>)}</div>
        <div className="card"><h3 style={{ margin: 0 }}>Ledger requirements</h3>{LEDGER.map((w) => <div key={w} style={{ fontSize: 13 }}>• {w}</div>)}<div style={{ fontSize: 12, color: 'var(--text-secondary)', marginTop: 6 }}>The local reference code checks balance only — it isn’t journal storage or accounting compliance.</div></div>
      </div>
      <Sim />
      <div className="card"><div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}><h3 style={{ margin: 0 }}>Finance activation gates</h3><span className={'chip ' + (n === GATES.length ? 'ok' : 'bad')}>{n}/{GATES.length} evidenced</span></div>{GATES.map((x, i) => <label key={i} style={{ display: 'flex', gap: 6, fontSize: 13 }}><input type="checkbox" checked={!!g[i]} onChange={(e) => setG({ ...g, [i]: e.target.checked })} /> {x}</label>)}
        <div className="note" style={{ marginTop: 8 }}>“Native checkout” means Semester owns the experience and commercial logic — not raw card capture. PCI eligibility depends on the integration (embedded form vs redirect) and needs payment-page script protection or qualifying provider assurance; confirm with the provider/acquirer. FinCEN payment-processor treatment is a facts-and-circumstances call — an adapter abstraction isn’t an exemption. Payment counsel reviews the real money flow.</div></div>
    </div>;
  }
  window.FinanceControls = Controls;
})();
