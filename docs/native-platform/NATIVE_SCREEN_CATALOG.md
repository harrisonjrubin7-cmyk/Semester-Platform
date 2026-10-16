# Native screen catalog

_Generated from ui_kits/native-platform/native-data.js, 2026-10-05. Design-stage: statuses are honest; nothing is "Native and verified" until repo code, tests and release evidence exist._

659 screens. Every screen has six states: default, loading, empty, error, no permission, offline.

| Domain | Screen | Does | Type | Route | Status |
|---|---|---|---|---|---|
| A | Student OS | Daily home for students: today, plan, learn, campus, career | list | `/experience/student-os` | Static prototype only |
| A | Applicant Experience | Apply, track documents, decisions and deposits | list | `/experience/applicant-experience` | Static prototype only |
| A | Faculty Workspace | Teach: courses, grading, office hours, AI rules | list | `/experience/faculty-workspace` | Static prototype only |
| A | Teaching Assistant Workspace | Section-scoped grading and Q&A under delegation | assistant | `/experience/teaching-assistant-workspace` | Static prototype only |
| A | Advisor Workspace | Caseload, notes, appointments, referrals | list | `/experience/advisor-workspace` | Static prototype only |
| A | Student Success Workspace | Cohorts, outreach campaigns, interventions | list | `/experience/student-success-workspace` | Static prototype only |
| A | Registrar Workspace | Catalog, sections, holds, reconciliation, records | list | `/experience/registrar-workspace` | Static prototype only |
| A | Student Accounts Workspace | Ledger, statements, payment plans, disputes | list | `/experience/student-accounts-workspace` | Static prototype only |
| A | Financial Aid Handoff Workspace | Aid status and documents handed to the aid system | list | `/experience/financial-aid-handoff-workspace` | Static prototype only |
| A | Campus Services Workspace | Requests and service queues across offices | list | `/experience/campus-services-workspace` | Static prototype only |
| A | Housing Workspace | Assignments, room changes, maintenance | list | `/experience/housing-workspace` | Static prototype only |
| A | Dining Workspace | Plans, balances, menus, dietary needs | list | `/experience/dining-workspace` | Static prototype only |
| A | Library/Research Workspace | Holdings, reserves, research help | list | `/experience/library-research-workspace` | Static prototype only |
| A | Accessibility Services Workspace | Accommodation letters and fulfilment | list | `/experience/accessibility-services-workspace` | Static prototype only |
| A | Community and Organization Workspace | Clubs, moderation, events, rosters | list | `/experience/community-and-organization-workspace` | Static prototype only |
| A | Family/Guardian Workspace | What the student has chosen to share | list | `/experience/family-guardian-workspace` | Static prototype only |
| A | Career and Employer Workspace | Postings, applications, employer relations | list | `/experience/career-and-employer-workspace` | Static prototype only |
| A | Alumni Workspace | Lifelong identity, mentoring, giving hand-offs | list | `/experience/alumni-workspace` | Static prototype only |
| A | Institution Administration Workspace | Tenant setup, roles, features, policies | list | `/experience/institution-administration-workspace` | Static prototype only |
| A | IT/Security Workspace | SSO, SCIM, sessions, audit, alerts | list | `/experience/it-security-workspace` | Static prototype only |
| A | Operations Command Center | Semester company operations (no student records) | list | `/experience/operations-command-center` | Static prototype only |
| A | Public Company and Trust Website | Marketing site, trust center, status page | list | `/experience/public-company-and-trust-website` | Static prototype only |
| A1 | Today | The one most important thing now, with source and reason | dashboard | `/experience/student-os/today` | Static prototype only |
| A1 | Action Center | Every open action, owner office and due date | list | `/experience/student-os/action-center` | Static prototype only |
| A1 | Calendar | Classes, deadlines, events and personal time in one view | calendar | `/experience/student-os/calendar` | Static prototype only |
| A1 | Schedule | Weekly class schedule with rooms and changes | calendar | `/experience/student-os/schedule` | Static prototype only |
| A1 | Tasks | Personal and course tasks with reminders | assistant | `/experience/student-os/tasks` | Static prototype only |
| A1 | Goals | Term and life goals linked to plan and tasks | list | `/experience/student-os/goals` | Static prototype only |
| A1 | Path | Where you are in your program and what is next | list | `/experience/student-os/path` | Static prototype only |
| A1 | Academic Plan | Term-by-term plan checked against requirements | list | `/experience/student-os/academic-plan` | Static prototype only |
| A1 | Registration Readiness | Holds, prerequisites and window time, each with its office | list | `/experience/student-os/registration-readiness` | Static prototype only |
| A1 | Course Studio | Student view of each course: work, resources, feedback | builder | `/experience/student-os/course-studio` | Static prototype only |
| A1 | Study | Study packs, flashcards, practice and sessions | list | `/experience/student-os/study` | Static prototype only |
| A1 | Notes | Course-linked notes with search and sharing | list | `/experience/student-os/notes` | Static prototype only |
| A1 | Files | Personal and course files with versioning | list | `/experience/student-os/files` | Static prototype only |
| A1 | Projects | Group projects with tasks and files | list | `/experience/student-os/projects` | Static prototype only |
| A1 | Search | One search across courses, campus, help and your work | list | `/experience/student-os/search` | Static prototype only |
| A1 | AI Copilot | Ask Semester: approved sources only, never records | assistant | `/experience/student-os/ai-copilot` | Native but incomplete |
| A1 | Support | Ask for help; tracked to resolution | list | `/experience/student-os/support` | Static prototype only |
| A1 | Campus | Services, dining, housing, spaces, map | list | `/experience/student-os/campus` | Static prototype only |
| A1 | Community | Groups, clubs, events, Q&A, marketplace | list | `/experience/student-os/community` | Static prototype only |
| A1 | Career | Skills, portfolio, opportunities, mentoring | list | `/experience/student-os/career` | Static prototype only |
| A1 | Student Account | Balance, statements, payment plans | list | `/experience/student-os/student-account` | Static prototype only |
| A1 | Privacy Center | Who sees what, access history, export, delete | list | `/experience/student-os/privacy-center` | Static prototype only |
| A1 | Family Sharing | Choose what family can see, for how long | list | `/experience/student-os/family-sharing` | Static prototype only |
| A1 | Accessibility | Display, reading and motion preferences | settings | `/experience/student-os/accessibility` | Static prototype only |
| A1 | Profile | Campus-verified profile with per-field visibility | settings | `/experience/student-os/profile` | Static prototype only |
| A1 | Settings | Notifications, devices, sessions, language | settings | `/experience/student-os/settings` | Static prototype only |
| B | Course Studio | Faculty authoring home for every course | builder | `/learning/course-studio` | Designed/documented only |
| B | Course Catalog | Published course descriptions and attributes | ledger | `/learning/course-catalog` | Designed/documented only |
| B | Terms and Academic Calendar | Term dates, census, finals, breaks | calendar | `/learning/terms-and-academic-calendar` | Designed/documented only |
| B | Programs and Credentials | Degrees, minors, certificates and rules | list | `/learning/programs-and-credentials` | Designed/documented only |
| B | Learning Objectives | Outcomes linked to content and assessment | list | `/learning/learning-objectives` | Designed/documented only |
| B | Syllabus and Course Guidance | Structured syllabus with policies | builder | `/learning/syllabus-and-course-guidance` | Designed/documented only |
| B | Resources and Readings | Course materials with accessibility status | list | `/learning/resources-and-readings` | Designed/documented only |
| B | Assignments | Create, release, collect and return work | builder | `/learning/assignments` | Designed/documented only |
| B | Assessments | Quizzes and exams with windows and accommodations | builder | `/learning/assessments` | Designed/documented only |
| B | Question Banks | Versioned items with tags and objectives | builder | `/learning/question-banks` | Designed/documented only |
| B | Rubrics | Criteria and levels reused across assignments | builder | `/learning/rubrics` | Designed/documented only |
| B | Gradebook | Working grades per course and section | list | `/learning/gradebook` | Integrated only |
| B | Grade Ledger | Immutable record of every grade entry and change | ledger | `/learning/grade-ledger` | Not started |
| B | Grade Moderation | Second marking and calibration | queue | `/learning/grade-moderation` | Designed/documented only |
| B | Grade Release | Scheduled, reviewed release to students | list | `/learning/grade-release` | Designed/documented only |
| B | Regrades | Student requests with deadline and decision | queue | `/learning/regrades` | Designed/documented only |
| B | Study Packs | Course-approved study material bundles | list | `/learning/study-packs` | Designed/documented only |
| B | Flashcards | Spaced practice from course content | list | `/learning/flashcards` | Designed/documented only |
| B | Practice | Low-stakes practice with feedback | list | `/learning/practice` | Designed/documented only |
| B | Tutoring | Book peer or staff tutors | assistant | `/learning/tutoring` | Designed/documented only |
| B | Study Groups | Course-linked groups with sessions | list | `/learning/study-groups` | Designed/documented only |
| B | Discussions | Threaded course discussion with endorsements | list | `/learning/discussions` | Designed/documented only |
| B | Office Hours | Slots, queue and video link | calendar | `/learning/office-hours` | Designed/documented only |
| B | Course Analytics | Engagement and outcome aggregates | dashboard | `/learning/course-analytics` | Designed/documented only |
| B | Academic Integrity | Cases, evidence and decisions | list | `/learning/academic-integrity` | Designed/documented only |
| B | Course AI Rules | What AI may do in this course | builder | `/learning/course-ai-rules` | Designed/documented only |
| B | Learning Evidence | Artifacts proving objectives met | list | `/learning/learning-evidence` | Designed/documented only |
| B | Skills Graph | Skills inferred from evidence, student-approved | settings | `/learning/skills-graph` | Designed/documented only |
| B | Competencies | Competency frameworks and mastery | list | `/learning/competencies` | Designed/documented only |
| B | Curriculum Mapping | Objectives mapped across a program | builder | `/learning/curriculum-mapping` | Designed/documented only |
| B | Degree Requirements | Rules engine for program requirements | list | `/learning/degree-requirements` | Designed/documented only |
| B | Transfer Evaluation | Incoming credit review | list | `/learning/transfer-evaluation` | Designed/documented only |
| B | Articulation Rules | Course equivalencies between institutions | list | `/learning/articulation-rules` | Designed/documented only |
| B | Degree Audit | Progress against requirements | ledger | `/learning/degree-audit` | Designed/documented only |
| B | Graduation Scenarios | What-if plans to graduate | list | `/learning/graduation-scenarios` | Designed/documented only |
| B | Credential Conferral | Award degrees after clearance | list | `/learning/credential-conferral` | Designed/documented only |
| B1 | Course Home | Week view of what students see | dashboard | `/learning/course-studio/course-home` | Planned |
| B1 | Syllabus | Structured editor with policy blocks | builder | `/learning/course-studio/syllabus` | Planned |
| B1 | Schedule | Sessions, due dates, exceptions | calendar | `/learning/course-studio/schedule` | Planned |
| B1 | Objectives | Write and link outcomes | list | `/learning/course-studio/objectives` | Planned |
| B1 | Announcements | Post, schedule, translate | list | `/learning/course-studio/announcements` | Planned |
| B1 | Resources | Upload and check accessibility | list | `/learning/course-studio/resources` | Planned |
| B1 | Assignments | Build and release | builder | `/learning/course-studio/assignments` | Planned |
| B1 | Assessments | Build quizzes and exams | builder | `/learning/course-studio/assessments` | Planned |
| B1 | Feedback | Inline comments and audio feedback | list | `/learning/course-studio/feedback` | Planned |
| B1 | Grades | Section grade entry | list | `/learning/course-studio/grades` | Planned |
| B1 | Study Packs | Curate study bundles | list | `/learning/course-studio/study-packs` | Planned |
| B1 | Notes | Instructor notes and shared notes | list | `/learning/course-studio/notes` | Planned |
| B1 | Course Search | Search within the course | list | `/learning/course-studio/course-search` | Planned |
| B1 | Course AI Rules | Allowed, guided or off per activity | builder | `/learning/course-studio/course-ai-rules` | Planned |
| B1 | Course Copilot | Faculty assistant for drafting, never grading | assistant | `/learning/course-studio/course-copilot` | Planned |
| B1 | Discussions | Moderate and endorse | list | `/learning/course-studio/discussions` | Planned |
| B1 | Groups | Create and balance groups | list | `/learning/course-studio/groups` | Planned |
| B1 | Office Hours | Publish slots and queue | calendar | `/learning/course-studio/office-hours` | Planned |
| B1 | Teaching Team | Roles and delegations for TAs | list | `/learning/course-studio/teaching-team` | Planned |
| B1 | Accessibility Review | Checks before publish | list | `/learning/course-studio/accessibility-review` | Planned |
| B1 | Integrity Review | Flags and case hand-off | list | `/learning/course-studio/integrity-review` | Planned |
| B1 | Course Analytics | Who is falling behind, aggregated | dashboard | `/learning/course-studio/course-analytics` | Planned |
| B1 | Import/Export | Common Cartridge and QTI | list | `/learning/course-studio/import-export` | Planned |
| B1 | Archive | End-of-term snapshot and retention | list | `/learning/course-studio/archive` | Planned |
| B2 | Question bank | Items with tags, objectives, difficulty | builder | `/learning/assessment/question-bank` | Planned |
| B2 | Question versions | Every edit versioned; attempts pin a version | ledger | `/learning/assessment/question-versions` | Planned |
| B2 | Randomization | Per-student variants and pools | list | `/learning/assessment/randomization` | Planned |
| B2 | Attempts | Autosaved, resumable, timestamped | list | `/learning/assessment/attempts` | Planned |
| B2 | Time windows | Open, close, late and grace rules | calendar | `/learning/assessment/time-windows` | Planned |
| B2 | Accommodations | Extra time and settings from accessibility letters | list | `/learning/assessment/accommodations` | Planned |
| B2 | Rubrics | Criteria scoring | builder | `/learning/assessment/rubrics` | Planned |
| B2 | Blind grading | Hide identity while marking | list | `/learning/assessment/blind-grading` | Planned |
| B2 | Moderation | Second marker and reconciliation | queue | `/learning/assessment/moderation` | Planned |
| B2 | Feedback | Per-item and overall | list | `/learning/assessment/feedback` | Planned |
| B2 | Regrades | Request, review, decide | queue | `/learning/assessment/regrades` | Planned |
| B2 | Grade release | Hold and release with review | list | `/learning/assessment/grade-release` | Planned |
| B2 | Academic integrity workflow | Flag, evidence, case, decision, appeal | builder | `/learning/assessment/academic-integrity-workflow` | Planned |
| B2 | Evidence trail | Who did what, when, on which version | ledger | `/learning/assessment/evidence-trail` | Planned |
| B2 | Grade passback bridge | Send grades to LMS/SIS during transition | list | `/learning/assessment/grade-passback-bridge` | Planned |
| B2 | Official grade ledger | Append-only once authoritative | ledger | `/learning/assessment/official-grade-ledger` | Planned |
| C | Institution hierarchy | Institution, campus, school, department tree | list | `/registrar/institution-hierarchy` | Designed/documented only |
| C | Campuses | Locations, time zones, calendars | list | `/registrar/campuses` | Designed/documented only |
| C | Schools | Colleges and their policies | list | `/registrar/schools` | Designed/documented only |
| C | Departments | Units that own courses | list | `/registrar/departments` | Designed/documented only |
| C | Programs | Majors, minors, certificates | list | `/registrar/programs` | Designed/documented only |
| C | Credentials | Degree types and awards | list | `/registrar/credentials` | Designed/documented only |
| C | Terms | Term setup and status | list | `/registrar/terms` | Designed/documented only |
| C | Catalog | Official course catalog by year | ledger | `/registrar/catalog` | Designed/documented only |
| C | Courses | Course master records | list | `/registrar/courses` | Integrated only |
| C | Sections | Offerings with instructors and times | list | `/registrar/sections` | Integrated only |
| C | Instructors | Teaching assignments | list | `/registrar/instructors` | Designed/documented only |
| C | Meeting times | Patterns and exceptions | calendar | `/registrar/meeting-times` | Designed/documented only |
| C | Rooms | Rooms, features, capacity | list | `/registrar/rooms` | Designed/documented only |
| C | Capacity | Seats, reserves, overrides | list | `/registrar/capacity` | Designed/documented only |
| C | Waitlists | Ordered waitlist with auto-offer | list | `/registrar/waitlists` | Designed/documented only |
| C | Prerequisites | Rule checks at registration | list | `/registrar/prerequisites` | Designed/documented only |
| C | Co-requisites | Paired enrollment rules | list | `/registrar/co-requisites` | Designed/documented only |
| C | Registration Windows | Who can register when | calendar | `/registrar/registration-windows` | Designed/documented only |
| C | Time Tickets | Per-student start times | queue | `/registrar/time-tickets` | Designed/documented only |
| C | Holds | Holds with owning office and release path | list | `/registrar/holds` | Transitional |
| C | Overrides | Approved exceptions with reason | list | `/registrar/overrides` | Designed/documented only |
| C | Enrollment | Enrollment record per student and section | list | `/registrar/enrollment` | Integrated only |
| C | Add/Drop | Changes within the window | list | `/registrar/add-drop` | Designed/documented only |
| C | Withdrawal | Course and term withdrawal with impact preview | list | `/registrar/withdrawal` | Designed/documented only |
| C | Academic Standing | Good standing, probation, dismissal | list | `/registrar/academic-standing` | Designed/documented only |
| C | Academic Record Ledger | Immutable academic entries | ledger | `/registrar/academic-record-ledger` | Designed/documented only |
| C | Grade Ledger | Official grades and changes | ledger | `/registrar/grade-ledger` | Not started |
| C | Grade Changes | Proposals with independent approval | list | `/registrar/grade-changes` | Designed/documented only |
| C | Degree Audit | Official progress check | ledger | `/registrar/degree-audit` | Designed/documented only |
| C | Transfer Credit | Posted transfer credit | list | `/registrar/transfer-credit` | Designed/documented only |
| C | Articulation | Equivalency tables | list | `/registrar/articulation` | Designed/documented only |
| C | Graduation | Applications and clearance | list | `/registrar/graduation` | Designed/documented only |
| C | Credential Conferral | Conferral and diploma data | list | `/registrar/credential-conferral` | Designed/documented only |
| C | Transcript Generation | Official and unofficial transcripts | list | `/registrar/transcript-generation` | Designed/documented only |
| C | Official Exports | State, federal and clearinghouse files | list | `/registrar/official-exports` | Designed/documented only |
| C | Compliance Reporting | IPEDS and accreditation data | list | `/registrar/compliance-reporting` | Designed/documented only |
| C | Reconciliation | SIS vs Semester mismatches | queue | `/registrar/reconciliation` | Static prototype only |
| C | Migration | Move records into native ledger | list | `/registrar/migration` | Designed/documented only |
| C | Audit | Every record change, actor and reason | ledger | `/registrar/audit` | Designed/documented only |
| C1 | Immutable academic entries | Append-only rows, never updated | ledger | `/registrar/record-ledger/immutable-academic-entries` | Not started |
| C1 | Effective dates | When a value takes effect vs when recorded | list | `/registrar/record-ledger/effective-dates` | Planned |
| C1 | Source authority | Which system or office asserted it | list | `/registrar/record-ledger/source-authority` | Planned |
| C1 | Approval rules | Who must approve each change type | list | `/registrar/record-ledger/approval-rules` | Planned |
| C1 | Correction proposals | Propose, never overwrite | list | `/registrar/record-ledger/correction-proposals` | Planned |
| C1 | Independent approval | Proposer cannot approve | list | `/registrar/record-ledger/independent-approval` | Planned |
| C1 | Superseded values | Old values kept and linked | ledger | `/registrar/record-ledger/superseded-values` | Planned |
| C1 | Change rationale | Required reason on every change | list | `/registrar/record-ledger/change-rationale` | Planned |
| C1 | Audit events | Event per action | ledger | `/registrar/record-ledger/audit-events` | Planned |
| C1 | Export | Portable record export | list | `/registrar/record-ledger/export` | Planned |
| C1 | Retention | Retention by record type | settings | `/registrar/record-ledger/retention` | Planned |
| C1 | Legal hold awareness | Holds block deletion | list | `/registrar/record-ledger/legal-hold-awareness` | Planned |
| D | Caseloads | Assigned students sorted by need with reason | list | `/success/caseloads` | Static prototype only |
| D | Student Profiles | Advisor view with sources | settings | `/success/student-profiles` | Static prototype only |
| D | Path Views | Student path from the advisor side | list | `/success/path-views` | Static prototype only |
| D | Check-ins | Scheduled and ad-hoc check-ins | list | `/success/check-ins` | Static prototype only |
| D | Appointments | Booking with availability | calendar | `/success/appointments` | Static prototype only |
| D | Advising Notes | Private or shared notes | list | `/success/advising-notes` | Static prototype only |
| D | Success Plans | Goals, steps and owners | settings | `/success/success-plans` | Static prototype only |
| D | Referrals | Warm hand-off to another office | queue | `/success/referrals` | Static prototype only |
| D | Outreach | Campaigns to cohorts with opt-out | list | `/success/outreach` | Static prototype only |
| D | Action Completion | Track whether actions got done | list | `/success/action-completion` | Static prototype only |
| D | Support Requests | Tickets from students | queue | `/success/support-requests` | Static prototype only |
| D | Help Center | Self-service articles | list | `/success/help-center` | Static prototype only |
| D | Knowledge Base | Staff-facing answers | list | `/success/knowledge-base` | Static prototype only |
| D | Escalation | Rules and paths for urgent cases | list | `/success/escalation` | Static prototype only |
| D | Intervention Tracking | What was tried and the result | list | `/success/intervention-tracking` | Static prototype only |
| D | Cohort Views | Aggregates by cohort | list | `/success/cohort-views` | Static prototype only |
| D | Outcome Aggregates | Persistence and completion, aggregated | dashboard | `/success/outcome-aggregates` | Static prototype only |
| D | Student Consent Sharing | What students agree to share | list | `/success/student-consent-sharing` | Static prototype only |
| D | Advisor Collaboration | Shared caseloads and hand-offs | list | `/success/advisor-collaboration` | Static prototype only |
| D | Office Actions | Office-owned tasks | list | `/success/office-actions` | Static prototype only |
| D | Support Quality | Response times and quality review | list | `/success/support-quality` | Static prototype only |
| D | Satisfaction | Post-resolution survey | list | `/success/satisfaction` | Static prototype only |
| D | Churn/Persistence Signals | Early signals, explained, never auto-acted | list | `/success/churn-persistence-signals` | Static prototype only |
| D | Institutional Reporting | Office and leadership reports | list | `/success/institutional-reporting` | Static prototype only |
| E | Tasks | Tasks linked to courses and goals | assistant | `/workspace/tasks` | Designed/documented only |
| E | Calendar | Unified calendar | calendar | `/workspace/calendar` | Designed/documented only |
| E | Schedule | Class schedule | calendar | `/workspace/schedule` | Designed/documented only |
| E | Notes | Notes with course context | list | `/workspace/notes` | Designed/documented only |
| E | Documents | Rich documents | builder | `/workspace/documents` | Designed/documented only |
| E | Files | Storage with sharing | list | `/workspace/files` | Designed/documented only |
| E | Projects | Boards and timelines | list | `/workspace/projects` | Designed/documented only |
| E | Shared Workspaces | Team spaces with roles | list | `/workspace/shared-workspaces` | Designed/documented only |
| E | Course Notebooks | One notebook per course | list | `/workspace/course-notebooks` | Designed/documented only |
| E | Research Workspace | Sources, citations, notes | list | `/workspace/research-workspace` | Designed/documented only |
| E | Writing Workspace | Drafts with integrity-safe AI help | builder | `/workspace/writing-workspace` | Designed/documented only |
| E | Spreadsheet/Sheets Workspace | Tables and simple formulas | builder | `/workspace/spreadsheet-sheets-workspace` | Designed/documented only |
| E | Presentation/Deck Workspace | Slides for class | builder | `/workspace/presentation-deck-workspace` | Designed/documented only |
| E | Focus Mode | Distraction-free timer | list | `/workspace/focus-mode` | Designed/documented only |
| E | Study Sessions | Solo and group sessions | calendar | `/workspace/study-sessions` | Designed/documented only |
| E | Templates | Starter docs and plans | builder | `/workspace/templates` | Designed/documented only |
| E | Collaboration | Comments, mentions, presence | list | `/workspace/collaboration` | Designed/documented only |
| E | Messaging | Direct and group messages with safety tools | list | `/workspace/messaging` | Designed/documented only |
| E | Notifications | One notification center, per-channel rules | list | `/workspace/notifications` | Designed/documented only |
| E | Search | Search across everything you can see | list | `/workspace/search` | Designed/documented only |
| E | Automation | Simple rules (when X, remind me) | list | `/workspace/automation` | Designed/documented only |
| E | Version History | Restore earlier versions | ledger | `/workspace/version-history` | Designed/documented only |
| E | Offline-Safe Work | Work offline; sync later | list | `/workspace/offline-safe-work` | Designed/documented only |
| E | Cross-Device Sync | Phone to desktop hand-off | list | `/workspace/cross-device-sync` | Designed/documented only |
| F | AI Gateway | Single route for every model call | list | `/intelligence/ai-gateway` | Native but incomplete |
| F | Model Registry | Approved models and versions | list | `/intelligence/model-registry` | Native but incomplete |
| F | Provider Registry | Providers, terms, regions | list | `/intelligence/provider-registry` | Native but incomplete |
| F | Tenant AI Policy | Institution defaults | settings | `/intelligence/tenant-ai-policy` | Native but incomplete |
| F | Course AI Policy | Per-course rules, stricter only | settings | `/intelligence/course-ai-policy` | Native but incomplete |
| F | User AI Preferences | Tone, level, off switch | settings | `/intelligence/user-ai-preferences` | Native but incomplete |
| F | Data Classification Engine | Classify before sending | settings | `/intelligence/data-classification-engine` | Native but incomplete |
| F | Consent Engine | Check consent per data type | list | `/intelligence/consent-engine` | Native but incomplete |
| F | Prompt Policy | Blocked content and redaction | settings | `/intelligence/prompt-policy` | Native but incomplete |
| F | Source Retrieval | Approved sources only | list | `/intelligence/source-retrieval` | Native but incomplete |
| F | Knowledge Graph | Course and institution knowledge | list | `/intelligence/knowledge-graph` | Native but incomplete |
| F | Citation Engine | Every answer cites | list | `/intelligence/citation-engine` | Native but incomplete |
| F | Provenance Engine | Label AI-generated content | list | `/intelligence/provenance-engine` | Native but incomplete |
| F | Tool Permission Engine | What actions AI may take | list | `/intelligence/tool-permission-engine` | Native but incomplete |
| F | Workflow Agent Engine | Low-risk automations with approval | builder | `/intelligence/workflow-agent-engine` | Native but incomplete |
| F | Student Copilot | Ask Semester for students | assistant | `/intelligence/student-copilot` | Native but incomplete |
| F | Course Tutor | Course-scoped tutor under course rules | assistant | `/intelligence/course-tutor` | Native but incomplete |
| F | Research Assistant | Find and summarise approved sources | assistant | `/intelligence/research-assistant` | Native but incomplete |
| F | Writing Assistant | Feedback without writing graded work | builder | `/intelligence/writing-assistant` | Native but incomplete |
| F | Study Planner | Plans from deadlines and goals | assistant | `/intelligence/study-planner` | Native but incomplete |
| F | Path/Registration Guide | Explains requirements; never registers | assistant | `/intelligence/path-registration-guide` | Native but incomplete |
| F | Advisor Assistant | Drafts outreach and summaries | assistant | `/intelligence/advisor-assistant` | Native but incomplete |
| F | Faculty Assistant | Drafts materials and questions | assistant | `/intelligence/faculty-assistant` | Native but incomplete |
| F | Institutional Knowledge Assistant | Answers from policy documents | assistant | `/intelligence/institutional-knowledge-assistant` | Native but incomplete |
| F | Operator Assistant | Company ops helper, no student data | assistant | `/intelligence/operator-assistant` | Native but incomplete |
| F | AI Evaluation Harness | Scored test sets per use | list | `/intelligence/ai-evaluation-harness` | Native but incomplete |
| F | AI Red Team | 20+ adversarial cases in CI | list | `/intelligence/ai-red-team` | Native but incomplete |
| F | AI Audit | Usage log without prompt content | ledger | `/intelligence/ai-audit` | Native but incomplete |
| F | AI Spend Meter | Cost per tenant and feature | list | `/intelligence/ai-spend-meter` | Native but incomplete |
| F | AI Rate Limits | Quotas per user and tenant | list | `/intelligence/ai-rate-limits` | Native but incomplete |
| F | Human Escalation | Hand to a person with context | list | `/intelligence/human-escalation` | Native but incomplete |
| F | Human Override | Staff can correct or withdraw output | list | `/intelligence/human-override` | Native but incomplete |
| F | AI Incident Response | Severity, kill switch, notice | list | `/intelligence/ai-incident-response` | Native but incomplete |
| F | Model Fallback | Fail closed or to a safer model | list | `/intelligence/model-fallback` | Native but incomplete |
| G | Dining | Menus, plan balance, dietary filters | list | `/campus/dining` | Static prototype only |
| G | Campus Card | Balance, lost card, access | list | `/campus/campus-card` | Static prototype only |
| G | Housing | Assignment, roommates, maintenance | list | `/campus/housing` | Static prototype only |
| G | Room/Space Booking | Book rooms and study spaces | list | `/campus/room-space-booking` | Static prototype only |
| G | Events | Campus calendar and RSVPs | ledger | `/campus/events` | Static prototype only |
| G | Student Organizations | Registration and rosters | list | `/campus/student-organizations` | Static prototype only |
| G | Community | Link into community platform | list | `/campus/community` | Static prototype only |
| G | Study Spaces | Live availability | list | `/campus/study-spaces` | Static prototype only |
| G | Transit | Shuttle times and alerts | list | `/campus/transit` | Static prototype only |
| G | Parking | Permits and citations hand-off | list | `/campus/parking` | Static prototype only |
| G | Recreation | Facility hours and classes | list | `/campus/recreation` | Static prototype only |
| G | Library | Search, holds, reserves | list | `/campus/library` | Static prototype only |
| G | Bookstore | Course materials and orders | list | `/campus/bookstore` | Static prototype only |
| G | Campus Jobs | On-campus postings and hours | list | `/campus/campus-jobs` | Static prototype only |
| G | Volunteer Opportunities | Service hours | list | `/campus/volunteer-opportunities` | Static prototype only |
| G | Local Services | Vetted local partners | list | `/campus/local-services` | Static prototype only |
| G | Accessibility Services | Requests and letters | list | `/campus/accessibility-services` | Static prototype only |
| G | Wellness Handoffs | Warm hand-off to counseling (no clinical data) | list | `/campus/wellness-handoffs` | Static prototype only |
| G | Safety Resources | Always-available safety info | list | `/campus/safety-resources` | Static prototype only |
| G | Emergency Handoffs | One tap to campus emergency line | list | `/campus/emergency-handoffs` | Static prototype only |
| G | Campus Communications | Targeted campus notices | list | `/campus/campus-communications` | Static prototype only |
| G | Service Directory | Who to ask for what | list | `/campus/service-directory` | Static prototype only |
| G | Campus Operations Analytics | Service volumes, aggregated | dashboard | `/campus/campus-operations-analytics` | Static prototype only |
| H | Student Account Ledger | Charges and credits, append-only | ledger | `/finance/student-account-ledger` | Not started |
| H | Charges | Tuition, fees, housing | list | `/finance/charges` | Designed/documented only |
| H | Credits | Payments, aid, adjustments | list | `/finance/credits` | Designed/documented only |
| H | Balances | Current and projected | list | `/finance/balances` | Designed/documented only |
| H | Holds | Financial holds with release path | list | `/finance/holds` | Designed/documented only |
| H | Statements | Monthly statements | list | `/finance/statements` | Designed/documented only |
| H | Payment Plans | Enrol and manage plans | settings | `/finance/payment-plans` | Designed/documented only |
| H | Installments | Schedule and reminders | list | `/finance/installments` | Designed/documented only |
| H | Payment Provider Handoff | Hosted checkout; no card data stored | list | `/finance/payment-provider-handoff` | Transitional |
| H | Refund Status | Track refunds | list | `/finance/refund-status` | Designed/documented only |
| H | Scholarships | Awards and conditions | list | `/finance/scholarships` | Designed/documented only |
| H | Financial Aid Handoffs | Status from aid system | list | `/finance/financial-aid-handoffs` | Designed/documented only |
| H | Budgeting | Student budget tool | dashboard | `/finance/budgeting` | Designed/documented only |
| H | Cost Planning | Cost of attendance scenarios | list | `/finance/cost-planning` | Designed/documented only |
| H | Emergency Aid Handoffs | Apply and route | list | `/finance/emergency-aid-handoffs` | Designed/documented only |
| H | Reconciliation | Ledger vs ERP vs processor | queue | `/finance/reconciliation` | Designed/documented only |
| H | Dunning | Respectful reminders with help links | list | `/finance/dunning` | Designed/documented only |
| H | Disputes | Disputed charges workflow | queue | `/finance/disputes` | Designed/documented only |
| H | Account Close | Close-out at graduation or leaving | list | `/finance/account-close` | Designed/documented only |
| H | Audit Ledger | Every money event | ledger | `/finance/audit-ledger` | Designed/documented only |
| I | Skills Graph | Skills from evidence, student-approved | settings | `/career/skills-graph` | Designed/documented only |
| I | Learning Evidence | Artifacts behind each skill | list | `/career/learning-evidence` | Designed/documented only |
| I | Verified Skill Claims | Institution-signed claims | settings | `/career/verified-skill-claims` | Designed/documented only |
| I | Credential Wallet | Degrees and badges, portable | list | `/career/credential-wallet` | Designed/documented only |
| I | Portfolio | Public or private showcase | list | `/career/portfolio` | Designed/documented only |
| I | Resume | Builder from evidence | builder | `/career/resume` | Designed/documented only |
| I | Cover Letter | Drafting with integrity-safe AI | builder | `/career/cover-letter` | Designed/documented only |
| I | Interview Preparation | Practice and feedback | list | `/career/interview-preparation` | Designed/documented only |
| I | Career Plan | Goals and steps | list | `/career/career-plan` | Designed/documented only |
| I | Job Search | Postings matched to skills | list | `/career/job-search` | Designed/documented only |
| I | Internship Search | Internships and co-ops | list | `/career/internship-search` | Designed/documented only |
| I | Employer Profiles | Verified employers | settings | `/career/employer-profiles` | Designed/documented only |
| I | Applications | Track applications | list | `/career/applications` | Designed/documented only |
| I | Mentorship | Matched mentors | list | `/career/mentorship` | Designed/documented only |
| I | Alumni Network | Opt-in directory | list | `/career/alumni-network` | Designed/documented only |
| I | Career Appointments | Book career staff | calendar | `/career/career-appointments` | Designed/documented only |
| I | Career Events | Fairs and info sessions | ledger | `/career/career-events` | Designed/documented only |
| I | Continuing Education | Courses after graduation | list | `/career/continuing-education` | Designed/documented only |
| I | Microcredentials | Short credentials | list | `/career/microcredentials` | Designed/documented only |
| I | Credential Renewal | Renewal reminders | list | `/career/credential-renewal` | Designed/documented only |
| I | Employer Analytics | Aggregate engagement for employers | dashboard | `/career/employer-analytics` | Designed/documented only |
| I | Career Outcomes | First-destination data, aggregated | dashboard | `/career/career-outcomes` | Designed/documented only |
| I | Lifelong Identity | One account from applicant to alumni | list | `/career/lifelong-identity` | Designed/documented only |
| J | Communities | Course, club, residence communities | list | `/community/communities` | Static prototype only |
| J | Membership | Join, leave, roles | list | `/community/membership` | Static prototype only |
| J | Posts | Text, media, polls | list | `/community/posts` | Static prototype only |
| J | Comments | Threads | list | `/community/comments` | Static prototype only |
| J | Reactions | Lightweight reactions | list | `/community/reactions` | Static prototype only |
| J | Groups | Small groups | list | `/community/groups` | Static prototype only |
| J | Events | Event pages and RSVPs | ledger | `/community/events` | Static prototype only |
| J | Study Sessions | Scheduled sessions | calendar | `/community/study-sessions` | Static prototype only |
| J | Peer Mentoring | Peer leader matching | list | `/community/peer-mentoring` | Static prototype only |
| J | Organization Spaces | Club home, roster, files | list | `/community/organization-spaces` | Static prototype only |
| J | Alias/Pseudonym Controls | Alias where policy allows | list | `/community/alias-pseudonym-controls` | Static prototype only |
| J | Reporting | Report with reason | list | `/community/reporting` | Static prototype only |
| J | Moderation | Queue and actions | queue | `/community/moderation` | Static prototype only |
| J | Appeals | Second review | queue | `/community/appeals` | Static prototype only |
| J | Restrictions | Mute, restrict, suspend | list | `/community/restrictions` | Static prototype only |
| J | Safety Escalation | Urgent path to campus protocol | list | `/community/safety-escalation` | Static prototype only |
| J | Volunteer Moderation | Trained student moderators | queue | `/community/volunteer-moderation` | Static prototype only |
| J | Calibration | Moderator consistency checks | list | `/community/calibration` | Static prototype only |
| J | Content Retention | Retention by content type | settings | `/community/content-retention` | Static prototype only |
| J | Media | Image and video with safety scan | list | `/community/media` | Static prototype only |
| J | Marketplace Listings | Campus-verified listings | list | `/community/marketplace-listings` | Static prototype only |
| J | Community Analytics | Health, aggregated | dashboard | `/community/community-analytics` | Static prototype only |
| K | Family Invitations | Student invites a family member | list | `/family/family-invitations` | Designed/documented only |
| K | Relationship Verification | Verify identity and relationship | list | `/family/relationship-verification` | Designed/documented only |
| K | Consent Grants | What is shared, by category | list | `/family/consent-grants` | Designed/documented only |
| K | Scoped Categories | Schedule, balance, grades — each separate | list | `/family/scoped-categories` | Designed/documented only |
| K | Time-Bounded Access | Every grant expires | calendar | `/family/time-bounded-access` | Designed/documented only |
| K | Shared Items | What family sees | list | `/family/shared-items` | Designed/documented only |
| K | Billing/Support Handoff | Pay or ask for help | list | `/family/billing-support-handoff` | Designed/documented only |
| K | Communication Preferences | How family is contacted | settings | `/family/communication-preferences` | Designed/documented only |
| K | Access History | Student sees every family view | ledger | `/family/access-history` | Designed/documented only |
| K | Revocation | Student revokes instantly | list | `/family/revocation` | Designed/documented only |
| K | Privacy Notice | Plain-language notice | list | `/family/privacy-notice` | Designed/documented only |
| K | Audit Events | Every grant and view | ledger | `/family/audit-events` | Designed/documented only |
| L | Tenant Overview | Health of the tenant | dashboard | `/control-plane/tenant-overview` | Static prototype only |
| L | Institution Hierarchy | Campus, school, department | list | `/control-plane/institution-hierarchy` | Static prototype only |
| L | Identity Providers | SAML/OIDC setup | settings | `/control-plane/identity-providers` | Static prototype only |
| L | SSO | Enforce and test | settings | `/control-plane/sso` | Transitional |
| L | SCIM | Provisioning and deprovisioning | settings | `/control-plane/scim` | Static prototype only |
| L | Membership | Who belongs where | list | `/control-plane/membership` | Static prototype only |
| L | Roles | Role definitions | settings | `/control-plane/roles` | Static prototype only |
| L | Capabilities | Fine-grained grants | settings | `/control-plane/capabilities` | Static prototype only |
| L | Access Reviews | Quarterly confirm-or-remove | queue | `/control-plane/access-reviews` | Static prototype only |
| L | Tenant Plans | Plan and limits | settings | `/control-plane/tenant-plans` | Static prototype only |
| L | Entitlements | Modules bought | settings | `/control-plane/entitlements` | Static prototype only |
| L | Feature Policies | On/off per feature | settings | `/control-plane/feature-policies` | Static prototype only |
| L | Feature Cohorts | Roll out to groups | list | `/control-plane/feature-cohorts` | Static prototype only |
| L | Kill Switches | Instant off | settings | `/control-plane/kill-switches` | Designed/documented only |
| L | Module Modes | Off, shadow, assist, authoritative | settings | `/control-plane/module-modes` | Static prototype only |
| L | Tenant Rollouts | Staged rollout plan | list | `/control-plane/tenant-rollouts` | Static prototype only |
| L | Configuration Studio | All settings in one place | builder | `/control-plane/configuration-studio` | Static prototype only |
| L | Workflow Builder | Configure approvals and routes | builder | `/control-plane/workflow-builder` | Static prototype only |
| L | Policy Hierarchy | Institution > school > course | settings | `/control-plane/policy-hierarchy` | Static prototype only |
| L | Governance Stewards | Named data owners | list | `/control-plane/governance-stewards` | Static prototype only |
| L | Governance Decisions | Logged decisions | list | `/control-plane/governance-decisions` | Static prototype only |
| L | Integration Governance | Approve connections | list | `/control-plane/integration-governance` | Static prototype only |
| L | Data Classification | Classify fields | settings | `/control-plane/data-classification` | Static prototype only |
| L | Consent Policies | Default consent rules | settings | `/control-plane/consent-policies` | Static prototype only |
| L | Retention Policies | Retention by type | settings | `/control-plane/retention-policies` | Static prototype only |
| L | Legal Holds | Freeze deletion | list | `/control-plane/legal-holds` | Static prototype only |
| L | Data Subject Requests | Export, correct, delete | queue | `/control-plane/data-subject-requests` | Static prototype only |
| L | AI Provider Policies | Allowed providers | settings | `/control-plane/ai-provider-policies` | Static prototype only |
| L | Approved Sources | What AI may read | list | `/control-plane/approved-sources` | Static prototype only |
| L | Compliance Controls | Mapped controls | list | `/control-plane/compliance-controls` | Static prototype only |
| L | Trust Artifacts | DPA, HECVAT, ACR | list | `/control-plane/trust-artifacts` | Static prototype only |
| L | Accessibility Program | Owner, plan, evidence | list | `/control-plane/accessibility-program` | Static prototype only |
| L | Incident Notices | Notices to the institution | list | `/control-plane/incident-notices` | Static prototype only |
| L | Risk Register | Tenant risks | list | `/control-plane/risk-register` | Static prototype only |
| L | Audit Explorer | Search the audit log | ledger | `/control-plane/audit-explorer` | Static prototype only |
| L | Offboarding | Leave Semester cleanly | list | `/control-plane/offboarding` | Static prototype only |
| L | Data Portability | Full export | list | `/control-plane/data-portability` | Static prototype only |
| M | Provider Registry | Known vendors and adapters | list | `/migration/provider-registry` | Designed/documented only |
| M | Connection Registry | Live connections per tenant | list | `/migration/connection-registry` | Designed/documented only |
| M | Security Review | Review before connect | list | `/migration/security-review` | Designed/documented only |
| M | Privacy Review | Data scope review | list | `/migration/privacy-review` | Designed/documented only |
| M | Scope Approval | Admin approves scopes | list | `/migration/scope-approval` | Designed/documented only |
| M | Credential Vault References | Secrets by reference only | list | `/migration/credential-vault-references` | Designed/documented only |
| M | Mapping Studio | Map source fields to graph | builder | `/migration/mapping-studio` | Designed/documented only |
| M | Mapping Versions | Versioned mappings | ledger | `/migration/mapping-versions` | Designed/documented only |
| M | Field Transforms | Clean and convert | list | `/migration/field-transforms` | Designed/documented only |
| M | Schema Fingerprints | Detect source changes | list | `/migration/schema-fingerprints` | Designed/documented only |
| M | Sync Scheduling | When syncs run | list | `/migration/sync-scheduling` | Designed/documented only |
| M | Sync Runs | History and status | list | `/migration/sync-runs` | Designed/documented only |
| M | Sync Errors | Errors with fix hints | queue | `/migration/sync-errors` | Designed/documented only |
| M | Dead Letter Queue | Failed records held | queue | `/migration/dead-letter-queue` | Designed/documented only |
| M | Replay Requests | Retry safely | queue | `/migration/replay-requests` | Designed/documented only |
| M | Reconciliation | Compare and resolve | queue | `/migration/reconciliation` | Designed/documented only |
| M | Drift Detection | Spot divergence | list | `/migration/drift-detection` | Designed/documented only |
| M | Duplicate Resolution | Merge people and records | list | `/migration/duplicate-resolution` | Designed/documented only |
| M | Source Ownership | Who is authoritative per field | list | `/migration/source-ownership` | Designed/documented only |
| M | Data Freshness | Last update per source | list | `/migration/data-freshness` | Designed/documented only |
| M | Webhook Events | Inbound and outbound events | ledger | `/migration/webhook-events` | Designed/documented only |
| M | LTI | LTI 1.3 Advantage | list | `/migration/lti` | Designed/documented only |
| M | OneRoster | Rostering | list | `/migration/oneroster` | Designed/documented only |
| M | Edu-API | 1EdTech Edu-API | list | `/migration/edu-api` | Designed/documented only |
| M | SIS/ERP Adapters | Banner, Colleague, Workday, PeopleSoft | list | `/migration/sis-erp-adapters` | Designed/documented only |
| M | LMS Adapters | Canvas, Brightspace, Moodle, Blackboard | list | `/migration/lms-adapters` | Designed/documented only |
| M | Productivity Adapters | Google, Microsoft | list | `/migration/productivity-adapters` | Designed/documented only |
| M | AI Provider Adapters | Model providers | list | `/migration/ai-provider-adapters` | Designed/documented only |
| M | Campus Service Adapters | Card, housing, dining | list | `/migration/campus-service-adapters` | Designed/documented only |
| M | Career Adapters | Job boards, credentials | list | `/migration/career-adapters` | Designed/documented only |
| M | Import/Export | Bulk files | list | `/migration/import-export` | Designed/documented only |
| M | Migration Projects | Plan per domain | list | `/migration/migration-projects` | Designed/documented only |
| M | Dual Run | Run both systems side by side | list | `/migration/dual-run` | Designed/documented only |
| M | Cutover | Gated switch | list | `/migration/cutover` | Designed/documented only |
| M | Rollback | Return to legacy | list | `/migration/rollback` | Designed/documented only |
| M | Archive | Read-only legacy archive | list | `/migration/archive` | Designed/documented only |
| M | Legacy Retirement | Decommission plan | list | `/migration/legacy-retirement` | Designed/documented only |
| N | Asset Inventory | Systems and owners | list | `/trust/asset-inventory` | Designed/documented only |
| N | Data Inventory | 13 data categories | list | `/trust/data-inventory` | Designed/documented only |
| N | Data Classification | Levels and handling | settings | `/trust/data-classification` | Designed/documented only |
| N | Access Reviews | Company-side reviews | queue | `/trust/access-reviews` | Designed/documented only |
| N | Secrets Inventory | Where secrets live | list | `/trust/secrets-inventory` | Designed/documented only |
| N | Vulnerability Management | Find, fix, verify | list | `/trust/vulnerability-management` | Designed/documented only |
| N | Threat Modeling | Per feature | list | `/trust/threat-modeling` | Designed/documented only |
| N | Dependency Security | Audit and patch | list | `/trust/dependency-security` | Designed/documented only |
| N | Security Alerts | Triage | queue | `/trust/security-alerts` | Designed/documented only |
| N | Incident Command | Run incidents | list | `/trust/incident-command` | Designed/documented only |
| N | Audit Logs | Tamper-evident logs | ledger | `/trust/audit-logs` | Designed/documented only |
| N | Security Controls | Control library | list | `/trust/security-controls` | Designed/documented only |
| N | Control Evidence | Evidence per control | list | `/trust/control-evidence` | Designed/documented only |
| N | Vendor Risk | Vendor reviews | list | `/trust/vendor-risk` | Designed/documented only |
| N | Pen-Test Evidence | Reports and fixes | list | `/trust/pen-test-evidence` | Designed/documented only |
| N | Backup/Restore | Drills | list | `/trust/backup-restore` | Designed/documented only |
| N | Disaster Recovery | RTO/RPO plans | list | `/trust/disaster-recovery` | Designed/documented only |
| N | Business Continuity | Solo-founder continuity | list | `/trust/business-continuity` | Designed/documented only |
| N | Privacy Requests | DSR handling | queue | `/trust/privacy-requests` | Designed/documented only |
| N | Retention/Deletion | Scheduled deletion | settings | `/trust/retention-deletion` | Designed/documented only |
| N | Legal Holds | Company-side holds | list | `/trust/legal-holds` | Designed/documented only |
| N | Consent | Consent records | list | `/trust/consent` | Designed/documented only |
| N | Subprocessors | Public list | settings | `/trust/subprocessors` | Designed/documented only |
| N | AI Governance | NIST-aligned policy | list | `/trust/ai-governance` | Designed/documented only |
| N | Accessibility Program | WCAG 2.2 AA plan | list | `/trust/accessibility-program` | Designed/documented only |
| N | HECVAT | Questionnaire answers | list | `/trust/hecvat` | Designed/documented only |
| N | Security Questionnaires | Reusable answers | builder | `/trust/security-questionnaires` | Designed/documented only |
| N | Trust Room | Gated documents for buyers | list | `/trust/trust-room` | Designed/documented only |
| N | Public Trust Center | Public page | list | `/trust/public-trust-center` | Designed/documented only |
| N | Vulnerability Disclosure | Report a vulnerability | list | `/trust/vulnerability-disclosure` | Designed/documented only |
| O | Corporate Governance | Entity, ownership, minutes | list | `/company-os/corporate-governance` | Static prototype only |
| O | Legal Operations | Contracts, IP, matters | list | `/company-os/legal-operations` | Static prototype only |
| O | Finance | Budget vs actual | list | `/company-os/finance` | Static prototype only |
| O | Accounting Integration | Ledger sync | list | `/company-os/accounting-integration` | Static prototype only |
| O | Cash/Runway | Cash and months left | dashboard | `/company-os/cash-runway` | Static prototype only |
| O | Budget | Annual and monthly | dashboard | `/company-os/budget` | Static prototype only |
| O | Pricing | Price book | list | `/company-os/pricing` | Static prototype only |
| O | Revenue Operations | Pipeline and forecast | list | `/company-os/revenue-operations` | Static prototype only |
| O | CRM | Accounts and contacts | list | `/company-os/crm` | Static prototype only |
| O | GTM | Plan and motions | list | `/company-os/gtm` | Static prototype only |
| O | Marketing | Campaigns and content | list | `/company-os/marketing` | Static prototype only |
| O | Sales | Deals and stages | list | `/company-os/sales` | Static prototype only |
| O | Pilots | Pilot design and tracking | list | `/company-os/pilots` | Static prototype only |
| O | Customer Success | Health and plans | list | `/company-os/customer-success` | Static prototype only |
| O | Implementation | Projects | list | `/company-os/implementation` | Static prototype only |
| O | Support | Queue and quality | list | `/company-os/support` | Static prototype only |
| O | Billing | Invoices | list | `/company-os/billing` | Static prototype only |
| O | Collections | AR and follow-up | list | `/company-os/collections` | Static prototype only |
| O | Partnerships | Partner program | list | `/company-os/partnerships` | Static prototype only |
| O | Marketplace Operations | Listings and payouts | list | `/company-os/marketplace-operations` | Static prototype only |
| O | Product Operations | Roadmap and feedback | list | `/company-os/product-operations` | Static prototype only |
| O | Engineering Operations | Velocity and quality | list | `/company-os/engineering-operations` | Static prototype only |
| O | Release Operations | Releases and gates | list | `/company-os/release-operations` | Static prototype only |
| O | Security Operations | SecOps queue | list | `/company-os/security-operations` | Static prototype only |
| O | Compliance Operations | Obligations | list | `/company-os/compliance-operations` | Static prototype only |
| O | Privacy Operations | DSRs and notices | list | `/company-os/privacy-operations` | Static prototype only |
| O | AI Governance Operations | Reviews and incidents | list | `/company-os/ai-governance-operations` | Static prototype only |
| O | Vendor Management | Vendors and renewals | list | `/company-os/vendor-management` | Static prototype only |
| O | People/Hiring | Plan, hiring, onboarding | list | `/company-os/people-hiring` | Static prototype only |
| O | Board/Investor Operations | Updates and data room | list | `/company-os/board-investor-operations` | Static prototype only |
| O | Research/Outcomes | Studies and evidence | dashboard | `/company-os/research-outcomes` | Static prototype only |
| O | Risk Management | Company risk register | list | `/company-os/risk-management` | Static prototype only |
| O | Operating Cadence | Weekly, monthly, quarterly | list | `/company-os/operating-cadence` | Static prototype only |
| P | Executive Overview | One page: cash, pipeline, health, incidents | dashboard | `/command-center/executive-overview` | Static prototype only |
| P | Operations Inbox | Everything needing an operator | queue | `/command-center/operations-inbox` | Static prototype only |
| P | My Work | Assigned to me | queue | `/command-center/my-work` | Static prototype only |
| P | Approvals | Two-person approvals | queue | `/command-center/approvals` | Static prototype only |
| P | Tenants | All tenants | list | `/command-center/tenants` | Static prototype only |
| P | Tenant 360 | One tenant, everything | dashboard | `/command-center/tenant-360` | Static prototype only |
| P | Customers | Customer list | list | `/command-center/customers` | Static prototype only |
| P | Customer 360 | One customer, everything | dashboard | `/command-center/customer-360` | Static prototype only |
| P | GTM Accounts | Target accounts | list | `/command-center/gtm-accounts` | Static prototype only |
| P | Stakeholders | People per account | list | `/command-center/stakeholders` | Static prototype only |
| P | Pilots | Active pilots | list | `/command-center/pilots` | Static prototype only |
| P | Pilot Metrics | Agreed metrics | dashboard | `/command-center/pilot-metrics` | Static prototype only |
| P | Pilot Outcomes | Results and decisions | dashboard | `/command-center/pilot-outcomes` | Static prototype only |
| P | Implementation Projects | Status per project | list | `/command-center/implementation-projects` | Static prototype only |
| P | Success Plans | Customer plans | settings | `/command-center/success-plans` | Static prototype only |
| P | QBRs | Quarterly reviews | list | `/command-center/qbrs` | Static prototype only |
| P | Renewals | Upcoming renewals | list | `/command-center/renewals` | Static prototype only |
| P | Customer Health | Health score with reasons | dashboard | `/command-center/customer-health` | Static prototype only |
| P | Commercial Products | SKUs | list | `/command-center/commercial-products` | Static prototype only |
| P | Plans | Plan definitions | settings | `/command-center/plans` | Static prototype only |
| P | Prices | Price book | list | `/command-center/prices` | Static prototype only |
| P | Quotes | Quotes with approval | list | `/command-center/quotes` | Static prototype only |
| P | Contracts | Contract register | list | `/command-center/contracts` | Static prototype only |
| P | Subscriptions | Active subscriptions | list | `/command-center/subscriptions` | Static prototype only |
| P | Invoices | Issued invoices | list | `/command-center/invoices` | Static prototype only |
| P | Payments | Received payments | list | `/command-center/payments` | Static prototype only |
| P | Refunds/Credits | With approval | list | `/command-center/refunds-credits` | Static prototype only |
| P | Dunning | Overdue flow | list | `/command-center/dunning` | Static prototype only |
| P | Cancellations | Cancel with offboarding | list | `/command-center/cancellations` | Static prototype only |
| P | Support Queue | Tickets | queue | `/command-center/support-queue` | Static prototype only |
| P | Beta Programs | Beta cohorts | list | `/command-center/beta-programs` | Static prototype only |
| P | Feature Flags | Global flags | settings | `/command-center/feature-flags` | Static prototype only |
| P | Releases | Release train | list | `/command-center/releases` | Static prototype only |
| P | Rollouts | Staged rollouts | list | `/command-center/rollouts` | Static prototype only |
| P | Integrations | Fleet health | list | `/command-center/integrations` | Static prototype only |
| P | Trust | Trust posture | list | `/command-center/trust` | Static prototype only |
| P | Compliance | Obligations due | list | `/command-center/compliance` | Static prototype only |
| P | Privacy | Requests due | list | `/command-center/privacy` | Static prototype only |
| P | Security | Alerts and findings | list | `/command-center/security` | Static prototype only |
| P | Access Reviews | Company access | queue | `/command-center/access-reviews` | Static prototype only |
| P | Break Glass | Emergency access with audit | list | `/command-center/break-glass` | Static prototype only |
| P | Incidents | Live and past | queue | `/command-center/incidents` | Static prototype only |
| P | SLOs | Targets and burn | dashboard | `/command-center/slos` | Static prototype only |
| P | Error Budgets | Remaining budget | dashboard | `/command-center/error-budgets` | Static prototype only |
| P | Audit Explorer | Company audit log | ledger | `/command-center/audit-explorer` | Static prototype only |
| P | Risks | Risk register | list | `/command-center/risks` | Static prototype only |
| P | Vendors | Vendor list | list | `/command-center/vendors` | Static prototype only |
| P | Finance | Finance summary | list | `/command-center/finance` | Static prototype only |
| P | Forecasts | Revenue and cash forecast | dashboard | `/command-center/forecasts` | Static prototype only |
| P | Board Reports | Board pack | dashboard | `/command-center/board-reports` | Static prototype only |
| P | People/Capacity | Who has time | list | `/command-center/people-capacity` | Static prototype only |
| P | Operator Preferences | Personal settings | settings | `/command-center/operator-preferences` | Static prototype only |
| Q | API Gateway | One entry for every API call | list | `/developers/api-gateway` | Planned |
| Q | API Documentation | Reference and guides | list | `/developers/api-documentation` | Planned |
| Q | OAuth/OIDC | App authorization | settings | `/developers/oauth-oidc` | Planned |
| Q | API Keys | Scoped keys | settings | `/developers/api-keys` | Planned |
| Q | Service Accounts | Machine identities | list | `/developers/service-accounts` | Planned |
| Q | Webhooks | Outbound events | list | `/developers/webhooks` | Planned |
| Q | Event Subscriptions | Subscribe to graph events | list | `/developers/event-subscriptions` | Planned |
| Q | SDKs | TypeScript first | list | `/developers/sdks` | Planned |
| Q | Sandbox Tenants | Safe test tenants | list | `/developers/sandbox-tenants` | Planned |
| Q | Test Data | Synthetic data only | list | `/developers/test-data` | Planned |
| Q | Developer Console | Apps, keys, logs | list | `/developers/developer-console` | Planned |
| Q | Integration Certification | Certified integrations | list | `/developers/integration-certification` | Planned |
| Q | Marketplace | Install apps | list | `/developers/marketplace` | Planned |
| Q | Partner Directory | Find partners | list | `/developers/partner-directory` | Planned |
| Q | App Review | Security and privacy review | list | `/developers/app-review` | Planned |
| Q | Data Scope Review | Minimum scopes | list | `/developers/data-scope-review` | Planned |
| Q | Tenant Installation | Admin installs with scopes | list | `/developers/tenant-installation` | Planned |
| Q | Versioning | Semantic versions | ledger | `/developers/versioning` | Planned |
| Q | Deprecation | 12-month notice | list | `/developers/deprecation` | Planned |
| Q | Metering | Usage per app | list | `/developers/metering` | Planned |
| Q | Revenue Sharing | Payouts | list | `/developers/revenue-sharing` | Planned |
| Q | Partner Support | Partner tickets | list | `/developers/partner-support` | Planned |
| Q | Partner Incident Notifications | Notify partners | list | `/developers/partner-incident-notifications` | Planned |
| R | Person | One person across roles | list | `/education-graph/person` | Native but incomplete |
| R | Identity | Logins and verified identity | list | `/education-graph/identity` | Native but incomplete |
| R | Institution | Tenant root | list | `/education-graph/institution` | Native but incomplete |
| R | Campus | Location | list | `/education-graph/campus` | Native but incomplete |
| R | School | College | list | `/education-graph/school` | Native but incomplete |
| R | Department | Unit | list | `/education-graph/department` | Native but incomplete |
| R | Program | Major or credential path | list | `/education-graph/program` | Native but incomplete |
| R | Term | Academic term | list | `/education-graph/term` | Native but incomplete |
| R | Course | Course master | list | `/education-graph/course` | Native but incomplete |
| R | Section | Offering | list | `/education-graph/section` | Native but incomplete |
| R | Enrollment | Person in section | list | `/education-graph/enrollment` | Native but incomplete |
| R | Requirement | Degree rule | list | `/education-graph/requirement` | Native but incomplete |
| R | Plan | Academic plan | list | `/education-graph/plan` | Native but incomplete |
| R | Task | To-do | assistant | `/education-graph/task` | Native but incomplete |
| R | Action | Office-owned action | list | `/education-graph/action` | Native but incomplete |
| R | Assignment | Course work | list | `/education-graph/assignment` | Native but incomplete |
| R | Resource | Material | list | `/education-graph/resource` | Native but incomplete |
| R | Learning Objective | Outcome | list | `/education-graph/learning-objective` | Native but incomplete |
| R | Grade | Grade entry | list | `/education-graph/grade` | Native but incomplete |
| R | Evidence | Learning evidence | list | `/education-graph/evidence` | Native but incomplete |
| R | Skill | Skill | settings | `/education-graph/skill` | Native but incomplete |
| R | Credential | Award | list | `/education-graph/credential` | Native but incomplete |
| R | Support Request | Ticket | list | `/education-graph/support-request` | Native but incomplete |
| R | Advisor | Advising relationship | list | `/education-graph/advisor` | Native but incomplete |
| R | Appointment | Booking | list | `/education-graph/appointment` | Native but incomplete |
| R | Community | Community | list | `/education-graph/community` | Native but incomplete |
| R | Organization | Club | list | `/education-graph/organization` | Native but incomplete |
| R | Campus Service | Service | list | `/education-graph/campus-service` | Native but incomplete |
| R | Student Account | Financial account | list | `/education-graph/student-account` | Native but incomplete |
| R | Opportunity | Job or internship | list | `/education-graph/opportunity` | Native but incomplete |
| R | Mentor | Mentor relationship | list | `/education-graph/mentor` | Native but incomplete |
| R | Employer | Employer | list | `/education-graph/employer` | Native but incomplete |
| R | Family Grant | Consent grant | list | `/education-graph/family-grant` | Native but incomplete |
| R | AI Interaction | AI usage record (no prompt content) | list | `/education-graph/ai-interaction` | Native but incomplete |
| R | Consent | Consent record | list | `/education-graph/consent` | Native but incomplete |
| R | Policy | Policy | settings | `/education-graph/policy` | Native but incomplete |
| R | Audit Event | Audit entry | ledger | `/education-graph/audit-event` | Native but incomplete |
| R | Tenant | Tenant | list | `/education-graph/tenant` | Native but incomplete |
| R | Customer | Commercial customer | list | `/education-graph/customer` | Native but incomplete |
| R | Outcome | Aggregate outcome | list | `/education-graph/outcome` | Native but incomplete |
| S | Vite/React/TypeScript | Experience layer | list | `/stack/vite-react-typescript` | Native but incomplete |
| S | Responsive web app | One app, all sizes | list | `/stack/responsive-web-app` | Native but incomplete |
| S | Mobile-first workflows | Phone first | builder | `/stack/mobile-first-workflows` | Native but incomplete |
| S | Accessible component system | This design system | list | `/stack/accessible-component-system` | Native but incomplete |
| S | Shared semantic tokens | styles.css tokens | list | `/stack/shared-semantic-tokens` | Native but incomplete |
| S | Offline-safe student workspace | Local-first student work | list | `/stack/offline-safe-student-workspace` | Native but incomplete |
| S | Role-aware routes | Routes by role | list | `/stack/role-aware-routes` | Native but incomplete |
| S | Capability-gated screens | Screens check capability | settings | `/stack/capability-gated-screens` | Native but incomplete |
| S | Workflow engine | Shared engine | builder | `/stack/workflow-engine` | Native but incomplete |
| S | Source/status layer | Labels on every datum | list | `/stack/source-status-layer` | Native but incomplete |
| S | AI interaction layer | Gateway client | list | `/stack/ai-interaction-layer` | Native but incomplete |
| S | CQRS read models | Projections per screen | list | `/stack/cqrs-read-models` | Native but incomplete |
| S | State synchronization | Realtime + polling | list | `/stack/state-synchronization` | Native but incomplete |
| S | Error recovery | Retry and resume | list | `/stack/error-recovery` | Native but incomplete |
| S | Supabase/Postgres | Primary store | list | `/stack/supabase-postgres` | Native but incomplete |
| S | RLS | Row-level security on every table | list | `/stack/rls` | Native but incomplete |
| S | Role/capability grants | Grant tables | settings | `/stack/role-capability-grants` | Native but incomplete |
| S | RPC commands | api.* commands | list | `/stack/rpc-commands` | Native but incomplete |
| S | Audit events | Append-only audit | ledger | `/stack/audit-events` | Native but incomplete |
| S | Approval workflows | Two-person approvals | builder | `/stack/approval-workflows` | Native but incomplete |
| S | Event outbox | Reliable events | list | `/stack/event-outbox` | Native but incomplete |
| S | Projection workers | Build read models | list | `/stack/projection-workers` | Native but incomplete |
| S | Edge Functions or server workers | Server logic | list | `/stack/edge-functions-or-server-workers` | Native but incomplete |
| S | Integration workers | Sync jobs | list | `/stack/integration-workers` | Native but incomplete |
| S | Storage | Private buckets by campus | list | `/stack/storage` | Native but incomplete |
| S | Auth | Supabase Auth + SSO | list | `/stack/auth` | Native but incomplete |
| S | Policy engine | Deterministic policy checks | settings | `/stack/policy-engine` | Native but incomplete |
| S | Vercel environments | Preview, staging, production | list | `/stack/vercel-environments` | Native but incomplete |
| S | CI/CD | Gates on every PR | list | `/stack/ci-cd` | Native but incomplete |
| S | Secrets management | No secrets in repo | list | `/stack/secrets-management` | Native but incomplete |
| S | Observability | Metrics | list | `/stack/observability` | Native but incomplete |
| S | Logs/traces | Structured logs | ledger | `/stack/logs-traces` | Native but incomplete |
| S | SLOs | Targets | dashboard | `/stack/slos` | Native but incomplete |
| S | Error budgets | Release brake | dashboard | `/stack/error-budgets` | Native but incomplete |
| S | Backups | Daily + PITR | list | `/stack/backups` | Native but incomplete |
| S | Restore drills | Quarterly | list | `/stack/restore-drills` | Native but incomplete |
| S | Incident management | Plan + roles | list | `/stack/incident-management` | Native but incomplete |
| S | Release controls | Flags and rollbacks | list | `/stack/release-controls` | Native but incomplete |
| U | Localization | Content per locale | list | `/global/localization` | Not started |
| U | Internationalization | No hard-coded strings | list | `/global/internationalization` | Not started |
| U | Translation | Human-reviewed translation | list | `/global/translation` | Not started |
| U | RTL readiness | Right-to-left layouts | list | `/global/rtl-readiness` | Not started |
| U | Timezone/calendar support | Local calendars and terms | calendar | `/global/timezone-calendar-support` | Not started |
| U | Currency/tax abstraction | Multi-currency | list | `/global/currency-tax-abstraction` | Not started |
| U | Regional data residency | Region-pinned data | list | `/global/regional-data-residency` | Not started |
| U | Regional privacy/legal review | GDPR and others | list | `/global/regional-privacy-legal-review` | Not started |
| U | Regional identity/payment providers | Local IdPs and processors | list | `/global/regional-identity-payment-providers` | Not started |
| U | Regional academic model configuration | ECTS, quarters, trimesters | list | `/global/regional-academic-model-configuration` | Not started |
| U | Regional accessibility requirements | EN 301 549 and others | list | `/global/regional-accessibility-requirements` | Not started |
| U | Global customer support model | Follow-the-sun support | list | `/global/global-customer-support-model` | Not started |
