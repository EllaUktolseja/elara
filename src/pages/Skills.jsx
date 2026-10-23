import { skills } from '../data/portfolio.js'

const categoryNotes = {
  Languages: 'Programming languages and core syntax',
  Frontend: 'Building interfaces and user experiences',
  Backend: 'Application logic and server-side development',
  Databases: 'Data storage and database tooling',
  Tools: 'Development workflow and productivity',
}

export default function Skills() {
  const groupedSkills = Object.entries(
    [...skills].sort((a, b) => a.sortOrder - b.sortOrder).reduce((groups, skill) => {
      const category = skill.category || 'Other'
      if (!groups[category]) groups[category] = []
      groups[category].push(skill)
      return groups
    }, {}),
  )

  return (
    <section className="mx-auto w-full max-w-[1180px] px-5 sm:px-8 py-20 sm:py-24 max-sm:px-4">
      <p className="mb-5 text-xs font-bold tracking-[.17em] text-purple">SKILLS & TOOLKIT</p>
      <h1 className="mb-6 max-w-4xl font-display text-[clamp(2.8rem,6vw,5.2rem)] font-extrabold leading-[1.04] tracking-[-.07em]">The tools I use to <span className="text-gradient">make things work.</span></h1>
      <p className="mb-12 max-w-2xl text-lg leading-8 text-muted">A practical toolkit that continues to grow through coursework, experiments, and hands-on projects. This is a snapshot of my current learning journey.</p>
      <div className="grid grid-cols-3 gap-5 max-lg:grid-cols-2 max-md:grid-cols-1">
        {groupedSkills.map(([category, categorySkills], index) => (
          <article className="rounded-3xl border border-line bg-white p-6 shadow-[0_10px_36px_rgba(39,24,72,.04)] transition hover:-translate-y-1 hover:border-purple/30 hover:shadow-xl hover:shadow-purple/5 sm:p-7" key={category}>
            <span className="mb-6 block font-display text-sm font-extrabold tracking-[.15em] text-purple/60">{String(index + 1).padStart(2, '0')}</span>
            <h2 className="mb-2 font-display text-2xl font-bold">{category}</h2>
            <p className="mb-6 min-h-12 leading-6 text-muted">{categoryNotes[category] ?? 'Technologies and concepts I am exploring'}</p>
            <div className="flex flex-wrap gap-2">{categorySkills.map((skill) => <span className="rounded-lg border border-[#e8e1f7] bg-[#f8f5ff] px-3 py-2 text-sm font-semibold text-[#65577e]" key={skill.name}>{skill.name}</span>)}</div>
          </article>
        ))}
      </div>
      <p className="mt-8 text-sm leading-7 text-muted">Skill levels reflect an ongoing learning journey. They are not formal certifications or claims of professional mastery.</p>
    </section>
  )
}
