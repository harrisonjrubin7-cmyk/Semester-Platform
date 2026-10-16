# Finance release gates

_Semester native finance · 2026-10-05 · Draft for review by a qualified accountant, payments counsel and security lead. Prototype: ui_kits/native-finance/. Code: handoff/semester-platform (090, lib/payments, webhook route, tests/finance.test.ts)._

Nothing moves real money until every gate has evidence.

1. tests/finance.test.ts green (state machine, balance, idempotency, immutability, RLS, two-person refunds, webhook verification).
2. Sandbox adapter cannot load in production (asserted).
3. Real rail contract signed; PCI SAQ completed.
4. Accountant review of ledger design and revenue recognition.
5. Counsel review of terms, refunds, student-account rules, marketplace payouts.
6. Daily reconciliation run for 30 days in staging with zero unexplained exceptions.
7. Refund, dispute and chargeback runbooks rehearsed.
8. Finance console access limited to ceo/cfo/finance; access review done.

## First 25 actions

1. Phase 0: map existing commercial/billing tables to 090
2. Rename/merge 090 tables onto canonical names
3. Seed ledger accounts
4. Apply 090 to local; run finance tests
5. Add payment_rails rows (sandbox only)
6. Implement lib/payments types + state
7. Sandbox adapter + production guard
8. Webhook route with verification + de-dupe
9. post_journal from webhook path
10. Student Premium checkout screen (hosted field)
11. Subscription + entitlement activation on reconciled
12. Receipt email
13. Institution quote builder
14. Quote approval (two-person)
15. Order form + contract version
16. Invoice issue + schedule
17. PO + tax-exempt capture
18. Bank remittance → settlement lines
19. Reconciliation screen
20. Refund request + approvals
21. Dispute/chargeback flow
22. Student account mirror from bursar feed
23. Payment-plan engine
24. Finance console tiles from read models
25. Accounting export
