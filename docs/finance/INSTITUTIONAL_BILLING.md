# Institutional billing

_Semester native finance · 2026-10-05 · Draft for review by a qualified accountant, payments counsel and security lead. Prototype: ui_kits/native-finance/. Code: handoff/semester-platform (090, lib/payments, webhook route, tests/finance.test.ts)._

Quote approved → order form signed → billing account confirmed → invoice schedule → invoice issued → payment received → event normalized → invoice reconciled → entitlements activated → revenue schedule reviewed → renewal tracked.

| Event | Debit | Credit |
|---|---|---|
| Invoice issued | Accounts Receivable | Deferred Revenue |
| Payment received | Cash Clearing | Accounts Receivable |
| Service delivered (monthly) | Deferred Revenue | Recognized Revenue |

Purchase orders and tax-exemption certificates are captured before issue. Quotes with discounts over 10% or totals over $150k need finance approval by someone other than the requester.
