// ─────────────────────────────────────────────────────────────
//  EDIT THIS FILE to update everything on the site.
//  Anything marked TODO is a placeholder waiting for your details.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: 'Kennedy Morris',
  headline: 'I turn messy data into clear decisions — and ideas into products.',
  program: 'Management Engineering (Co-op) · University of Waterloo',
  lookingFor: 'Seeking a Summer 2027 co-op in data analytics or product management.',
  about: [
    "I'm a first-year Management Engineering student at the University of Waterloo, where I sit at the intersection of engineering, data and business.",
    "I'm most interested in data analytics and product management — figuring out what the numbers are really saying, and using that to build things people actually want.",
  ],
  // TODO: add hobbies, clubs or teams, e.g. 'Member of Waterloo Data Science Club'
  interests: ['Data analytics', 'Product management', 'Dashboards & visualization', 'Building side projects'],
};

export const skills = [
  { group: 'Data & Spreadsheets', items: ['SQL', 'Excel', 'Google Sheets', 'Power BI'] },
  { group: 'Programming', items: ['Python', 'C++'] },
  { group: 'Product & Tools', items: ['Figma', 'Microsoft Office', 'Google Workspace'] },
];

export const awards = [
  'Isabel Farrar Entrance Scholarship',
  'University of Waterloo Entrance Scholarship (95%+ admission average)',
];

// Projects — these are placeholders for now.
// To add a real one, copy this shape and remove `placeholder: true`:
// {
//   title: 'Project name',
//   summary: 'One or two lines on what it does and the problem it solves.',
//   tags: ['Python', 'SQL'],
//   result: 'Optional — a number or outcome, e.g. "analyzed 10k rows"',
//   links: { github: 'https://github.com/...', demo: 'https://...' },
// },
export const projects = [
  { title: 'Project in progress', summary: 'Something new is being built here. Check back soon.', tags: [], result: '', links: {}, placeholder: true },
  { title: 'Project in progress', summary: 'Something new is being built here. Check back soon.', tags: [], result: '', links: {}, placeholder: true },
  { title: 'Project in progress', summary: 'Something new is being built here. Check back soon.', tags: [], result: '', links: {}, placeholder: true },
];

export const contact = {
  email: 'k24morri@uwaterloo.ca',
  linkedin: 'https://www.linkedin.com/in/kennedy-morris-6b032a432',
  github: 'https://github.com/kennedy-morris',
  // The résumé PDF lives at public/resume.pdf — replace that file to update it.
  hasResume: true,
};
