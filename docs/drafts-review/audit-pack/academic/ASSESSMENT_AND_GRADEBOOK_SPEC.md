# ASSESSMENT_AND_GRADEBOOK_SPEC: Assessment submission, evaluation and final-grade transmission

Status: Expanded design draft, 2026-10-07. Not implementation or institution authorization.

## Accountable participants
Instructor; delegated grader; student; academic-record owner. Actual named owners remain unassigned.

## States and transition control
draft → published → submitted → evaluated → reviewed → released → corrected. Every transition checks tenant, capability, source freshness, policy version and permitted authority. Unauthorized or stale transitions fail closed and retain a safe recoverable state.

## End-to-end workflow
Publish assessment/rubric/policy → submit timestamped work → grade permitted scope → approve release → transmit final grade to SIS → reconcile receipt.

## Domain requirements
Deterministic weighting/rounding; access to unpublished grades restricted; no autonomous AI grade release. Official writes remain SIS-bound under current handoff. Corrections preserve earlier value and reason.

## Proposed minimum record
`assessment_id, submission_id, rubric_version, grading_rule_version, grade_version, reviewer, transmission_key, source_receipt` plus tenant, owner, source/provenance, timestamps, classification and correlation identifier. This is a design contract, not an existing database schema or endpoint.

## Failure and recovery behavior
- Distinguish pending from confirmed; never claim external success without an authoritative receipt.
- Retry only through idempotent commands; record ambiguity and reconcile before repeating a consequential action.
- Detect concurrent version changes and request human review rather than overwrite.
- Preserve request, approval and execution linkage; compensate or forward-correct official facts under institutional rules rather than erase history.
- Show accessible loading, empty, error, denied and offline states; private offline drafts do not become official transactions.

## Acceptance scenarios
Concurrent graders trigger version conflict; duplicate passback creates one result; timeout remains pending until reconciled; correction keeps immutable prior history.

Additionally test cross-tenant denial, wrong role, revoked grant, stale source, duplicate command, source outage and accessible keyboard/screen-reader completion.

## Dependencies and activation gate
Requires domain authority, canonical IDs/provenance, classified data, scoped grants, published policy, reconciliation, support ownership and engineering release gates. Current staff handoff directs official changes to the SIS and calls for two-person override approvals. Any native official authority requires separately reviewed domain replacement and revised institutional/legal agreements. [file:100][file:99]

## Evidence to attach
Scoped artifact/configuration versions; automated and manual results; authority/approval records; sandbox source receipts; reconciliation; accessible-process review; rollback/compensation drill; named support owner. All remain outstanding unless supplied and independently verified.
