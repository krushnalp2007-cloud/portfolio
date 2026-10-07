import React, { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowUp,
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Database,
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
  ExternalLink,
  Cpu,
  Sparkles,
  Terminal,
  Download,
  MapPin,
  ChevronRight
} from "lucide-react";

const GITHUB = "https://github.com/krushnalp2007-cloud";
const LINKEDIN = "https://www.linkedin.com/in/krushnal-patil-81741b385";
const EMAIL = "krushnalp2007@gmail.com";

const projects = [
  {
    number: "01",
    category: "FULL-STACK",
    title: "MediQueue",
    description:
      "Hospital queue management platform for appointments, patient queues, emergency handling, doctors and hospital resources.",
    tags: ["React", "Node.js", "Express", "PostgreSQL"],
    accent: "blue",
    github: "https://github.com/krushnalp2007-cloud/hospital-queue-management-system",
    demo: "#contact",
    image: "/project-images/mediqueue/dashboard.png",
    gallery: ["/project-images/mediqueue/dashboard.png", "/project-images/mediqueue/queue-management.png", "/project-images/mediqueue/emergency-handling.png"]
  },
  {
    number: "02",
    category: "IOT + FULL-STACK",
    title: "Smart Shopping Cart",
    description:
      "Smart cart concept combining smartphone product scanning, weight verification and automated billing with ESP32-based hardware.",
    tags: ["React", "PostgreSQL", "ESP32", "HX711", "TOF"],
    accent: "violet",
    github: "https://github.com/krushnalp2007-cloud/Smart-Shopping-Cart",
    demo: "#contact",
    image: "/project-images/smart-shopping-cart/dashboard.png",
    gallery: ["/project-images/smart-shopping-cart/dashboard.png", "/project-images/smart-shopping-cart/product-details.png", "/project-images/smart-shopping-cart/weight-verification.png"]
  },
  {
    number: "03",
    category: "AI APPLICATION",
    title: "CareerPilot AI",
    description:
      "AI-powered career assistant for skill analysis, learning paths, resume review and interview preparation.",
    tags: ["Python", "Streamlit", "Gemini API", "AI"],
    accent: "cyan",
    github: GITHUB,
    demo: "#contact",
    image: "/project-images/careerpilot-ai/dashboard.png",
    gallery: ["/project-images/careerpilot-ai/dashboard.png", "/project-images/careerpilot-ai/skill-analysis.png", "/project-images/careerpilot-ai/resume-review.png"]
  },
  {
    number: "04",
    category: "AI + FULL-STACK",
    title: "DevFlow AI",
    description:
      "Developer assistant built around a React frontend and FastAPI backend with Gemini-powered workflows.",
    tags: ["React", "Vite", "FastAPI", "Gemini API"],
    accent: "orange",
    github: GITHUB,
    demo: "#contact"
  }
];

