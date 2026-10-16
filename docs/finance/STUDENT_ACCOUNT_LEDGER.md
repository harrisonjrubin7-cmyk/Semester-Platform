# Student account ledger

_Semester native finance · 2026-10-05 · Draft for review by a qualified accountant, payments counsel and security lead. Prototype: ui_kits/native-finance/. Code: handoff/semester-platform (090, lib/payments, webhook route, tests/finance.test.ts)._

The bursar/ERP is official during transition; Semester mirrors and reconciles daily.

| Event | Debit | Credit |
|---|---|---|
| Tuition charge $2,000 | Student Receivable | Institution Charge |
| Scholarship $500 | Scholarship Funding | Student Receivable |
| Payment $1,500 | Cash Clearing | Student Receivable |

Students see every entry with its source. Family sees entries only under an active consent grant. Students can read only their own journals (RLS on person_id).
