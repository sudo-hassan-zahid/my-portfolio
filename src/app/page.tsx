"use client";

import { useMemo, useState } from "react";

const cvHref = "/Hassan_Zahid_CV.pdf";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Availability", href: "#availability" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const quickStats = [
  { value: "Backend-first", label: "software engineering with practical UI delivery" },
  { value: "2", label: "recent software roles mapped by company and skill area" },
  { value: "End-to-end", label: "architecture, deployment, monitoring, support" },
];

const proofPoints = [
  {
    title: "Backend ownership",
    detail:
      "Owns APIs, data models, background work, cloud deployment, and post-release stability.",
  },
  {
    title: "Product-aware delivery",
    detail:
      "Turns client ideas and publishing workflows into practical systems, POCs, and shipped features.",
  },
  {
    title: "Production support",
    detail:
      "Comfortable with critical bug fixes, monitoring, legacy systems, and multi-tenant risk.",
  },
];

const availabilityGroups = [
  {
    title: "Work setup",
    detail: "Remote work is the best fit for how I collaborate and deliver.",
    options: ["Remote", "Freelance roles"],
  },
  {
    title: "Engagement type",
    detail: "Open to structured roles or focused delivery around a defined scope.",
    options: ["Full-time", "Part-time", "Contract-based", "Project-based"],
  },
  {
    title: "Best fit",
    detail: "Backend-heavy product work, APIs, integrations, deployment, and support.",
    options: ["Backend systems", "API delivery", "Cloud-ready apps", "Product support"],
  },
];

const roleFitCards = [
  {
    title: "Backend Engineer",
    detail:
      "Strongest fit for API development, backend architecture, background work, databases, and production ownership.",
    cues: ["Golang", "Node.js", "NestJS", "Laravel", "REST APIs", "Queues"],
  },
  {
    title: "Backend Engineer with UI Range",
    detail:
      "Can deliver React, Next.js, WordPress, and publishing UI work when needed, while keeping core depth in backend systems.",
    cues: ["Backend-first", "React when needed", "Next.js when needed", "WordPress", "Laravel", "MySQL"],
  },
  {
    title: "Integrations Engineer",
    detail:
      "Useful where payments, business platforms, legal tools, and AI APIs need to talk to product workflows.",
    cues: ["Stripe", "PayKickstart", "Zoho", "Clio", "OpenAI", "Gemini"],
  },
  {
    title: "Cloud-Ready Developer",
    detail:
      "Practical deployment experience across AWS services, Docker, Linux access, monitoring, and production fixes.",
    cues: ["AWS", "Docker", "Sentry", "Linux/SSH", "CloudFront", "Route53"],
  },
];

