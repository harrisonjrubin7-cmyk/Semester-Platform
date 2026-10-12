import type { ScreenDefinition } from './catalog';

export const workspaceNames: Record<string, string> = {
  public: 'Public site', applicant: 'Applicant', student: 'Student', faculty: 'Faculty', institution: 'Institution',
  advisor: 'Advisor', ta: 'Teaching assistant', finops: 'Financial operations', support: 'Support desk', admissions: 'Admissions',
  career: 'Career hub', campus: 'Campus services', marketplace: 'Marketplace', insights: 'Insights', trust: 'Trust console',
  family: 'Family', alumni: 'Alumni', employer: 'Employer', company: 'Company', operations: 'Operations', os: 'Semester OS',
  success: 'Student success', executive: 'Executive OS', clubs: 'Club leader', social: 'Semester Social', studio: 'Semester Studio',
};

export const workspaceGroups = [
  { label: 'My semester', workspaces: ['student', 'studio', 'social', 'clubs'] },
  { label: 'Teaching & success', workspaces: ['faculty', 'ta', 'advisor', 'success'] },
  { label: 'Campus operations', workspaces: ['institution', 'admissions', 'finops', 'campus', 'career', 'marketplace', 'support'] },
  { label: 'Governance', workspaces: ['executive', 'insights', 'trust', 'operations', 'company', 'os'] },
  { label: 'Community', workspaces: ['applicant', 'family', 'alumni', 'employer', 'public'] },
];

export const workspaceHome: Record<string, string> = {
  student: 'today', studio: 'home', social: 'home', clubs: 'home', faculty: 'home', ta: 'queue', advisor: 'home', success: 'risk',
  institution: 'os', admissions: 'applicants', finops: 'queue', campus: 'requests', career: 'postings', marketplace: 'queue', support: 'desk',
  executive: 'overview', insights: 'readiness', trust: 'audit', operations: 'home', company: 'home', os: 'home', applicant: 'application',
  family: 'shared', alumni: 'home', employer: 'roles', public: 'home',
};

export const modes = ['Native', 'Connected read', 'Connected transaction', 'Import', 'Handoff'] as const;

export function modeFor(workspace: string, slug: string): typeof modes[number] {
  if (['grades', 'transcript', 'bill', 'records', 'audit'].some((word) => slug.includes(word))) return 'Connected read';
  if (['registration', 'register', 'posting', 'payments', 'sync'].some((word) => slug.includes(word))) return 'Connected transaction';
  if (['housingportal', 'lti', 'recover'].some((word) => slug.includes(word))) return 'Handoff';
  if (workspace === 'student' && slug === 'calendar') return 'Import';
  return 'Native';
}

export function screenProfile(definition: ScreenDefinition) {
  const key = `${definition.workspace}:${definition.slug}:${definition.component}`;
  const seed = [...key].reduce((sum, character) => (sum * 31 + character.charCodeAt(0)) % 997, 17);
  const text = `${definition.slug} ${definition.label}`.toLowerCase();
  const kind = /forecast|analytics|insight|trend|report|outcome|readiness/.test(text) ? 'forecast' : /settings|config|policy|privacy|permission|authority|control/.test(text) ? 'governance' : /calendar|schedule|timeline|deadline|term/.test(text) ? 'timeline' : /people|member|roster|advisor|family|alumni|employer/.test(text) ? 'people' : /queue|case|request|review|approval|ticket|inbox/.test(text) ? 'queue' : 'workspace';
  const noun = kind === 'forecast' ? 'signal' : kind === 'governance' ? 'control' : kind === 'timeline' ? 'milestone' : kind === 'people' ? 'person' : kind === 'queue' ? 'case' : 'item';
  const context = `${definition.label} · ${workspaceNames[definition.workspace]}`;
  const items = [`${definition.label} overview`, `${definition.label} ${noun} review`, `${workspaceNames[definition.workspace]} handoff`, `${definition.label} evidence`];
  const values = [seed % 37 + 4, seed % 18 + 2, seed % 9 + 1, seed % 5];
  return {
    seed, kind, context, singular: noun, items, symbols: ['Aa', '∑', '◎', '↗'], tool: kind === 'forecast' ? '↗' : kind === 'timeline' ? '◷' : 'H1',
    status: `${definition.label} saved`, title: kind === 'forecast' ? `${definition.label} outlook` : `Build ${definition.label.toLowerCase()} with confidence`,
    description: `${definition.label} is a dedicated ${kind} surface for the ${workspaceNames[definition.workspace]} workspace.`,
    section: kind === 'queue' ? `${definition.label} queue` : kind === 'governance' ? `${definition.label} controls` : kind === 'timeline' ? `${definition.label} timeline` : kind === 'people' ? `${definition.label} directory` : `${definition.label} workspace`,
    detail: `This view is scoped to ${definition.label.toLowerCase()}, with its own actions, status, evidence, and handoff path.`,
    formula: kind === 'forecast' ? 'confidence = evidence × freshness' : kind === 'timeline' ? 'next step → owner → due date' : `${definition.component} · ${definition.slug}`,
    prompt: `Start a ${definition.label.toLowerCase()} ${noun}, add evidence, or ask Semester for a guided next step.`,
    kicker: kind === 'forecast' ? 'FORECAST SIGNALS' : kind === 'governance' ? 'CONTROL REGISTER' : kind === 'timeline' ? 'UPCOMING' : kind === 'people' ? 'PEOPLE & ROLES' : kind === 'queue' ? 'ACTIVE QUEUE' : 'OPEN WORK',
    nextKicker: kind === 'governance' ? 'CONTROLLED ACTION' : 'RECOMMENDED NEXT', cta: kind === 'forecast' ? 'Open scenario' : kind === 'governance' ? 'Review control' : `Start ${noun}`,
    icon: kind === 'governance' ? 'shield' : kind === 'people' ? 'message' : 'spark', badges: ['', 'Open', kind === 'governance' ? 'Controlled' : 'Ready', 'Saved'],
    metrics: [[`Active ${noun}s`, String(values[0]), `${values[1]} changed today`], ['Due soon', String(values[1]), `Next ${values[2]} days`], ['Owners', String(values[2]), `${Math.max(1, values[2] - 2)} online`], ['Exceptions', String(values[3]), values[3] ? 'Review required' : 'None open']] as [string, string, string][],
    bars: Array.from({ length: 9 }, (_, index) => 25 + ((seed + index * 17) % 68)),
    rows: items.map((item, index) => [`${definition.slug.slice(0, 4).toUpperCase()}-${String((seed + index * 37) % 900 + 100)}`, item, index % 2 ? 'Harrison Rubin' : 'Semester system', `${index * 13 + 6} min`, index === 0 && seed % 3 === 0 ? 'High' : index === 2 ? 'Watch' : 'Normal']),
    activityTitle: `${definition.label} activity`, activity: [`${definition.label} evidence refreshed`, `${definition.label} policy evaluated`, `${definition.label} owner confirmed`, `${definition.label} export prepared`],
    community: [`I added an update to ${definition.label.toLowerCase()} and would value a second look before the next step.`, `The ${definition.label.toLowerCase()} group is meeting this week—join if this is part of your semester.`],
  };
}
