# Company site architecture

_Semester growth and onboarding · 2026-10-05 · Prototype: ui_kits/journey/index.html. Code: handoff/semester-platform (110_onboarding_growth.sql, lib/auth/return-path.ts, tests/onboarding.test.ts). Design-stage until code, tests and release evidence exist._

Public and indexable where appropriate; app, tenant, admin, support and ops routes are never public or indexed.

| Route | Indexing |
|---|---|
| `/` | index |
| `/product` | index |
| `/product/student-os` | index |
| `/product/course-studio` | index |
| `/product/academic-operations` | index |
| `/product/student-success` | index |
| `/product/ai` | index |
| `/product/campus` | index |
| `/product/career` | index |
| `/solutions` | index |
| `/solutions/students` | index |
| `/solutions/institutions` | index |
| `/solutions/educators` | index |
| `/solutions/student-success` | index |
| `/solutions/registrar` | index |
| `/solutions/it-security` | index |
| `/solutions/campus-services` | index |
| `/solutions/career-alumni` | index |
| `/solutions/online-programs` | index |
| `/pricing` | index |
| `/pilot` | index |
| `/demo` | index |
| `/contact` | index |
| `/resources` | index |
| `/resources/guides` | index |
| `/resources/research` | index |
| `/resources/webinars` | index |
| `/resources/case-studies` | index |
| `/blog` | index |
| `/compare` | index |
| `/integrations` | index |
| `/migration` | index |
| `/developers` | index |
| `/marketplace` | index |
| `/partners` | index |
| `/trust` | index |
| `/trust/security` | index |
| `/trust/privacy` | index |
| `/trust/accessibility` | index |
| `/trust/ai-governance` | index |
| `/trust/subprocessors` | index |
| `/status` | index |
| `/company` | index |
| `/company/about` | index |
| `/company/careers` | index |
| `/company/news` | index |
| `/legal/privacy` | index |
| `/legal/terms` | index |
| `/legal/cookies` | index |
| `/legal/dpa` | index |
| `/legal/accessibility` | index |
| `/auth/sign-up` | noindex |
| `/auth/sign-in` | noindex |
| `/auth/recover` | noindex |
| `/auth/verify` | noindex |
| `/onboarding` | noindex |
| `/download` | index |
| `/app` | noindex |

Homepage order: category statement · problem · student CTA · institution CTA · product visual (labelled prototype until real) · how it works · role paths · outcomes · trust preview · pilot section · modules · integration-to-native position · real proof only · resources · FAQ · final CTA.
