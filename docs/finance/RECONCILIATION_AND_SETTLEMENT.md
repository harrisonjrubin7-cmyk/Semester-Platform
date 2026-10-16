# Reconciliation and settlement

_Semester native finance · 2026-10-05 · Draft for review by a qualified accountant, payments counsel and security lead. Prototype: ui_kits/native-finance/. Code: handoff/semester-platform (090, lib/payments, webhook route, tests/finance.test.ts)._

Every settlement line from the rail or bank must match a payment attempt and its ledger journals.

Daily: pull settlement → match by provider reference and amount → mark matched → exceptions to the finance queue within 1 business day. Monthly: reconcile Cash Clearing to bank statement; export to the accounting system. Student accounts reconcile to the bursar/ERP daily.
