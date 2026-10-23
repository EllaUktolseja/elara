import { Link } from 'react-router-dom'
import ProjectCard from '../components/projects/ProjectCard.jsx'
import { getProjects } from '../data/portfolio.js'

const featuredProjects = getProjects()
  .filter((project) => project.featured)
  .slice(0, 3)

const strengths = [
  {
    number: '01',
    title: 'Purposeful design',
    text: 'Interfaces that feel clear, considered, and easy to use.',
  },
  {
    number: '02',
    title: 'Reusable foundations',
    text: 'Components and structure built to evolve with the product.',
  },
  {
    number: '03',
    title: 'Continuous learning',
    text: 'Curiosity translated into experiments, projects, and progress.',
  },
]

export default function Home() {
  return (
    <>
      <section className="hero-section container">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="status-dot" /> AVAILABLE FOR OPPORTUNITIES
          </p>

          <h1>
            Turning ideas into{' '}
            <span className="gradient-text">digital experiences.</span>
          </h1>

          <p className="hero-description">
            I&apos;m a developer who enjoys shaping thoughtful interfaces and
            building useful products, one deliberate step at a time.
          </p>

          <div className="hero-actions">
            <Link className="button button-primary" to="/projects">
              Explore my work <span aria-hidden="true">↗</span>
            </Link>
            <Link className="button button-secondary" to="/about">
              More about me
            </Link>
          </div>

          <div className="hero-note">
            <span className="hero-note-line" />
            Based in Indonesia · Open to learning and collaboration
          </div>
        </div>

        <div className="hero-visual" aria-label="Abstract Elara visual">
          <div className="visual-grid" />
          <div className="visual-glow" />
          <div className="visual-orbit visual-orbit-one" />
          <div className="visual-orbit visual-orbit-two" />
          <div className="visual-core">
            <span>E</span>
          </div>
          <span className="visual-label visual-label-top">
            CREATIVE THINKING
          </span>
          <span className="visual-label visual-label-bottom">
            BUILT WITH INTENTION
          </span>
          <span className="visual-spark spark-one">✳</span>
          <span className="visual-spark spark-two">✦</span>
        </div>
      </section>

      <section className="intro-strip">
        <div className="container intro-strip-inner">
          <span className="eyebrow">A LITTLE ABOUT MY APPROACH</span>
          <p>
            Good digital work sits at the intersection of{' '}
            <strong>clarity, curiosity, and craft.</strong>
          </p>
          <Link className="text-link" to="/about">
            Get to know me <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>

      <section className="section container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">WHAT I VALUE</p>
            <h2>
              Build with <span className="gradient-text">intention.</span>
            </h2>
          </div>
          <p className="section-intro">
            I care about the details, but I never lose sight of the people and
            purpose behind a product.
          </p>
        </div>

        <div className="strength-grid">
          {strengths.map((item) => (
            <article className="strength-card" key={item.number}>
              <span className="strength-number">{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-tinted">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">SELECTED WORK</p>
              <h2>
                Projects in <span className="gradient-text">progress.</span>
              </h2>
            </div>
            <Link className="text-link" to="/projects">
              View all projects <span aria-hidden="true">↗</span>
            </Link>
          </div>

          <div className="project-grid">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section className="closing-cta container">
        <div>
          <p className="eyebrow">HAVE SOMETHING IN MIND?</p>
          <h2>
            Let&apos;s make something{' '}
            <span className="gradient-text">meaningful.</span>
          </h2>
        </div>
        <Link className="button button-primary" to="/contact">
          Get in touch <span aria-hidden="true">↗</span>
        </Link>
      </section>
    </>
  )
}