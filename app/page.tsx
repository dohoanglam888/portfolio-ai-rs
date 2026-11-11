import { profile, interests, news, publications, projects } from "@/lib/data";

export default function Home() {
  return (
    <>
      <header className="nav">
        <div className="container nav-inner">
          <a href="#top" className="brand">{profile.name}</a>
          <nav>
            <a href="#about">About</a>
            <a href="#research">Research</a>
            <a href="#publications">Publications</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero container">
          <p className="eyebrow">{profile.title}</p>
          <h1>
            Hi, I&apos;m <span className="gradient">{profile.name}</span>.
          </h1>
          <p className="lead">{profile.tagline}</p>
          <p className="meta">
            {profile.affiliation} · {profile.location}
          </p>
          <div className="actions">
            <a className="btn primary" href="#publications">View publications</a>
            <a className="btn" href={`mailto:${profile.email}`}>Get in touch</a>
          </div>
        </section>

        <section id="about" className="container section">
          <h2>About</h2>
          <div className="about-grid">
            <div>
              {profile.about.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <div className="card">
              <h3>Find me online</h3>
              <ul className="link-list">
                {profile.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} target="_blank" rel="noopener noreferrer">{l.label} ↗</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="research" className="container section">
          <h2>Research interests</h2>
          <div className="grid">
            {interests.map((i) => (
              <div className="card" key={i.title}>
                <h3>{i.title}</h3>
                <p>{i.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="container section">
          <h2>News</h2>
          <ul className="news">
            {news.map((n) => (
              <li key={n.date + n.text}>
                <span className="date">{n.date}</span>
                <span>{n.text}</span>
              </li>
            ))}
          </ul>
        </section>

        <section id="publications" className="container section">
          <h2>Selected publications</h2>
          <div className="pubs">
            {publications.map((p) => (
              <article className="pub card" key={p.title}>
                <div className="pub-head">
                  <span className="venue">{p.venue}</span>
                  {p.tag && <span className="badge">{p.tag}</span>}
                </div>
                <h3>{p.title}</h3>
                <p className="authors">{p.authors}</p>
                <div className="pub-links">
                  {p.links.map((l) => (
                    <a key={l.label} href={l.href}>{l.label}</a>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="container section">
          <h2>Projects</h2>
          <div className="grid">
            {projects.map((p) => (
              <a className="card project" key={p.name} href={p.href} target="_blank" rel="noopener noreferrer">
                <h3>{p.name} <span aria-hidden>↗</span></h3>
                <p>{p.description}</p>
                <div className="tags">
                  {p.stack.map((s) => (
                    <span key={s}>{s}</span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </section>

        <section id="contact" className="container section contact">
          <h2>Let&apos;s collaborate</h2>
          <p>
            Open to research collaborations, talks, and discussions. The best way to reach me is by email.
          </p>
          <a className="btn primary" href={`mailto:${profile.email}`}>{profile.email}</a>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          © {new Date().getFullYear()} {profile.name}. Built with Next.js and deployed on Vercel.
        </div>
      </footer>
    </>
  );
}
