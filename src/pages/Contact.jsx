const contactOptions = [
  { label: 'Email', value: 'Start a conversation', href: 'mailto:hello@example.com', symbol: '↗' },
  { label: 'GitHub', value: 'Explore my code', href: 'https://github.com/EllaUktolseja', symbol: '↗' },
  { label: 'LinkedIn', value: 'Connect professionally', href: 'https://www.linkedin.com/', symbol: '↗' },
]

export default function Contact() {
  return (
    <section className="page-section container contact-page">
      <p className="eyebrow">CONTACT</p>
      <h1 className="page-title">Good things start <span className="gradient-text">with a conversation.</span></h1>
      <p className="page-lead">Interested in a project, collaboration, or simply exchanging ideas? Reach out through one of the links below.</p>
      <div className="contact-layout">
        <div className="contact-note"><span className="contact-monogram">E</span><h2>Let’s connect.</h2><p>I’m open to thoughtful conversations, learning opportunities, and collaborations that help turn ideas into something useful.</p><span className="contact-location">INDONESIA · ONLINE</span></div>
        <div className="contact-links">{contactOptions.map((item) => <a className="contact-link" key={item.label} href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel={item.href.startsWith('http') ? 'noreferrer' : undefined}><span><small>{item.label}</small><strong>{item.value}</strong></span><span aria-hidden="true">{item.symbol}</span></a>)}</div>
      </div>
      <p className="small-note">Before publishing, replace the example email and LinkedIn URL with your preferred contact details.</p>
    </section>
  )
}
