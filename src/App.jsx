import { profile, skills, awards, timeline, projects, contact } from './data.js';

/* global __BUILD_DATE__ */
const updated = new Date(__BUILD_DATE__).toLocaleDateString('en-CA', {
  year: 'numeric',
  month: 'short',
  day: 'numeric',
});

function Header() {
  return (
    <header className="site-header">
      <a href="#top" className="wordmark">Kennedy Morris</a>
      <nav aria-label="Main">
        <a href="#projects">Projects</a>
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

/* The header block printed at the top of an engineering pad, filled in. */
function TitleBlock() {
  const fields = [
    ['Name', 'Kennedy Morris'],
    ['Program', 'Management Engineering, 1A'],
    ['School', 'University of Waterloo'],
    ['Looking for', 'Co-op, Summer 2027'],
    ['Updated', updated],
  ];
  return (
    <dl className="title-block">
      {fields.map(([k, v]) => (
        <div key={k}>
          <dt>{k}</dt>
          <dd>{v}</dd>
        </div>
      ))}
    </dl>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <TitleBlock />
      <div className="hero-body">
        <h1>Hi, I'm Kennedy.</h1>
        <div className="hero-side">
          <p className="intro">{profile.intro}</p>
          <div className="hero-links">
            {contact.hasResume && (
              <a className="btn" href="/resume.pdf" target="_blank" rel="noreferrer">Read my résumé</a>
            )}
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Section({ id, title, children, className = '' }) {
  return (
    <section id={id} className={`section ${className}`}>
      <h2>{title}</h2>
      <div className="section-body">{children}</div>
    </section>
  );
}

function Projects() {
  const real = projects.filter((p) => !p.placeholder);
  const pending = projects.filter((p) => p.placeholder).length;
  return (
    <Section id="projects" title="Projects" className="projects">
      <ol className="project-list">
        {real.map((p) => (
          <li key={p.title} className={p.image ? 'sheet with-image' : 'sheet'}>
            {p.image && (
              <a className="project-image" href={p.image} target="_blank" rel="noreferrer">
                <img src={p.image} alt={p.imageAlt || p.title} loading="lazy" />
              </a>
            )}
            <div className="project-text">
              <div className="project-main">
                <h3>{p.title}</h3>
                <p>{p.summary}</p>
              </div>
              <div className="project-meta">
              {p.result && <p className="result">{p.result}</p>}
              {p.tags?.length > 0 && <p className="tags">Built with {p.tags.join(', ')}</p>}
              {(p.links?.github || p.links?.demo || p.links?.file) && (
                <p className="project-links">
                  {p.links.demo && <a className="btn" href={p.links.demo} target="_blank" rel="noreferrer">Try the live demo</a>}
                  {p.links.file && <a className="btn" href={p.links.file} download>{p.links.fileLabel || 'Download'}</a>}
                  {p.links.github && <a href={p.links.github} target="_blank" rel="noreferrer">View the code on GitHub</a>}
                </p>
              )}
              </div>
            </div>
          </li>
        ))}
      </ol>
      {pending > 0 && (
        <p className="pending">
          {pending === 1 ? 'One more project is' : `${pending} more projects are`} in progress this term.
        </p>
      )}
    </Section>
  );
}

function About() {
  return (
    <Section id="about" title="About">
      {profile.about.map((p, i) => <p key={i}>{p}</p>)}
      <p className="currently">Right now: {profile.currently}</p>
      <dl className="skills">
        {skills.map((s) => (
          <div key={s.group}>
            <dt>{s.group}</dt>
            <dd>{s.items}</dd>
          </div>
        ))}
      </dl>
      <h3>Awards</h3>
      <ul className="awards">
        {awards.map((a) => (
          <li key={a.name}><strong>{a.name}</strong>, {a.detail}</li>
        ))}
      </ul>
    </Section>
  );
}

function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ol className="timeline">
        {timeline.map((t) => (
          <li key={t.title}>
            <p className="when">{t.when}</p>
            <div>
              <h3>{t.title}</h3>
              <p className="org">{t.org}</p>
              <p>{t.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}

function Contact() {
  return (
    <Section id="contact" title="Contact" className="contact">
      <p className="contact-line">
        Email is the best way to reach me: <a href={`mailto:${contact.email}`}>{contact.email}</a>
      </p>
      <p className="contact-more">
        {contact.hasResume && <a className="btn" href="/resume.pdf" target="_blank" rel="noreferrer">Download my résumé (PDF)</a>}
        <a href={contact.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        <a href={contact.github} target="_blank" rel="noreferrer">GitHub</a>
      </p>
    </Section>
  );
}

export default function App() {
  return (
    <>
      <a href="#main" className="skip">Skip to content</a>
      <div className="pad">
        <Header />
        <main id="main">
          <Hero />
          <Projects />
          <About />
          <Experience />
          <Contact />
        </main>
        <footer>
          <p>Made with React, hosted on Cloudflare.</p>
        </footer>
      </div>
    </>
  );
}
