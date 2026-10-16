# STUDENT_SUCCESS_MODEL: Student-controlled support and executive-function workflows

Status: Expanded design draft, 2026-10-07. Not implementation or institution authorization.

## Accountable participants
Student; advisor; tutoring/services owner; institutional privacy reviewer. Actual named owners remain unassigned.

## States and transition control
signal available → explained → student action/opt-out → referral accepted → follow-up → resolved. Every transition checks tenant, capability, source freshness, policy version and permitted authority. Unauthorized or stale transitions fail closed and retain a safe recoverable state.

## End-to-end workflow
Read permitted fresh signals → explain uncertainty → offer optional action → student controls reminder/share → route service → confirm outcome.

## Domain requirements
No hidden score imposes punitive action. Students control optional prompts and private-work sharing. Advisor access follows explicit institutional scope; sensitive case data is excluded.

## Proposed minimum record
`support_case_id, signal_refs, purpose, explanation, student_preferences, sharing_grant, referral_owner, outcome` plus tenant, owner, source/provenance, timestamps, classification and correlation identifier. This is a design contract, not an existing database schema or endpoint.

## Failure and recovery behavior
- Distinguish pending from confirmed; never claim external success without an authoritative receipt.
- Retry only through idempotent commands; record ambiguity and reconcile before repeating a consequential action.
- Detect concurrent version changes and request human review rather than overwrite.
- Preserve request, approval and execution linkage; compensate or forward-correct official facts under institutional rules rather than erase history.
- Show accessible loading, empty, error, denied and offline states; private offline drafts do not become official transactions.

## Acceptance scenarios
Opt-out stops optional nudges; correcting data changes derived explanation; service handoff honors revoked grant; no AI signal automatically changes aid, discipline or enrollment.

Additionally test cross-tenant denial, wrong role, revoked grant, stale source, duplicate command, source outage and accessible keyboard/screen-reader completion.

## Dependencies and activation gate
Requires domain authority, canonical IDs/provenance, classified data, scoped grants, published policy, reconciliation, support ownership and engineering release gates. Current staff handoff directs official changes to the SIS and calls for two-person override approvals. Any native official authority requires separately reviewed domain replacement and revised institutional/legal agreements. [file:100][file:99]

## Evidence to attach
Scoped artifact/configuration versions; automated and manual results; authority/approval records; sandbox source receipts; reconciliation; accessible-process review; rollback/compensation drill; named support owner. All remain outstanding unless supplied and independently verified.
