// End-to-end flows: each step names the actor, the server entry point, and the tables it reads (r) or writes (w).
window.DB_FLOWS = [
  { id: 'readiness', name: 'Registration readiness', who: 'Student', steps: [
    ['SIS sync worker', 'worker: sis.sync (service role)', ['w acad.terms', 'w acad.holds', 'w acad.enrollments', 'w opsx.sync_runs']],
    ['Readiness builder', 'worker: readiness.rebuild', ['r acad.holds', 'r acad.requirements', 'w acad.readiness_items']],
    ['Student opens checklist', 'select acad.readiness_items (RLS ri_self)', ['r acad.readiness_items']],
    ['Routes the hold', 'api.route_blocker', ['w acad.office_handoffs', 'w acad.readiness_items', 'w audit.events']],
    ['Bursar resolves', 'api.resolve_handoff', ['w acad.office_handoffs', 'w acad.readiness_items (→ stale)', 'w ctl.outbox']],
    ['Next sync confirms', 'worker: sis.sync', ['w acad.holds (cleared_at)', 'w acad.readiness_items (→ ready_as_of)']],
    ['Books advising', 'api.book_advising', ['w acad.advising_slots', 'w acad.readiness_items', 'w ctl.outbox']],
  ] },
  { id: 'console', name: 'Operator opens the console', who: 'Semester staff', steps: [
    ['Signs in with MFA', 'Supabase Auth', ['r auth.users']],
    ['Capabilities load', 'loadMyCapabilities()', ['r ctl.grants', 'r ctl.capabilities']],
    ['Opens Support', '#/console/support', ['r opsx.support_cases (RLS sc_staff)']],
    ['Student approves access', 'api.approve_support_access', ['w opsx.support_access_windows', 'w opsx.case_events', 'w audit.events']],
    ['Window expires (≤ 4 h)', 'check constraint + RLS', ['r opsx.support_access_windows']],
  ] },
  { id: 'action', name: 'High-impact action', who: 'Registrar', steps: [
    ['Requests change', 'api.request_action', ['w ctl.action_requests', 'w audit.events']],
    ['Second person approves', 'api.decide_action', ['w ctl.action_approvals']],
    ['Executes', 'api.execute_action', ['w ctl.action_requests', 'w ctl.outbox']],
  ] },
  { id: 'message', name: 'Message to an office', who: 'Student', steps: [
    ['Sends', 'api.send_message', ['w comms.messages', 'w ctl.outbox', 'r core.rate_counters']],
    ['Outbox publisher', 'worker: outbox.publish', ['r ctl.outbox', 'w ctl.outbox (published_at)']],
    ['Notification dispatcher', 'worker: notify.dispatch', ['r comms.preferences', 'w comms.notifications', 'r onboard.push_tokens']],
  ] },
  { id: 'access', name: 'Governed access saga', who: 'System', steps: [
    ['Intent submitted', 'POST /access-requests', ['w opsx.access_jobs']],
    ['Worker claims (lease + fence)', 'worker: access.tick', ['w opsx.access_jobs']],
    ['PE evaluates (OPA)', 'policies/semester_access.rego', ['r ctl.grants']],
    ['PA prepares, PEP installs, verify', 'participant adapters', ['w opsx.access_jobs', 'w audit.events']],
    ['Revocation / cleanup', 'worker: access.tick', ['w opsx.access_jobs (CLOSED only with evidence)']],
  ] },
  { id: 'pilot', name: 'Institution pilot', who: 'Semester sales + institution', steps: [
    ['Account and opportunity', 'console: Customers', ['w biz.accounts', 'w biz.opportunities']],
    ['Contracts recorded', 'console: Contracts register', ['w biz.contracts']],
    ['Pilot and measures', 'console: Pilots', ['w biz.pilots', 'w biz.pilot_measures']],
    ['Integrations configured', 'console: Integration health', ['w opsx.integrations', 'w opsx.sync_runs']],
    ['Results', 'console: Pilots', ['w biz.pilot_measures (measured | not_measured)']],
  ] },
  { id: 'privacy', name: 'Privacy request', who: 'Student / institution', steps: [
    ['Request received', 'console: Privacy requests', ['w opsx.privacy_requests']],
    ['Identity verified, institution decides', 'console', ['w opsx.privacy_requests']],
    ['Export or delete', 'worker: privacy.fulfil', ['r acad.*', 'r comms.*', 'w opsx.privacy_requests (evidence_ref)']],
  ] },
  { id: 'market', name: 'Marketplace offer', who: 'Student', steps: [
    ['Lists item', 'api.create_listing', ['w market.listings', 'w audit.events']],
    ['Makes offer', 'api.make_offer', ['w market.offers']],
    ['Pays', 'fin payment rails', ['w fin.payment_attempts', 'w fin.payment_transitions', 'w fin.ledger_journals']],
  ] },
];
window.DB_WORKERS = [
  ['sis.sync', 'Every 15 min per tenant, plus on demand', 'Read-only SIS pull → acad mirrors; sets freshness; records opsx.sync_runs'],
  ['lms.sync', 'Every 15 min', 'Courses, sections, assignments, grades mirrors'],
  ['readiness.rebuild', 'After each sync, per changed student', 'Recomputes acad.readiness_items; never marks ready without fresh evidence'],
  ['outbox.publish', 'Continuous', 'ctl.outbox → event bus; at-least-once; consumers dedupe on id'],
  ['notify.dispatch', 'On outbox events', 'Respects quiet hours and per-kind preferences; safety bypasses quiet hours'],
  ['access.tick', 'Due jobs (next_attempt_at)', 'Control-plane baseline worker; lease + fencing; OPA transition guard'],
  ['privacy.fulfil', 'On approved requests', 'Export bundle or deletion; writes evidence reference'],
  ['retention.sweep', 'Nightly', 'Deletes expired notifications, drafts, revoked tokens; tenant exit deletions'],
  ['renewals.notice', 'Daily', 'biz.contracts.renewal_notice_on → owner task'],
];
