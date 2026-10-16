# DEGREE_AUDIT_SPEC: Explainable requirement matching and graduation review

Status: Expanded design draft, 2026-10-07. Not implementation or institution authorization.

## Accountable participants
Student; advisor; registrar/program authority. Actual named owners remain unassigned.

## States and transition control
estimated → reviewed → institution certified → superseded. Every transition checks tenant, capability, source freshness, policy version and permitted authority. Unauthorized or stale transitions fail closed and retain a safe recoverable state.

## End-to-end workflow
Pin catalog/program → normalize credits → apply approved exceptions → evaluate deterministic rules → explain gaps → institution certifies.

## Domain requirements
What-if work is private/estimated and cannot change official program intent. Certification is institution-controlled. Missing or conflicting transfer evidence remains uncertain.

## Proposed minimum record
`audit_id, catalog_year, program_version, rule_version, credit_refs, exception_versions, findings, certification_receipt` plus tenant, owner, source/provenance, timestamps, classification and correlation identifier. This is a design contract, not an existing database schema or endpoint.

## Failure and recovery behavior
- Distinguish pending from confirmed; never claim external success without an authoritative receipt.
- Retry only through idempotent commands; record ambiguity and reconcile before repeating a consequential action.
- Detect concurrent version changes and request human review rather than overwrite.
- Preserve request, approval and execution linkage; compensate or forward-correct official facts under institutional rules rather than erase history.
- Show accessible loading, empty, error, denied and offline states; private offline drafts do not become official transactions.

## Acceptance scenarios
Identical inputs produce same findings; unapproved substitution does not satisfy requirement; changing program in what-if view does not alter official records.

Additionally test cross-tenant denial, wrong role, revoked grant, stale source, duplicate command, source outage and accessible keyboard/screen-reader completion.

## Dependencies and activation gate
Requires domain authority, canonical IDs/provenance, classified data, scoped grants, published policy, reconciliation, support ownership and engineering release gates. Current staff handoff directs official changes to the SIS and calls for two-person override approvals. Any native official authority requires separately reviewed domain replacement and revised institutional/legal agreements. [file:100][file:99]

## Evidence to attach
Scoped artifact/configuration versions; automated and manual results; authority/approval records; sandbox source receipts; reconciliation; accessible-process review; rollback/compensation drill; named support owner. All remain outstanding unless supplied and independently verified.
