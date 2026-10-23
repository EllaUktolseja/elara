import { Link, useParams } from 'react-router-dom'
import { getProjectBySlug } from '../data/portfolio.js'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = getProjectBySlug(slug)

  if (!project) {
    return (
      <section className="page-section container empty-state">
        <p className="eyebrow">PROJECT NOT FOUND</p>
        <h1 className="page-title">
          This page is still{' '}
          <span className="gradient-text">out of reach.</span>
        </h1>
        <p className="page-lead">
          We couldn&apos;t find a project with that address. Try exploring the
          project archive instead.
        </p>
        <Link className="button button-primary" to="/projects">
          Back to projects
        </Link>
      </section>
    )
  }

  const statusLabels = {
    completed: 'Completed',
    ongoing: 'Ongoing',
    planning: 'Planning',
  }

  return (
    <section className="page-section container project-detail">
      <Link className="back-link" to="/projects">
        <span aria-hidden="true">←</span> Back to projects
      </Link>

      <header className="project-detail-header">
        <p className="eyebrow">
          PROJECT {String(project.sortOrder).padStart(2, '0')}
        </p>

        <h1 className="page-title">
          {project.title}
        </h1>

        <p className="page-lead">
          {project.shortDescription}
        </p>

        <div className="project-meta">
          <span>{statusLabels[project.status] ?? project.status}</span>
          {project.year && <span>{project.year}</span>}
        </div>
      </header>

      <div className="project-detail-content">
        <section className="project-detail-section">
          <p className="eyebrow">OVERVIEW</p>
          <h2>About the project</h2>
          <p>{project.description}</p>
        </section>

        <section className="project-detail-section">
          <p className="eyebrow">TECHNOLOGY</p>
          <h2>Tools and technologies</h2>
          <div className="tag-list">
            {project.technologies.map((technology) => (
              <span className="tag" key={technology}>
                {technology}
              </span>
            ))}
          </div>
        </section>

        {project.highlights?.length > 0 && (
          <section className="project-detail-section">
            <p className="eyebrow">HIGHLIGHTS</p>
            <h2>Key features</h2>
            <ul className="project-detail-list">
              {project.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </section>
        )}

        {project.currentFocus && (
          <section className="project-detail-section">
            <p className="eyebrow">CURRENT FOCUS</p>
            <h2>What I&apos;m working on</h2>
            <p>{project.currentFocus}</p>
          </section>
        )}

        {project.milestones?.length > 0 && (
          <section className="project-detail-section">
            <p className="eyebrow">MILESTONES</p>
            <h2>Project progress</h2>
            <ol className="project-detail-list">
              {project.milestones.map((milestone, index) => (
                <li key={`${project.slug}-milestone-${index}`}>
                  {typeof milestone === 'string'
                    ? milestone
                    : milestone.title}
                </li>
              ))}
            </ol>
          </section>
        )}
      </div>

      <footer className="project-detail-footer">
        <Link className="button button-secondary" to="/projects">
          Explore other projects
        </Link>

        {project.repositoryUrl && (
          <a
            className="button button-primary"
            href={project.repositoryUrl}
            target="_blank"
            rel="noreferrer"
          >
            View source code <span aria-hidden="true">↗</span>
          </a>
        )}
      </footer>
    </section>
  )
}