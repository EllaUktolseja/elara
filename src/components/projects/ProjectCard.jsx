import { Link } from 'react-router-dom'

const statusStyles = {
  completed: 'bg-emerald-50 text-emerald-700 ring-emerald-200',
  ongoing: 'bg-violet-50 text-violet-700 ring-violet-200',
  planning: 'bg-amber-50 text-amber-700 ring-amber-200',
}
const statusLabels = { completed: 'Completed', ongoing: 'Ongoing', planning: 'Planning' }

export default function ProjectCard({ project }) {
  return (
    <Link to={`/projects/${project.slug}`} className="project-card group block h-full rounded-3xl outline-offset-4 focus-visible:outline-purple">
      <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-white shadow-[0_10px_36px_rgba(39,24,72,.045)] transition duration-500 group-hover:-translate-y-1.5 group-hover:border-purple/30 group-hover:shadow-[0_24px_65px_rgba(68,43,120,.15)]">
        <div className="project-card__art relative isolate flex min-h-52 items-end overflow-hidden bg-gradient-to-br from-[#f3edff] via-[#eee6ff] to-[#e2d7ff] p-6 sm:min-h-60">
          <div className="grid-dots absolute inset-0 -z-10 opacity-60" />
          <div className="project-card__planet absolute -right-8 -top-14 size-52 rounded-full border border-purple/20 transition duration-700 group-hover:scale-110 group-hover:rotate-12" />
          <div className="project-card__planet absolute -right-1 -top-7 size-40 rounded-full border border-purple/25 transition duration-700 group-hover:scale-110 group-hover:-rotate-12" />
          <div className="absolute right-9 top-10 size-20 rounded-full bg-white/50 blur-2xl transition duration-500 group-hover:scale-150" />
          <span className="absolute left-6 top-6 text-xs font-bold tracking-[.2em] text-purple-dark/70">{String(project.sortOrder).padStart(2, '0')} / ELARA</span>
          <span className="project-card__title relative z-10 max-w-[80%] break-words font-display text-3xl font-extrabold leading-tight tracking-[-.06em] text-purple-dark transition duration-500 sm:text-4xl">{project.title}</span>
          <span className="absolute bottom-6 right-6 text-xs font-bold tracking-[.14em] text-purple-dark/0 transition duration-300 group-hover:text-purple-dark">OPEN PROJECT</span>
        </div>
        <div className="flex flex-1 flex-col p-6 sm:p-7">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
            <span className={`inline-flex rounded-full px-3 py-1 text-xs font-bold ring-1 ring-inset ${statusStyles[project.status] ?? 'bg-slate-50 text-slate-700 ring-slate-200'}`}>{statusLabels[project.status] ?? project.status}</span>
            <span className="text-xs text-muted">{project.technologies.length} technologies</span>
          </div>
          <h3 className="mb-2 font-display text-xl font-bold tracking-tight text-ink transition-colors group-hover:text-purple-dark">{project.title}</h3>
          <p className="mb-5 leading-7 text-muted">{project.shortDescription}</p>
          <div className="mt-auto flex flex-wrap gap-2 border-t border-line pt-5">
            {project.technologies.slice(0, 4).map((technology) => <span className="rounded-lg border border-[#e8e1f7] bg-[#f8f5ff] px-2.5 py-1.5 text-xs font-semibold text-[#65577e]" key={technology}>{technology}</span>)}
          </div>
        </div>
      </article>
    </Link>
  )
}
