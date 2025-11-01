'use client';

import { useState, useEffect } from 'react';

import { skills, projects, experiences, achievements, publications, certifications, education, recentImages } from '@/lib/data';

export default function Home() {
  // const [copied, setCopied] = useState(false);

  const [activeProject, setActiveProject] = useState<null | (typeof projects)[number]>(null);
  const [isProjectOpen, setIsProjectOpen] = useState(false);

  const openProject = (p: (typeof projects)[number]) => {
    setActiveProject(p);
    setIsProjectOpen(true);
  };
  const closeProject = () => {
    setIsProjectOpen(false);
    // allow exit animation if added later
    setTimeout(() => setActiveProject(null), 150);
  };

  // Close on ESC
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeProject();
    };
    if (isProjectOpen) window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isProjectOpen]);

  // const handleCopy = async () => {
  //   try {
  //     await navigator.clipboard.writeText('willredhill2519@gmail.com');
  //     setCopied(true);
  //     setTimeout(() => setCopied(false), 2000);
  //   } catch (err) {
  //     console.error('Failed to copy:', err);
  //   }
  // };

  // Light ↔ Dark scheme (modern, minimal, futuristic)
  // Light: airy slate/indigo on off‑white gradient
  // Dark: deep indigo/slate glass with subtle neon accents

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-slate-50 via-indigo-50 to-white text-slate-800 dark:from-[#0b0c1a] dark:via-[#080914] dark:to-[#050611] dark:text-slate-200 antialiased selection:bg-indigo-200/60 selection:text-slate-900 dark:selection:bg-indigo-400/30 dark:selection:text-white">
      {/* Sticky Nav */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/80 border-b border-slate-200/60 dark:supports-[backdrop-filter]:bg-[#0b0c1a]/60 dark:bg-[#0b0c1a]/80 dark:border-white/10">
        <nav className="mx-auto max-w-6xl px-4 sm:px-6 py-3 flex items-center justify-between">
          <a href="#top" className="font-bold tracking-tight text-lg text-slate-900 dark:text-slate-100">Hui William Xu</a>
          <ul className="hidden md:flex gap-6 text-sm text-slate-600 dark:text-slate-300">
            <li><a className="hover:text-indigo-600 dark:hover:text-indigo-300" href="#recent">Recent Updates</a></li>
            <li><a className="hover:text-indigo-600 dark:hover:text-indigo-300" href="#skills">Skills</a></li>
            <li><a className="hover:text-indigo-600 dark:hover:text-indigo-300" href="#projects">Projects</a></li>
            <li><a className="hover:text-indigo-600 dark:hover:text-indigo-300" href="#experience">Experience</a></li>
            <li><a className="hover:text-indigo-600 dark:hover:text-indigo-300" href="#achievements">Achievements</a></li>
            <li><a className="hover:text-indigo-600 dark:hover:text-indigo-300" href="#publications">Publications</a></li>
            <li><a className="hover:text-indigo-600 dark:hover:text-indigo-300" href="#certifications">Certifications</a></li>
            <li><a className="hover:text-indigo-600 dark:hover:text-indigo-300" href="#education">Education</a></li>
          </ul>
          {/* <button
            onClick={handleCopy}
            className="rounded-full border border-indigo-200 bg-indigo-600 text-white hover:bg-indigo-700 transition-colors px-4 py-2 text-sm font-medium shadow-sm dark:border-indigo-500/40 dark:bg-indigo-500 dark:hover:bg-indigo-400"
          >
            {copied ? 'Copied Email!' : 'Copy Email'}
          </button> */}
        </nav>
      </header>

      {/* Hero */}
      <section id="top" className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-60 bg-[radial-gradient(40%_30%_at_50%_10%,#c7d2fe,transparent_60%)] dark:opacity-30 dark:bg-[radial-gradient(40%_30%_at_50%_10%,#6366f1,transparent_60%)]"/>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-20 sm:py-28 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
              Hi, I am <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 to-purple-600 dark:from-[#818cf8] dark:to-[#a78bfa]">William</span>
            </h1>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
              10th Grade student in NAIS Dublin and member of the Irish Chess Union with a passion for software development, aerospace engineering, and technology.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#projects" className="inline-flex items-center justify-center rounded-full bg-slate-900 text-white hover:bg-slate-800 px-5 py-3 text-sm font-semibold shadow-sm dark:bg-indigo-600 dark:hover:bg-indigo-500">
                View Highlights
              </a>
              <a href="#recent" className="inline-flex items-center justify-center rounded-full border border-slate-300 hover:bg-white px-5 py-3 text-sm font-semibold text-slate-700 dark:border-white/20 dark:text-slate-100 dark:hover:bg-white/5">
                Learn About Me
              </a>
            </div>
          </div>
          <div className="md:justify-self-end">
            <div className="w-full max-w-[520px] space-y-3">
              {/* {latest.slice(0, 1).map((n) => (
                <a
                  key={n.title}
                  href={n.href}
                  className="group block rounded-xl border border-slate-200 bg-white/90 backdrop-blur px-4 py-4 shadow-sm transition hover:border-indigo-300 hover:bg-white dark:border-white/10 dark:bg-white/5 dark:hover:border-indigo-400/50 dark:hover:bg-white/10"
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-[11px] uppercase tracking-wide rounded-full border border-slate-200 px-2 py-0.5 text-slate-700 dark:border-white/10 dark:text-indigo-200">
                      {n.tag}
                    </span>
                    <span className="text-xs text-slate-500 dark:text-slate-400">{n.date}</span>
                  </div>
                  <h3 className="mt-2 text-lg font-semibold leading-snug text-slate-900 group-hover:text-indigo-700 dark:text-slate-100 dark:group-hover:text-indigo-300">
                    {n.title}
                  </h3>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{n.blurb}</p>
                </a>
              ))} */}
            </div>
          </div>
        </div>
      </section>

      {/* Recent Updates */}
      <section id="recent" className="mx-auto max-w-6xl px-4 sm:px-6 py-16 border-t border-slate-200/60 dark:border-white/5">
        <h2 className="text-2xl sm:text-3xl font-bold">Recent Updates</h2>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentImages.slice(0, 6).map((m, idx) => (
              <figure
                key={idx}
                className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md dark:border-white/10 dark:bg-white/5"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100 dark:bg-white/10">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={m.src}
                    alt={m.title || m.caption}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                </div>
                <figcaption className="p-4">
                  {m.title && (
                    <div className="mb-1 text-sm font-semibold text-slate-900 dark:text-slate-100">
                      {m.title}
                    </div>
                  )}
                  <p className="text-sm text-slate-600 dark:text-slate-300">{m.caption}</p>
                </figcaption>
              </figure>
            ))}
          </div>
      </section>

      {/* Skills */}
      <section id="skills" className="mx-auto max-w-6xl px-4 sm:px-6 py-16 border-t border-slate-200/60 dark:border-white/5">
        <h2 className="text-2xl sm:text-3xl font-bold">Skills</h2>
        <div className="mt-6 grid sm:grid-cols-3 gap-6">
          {skills.map((col) => (
            <div key={col.title} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-white/5">
              <h3 className="font-semibold">{col.title}</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300 list-disc pl-5">
                {col.items.map((i) => (<li key={i}>{i}</li>))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Projects (highlights) */}
      <section id="projects" className="mx-auto max-w-6xl px-4 sm:px-6 py-16 border-t border-slate-200/60 dark:border-white/5">
        <h2 className="text-2xl sm:text-3xl font-bold">Project Highlights</h2>
        {/* <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Short, high‑signal snapshots. You can expand these later into full pages.</p> */}
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article
              key={p.title}
              role="button"
              tabIndex={0}
              onClick={() => openProject(p)}
              onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && openProject(p)}
              className="group cursor-pointer rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-cyan-300 hover:shadow-md dark:border-white/10 dark:bg-white/5 dark:hover:border-cyan-400/50"
            >
              <h3 className="font-semibold group-hover:text-cyan-700 dark:group-hover:text-cyan-300">{p.title}</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{p.desc}</p>
              <div className="mt-3 inline-flex text-xs rounded-full border border-slate-200 px-2 py-1 text-cyan-700 dark:border-white/10 dark:text-cyan-200">{p.tag}</div>
            </article>
          ))}
        </div>
      </section>

      {/* Experience
      <section id="experience" className="mx-auto max-w-6xl px-4 sm:px-6 py-16 border-t border-slate-200/60 dark:border-white/5">
        <h2 className="text-2xl sm:text-3xl font-bold">Experience</h2>
        <div className="mt-6 space-y-5">
          {experiences.map((e) => (
            <div key={e.role} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-white/5">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <h3 className="font-semibold">{e.role} · <span className="text-indigo-700 dark:text-indigo-300">{e.org}</span></h3>
                <span className="text-xs text-slate-500 dark:text-slate-400">{e.time}</span>
              </div>
              <ul className="mt-3 list-disc pl-5 text-sm text-slate-600 dark:text-slate-300 space-y-1">
                {e.points.map((pt) => (<li key={pt}>{pt}</li>))}
              </ul>
            </div>
          ))}
        </div>
      </section> */}

      {/* Experience */}
      <section id="experience" className="mx-auto max-w-6xl px-4 sm:px-6 py-16 border-t border-slate-200/60 dark:border-white/5">
        <div className="flex items-center gap-3">
          {/* <span
            className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-cyan-600 text-white dark:bg-cyan-500"
            aria-hidden
          >
            <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
              <path d="M9 7V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </span> */}
          <h2 className="text-2xl sm:text-3xl font-bold">Experience</h2>
          <span className="ml-2 inline-flex items-center rounded-full border border-slate-300 px-2 py-0.5 text-xs font-medium text-slate-700 dark:border-white/15 dark:text-slate-300">Timeline</span>
        </div>

        <ol className="mt-8 relative ml-3 border-l border-slate-200 dark:border-white/10">
          {experiences.map((e) => (
            <li key={e.role} className="relative pl-6 py-5 group">
              {/* timeline node */}
              <span
                className="absolute -left-[7px] top-6 h-3 w-3 rounded-full bg-cyan-500 ring-4 ring-white dark:ring-[#0b0c1a]"
                aria-hidden
              />

              <div className="flex items-start justify-between gap-4">
                {/* Left: text */}
                <div className="min-w-0 transition-transform group-hover:translate-x-0.5">
                  <h3 className="font-semibold text-lg">
                    {e.role}
                  </h3>
                  <h4 className="font-semibold text-md">
                    <span className="text-cyan-700 dark:text-cyan-300">{e.org}</span>
                  </h4>
                  <ul className="mt-2 list-disc pl-5 text-sm text-slate-600 dark:text-slate-300 space-y-1">
                    {e.points.map((pt) => (<li key={pt}>{pt}</li>))}
                  </ul>
                </div>

                {/* Right: proof image + date locked together */}
                <div className="shrink-0 flex items-center gap-3">
                  <div className="relative w-32 h-24 sm:w-44 sm:h-28 md:w-56 md:h-36 rounded-lg overflow-hidden border border-slate-200 bg-slate-100 shadow-sm dark:border-white/10 dark:bg-white/10">
                    {e.image ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={e.image}
                        alt={`${e.role} – ${e.org}`}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                        loading="lazy"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_30%_20%,#a5f3fc_10%,transparent_60%)] dark:bg-[radial-gradient(60%_60%_at_30%_20%,#06b6d4_10%,transparent_60%)]" />
                    )}
                  </div>

                  <span className="shrink-0 inline-flex items-center rounded-full border border-cyan-200 bg-cyan-50 px-2.5 py-1 text-xs font-semibold text-cyan-700 dark:border-white/15 dark:bg-white/5 dark:text-cyan-300">
                    {e.time}
                  </span>
                </div>
              </div>

              {/* <div className="flex items-start justify-between gap-4">
                <div className="transition-transform group-hover:translate-x-0.5">
                  <h3 className="font-semibold text-lg">
                    {e.role}
                  </h3>
                  <h4 className="font-semibold text-md">
                    <span className="text-cyan-700 dark:text-cyan-300">{e.org}</span>
                  </h4>
                  <ul className="mt-2 list-disc pl-5 text-sm text-slate-600 dark:text-slate-300 space-y-1">
                    {e.points.map((pt) => (<li key={pt}>{pt}</li>))}
                  </ul>
                </div>

              </div> */}
            </li>
          ))}
        </ol>
      </section>

      {/* Achievements */}
      <section
        id="achievements"
        className="mx-auto max-w-6xl px-4 sm:px-6 py-16 border-t border-slate-200/60 dark:border-white/5"
      >
        <h2 className="text-2xl sm:text-3xl font-bold">Achievements</h2>

        {/* 1 col mobile • 2 cols small • 3 cols large */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((a) => (
            <article
              key={a.name}
              className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md dark:border-white/10 dark:bg-white/5"
            >
              {/* Image / visual space */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100 dark:bg-white/10">
                {a.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={a.image}
                    alt={a.name}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    // loading="lazy"
                  />
                ) : (
                  <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_30%_20%,#a5f3fc_10%,transparent_60%)] dark:bg-[radial-gradient(60%_60%_at_30%_20%,#06b6d4_10%,transparent_60%)]" />
                )}

                {/* corner year tag (always visible) */}
                <span className="absolute left-3 top-3 inline-flex items-center rounded-full bg-white/80 px-2 py-0.5 text-[11px] font-medium text-slate-700 ring-1 ring-slate-200 backdrop-blur dark:bg-[#0b0c1a]/60 dark:text-slate-300 dark:ring-white/10">
                  {a.year}
                </span>
              </div>

              {/* Card body */}
              <div className="p-5">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-semibold leading-snug">{a.name}</h3>
                </div>
                {a.note && (
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{a.note}</p>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Publications & Talks */}
      <section id="publications" className="mx-auto max-w-6xl px-4 sm:px-6 py-16 border-t border-slate-200/60 dark:border-white/5">
        <h2 className="text-2xl sm:text-3xl font-bold">Publications</h2>
        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Abstracts, papers, presentations and conferences.</p>

        <div className="mt-6 space-y-4">
          {publications.map((p) => (
            <article key={`${p.title}-${p.year}`} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-white/5">
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="inline-flex text-[11px] uppercase tracking-wide rounded-full border border-slate-200 px-2 py-0.5 text-indigo-700 dark:border-white/10 dark:text-indigo-200">{p.type}</span>
                    {p.year && <span className="text-xs text-slate-500 dark:text-slate-400">{p.year}</span>}
                  </div>
                  <h3 className="mt-2 font-semibold leading-snug">{p.title}</h3>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                    {[p.venue, p.location].filter(Boolean).join(' · ')}
                  </p>
                  {p.note && <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{p.note}</p>}
                </div>
                {p.link ? (
                  <a href={p.link} target="_blank" rel="noreferrer" className="mt-1 inline-flex items-center rounded-full border border-slate-300 hover:bg-white px-3 py-1 text-xs font-semibold text-slate-700 dark:border-white/20 dark:text-slate-100 dark:hover:bg-white/5">View</a>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section id="certifications" className="mx-auto max-w-6xl px-4 sm:px-6 py-16 border-t border-slate-200/60 dark:border-white/5">
        <h2 className="text-2xl sm:text-3xl font-bold">Certifications</h2>
        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Formal qualifications, short courses, and badges.</p>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((c) => (
            <article
              key={`${c.name}-${c.year}`}
              className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md dark:border-white/10 dark:bg-white/5"
            >
              {/* Media / image space */}
              <div className="relative aspect-[22/12] w-full overflow-hidden bg-slate-100 dark:bg-white/10">
                {c.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={c.image}
                    alt={c.name}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                ) : (
                  <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_30%_20%,#a5f3fc_10%,transparent_60%)] dark:bg-[radial-gradient(60%_60%_at_30%_20%,#06b6d4_10%,transparent_60%)]" />
                )}
                {/* corner year tag */}
                {/* <span className="absolute left-3 top-3 inline-flex items-center rounded-full bg-white/80 px-2 py-0.5 text-[11px] font-medium text-slate-700 ring-1 ring-slate-200 backdrop-blur dark:bg-[#0b0c1a]/60 dark:text-slate-300 dark:ring-white/10">
                  {c.year}
                </span> */}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Education */}
      <section id="education" className="mx-auto max-w-6xl px-4 sm:px-6 py-16 border-t border-slate-200/60 dark:border-white/5">
        <h2 className="text-2xl sm:text-3xl font-bold">Education</h2>
        {education.map((e, idx) => (
          <div key={idx} className="mt-6 rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-white/5">
            <h3 className="font-semibold">{e.school}</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{e.desc}</p>
            <span className="text-xs text-slate-500 dark:text-slate-400">{e.time}</span>
          </div>
        ))}
      </section>

      {/* Website Footer */}
      <footer className="mx-auto max-w-6xl px-4 sm:px-6 py-10 text-xs text-slate-500 border-t border-slate-200/60 dark:text-slate-400 dark:border-white/5">
        © {new Date().getFullYear()} William Xu. Built with Next.js.
      </footer>


      {/* Project Overlay */}
      {isProjectOpen && activeProject && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm"
          aria-modal="true"
          role="dialog"
          aria-labelledby="project-title"
        >
          {/* backdrop click closes */}
          <div className="absolute inset-0" onClick={closeProject} />

          <div className="relative z-[101] w-full max-w-2xl rounded-2xl border border-slate-200 bg-white shadow-xl dark:border-white/10 dark:bg-[#0b0c1a]">
            {/* Header */}
            <div className="flex items-start justify-between gap-4 border-b border-slate-200 p-5 dark:border-white/10">
              <div>
                <div className="flex items-center gap-2">
                  <span className="inline-flex text-[11px] uppercase tracking-wide rounded-full border border-slate-200 px-2 py-0.5 text-cyan-700 dark:border-white/10 dark:text-cyan-200">{activeProject.tag}</span>
                  {activeProject.date ? (
                    <span className="text-xs text-slate-500 dark:text-slate-400">{activeProject.date}</span>
                  ) : null}
                </div>
                <h3 id="project-title" className="mt-2 text-lg font-semibold text-slate-900 dark:text-slate-100">{activeProject.title}</h3>
              </div>
              <button
                onClick={closeProject}
                aria-label="Close"
                className="rounded-full border border-slate-200 p-2 text-slate-600 hover:bg-white dark:border-white/10 dark:text-slate-300 dark:hover:bg-white/5 cursor-pointer"
              >
                <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
              </button>
            </div>

            {/* Body */}
            <div className="p-5">
              {/* Optional image slot */}
              {activeProject.image ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={activeProject.image} alt="" className="mb-4 h-48 w-full rounded-lg object-cover" />
              ) : (
                <div className="mb-4 h-48 w-full rounded-lg bg-[radial-gradient(60%_60%_at_30%_20%,#a5f3fc_10%,transparent_60%)] dark:bg-[radial-gradient(60%_60%_at_30%_20%,#06b6d4_10%,transparent_60%)]" />
              )}

              <p className="text-sm text-slate-700 dark:text-slate-300">
                {activeProject.longDesc || activeProject.desc}
              </p>

              {/* Meta list placeholder, extend later from data */}
              {activeProject.stack && Array.isArray(activeProject.stack) && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {activeProject.stack.map((s: string) => (
                    <span key={s} className="inline-flex items-center rounded-full border border-cyan-200 bg-cyan-50 px-2.5 py-1 text-[12px] font-medium text-cyan-700 dark:border-white/15 dark:bg-white/5 dark:text-cyan-300">{s}</span>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between gap-3 border-t border-slate-200 p-5 dark:border-white/10">
              <div className="text-xs text-slate-500 dark:text-slate-400">Click outside or press Esc to close</div>
              <div className="flex items-center gap-2">
                {activeProject.href ? (
                  <a
                    href={activeProject.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-slate-900 text-white hover:bg-slate-800 px-4 py-2 text-sm font-semibold shadow-sm dark:bg-cyan-600 dark:hover:bg-cyan-500"
                  >
                    Visit Site
                  </a>
                ) : null}
                <button
                  onClick={closeProject}
                  className="inline-flex items-center justify-center rounded-full border border-slate-300 hover:bg-white px-4 py-2 text-sm font-semibold text-slate-700 dark:border-white/20 dark:text-slate-100 dark:hover:bg-white/5 cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
