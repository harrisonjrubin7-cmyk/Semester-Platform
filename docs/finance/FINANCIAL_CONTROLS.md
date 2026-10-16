# Financial controls

_Semester native finance · 2026-10-05 · Draft for review by a qualified accountant, payments counsel and security lead. Prototype: ui_kits/native-finance/. Code: handoff/semester-platform (090, lib/payments, webhook route, tests/finance.test.ts)._



- No raw card data, ever; tokens only.
- Provider credentials never reach the browser.
- Idempotency key on every payment, refund and journal command.
- Webhooks verified server-side (signature + timestamp tolerance); replays are no-ops.
- Ledger is append-only; corrections are reversals.
- Every journal balances or the transaction fails.
- Approvals for refunds, credits, write-offs, pricing exceptions and plan changes by threshold; requester cannot approve.
- Product billing state separate from statutory accounting records.
- Forecasts labelled as forecasts.
- External settlement reconciled to internal records.
- Full error, dispute, chargeback, retry, cancellation and support flows.
