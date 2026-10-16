# Pilot event taxonomy — registration readiness (draft, 14 Oct 2026)
Owner: Harrison Rubin · reviewer: Bramm Rubin (privacy) · status: **draft — needs privacy review before collection starts**

Rules: no names, emails, student ids, grades, holds or free text in any event. `subject` is a per-tenant pseudonymous id rotated each term. Events are aggregated before anyone sees them; minimum cell size 10.

| Event | When | Properties (only these) |
|---|---|---|
| readiness.check_started | student opens the check | tenant, term, cohort_bucket, surface (web/mobile) |
| readiness.evaluation_requested | request submitted | tenant, term, goal_type |
| readiness.evaluation_completed | result shown | tenant, term, outcome (ready / blocked / needs_review / unknown / stale / failed / cancelled), latency_bucket |
| readiness.blocker_viewed | student opens a blocker | tenant, blocker_category (hold / prerequisite / window / other) |
| readiness.next_step_selected | student picks a next step | tenant, next_step_type (official_process / office_route / refresh / support) |
| readiness.handoff_created | routed to an office | tenant, office_type, reason_category |
| readiness.handoff_resolved | office closes it | tenant, office_type, resolution_category, time_to_resolve_bucket |
| readiness.receipt_viewed | student reopens a receipt | tenant, age_bucket |
| readiness.feedback_submitted | in-context prompt answered | tenant, understood (yes / partly / no) |
| source.freshness_changed | connector state changes | tenant, source, from_state, to_state |
| ops.safe_off | capability switched off | tenant, capability, reason_category |

Never collected: page-level clickstream, device fingerprints, location, anything typed by the student.
