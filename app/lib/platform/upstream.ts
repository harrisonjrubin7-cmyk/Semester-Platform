export const upstreamSemester = {
  repository: 'https://github.com/harrisonjrubin7-cmyk/semester',
  production: 'https://harrisonjrubin7-cmyk.github.io/semester/',
  commit: 'bcc1e3b',
  branch: 'main',
  stats: {
    destinations: 64,
    studyModes: 11,
    routedScreens: 100,
    migrations: 238,
    tests: 1620,
  },
} as const;

export const upstreamStudyModes = [
  'Cards', 'Read', 'Field guide', 'Watch', 'Slides', 'Doc', 'Quiz', 'Figures', 'Cases', 'Cram', 'Listen',
] as const;

export type UpstreamDestination = {
  screen: string;
  label: string;
  group: string;
};

// Synchronized from app/src/lib/nav.ts on upstream main at bcc1e3b.
export const upstreamDestinations: readonly UpstreamDestination[] = [
  ['home', 'Today', 'Semester'], ['brief', 'Reports', 'Semester'], ['courses', 'Courses', 'Courses'],
  ['degree', 'The degree', 'Courses'], ['calendar', 'Calendar', 'Semester'], ['study', 'Study', 'Study'],
  ['meet', 'Where courses meet', 'Study'], ['ask', 'Ask Semester', 'Study'], ['work', 'Work on it', 'Semester'],
  ['update', 'Add a reading', 'Study'], ['analyse', 'Analyse data', 'Study'], ['draw', 'Draw it', 'Make'],
  ['solve', 'Work the problem', 'Study'], ['exam', 'Practice paper', 'Study'], ['deck', 'Make a deck', 'Make'],
  ['write', 'Write a document', 'Make'], ['sheet', 'Sheet or table', 'Make'], ['equations', 'Equations, and the graph', 'Make'],
  ['sources', 'Sources', 'Courses'], ['create', 'Create', 'Make'], ['essay', 'Draft it', 'Make'],
  ['import', 'Add a course', 'Courses'], ['edit', 'Edit the course', 'Courses'], ['registrar', 'Term deadlines', 'Courses'],
  ['announce', 'A change to a date', 'Courses'], ['costs', 'Money', 'Life'], ['call', 'Video call', 'Campus'],
  ['groupwork', 'Group work', 'Campus'], ['meals', 'Meal plan', 'Campus'], ['housing', 'Housing', 'Campus'],
  ['runway', 'Exam runway', 'Study'], ['behind', 'Catching up', 'Semester'], ['hub', 'Notices', 'Semester'],
  ['launchpad', 'Launchpad', 'Semester'], ['maps', 'Getting there', 'Campus'], ['mail', 'Email', 'Life'],
  ['yes', 'Registration', 'Courses'], ['classmates', 'Classmates', 'Campus'], ['activities', 'Activities', 'Campus'],
  ['people', 'People and letters', 'Life'], ['pathway', 'Pathway', 'Beyond'], ['opportunities', 'Opportunities', 'Beyond'],
  ['career', 'Career', 'Beyond'], ['family', 'Family', 'Beyond'], ['athletics', 'Athletics', 'Beyond'],
  ['nil', 'NIL deals', 'Beyond'], ['applying', 'Applications', 'Beyond'], ['proof', 'Check the writing', 'Make'],
  ['clocks', 'Timers and alarms', 'Life'], ['mine', 'Personal', 'Life'], ['me', 'Progress', 'Semester'],
  ['account', 'Account', 'Data'], ['profile', 'Profile', 'Life'], ['university', 'University', 'Campus'],
  ['links', 'Links', 'Life'], ['support', 'Support', 'Life'], ['connect', 'Connect accounts', 'Data'],
  ['data', 'Your data and how it is running', 'Data'], ['privacy', 'Privacy and your rights', 'Data'],
  ['export', 'Take it with you', 'Data'], ['settings', 'Settings', 'Data'], ['notifs', 'Alerts', 'Data'],
  ['help', 'How this works', 'Data'], ['community', 'Community', 'Beyond'],
].map(([screen, label, group]) => ({ screen, label, group }));

export const upstreamGroups = ['Semester', 'Courses', 'Study', 'Make', 'Campus', 'Life', 'Beyond', 'Data'] as const;