const companyExperience = [
  {
    id: "alphasquad",
    role: "Backend Engineer",
    company: "AlphaSquad",
    location: "Islamabad",
    period: "Jan 2025 - Present",
    signal: "Current role",
    overview:
      "Backend-centered product engineering across multiple client projects, owning architecture, deployments, integrations, and production stability.",
    achievements: [
      "Built and maintained scalable applications using Golang, Node.js, NestJS, Laravel, React, and Next.js.",
      "Designed RESTful APIs and integrated third-party platforms including Stripe, PayKickstart, Zoho, Clio, OpenAI, and Gemini APIs.",
      "Moved heavy PDF, AI/LLM, and background workloads out of an ElectronJS app into scalable backend services using Golang async queues and Node.js BullMQ.",
      "Managed AWS infrastructure across EC2, S3, SES, CloudFront, Route53, SNS, plus deployments, Sentry monitoring, and production fixes.",
      "Worked on legacy multi-tenant PHP systems where platform-wide changes could affect multiple clients and customer workflows.",
    ],
    categories: [
      {
        title: "Backend",
        skills: ["Golang", "Node.js", "NestJS", "Laravel", "REST APIs", "BullMQ"],
      },
      {
        title: "Data",
        skills: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "Firebase", "Supabase"],
      },
      {
        title: "Cloud & Ops",
        skills: ["AWS EC2", "S3", "SES", "CloudFront", "Route53", "SNS", "Docker", "Sentry"],
      },
      {
        title: "Integrations",
        skills: ["Stripe", "PayKickstart", "Zoho", "Clio", "OpenAI API", "Gemini API"],
      },
    ],
    softSkills: [
      "Client communication",
      "Solo backend ownership",
      "POC thinking",
      "Production judgment",
      "Cross-team collaboration",
    ],
  },
  {
    id: "viral-webbs",
    role: "Junior Web Developer",
    company: "Viral Webbs",
    location: "Islamabad",
    period: "Oct 2022 - Nov 2024",
    signal: "Publishing systems",
    overview:
      "Built publication workflows, EPUB assets, author sites, CMS features, and backend functionality for internal production systems.",
    achievements: [
      "Developed accessible EPUB publications with HTML, XHTML, and CSS for multiple e-reader platforms.",
      "Validated EPUB compliance and accessibility with Kindle Previewer, Ace by DAISY, and Thorium Reader.",
      "Maintained internal publishing management systems used as the source of truth for book production workflows.",
      "Built backend features with Laravel, CodeIgniter, and MySQL while maintaining responsive author websites.",
      "Customized WordPress themes and plugins, plus handled Linux, FTP, and SSH deployment work.",
    ],
    categories: [
      {
        title: "Web Platforms",
        skills: ["Laravel", "CodeIgniter", "WordPress", "PHP", "MySQL"],
      },
      {
        title: "Publishing",
        skills: ["EPUB", "HTML", "XHTML", "CSS", "Kindle Previewer", "Ace by DAISY"],
      },
      {
        title: "UI Delivery",
        skills: ["Responsive UI", "Bootstrap", "jQuery", "Author websites"],
      },
      {
        title: "Operations",
        skills: ["Linux", "FTP", "SSH", "FileZilla", "Deployment troubleshooting"],
      },
    ],
    softSkills: [
      "Accessibility care",
      "Workflow thinking",
      "Detail orientation",
      "Client-site maintenance",
      "Practical troubleshooting",
    ],
  },
];

const skillGroups = [
  {
    title: "Backend & APIs",
    summary: "The core lane: services, APIs, jobs, architecture, and reliability.",
    skills: [
      "Golang",
      "Node.js",
      "NestJS",
      "Laravel",
      "CodeIgniter",
      "PHP",
      "REST APIs",
      "Swagger/OpenAPI",
      "Background jobs",
    ],
  },
  {
    title: "Data & Storage",
    summary: "Relational, document, cache, and backend-as-a-service systems.",
    skills: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "Firebase", "Supabase"],
  },
  {
    title: "UI Delivery & Web",
    summary: "Practical UI delivery range for products that need backend work connected to usable interfaces.",
    skills: ["React", "Next.js", "JavaScript", "WordPress", "HTML", "XHTML", "CSS", "Bootstrap", "jQuery"],
  },
  {
    title: "Cloud & DevOps",
    summary: "Deployment, containerization, server access, monitoring, and AWS services.",
    skills: ["AWS EC2", "S3", "SES", "CloudFront", "Route53", "SNS", "Docker", "Git", "Linux/SSH", "Sentry"],
  },
  {
    title: "Integrations & AI",
    summary: "Payment, business, legal, and AI API integrations with modern LLM workflows.",
    skills: [
      "Stripe",
      "PayKickstart",
      "Zoho",
      "Clio",
      "OpenAI API",
      "Gemini API",
      "Claude Code",
      "Codex",
      "Cursor",
      "Windsurf",
      "Copilot",
    ],
  },
  {
    title: "Publishing & Operations",
    summary: "A practical base in accessible publishing, deployments, and project support tooling.",
    skills: ["EPUB", "Kindle Previewer", "Ace by DAISY", "Thorium Reader", "FileZilla", "PuTTY"],
  },
];

const softSkillGroups = [
  {
    title: "Ownership",
    skills: ["End-to-end delivery", "Production stability", "Independent execution", "Maintenance mindset"],
  },
  {
    title: "Collaboration",
    skills: ["Client communication", "Senior engineer collaboration", "Requirements translation", "Team support"],
  },
  {
    title: "Problem Solving",
    skills: ["Debugging", "POC development", "Legacy-system caution", "Performance optimization"],
  },
  {
    title: "Work Quality",
    skills: ["Accessibility awareness", "Documentation habits", "Workflow design", "Reliability under pressure"],
  },
];

