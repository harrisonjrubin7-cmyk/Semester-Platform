# AI red-team execution plan

Status: Proposed test plan; no tests executed. Owner: security lead with AI engineering; independent reviewer and institutional privacy owner required. Use the attached 36-case CSV as an initial corpus, not an exhaustive assurance claim.

## 1. Authorization and safe scope

Approve target environment, tenant IDs, gateway/tool/provider versions, allowed test windows, request and spend limits, sinks and stop conditions before testing. Use isolated tenants A/B and synthetic users with student/faculty/advisor/registrar/company/no-grant roles. No real education records, production attack traffic, real exfiltration endpoints or live financial/academic writes. Provider sandbox execution requires explicit supplier/testing authorization and approved synthetic fixtures; do not bypass the no-record policy for testing.

## 2. Test layers

1. Unit: classifiers, policy precedence, route selection, budget reservations, approval validation.
2. Gateway integration: authenticated synthetic user, real authorization/policy composition, retrieval and mocked provider/tool boundaries.
3. Intercepted transport: capture the actual serialized outbound payload in an isolated test sink; prove prohibited canaries never leave, not merely that a scanner returns a denial.
4. Controlled provider sandbox: test approved synthetic public/permitted inputs and provider failure behavior; verify route configurations and supplier terms separately. Never infer provider-side retention from a unit test.
5. UI/end-to-end: labels, citations, scope controls, cost limits, refusal accessibility, action previews and human handoff.
6. Operational exercise: tenant kill switch, in-flight accounting, incident escalation, remediation and re-enable gate.

## 3. Corpus and run design

Version corpus, fixture classifications, source documents, adversarial payloads, user grants, policy versions, model/prompt/tool versions, budget settings and expected outcomes. Include paraphrases, encodings, multilingual forms, nested retrieval and multi-turn context. Define repetitions and concurrency according to risk and model variability before the run; do not fabricate a statistically sufficient sample count. Use deterministic assertions for authorization, transport and action effects plus human review for output quality, harms, citation support and fairness.

## 4. Evidence and scoring

For every case capture: case/run ID, target artifact hash, environment, tenant/role, fixture hash, policies, configuration, route and tools, sanitized response/outcome, transport canary check, source/action receipts, verdict, severity, reviewer and remediation. Store raw adversarial fixtures only in a restricted synthetic-test repository; never store real sensitive prompts in normal usage logs.

Pass means the specific expected result is observed and evidenced. Untested is not passed. Zero observed failures in a corpus is not a guarantee against all attacks. Critical isolation, prohibited egress, unauthorized actions or audit forgery failures block the relevant activation regardless of average quality score. Lower-severity findings receive explicit accountable disposition and retest.

## 5. Stop conditions and incident handling

Stop immediately on suspected real-data exposure, unintended production targeting, uncontrolled spend/traffic, unauthorized action or inability to isolate impact. Disable affected routes/scopes, preserve sanitized evidence, initiate incident command and legal/contract notification review. Re-enable only after remediation, replay of every failing case, broader regression tests and named security/institutional approval.

## 6. Trigger and cadence

Run relevant unit/integration assertions on changes. Run the complete applicable launch corpus before activation and after material gateway, classifier, provider/model, retrieval, tool, approval or policy changes. Set scheduled operational monitoring and independent review cadence through approved risk governance. Maintain failures as permanent regression cases.

## 7. Existing evidence limitation

The inspected red-team artifact explicitly is unit-level and does not require a provider call. It tests scanner cases, record-scope removal, institution/course switches and budget exhaustion. That is useful design evidence, not proof that test runs passed or outbound serialized payloads cannot leak records. [file:95]
