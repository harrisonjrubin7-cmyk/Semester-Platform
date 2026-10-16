# Data, subprocessor, and transfer register

**Status:** Priority draft; legal/privacy review required. This is not a privacy notice or a legal determination.

## Purpose
Provide a single tenant-aware view of where data is processed, why, by whom, under what contract, and how it is removed or exported.

## Required supplier/transfer record

- Supplier, service, owner, criticality, and contract/DPA version.
- Processing purpose, data classes, tenant scope, regions, subprocessors, retention, training-use terms, and access method.
- Inbound/outbound transfers, encryption/protection controls, credentials/scopes, and integration identifiers.
- Due-diligence evidence, security/privacy/legal approvals, effective and expiry dates, change-notice rule, and incident contacts.
- Offboarding/export/deletion steps, legal-hold interaction, confirmation evidence, and residual-risk acceptance.

## Rules

- New subprocessors or scope expansion require privacy/security review before data flows change.
- The AI provider registry is a subset of this register and must additionally record model versions, allowed classifications, and route constraints.
- No supplier is approved for a broader data class or purpose than the signed review supports.
- Region and transfer obligations are tenant and contract specific; never infer them from a default provider setting.

## Gate
Production processing is blocked if the record lacks approved purpose, data classification, contractual basis, scoped access, owner, retention/offboarding method, and current review evidence.
