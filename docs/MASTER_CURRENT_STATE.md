# Semester — master current state

Generated 7 Oct 2026 from the design project. **Nothing here is production evidence.** Statuses use the implementation vocabulary below; anything above *Prototype* needs a named repository, branch, test evidence and environment.

## Status vocabulary
| Status | Meaning |
|---|---|
| Concept | Narrative or hypothesis only |
| Designed | UX, requirements or architecture exists |
| Documented | Specification exists, not necessarily code |
| Prototype | Static or interactive prototype; not production evidence |
| Implemented | Code exists in a named repository and branch |
| Tested | Automated or manual acceptance evidence exists |
| Deployed | Running in a named environment |
| Institution-authorized | Institution approved the operational use |
| Production-enabled | Live for authorized users with monitoring and support |

## Current state
| Area | Status | Evidence | Next gate |
|---|---|---|---|
| Student OS (Today, Brain, planning, records) | Prototype | ui_kits/semester-app, #/student/* | Pilot accuracy validation |
| Work Studio and Semester Intelligence | Prototype | #/studio/* | Pilot course |
| Course Studio and gradebook | Prototype | #/faculty/*, #/studio/grading | One full native pilot term with faculty sign-off |
| Advising, degree audit, registration planning | Prototype | #/advisor/*, #/student/regplan | Parallel run against existing audit engine |
| Registrar operations, exceptions, posting | Prototype | #/institution/*, #/faculty/posting | Institution authorization per domain |
| Semester Social | Prototype | #/social/*, #/student/feed | Moderation staffing + safety review |
| AI gateway and governance | Documented + prototype | AI charter, #/trust/airisk, #/advisor/guard | Model release gate |
| Collaboration infrastructure (Yjs, Redis, alerting) | Documented + prototype | #/operations/console, stream 23 | Load and chaos tests in a real cluster |
| Company documents | Documented (drafts) | docs/Document Library.html | Attorney and owner review |
| Artifact register | Documented | docs/Master Artifact Register.html | Owners assigned and statuses reviewed |

## Inventory counts
See docs/company/Inventory Reconciliation.html. Do not combine the 659 / 673 / 692 screen counts, the prototype route count or the 857-artifact register.

## Where to start
- Build: handoff/START-HERE.md
- Every screen live: ui_kits/semester-app/All Screens.html
- Every document: docs/Document Library.html and docs/Master Library.html
- Every artifact and its status: docs/Master Artifact Register.html
