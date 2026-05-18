"use client";

import { useMemo, useState } from "react";

const cvHref = "/Hassan_Zahid_CV.pdf";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const quickStats = [
  { value: "4+", label: "years building production software" },
  { value: "3", label: "companies across backend, web, and networking" },
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

const companyExperience = [
  {
    id: "alphasquad",
    role: "Backend Engineer",
    company: "AlphaSquad",
    location: "Islamabad",
    period: "Jan 2025 - Present",
    signal: "Current role",
    overview:
      "Backend-focused full-stack work across multiple client projects, owning architecture, deployments, integrations, and production stability.",
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
        title: "Frontend",
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
  {
    id: "corvit",
    role: "Computer Lab Assistant",
    company: "Corvit Systems",
    location: "Islamabad",
    period: "Oct 2020 - Oct 2021",
    signal: "Technical support",
    overview:
      "Supported hands-on networking labs, student troubleshooting, instructor sessions, and lab environment readiness.",
    achievements: [
      "Assisted instructors during networking and lab sessions for practical technical training.",
      "Helped students configure and troubleshoot routers, switches, and firewall setups.",
      "Prepared and maintained networking lab environments for practical sessions and examinations.",
      "Managed hardware inventory and ensured equipment functionality across lab sessions.",
    ],
    categories: [
      {
        title: "Networking",
        skills: ["Routers", "Switches", "Firewalls", "Cisco Packet Tracer", "GNS3"],
      },
      {
        title: "Support",
        skills: ["Student troubleshooting", "Instructor assistance", "Lab readiness"],
      },
      {
        title: "Operations",
        skills: ["Hardware inventory", "Equipment maintenance", "Exam preparation"],
      },
    ],
    softSkills: [
      "Teaching support",
      "Patience",
      "Clear explanations",
      "Operational reliability",
      "Hands-on problem solving",
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
    title: "Frontend & Web",
    summary: "Enough frontend depth to ship usable products and collaborate cleanly.",
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
    title: "Publishing & Tools",
    summary: "A practical base in accessible publishing and hands-on network tooling.",
    skills: ["EPUB", "Kindle Previewer", "Ace by DAISY", "Thorium Reader", "FileZilla", "PuTTY", "Cisco Packet Tracer", "GNS3"],
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

const recruiterSignals = [
  "Backend engineer who can also ship React and Next.js interfaces.",
  "Has worked directly with production systems, cloud infrastructure, and multi-tenant legacy risk.",
  "Comfortable using AI tools as leverage while still owning architecture and code quality.",
  "Can discuss APIs, databases, deployment, integrations, and user-facing workflow details in one conversation.",
];

export default function Home() {
  const [activeCompanyId, setActiveCompanyId] = useState(companyExperience[0].id);

  const activeCompany = useMemo(
    () => companyExperience.find((item) => item.id === activeCompanyId) ?? companyExperience[0],
    [activeCompanyId],
  );

  const activeSkillCount = activeCompany.categories.reduce(
    (total, category) => total + category.skills.length,
    0,
  );

  return (
    <main className="site-shell min-h-screen text-[color:var(--foreground)]">
      <header className="site-nav">
        <a className="brand-lockup" href="#top" aria-label="Hassan Zahid home">
          <span className="brand-mark">HZ</span>
          <span>
            <strong>Hassan Zahid</strong>
            <small>Backend-focused full-stack developer</small>
          </span>
        </a>
        <nav aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <a className="nav-download" href={cvHref} download>
          Download CV
        </a>
      </header>

      <section id="top" className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">Available for freelance and full-time roles</p>
          <h1>Backend systems, full-stack product work, and production ownership.</h1>
          <p className="hero-lede">
            I build scalable applications, APIs, integrations, and deployment-ready systems
            with Golang, Laravel, Node.js, React, Next.js, databases, AWS, Docker, and
            AI-assisted engineering workflows.
          </p>
          <div className="hero-actions" aria-label="Recruiter actions">
            <a className="primary-action" href={cvHref} download>
              Download professional CV
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

        <aside className="recruiter-panel" aria-label="Recruiter brief">
          <div className="panel-topline">
            <span>Recruiter scan</span>
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
          <div className="system-map" aria-label="Core engineering coverage">
            {["APIs", "Data", "Cloud", "Jobs", "Frontend", "Support"].map((node) => (
              <span key={node}>{node}</span>
            ))}
          </div>
          <a className="panel-download" href={cvHref} download>
            Download CV PDF
          </a>
        </aside>
      </section>

      <section id="about" className="content-section">
        <div className="section-kicker">
          <p className="eyebrow">What recruiters should notice</p>
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

      <section id="experience" className="content-section">
        <div className="section-kicker">
          <p className="eyebrow">Company-to-company skill map</p>
          <h2>Experience you can inspect.</h2>
        </div>

        <div className="experience-grid">
          <div className="company-switcher" role="tablist" aria-label="Company experience">
            {companyExperience.map((item) => (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={activeCompany.id === item.id}
                className={activeCompany.id === item.id ? "active" : ""}
                onClick={() => setActiveCompanyId(item.id)}
              >
                <span>{item.company}</span>
                <small>{item.period}</small>
              </button>
            ))}
          </div>

          <article className="experience-stage" role="tabpanel">
            <div className="experience-heading">
              <div>
                <p className="eyebrow">{activeCompany.signal}</p>
                <h3>
                  {activeCompany.role} at {activeCompany.company}
                </h3>
                <span>
                  {activeCompany.location} | {activeCompany.period}
                </span>
              </div>
              <div className="skill-count">
                <strong>{activeSkillCount}</strong>
                <span>role-linked skills</span>
              </div>
            </div>

            <p className="experience-overview">{activeCompany.overview}</p>

            <div className="achievement-list">
              {activeCompany.achievements.map((achievement) => (
                <p key={achievement}>{achievement}</p>
              ))}
            </div>

            <div className="company-skill-grid">
              {activeCompany.categories.map((category) => (
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

            <div className="soft-row" aria-label={`${activeCompany.company} soft skills`}>
              {activeCompany.softSkills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section id="skills" className="content-section">
        <div className="section-kicker">
          <p className="eyebrow">Overall skills</p>
          <h2>Grouped for fast recruiter scanning.</h2>
        </div>

        <div className="skill-matrix">
          {skillGroups.map((group, index) => (
            <details key={group.title} className="skill-accordion" open={index < 3}>
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

      <section className="content-section recruiter-section">
        <div className="section-kicker">
          <p className="eyebrow">Hiring signal</p>
          <h2>Why this profile is worth a call.</h2>
        </div>
        <div className="signal-list">
          {recruiterSignals.map((signal) => (
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
