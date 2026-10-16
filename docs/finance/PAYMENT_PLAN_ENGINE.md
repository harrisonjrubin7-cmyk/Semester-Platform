# Payment plan engine

_Semester native finance · 2026-10-05 · Draft for review by a qualified accountant, payments counsel and security lead. Prototype: ui_kits/native-finance/. Code: handoff/semester-platform (090, lib/payments, webhook route, tests/finance.test.ts)._

Student requests plan → balance from ledger → eligibility/policy → installment schedule → student reviews terms → approval if required → activated → reminders → events reconciled → missed-installment workflow → complete/cancelled/defaulted.

Fees, limits and hold rules come from institution policy, never defaults. A missed installment sends a reminder with a help link; a hold is placed only where policy says so, with the owning office named.
