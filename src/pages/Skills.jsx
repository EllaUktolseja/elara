const groups = [
  { title: 'Frontend', note: 'Building accessible, responsive interfaces', skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Vite', 'Responsive design'] },
  { title: 'Tools & workflow', note: 'Keeping development organized', skills: ['Git & GitHub', 'npm', 'ESLint', 'Vercel', 'VS Code'] },
  { title: 'Exploring', note: 'Expanding from interface to application', skills: ['REST APIs', 'Node.js', 'Express', 'PostgreSQL', 'Docker'] },
]

export default function Skills() {
  return (
    <section className="page-section container">
      <p className="eyebrow">SKILLS & TOOLKIT</p>
      <h1 className="page-title">The tools I use to <span className="gradient-text">make things work.</span></h1>
      <p className="page-lead">A practical toolkit that keeps growing through coursework, experiments, and hands-on projects. This is a snapshot of my current learning journey.</p>
      <div className="skill-grid">
        {groups.map((group, index) => (
          <article className="skill-card" key={group.title}>
            <span className="skill-index">0{index + 1}</span>
            <h2>{group.title}</h2><p>{group.note}</p>
            <div className="tag-list">{group.skills.map((skill) => <span className="tag" key={skill}>{skill}</span>)}</div>
          </article>
        ))}
      </div>
      <p className="small-note">Skill labels are intentionally broad; project-specific experience will be documented as each project develops.</p>
    </section>
  )
}
