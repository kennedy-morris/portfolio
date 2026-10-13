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
  { group: 'Data', items: ['SQL', 'Excel', 'Google Sheets', 'Power BI'] },
  { group: 'Programming', items: ['Python', 'C++'] },
  { group: 'Product & Design', items: ['Figma'] },
];

// TODO: replace these with your real projects.
// Each project: title, summary, tags, optional result, links (github / demo).
export const projects = [
  {
    title: 'Your first project',
    summary: 'One or two lines on what it does and the problem it solves.',
    tags: ['Python', 'SQL'],
    result: 'Add a number here — e.g. “analyzed 10k rows”',
    links: { github: '', demo: '' },
    placeholder: true,
  },
  {
    title: 'Dashboard project',
    summary: 'A Power BI or Sheets dashboard would fit perfectly here.',
    tags: ['Power BI', 'Excel'],
    result: '',
    links: { github: '', demo: '' },
    placeholder: true,
  },
  {
    title: 'Product / design project',
    summary: 'A Figma prototype or product case study shows off your PM side.',
    tags: ['Figma'],
    result: '',
    links: { github: '', demo: '' },
    placeholder: true,
  },
];

export const contact = {
  email: '', // TODO: the email you want public
  linkedin: '', // TODO: e.g. 'https://www.linkedin.com/in/your-name'
  github: 'https://github.com/kennedy-morris',
  // Put your résumé PDF in the /public folder as resume.pdf, then set this to true.
  hasResume: false,
};
