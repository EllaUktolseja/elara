import { profile } from '../data/portfolio.js'

export default function Contact() {
  const contactOptions = [
    {
      label: 'Email',
      value: profile.email,
      description: 'For opportunities and inquiries',
      href: `mailto:${profile.email}`,
    },
    {
      label: 'LinkedIn',
      value: 'Connect professionally',
      description: 'Professional networking',
      href: profile.linkedinUrl,
    },
    {
      label: 'GitHub',
      value: 'Explore my projects',
      description: 'Code and development work',
      href: profile.githubUrl,
    },
    {
      label: 'WhatsApp',
      value: 'Send me a message',
      description: 'Direct communication',
      href: profile.whatsappUrl,
    },
  ].filter((item) => item.href)

  return (
    <section className="page-section container contact-page">
      <p className="eyebrow">CONTACT</p>

      <h1 className="page-title">
        Good things start{' '}
        <span className="gradient-text">with a conversation.</span>
      </h1>

      <p className="page-lead">
        Interested in a project, collaboration, or a professional opportunity?
        Feel free to connect through one of the channels below.
      </p>

      <div className="contact-layout">
        <div className="contact-note">
          <div className="contact-monogram">
  <img
    src={profile.imageUrl}
    alt={`Portrait of ${profile.name}`}
    className="profile-photo"
  />
</div>

          <p className="eyebrow">{profile.headline}</p>

          <h2>Let&apos;s connect.</h2>

          <p>{profile.bio}</p>

          <span className="contact-location">
            {profile.location}
          </span>
        </div>

        <div className="contact-links">
          {contactOptions.map((item, index) => (
            <a
              className="contact-link"
              key={item.label}
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
            >
              <span className="contact-link-index">
                {String(index + 1).padStart(2, '0')}
              </span>

              <span className="contact-link-content">
                <small>{item.label}</small>
                <strong>{item.value}</strong>
                <span>{item.description}</span>
              </span>

              <span className="contact-link-arrow" aria-hidden="true">
                ↗
              </span>
            </a>
          ))}
        </div>
      </div>

      <p className="small-note">
        I look forward to connecting, exchanging ideas, and exploring
        opportunities to build something meaningful.
      </p>
    </section>
  )
}