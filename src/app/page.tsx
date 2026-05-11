const experience = [
  {
    role: "Backend Engineer",
    company: "AlphaSquad, Islamabad",
    period: "Jan 2025 - Present",
    description:
      "Building scalable applications with Golang, Node.js, NestJS, Laravel, React, and Next.js while owning backend architecture, deployments, production stability, and long-term maintenance across multiple projects.",
    tags: ["Golang", "Node.js", "NestJS", "AWS"],
  },
  {
    role: "Junior Web Developer",
    company: "Viral Webbs, Islamabad",
    period: "Oct 2022 - Nov 2024",
    description:
      "Developed EPUB publications, supported publishing management systems, maintained author websites, and built backend features with Laravel, CodeIgniter, MySQL, and WordPress.",
    tags: ["Laravel", "MySQL", "WordPress", "EPUB"],
  },
  {
    role: "Computer Lab Assistant",
    company: "Corvit Systems, Islamabad",
    period: "Oct 2020 - Oct 2021",
    description:
      "Supported networking labs, helped students troubleshoot routers, switches, and firewall setups, and maintained hardware and lab readiness for practical sessions.",
    tags: ["Networking", "Troubleshooting", "Lab Operations"],
  },
];

const skills = [
  "Golang",
  "Laravel",
  "Node.js",
  "NestJS",
  "React",
  "Next.js",
  "PHP",
  "MySQL",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "Supabase",
  "AWS",
  "Docker",
];

const highlights = [
  "4+ years of professional software development experience",
  "Backend-focused full-stack delivery across web apps and APIs",
  "Hands-on with cloud deployments, databases, and AI-assisted workflows",
];

