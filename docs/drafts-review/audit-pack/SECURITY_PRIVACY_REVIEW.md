# Security and privacy specification review

Status: Document/evidence review only. No infrastructure, migrations, tests, contracts or production settings were verified or changed.

## Review findings

| ID | Priority | Finding | Required resolution/evidence |
|---|---|---|---|
| SP-01 | P0 | Platform review says findings/tests are “not yet run” but also says all findings are closed and proven | Relabel as proposed fixes/test cases pending execution. Require pre-fix failure, post-fix pass, environment/artifact versions and independent review before closure. |
| SP-02 | P0 | Described critical staff self-escalation and high-risk tenant/profile exposure | Verify hardening migration and negative RLS tests for company staff creation, immutable tenant/role membership and field visibility. No real records until staging proof. |
| SP-03 | P0 | Database fixes do not alone prove isolation across search, exports, jobs, storage or caches | Execute end-to-end tenant/role denial matrix across all interfaces, including service-role workflows. |
| SP-04 | P0 | Privacy addendum prohibits changing official records; current academic handoff routes changes to SIS | Keep SIS as authoritative baseline. Any native domain replacement requires revised contractual authority, institution approval, migration, reconciliation and recovery evidence. |
| SP-05 | P0 | Readiness tracker proposes 24-hour notice target; student addendum contains bracketed 72-hour confirmation language | Counsel and institution must establish one binding rule, trigger, clock, recipients and operational procedure. Neither draft duration is an approved universal commitment. |
| SP-06 | P0 | Readiness uses proposed RPO/RTO and other numerical targets without drill evidence | Label targets proposed/unverified; map services and measure restore outcomes before contractual claims. |
| SP-07 | P0 | Claimed US hosting, encryption and inherited supplier assurances need scoped evidence | Verify actual tenant configuration, data flows, vendor reports, keys, processing regions and contracts. Supplier assurance does not certify Semester itself. |
| SP-08 | P0 | Provider blocking relies partly on pattern scans | Add classification/provenance enforcement and transport tests covering attachments, OCR, retrieval, tool results and obfuscation. |
| SP-09 | P0 | Draft privacy terms contain unfilled response/backup periods and school-official assertions | Legal review must establish applicability, institution control, instructions, states in scope, retention/rights routes and signed terms. Do not claim designation from an unsigned template. |
| SP-10 | P1 | Aggregate/de-identified retention for improvement needs operational boundaries | Define approved purpose, re-identification risk review, cohort protection, access, retention and prohibition on incompatible reuse. |
| SP-11 | P0 | Audit append-only/actor controls are described but operational proof is absent | Verify actor binding, immutable events, access/export audit, privileged tamper threat, event correlation and lifecycle exceptions. |
| SP-12 | P1 | Incident, vendor, insurance, accessibility and procurement items remain evidence-dependent | Name owners; obtain current reports/reviews; complete relevant tabletop, retest and institution-specific procurement evidence. |

## Sources reviewed

- Platform Security Review.html: design-stage review with 11 findings (1 critical, 3 high); explicitly not-yet-run while also asserting closure/proof. [file:97]
- Security Readiness.html: draft/in-progress evidence tracker with proposed notice, recovery, vendor, vulnerability and procurement positions. [file:98]
- Student Data Privacy Addendum.html: attorney-review draft, bracketed terms, institution-authoritative boundary and rights/deletion language. [file:99]
- Operations audit/evidence design: actor/tenant/capability decisions, controlled-action receipts, evidence links, scoped explorer and lifecycle rules. [file:96]

## Proposed approval gate

Approve policy text only after resolving conflicts, scoped authority and qualified review. Approve production separately after implementation, tested isolation and lifecycle controls, monitoring, recovery and contractual/institutional evidence. No certification, passed test or operational result is established by this review.
