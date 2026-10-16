# Refund, credit and dispute policy

_Semester native finance · 2026-10-05 · Draft for review by a qualified accountant, payments counsel and security lead. Prototype: ui_kits/native-finance/. Code: handoff/semester-platform (090, lib/payments, webhook route, tests/finance.test.ts)._

Refund request → reason and source invoice → policy check → approval by threshold → provider refund command → verified event → ledger entry → entitlement adjustment → receipt → audit.

| Amount | Approval |
|---|---|
| ≤ $100 | Automatic |
| ≤ $5,000 | One finance approver (not the requester) |
| > $5,000 | Two approvers (finance + CEO) |

Disputes: funds moved to Disputed Funds; won → released; lost → chargeback, entitlement suspended; then collections or approved write-off. Thresholds are planning values owned by finance policy.
