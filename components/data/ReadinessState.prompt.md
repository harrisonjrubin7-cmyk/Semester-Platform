# ReadinessState
Outcome of a readiness check. Seven states, each with a precise meaning:
- ready_as_of ✓ — required checks passed against identified sources at a stated time. Always pass asOf.
- blocked ⊘ — a confirmed condition prevents the next action.
- review_required ? — an authorized person must evaluate an exception.
- unknown ◌ — necessary evidence is missing or unavailable. A missing prerequisite record is unknown, never eligible.
- stale ◷ — evidence exceeds its freshness limit.
- handoff_pending ⇄ — a responsible office hasn't finished its task.
- action_completed ✓ — the defined student action completed; not necessarily enrollment.
Resolving one hold never implies the whole checklist is ready. Pair with SourceBadge or source="Banner · 6 min ago".