const skillGroups = [
  { title: "Languages", icon: Code2, items: ["C++", "C", "Python", "JavaScript"] },
  { title: "Frontend", icon: Terminal, items: ["React", "HTML", "CSS", "Vite"] },
  { title: "Backend", icon: BriefcaseBusiness, items: ["Node.js", "Express", "FastAPI", "REST APIs"] },
  { title: "Database", icon: Database, items: ["PostgreSQL", "SQL"] },
  { title: "AI & Tools", icon: Sparkles, items: ["Gemini API", "Git", "GitHub", "Postman"] },
  { title: "IoT", icon: Cpu, items: ["ESP32", "HX711", "TOF Sensor"] }
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="app">
      <div className="noise" />

      <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
        <a href="#home" className="brand" onClick={closeMenu}>
          <span className="brand-mark">KP</span>
          <span>Krushnal Patil</span>
        </a>

        <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          {["About", "Projects", "Skills", "Journey", "Contact"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>
              {item}
            </a>
          ))}
          <a className="nav-resume" href="/resume.pdf" download onClick={closeMenu}>
            <Download size={15} /> Resume
          </a>
        </nav>
      </header>

      <main>
        <section id="home" className="hero section-shell">
          <div className="hero-copy">
            <div className="availability">
              <span className="pulse" />
              Open to software development opportunities
            </div>

            <p className="eyebrow">COMPUTER SCIENCE ENGINEER</p>

            <h1>
              I build <span>real-world</span>
              <br />
              software products.
            </h1>

            <p className="hero-description">
              I’m Krushnal Patil, a software developer focused on building practical
              applications across <strong>full-stack development, AI and IoT</strong>.
            </p>

            <div className="hero-actions">
              <a href="#projects" className="btn btn-primary">
                View my work <ArrowDown size={17} />
              </a>
              <a href={LINKEDIN} target="_blank" rel="noreferrer" className="btn btn-ghost">
                LinkedIn <ArrowUpRight size={17} />
              </a>
            </div>

            <div className="social-row">
              <a href={GITHUB} target="_blank" rel="noreferrer"><Github size={17} /> GitHub</a>
              <a href={LINKEDIN} target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn</a>
              <a href={`mailto:${EMAIL}`}><Mail size={17} /> Email</a>
            </div>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="hero-card">
              <div className="window-dots"><i /><i /><i /></div>
              <div className="code-line muted">const developer = {"{"}</div>
              <div className="code-line"><span>name:</span> "Krushnal Patil",</div>
              <div className="code-line"><span>focus:</span> ["C++", "React"],</div>
              <div className="code-line"><span>build:</span> ["AI", "IoT"],</div>
              <div className="code-line"><span>mindset:</span> "problem solver"</div>
              <div className="code-line muted">{"}"}</div>
              <div className="terminal-cursor" />
            </div>
            <div className="floating-chip chip-one"><Code2 size={15} /> Full-Stack</div>
            <div className="floating-chip chip-two"><Sparkles size={15} /> AI</div>
            <div className="floating-chip chip-three"><Cpu size={15} /> IoT</div>
          </div>
        </section>

        <section id="about" className="section-shell section">
          <div className="section-heading">
            <p className="eyebrow">01 — ABOUT</p>
            <h2>Developer mindset,<br /><span>builder attitude.</span></h2>
          </div>

          <div className="about-grid">
            <div className="about-text">
              <p className="lead">
                I’m a Computer Science Engineering student who enjoys turning ideas
                into working products.
              </p>
              <p>
                My current focus is software development, with strong interest in
                C++, DSA, backend systems, databases and modern web applications.
                I also enjoy experimenting with AI and connecting software with
                real-world hardware.
              </p>
              <p>
                I learn best by building. My projects have taken me from hospital
                queue management to AI career tools and smart retail systems.
              </p>
            </div>

            <div className="about-stats">
              <div className="stat-card"><strong>04+</strong><span>Featured projects</span></div>
              <div className="stat-card"><strong>03</strong><span>Core domains</span></div>
              <div className="stat-card"><strong>01</strong><span>Goal: Software Developer</span></div>
            </div>
          </div>
        </section>

        <section id="projects" className="section-shell section">
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow">02 — SELECTED WORK</p>
              <h2>Projects that show<br /><span>how I build.</span></h2>
            </div>
            <a href={GITHUB} target="_blank" rel="noreferrer" className="text-link">
              View GitHub <ArrowUpRight size={17} />
            </a>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article className={`project-card ${project.accent}`} key={project.title}>
                <div className="project-top">
                  <span className="project-number">{project.number}</span>
                  <span className="project-category">{project.category}</span>
                </div>
                {project.image ? (
                  <div className="project-image-wrap">
                    <img className="project-image" src={project.image} alt={`${project.title} screenshot`} loading="lazy" />
                  </div>
                ) : (
                  <div className="project-icon"><Code2 size={22} /></div>
                )}
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tag-row">
                  {project.tags.map(tag => <span key={tag}>{tag}</span>)}
                </div>
                {project.gallery && (
                  <div className="project-gallery" aria-label={`${project.title} screenshots`}>
                    {project.gallery.slice(1).map((image) => (
                      <img key={image} src={image} alt="" loading="lazy" />
                    ))}
                  </div>
                )}
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={15} /></a>
                  <a href={project.demo}>Demo <ExternalLink size={14} /></a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="section-shell section">
          <div className="section-heading">
            <p className="eyebrow">03 — TOOLKIT</p>
            <h2>Technologies I use<br /><span>to ship ideas.</span></h2>
          </div>

          <div className="skills-grid">
            {skillGroups.map(({ title, icon: Icon, items }) => (
              <div className="skill-card" key={title}>
                <div className="skill-title"><Icon size={19} /><h3>{title}</h3></div>
                <div className="skill-items">
                  {items.map(item => <span key={item}>{item}</span>)}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="journey" className="section-shell section">
          <div className="section-heading">
            <p className="eyebrow">04 — JOURNEY</p>
            <h2>Learning by <span>building.</span></h2>
          </div>

          <div className="timeline">
            <div className="timeline-item">
              <span className="timeline-year">NOW</span>
              <div>
                <h3>Software Development Focus</h3>
                <p>Deepening C++, DSA, backend development and database skills for software engineering roles.</p>
              </div>
            </div>
            <div className="timeline-item">
              <span className="timeline-year">2026</span>
              <div>
                <h3>Hackathons & Product Building</h3>
                <p>Worked on AI, hospital management and smart retail solutions while collaborating in team environments.</p>
              </div>
            </div>
            <div className="timeline-item">
              <span className="timeline-year">2025+</span>
              <div>
                <h3>From Learning to Building</h3>
                <p>Started turning programming and computer science concepts into practical projects and deployable applications.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="section-shell contact-inner">
            <div>
              <p className="eyebrow">05 — CONTACT</p>
              <h2>Have an opportunity?<br /><span>Let’s talk.</span></h2>
              <p className="contact-copy">
                I’m interested in software development opportunities, internships,
                collaborative projects and conversations with people building useful technology.
              </p>
            </div>

            <div className="contact-actions">
              <a className="contact-btn" href={`mailto:${EMAIL}`}>
                <Mail size={19} /> {EMAIL}
              </a>
              <a className="contact-btn" href={LINKEDIN} target="_blank" rel="noreferrer">
                <Linkedin size={19} /> LinkedIn <ArrowUpRight size={17} />
              </a>
              <a className="contact-btn" href={GITHUB} target="_blank" rel="noreferrer">
                <Github size={19} /> GitHub <ArrowUpRight size={17} />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer section-shell">
        <span>© {new Date().getFullYear()} Krushnal Patil</span>
        <span>Built with React · Vite</span>
        <a href="#home"><ArrowUp size={16} /> Back to top</a>
      </footer>
    </div>
  );
}

export { App };