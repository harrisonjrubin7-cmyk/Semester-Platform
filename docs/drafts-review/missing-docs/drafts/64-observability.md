# OBSERVABILITY

**Status:** Draft — review required; not implemented, tested, institution-authorized, or production-enabled.

- **Catalog category:** Engineering & reliability
- **Proposed accountable owner:** Engineering lead + SRE/security/accessibility reviewers
- **Document purpose:** Make workflow health explainable without collecting unnecessary sensitive data.

## Decision boundary

This document describes a proposed operating/specification boundary. It does not transfer institutional record authority, alter product behavior, establish a contractual commitment, or certify compliance. Any tenant-specific rule, legal requirement, retention duration, accessibility claim, financial value, or service objective requires separately approved evidence.

## Proposed requirements

- Instrument requests, jobs, sync, controlled actions, source freshness and authoritative receipts with correlation IDs.
- Separate operational logs, security audit and product analytics with class-specific retention/access.
- Redact prompts, grades, credentials and private documents from general telemetry.
- Alert on tenant-isolation denials, reconciliation drift, stale sources, failed jobs and SLO burn with actionable owners.

## Proposed operating flow

Define signal → classify fields → instrument → test redaction → set approved alert → exercise runbook → review usefulness.

## Minimum record and audit fields

`event_id, correlation_id, tenant_scope, service, operation, status, latency, source_freshness, sanitized_error, retention_class`

Implementers should add actor, timestamp, tenant scope, policy/version reference, correlation identifier, source/provenance reference, and authorization decision where applicable. Store only the minimum data necessary for the documented purpose.

## Acceptance criteria and activation gate

A failed grade sync can be traced without exposing the grade in general logs; alerts route to a named owner and include a tested runbook.

Activation requires the common package standard plus this document’s acceptance criteria, a named owner, a bounded tenant/domain scope, and evidence linked to the released artifact. A failed critical control, unresolved authority conflict, unreviewed privacy/security impact, or missing rollback/recovery route blocks activation.

## Dependencies

- `DATA_RETENTION`
- `SLO_POLICY`
- `RUNBOOK_INDEX`

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
