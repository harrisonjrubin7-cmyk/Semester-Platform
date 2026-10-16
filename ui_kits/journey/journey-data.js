// Semester web-to-app journey: marketing → identity → onboarding → /app → first meaningful action.
// Source: uploads/Map the user journey from marketing site to native.pdf + now frontend_companysite_marketingsite and on bora.pdf (Oct 2026).
(function () {
const PATHS = [
 { id:'student', label:"I'm a student", sub:'Start free — organize your term', identity:'self', journey:'student', role:'student' },
 { id:'campus', label:'My institution invited me', sub:'Continue with your campus sign-in', identity:'sso', journey:'campus_student', role:'student' },
 { id:'applicant', label:"I'm applying to school", sub:'Plan your path', identity:'self', journey:'applicant', role:'applicant' },
 { id:'faculty', label:'I teach at an institution', sub:'Explore teaching tools', identity:'sso', journey:'faculty', role:'faculty' },
 { id:'advisor', label:'I advise or support students', sub:'Request access through your campus', identity:'sso', journey:'advisor', role:'advisor' },
 { id:'admin', label:'I run Semester for my institution', sub:'Accept your admin invitation', identity:'sso', journey:'admin', role:'institution_admin' },
 { id:'guardian', label:"I'm a parent or guardian", sub:'Your student invites you', identity:'invite', journey:'guardian', role:'guardian' },
 { id:'buyer', label:"I'm exploring Semester for my organization", sub:'Design a pilot — no account needed', identity:'lead', journey:'buyer', role:'institution_buyer' },
 { id:'developer', label:"I'm a partner or developer", sub:'Build with Semester', identity:'dev', journey:'developer', role:'developer' }
];
const STATES = ['not_started','identity_incomplete','verification_pending','institution_context_pending','required_consent_pending','profile_minimum_complete','setup_in_progress','first_action_pending','activation_achieved','expanded_adoption','paused','support_required','completed'];
const INSTITUTIONS = [
 { id:'campus-a', name:'Campus A University', note:'Demo institution · SSO enabled', sso:true },
 { id:'campus-b', name:'Campus B College', note:'Demo institution · invitation only', sso:false }
];
// Identity steps by path. Every path ends in the same canonical identity + tenant + role + consent record.
const IDENTITY = {
 self:[
  { id:'email', state:'identity_incomplete', title:'Create your account', body:'Use your email or a passkey. Password managers and paste work everywhere.', type:'form', fields:[['email','Email','email','you@example.edu']], cta:'Continue', alt:'Use a passkey instead', event:'signup_started' },
  { id:'verify', state:'verification_pending', title:'Check your inbox', body:'We sent a sign-in link. It brings you back right here — your place is saved.', type:'verify', cta:'Open the link (demo)', event:'email_verified' },
  { id:'terms', state:'required_consent_pending', title:'Terms and privacy', body:'Plain-language summary: Semester never sells your data, AI never sees your school records, and you can export or delete your data any time.', type:'consent', items:['I agree to the Terms of Service (v2026-10)','I have read the Privacy Notice (v2026-10)'], cta:'Agree and continue', event:'consent_recorded' }
 ],
 sso:[
  { id:'pick', state:'institution_context_pending', title:'Find your institution', body:'Search for your school. If you don\'t see it, you can still start free on your own.', type:'institution', cta:'Continue with campus sign-in', event:'institution_selected' },
  { id:'idp', state:'verification_pending', title:'Campus sign-in', body:'You are on your institution\'s sign-in page (demo identity provider). Semester never sees your campus password.', type:'idp', cta:'Sign in with campus account (demo)', event:'sso_completed' },
  { id:'member', state:'profile_minimum_complete', title:'Membership confirmed', body:'Your institution confirmed you are an active member. Your role comes from your institution, not from this page.', type:'member', cta:'Continue', event:'membership_validated' },
  { id:'notices', state:'required_consent_pending', title:'Notices from your institution', body:'Your institution has configured these notices. They are versioned and you can review them later in Privacy & data.', type:'consent', items:['I acknowledge the institution notice on Semester (v3)','I agree to the Semester Terms (v2026-10)'], cta:'Acknowledge and continue', event:'consent_recorded' }
 ],
 invite:[
  { id:'code', state:'identity_incomplete', title:'Accept your student\'s invitation', body:'Your student sends the invitation from Semester. Open the link from their email, or enter the code.', type:'form', fields:[['code','Invitation code','text','e.g. FAM-7Q2K']], cta:'Continue', event:'invite_opened' },
  { id:'verify', state:'verification_pending', title:'Verify it\'s you', body:'We sent a sign-in link to the email your student entered.', type:'verify', cta:'Open the link (demo)', event:'email_verified' },
  { id:'terms', state:'required_consent_pending', title:'What you can see', body:'Your student chose what to share and for how long. They can change or end it at any time, and they see every time you view.', type:'consent', items:['I understand my access is set and can be ended by the student'], cta:'Continue', event:'consent_recorded' }
 ],
 lead:[
  { id:'form', state:'identity_incomplete', title:'Design a registration-readiness pilot', body:'Six fields. No account, no student setup. A person replies within one business day.', type:'form', fields:[['name','Name','text',''],['email','Work email','email','name@university.edu'],['org','Institution or organization','text',''],['role','Your role','text','e.g. University Registrar'],['use','Primary use case','text','e.g. registration holds before priority registration']], consent:'Semester may contact me about this request.', cta:'Send request', event:'lead_submitted' },
  { id:'verify', state:'verification_pending', title:'Confirm your work email', body:'So we can share security and pilot materials safely.', type:'verify', cta:'Open the link (demo)', event:'email_verified' },
  { id:'schedule', state:'setup_in_progress', title:'Pick a discovery time', body:'30 minutes with the founder. Or skip and we\'ll email you.', type:'choice', options:['Tue 10:00 ET','Wed 14:00 ET','Thu 11:00 ET','Email me instead'], cta:'Confirm', event:'discovery_booked' }
 ],
 dev:[
  { id:'email', state:'identity_incomplete', title:'Create a developer account', body:'Use your work email. Sandbox only — no production data.', type:'form', fields:[['email','Email','email','dev@partner.com'],['org','Organization','text','']], cta:'Continue', event:'signup_started' },
  { id:'verify', state:'verification_pending', title:'Check your inbox', body:'We sent a sign-in link.', type:'verify', cta:'Open the link (demo)', event:'email_verified' },
  { id:'terms', state:'required_consent_pending', title:'Developer terms', body:'Synthetic data only in sandbox. Minimum scopes. App review before any institution can install.', type:'consent', items:['I accept the Developer Terms (draft v0.3)'], cta:'Accept', event:'consent_recorded' }
 ]
};
// Onboarding: 3–5 steps per role, then the app. Activation happens in the app, not in a tour.
const JOURNEYS = {
 student:{ name:'Student (self-serve)', version:'student.v3', steps:[
  { id:'goal', title:'What would make this semester easier?', why:'Routes the journey toward a real goal', type:'choice', options:['Organize my term','Prepare for registration','Keep up with coursework','Plan my degree','Explore careers'], key:'goal', event:'goal_selected' },
  { id:'context', title:'Which term?', why:'Enables relevant planning without over-collecting', type:'choice', options:['Fall 2026 (now)','Spring 2027 (next)'], key:'term', skippable:true, event:'context_confirmed' },
  { id:'setup', title:'Add one course', why:'Creates useful real data', type:'form', fields:[['course','Course','text','e.g. BIO 201 — Cell Biology'],['due','Next deadline (optional)','date','']], key:'course', event:'academic_object_created' }
 ], app:'today', activation:'student_first_action' },
 campus_student:{ name:'Student (institution-linked)', version:'campus_student.v2', steps:[
  { id:'official', title:'Your official information is in', why:'Shows source and freshness before anything else', type:'official', event:'official_data_viewed' },
  { id:'goal', title:'What do you want to do first?', why:'Picks the first action on Today', type:'choice', options:['Check I can register','See this week','Find campus help'], key:'goal', event:'goal_selected' }
 ], app:'today', activation:'student_first_action' },
 applicant:{ name:'Applicant', version:'applicant.v1', steps:[
  { id:'goal', title:'What are you working toward?', why:'Routes to the right plan', type:'choice', options:['Start college','Transfer','Graduate school','Return to finish'], key:'goal', event:'goal_selected' },
  { id:'interest', title:'Programs you\'re considering', why:'Builds a comparison', type:'form', fields:[['program','Program or school','text','e.g. Nursing, Campus A']], key:'program', event:'program_saved' }
 ], app:'path', activation:'applicant_plan_saved' },
 faculty:{ name:'Faculty', version:'faculty.v2', steps:[
  { id:'course', title:'Choose a course to set up', why:'Real course from your institution', type:'choice', options:['BIO 201 · Section 01 (Fall 2026)','BIO 405 · Seminar (Fall 2026)'], key:'course', event:'course_selected' },
  { id:'policy', title:'Review the course AI rules', why:'Students see your policy before AI helps', type:'choice', options:['Allowed with citation','Guided — hints only','Off for this course'], key:'ai', event:'course_policy_reviewed' },
  { id:'team', title:'Invite your teaching team', why:'TAs get section-scoped access that expires', type:'form', fields:[['ta','TA email (optional)','email','ta@campus-a.edu']], skippable:true, event:'team_invited' }
 ], app:'studio', activation:'faculty_course_configured' },
 advisor:{ name:'Advisor', version:'advisor.v2', steps:[
  { id:'caseload', title:'Your caseload is confirmed', why:'Access only to your assigned students', type:'info', body:'42 assigned students · Fall 2026 · from your institution\'s advising assignments.', event:'caseload_confirmed' },
  { id:'notify', title:'How should we reach you?', why:'Work queue without inbox noise', type:'choice', options:['Daily digest','Only urgent','In-app only'], key:'notify', event:'preference_saved' }
 ], app:'caseload', activation:'advisor_workflow_completed' },
 admin:{ name:'Institution admin', version:'admin.v2', steps:[
  { id:'auth', title:'Administrative access confirmed', why:'Two admins required before launch', type:'info', body:'You are 1 of 2 required institution admins. Your access is scoped to Campus A University.', event:'admin_validated' },
  { id:'policy', title:'Review policy defaults', why:'Everything starts off', type:'choice', options:['Review now','Review in the console'], key:'policy', event:'policy_reviewed' }
 ], app:'console', activation:'admin_governed_action' },
 guardian:{ name:'Family', version:'guardian.v1', steps:[
  { id:'scope', title:'What your student shared', why:'No surprises', type:'info', body:'Schedule and balance · until Dec 20, 2026. Grades are not shared.', event:'scope_viewed' }
 ], app:'family', activation:'guardian_viewed_shared' },
 buyer:{ name:'Institution buyer', version:'buyer.v1', steps:[], app:'pilot', activation:'buyer_discovery_milestone' },
 developer:{ name:'Developer', version:'developer.v1', steps:[
  { id:'sandbox', title:'Create your sandbox', why:'Synthetic tenant with test data', type:'choice', options:['Create sandbox tenant'], key:'sandbox', event:'sandbox_created' },
  { id:'app', title:'Register an app', why:'Scoped credentials', type:'form', fields:[['appname','App name','text','e.g. Room booking sync']], key:'appname', event:'app_registered' }
 ], app:'sandbox', activation:'developer_test_event' }
};
const ACTIVATION = {
 student_first_action:'Completes a real task, plan or registration-readiness step',
 applicant_plan_saved:'Saves a pathway plan',
 faculty_course_configured:'Publishes a real course item',
 advisor_workflow_completed:'Completes a check-in, referral, plan or appointment',
 admin_governed_action:'Completes a governed tenant action (SSO, role, module)',
 guardian_viewed_shared:'Views what the student shared',
 buyer_discovery_milestone:'Books discovery or requests a pilot plan',
 developer_test_event:'Sends a successful sandbox API call or webhook'
};
// Safe return destinations: allowlist, never an open redirect, never grants anything.
const RETURN = /^\/app(\/(today|plan|course\/[a-z0-9-]{1,40}|studio|caseload|console|pilot|sandbox|path|family|settings(\/[a-z-]{1,30})?))?$/;
function safeReturn(p) { return typeof p === 'string' && RETURN.test(p) ? p : '/app'; }
const SOURCES = ['organic_search','paid_campaign','social','youtube','email','referral','institution_invite','partner','direct'];
const EVENTS = ['marketing_viewed','cta_clicked','role_selected','preview_started','preview_value_generated','preview_claimed','account_created','email_verification_sent','sso_started','consent_required','journey_assigned','onboarding_step_viewed','first_app_route_loaded','first_value_rendered','first_meaningful_action_completed','pwa_install_prompted','pwa_installed','native_download_selected','native_app_opened','handoff_created','deep_link_restored','support_handoff_started','support_handoff_resolved','path_selected','signup_started','email_verified','institution_selected','sso_completed','membership_validated','consent_recorded','lead_submitted','discovery_booked','onboarding_step_completed','onboarding_step_skipped','onboarding_resumed','app_opened','first_action_completed','activation_achieved','reminder_opted_in','install_offered','install_accepted','support_requested'];
const DROPOFF = [
 ['Homepage','Can\'t tell who it\'s for','Two CTAs: student and institution; role paths','CTA click-through'],
 ['Product pages','Broad vision, no next step','Each page tied to one workflow and CTA','Product-page conversion'],
 ['Signup form','Leaves before account exists','Email/passkey/SSO first; profile later','Signup start → account'],
 ['Email verification','Doesn\'t return from inbox','Magic link; return path preserved; resend/help','Verification completion'],
 ['Institution selection','Can\'t find school','Search + "I don\'t see mine" fallback','Institution match rate'],
 ['Forced SSO','Wrong identity route','Explain why; institutional support hand-off','SSO completion'],
 ['Long onboarding','Skips, no relevance','One journey per role, 3–5 steps','Onboarding completion'],
 ['Early permission prompts','Feels invasive','Ask after the benefit is visible','Permission acceptance'],
 ['Empty first screen','No reason to return','Real Today view + one prioritized action','Time to first value'],
 ['No recovery','Loses progress','Persistent resume point, drafts, support','Resume → complete'],
 ['Forced download','Store hop breaks the flow','Browser-first; install optional after value','Browser → app continuation'],
 ['Unclear official data','Guidance mistaken for record','Source, freshness and official/guidance labels','Correction rate'],
 ['Auth friction','Password/CAPTCHA/OTP blocks','Password managers, paste, passkeys, SSO','Auth success rate']
];
window.JOURNEY = { PATHS, STATES, INSTITUTIONS, IDENTITY, JOURNEYS, ACTIVATION, safeReturn, SOURCES, EVENTS, DROPOFF };
})();
