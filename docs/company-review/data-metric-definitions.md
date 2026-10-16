# Pilot metric definitions (draft, 14 Oct 2026)
Every metric shows numerator, denominator, period, scope, source, owner and limitations. Below 10 in any cell → show "fewer than 10", not a number.

| Metric | Numerator | Denominator | Not to be read as |
|---|---|---|---|
| Adoption | cohort members with ≥1 readiness.evaluation_requested | eligible authenticated cohort members | engagement or satisfaction |
| Safe completion (MET-READINESS-001) | evaluation_completed with outcome ready, blocked or needs_review **and** a next_step_selected | evaluation_requested (excl. synthetic, cancelled before processing, maintenance) | enrollment completion |
| Unsafe-state share | completed with stale / unknown / failed | evaluation_completed | a product error rate on its own (often source health) |
| Understanding | feedback understood = yes | feedback_submitted | representative of the whole cohort |
| Handoff resolution | handoff_resolved within the agreed target | handoff_created | Semester performance alone (office-owned time) |
| Source health | hours with freshness = current | pilot hours | connector certification |

Owner: Harrison Rubin. Review: Bramm Rubin (privacy) and Wyatt Rose (institution) before the baseline is set. Publication of any figure → institution approval.
