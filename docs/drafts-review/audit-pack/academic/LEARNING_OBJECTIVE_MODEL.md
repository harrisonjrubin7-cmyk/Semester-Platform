# LEARNING_OBJECTIVE_MODEL: Objectives, alignment and evidence-based progress

Status: Expanded design draft, 2026-10-07. Not implementation or institution authorization.

## Accountable participants
Curriculum owner; instructor; student. Actual named owners remain unassigned.

## States and transition control
draft → academically reviewed → published → superseded. Every transition checks tenant, capability, source freshness, policy version and permitted authority. Unauthorized or stale transitions fail closed and retain a safe recoverable state.

## End-to-end workflow
Author objective → align program/course → map rubric/activity → review → publish → attach evidence → explain progress.

## Domain requirements
Verified academic evidence and inferred progress are separate. Objective revisions do not rewrite prior assessment meaning. No time-on-page proxy is official mastery.

## Proposed minimum record
`objective_id, scope, statement, version, alignment_ids, rubric_version, evidence_refs, inference_method` plus tenant, owner, source/provenance, timestamps, classification and correlation identifier. This is a design contract, not an existing database schema or endpoint.

## Failure and recovery behavior
- Distinguish pending from confirmed; never claim external success without an authoritative receipt.
- Retry only through idempotent commands; record ambiguity and reconcile before repeating a consequential action.
- Detect concurrent version changes and request human review rather than overwrite.
- Preserve request, approval and execution linkage; compensate or forward-correct official facts under institutional rules rather than erase history.
- Show accessible loading, empty, error, denied and offline states; private offline drafts do not become official transactions.

## Acceptance scenarios
Historical evaluation resolves original objective version; unsupported mastery stays estimated; a student can inspect evidence and request correction.

Additionally test cross-tenant denial, wrong role, revoked grant, stale source, duplicate command, source outage and accessible keyboard/screen-reader completion.

## Dependencies and activation gate
Requires domain authority, canonical IDs/provenance, classified data, scoped grants, published policy, reconciliation, support ownership and engineering release gates. Current staff handoff directs official changes to the SIS and calls for two-person override approvals. Any native official authority requires separately reviewed domain replacement and revised institutional/legal agreements. [file:100][file:99]

## Evidence to attach
Scoped artifact/configuration versions; automated and manual results; authority/approval records; sandbox source receipts; reconciliation; accessible-process review; rollback/compensation drill; named support owner. All remain outstanding unless supplied and independently verified.
