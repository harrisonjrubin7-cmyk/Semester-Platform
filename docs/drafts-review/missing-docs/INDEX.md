# Missing document drafts — index

**Package status:** Drafts for review; not evidence of implementation or institutional authorization.

## Recommended review order

1. Establish authority, data, security, privacy, accessibility, engineering, release and operations controls first.
2. Approve the shared education graph, product coherence and interoperability rules.
3. Scope academic, AI and integration workflows by tenant and authority.
4. Use pilot delivery, reconciliation, release gates and measured support outcomes before any domain replacement.

## Draft inventory

### 1. SEMESTER_UNIFIED_EDUCATION_OS_THESIS
- Category: Product & architecture
- Draft: [`drafts/01-semester-unified-education-os-thesis.md`](drafts/01-semester-unified-education-os-thesis.md)
- Proposed owner: Product lead + platform architect
- Core dependencies: `DOMAIN_AUTHORITY_MATRIX`, `PRODUCT_COHERENCE_MODEL`

### 2. EDUCATION_GRAPH_ARCHITECTURE
- Category: Product & architecture
- Draft: [`drafts/02-education-graph-architecture.md`](drafts/02-education-graph-architecture.md)
- Proposed owner: Product lead + platform architect
- Core dependencies: `DOMAIN_AUTHORITY_MATRIX`, `DATA_CLASSIFICATION`, `DATA_MAPPING_STANDARD`

### 3. DOMAIN_AUTHORITY_MATRIX
- Category: Product & architecture
- Draft: [`drafts/03-domain-authority-matrix.md`](drafts/03-domain-authority-matrix.md)
- Proposed owner: Product lead + platform architect
- Core dependencies: `ACADEMIC_RECORD_LEDGER_SPEC`, `INTEGRATION_GOVERNANCE`

### 4. DOMAIN_REPLACEMENT_MATRIX
- Category: Product & architecture
- Draft: [`drafts/04-domain-replacement-matrix.md`](drafts/04-domain-replacement-matrix.md)
- Proposed owner: Product lead + platform architect
- Core dependencies: `DUAL_RUN_AND_CUTOVER`, `ROLLBACK_STANDARD`, `RECONCILIATION_STANDARD`

### 5. CONNECT_REPLACE_OPERATE_STRATEGY
- Category: Product & architecture
- Draft: [`drafts/05-connect-replace-operate-strategy.md`](drafts/05-connect-replace-operate-strategy.md)
- Proposed owner: Product lead + platform architect
- Core dependencies: `DOMAIN_REPLACEMENT_MATRIX`, `INTEGRATION_GOVERNANCE`, `CUSTOMER_SUCCESS_PLAYBOOK`

### 6. INTEROPERABILITY_AND_MIGRATION_STRATEGY
- Category: Product & architecture
- Draft: [`drafts/06-interoperability-and-migration-strategy.md`](drafts/06-interoperability-and-migration-strategy.md)
- Proposed owner: Product lead + platform architect
- Core dependencies: `DATA_MAPPING_STANDARD`, `SIS_ERP_MIGRATION_FACTORY`, `RECONCILIATION_STANDARD`

### 7. PRODUCT_COHERENCE_MODEL
- Category: Product & architecture
- Draft: [`drafts/07-product-coherence-model.md`](drafts/07-product-coherence-model.md)
- Proposed owner: Product lead + platform architect
- Core dependencies: `EDUCATION_GRAPH_ARCHITECTURE`, `ENGINEERING_STANDARDS`

### 8. MOBILE_AND_DESKTOP_INTERACTION_MODEL
- Category: Product & architecture
- Draft: [`drafts/08-mobile-and-desktop-interaction-model.md`](drafts/08-mobile-and-desktop-interaction-model.md)
- Proposed owner: Product lead + platform architect
- Core dependencies: `PRODUCT_COHERENCE_MODEL`, `ACCESSIBILITY_ARCHITECTURE`

### 9. ACCESSIBILITY_ARCHITECTURE
- Category: Product & architecture
- Draft: [`drafts/09-accessibility-architecture.md`](drafts/09-accessibility-architecture.md)
- Proposed owner: Product lead + platform architect
- Core dependencies: `TEST_STRATEGY`, `RELEASE_POLICY`

### 10. COURSE_STUDIO_SPEC
- Category: Academic & learning
- Draft: [`drafts/10-course-studio-spec.md`](drafts/10-course-studio-spec.md)
- Proposed owner: Academic product lead + institutional academic owner
- Core dependencies: `LEARNING_OBJECTIVE_MODEL`, `ASSESSMENT_AND_GRADEBOOK_SPEC`, `AI_COURSE_POLICY_MODEL`

