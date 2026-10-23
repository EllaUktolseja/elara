import { experiences, educations } from '../data/portfolio.js'

function formatDate(dateString) {
  if (!dateString) return 'Present'

  const date = new Date(`${dateString}T12:00:00`)

  if (Number.isNaN(date.getTime())) return dateString

  return new Intl.DateTimeFormat('en', {
    month: 'short',
    year: 'numeric',
  }).format(date)
}

function getPeriod(item) {
  return `${formatDate(item.startDate)} — ${
    item.current ? 'Present' : formatDate(item.endDate)
  }`
}

export default function Experience() {
  const sortedExperiences = [...experiences].sort(
    (a, b) => new Date(b.startDate) - new Date(a.startDate),
  )

  return (
    <section className="page-section container">
      <p className="eyebrow">CAREER & EDUCATION</p>

      <h1 className="page-title">
        Learning through{' '}
        <span className="gradient-text">experience.</span>
      </h1>

      <p className="page-lead">
        A record of the roles, responsibilities, and learning experiences
        shaping my professional journey.
      </p>

      <section className="experience-section">
        <p className="eyebrow">EXPERIENCE</p>
        <h2>Where I&apos;ve contributed</h2>

        {sortedExperiences.length > 0 ? (
          <div className="experience-list">
            {sortedExperiences.map((item, index) => (
              <article
                className="experience-card"
                key={`${item.company}-${item.position}-${item.startDate}`}
              >
                <div className="experience-card-marker">
                  {String(index + 1).padStart(2, '0')}
                </div>

                <div className="experience-card-content">
                  <p className="experience-period">{getPeriod(item)}</p>
                  <h3>{item.position}</h3>
                  <p className="experience-company">
                    {item.company}
                    {item.location ? ` · ${item.location}` : ''}
                  </p>

                  {item.employmentType && (
                    <span className="tag">{item.employmentType}</span>
                  )}

                  {item.description && <p>{item.description}</p>}

                  {item.technologies?.length > 0 && (
                    <div className="tag-list">
                      {item.technologies.map((technology) => (
                        <span className="tag" key={technology}>
                          {technology}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        ) : (
          <p>Experience details will be added soon.</p>
        )}
      </section>

      <section className="experience-section">
        <p className="eyebrow">EDUCATION</p>
        <h2>Academic background</h2>

        {educations.length > 0 ? (
          <div className="experience-list">
            {educations.map((item) => (
              <article
                className="experience-card"
                key={`${item.institution}-${item.startDate}`}
              >
                <div className="experience-card-marker" aria-hidden="true">
                  E
                </div>

                <div className="experience-card-content">
                  <p className="experience-period">
                    {formatDate(item.startDate)} — {formatDate(item.endDate)}
                  </p>

                  <h3>{item.degree}</h3>
                  <p className="experience-company">{item.institution}</p>

                  {item.field && <p>{item.field}</p>}
                  {item.description && <p>{item.description}</p>}
                </div>
              </article>
            ))}
          </div>
        ) : (
          <p>Education details will be added soon.</p>
        )}
      </section>
    </section>
  )
}