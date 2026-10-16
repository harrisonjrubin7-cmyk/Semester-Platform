# Native checkout spec

_Semester native finance · 2026-10-05 · Draft for review by a qualified accountant, payments counsel and security lead. Prototype: ui_kits/native-finance/. Code: handoff/semester-platform (090, lib/payments, webhook route, tests/finance.test.ts)._

The user only ever sees Semester.

## Flow

Student/institution → Semester checkout → order and pricing engine → tax/entitlement/plan validation → billing account and invoice record → payment token collection surface (rail-hosted field) → rail adapter → authorized/failed/pending/settled → event normalization → ledger and reconciliation → entitlement activation → receipt, invoice, audit.

## Screens

Plan selection · pricing summary · discount validation · quantity/seat input · institution information · billing contact · tax/exemption · payment method · payment-plan selection · order-form acceptance · terms/privacy · review · processing · receipt · invoice · entitlement confirmation · support hand-off.

## Student Premium

Monthly $8.99 or annual $69. Optional; nothing the institution provides depends on it. AI overage never charged to students. Manage, cancel and billing support in Settings → Plan.