### 11. LEARNING_OBJECTIVE_MODEL
- Category: Academic & learning
- Draft: [`drafts/11-learning-objective-model.md`](drafts/11-learning-objective-model.md)
- Proposed owner: Academic product lead + institutional academic owner
- Core dependencies: `EDUCATION_GRAPH_ARCHITECTURE`, `ASSESSMENT_AND_GRADEBOOK_SPEC`

### 12. ASSESSMENT_AND_GRADEBOOK_SPEC
- Category: Academic & learning
- Draft: [`drafts/12-assessment-and-gradebook-spec.md`](drafts/12-assessment-and-gradebook-spec.md)
- Proposed owner: Academic product lead + institutional academic owner
- Core dependencies: `ACADEMIC_RECORD_LEDGER_SPEC`, `ACADEMIC_INTEGRITY_POLICY`

### 13. ACADEMIC_INTEGRITY_POLICY
- Category: Academic & learning
- Draft: [`drafts/13-academic-integrity-policy.md`](drafts/13-academic-integrity-policy.md)
- Proposed owner: Academic product lead + institutional academic owner
- Core dependencies: `AI_COURSE_POLICY_MODEL`, `LEGAL_HOLDS`, `DATA_RETENTION`

### 14. ACADEMIC_RECORD_LEDGER_SPEC
- Category: Academic & learning
- Draft: [`drafts/14-academic-record-ledger-spec.md`](drafts/14-academic-record-ledger-spec.md)
- Proposed owner: Academic product lead + institutional academic owner
- Core dependencies: `DOMAIN_AUTHORITY_MATRIX`, `RECONCILIATION_STANDARD`

### 15. REGISTRATION_ENGINE_SPEC
- Category: Academic & learning
- Draft: [`drafts/15-registration-engine-spec.md`](drafts/15-registration-engine-spec.md)
- Proposed owner: Academic product lead + institutional academic owner
- Core dependencies: `ACADEMIC_RECORD_LEDGER_SPEC`, `DOMAIN_AUTHORITY_MATRIX`, `RECONCILIATION_STANDARD`

### 16. DEGREE_AUDIT_SPEC
- Category: Academic & learning
- Draft: [`drafts/16-degree-audit-spec.md`](drafts/16-degree-audit-spec.md)
- Proposed owner: Academic product lead + institutional academic owner
- Core dependencies: `TRANSFER_AND_ARTICULATION_SPEC`, `ACADEMIC_RECORD_LEDGER_SPEC`

### 17. TRANSFER_AND_ARTICULATION_SPEC
- Category: Academic & learning
- Draft: [`drafts/17-transfer-and-articulation-spec.md`](drafts/17-transfer-and-articulation-spec.md)
- Proposed owner: Academic product lead + institutional academic owner
- Core dependencies: `ACADEMIC_RECORD_LEDGER_SPEC`, `DEGREE_AUDIT_SPEC`

### 18. FACULTY_WORKSPACE_SPEC
- Category: Academic & learning
- Draft: [`drafts/18-faculty-workspace-spec.md`](drafts/18-faculty-workspace-spec.md)
- Proposed owner: Academic product lead + institutional academic owner
- Core dependencies: `COURSE_STUDIO_SPEC`, `ASSESSMENT_AND_GRADEBOOK_SPEC`, `STUDENT_SUCCESS_MODEL`

### 19. STUDENT_SUCCESS_MODEL
- Category: Academic & learning
- Draft: [`drafts/19-student-success-model.md`](drafts/19-student-success-model.md)
- Proposed owner: Academic product lead + institutional academic owner
- Core dependencies: `PRIVACY`, `AI_TRANSPARENCY_UX`, `KPI_TREE`

### 20. AI_MODEL_ROUTING
- Category: AI
- Draft: [`drafts/20-ai-model-routing.md`](drafts/20-ai-model-routing.md)
- Proposed owner: AI engineering lead + security/privacy reviewers
- Core dependencies: `AI_PROVIDER_REGISTRY`, `AI_DATA_CLASSIFICATION`, `AI_COURSE_POLICY_MODEL`

### 21. AI_DATA_CLASSIFICATION
- Category: AI
- Draft: [`drafts/21-ai-data-classification.md`](drafts/21-ai-data-classification.md)
- Proposed owner: AI engineering lead + security/privacy reviewers
- Core dependencies: `DATA_CLASSIFICATION`, `AI_PROVIDER_REGISTRY`

