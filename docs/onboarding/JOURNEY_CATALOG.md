# Journey catalog

_Semester growth and onboarding · 2026-10-05 · Prototype: ui_kits/journey/index.html. Code: handoff/semester-platform (110_onboarding_growth.sql, lib/auth/return-path.ts, tests/onboarding.test.ts). Design-stage until code, tests and release evidence exist._



## Student (self-serve) (`student.v3`)

| Step | Why | Event | Skippable |
|---|---|---|---|
| What would make this semester easier? | Routes the journey toward a real goal | goal_selected | no |
| Which term? | Enables relevant planning without over-collecting | context_confirmed | yes |
| Add one course | Creates useful real data | academic_object_created | no |

Activation: Completes a real task, plan or registration-readiness step.

## Student (institution-linked) (`campus_student.v2`)

| Step | Why | Event | Skippable |
|---|---|---|---|
| Your official information is in | Shows source and freshness before anything else | official_data_viewed | no |
| What do you want to do first? | Picks the first action on Today | goal_selected | no |

Activation: Completes a real task, plan or registration-readiness step.

## Applicant (`applicant.v1`)

| Step | Why | Event | Skippable |
|---|---|---|---|
| What are you working toward? | Routes to the right plan | goal_selected | no |
| Programs you're considering | Builds a comparison | program_saved | no |

Activation: Saves a pathway plan.

## Faculty (`faculty.v2`)

| Step | Why | Event | Skippable |
|---|---|---|---|
| Choose a course to set up | Real course from your institution | course_selected | no |
| Review the course AI rules | Students see your policy before AI helps | course_policy_reviewed | no |
| Invite your teaching team | TAs get section-scoped access that expires | team_invited | yes |

Activation: Publishes a real course item.

## Advisor (`advisor.v2`)

| Step | Why | Event | Skippable |
|---|---|---|---|
| Your caseload is confirmed | Access only to your assigned students | caseload_confirmed | no |
| How should we reach you? | Work queue without inbox noise | preference_saved | no |

Activation: Completes a check-in, referral, plan or appointment.

## Institution admin (`admin.v2`)

| Step | Why | Event | Skippable |
|---|---|---|---|
| Administrative access confirmed | Two admins required before launch | admin_validated | no |
| Review policy defaults | Everything starts off | policy_reviewed | no |

Activation: Completes a governed tenant action (SSO, role, module).

## Family (`guardian.v1`)

| Step | Why | Event | Skippable |
|---|---|---|---|
| What your student shared | No surprises | scope_viewed | no |

Activation: Views what the student shared.

## Institution buyer (`buyer.v1`)

No onboarding steps; identity flow leads straight to the workspace.

Activation: Books discovery or requests a pilot plan.

## Developer (`developer.v1`)

| Step | Why | Event | Skippable |
|---|---|---|---|
| Create your sandbox | Synthetic tenant with test data | sandbox_created | no |
| Register an app | Scoped credentials | app_registered | no |

Activation: Sends a successful sandbox API call or webhook.
