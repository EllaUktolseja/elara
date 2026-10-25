import { Link, useParams } from 'react-router-dom'
import { getProjectBySlug } from '../data/portfolio.js'

const statusStyles = {
  completed: 'bg-emerald-50 text-emerald-700 ring-emerald-200',
  ongoing: 'bg-violet-50 text-violet-700 ring-violet-200',
  planning: 'bg-amber-50 text-amber-700 ring-amber-200',
}
const statusLabels = { completed: 'Completed', ongoing: 'Ongoing', planning: 'Planning' }

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = getProjectBySlug(slug)

  if (!project) {
    return (
      <section className="mx-auto w-full max-w-[1180px] px-5 py-24 sm:px-8 max-sm:px-4">
        <p className="mb-5 text-xs font-bold tracking-[.17em] text-purple">PROJECT NOT FOUND</p>
        <h1 className="mb-6 max-w-3xl font-display text-5xl font-extrabold leading-tight tracking-[-.07em]">This page is still <span className="text-gradient">out of reach.</span></h1>
        <p className="mb-8 max-w-xl text-lg leading-8 text-muted">We couldn&apos;t find a project with that address. Try exploring the project archive instead.</p>
        <Link className="inline-flex min-h-12 items-center gap-3 rounded-xl bg-gradient-to-r from-purple-dark to-purple px-5 font-bold text-white" to="/projects">Back to projects</Link>
      </section>
    )
  }

  const currentFocusItems = Array.isArray(project.currentFocus) ? project.currentFocus : project.currentFocus ? [project.currentFocus] : []
  const milestones = project.milestones ?? []
  const progress = typeof project.progress === 'number' ? Math.min(100, Math.max(0, project.progress)) : null
  const projectType = project.projectType || 'Not documented yet'
  const projectGoal = project.goal || project.shortDescription || project.description

  return (
    <section className="mx-auto w-full max-w-[1000px] px-5 py-12 sm:px-8 sm:py-16 max-sm:px-4">
      <Link className="mb-9 inline-flex items-center gap-2 text-sm font-bold text-purple-dark transition hover:-translate-x-1" to="/projects">← Back to projects</Link>

      <header className="relative isolate mb-8 overflow-hidden rounded-[2rem] border border-[#e5daf9] bg-gradient-to-br from-white via-[#f5efff] to-[#e9ddff] p-7 sm:p-12">
        <div className="grid-dots absolute inset-0 -z-10 opacity-50" />
        <div className="absolute -right-16 -top-24 -z-10 size-80 rounded-full border border-purple/20" />
        <p className="mb-5 text-xs font-bold tracking-[.17em] text-purple">PROJECT {String(project.sortOrder).padStart(2, '0')} / CASE STUDY</p>
        <h1 className="mb-5 max-w-3xl font-display text-[clamp(2.8rem,6vw,5rem)] font-extrabold leading-[1.02] tracking-[-.07em]">{project.title}</h1>
        <p className="mb-7 max-w-2xl text-lg leading-8 text-muted">{project.shortDescription}</p>
        <div className="flex flex-wrap items-center gap-3">
          <span className={`rounded-full px-3 py-1.5 text-xs font-bold ring-1 ring-inset ${statusStyles[project.status] ?? 'bg-slate-50 text-slate-700 ring-slate-200'}`}>{statusLabels[project.status] ?? project.status}</span>
          <span className="rounded-full border border-white/80 bg-white/70 px-3 py-1.5 text-xs font-bold text-purple-dark">{projectType}</span>
          {project.year && <span className="text-sm font-semibold text-muted">{project.year}</span>}
        </div>
      </header>

      <section className="mb-8 grid grid-cols-2 gap-4 max-sm:grid-cols-1">
        <article className="rounded-2xl border border-line bg-white p-6 sm:p-7">
          <p className="mb-3 text-xs font-bold tracking-[.17em] text-purple">PROJECT GOAL</p>
          <h2 className="mb-3 font-display text-xl font-extrabold tracking-[-.04em] sm:text-2xl">Why it exists</h2>
          <p className="mb-0 leading-7 text-muted">{projectGoal}</p>
        </article>
        <article className="rounded-2xl border border-line bg-white p-6 sm:p-7">
          <p className="mb-3 text-xs font-bold tracking-[.17em] text-purple">PROJECT DETAILS</p>
          <h2 className="mb-4 font-display text-xl font-extrabold tracking-[-.04em] sm:text-2xl">Type & contribution</h2>
          <dl className="space-y-4">
            <div><dt className="mb-1 text-xs font-bold uppercase tracking-[.12em] text-muted">Project type</dt><dd className="mb-0 font-semibold text-ink">{projectType}</dd></div>
            {project.projectType === 'Group project' && <div><dt className="mb-1 text-xs font-bold uppercase tracking-[.12em] text-muted">My role</dt><dd className="mb-0 leading-6 text-ink">{project.role || 'Role details to be documented.'}</dd></div>}
            {project.contribution && <div><dt className="mb-1 text-xs font-bold uppercase tracking-[.12em] text-muted">My contribution</dt><dd className="mb-0 leading-6 text-muted">{project.contribution}</dd></div>}
          </dl>
        </article>
      </section>

      <section className="mb-8 overflow-hidden rounded-[1.75rem] border border-[#e8e0f5] bg-white shadow-[0_18px_60px_rgba(65,43,108,.06)]">
        <div className="flex items-center justify-between gap-4 border-b border-line bg-[#faf8ff] px-5 py-4 sm:px-7">
          <div><p className="mb-1 text-[.65rem] font-bold tracking-[.17em] text-purple">PROJECT PREVIEW</p><h2 className="mb-0 font-display text-lg font-extrabold tracking-tight sm:text-xl">A closer look at {project.title}</h2></div>
          <div className="flex shrink-0 gap-1.5" aria-hidden="true"><span className="size-2.5 rounded-full bg-[#f4a5a5]" /><span className="size-2.5 rounded-full bg-[#f2cf87]" /><span className="size-2.5 rounded-full bg-[#9bd7b4]" /></div>
        </div>
        {project.previewImage ? (
          <div className="bg-[#f5f1fc] p-3 sm:p-5"><img src={project.previewImage} alt={`${project.title} website preview`} loading="lazy" decoding="async" className="max-h-[620px] w-full rounded-xl border border-line object-contain object-top shadow-sm" /></div>
        ) : project.liveUrl ? (
          <div className="bg-[#f5f1fc] p-3 sm:p-5"><iframe title={`${project.title} live website preview`} src={project.liveUrl} loading="lazy" className="h-[430px] w-full rounded-xl border border-line bg-white sm:h-[560px]" referrerPolicy="strict-origin-when-cross-origin" /></div>
        ) : (
          <div className="relative isolate flex min-h-[280px] flex-col justify-between overflow-hidden bg-gradient-to-br from-[#fbf9ff] via-[#f2eaff] to-[#e4d8ff] p-6 sm:min-h-[350px] sm:p-10">
            <div className="grid-dots absolute inset-0 -z-10 opacity-45" /><div className="absolute -right-10 -top-20 -z-10 size-72 rounded-full border border-purple/20" /><div className="absolute -right-1 -top-10 -z-10 size-48 rounded-full border border-purple/20" />
            <div className="flex items-center justify-between gap-3"><span className="rounded-full border border-white/80 bg-white/70 px-3 py-1.5 text-[.65rem] font-bold tracking-[.16em] text-purple-dark">ELARA / CASE STUDY</span><span className="text-xs font-semibold text-purple-dark/60">VISUAL PREVIEW</span></div>
            <div className="relative z-10 max-w-2xl"><h3 className="mb-4 break-words font-display text-4xl font-extrabold leading-[1.02] tracking-[-.07em] text-purple-dark sm:text-6xl">{project.title}</h3><p className="mb-6 max-w-lg leading-7 text-purple-dark/75">{project.shortDescription}</p><div className="flex flex-wrap gap-2">{project.technologies.slice(0, 5).map((technology) => <span key={technology} className="rounded-full border border-white/80 bg-white/65 px-3 py-1.5 text-xs font-semibold text-purple-dark">{technology}</span>)}</div></div>
            <p className="mb-0 mt-7 max-w-xl text-xs leading-5 text-purple-dark/65">A preview image or live deployment has not been attached to this project yet. Add a <code>previewImage</code> path in <code>src/data/portfolio.js</code> to display an actual website screenshot here.</p>
          </div>
        )}
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-line px-5 py-4 sm:px-7">
          <p className="mb-0 text-sm text-muted">Built with {project.technologies.slice(0, 3).join(', ')}{project.technologies.length > 3 ? ' and more' : ''}.</p>
          {project.liveUrl && <a className="text-sm font-bold text-purple-dark transition hover:text-purple" href={project.liveUrl} target="_blank" rel="noreferrer">Open live website ↗</a>}
        </div>
      </section>

      <div className="space-y-5">
        <section className="rounded-2xl border border-line bg-white p-6 sm:p-8">
          <p className="mb-3 text-xs font-bold tracking-[.17em] text-purple">OVERVIEW</p><h2 className="mb-4 font-display text-2xl font-bold sm:text-3xl">About the project</h2>
          <p className="mb-0 whitespace-pre-line leading-8 text-muted">{project.description}</p>
        </section>
        <section className="rounded-2xl border border-line bg-white p-6 sm:p-8">
          <p className="mb-3 text-xs font-bold tracking-[.17em] text-purple">TECH STACK</p><h2 className="mb-5 font-display text-2xl font-bold sm:text-3xl">Technologies used</h2>
          <div className="flex flex-wrap gap-2">{project.technologies.map((technology) => <span className="rounded-lg border border-[#e8e1f7] bg-[#f8f5ff] px-3 py-2 text-sm font-semibold text-[#65577e]" key={technology}>{technology}</span>)}</div>
        </section>
        {project.highlights?.length > 0 && <section className="rounded-2xl border border-line bg-white p-6 sm:p-8"><p className="mb-3 text-xs font-bold tracking-[.17em] text-purple">HIGHLIGHTS</p><h2 className="mb-5 font-display text-2xl font-bold sm:text-3xl">Key features</h2><ul className="space-y-3">{project.highlights.map((highlight) => <li className="flex gap-3 leading-7 text-muted" key={highlight}><span className="mt-2 size-2 shrink-0 rounded-full bg-purple" />{highlight}</li>)}</ul></section>}
        {progress !== null && <section className="rounded-2xl border border-line bg-white p-6 sm:p-8"><div className="mb-4 flex items-end justify-between gap-4"><div><p className="mb-3 text-xs font-bold tracking-[.17em] text-purple">PROGRESS</p><h2 className="mb-0 font-display text-2xl font-bold sm:text-3xl">Development progress</h2></div><span className="font-display text-2xl font-extrabold text-purple">{progress}%</span></div><div className="h-3 overflow-hidden rounded-full bg-[#eee8f8]" role="progressbar" aria-label={`${project.title} development progress`} aria-valuemin={0} aria-valuemax={100} aria-valuenow={progress}><div className="h-full rounded-full bg-gradient-to-r from-purple-dark to-[#b28af4] transition-all" style={{ width: `${progress}%` }} /></div><p className="mt-3 text-sm text-muted">Development status based on the current project plan.</p></section>}
        {currentFocusItems.length > 0 && <section className="rounded-2xl border border-line bg-white p-6 sm:p-8"><p className="mb-3 text-xs font-bold tracking-[.17em] text-purple">CURRENT FOCUS</p><h2 className="mb-5 font-display text-2xl font-bold sm:text-3xl">What I&apos;m working on</h2><ul className="space-y-3">{currentFocusItems.map((item, index) => <li className="flex gap-3 leading-7 text-muted" key={`${project.slug}-focus-${index}`}><span className="mt-2 size-2 shrink-0 rounded-full bg-purple" />{item}</li>)}</ul></section>}
        {milestones.length > 0 && <section className="rounded-2xl border border-line bg-white p-6 sm:p-8"><p className="mb-3 text-xs font-bold tracking-[.17em] text-purple">MILESTONES</p><h2 className="mb-5 font-display text-2xl font-bold sm:text-3xl">Project progress</h2><ol className="space-y-3">{milestones.map((milestone, index) => { const title = typeof milestone === 'string' ? milestone : milestone.title; const completed = typeof milestone !== 'string' && milestone.completed === true; return <li className="flex items-start gap-3 rounded-xl bg-[#faf8ff] p-4" key={`${project.slug}-milestone-${index}`}><span className={`mt-0.5 grid size-6 shrink-0 place-items-center rounded-full text-xs font-extrabold ${completed ? 'bg-emerald-100 text-emerald-700' : 'bg-[#eee6ff] text-purple-dark'}`}>{completed ? '✓' : String(index + 1).padStart(2, '0')}</span><span className="flex-1 leading-6 text-ink">{title}</span>{typeof milestone !== 'string' && <span className={`text-xs font-bold ${completed ? 'text-emerald-700' : 'text-muted'}`}>{completed ? 'Completed' : 'Planned'}</span>}</li> })}</ol></section>}
      </div>
      <footer className="mt-8 flex flex-wrap gap-3">
        <Link className="inline-flex min-h-12 items-center justify-center rounded-xl border border-line bg-white px-5 font-bold text-ink transition hover:border-purple/40" to="/projects">Explore other projects</Link>
        {project.repositoryUrl && <a className="inline-flex min-h-12 items-center gap-3 rounded-xl bg-gradient-to-r from-purple-dark to-purple px-5 font-bold text-white shadow-lg shadow-purple/20 transition hover:-translate-y-0.5" href={project.repositoryUrl} target="_blank" rel="noreferrer">View source code ↗</a>}
      </footer>
    </section>
  )
}
