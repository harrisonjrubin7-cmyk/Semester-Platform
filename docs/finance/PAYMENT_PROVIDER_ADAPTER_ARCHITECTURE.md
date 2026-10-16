# Payment provider adapter architecture

_Semester native finance · 2026-10-05 · Draft for review by a qualified accountant, payments counsel and security lead. Prototype: ui_kits/native-finance/. Code: handoff/semester-platform (090, lib/payments, webhook route, tests/finance.test.ts)._

Provider-neutral interface in lib/payments/types.ts. One rail at launch, more later, no lock-in.

| Method | Purpose | Rule |
|---|---|---|
| createPaymentMethod | Exchange hosted-field token for a stored method token | Never receives a card number |
| authorize | Hold funds | Idempotency key required |
| capture | Take funds | Idempotency key required |
| refund | Return funds to original method | Only after approval |
| cancel | Void an authorization |  |
| getSettlement | Pull settlement lines | Feeds reconciliation |
| verifyWebhook | Verify signature, timestamp tolerance, normalize type | Throws on failure; replayed events are no-ops |

Rail kinds: card, ach, bank_transfer, wire, wallet, institution_po, invoice_terms, campus_card, financial_aid. The sandbox adapter refuses to load in production.
