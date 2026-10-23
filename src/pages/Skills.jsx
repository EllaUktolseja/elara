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
    [...skills]
      .sort((a, b) => a.sortOrder - b.sortOrder)
      .reduce((groups, skill) => {
        const category = skill.category || 'Other'

        if (!groups[category]) {
          groups[category] = []
        }

        groups[category].push(skill)
        return groups
      }, {}),
  )

  return (
    <section className="page-section container">
      <p className="eyebrow">SKILLS & TOOLKIT</p>

      <h1 className="page-title">
        The tools I use to{' '}
        <span className="gradient-text">make things work.</span>
      </h1>

      <p className="page-lead">
        A practical toolkit that continues to grow through coursework,
        experiments, and hands-on projects. This is a snapshot of my current
        learning journey.
      </p>

      <div className="skill-grid">
        {groupedSkills.map(([category, categorySkills], index) => (
          <article className="skill-card" key={category}>
            <span className="skill-index">
              {String(index + 1).padStart(2, '0')}
            </span>

            <h2>{category}</h2>

            <p>
              {categoryNotes[category] ??
                'Technologies and concepts I am exploring'}
            </p>

            <div className="tag-list">
              {categorySkills.map((skill) => (
                <span className="tag" key={skill.name}>
                  {skill.name}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>

      <p className="small-note">
        Skill levels reflect an ongoing learning journey. They are not formal
        certifications or claims of professional mastery.
      </p>
    </section>
  )
}