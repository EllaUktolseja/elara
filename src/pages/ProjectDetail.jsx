import { Link, useParams } from 'react-router-dom'
import { projects } from '../data/projects.js'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find((item) => item.slug === slug)

  if (!project) {
    return (
      <section className="page-section container empty-state">
        <p className="eyebrow">PROJECT NOT FOUND</p>
        <h1 className="page-title">This page is still <span className="gradient-text">out of reach.</span></h1>
        <Link className="button button-primary" to="/projects">Back to projects</Link>
      </section>
    )
  }

  return (
    <section className="page-section container">
      <Link className="back-link" to="/projects">← All projects</Link>
      <div className={`detail-art project-card--${project.tone}`}><span>{project.number}</span><strong>{project.name}</strong><i>{project.category}</i></div>
      <div className="detail-heading">
        <div><p className="eyebrow">{project.category} · {project.year}</p><h1 className="page-title">{project.name}<span className="brand-period">.</span></h1></div>
        <span className={`status-pill status-${project.status.toLowerCase()}`}>{project.status}</span>
      </div>
      <p className="detail-summary">{project.description}</p>
      <div className="detail-columns">
        <div><p className="eyebrow">PROJECT HIGHLIGHTS</p><ul className="highlight-list">{project.highlights.map((item) => <li key={item}><span>↗</span>{item}</li>)}</ul></div>
        <div><p className="eyebrow">TECHNOLOGY</p><div className="tag-list">{project.stack.map((item) => <span className="tag" key={item}>{item}</span>)}</div><p className="small-note">More implementation details will be added as the project evolves.</p></div>
      </div>
    </section>
  )
}