### 22. AI_EVALUATION_HARNESS
- Category: AI
- Draft: [`drafts/22-ai-evaluation-harness.md`](drafts/22-ai-evaluation-harness.md)
- Proposed owner: AI engineering lead + security/privacy reviewers
- Core dependencies: `AI_RED_TEAM_PLAN`, `TEST_STRATEGY`, `RELEASE_POLICY`

### 23. AI_RED_TEAM_PLAN
- Category: AI
- Draft: [`drafts/23-ai-red-team-plan.md`](drafts/23-ai-red-team-plan.md)
- Proposed owner: AI engineering lead + security/privacy reviewers
- Core dependencies: `AI_MODEL_ROUTING`, `AI_EVALUATION_HARNESS`, `AI_INCIDENT_RESPONSE`

### 24. AI_PROVIDER_REGISTRY
- Category: AI
- Draft: [`drafts/24-ai-provider-registry.md`](drafts/24-ai-provider-registry.md)
- Proposed owner: AI engineering lead + security/privacy reviewers
- Core dependencies: `VENDOR_RISK`, `AI_DATA_CLASSIFICATION`

### 25. AI_COURSE_POLICY_MODEL
- Category: AI
- Draft: [`drafts/25-ai-course-policy-model.md`](drafts/25-ai-course-policy-model.md)
- Proposed owner: AI engineering lead + security/privacy reviewers
- Core dependencies: `ACADEMIC_INTEGRITY_POLICY`, `AI_MODEL_ROUTING`

### 26. AI_SPEND_AND_QUOTA_POLICY
- Category: AI
- Draft: [`drafts/26-ai-spend-and-quota-policy.md`](drafts/26-ai-spend-and-quota-policy.md)
- Proposed owner: AI engineering lead + security/privacy reviewers
- Core dependencies: `AI_MODEL_ROUTING`, `FINANCIAL_MODEL`

### 27. AI_INCIDENT_RESPONSE
- Category: AI
- Draft: [`drafts/27-ai-incident-response.md`](drafts/27-ai-incident-response.md)
- Proposed owner: AI engineering lead + security/privacy reviewers
- Core dependencies: `INCIDENT_RESPONSE`, `AI_EVALUATION_HARNESS`, `AI_RED_TEAM_PLAN`

### 28. AI_TRANSPARENCY_UX
- Category: AI
- Draft: [`drafts/28-ai-transparency-ux.md`](drafts/28-ai-transparency-ux.md)
- Proposed owner: AI engineering lead + security/privacy reviewers
- Core dependencies: `AI_MODEL_ROUTING`, `ACCESSIBILITY_ARCHITECTURE`, `STUDENT_SUCCESS_MODEL`

### 29. LTI_IMPLEMENTATION
- Category: Integration & migration
- Draft: [`drafts/29-lti-implementation.md`](drafts/29-lti-implementation.md)
- Proposed owner: Integration engineering lead + institutional system owner
- Core dependencies: `INTEGRATION_GOVERNANCE`, `ASSESSMENT_AND_GRADEBOOK_SPEC`, `RECONCILIATION_STANDARD`

### 30. ONEROSTER_IMPLEMENTATION
- Category: Integration & migration
- Draft: [`drafts/30-oneroster-implementation.md`](drafts/30-oneroster-implementation.md)
- Proposed owner: Integration engineering lead + institutional system owner
- Core dependencies: `DATA_MAPPING_STANDARD`, `RECONCILIATION_STANDARD`

### 31. EDU_API_STRATEGY
- Category: Integration & migration
- Draft: [`drafts/31-edu-api-strategy.md`](drafts/31-edu-api-strategy.md)
- Proposed owner: Integration engineering lead + institutional system owner
- Core dependencies: `INTEROPERABILITY_AND_MIGRATION_STRATEGY`, `DATA_MAPPING_STANDARD`

### 32. SIS_ERP_MIGRATION_FACTORY
- Category: Integration & migration
- Draft: [`drafts/32-sis-erp-migration-factory.md`](drafts/32-sis-erp-migration-factory.md)
- Proposed owner: Integration engineering lead + institutional system owner
- Core dependencies: `DATA_MAPPING_STANDARD`, `DUAL_RUN_AND_CUTOVER`, `ROLLBACK_STANDARD`

