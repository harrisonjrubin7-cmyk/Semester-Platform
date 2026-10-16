# Native financial platform

_Semester native finance · 2026-10-05 · Draft for review by a qualified accountant, payments counsel and security lead. Prototype: ui_kits/native-finance/. Code: handoff/semester-platform (090, lib/payments, webhook route, tests/finance.test.ts)._

Semester owns the financial experience, business logic, ledger, workflows, entitlements and customer relationship. A regulated payment rail moves money underneath as an internal adapter until Semester deliberately becomes a regulated payments business.

## What Semester owns

Product and price catalog · quote engine · contract and order-form engine · billing, customer and student accounts · invoice engine · credit and refund ledger · payment-plan engine and installment scheduler · student balance · charge and credit requests · entitlement and subscription engines · usage metering and AI usage billing · tax calculation interface · dunning and collections workflows · revenue forecasting · customer profitability · cost allocation · finance operations console · reconciliation engine · payment-event normalization · payment provider adapter layer · financial audit trail · approval controls · refund and write-off controls · statements and exports · accounting integration · compliance and fraud workflow.

## Existing canonical tables (extend, never duplicate)

commercial_products, commercial_plans, commercial_prices, entitlement_definitions, plan_entitlements, billing_accounts, quotes, contracts, subscriptions, invoices, payment_events, credits_refunds, dunning_cases, cancellation_requests, student_account_entries, student_payment_plans, student_account_reconciliations, student_account_closes.

## Added by 090 (schema fin, reconcile in Phase 0)

ledger_accounts, ledger_journals, ledger_lines (balanced at commit, append-only), payment_rails, payment_attempts, payment_transitions, provider_events (replay-safe), settlement_batches, settlement_lines, refund_requests, refund_approvals. Commands: api.post_journal, api.approve_refund.
