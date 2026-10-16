# EDUCATION GRAPH ARCHITECTURE

**Status:** Draft — review required; not implemented, tested, institution-authorized, or production-enabled.

- **Catalog category:** Product & architecture
- **Proposed accountable owner:** Product lead + platform architect
- **Document purpose:** Define the canonical graph connecting people, institutions, courses, work, services and evidence.

## Decision boundary

This document describes a proposed operating/specification boundary. It does not transfer institutional record authority, alter product behavior, establish a contractual commitment, or certify compliance. Any tenant-specific rule, legal requirement, retention duration, accessibility claim, financial value, or service objective requires separately approved evidence.

## Proposed requirements

- Scope nodes and edges by tenant and explicit ownership; cross-institution links require grants, not implicit joins.
- Carry provenance, freshness, versions, classification and retention on nodes and relationships.
- Separate student-private annotations from institutional record nodes; authorization applies to traversals, search and exports.
- Use stable canonical IDs, source mappings and idempotent ingestion; derived edges preserve inputs and derivation version.

## Proposed operating flow

Validate source event → resolve tenant and canonical identity → authorize ingest → persist version and provenance → update projections → reconcile.

## Minimum record and audit fields

`node_id, tenant_id, node_type, owner_id, source_system, source_record_id, authority, version, valid_from, observed_at; edge_id, endpoints, relation, grant_id`

Implementers should add actor, timestamp, tenant scope, policy/version reference, correlation identifier, source/provenance reference, and authorization decision where applicable. Store only the minimum data necessary for the documented purpose.

## Acceptance criteria and activation gate

A permitted course traversal works; a cross-tenant edge is denied; revoking a grant removes linked search results and cached projections.

Activation requires the common package standard plus this document’s acceptance criteria, a named owner, a bounded tenant/domain scope, and evidence linked to the released artifact. A failed critical control, unresolved authority conflict, unreviewed privacy/security impact, or missing rollback/recovery route blocks activation.

## Dependencies

- `DOMAIN_AUTHORITY_MATRIX`
- `DATA_CLASSIFICATION`
- `DATA_MAPPING_STANDARD`

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
