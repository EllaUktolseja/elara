import { profile } from '../data/portfolio.js'

export default function Contact() {
  const contactOptions = [
    { label: 'Email', value: profile.email, description: 'For opportunities and inquiries', href: profile.email ? `mailto:${profile.email}` : null },
    { label: 'LinkedIn', value: 'Connect professionally', description: 'Professional networking', href: profile.linkedinUrl },
    { label: 'GitHub', value: 'Explore my projects', description: 'Code and development work', href: profile.githubUrl },
    { label: 'WhatsApp', value: 'Send me a message', description: 'Direct communication', href: profile.whatsappUrl },
  ].filter((item) => item.href)

  return (
    <section className="mx-auto w-[min(1180px,calc(100%-2.5rem))] py-20 sm:py-24 max-sm:w-[calc(100%-2rem)]">
      <p className="mb-5 text-xs font-bold tracking-[.17em] text-purple">CONTACT</p>
      <h1 className="mb-6 max-w-5xl font-display text-[clamp(2.8rem,6vw,5.2rem)] font-extrabold leading-[1.04] tracking-[-.07em]">Good things start <span className="text-gradient">with a conversation.</span></h1>
      <p className="mb-14 max-w-2xl text-lg leading-8 text-muted">Interested in a project, collaboration, or a professional opportunity? Feel free to connect through one of the channels below.</p>
      <div className="grid grid-cols-[.85fr_1.15fr] gap-8 max-lg:grid-cols-1">
        <div className="relative overflow-hidden rounded-3xl border border-[#e5daf9] bg-gradient-to-br from-[#f4edff] via-white to-[#ece2ff] p-7 sm:p-9">
          <div className="grid-dots absolute inset-0 opacity-40" />
          <div className="relative">
            <div className="mb-7 size-24 overflow-hidden rounded-3xl border-4 border-white bg-white shadow-lg shadow-purple/10 sm:size-28"><img src={profile.imageUrl} alt={`Portrait of ${profile.name}`} className="h-full w-full object-cover" /></div>
            <p className="mb-3 text-xs font-bold tracking-[.15em] text-purple">{profile.headline}</p>
            <h2 className="mb-4 font-display text-3xl font-extrabold tracking-[-.05em]">Let&apos;s connect.</h2>
            <p className="mb-7 leading-8 text-muted">{profile.bio}</p>
            <span className="inline-flex items-center gap-2 rounded-full border border-white bg-white/80 px-4 py-2 text-sm font-semibold text-purple-dark"><span className="size-2 rounded-full bg-emerald-400" />{profile.location}</span>
          </div>
        </div>
        <div className="space-y-3">
          {contactOptions.map((item, index) => (
            <a className="group flex items-center gap-4 rounded-2xl border border-line bg-white p-5 transition hover:-translate-y-0.5 hover:border-purple/30 hover:shadow-lg hover:shadow-purple/5 sm:gap-5 sm:p-6" key={item.label} href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel={item.href.startsWith('http') ? 'noreferrer' : undefined}>
              <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-[#f4efff] font-display text-sm font-extrabold text-purple-dark">{String(index + 1).padStart(2, '0')}</span>
              <span className="min-w-0 flex-1"><span className="mb-1 block text-xs font-bold uppercase tracking-[.13em] text-purple">{item.label}</span><strong className="block break-words font-display text-lg font-bold text-ink">{item.value}</strong><span className="mt-1 block text-sm text-muted">{item.description}</span></span>
              <span className="text-xl text-purple transition group-hover:-translate-y-1 group-hover:translate-x-1" aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      </div>
      <p className="mt-8 text-sm leading-7 text-muted">I look forward to connecting, exchanging ideas, and exploring opportunities to build something meaningful.</p>
    </section>
  )
}
