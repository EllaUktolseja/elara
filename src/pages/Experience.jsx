import { experiences, educations } from '../data/portfolio.js'

function formatDate(dateString) {
  if (!dateString) return 'Present'
  const date = new Date(`${dateString}T12:00:00`)
  if (Number.isNaN(date.getTime())) return dateString
  return new Intl.DateTimeFormat('en', { month: 'short', year: 'numeric' }).format(date)
}

function getPeriod(item) {
  return `${formatDate(item.startDate)} — ${item.current ? 'Present' : formatDate(item.endDate)}`
}

function TimelineItem({ item, index, education = false }) {
  const title = education ? item.degree : item.position
  const organization = education ? item.institution : item.company

  return (
    <article className="relative grid grid-cols-[52px_1fr] gap-5 pb-8 sm:grid-cols-[64px_1fr] sm:gap-7">
      <div className="relative flex justify-center">
        <span className="z-10 grid size-11 place-items-center rounded-2xl border border-[#e5dafa] bg-[#f4efff] font-display text-sm font-extrabold text-purple-dark">{String(index + 1).padStart(2, '0')}</span>
        <span className="absolute bottom-0 top-12 w-px bg-line" />
      </div>
      <div className="rounded-2xl border border-line bg-white p-5 shadow-[0_8px_28px_rgba(39,24,72,.035)] sm:p-7">
        <p className="mb-2 text-xs font-bold tracking-wide text-purple">{education ? `${formatDate(item.startDate)} — ${formatDate(item.endDate)}` : getPeriod(item)}</p>
        <h3 className="mb-1 font-display text-xl font-bold">{title}</h3>
        <p className="mb-4 font-semibold text-ink">{organization}{!education && item.location ? ` · ${item.location}` : ''}</p>
        {education && item.field && <p className="mb-3 leading-7 text-muted">{item.field}</p>}
        {!education && item.employmentType && <span className="mb-4 inline-flex rounded-full bg-[#f4efff] px-3 py-1 text-xs font-bold text-purple-dark">{item.employmentType}</span>}
        {item.description && <p className="mb-4 leading-7 text-muted">{item.description}</p>}
        {!education && item.technologies?.length > 0 && <div className="flex flex-wrap gap-2">{item.technologies.map((technology) => <span className="rounded-lg border border-line bg-[#faf8ff] px-2.5 py-1.5 text-xs font-semibold text-[#65577e]" key={technology}>{technology}</span>)}</div>}
      </div>
    </article>
  )
}

export default function Experience() {
  const sortedExperiences = [...experiences].sort((a, b) => new Date(b.startDate) - new Date(a.startDate))

  return (
    <section className="mx-auto w-[min(1000px,calc(100%-2.5rem))] py-20 sm:py-24 max-sm:w-[calc(100%-2rem)]">
      <p className="mb-5 text-xs font-bold tracking-[.17em] text-purple">CAREER & EDUCATION</p>
      <h1 className="mb-6 max-w-4xl font-display text-[clamp(2.8rem,6vw,5.2rem)] font-extrabold leading-[1.04] tracking-[-.07em]">Learning through <span className="text-gradient">experience.</span></h1>
      <p className="mb-14 max-w-2xl text-lg leading-8 text-muted">A record of the roles, responsibilities, and learning experiences shaping my professional journey.</p>
      <section className="mb-16">
        <div className="mb-7"><p className="mb-2 text-xs font-bold tracking-[.17em] text-purple">EXPERIENCE</p><h2 className="font-display text-3xl font-bold tracking-[-.05em]">Where I&apos;ve contributed</h2></div>
        {sortedExperiences.length > 0 ? <div>{sortedExperiences.map((item, index) => <TimelineItem item={item} index={index} key={`${item.company}-${item.position}-${item.startDate}`} />)}</div> : <p className="rounded-2xl border border-dashed border-line p-6 text-muted">Experience details will be added soon.</p>}
      </section>
      <section>
        <div className="mb-7"><p className="mb-2 text-xs font-bold tracking-[.17em] text-purple">EDUCATION</p><h2 className="font-display text-3xl font-bold tracking-[-.05em]">Academic background</h2></div>
        {educations.length > 0 ? <div>{educations.map((item, index) => <TimelineItem item={item} index={index} education key={`${item.institution}-${item.startDate}`} />)}</div> : <p className="rounded-2xl border border-dashed border-line p-6 text-muted">Education details will be added soon.</p>}
      </section>
    </section>
  )
}
