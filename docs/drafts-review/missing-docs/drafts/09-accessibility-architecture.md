# ACCESSIBILITY ARCHITECTURE

**Status:** Draft — review required; not implemented, tested, institution-authorized, or production-enabled.

- **Catalog category:** Product & architecture
- **Proposed accountable owner:** Product lead + platform architect
- **Document purpose:** Make accessibility a shared architecture requirement rather than a final audit.

## Decision boundary

This document describes a proposed operating/specification boundary. It does not transfer institutional record authority, alter product behavior, establish a contractual commitment, or certify compliance. Any tenant-specific rule, legal requirement, retention duration, accessibility claim, financial value, or service objective requires separately approved evidence.

## Proposed requirements

- Target WCAG 2.2 AA across complete processes; document actual test scope and never infer conformance from tokens alone.
- Provide semantic components, keyboard paths, focus restoration, announcements and non-drag alternatives.
- Respect reduced motion, zoom, contrast and student-controlled cognitive supports; accessible authentication must not require inaccessible tests.
- Test default, loading, empty, error, denied and offline states with assistive technology and disabled users.

## Proposed operating flow

Define process → map criteria → build semantics → automate checks → manually test keyboard and assistive technology → remediate → approve.

## Minimum record and audit fields

`process_id, criterion, component, test_method, assistive_technology, result, barrier, owner, retest_evidence`

Implementers should add actor, timestamp, tenant scope, policy/version reference, correlation identifier, source/provenance reference, and authorization decision where applicable. Store only the minimum data necessary for the documented purpose.

## Acceptance criteria and activation gate

Course planning and registration-readiness flows complete by keyboard and screen reader; modal focus returns correctly; denied and offline states remain understandable.

Activation requires the common package standard plus this document’s acceptance criteria, a named owner, a bounded tenant/domain scope, and evidence linked to the released artifact. A failed critical control, unresolved authority conflict, unreviewed privacy/security impact, or missing rollback/recovery route blocks activation.

## Dependencies

- `TEST_STRATEGY`
- `RELEASE_POLICY`

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
