import ProjectCard from '../components/projects/ProjectCard.jsx'
import { projects } from '../data/projects.js'

export default function Projects() {
  return (
    <section className="page-section container">
      <p className="eyebrow">PROJECT ARCHIVE</p>
      <h1 className="page-title">A collection of things <span className="gradient-text">I’m building.</span></h1>
      <p className="page-lead">A mix of finished work, active experiments, and ideas being shaped into something more concrete.</p>
      <div className="project-grid projects-page-grid">{projects.map((project) => <ProjectCard key={project.slug} project={project} />)}</div>
    </section>
  )
}
