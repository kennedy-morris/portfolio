import { profile, skills, projects, contact } from './data.js';

function Nav() {
  const links = ['About', 'Projects', 'Résumé', 'Contact'];
  return (
    <header className="nav">
      <a href="#top" className="logo">KM<span>.</span></a>
      <nav>
        {links.map((l) => (
          <a key={l} href={`#${l.toLowerCase().replace(/é/g, 'e')}`}>{l}</a>
        ))}
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <p className="eyebrow">{profile.program}</p>
      <h1>
        Hi, I'm <span className="accent">{profile.name.split(' ')[0]}</span>.
      </h1>
      <p className="lede">{profile.headline}</p>
      <div className="hero-actions">
        <a className="btn primary" href="#projects">See my work →</a>
        <a className="btn ghost" href="#contact">Get in touch</a>
      </div>
      <p className="status"><span className="dot" /> {profile.lookingFor}</p>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section">
      <h2><span className="num">01</span> About</h2>
      <div className="about-grid">
        <div>
          {profile.about.map((p, i) => <p key={i}>{p}</p>)}
          <div className="chips">
            {profile.interests.map((t) => <span key={t} className="chip">{t}</span>)}
          </div>
        </div>
        <div className="skills">
          {skills.map((s) => (
            <div key={s.group} className="skill-group">
              <h3>{s.group}</h3>
              <ul>{s.items.map((i) => <li key={i}>{i}</li>)}</ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ p, i }) {
  return (
    <article className={`card ${p.placeholder ? 'placeholder' : ''}`}>
      <div className="card-top">
        <span className="card-num">{String(i + 1).padStart(2, '0')}</span>
        {p.placeholder && <span className="soon">Coming soon</span>}
      </div>
      <h3>{p.title}</h3>
      <p>{p.summary}</p>
      {p.result && <p className="result">{p.result}</p>}
      <div className="tags">{p.tags.map((t) => <span key={t}>{t}</span>)}</div>
      <div className="card-links">
        {p.links.github && <a href={p.links.github} target="_blank" rel="noreferrer">Code ↗</a>}
        {p.links.demo && <a href={p.links.demo} target="_blank" rel="noreferrer">Live ↗</a>}
      </div>
    </article>
  );
}

function Projects() {
  return (
    <section id="projects" className="section">
      <h2><span className="num">02</span> Projects</h2>
      <div className="cards">
        {projects.map((p, i) => <ProjectCard key={p.title} p={p} i={i} />)}
      </div>
    </section>
  );
}

function Resume() {
  return (
    <section id="resume" className="section resume">
      <h2><span className="num">03</span> Résumé</h2>
      <div className="resume-box">
        <p>Want the one-page version? Grab my résumé below.</p>
        {contact.hasResume ? (
          <a className="btn primary" href="/resume.pdf" target="_blank" rel="noreferrer">Download résumé (PDF)</a>
        ) : (
          <span className="btn disabled">Résumé coming soon</span>
        )}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section contact">
      <h2><span className="num">04</span> Contact</h2>
      <p className="big">Let's build something.</p>
      <div className="contact-links">
        {contact.email && <a href={`mailto:${contact.email}`}>Email</a>}
        {contact.linkedin && <a href={contact.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>}
        <a href={contact.github} target="_blank" rel="noreferrer">GitHub</a>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Projects />
        <Resume />
        <Contact />
      </main>
      <footer>© {new Date().getFullYear()} {profile.name} · Built with React</footer>
    </>
  );
}
