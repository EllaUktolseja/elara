import { profile } from '../data/portfolio.js'

export default function About() {
  return (
    <section className="page-section container">
      <p className="eyebrow">ABOUT ME</p>

      <h1 className="page-title">
        Curious by nature.
        <br />
        <span className="gradient-text">Intentional by design.</span>
      </h1>

      <div className="about-layout">
        <div className="about-monogram">
	  <img
	    src={profile.imageUrl}
	    alt={`Portrait of ${profile.name}`}
	    className="profile-photo"
	  />
	  <i>ELARA / 2026</i>
	</div>

        <div className="prose">
          <p className="eyebrow">{profile.headline}</p>
          <h2>Hello, I&apos;m {profile.name}.</h2>

          <p>{profile.bio}</p>

          <p>
            My approach is to learn by building: break a problem into
            manageable pieces, keep the structure understandable, and improve
            the details through iteration.
          </p>

          <h2>What I&apos;m working toward</h2>

          <p>
            I&apos;m developing my skills through practical projects and
            exploring how thoughtful design, reliable engineering, and
            maintainable code can work together to create useful digital
            experiences.
          </p>

          <div className="about-facts">
            <div>
              <strong>01</strong>
              <span>Learn continuously</span>
            </div>
            <div>
              <strong>02</strong>
              <span>Build thoughtfully</span>
            </div>
            <div>
              <strong>03</strong>
              <span>Improve iteratively</span>
            </div>
          </div>

          <h2>A little more about me</h2>

          <p>
            <strong>Based in:</strong> {profile.location}
          </p>

          <div className="about-links">
            {profile.githubUrl && (
              <a
                className="text-link"
                href={profile.githubUrl}
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>
            )}

            {profile.linkedinUrl && (
              <a
                className="text-link"
                href={profile.linkedinUrl}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn ↗
              </a>
            )}

            {profile.email && (
              <a className="text-link" href={`mailto:${profile.email}`}>
                Email me ↗
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}