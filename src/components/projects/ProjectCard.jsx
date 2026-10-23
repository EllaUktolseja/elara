import { Link } from 'react-router-dom'

export default function ProjectCard({ project }) {
  const statusLabel = {
    completed: 'Completed',
    ongoing: 'Ongoing',
    planning: 'Planning',
  }

  return (
    <article className="project-card">
      <div className="project-art">
        <span className="project-art-index">
          {String(project.sortOrder).padStart(2, '0')}
        </span>

        <span className="project-art-word">
          {project.title}
        </span>

        <span className="project-art-orbit" aria-hidden="true" />
      </div>

      <div className="project-card-content">
        <div className="project-meta">
          <span>{statusLabel[project.status] ?? project.status}</span>
          <span>{project.technologies.length} technologies</span>
        </div>

        <h3>{project.title}</h3>

        <p>{project.shortDescription}</p>

        <div className="tag-list">
          {project.technologies.slice(0, 4).map((technology) => (
            <span className="tag" key={technology}>
              {technology}
            </span>
          ))}
        </div>

        <Link
          className="text-link"
          to={`/projects/${project.slug}`}
        >
          Explore project <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </article>
  )
}
