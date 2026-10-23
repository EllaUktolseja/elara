import { Link } from 'react-router-dom'

export default function ProjectCard({ project }) {
  return (
    <article className={`project-card project-card--${project.tone}`}>
      <div className="project-art" aria-hidden="true">
        <span className="project-art-index">{project.number}</span>
        <span className="project-art-word">{project.name}</span>
        <span className="project-art-orbit" />
      </div>
      <div className="project-card-content">
        <div className="project-meta">
          <span>{project.category}</span>
          <span>{project.year}</span>
        </div>
        <h3>{project.name}</h3>
        <p>{project.summary}</p>
        <div className="tag-list">
          {project.stack.slice(0, 4).map((item) => <span className="tag" key={item}>{item}</span>)}
        </div>
        <Link className="text-link" to={`/projects/${project.slug}`}>
          Explore project <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </article>
  )
}
