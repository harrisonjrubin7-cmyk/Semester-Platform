# Semester — where things stand (15 Oct 2026)

## Decided
- **Environments:** production `semester` · staging `Semester-Platform` · development `Semester2` · drills `semester-restore-drill-2026-10-01`. Changes flow dev → staging → production only.
- **Access model:** reads through row-level security; writes only through server commands owned by a non-login role.
- **Pilot:** signed paid pilot with Vanderbilt — launch Spring 2027, pending institutional activation. Wedge: registration readiness only.
- **Go-live approvers (four different people):** Harrison Rubin (product) · Bramm Rubin (security, independence founder-attested) · Teo Katz (operations backup) · Wyatt Rose, Vanderbilt Registrar's Office (institution).
- **One maturity scale (0–7).** Nothing is deployed or activated. Database checks now run in CI (155/156 suites, 15 Oct); the release gate still needs a green run plus the other P0 evidence.

## Built (design and handoff)
- Platform shell with every workspace, ~45 interactive prototypes, 36 templates, 163 library cards, 75 components.
- `handoff/build-plan/` — sprint plan, pilot operating plan, access-rule references with fix patches and tests, live-integration functions, registers, decisions.
- Reference lab (strengthened package): 34/34 unit tests passed on the author's machine — reference evidence only.

## Since 14 Oct
- **First real database evidence** (handoff/evidence/PG17-RUN-6e6b8fb.md), from a CI run of commit 6e6b8fb on PostgreSQL 17:
  - 155 of 156 check suites passed (5,782 assertions) on a clean cluster with all 240 migrations;
  - one failure, `definer-sweep` (0 checks, so it errored at setup);
  - 5 access rules still open on the policy register.
- **Registrar:**
  - all batches A–I are prototyped with specs: policy and curriculum, scheduling, registration, grades, transfer credit, degree audit and graduation, transcripts and record services, operations.
- **Marketplace:**
  - handoff codes (one-time 8-digit code; records fulfillment only);
  - RLS performance fixes in migration 031 (membership-checked orders policy, buyer and seller indexes).
  - Open question: should a dispute opened during a pending transfer flag it for reversal?
- **Workflow mapping:**
  - 3 false "covered" mappings corrected: role grant, export/erasure, offboarding;
  - 120 workflow candidates filed, not reconciled with the repo code.

- **New prototypes 15 Oct:** Growth & Content Studio (approved claims, purpose-bound audiences, launch blocked until clean, revision-bound approval, GTM phases), Live classroom (one learning object, five uses), Network careers with per-audience presentations, Registrar transcripts (batch H).
- **Contracts:** 16 workspace contracts (handoff/build-plan/workspace-contracts/, Northfield JSON canonical).
- **AI gateway:** ai_context function, outbound redaction (9/9 run here) and composed middleware drafted. Provider transport is still open.
- **Architecture packs:** 7 indexed in handoff/ARCHITECTURE-INDEX.md; reconcile with the repo's target-architecture doc before building.
- **definer-sweep:** diagnosed from source. It fails before its first check, so it's one of three setup causes (handoff/evidence/DEFINER-SWEEP-DIAGNOSIS.md). The CI error line decides which.

## Inputs the program needs (from "anything else needed…pdf")
Resolved: repository + branch, environment map, engineering and institutional owners, approvers. Still open: approved cohort, sandbox access to the student system, reviewed contract/DPA versions, support hours, measurement rules.

## Open
| Item | Owner | Unblocks |
|---|---|---|
| Run migrations + `supabase test db` on Semester-Platform and paste output | Harrison or Teo | first green evidence items |
| Vanderbilt IT technical contact (SSO/SIS) | Wyatt Rose to ask | identity + source setup |
| Sign the pilot scope record | Harrison + Wyatt | configuration |
| Start SPRINT-PILOT-001 in the repo | Harrison / Teo | release candidate |

Release record `REL-READINESS-001`: approvers named · **0 of 15 evidence items attached**.

Start here: `handoff/build-plan/sprint-pilot-001/README.md` · decisions: `handoff/build-plan/DECISIONS-2026-10-14.md`.
