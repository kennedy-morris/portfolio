// ─────────────────────────────────────────────────────────────
//  EDIT THIS FILE to update everything on the site.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: 'Kennedy Morris',
  intro:
    "I'm a first-year Management Engineering student at the University of Waterloo. I build spreadsheet tools that help teams organize information and make better decisions, and I'm developing my skills in data analytics and product management.",
  lookingFor: "Looking for a Summer 2027 co-op in data analytics or product.",
  // Update this each term.
  currently: 'In 1A at Waterloo, learning Python in MSE 121 and building my first projects for this site.',
  about: [
    "Before university I spent two summers doing admin and operations at Innovative Rhythm Dance Studios. I kept the enrollment records for 100 to 250 students in Excel and updated schedules, instructors and pricing whenever registration changed. That work showed me how much a well-organized sheet helps the people making decisions.",
    "I've also led a dance program at a week-long leadership camp, where I planned activities for over 100 campers with a team of six and trained five new instructors.",
    "At Waterloo I'm most interested in data analytics and product management. I'm aiming for a co-op where I can work with real data and see how a product team decides what to build.",
  ],
};

export const skills = [
  { group: 'Spreadsheets', items: 'Excel (VLOOKUP, HLOOKUP, formulas, charts), Google Sheets (QUERY, data validation)' },
  { group: 'Code', items: 'Python, SQL, C++' },
  { group: 'Tools', items: 'Power BI, Figma, Microsoft Office, Google Workspace' },
];

export const awards = [
  { name: 'Isabel Farrar Entrance Scholarship', detail: '$4,000, for incoming Engineering and Math students' },
  { name: 'University of Waterloo Entrance Scholarship', detail: '$2,000, for a 95%+ admission average' },
];

// Newest first.
export const timeline = [
  {
    when: 'Sept 2026',
    title: 'Hiring Process Analysis Tool',
    org: 'MSE 100, University of Waterloo',
    text: 'An Excel tool that tracks applicants through each hiring stage, using lookups and formulas to keep candidate evaluations consistent.',
  },
  {
    when: 'Summers 2025 and 2026',
    title: 'Administrative & Operations Assistant',
    org: 'Innovative Rhythm Dance Studios',
    text: 'Kept enrollment records for 100 to 250 students and updated schedules, instructors and pricing during registration. Also taught children’s dance classes.',
  },
  {
    when: 'July 2025',
    title: 'Legal Research Database',
    org: 'Freelance project for an immigration law office',
    text: 'A searchable Google Sheets database of legal precedents, with dropdowns and QUERY functions to find case citations quickly. Delivered in under 10 hours.',
  },
  {
    when: 'Sept 2024 and 2025',
    title: 'Senior Instructor & Co-Councillor of Dance',
    org: 'Leadership Overnight Camp',
    text: 'Led a team of 6 running a week-long dance program for 100+ campers, and trained 5 instructors.',
  },
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
  { title: 'Project in progress', summary: "I'm building this one now. Check back soon.", tags: [], result: '', links: {}, placeholder: true },
  { title: 'Project in progress', summary: "I'm building this one now. Check back soon.", tags: [], result: '', links: {}, placeholder: true },
  { title: 'Project in progress', summary: "I'm building this one now. Check back soon.", tags: [], result: '', links: {}, placeholder: true },
];

export const contact = {
  email: 'k24morri@uwaterloo.ca',
  linkedin: 'https://www.linkedin.com/in/kennedy-morris-6b032a432',
  github: 'https://github.com/kennedy-morris',
  // The résumé PDF lives at public/resume.pdf — replace that file to update it.
  hasResume: true,
};
