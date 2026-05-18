"use client";

import { useMemo, useState } from "react";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BookOpen,
  Brain,
  CheckCircle2,
  Cloud,
  Code2,
  CreditCard,
  Database,
  Download,
  FileText,
  GitBranch,
  Globe2,
  Mail,
  MapPin,
  Phone,
  Rocket,
  Server,
  Settings2,
  ShieldCheck,
  Sparkles,
  Terminal,
  Wrench,
} from "lucide-react";

const cvHref = "/Hassan_Zahid_CV.pdf";
const githubHref = "https://github.com/sudo-hassan-zahid";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Availability", href: "#availability" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Why me", href: "#why-me" },
  { label: "Contact", href: "#contact" },
];

type Achievement = {
  lead: string;
  detail: string;
  note?: string;
};

type SkillGroup = {
  title: string;
  summary: string;
  icon: LucideIcon;
  skills: string[];
};

type WhyMePoint = {
  title: string;
  signal: string;
  detail: string;
  icon: LucideIcon;
};

const skillIconMap: Record<string, LucideIcon> = {
  "Ace by DAISY": CheckCircle2,
  "AWS EC2": Cloud,
  "Background jobs": Settings2,
  Bootstrap: Globe2,
  BullMQ: Settings2,
  "Claude Code": Brain,
  Clio: Wrench,
  CloudFront: Cloud,
  Codex: Brain,
  CodeIgniter: Code2,
  Copilot: Brain,
  CSS: Globe2,
  Cursor: Brain,
  Docker: Server,
  EPUB: BookOpen,
  "FileZilla": Server,
  Firebase: Database,
  Gemini: Brain,
  "Gemini API": Brain,
  Git: Terminal,
  Golang: Code2,
  HTML: Globe2,
  jQuery: Globe2,
  "Kindle Previewer": BookOpen,
  Laravel: Code2,
  "Linux/SSH": Terminal,
  MongoDB: Database,
  MySQL: Database,
  NestJS: Code2,
  "Next.js": Globe2,
  "Node.js": Code2,
  "OpenAI API": Brain,
  PayKickstart: CreditCard,
  PHP: Code2,
  PostgreSQL: Database,
  PuTTY: Terminal,
  React: Globe2,
  Redis: Database,
  "REST APIs": Server,
  Route53: Cloud,
  S3: Cloud,
  Sentry: ShieldCheck,
  SES: Mail,
  SNS: Cloud,
  Stripe: CreditCard,
  Supabase: Database,
  "Swagger/OpenAPI": FileText,
  "Thorium Reader": BookOpen,
  Windsurf: Brain,
  WordPress: Globe2,
  XHTML: Globe2,
  Zoho: Wrench,
};

