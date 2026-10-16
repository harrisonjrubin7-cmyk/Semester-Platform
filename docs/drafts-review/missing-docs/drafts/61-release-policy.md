# RELEASE POLICY

**Status:** Draft — review required; not implemented, tested, institution-authorized, or production-enabled.

- **Catalog category:** Engineering & reliability
- **Proposed accountable owner:** Engineering lead + SRE/security/accessibility reviewers
- **Document purpose:** Control progression from design to production with independently reviewable evidence.

## Decision boundary

This document describes a proposed operating/specification boundary. It does not transfer institutional record authority, alter product behavior, establish a contractual commitment, or certify compliance. Any tenant-specific rule, legal requirement, retention duration, accessibility claim, financial value, or service objective requires separately approved evidence.

## Proposed requirements

- Track designed, implemented, tested, deployed, institution-authorized and production-enabled as separate facts.
- Require scope-specific access tests, accessibility evidence, data validation, monitoring, support and tested rollback.
- Use tenant/domain flags and staged cohorts; approval for one tenant does not authorize every tenant.
- Record artifact versions, approvers and claims review; unresolved critical risks block activation.

## Proposed operating flow

Assemble evidence → review gates → approve deployment → deploy disabled → validate → obtain tenant authority → enable cohort → monitor.

## Minimum record and audit fields

`release_id, artifact_hash, scope, stage_facts, evidence_refs, approvers, flags, rollback_plan, activation_receipt`

Implementers should add actor, timestamp, tenant scope, policy/version reference, correlation identifier, source/provenance reference, and authorization decision where applicable. Store only the minimum data necessary for the documented purpose.

## Acceptance criteria and activation gate

A successful deployment leaves official write features disabled until institutional approval; missing evidence blocks promotion rather than defaulting to success.

Activation requires the common package standard plus this document’s acceptance criteria, a named owner, a bounded tenant/domain scope, and evidence linked to the released artifact. A failed critical control, unresolved authority conflict, unreviewed privacy/security impact, or missing rollback/recovery route blocks activation.

## Dependencies

- `TEST_STRATEGY`
- `ROLLBACK_STANDARD`
- `OBSERVABILITY`

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
