# ConnectionState
Use wherever a record or view depends on another system. Never show a projection lag as failure.
- confirmed ✓ — the owning domain confirmed the fact.
- pending … — waiting on the authority (e.g. SIS). Never fabricate confirmation.
- updating ↻ — the fact is confirmed; a derived view is catching up.
- stale ◷ — source older than its freshness target; say how old.
- blocked ⊘ — a rule or hold stops the action; name the owner.
- degraded ! — a dependency is down; say what still works.
- reconcile ⇄ — systems disagree; an operator is resolving it.
- resolved ✓ — reconciliation done.
Pair facts with ConnectionLine: `<ConnectionLine items={[{state:'confirmed',label:'Enrollment confirmed'},{state:'updating',label:'Schedule updating'}]} />`. Copy: never ask the person to repeat a confirmed action.
