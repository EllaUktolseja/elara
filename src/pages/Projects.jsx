import ProjectCard from '../components/projects/ProjectCard.jsx'
import { getProjects } from '../data/portfolio.js'

const projects = getProjects()

export default function Projects() {
  return (
    <section className="mx-auto w-full max-w-[1180px] px-5 sm:px-8 py-20 sm:py-24 max-sm:px-4">
      <p className="mb-5 text-xs font-bold tracking-[.17em] text-purple">PROJECT ARCHIVE</p>
      <h1 className="mb-6 max-w-4xl font-display text-[clamp(2.8rem,6vw,5.2rem)] font-extrabold leading-[1.04] tracking-[-.07em]">A collection of things <span className="text-gradient">I&apos;m building.</span></h1>
      <p className="mb-12 max-w-2xl text-lg leading-8 text-muted">A mix of finished work, active experiments, and ideas being shaped into something more concrete.</p>
      <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-2 max-md:grid-cols-1">
        {projects.map((project) => <ProjectCard key={project.slug} project={project} />)}
      </div>
    </section>
  )
}