const quickStats = [
  { value: "Backend-first", label: "APIs, data, jobs, cloud, and support" },
  { value: "2", label: "recent software roles across product and publishing systems" },
  { value: "End-to-end", label: "from architecture to deployment and fixes" },
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
      {
        lead: "Built scalable apps",
        detail: "with Golang, Node.js, NestJS, Laravel, React, and Next.js.",
      },
      {
        lead: "Handled parallel projects",
        detail: "from development to deployment while working with clients and internal teams.",
      },
      {
        lead: "Owned backend delivery",
        detail: "both independently and with Senior and Lead Software Engineers.",
      },
      {
        lead: "Designed data layers",
        detail: "across MySQL, PostgreSQL, MongoDB, Redis, Firebase, and Supabase.",
      },
      {
        lead: "Shipped API integrations",
        detail: "for Stripe, PayKickstart, Zoho, Clio, OpenAI, and Gemini APIs.",
      },
      {
        lead: "Integrated payment flows",
        detail: "for subscription and transaction workflows.",
        note: "Stripe and PayKickstart",
      },
      {
        lead: "Moved heavy workloads",
        detail: "from ElectronJS into scalable backend queues for PDFs, AI operations, and background jobs.",
        note: "Golang asynq and Node.js BullMQ",
      },
      {
        lead: "Worked carefully in legacy systems",
        detail: "where multi-tenant PHP changes could affect several clients and customer workflows.",
      },
      {
        lead: "Built proof-of-concepts",
        detail: "to validate client ideas, rapid experiments, and business workflows.",
      },
      {
        lead: "Used AI-assisted workflows",
        detail: "to speed up development, prototyping, debugging, docs, and repetitive engineering tasks.",
        note: "Claude Code, Codex, Cursor, Windsurf, Copilot",
      },
      {
        lead: "Managed AWS infrastructure",
        detail: "across EC2, S3, SES, CloudFront, Route53, SNS, and alert monitoring.",
      },
      {
        lead: "Containerized applications",
        detail: "with Docker to streamline local development and deployment workflows.",
      },
      {
        lead: "Supported releases",
        detail: "with post-deployment fixes, Sentry monitoring, and critical bug resolution.",
      },
      {
        lead: "Maintained systems end-to-end",
        detail: "covering architecture, deployments, stability, and ongoing backend maintenance.",
      },
    ] satisfies Achievement[],
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
      {
        lead: "Developed accessible EPUBs",
        detail: "with HTML, XHTML, and CSS for multiple e-reader platforms.",
      },
      {
        lead: "Validated publishing quality",
        detail: "with Kindle Previewer, Ace by DAISY, and Thorium Reader.",
        note: "compliance and accessibility",
      },
      {
        lead: "Maintained production workflows",
        detail: "inside internal systems used as the source of truth for book publishing.",
      },
      {
        lead: "Improved author websites",
        detail: "with a focus on responsiveness, usability, and performance.",
      },
      {
        lead: "Built backend features",
        detail: "using Laravel, CodeIgniter, and MySQL.",
      },
      {
        lead: "Customized WordPress",
        detail: "themes and plugins around project requirements.",
      },
      {
        lead: "Handled deployment support",
        detail: "through Linux, FTP, SSH, troubleshooting, and server-side operations.",
      },
    ] satisfies Achievement[],
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