### 33. INTEGRATION_GOVERNANCE
- Category: Integration & migration
- Draft: [`drafts/33-integration-governance.md`](drafts/33-integration-governance.md)
- Proposed owner: Integration engineering lead + institutional system owner
- Core dependencies: `VENDOR_RISK`, `DOMAIN_AUTHORITY_MATRIX`, `INTEGRATION_OFFBOARDING`

### 34. DATA_MAPPING_STANDARD
- Category: Integration & migration
- Draft: [`drafts/34-data-mapping-standard.md`](drafts/34-data-mapping-standard.md)
- Proposed owner: Integration engineering lead + institutional system owner
- Core dependencies: `EDUCATION_GRAPH_ARCHITECTURE`, `DATA_CLASSIFICATION`

### 35. RECONCILIATION_STANDARD
- Category: Integration & migration
- Draft: [`drafts/35-reconciliation-standard.md`](drafts/35-reconciliation-standard.md)
- Proposed owner: Integration engineering lead + institutional system owner
- Core dependencies: `DATA_MAPPING_STANDARD`, `DOMAIN_AUTHORITY_MATRIX`

### 36. DUAL_RUN_AND_CUTOVER
- Category: Integration & migration
- Draft: [`drafts/36-dual-run-and-cutover.md`](drafts/36-dual-run-and-cutover.md)
- Proposed owner: Integration engineering lead + institutional system owner
- Core dependencies: `RECONCILIATION_STANDARD`, `ROLLBACK_STANDARD`, `PILOT_DELIVERY_FACTORY`

### 37. ROLLBACK_STANDARD
- Category: Integration & migration
- Draft: [`drafts/37-rollback-standard.md`](drafts/37-rollback-standard.md)
- Proposed owner: Integration engineering lead + institutional system owner
- Core dependencies: `RECONCILIATION_STANDARD`, `DISASTER_RECOVERY`, `RELEASE_POLICY`

### 38. INTEGRATION_OFFBOARDING
- Category: Integration & migration
- Draft: [`drafts/38-integration-offboarding.md`](drafts/38-integration-offboarding.md)
- Proposed owner: Integration engineering lead + institutional system owner
- Core dependencies: `DATA_RETENTION`, `LEGAL_HOLDS`, `DATA_INVENTORY`

### 39. SECURITY
- Category: Trust & compliance
- Draft: [`drafts/39-security.md`](drafts/39-security.md)
- Proposed owner: Security/privacy lead + qualified institutional/legal reviewers
- Core dependencies: `SECURE_SDLC`, `TEST_STRATEGY`, `INCIDENT_RESPONSE`

### 40. PRIVACY
- Category: Trust & compliance
- Draft: [`drafts/40-privacy.md`](drafts/40-privacy.md)
- Proposed owner: Security/privacy lead + qualified institutional/legal reviewers
- Core dependencies: `DATA_INVENTORY`, `DATA_RETENTION`, `LEGAL_HOLDS`, `VENDOR_RISK`

### 41. DATA_INVENTORY
- Category: Trust & compliance
- Draft: [`drafts/41-data-inventory.md`](drafts/41-data-inventory.md)
- Proposed owner: Security/privacy lead + qualified institutional/legal reviewers
- Core dependencies: `DATA_CLASSIFICATION`, `OBSERVABILITY`, `VENDOR_RISK`

### 42. DATA_CLASSIFICATION
- Category: Trust & compliance
- Draft: [`drafts/42-data-classification.md`](drafts/42-data-classification.md)
- Proposed owner: Security/privacy lead + qualified institutional/legal reviewers
- Core dependencies: `DATA_INVENTORY`, `AI_DATA_CLASSIFICATION`

### 43. DATA_RETENTION
- Category: Trust & compliance
- Draft: [`drafts/43-data-retention.md`](drafts/43-data-retention.md)
- Proposed owner: Security/privacy lead + qualified institutional/legal reviewers
- Core dependencies: `DATA_INVENTORY`, `LEGAL_HOLDS`, `BACKUP_RESTORE_TESTS`

### 44. LEGAL_HOLDS
- Category: Trust & compliance
- Draft: [`drafts/44-legal-holds.md`](drafts/44-legal-holds.md)
- Proposed owner: Security/privacy lead + qualified institutional/legal reviewers
- Core dependencies: `DATA_RETENTION`, `PRIVACY`, `INCIDENT_RESPONSE`