const profileSignals = [
  "Backend engineer who can deliver React and Next.js UI work when the project needs it.",
  "Has worked directly with production systems, cloud infrastructure, and multi-tenant legacy risk.",
  "Comfortable using AI tools as leverage while still owning architecture and code quality.",
  "Can discuss APIs, databases, deployment, integrations, and user-facing workflow details in one conversation.",
];

export default function Home() {
  const [activeSkillTitle, setActiveSkillTitle] = useState(skillGroups[0].title);

  const activeSkillGroup = useMemo(
    () => skillGroups.find((group) => group.title === activeSkillTitle) ?? skillGroups[0],
    [activeSkillTitle],
  );

  return (
    <main className="site-shell min-h-screen text-[color:var(--foreground)]">
      <header className="site-nav">
        <a className="brand-lockup" href="#top" aria-label="Hassan Zahid home">
          <span className="brand-mark">HZ</span>
          <span>
            <strong>Hassan Zahid</strong>
            <small>Backend-first software engineer</small>
          </span>
        </a>
        <nav aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <a className="nav-download" href={cvHref} download aria-label="Download Hassan Zahid CV PDF">
          Download CV
        </a>
      </header>

      <section id="top" className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">Available for freelance and full-time roles</p>
          <h1>Backend systems, product delivery, and production ownership.</h1>
          <p className="hero-lede">
            I build scalable applications, APIs, integrations, and deployment-ready systems
            with Golang, Laravel, Node.js, databases, AWS, Docker, and AI-assisted
            engineering workflows. I can handle React and Next.js UI work when the product
            needs it, but my deepest lane is backend engineering.
          </p>
          <div className="hero-actions" aria-label="Profile actions">
            <a className="primary-action" href={cvHref} download>
              Download CV
            </a>
            <a className="secondary-action" href="#experience">
              Review experience
            </a>
            <a className="secondary-action" href="mailto:hassanisavailable@gmail.com">
              Email Hassan
            </a>
          </div>
          <div className="stat-strip" aria-label="Profile quick facts">
            {quickStats.map((stat) => (
              <div key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <aside className="profile-panel" aria-label="Profile brief">
          <div className="panel-topline">
            <span>Profile snapshot</span>
            <strong>Open</strong>
          </div>
          <div className="availability-row">
            <span>Location</span>
            <strong>Rawalpindi, Pakistan</strong>
          </div>
          <div className="availability-row">
            <span>Email</span>
            <a href="mailto:hassanisavailable@gmail.com">hassanisavailable@gmail.com</a>
          </div>
          <div className="availability-row">
            <span>Phone</span>
            <a href="tel:+923211946159">+92 321 1946159</a>
          </div>
          <div className="availability-row">
            <span>Availability</span>
            <strong>Remote, freelance, full-time, part-time</strong>
          </div>
          <div className="system-map" aria-label="Core engineering coverage">
            {["APIs", "Data", "Cloud", "Jobs", "UI Delivery", "Support"].map((node) => (
              <span key={node}>{node}</span>
            ))}
          </div>
          <a className="panel-download" href={cvHref} download>
            Download CV PDF
          </a>
        </aside>
      </section>

      <section id="availability" className="content-section availability-section">
        <div className="section-kicker">
          <p className="eyebrow">Availability</p>
          <h2>Open to remote and flexible backend-focused work.</h2>
        </div>
        <div className="availability-grid">
          {availabilityGroups.map((group) => (
            <article key={group.title}>
              <h3>{group.title}</h3>
              <p>{group.detail}</p>
              <div>
                {group.options.map((option) => (
                  <span key={option}>{option}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="content-section">
        <div className="section-kicker">
          <p className="eyebrow">About the work</p>
          <h2>More signal, less noise.</h2>
        </div>
        <div className="proof-grid">
          {proofPoints.map((point) => (
            <article key={point.title} className="proof-card">
              <h3>{point.title}</h3>
              <p>{point.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section role-fit-section">
        <div className="section-kicker">
          <p className="eyebrow">Role fit</p>
          <h2>Where Hassan is most useful.</h2>
        </div>
        <div className="role-fit-grid">
          {roleFitCards.map((role) => (
            <article key={role.title}>
              <h3>{role.title}</h3>
              <p>{role.detail}</p>
              <div>
                {role.cues.map((cue) => (
                  <span key={cue}>{cue}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="experience" className="content-section">
        <div className="section-kicker">
          <p className="eyebrow">Company-to-company skill map</p>
          <h2>Experience you can inspect.</h2>
        </div>

        <div className="experience-list">
          {companyExperience.map((item) => {
            const roleSkillCount = item.categories.reduce(
              (total, category) => total + category.skills.length,
              0,
            );

            return (
              <article key={item.id} className="experience-stage">
                <div className="experience-heading">
                  <div>
                    <p className="eyebrow">{item.signal}</p>
                    <h3>
                      {item.role} at {item.company}
                    </h3>
                    <span>
                      {item.location} | {item.period}
                    </span>
                  </div>
                  <div className="skill-count">
                    <strong>{roleSkillCount}</strong>
                    <span>role-linked skills</span>
                  </div>
                </div>

                <p className="experience-overview">{item.overview}</p>

                <div className="achievement-list">
                  {item.achievements.map((achievement) => (
                    <p key={achievement}>{achievement}</p>
                  ))}
                </div>

                <div className="company-skill-grid">
                  {item.categories.map((category) => (
                    <div key={category.title} className="skill-column">
                      <h4>{category.title}</h4>
                      <div>
                        {category.skills.map((skill) => (
                          <span key={skill}>{skill}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="soft-row" aria-label={`${item.company} soft skills`}>
                  {item.softSkills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section id="skills" className="content-section">
        <div className="section-kicker">
          <p className="eyebrow">Overall skills</p>
          <h2>Grouped for fast scanning.</h2>
        </div>

        <div className="skill-command">
          <div className="skill-tabs" role="tablist" aria-label="Overall skill categories">
            {skillGroups.map((group) => (
              <button
                key={group.title}
                type="button"
                role="tab"
                aria-selected={activeSkillGroup.title === group.title}
                aria-controls="skill-spotlight"
                className={activeSkillGroup.title === group.title ? "active" : ""}
                onClick={() => setActiveSkillTitle(group.title)}
              >
                <span>{group.title}</span>
                <small>{group.skills.length} skills</small>
              </button>
            ))}
          </div>

          <article id="skill-spotlight" className="skill-spotlight" role="tabpanel" aria-live="polite">
            <p className="eyebrow">Selected category</p>
            <h3>{activeSkillGroup.title}</h3>
            <p>{activeSkillGroup.summary}</p>
            <div>
              {activeSkillGroup.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </article>
        </div>

        <div className="skill-matrix">
          {skillGroups.map((group) => (
            <details key={group.title} className="skill-accordion" open>
              <summary>
                <span>{group.title}</span>
                <small>{group.skills.length} skills</small>
              </summary>
              <p>{group.summary}</p>
              <div>
                {group.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </details>
          ))}
        </div>

        <div className="soft-skill-board" aria-label="Soft skill categories">
          {softSkillGroups.map((group) => (
            <article key={group.title}>
              <h3>{group.title}</h3>
              <div>
                {group.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section signal-section">
        <div className="section-kicker">
          <p className="eyebrow">Profile signal</p>
          <h2>How I tend to be useful.</h2>
        </div>
        <div className="signal-list">
          {profileSignals.map((signal) => (
            <p key={signal}>{signal}</p>
          ))}
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>Need someone who can own the backend and still care about the product?</h2>
          <p>
            Send the role, the stack, and what needs shipping. I can talk through API
            design, system shape, integrations, deployment, support expectations, and
            where I can be useful fastest.
          </p>
        </div>
        <div className="contact-actions">
          <a className="primary-action" href="mailto:hassanisavailable@gmail.com">
            hassanisavailable@gmail.com
          </a>
          <a className="secondary-action" href="tel:+923211946159">
            +92 321 1946159
          </a>
          <a className="secondary-action" href={cvHref} download>
            Download CV PDF
          </a>
        </div>
      </section>
    </main>
  );
}
