# REGISTRATION_ENGINE_SPEC: Registration readiness and institution-authorized enrollment

Status: Expanded design draft, 2026-10-07. Not implementation or institution authorization.

## Accountable participants
Student; registrar; two-person override reviewers; advisor with scoped access. Actual named owners remain unassigned.

## States and transition control
planned → evaluated → blocked/ready → approval pending → submitted → confirmed/rejected/waitlisted. Every transition checks tenant, capability, source freshness, policy version and permitted authority. Unauthorized or stale transitions fail closed and retain a safe recoverable state.

## End-to-end workflow
Evaluate dated rules/holds → show blockers → request exception → two-person approval where specified → submit SIS command → reconcile seat/receipt → update Action Center.

## Domain requirements
Readiness does not reserve a seat. Official allocation follows SIS semantics unless separately authorized native replacement. Offline intent is a draft. Revalidate holds/windows/authority at execution.

## Proposed minimum record
`command_id, student_id, section_id, rule_version, hold_freshness, override_approvals, seat/source_version, status, receipt` plus tenant, owner, source/provenance, timestamps, classification and correlation identifier. This is a design contract, not an existing database schema or endpoint.

## Failure and recovery behavior
- Distinguish pending from confirmed; never claim external success without an authoritative receipt.
- Retry only through idempotent commands; record ambiguity and reconcile before repeating a consequential action.
- Detect concurrent version changes and request human review rather than overwrite.
- Preserve request, approval and execution linkage; compensate or forward-correct official facts under institutional rules rather than erase history.
- Show accessible loading, empty, error, denied and offline states; private offline drafts do not become official transactions.

## Acceptance scenarios
Two requests for last seat cannot create false local confirmations; replay cannot double enroll; policy change invalidates stale approval; source timeout stays pending.

Additionally test cross-tenant denial, wrong role, revoked grant, stale source, duplicate command, source outage and accessible keyboard/screen-reader completion.

## Dependencies and activation gate
Requires domain authority, canonical IDs/provenance, classified data, scoped grants, published policy, reconciliation, support ownership and engineering release gates. Current staff handoff directs official changes to the SIS and calls for two-person override approvals. Any native official authority requires separately reviewed domain replacement and revised institutional/legal agreements. [file:100][file:99]

## Evidence to attach
Scoped artifact/configuration versions; automated and manual results; authority/approval records; sandbox source receipts; reconciliation; accessible-process review; rollback/compensation drill; named support owner. All remain outstanding unless supplied and independently verified.
