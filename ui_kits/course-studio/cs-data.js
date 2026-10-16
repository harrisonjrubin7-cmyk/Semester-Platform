// Course Studio sample data — synthetic course and students only.
window.CS_DATA = {
  course: { code: 'BIO 201', title: 'Cell Biology', section: '01', term: 'Fall 2026', students: 86, lms: 'Canvas', institution: 'Campus A University' },
  objectives: [
    { id: 'O1', text: 'Explain membrane structure and transport' },
    { id: 'O2', text: 'Describe the stages of the cell cycle' },
    { id: 'O3', text: 'Interpret data from a microscopy experiment' },
    { id: 'O4', text: 'Communicate a lab finding in scientific writing' }
  ],
  syllabus: [
    { id: 'desc', label: 'Course description', text: 'How cells are built, how they work and how they divide, with weekly labs.' },
    { id: 'grading', label: 'Grading', text: 'Labs 30% · Quizzes 20% · Midterm 20% · Final 30%.' },
    { id: 'late', label: 'Late work', text: 'Up to 48 hours late with 10% off per day. Accommodations apply automatically.' },
    { id: 'integrity', label: 'Academic integrity', text: 'Collaborate on labs, write your own reports. Cite every source, including AI help where allowed.' },
    { id: 'access', label: 'Accessibility', text: 'Accommodation letters are applied to deadlines and timed work without you having to ask again.' }
  ],
  weeks: [
    { n: 1, theme: 'Cells and membranes', items: [{ id: 'r1', kind: 'Reading', title: 'Ch. 1 — What is a cell', status: 'published' }, { id: 'l1', kind: 'Lab', title: 'Lab 1 — Microscope basics', status: 'published', due: '2026-09-04' }] },
    { n: 2, theme: 'Transport', items: [{ id: 'r2', kind: 'Reading', title: 'Ch. 2 — Membrane transport', status: 'published' }, { id: 'q1', kind: 'Quiz', title: 'Quiz 1 — Membranes', status: 'published', due: '2026-09-11' }] },
    { n: 6, theme: 'Cell cycle', items: [{ id: 'r6', kind: 'Reading', title: 'Ch. 6 — The cell cycle', status: 'published' }, { id: 'v6', kind: 'Video', title: 'Mitosis lecture (42 min)', status: 'draft', a11y: ['captions'] }, { id: 'l6', kind: 'Lab', title: 'Lab 6 — Onion root tip mitosis', status: 'draft', due: '2026-10-09', a11y: ['alt'] }] },
    { n: 7, theme: 'Midterm', items: [{ id: 'm1', kind: 'Exam', title: 'Midterm', status: 'draft', due: '2026-10-16' }] }
  ],
  bank: [
    { id: 'Q-101', v: 3, type: 'Multiple choice', text: 'Which molecule makes up most of the plasma membrane?', obj: 'O1', diff: 'Easy' },
    { id: 'Q-102', v: 1, type: 'Multiple choice', text: 'Facilitated diffusion requires which of the following?', obj: 'O1', diff: 'Medium' },
    { id: 'Q-140', v: 2, type: 'Ordering', text: 'Put the phases of mitosis in order.', obj: 'O2', diff: 'Easy' },
    { id: 'Q-141', v: 1, type: 'Short answer', text: 'What checkpoint prevents a cell with damaged DNA from entering S phase?', obj: 'O2', diff: 'Hard' },
    { id: 'Q-155', v: 4, type: 'Data interpretation', text: 'From the micrograph counts, estimate the fraction of cells in mitosis.', obj: 'O3', diff: 'Hard' },
    { id: 'Q-160', v: 1, type: 'Multiple choice', text: 'Cyclin levels peak during which phase?', obj: 'O2', diff: 'Medium' }
  ],
  team: [
    { id: 't1', name: 'Priya N.', role: 'Teaching assistant', scope: 'Section 01 labs', until: '2026-12-20' },
    { id: 't2', name: 'Marcus L.', role: 'Grader', scope: 'Quizzes only', until: '2026-12-20' }
  ],
  accommodations: { extendedTime: 4, reducedDistraction: 2, note: 'Counts only. Letters come from Accessibility Services; diagnoses are never shown.' },
  threads: [
    { id: 'd1', title: 'Why does the membrane need cholesterol?', replies: 6, answered: false, by: 'Student' },
    { id: 'd2', title: 'Lab 1 — can we use our own phone camera on the microscope?', replies: 3, answered: true, by: 'Student' },
    { id: 'd3', title: 'Quiz 1 question 4 seems to have two answers', replies: 2, answered: false, by: 'Student', flag: 'Regrade?' }
  ],
  slots: [
    { id: 's1', day: 'Tue', time: '14:00–15:00', where: 'Sci 210 + video', queue: 3 },
    { id: 's2', day: 'Thu', time: '10:00–11:00', where: 'Video', queue: 0 }
  ],
  engagement: [92, 90, 87, 85, 84, 80],
  gradebook: Array.from({ length: 12 }, (_, i) => ({ id: 'S-' + String(i + 1).padStart(3, '0'), lab1: [10, 9, 8, 10, 7, 9, 10, 6, 9, 8, 10, 9][i], q1: [18, 15, 20, 12, 17, 19, 14, 20, 16, 13, 18, 0][i], late: i === 11 }))
};
