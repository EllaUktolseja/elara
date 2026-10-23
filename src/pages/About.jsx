import { Link } from 'react-router-dom'
import { profile } from '../data/portfolio.js'

export default function About() {
  const facts = [
    { number: '01', label: 'Learn continuously' },
    { number: '02', label: 'Build thoughtfully' },
    { number: '03', label: 'Improve iteratively' },
  ]

  const links = [
    { label: 'GitHub', detail: 'Projects & code', href: profile.githubUrl, external: true },
    { label: 'LinkedIn', detail: 'Professional network', href: profile.linkedinUrl, external: true },
    { label: 'Email', detail: 'Get in touch directly', href: profile.email ? `mailto:${profile.email}` : null },
  ].filter((item) => item.href)

  return (
    <section className="mx-auto w-full max-w-[1180px] px-5 py-20 sm:px-8 sm:py-24 max-sm:px-4">
      <p className="mb-5 text-xs font-bold tracking-[.17em] text-purple">ABOUT ME</p>
      <h1 className="mb-14 max-w-4xl font-display text-[clamp(2.8rem,6vw,5.2rem)] font-extrabold leading-[1.04] tracking-[-.07em]">Curious by nature.<br /><span className="text-gradient">Intentional by design.</span></h1>
      <div className="grid grid-cols-[.8fr_1.2fr] items-start gap-14 max-lg:grid-cols-1 max-lg:gap-10">
        <div className="relative mx-auto w-full max-w-sm">
          <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-purple/20 to-[#e8dcff] blur-xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-line bg-gradient-to-br from-[#f5efff] to-white p-3 shadow-xl shadow-purple/10">
            <img src={profile.imageUrl} alt={`Portrait of ${profile.name}`} loading="lazy" decoding="async" className="aspect-[4/5] w-full rounded-[1.4rem] object-cover" />
            <div className="flex items-center justify-between px-3 py-4"><span className="font-display text-lg font-extrabold">ELARA</span><span className="text-xs font-bold tracking-[.15em] text-purple">2026 / PORTFOLIO</span></div>
          </div>
        </div>
        <div className="max-w-3xl">
          <p className="mb-3 text-xs font-bold tracking-[.17em] text-purple">{profile.headline}</p>
          <h2 className="mb-5 font-display text-3xl font-bold tracking-[-.05em]">Hello, I&apos;m {profile.name}.</h2>
          <p className="mb-5 text-base leading-8 text-muted">{profile.bio}</p>
          <p className="mb-10 text-base leading-8 text-muted">My approach is to learn by building: break a problem into manageable pieces, keep the structure understandable, and improve the details through iteration.</p>
          <div className="mb-10 rounded-2xl border border-line bg-white p-6 sm:p-7">
            <h2 className="mb-3 font-display text-2xl font-bold">What I&apos;m working toward</h2>
            <p className="mb-0 leading-8 text-muted">I&apos;m developing my skills through practical projects and exploring how thoughtful design, reliable engineering, and maintainable code can work together to create useful digital experiences.</p>
          </div>
          <div className="mb-12 grid grid-cols-3 gap-3 max-sm:grid-cols-1">
            {facts.map((fact) => <div className="rounded-xl bg-[#f4effd] p-4" key={fact.number}><strong className="mb-3 block text-xs tracking-[.15em] text-purple">{fact.number}</strong><span className="text-sm font-bold text-ink">{fact.label}</span></div>)}
          </div>

          <div className="relative isolate overflow-hidden rounded-[1.75rem] border border-[#e7def7] bg-gradient-to-br from-white via-[#faf7ff] to-[#f0e8ff] p-6 sm:p-8">
            <div className="grid-dots absolute inset-0 -z-10 opacity-30" />
            <div className="mb-6 flex items-start justify-between gap-4">
              <div><p className="mb-2 text-[.65rem] font-bold tracking-[.18em] text-purple">PERSONAL TRANSMISSION</p><h2 className="mb-0 font-display text-2xl font-extrabold tracking-[-.05em] sm:text-3xl">A little more about me</h2></div>
              <span className="mt-1 grid size-10 shrink-0 place-items-center rounded-full border border-purple/15 bg-white/80 text-purple"><span className="size-2 rounded-full bg-purple shadow-[0_0_12px_#9b70ec]" /></span>
            </div>
            <div className="mb-6 flex flex-wrap items-center gap-x-3 gap-y-2 border-b border-purple/10 pb-6 text-sm">
              <span className="font-semibold text-muted">Based in</span><span className="font-bold text-ink">{profile.location}</span>
            </div>
            <div className="grid grid-cols-3 gap-3 max-sm:grid-cols-1">
              {links.map((item, index) => <a className="group rounded-xl border border-white/90 bg-white/80 p-4 transition duration-300 hover:-translate-y-1 hover:border-purple/30 hover:shadow-lg hover:shadow-purple/5" href={item.href} key={item.label} target={item.external ? '_blank' : undefined} rel={item.external ? 'noreferrer' : undefined}><span className="mb-4 block text-[.65rem] font-bold tracking-[.15em] text-purple/65">0{index + 1} / CONNECT</span><span className="block font-display text-lg font-extrabold text-ink transition-colors group-hover:text-purple-dark">{item.label}</span><span className="mt-1 block text-xs leading-5 text-muted">{item.detail}</span></a>)}
            </div>
            <Link className="mt-5 inline-flex border-b border-purple/40 pb-1 text-sm font-bold text-purple-dark transition-colors hover:border-purple hover:text-purple" to="/contact">View all contact options</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
