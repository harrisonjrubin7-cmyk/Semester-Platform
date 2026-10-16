# TRANSFER_AND_ARTICULATION_SPEC: External credit intake and accountable equivalency review

Status: Expanded design draft, 2026-10-07. Not implementation or institution authorization.

## Accountable participants
Student; academic evaluator; registrar. Actual named owners remain unassigned.

## States and transition control
received → source validated → rule matched → review pending → approved/rejected → posted/reconciled. Every transition checks tenant, capability, source freshness, policy version and permitted authority. Unauthorized or stale transitions fail closed and retain a safe recoverable state.

## End-to-end workflow
Receive evidence → check provenance → apply dated agreement → resolve unit ambiguity → evaluator decides → transmit approved credit → refresh audit.

## Domain requirements
No AI equivalency is official. Agreements have effective dates and scope. Duplicate evidence is detected; credit conversion ambiguity requires human review.

## Proposed minimum record
`evaluation_id, external_institution, evidence_ref, course/term, rule_version, unit_conversion, reviewer, decision, source_receipt` plus tenant, owner, source/provenance, timestamps, classification and correlation identifier. This is a design contract, not an existing database schema or endpoint.

## Failure and recovery behavior
- Distinguish pending from confirmed; never claim external success without an authoritative receipt.
- Retry only through idempotent commands; record ambiguity and reconcile before repeating a consequential action.
- Detect concurrent version changes and request human review rather than overwrite.
- Preserve request, approval and execution linkage; compensate or forward-correct official facts under institutional rules rather than erase history.
- Show accessible loading, empty, error, denied and offline states; private offline drafts do not become official transactions.

## Acceptance scenarios
Expired agreement cannot auto-award credit; repeated transcript does not duplicate credit; rejection includes reason and approved appeal/correction route.

Additionally test cross-tenant denial, wrong role, revoked grant, stale source, duplicate command, source outage and accessible keyboard/screen-reader completion.

## Dependencies and activation gate
Requires domain authority, canonical IDs/provenance, classified data, scoped grants, published policy, reconciliation, support ownership and engineering release gates. Current staff handoff directs official changes to the SIS and calls for two-person override approvals. Any native official authority requires separately reviewed domain replacement and revised institutional/legal agreements. [file:100][file:99]

## Evidence to attach
Scoped artifact/configuration versions; automated and manual results; authority/approval records; sandbox source receipts; reconciliation; accessible-process review; rollback/compensation drill; named support owner. All remain outstanding unless supplied and independently verified.
