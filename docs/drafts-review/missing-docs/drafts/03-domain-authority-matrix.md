# DOMAIN AUTHORITY MATRIX

**Status:** Draft — review required; not implemented, tested, institution-authorized, or production-enabled.

- **Catalog category:** Product & architecture
- **Proposed accountable owner:** Product lead + platform architect
- **Document purpose:** Assign read, recommend, write and approval authority for every domain.

## Decision boundary

This document describes a proposed operating/specification boundary. It does not transfer institutional record authority, alter product behavior, establish a contractual commitment, or certify compliance. Any tenant-specific rule, legal requirement, retention duration, accessibility claim, financial value, or service objective requires separately approved evidence.

## Proposed requirements

- Registrar controls official enrollment, academic records and completion decisions; instructors control course publication and grading within delegated policy.
- Students control private plans, notes and sharing; Semester estimates remain labeled estimates.
- Services, finance and career owners approve their own official operations; company support has no default student-record access.
- Record authority per tenant and domain; conflicting sources enter review rather than last-write-wins promotion.

## Proposed operating flow

Inventory domain → identify accountable institution role → set source-of-record and allowed commands → approve delegation → test denial paths.

## Minimum record and audit fields

`tenant_id, domain, source_of_record, accountable_role, read_capabilities, write_capabilities, approval_rule, effective_dates`

Implementers should add actor, timestamp, tenant scope, policy/version reference, correlation identifier, source/provenance reference, and authorization decision where applicable. Store only the minimum data necessary for the documented purpose.

## Acceptance criteria and activation gate

An AI recommendation cannot alter enrollment; a delegated instructor cannot edit another course; an authority change requires an institution-approved version.

Activation requires the common package standard plus this document’s acceptance criteria, a named owner, a bounded tenant/domain scope, and evidence linked to the released artifact. A failed critical control, unresolved authority conflict, unreviewed privacy/security impact, or missing rollback/recovery route blocks activation.

## Dependencies

- `ACADEMIC_RECORD_LEDGER_SPEC`
- `INTEGRATION_GOVERNANCE`

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
