# ACADEMIC_RECORD_LEDGER_SPEC: Canonical record references and auditable command history

Status: Expanded design draft, 2026-10-07. Not implementation or institution authorization.

## Accountable participants
Registrar; institutional source owner; authorized staff. Actual named owners remain unassigned.

## States and transition control
proposed → approved → submitted → pending receipt → reconciled/rejected → corrected. Every transition checks tenant, capability, source freshness, policy version and permitted authority. Unauthorized or stale transitions fail closed and retain a safe recoverable state.

## End-to-end workflow
Validate source authority → prepare scoped change → obtain required approval → submit to SIS → correlate receipt → update projection → reconcile.

## Domain requirements
Current baseline is SIS-authoritative, not a new independent official ledger. Store auditable references/events and projections. Native authority is a separate future domain-transfer decision requiring contract and institution approval.

## Proposed minimum record
`event_id, student_id, domain, sequence, effective_at, source_record_id, source_version, approval_id, receipt, projection_version` plus tenant, owner, source/provenance, timestamps, classification and correlation identifier. This is a design contract, not an existing database schema or endpoint.

## Failure and recovery behavior
- Distinguish pending from confirmed; never claim external success without an authoritative receipt.
- Retry only through idempotent commands; record ambiguity and reconcile before repeating a consequential action.
- Detect concurrent version changes and request human review rather than overwrite.
- Preserve request, approval and execution linkage; compensate or forward-correct official facts under institutional rules rather than erase history.
- Show accessible loading, empty, error, denied and offline states; private offline drafts do not become official transactions.

## Acceptance scenarios
Projection cannot claim official status before receipt; stale command is rejected; retries are idempotent; forged tenant cannot append or read another tenant history.

Additionally test cross-tenant denial, wrong role, revoked grant, stale source, duplicate command, source outage and accessible keyboard/screen-reader completion.

## Dependencies and activation gate
Requires domain authority, canonical IDs/provenance, classified data, scoped grants, published policy, reconciliation, support ownership and engineering release gates. Current staff handoff directs official changes to the SIS and calls for two-person override approvals. Any native official authority requires separately reviewed domain replacement and revised institutional/legal agreements. [file:100][file:99]

## Evidence to attach
Scoped artifact/configuration versions; automated and manual results; authority/approval records; sandbox source receipts; reconciliation; accessible-process review; rollback/compensation drill; named support owner. All remain outstanding unless supplied and independently verified.
