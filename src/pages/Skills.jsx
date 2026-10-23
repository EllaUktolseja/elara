import { skills } from '../data/portfolio.js'

const categoryNotes = {
  Languages: 'The foundations I use to reason about problems and express solutions.',
  Frontend: 'The tools I use to shape clear, responsive user experiences.',
  Backend: 'The foundations for application logic and server-side workflows.',
  Databases: 'How I organize, persist, and work with application data.',
  Tools: 'The workflow that supports building, testing, and shipping projects.',
}

export default function Skills() {
  const groupedSkills = Object.entries([...skills].sort((a, b) => a.sortOrder - b.sortOrder).reduce((groups, skill) => {
    const category = skill.category || 'Other'
    if (!groups[category]) groups[category] = []
    groups[category].push(skill)
    return groups
  }, {}))

  return (
    <section className="mx-auto w-full max-w-[1180px] px-5 py-20 sm:px-8 sm:py-24 max-sm:px-4">
      <p className="mb-5 text-xs font-bold tracking-[.17em] text-purple">SKILLS & TOOLKIT</p>
      <h1 className="mb-6 max-w-4xl font-display text-[clamp(2.8rem,6vw,5.2rem)] font-extrabold leading-[1.04] tracking-[-.07em]">A toolkit in <span className="text-gradient">constant motion.</span></h1>
      <p className="mb-12 max-w-2xl text-lg leading-8 text-muted">Skills grow through practice, experimentation, and the work itself. Explore the technologies I&apos;m learning and applying across projects.</p>

      <div className="mb-16 rounded-[1.75rem] border border-line bg-white p-6 shadow-[0_18px_55px_rgba(65,43,108,.045)] sm:p-8">
        <div className="mb-5 flex flex-wrap items-end justify-between gap-4">
          <div><p className="mb-2 text-xs font-bold tracking-[.16em] text-purple">CURRENT TOOLKIT</p><h2 className="mb-0 font-display text-2xl font-extrabold tracking-[-.05em] sm:text-3xl">Learning by building</h2></div>
          <span className="text-sm text-muted">{skills.length} skills across {groupedSkills.length} categories</span>
        </div>
        <div className="flex flex-wrap gap-2.5">
          {['React', 'JavaScript', 'TypeScript', 'Python', 'Node.js', 'PostgreSQL', 'Docker', 'Tailwind CSS'].map((name) => <span key={name} className="rounded-full border border-[#e7def8] bg-[#f8f5ff] px-4 py-2 text-sm font-semibold text-purple-dark">{name}</span>)}
        </div>
      </div>

      <div className="mb-8 flex items-end justify-between gap-6 max-md:flex-col max-md:items-start"><div><p className="mb-3 text-xs font-bold tracking-[.17em] text-purple">THE FULL LANDSCAPE</p><h2 className="mb-0 font-display text-3xl font-extrabold tracking-[-.06em] sm:text-4xl">What sits in my toolkit</h2></div><p className="mb-0 max-w-md leading-7 text-muted">Grouped by how each technology fits into the way I build and learn.</p></div>
      <div className="divide-y divide-line border-y border-line">
        {groupedSkills.map(([category, categorySkills], index) => <section className="grid grid-cols-[.65fr_1.35fr] gap-8 py-8 sm:py-9 max-md:grid-cols-1 max-md:gap-4" key={category}><div><p className="mb-2 text-xs font-bold tracking-[.16em] text-purple/70">{String(index + 1).padStart(2, '0')} / CATEGORY</p><h3 className="mb-2 font-display text-2xl font-extrabold tracking-[-.05em]">{category}</h3><p className="mb-0 max-w-sm text-sm leading-6 text-muted">{categoryNotes[category] || 'Technologies and concepts I am exploring.'}</p></div><div className="flex content-start flex-wrap gap-x-5 gap-y-4">{categorySkills.map((skill) => <span className="skill-word group relative py-1 text-base font-semibold text-ink transition-colors hover:text-purple sm:text-lg" key={skill.name}>{skill.name}<span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-purple transition-transform duration-300 group-hover:scale-x-100" /></span>)}</div></section>)}
      </div>
      <p className="mt-7 text-sm leading-7 text-muted">Skill levels reflect an ongoing learning journey. They are not formal certifications or claims of professional mastery.</p>
    </section>
  )
}
