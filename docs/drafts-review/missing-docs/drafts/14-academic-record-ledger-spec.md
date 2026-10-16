# ACADEMIC RECORD LEDGER SPEC

**Status:** Draft — review required; not implemented, tested, institution-authorized, or production-enabled.

- **Catalog category:** Academic & learning
- **Proposed accountable owner:** Academic product lead + institutional academic owner
- **Document purpose:** Preserve official academic facts through auditable institution-controlled transactions.

## Decision boundary

This document describes a proposed operating/specification boundary. It does not transfer institutional record authority, alter product behavior, establish a contractual commitment, or certify compliance. Any tenant-specific rule, legal requirement, retention duration, accessibility claim, financial value, or service objective requires separately approved evidence.

## Proposed requirements

- Use append-only events and versioned projections for enrollment, grades, credits and awards; corrections append rather than erase history.
- Separate proposed changes from institution-approved official records and retain source-of-record receipts.
- Apply transaction integrity, idempotency and event sequence checks; reject stale commands.
- Allow portable record exports under authorized rules; unofficial student planning never writes directly to the ledger.

## Proposed operating flow

Request change → validate authority/rules/version → approve where required → commit event → update projection → reconcile receipt.

## Minimum record and audit fields

`event_id, tenant_id, student_id, domain, event_type, sequence, effective_at, actor, authority, prior_version, source_receipt`

Implementers should add actor, timestamp, tenant scope, policy/version reference, correlation identifier, source/provenance reference, and authorization decision where applicable. Store only the minimum data necessary for the documented purpose.

## Acceptance criteria and activation gate

A repeated enrollment event is applied once; a correction is traceable; a forged tenant or unauthorized actor cannot read or append ledger events.

Activation requires the common package standard plus this document’s acceptance criteria, a named owner, a bounded tenant/domain scope, and evidence linked to the released artifact. A failed critical control, unresolved authority conflict, unreviewed privacy/security impact, or missing rollback/recovery route blocks activation.

## Dependencies

- `DOMAIN_AUTHORITY_MATRIX`
- `RECONCILIATION_STANDARD`

## Required review and evidence before approval

- Product and accountable institutional owner: scope, workflow, authority and success criteria.
- Engineering: architecture, tenant isolation, authorization, data lifecycle, API/adapter contracts and tests.
- Security, privacy and accessibility: risk assessment, control evidence, assistive-technology/process review and any required legal review.
- Operations/support: monitoring, incident/escalation ownership, recovery or rollback evidence and user communications.
- Legal, finance, procurement or academic governance: only where the proposed document touches their controlled decisions.

## Open decisions

- Identify the institution-specific policy, source authority, owner, configuration boundary and effective date.
- Define measurable acceptance thresholds only after baselining and accountable approval.
- Add implementation references, test results, approval receipts and release evidence; until then, retain the status `Draft`.