### 45. INCIDENT_RESPONSE
- Category: Trust & compliance
- Draft: [`drafts/45-incident-response.md`](drafts/45-incident-response.md)
- Proposed owner: Security/privacy lead + qualified institutional/legal reviewers
- Core dependencies: `OBSERVABILITY`, `DISASTER_RECOVERY`, `AI_INCIDENT_RESPONSE`

### 46. BUSINESS_CONTINUITY
- Category: Trust & compliance
- Draft: [`drafts/46-business-continuity.md`](drafts/46-business-continuity.md)
- Proposed owner: Security/privacy lead + qualified institutional/legal reviewers
- Core dependencies: `DISASTER_RECOVERY`, `CUSTOMER_SUCCESS_PLAYBOOK`, `INCIDENT_RESPONSE`

### 47. DISASTER_RECOVERY
- Category: Trust & compliance
- Draft: [`drafts/47-disaster-recovery.md`](drafts/47-disaster-recovery.md)
- Proposed owner: Security/privacy lead + qualified institutional/legal reviewers
- Core dependencies: `BACKUP_RESTORE_TESTS`, `BUSINESS_CONTINUITY`, `ROLLBACK_STANDARD`

### 48. HECVAT_ROADMAP
- Category: Trust & compliance
- Draft: [`drafts/48-hecvat-roadmap.md`](drafts/48-hecvat-roadmap.md)
- Proposed owner: Security/privacy lead + qualified institutional/legal reviewers
- Core dependencies: `SECURITY_QUESTIONNAIRE_LIBRARY`, `SECURITY`, `VENDOR_RISK`

### 49. VENDOR_RISK
- Category: Trust & compliance
- Draft: [`drafts/49-vendor-risk.md`](drafts/49-vendor-risk.md)
- Proposed owner: Security/privacy lead + qualified institutional/legal reviewers
- Core dependencies: `DATA_INVENTORY`, `PRIVACY`, `INTEGRATION_OFFBOARDING`

### 50. SECURITY_QUESTIONNAIRE_LIBRARY
- Category: Trust & compliance
- Draft: [`drafts/50-security-questionnaire-library.md`](drafts/50-security-questionnaire-library.md)
- Proposed owner: Security/privacy lead + qualified institutional/legal reviewers
- Core dependencies: `HECVAT_ROADMAP`, `SECURITY`, `RELEASE_POLICY`

### 51. SALES_PLAYBOOK
- Category: Business & operations
- Draft: [`drafts/51-sales-playbook.md`](drafts/51-sales-playbook.md)
- Proposed owner: Business operations lead + finance/customer delivery owners
- Core dependencies: `PILOT_DELIVERY_FACTORY`, `SECURITY_QUESTIONNAIRE_LIBRARY`

### 52. PILOT_DELIVERY_FACTORY
- Category: Business & operations
- Draft: [`drafts/52-pilot-delivery-factory.md`](drafts/52-pilot-delivery-factory.md)
- Proposed owner: Business operations lead + finance/customer delivery owners
- Core dependencies: `RELEASE_POLICY`, `DUAL_RUN_AND_CUTOVER`, `CUSTOMER_SUCCESS_PLAYBOOK`

### 53. CUSTOMER_SUCCESS_PLAYBOOK
- Category: Business & operations
- Draft: [`drafts/53-customer-success-playbook.md`](drafts/53-customer-success-playbook.md)
- Proposed owner: Business operations lead + finance/customer delivery owners
- Core dependencies: `KPI_TREE`, `INCIDENT_RESPONSE`, `INTEGRATION_OFFBOARDING`

### 54. FINANCIAL_MODEL
- Category: Business & operations
- Draft: [`drafts/54-financial-model.md`](drafts/54-financial-model.md)
- Proposed owner: Business operations lead + finance/customer delivery owners
- Core dependencies: `BUDGET_AND_RUNWAY`, `KPI_TREE`, `AI_SPEND_AND_QUOTA_POLICY`

### 55. BUDGET_AND_RUNWAY
- Category: Business & operations
- Draft: [`drafts/55-budget-and-runway.md`](drafts/55-budget-and-runway.md)
- Proposed owner: Business operations lead + finance/customer delivery owners
- Core dependencies: `FINANCIAL_MODEL`, `BOARD_REPORTING`

### 56. KPI_TREE
- Category: Business & operations
- Draft: [`drafts/56-kpi-tree.md`](drafts/56-kpi-tree.md)
- Proposed owner: Business operations lead + finance/customer delivery owners
- Core dependencies: `DATA_INVENTORY`, `PRIVACY`, `OBSERVABILITY`

