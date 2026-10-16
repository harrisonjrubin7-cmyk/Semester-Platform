// Shared demo data for the Semester prototype. One store across every workspace so flows connect:
// a hold routed by the student appears in the bursar's handoff queue; a submission appears in the instructor's queue.
window.SEM_DATA = {
  people: {
    maya: { id: 'maya', name: 'Maya Chen', initials: 'MC', email: 'maya.chen@vanderbilt.edu', workspaces: ['student'] },
    alvarez: { id: 'alvarez', name: 'Dr. Ines Alvarez', initials: 'IA', email: 'i.alvarez@vanderbilt.edu', workspaces: ['faculty'] },
    lee: { id: 'lee', name: 'Kendra Lee', initials: 'KL', email: 'k.lee@vanderbilt.edu', workspaces: ['institution'] },
    ana: { id: 'ana', name: 'Ana Chen', initials: 'AC', email: 'ana.chen@gmail.com', workspaces: ['family'] },
    diaz: { id: 'diaz', name: 'Rafael Diaz', initials: 'RD', email: 'r.diaz@vanderbilt.edu', workspaces: ['ta'] },
    okafor: { id: 'okafor', name: 'Chidi Okafor', initials: 'CO', email: 'c.okafor@rymanhealth.com', workspaces: ['employer'] },
    reyes: { id: 'reyes', name: 'Lucía Reyes', initials: 'LR', email: 'lucia.reyes@alumni.vanderbilt.edu', workspaces: ['alumni'] },
    sam: { id: 'sam', name: 'Sam Ortiz', initials: 'SO', email: 'sam@semester.co', workspaces: ['company', 'operations'] },
    ceo: { id: 'ceo', name: 'Founder · Semester', initials: 'FS', email: 'founder@semester.co', workspaces: ['business', 'company'] },
  },
  term: { code: '2027SP', name: 'Spring 2027', regOpens: 'Mon 2 Nov, 7:00 am' },
  courses: [
    { id: 'chem210', code: 'CHEM 210', title: 'Organic Chemistry I', section: '02', instructor: 'Dr. Ines Alvarez', meets: 'MWF 10:00–10:50 · Stevenson 4309', next: 'Wed 10:00', grade: 'B+ (working)' },
    { id: 'math155', code: 'MATH 155B', title: 'Accelerated Calculus II', section: '01', instructor: 'Prof. R. Nakamura', meets: 'TR 9:35–10:50 · Stevenson 1206', next: 'Thu 9:35', grade: 'A− (working)' },
    { id: 'engl120', code: 'ENGL 120W', title: 'Writing and the Archive', section: '04', instructor: 'Dr. P. Okafor', meets: 'TR 1:15–2:30 · Benson 200', next: 'Thu 1:15', grade: '—' },
  ],
  assignments: [
    { id: 'lab3', course: 'chem210', title: 'Lab report 3: Titration', due: 'Fri 9 Oct, 11:59 pm', dueIn: '3 days', state: 'open', points: 40 },
    { id: 'ps6', course: 'math155', title: 'Problem set 6', due: 'Thu 8 Oct, 9:35 am', dueIn: '2 days', state: 'submitted', receipt: 'SUB-7F21C0', points: 25 },
    { id: 'essay2', course: 'engl120', title: 'Archive essay draft', due: 'Tue 13 Oct, 1:15 pm', dueIn: '7 days', state: 'open', points: 100 },
  ],
  grades: [
    { course: 'chem210', item: 'Lab report 2', score: '34 / 40', state: 'returned', feedback: 'Strong method; cite the uncertainty source.' },
    { course: 'math155', item: 'Problem set 5', score: '23 / 25', state: 'returned', feedback: 'Watch the sign in 4(b).' },
    { course: 'chem210', item: 'Quiz 3', score: '—', state: 'draft', feedback: null },
  ],
  readiness: [
    { id: 'window', title: 'Registration window', state: 'ready_as_of', asOf: '9:08 am', source: 'Banner SIS · checked 6 min ago' },
    { id: 'hold', title: 'Account hold', state: 'blocked', source: 'Bursar · $120 lab fee unpaid', office: 'Bursar' },
    { id: 'prereq', title: 'CHEM 220 prerequisite', state: 'unknown', source: 'Transcript record missing · not assumed' },
    { id: 'advising', title: 'Advising check-in', state: 'review_required', source: 'Required before spring registration' },
  ],
  threads: [
    { id: 't1', with: 'Dr. Ines Alvarez · CHEM 210', last: 'Office hours moved to Thursday 2–3 pm this week.', at: '9:41 am', unread: true, msgs: [{ from: 'Dr. Ines Alvarez', body: 'Office hours moved to Thursday 2–3 pm this week.', at: '9:41 am' }] },
    { id: 't2', with: 'Bursar office', last: 'Your lab fee can be paid in the student account portal.', at: 'Mon', unread: false, msgs: [{ from: 'Bursar office', body: 'Your lab fee can be paid in the student account portal.', at: 'Mon 3:02 pm' }] },
  ],
  slots: [{ id: 'k1', when: 'Thu 15 Oct, 10:30 am', with: 'Kendra Lee', mode: 'In person · Sarratt 210' }, { id: 'k2', when: 'Fri 16 Oct, 2:00 pm', with: 'Kendra Lee', mode: 'Video' }],
  account: { balance: '$120.00', charges: [{ d: 'CHEM 210 lab fee', a: '$120.00', due: 'Due 30 Oct', src: 'Bursar' }], aid: [{ d: 'Merit scholarship', a: '$6,500.00', s: 'Disbursed' }] },
  handoffs: [{ id: 'h0', student: 'Jordan Ellis', item: 'Immunization record', office: 'Student Health', state: 'in_review', shared: ['name', 'student_id'], age: '2 d' }],
  submissionsQueue: [{ id: 'sq1', student: 'Jordan Ellis', item: 'Lab report 3', at: 'Tue 1:10 am', late: true }, { id: 'sq2', student: 'Priya Natarajan', item: 'Lab report 3', at: 'Mon 9:03 pm', late: false }],
};
