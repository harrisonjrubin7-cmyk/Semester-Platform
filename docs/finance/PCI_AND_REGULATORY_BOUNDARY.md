# PCI and regulatory boundary

_Semester native finance · 2026-10-05 · Draft for review by a qualified accountant, payments counsel and security lead. Prototype: ui_kits/native-finance/. Code: handoff/semester-platform (090, lib/payments, webhook route, tests/finance.test.ts)._

Minimize PCI scope: the rail hosts card fields and tokenizes; Semester stores only tokens and last-4.

| Capability | Semester | Rail |
|---|---|---|
| Card storage | Never | Tokenization |
| Authorization/capture | Later, with payments infrastructure | Rail |
| ACH | Later, with bank authorization | Rail |
| Merchant acquiring | No | Acquirer/bank |
| KYC/KYB | Onboarding UI | Verification provider |
| Money transmission | Only with a legal program | Regulated partner |

Requires professional review: money-transmitter analysis for marketplace payouts, sales-tax nexus, revenue recognition (ASC 606), PCI SAQ level, state student-account rules.