### 57. BOARD_REPORTING
- Category: Business & operations
- Draft: [`drafts/57-board-reporting.md`](drafts/57-board-reporting.md)
- Proposed owner: Business operations lead + finance/customer delivery owners
- Core dependencies: `FINANCIAL_MODEL`, `BUDGET_AND_RUNWAY`, `KPI_TREE`

### 58. PARTNERSHIPS
- Category: Business & operations
- Draft: [`drafts/58-partnerships.md`](drafts/58-partnerships.md)
- Proposed owner: Business operations lead + finance/customer delivery owners
- Core dependencies: `VENDOR_RISK`, `INTEGRATION_GOVERNANCE`, `PRIVACY`

### 59. ENGINEERING_STANDARDS
- Category: Engineering & reliability
- Draft: [`drafts/59-engineering-standards.md`](drafts/59-engineering-standards.md)
- Proposed owner: Engineering lead + SRE/security/accessibility reviewers
- Core dependencies: `TEST_STRATEGY`, `SECURE_SDLC`, `RELEASE_POLICY`

### 60. TEST_STRATEGY
- Category: Engineering & reliability
- Draft: [`drafts/60-test-strategy.md`](drafts/60-test-strategy.md)
- Proposed owner: Engineering lead + SRE/security/accessibility reviewers
- Core dependencies: `ACCESSIBILITY_ARCHITECTURE`, `RECONCILIATION_STANDARD`, `AI_EVALUATION_HARNESS`

### 61. RELEASE_POLICY
- Category: Engineering & reliability
- Draft: [`drafts/61-release-policy.md`](drafts/61-release-policy.md)
- Proposed owner: Engineering lead + SRE/security/accessibility reviewers
- Core dependencies: `TEST_STRATEGY`, `ROLLBACK_STANDARD`, `OBSERVABILITY`

### 62. SLO_POLICY
- Category: Engineering & reliability
- Draft: [`drafts/62-slo-policy.md`](drafts/62-slo-policy.md)
- Proposed owner: Engineering lead + SRE/security/accessibility reviewers
- Core dependencies: `OBSERVABILITY`, `ERROR_BUDGET_POLICY`, `KPI_TREE`

### 63. ERROR_BUDGET_POLICY
- Category: Engineering & reliability
- Draft: [`drafts/63-error-budget-policy.md`](drafts/63-error-budget-policy.md)
- Proposed owner: Engineering lead + SRE/security/accessibility reviewers
- Core dependencies: `SLO_POLICY`, `RELEASE_POLICY`, `INCIDENT_RESPONSE`

### 64. OBSERVABILITY
- Category: Engineering & reliability
- Draft: [`drafts/64-observability.md`](drafts/64-observability.md)
- Proposed owner: Engineering lead + SRE/security/accessibility reviewers
- Core dependencies: `DATA_RETENTION`, `SLO_POLICY`, `RUNBOOK_INDEX`

### 65. OPERATIONS_CONSOLE_ARCHITECTURE
- Category: Engineering & reliability
- Draft: [`drafts/65-operations-console-architecture.md`](drafts/65-operations-console-architecture.md)
- Proposed owner: Engineering lead + SRE/security/accessibility reviewers
- Core dependencies: `DOMAIN_AUTHORITY_MATRIX`, `RELEASE_POLICY`, `RECONCILIATION_STANDARD`

### 66. RUNBOOK_INDEX
- Category: Engineering & reliability
- Draft: [`drafts/66-runbook-index.md`](drafts/66-runbook-index.md)
- Proposed owner: Engineering lead + SRE/security/accessibility reviewers
- Core dependencies: `INCIDENT_RESPONSE`, `OBSERVABILITY`, `DISASTER_RECOVERY`

### 67. BACKUP_RESTORE_TESTS
- Category: Engineering & reliability
- Draft: [`drafts/67-backup-restore-tests.md`](drafts/67-backup-restore-tests.md)
- Proposed owner: Engineering lead + SRE/security/accessibility reviewers
- Core dependencies: `DISASTER_RECOVERY`, `DATA_RETENTION`, `LEGAL_HOLDS`

### 68. SECURE_SDLC
- Category: Engineering & reliability
- Draft: [`drafts/68-secure-sdlc.md`](drafts/68-secure-sdlc.md)
- Proposed owner: Engineering lead + SRE/security/accessibility reviewers
- Core dependencies: `ENGINEERING_STANDARDS`, `SECURITY`, `TEST_STRATEGY`

