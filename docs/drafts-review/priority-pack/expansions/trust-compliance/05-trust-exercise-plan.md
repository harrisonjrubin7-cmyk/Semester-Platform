# Trust exercise plan: access review, incident tabletop, recovery drill, and vendor review

**Status:** Priority draft; exercise schedule and targets require accountable approval.

## Minimum recurring exercises

| Exercise | Proposed objective | Evidence |
|---|---|---|
| Access review | Verify least-privilege grants, company-role restrictions, and offboarding | Scope, reviewer, findings, revocations, retest |
| Incident tabletop | Practice security/privacy and AI escalation, communications, and decision authority | Scenario, timeline, attendees, gaps, remediation owners |
| Restore drill | Restore a scoped service in isolation and validate integrity, deletion/hold handling, and authorization | Backup manifest, timings, integrity/access results, reconciliation |
| Tenant-isolation test | Demonstrate denied cross-tenant access across APIs, storage, search, exports, and jobs | Automated results, environment, test data, reviewer |
| Vendor review | Reconfirm purpose, data scope, contract, security evidence, changes, and exit path | Supplier record, evidence dates, risk disposition |
| Accessibility process review | Test a complete high-impact workflow with keyboard and assistive technology | Task, tools, blockers, remediation, retest |

## Operating rules

Exercises use synthetic or explicitly authorized data; material findings enter the control register with owner and due date. A drill is not “passed” until remediation is verified or risk is explicitly accepted by the correct authority.

## Gate
A critical dependency cannot support production-enabled claims without relevant exercised evidence and an available recovery/escalation owner.
