import { profile, skills, awards, timeline, projects, contact } from './data.js';

/* global __BUILD_DATE__ */
const updated = new Date(__BUILD_DATE__).toLocaleDateString('en-CA', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});

function Header() {
  return (
    <header className="site-header">
      <a href="#top" className="wordmark">Kennedy Morris</a>
      <nav aria-label="Main">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#experience">Experience</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-inner">
        <h1>Hi, I'm Kennedy.</h1>
        <p className="intro">{profile.intro}</p>
        <p className="looking">{profile.lookingFor}</p>
        <p className="currently">
          <span className="label">Currently</span> {profile.currently}
        </p>
        <div className="hero-links">
          {contact.hasResume && (
            <a className="btn" href="/resume.pdf" target="_blank" rel="noreferrer">Read my résumé</a>
          )}
          <a className="text-link" href={`mailto:${contact.email}`}>{contact.email}</a>
        </div>
      </div>
    </section>
  );
}

function Section({ id, label, children, wide = false }) {
  return (
    <section id={id} className={`section ${wide ? 'wide' : ''}`}>
      <h2 className="section-label">{label}</h2>
      <div className="section-body">{children}</div>
    </section>
  );
}

function About() {
  return (
    <Section id="about" label="About">
      {profile.about.map((p, i) => <p key={i}>{p}</p>)}
      <dl className="skills">
        {skills.map((s) => (
          <div key={s.group}>
            <dt>{s.group}</dt>
            <dd>{s.items}</dd>
          </div>
        ))}
      </dl>
      <h3 className="minor">Awards</h3>
      <ul className="awards">
        {awards.map((a) => (
          <li key={a.name}><strong>{a.name}</strong> <span>{a.detail}</span></li>
        ))}
      </ul>
    </Section>
  );
}

function Projects() {
  return (
    <Section id="projects" label="Projects" wide>
      <p className="note">More projects are on the way this term.</p>
      <ol className="project-list">
        {projects.map((p, i) => (
          <li key={i} className={p.placeholder ? 'placeholder' : p.image ? 'featured' : ''}>
            {p.image && (
              <a className="project-image" href={p.image} target="_blank" rel="noreferrer">
                <img src={p.image} alt={p.imageAlt || p.title} loading="lazy" />
              </a>
            )}
            <div className="project-text">
              <div className="project-head">
                <h3>{p.title}</h3>
                {p.placeholder && <span className="soon">Coming soon</span>}
              </div>
              <p>{p.summary}</p>
              {p.result && <p className="result">{p.result}</p>}
              {p.tags?.length > 0 && <p className="tags">{p.tags.join(' · ')}</p>}
              {(p.links?.github || p.links?.demo || p.links?.file) && (
                <p className="project-links">
                  {p.links.github && <a href={p.links.github} target="_blank" rel="noreferrer">Code</a>}
                  {p.links.demo && <a href={p.links.demo} target="_blank" rel="noreferrer">Live site</a>}
                  {p.links.file && <a href={p.links.file} download>{p.links.fileLabel || 'Download'}</a>}
                </p>
              )}
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}

function Experience() {
  return (
    <Section id="experience" label="Experience">
      <ol className="timeline">
        {timeline.map((t) => (
          <li key={t.title}>
            <p className="when">{t.when}</p>
            <h3>{t.title}</h3>
            <p className="org">{t.org}</p>
            <p>{t.text}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}

function ResumeBand() {
  if (!contact.hasResume) return null;
  return (
    <section className="band" aria-label="Résumé">
      <div className="band-inner">
        <p>The one-page version, if you'd rather read it that way.</p>
        <a className="btn light" href="/resume.pdf" target="_blank" rel="noreferrer">Download résumé (PDF)</a>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <Section id="contact" label="Contact">
      <p className="contact-line">
        Email is the best way to reach me: <a href={`mailto:${contact.email}`}>{contact.email}</a>.
      </p>
      <p>
        I'm also on <a href={contact.linkedin} target="_blank" rel="noreferrer">LinkedIn</a> and{' '}
        <a href={contact.github} target="_blank" rel="noreferrer">GitHub</a>.
      </p>
    </Section>
  );
}

export default function App() {
  return (
    <>
      <a href="#main" className="skip">Skip to content</a>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <ResumeBand />
        <Contact />
      </main>
      <footer>
        <p>Last updated {updated}.</p>
        <p>Made with React, hosted on Cloudflare.</p>
      </footer>
    </>
  );
}
