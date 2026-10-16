# FACULTY_WORKSPACE_SPEC: Faculty and delegated teaching operations

Status: Expanded design draft, 2026-10-07. Not implementation or institution authorization.

## Accountable participants
Instructor; TA; course owner; support recipient. Actual named owners remain unassigned.

## States and transition control
grant issued → active → restricted/expired/revoked. Every transition checks tenant, capability, source freshness, policy version and permitted authority. Unauthorized or stale transitions fail closed and retain a safe recoverable state.

## End-to-end workflow
Select course context → view shared actions → author/assess within scope → review release → refer support with permitted context → audit.

## Domain requirements
Course grants are least privilege and time-bounded. TA grading differs from final-grade approval. Referrals do not expose student-private work or sensitive investigation details.

## Proposed minimum record
`faculty_id, section_grants, capability_scope, grant_expiry, delegated_reviewer, action_id, referral_scope` plus tenant, owner, source/provenance, timestamps, classification and correlation identifier. This is a design contract, not an existing database schema or endpoint.

## Failure and recovery behavior
- Distinguish pending from confirmed; never claim external success without an authoritative receipt.
- Retry only through idempotent commands; record ambiguity and reconcile before repeating a consequential action.
- Detect concurrent version changes and request human review rather than overwrite.
- Preserve request, approval and execution linkage; compensate or forward-correct official facts under institutional rules rather than erase history.
- Show accessible loading, empty, error, denied and offline states; private offline drafts do not become official transactions.

## Acceptance scenarios
TA cannot publish final grades without permission; expired term grant denies access; support referral contains only approved fields.

Additionally test cross-tenant denial, wrong role, revoked grant, stale source, duplicate command, source outage and accessible keyboard/screen-reader completion.

## Dependencies and activation gate
Requires domain authority, canonical IDs/provenance, classified data, scoped grants, published policy, reconciliation, support ownership and engineering release gates. Current staff handoff directs official changes to the SIS and calls for two-person override approvals. Any native official authority requires separately reviewed domain replacement and revised institutional/legal agreements. [file:100][file:99]

## Evidence to attach
Scoped artifact/configuration versions; automated and manual results; authority/approval records; sandbox source receipts; reconciliation; accessible-process review; rollback/compensation drill; named support owner. All remain outstanding unless supplied and independently verified.