const skillGroups: SkillGroup[] = [
  {
    title: "Backend & APIs",
    summary: "The core lane: services, APIs, jobs, architecture, and reliability.",
    icon: Server,
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
    icon: Database,
    skills: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "Firebase", "Supabase"],
  },
  {
    title: "UI Delivery & Web",
    summary: "Practical UI delivery range for products that need backend work connected to usable interfaces.",
    icon: Globe2,
    skills: ["React", "Next.js", "JavaScript", "WordPress", "HTML", "XHTML", "CSS", "Bootstrap", "jQuery"],
  },
  {
    title: "Cloud & DevOps",
    summary: "Deployment, containerization, server access, monitoring, and AWS services.",
    icon: Cloud,
    skills: ["AWS EC2", "S3", "SES", "CloudFront", "Route53", "SNS", "Docker", "Git", "Linux/SSH", "Sentry"],
  },
  {
    title: "Integrations & AI",
    summary: "Payment, business, legal, and AI API integrations with modern LLM workflows.",
    icon: Brain,
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
    icon: BookOpen,
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

const whyMePoints: WhyMePoint[] = [
  {
    title: "Backend path",
    signal: "API -> DB -> jobs -> deploy",
    detail:
      "I stay close to the full system, not only the endpoint.",
    icon: Server,
  },
  {
    title: "Legacy care",
    signal: "Change carefully",
    detail:
      "Multi-tenant and older systems need patience, testing, and context.",
    icon: ShieldCheck,
  },
  {
    title: "Fast proof",
    signal: "Idea -> working demo",
    detail:
      "I can validate direction quickly without pretending a prototype is final architecture.",
    icon: Rocket,
  },
  {
    title: "Useful context",
    signal: "APIs, AWS, Docker, UI",
    detail:
      "I can connect backend decisions to product, deployment, and support needs.",
    icon: Settings2,
  },
  {
    title: "AI leverage",
    signal: "Faster, still owned",
    detail:
      "I use AI tools for speed while keeping the engineering judgment human.",
    icon: Sparkles,
  },
  {
    title: "After launch",
    signal: "Monitor -> fix -> improve",
    detail:
      "Production support, monitoring, and fixes are part of the work.",
    icon: Wrench,
  },
];

function SkillIcon({ skill }: { skill: string }) {
  const Icon = skillIconMap[skill] ?? CheckCircle2;

  return <Icon aria-hidden="true" size={14} strokeWidth={2.4} />;
}

export default function Home() {
  const [activeSkillTitle, setActiveSkillTitle] = useState(skillGroups[0].title);

  const activeSkillGroup = useMemo(
    () => skillGroups.find((group) => group.title === activeSkillTitle) ?? skillGroups[0],
    [activeSkillTitle],
  );
  const ActiveSkillIcon = activeSkillGroup.icon;

  return (
    <main className="site-shell min-h-screen text-[color:var(--foreground)]">
      <header className="site-nav">
        <a className="brand-lockup" href="#top" aria-label="Hassan Zahid home">
          <span className="brand-mark" aria-hidden="true">
            <span>HZ</span>
          </span>
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
          <Download aria-hidden="true" size={17} strokeWidth={2.4} />
          Download CV
        </a>
      </header>

      <section id="top" className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">Open to remote work</p>
          <h1>Backend systems that ship.</h1>
          <p className="hero-lede">
            I build scalable applications, APIs, integrations, and deployment-ready systems
            with Golang, Laravel, Node.js, databases, AWS, Docker, and AI-assisted
            engineering workflows. I can handle React and Next.js UI work when the product
            needs it, but my deepest lane is backend engineering.
          </p>
          <div className="hero-actions" aria-label="Profile actions">
            <a className="primary-action" href={cvHref} download>
              <Download aria-hidden="true" size={18} strokeWidth={2.4} />
              Download CV
            </a>
            <a className="secondary-action" href="#experience">
              <ArrowRight aria-hidden="true" size={18} strokeWidth={2.4} />
              Review experience
            </a>
            <a className="secondary-action" href="mailto:hassanisavailable@gmail.com">
              <Mail aria-hidden="true" size={18} strokeWidth={2.4} />
              Email me
            </a>
            <a className="secondary-action" href={githubHref} target="_blank" rel="noreferrer">
              <GitBranch aria-hidden="true" size={18} strokeWidth={2.4} />
              GitHub
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

        <aside className="profile-panel" aria-label="Quick profile details">
          <div className="panel-topline">
            <span>Quick details</span>
            <strong>Available</strong>
          </div>
          <div className="availability-row">
            <span>
              <MapPin aria-hidden="true" size={15} strokeWidth={2.4} />
              Location
            </span>
            <strong>Rawalpindi, Pakistan</strong>
          </div>
          <div className="availability-row">
            <span>
              <Mail aria-hidden="true" size={15} strokeWidth={2.4} />
              Email
            </span>
            <a href="mailto:hassanisavailable@gmail.com">hassanisavailable@gmail.com</a>
          </div>
          <div className="availability-row">
            <span>
              <Phone aria-hidden="true" size={15} strokeWidth={2.4} />
              Phone
            </span>
            <a href="tel:+923211946159">+92 321 1946159</a>
          </div>
          <div className="availability-row">
            <span>
              <GitBranch aria-hidden="true" size={15} strokeWidth={2.4} />
              GitHub
            </span>
            <a href={githubHref} target="_blank" rel="noreferrer">
              sudo-hassan-zahid
            </a>
          </div>
          <div className="availability-row">
            <span>
              <CheckCircle2 aria-hidden="true" size={15} strokeWidth={2.4} />
              Availability
            </span>
            <strong>Remote, freelance, full-time, part-time</strong>
          </div>
          <div className="system-map" aria-label="Core engineering coverage">
            {["APIs", "Data", "Cloud", "Jobs", "UI Delivery", "Support"].map((node) => (
              <span key={node}>{node}</span>
            ))}
          </div>
        </aside>
      </section>

      <section id="availability" className="content-section availability-section">
        <div className="section-kicker">
          <p className="eyebrow">Availability</p>
          <h2>Remote backend work.</h2>
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
          <p className="eyebrow">Proof points</p>
          <h2>Practical systems.</h2>
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
          <p className="eyebrow">Experience</p>
          <h2>Experience highlights.</h2>
        </div>

        <div className="experience-list">
          {companyExperience.map((item) => (
            <article key={item.id} className="experience-stage">
              <div className="experience-heading">
                <div>
                  <p className="eyebrow">{item.signal}</p>
                  <h3>
                    {item.role} at {item.company}
                  </h3>
                  <span className="experience-meta">
                    <span>{item.location}</span>
                    <span className="meta-separator" aria-hidden="true" />
                    <span>{item.period}</span>
                  </span>
                </div>
              </div>

              <p className="experience-overview">{item.overview}</p>

                <ul className="achievement-list">
                  {item.achievements.map((achievement) => (
                    <li key={achievement.lead}>
                      <strong>{achievement.lead}</strong>{" "}
                      <span>{achievement.detail}</span>
                      {achievement.note ? <em>{achievement.note}</em> : null}
                    </li>
                  ))}
                </ul>

              <div className="company-skill-grid">
                {item.categories.map((category) => (
                  <div key={category.title} className="skill-column">
                    <h4>{category.title}</h4>
                    <div>
                        {category.skills.map((skill) => (
                          <span key={skill}>
                            <SkillIcon skill={skill} />
                            {skill}
                          </span>
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
          ))}
        </div>
      </section>

      <section id="skills" className="content-section">
        <div className="section-kicker">
          <p className="eyebrow">Skills</p>
          <h2>Skill stack.</h2>
        </div>

        <div className="skill-command">
          <div className="skill-tabs" role="tablist" aria-label="Overall skill categories">
            {skillGroups.map((group) => {
              const GroupIcon = group.icon;

              return (
                <button
                  key={group.title}
                  type="button"
                  role="tab"
                  aria-selected={activeSkillGroup.title === group.title}
                  aria-controls="skill-spotlight"
                  className={activeSkillGroup.title === group.title ? "active" : ""}
                  onClick={() => setActiveSkillTitle(group.title)}
                >
                  <GroupIcon aria-hidden="true" size={18} strokeWidth={2.4} />
                  <span>{group.title}</span>
                </button>
              );
            })}
          </div>

          <article id="skill-spotlight" className="skill-spotlight" role="tabpanel" aria-live="polite">
            <p className="eyebrow">Selected category</p>
            <h3>
              <ActiveSkillIcon aria-hidden="true" size={30} strokeWidth={2.2} />
              {activeSkillGroup.title}
            </h3>
            <p>{activeSkillGroup.summary}</p>
            <div>
              {activeSkillGroup.skills.map((skill) => (
                <span key={skill}>
                  <SkillIcon skill={skill} />
                  {skill}
                </span>
              ))}
            </div>
          </article>
        </div>

        {/* Skill card matrix hidden for now; the tabbed spotlight above is the primary skills UI.
        <div className="skill-matrix">
          {skillGroups.map((group) => (
            <details key={group.title} className="skill-accordion" open>
              <summary>
                <span>{group.title}</span>
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
        */}

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

      <section id="why-me" className="content-section why-me-section">
        <div className="section-kicker why-me-intro">
          <p className="eyebrow">Why me?</p>
          <h2>Useful after launch.</h2>
          <div className="why-me-radar" aria-label="Work style highlights">
            <span>Build</span>
            <span>Ship</span>
            <span>Watch</span>
            <span>Fix</span>
          </div>
        </div>
        <div className="why-me-list">
          {whyMePoints.map((point, index) => {
            const PointIcon = point.icon;

            return (
            <article key={point.title}>
              <div className="why-me-card-top">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <PointIcon aria-hidden="true" size={20} strokeWidth={2.4} />
              </div>
              <h3>{point.title}</h3>
              <strong>{point.signal}</strong>
              <p>{point.detail}</p>
            </article>
            );
          })}
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>Start a backend conversation.</h2>
          <p>
            Send the role, the stack, and what needs shipping. I can talk through API
            design, system shape, integrations, deployment, support expectations, and
            where I can contribute fastest.
          </p>
        </div>
        <div className="contact-actions">
          <a className="primary-action" href="mailto:hassanisavailable@gmail.com">
            <Mail aria-hidden="true" size={18} strokeWidth={2.4} />
            hassanisavailable@gmail.com
          </a>
          <a className="secondary-action" href="tel:+923211946159">
            <Phone aria-hidden="true" size={18} strokeWidth={2.4} />
            +92 321 1946159
          </a>
          <a className="secondary-action" href={githubHref} target="_blank" rel="noreferrer">
            <GitBranch aria-hidden="true" size={18} strokeWidth={2.4} />
            GitHub: sudo-hassan-zahid
          </a>
          <a className="secondary-action" href={cvHref} download>
            <Download aria-hidden="true" size={18} strokeWidth={2.4} />
            Download CV PDF
          </a>
        </div>
      </section>
    </main>
  );
}
