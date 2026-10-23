import { skills } from '../data/portfolio.js'

const categoryNotes = {
  Languages: 'The foundations I use to reason about problems and express solutions.',
  Frontend: 'The tools I use to shape clear, responsive user experiences.',
  Backend: 'The foundations for application logic and server-side workflows.',
  Databases: 'How I organize, persist, and work with application data.',
  Tools: 'The workflow that supports building, testing, and shipping projects.',
}
const orbitSkills = ['React', 'JavaScript', 'TypeScript', 'Node.js', 'Python', 'Docker', 'PostgreSQL', 'Tailwind CSS']

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
      <p className="mb-14 max-w-2xl text-lg leading-8 text-muted">Skills grow through practice, experimentation, and the work itself. This is a living map of the technologies I&apos;m learning and applying across projects.</p>

      <div className="skills-universe relative mb-20 overflow-hidden rounded-[2rem] border border-[#e8def9] bg-gradient-to-br from-white via-[#faf7ff] to-[#f0e8ff] px-5 py-12 sm:px-10 sm:py-16">
        <div className="grid-dots absolute inset-0 opacity-40" /><div className="skills-glow absolute left-1/2 top-1/2 size-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d9c5ff]/40 blur-3xl" />
        <div className="relative mx-auto aspect-square w-full max-w-[660px]">
          <div className="skill-orbit skill-orbit--outer"><span className="skill-orbit__dot" /></div><div className="skill-orbit skill-orbit--middle"><span className="skill-orbit__dot" /></div><div className="skill-orbit skill-orbit--inner"><span className="skill-orbit__dot" /></div>
          <div className="skill-core absolute left-1/2 top-1/2 z-10 flex size-32 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-[2rem] border border-white/80 bg-gradient-to-br from-[#55359e] via-[#7953cf] to-[#aa83ef] text-white shadow-[0_20px_55px_rgba(85,53,158,.30)] sm:size-40 sm:rounded-[2.5rem]"><span className="font-display text-4xl font-extrabold tracking-[-.09em] sm:text-5xl">E.</span><span className="mt-1 text-[.58rem] font-bold tracking-[.2em] text-white/80 sm:text-[.65rem]">TOOLKIT</span></div>
          {orbitSkills.map((name, index) => <span key={name} className={'skill-node skill-node--' + (index + 1)}>{name}</span>)}
          <span className="absolute left-0 top-[16%] hidden text-[.65rem] font-bold tracking-[.2em] text-purple/55 sm:block">LEARN / BUILD / REFINE</span><span className="absolute bottom-[9%] right-0 hidden text-[.65rem] font-bold tracking-[.2em] text-purple/55 sm:block">A SYSTEM THAT EVOLVES</span>
        </div>
        <div className="relative mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-semibold text-muted sm:mt-0"><span className="flex items-center gap-2"><span className="size-1.5 rounded-full bg-purple" />Core technologies</span><span className="flex items-center gap-2"><span className="size-1.5 rounded-full bg-[#b69be9]" />Connected skills</span><span>Practice-led, always evolving</span></div>
      </div>

      <div className="mb-8 flex items-end justify-between gap-6 max-md:flex-col max-md:items-start"><div><p className="mb-3 text-xs font-bold tracking-[.17em] text-purple">THE FULL LANDSCAPE</p><h2 className="mb-0 font-display text-3xl font-extrabold tracking-[-.06em] sm:text-4xl">What sits in my toolkit</h2></div><p className="mb-0 max-w-md leading-7 text-muted">The orbit is the overview. Explore the grouped list below for the complete set of technologies.</p></div>
      <div className="divide-y divide-line border-y border-line">
        {groupedSkills.map(([category, categorySkills], index) => <section className="grid grid-cols-[.65fr_1.35fr] gap-8 py-8 sm:py-9 max-md:grid-cols-1 max-md:gap-4" key={category}><div><p className="mb-2 text-xs font-bold tracking-[.16em] text-purple/70">{String(index + 1).padStart(2, '0')} / CATEGORY</p><h3 className="mb-2 font-display text-2xl font-extrabold tracking-[-.05em]">{category}</h3><p className="mb-0 max-w-sm text-sm leading-6 text-muted">{categoryNotes[category] || 'Technologies and concepts I am exploring.'}</p></div><div className="flex content-start flex-wrap gap-x-5 gap-y-4">{categorySkills.map((skill) => <span className="skill-word group relative py-1 text-base font-semibold text-ink transition-colors hover:text-purple sm:text-lg" key={skill.name}>{skill.name}<span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-purple transition-transform duration-300 group-hover:scale-x-100" /></span>)}</div></section>)}
      </div>
      <p className="mt-7 text-sm leading-7 text-muted">Skill levels reflect an ongoing learning journey. They are not formal certifications or claims of professional mastery.</p>
    </section>
  )
}