export default function Home() {
  return (
    <main className="grain min-h-screen">
      <div className="mx-auto flex w-full max-w-7xl flex-col px-5 py-6 sm:px-8 lg:px-12">
        <header className="glass-card fade-up sticky top-4 z-20 mb-8 flex items-center justify-between rounded-full px-5 py-3">
          <a href="#top" className="font-mono text-sm font-bold tracking-[0.22em] uppercase">
            Hassan Zahid
          </a>
          <nav className="hidden gap-6 text-sm text-[color:var(--muted)] md:flex">
            <a href="#about" className="transition hover:text-[color:var(--foreground)]">
              About
            </a>
            <a href="#work" className="transition hover:text-[color:var(--foreground)]">
              Work
            </a>
            <a href="#skills" className="transition hover:text-[color:var(--foreground)]">
              Skills
            </a>
            <a href="#contact" className="transition hover:text-[color:var(--foreground)]">
              Contact
            </a>
          </nav>
        </header>

        <section
          id="top"
          className="fade-up-delay grid min-h-[82vh] items-center gap-10 py-10 lg:grid-cols-[1.2fr_0.8fr]"
        >
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="eyebrow">Portfolio Website</p>
              <h1 className="section-title max-w-4xl text-5xl leading-none font-semibold tracking-[-0.06em] sm:text-6xl lg:text-7xl">
                Backend-focused full-stack developer building reliable systems
                and scalable web products.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-[color:var(--muted)] sm:text-xl">
                I&apos;m Hassan Zahid from Rawalpindi, Pakistan. I work across
                backend systems, APIs, cloud infrastructure, and modern web
                applications using Golang, Laravel, Node.js, React, and Next.js.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="#work"
                className="rounded-full bg-[color:var(--accent)] px-6 py-3 text-center font-semibold text-white transition hover:bg-[color:var(--accent-strong)]"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="rounded-full border border-[color:var(--line)] bg-white/50 px-6 py-3 text-center font-semibold transition hover:bg-white/80"
              >
                Let&apos;s Connect
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {highlights.map((item) => (
                <div key={item} className="glass-card rounded-3xl p-4">
                  <p className="text-sm leading-6 text-[color:var(--muted)]">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card relative overflow-hidden rounded-[2rem] p-6 sm:p-8">
            <div className="absolute inset-x-8 top-0 h-32 rounded-full bg-[radial-gradient(circle,rgba(184,92,56,0.28),transparent_68%)] blur-2xl" />
            <div className="relative space-y-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-xs tracking-[0.2em] uppercase text-[color:var(--muted)]">
                    Available For
                  </p>
                  <p className="mt-2 text-2xl font-semibold">Freelance and full-time roles</p>
                </div>
                <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                  Open
                </span>
              </div>

              <div className="space-y-3 border-y border-[color:var(--line)] py-5">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-[color:var(--muted)]">Primary focus</span>
                  <span className="font-semibold">Backend + Full-Stack Development</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-[color:var(--muted)]">Location</span>
                  <span className="font-semibold">Rawalpindi, Pakistan</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-[color:var(--muted)]">Stack</span>
                  <span className="font-semibold">Golang, Laravel, Node.js, React</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-3xl bg-[#fff7f0] p-4">
                  <p className="font-mono text-xs tracking-[0.18em] uppercase text-[color:var(--muted)]">
                    Projects
                  </p>
                  <p className="mt-3 text-3xl font-semibold">Multi</p>
                </div>
                <div className="rounded-3xl bg-[#fff7f0] p-4">
                  <p className="font-mono text-xs tracking-[0.18em] uppercase text-[color:var(--muted)]">
                    Strength
                  </p>
                  <p className="mt-3 text-3xl font-semibold">APIs + Infra</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="grid gap-6 py-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="space-y-3">
            <p className="eyebrow">About</p>
            <h2 className="section-title text-3xl font-semibold sm:text-4xl">
              Engineering backend systems with product awareness.
            </h2>
          </div>
          <div className="glass-card rounded-[2rem] p-6 sm:p-8">
            <p className="text-base leading-8 text-[color:var(--muted)] sm:text-lg">
              Backend-focused Full-Stack Developer with 4+ years of experience
              building scalable web applications and backend systems. My work
              spans API development, cloud infrastructure, database
              optimization, AI-assisted development workflows, and shipping
              production-ready features that stay reliable as products grow.
            </p>
          </div>
        </section>

        <section id="work" className="py-10">
          <div className="mb-8 space-y-3">
            <p className="eyebrow">Experience</p>
            <h2 className="section-title text-3xl font-semibold sm:text-4xl">
              Roles that shaped how I build and ship software.
            </h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {experience.map((item, index) => (
              <article key={item.role} className="glass-card rounded-[2rem] p-6">
                <div className="mb-8 flex items-center justify-between">
                  <span className="font-mono text-xs tracking-[0.2em] uppercase text-[color:var(--muted)]">
                    0{index + 1}
                  </span>
                  <span className="rounded-full border border-[color:var(--line)] px-3 py-1 text-xs">
                    {item.period}
                  </span>
                </div>
                <h3 className="section-title text-2xl font-semibold">{item.role}</h3>
                <p className="mt-2 text-sm font-semibold text-[color:var(--accent-strong)]">
                  {item.company}
                </p>
                <p className="mt-4 text-sm leading-7 text-[color:var(--muted)]">
                  {item.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-white/65 px-3 py-1 text-xs font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="grid gap-6 py-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="glass-card rounded-[2rem] p-6 sm:p-8">
            <p className="eyebrow">Skills</p>
            <h2 className="section-title mt-3 text-3xl font-semibold sm:text-4xl">
              A stack built around scalable apps, integrations, and deployment.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {skills.map((skill) => (
              <div key={skill} className="glass-card rounded-3xl px-5 py-4">
                <p className="font-medium">{skill}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="py-10">
          <div className="glass-card rounded-[2.2rem] px-6 py-8 sm:px-8 sm:py-10">
            <p className="eyebrow">Contact</p>
            <div className="mt-4 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <h2 className="section-title text-3xl font-semibold sm:text-4xl">
                  Let&apos;s build something solid and scalable.
                </h2>
                <p className="mt-4 text-base leading-8 text-[color:var(--muted)] sm:text-lg">
                  If you&apos;re looking for someone who can handle backend
                  systems, APIs, cloud setup, integrations, and full-stack
                  delivery, I&apos;d be happy to connect.
                </p>
              </div>
              <a
                href="mailto:hassanisavailable@gmail.com"
                className="rounded-full bg-[color:var(--foreground)] px-6 py-3 text-center font-semibold text-white transition hover:opacity-90"
              >
                hassanisavailable@gmail.com
              </a>
            </div>
            <div className="mt-6 flex flex-col gap-3 text-sm text-[color:var(--muted)] sm:flex-row sm:gap-6">
              <p>Rawalpindi, Pakistan</p>
              <p>+92 321 1946159</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
