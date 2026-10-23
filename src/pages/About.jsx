import { Link } from 'react-router-dom'
import { profile } from '../data/portfolio.js'

export default function About() {
  const facts = [
    { number: '01', label: 'Learn continuously' },
    { number: '02', label: 'Build thoughtfully' },
    { number: '03', label: 'Improve iteratively' },
  ]

  return (
    <section className="mx-auto w-full max-w-[1180px] px-5 sm:px-8 py-20 sm:py-24 max-sm:px-4">
      <p className="mb-5 text-xs font-bold tracking-[.17em] text-purple">ABOUT ME</p>
      <h1 className="mb-14 max-w-4xl font-display text-[clamp(2.8rem,6vw,5.2rem)] font-extrabold leading-[1.04] tracking-[-.07em]">Curious by nature.<br /><span className="text-gradient">Intentional by design.</span></h1>
      <div className="grid grid-cols-[.8fr_1.2fr] items-start gap-14 max-lg:grid-cols-1 max-lg:gap-10">
        <div className="relative mx-auto w-full max-w-sm">
          <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-purple/20 to-[#e8dcff] blur-xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-line bg-gradient-to-br from-[#f5efff] to-white p-3 shadow-xl shadow-purple/10">
            <img src={profile.imageUrl} alt={`Portrait of ${profile.name}`} className="aspect-[4/5] w-full rounded-[1.4rem] object-cover" />
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
          <div className="mb-10 grid grid-cols-3 gap-3 max-sm:grid-cols-1">
            {facts.map((fact) => <div className="rounded-xl bg-[#f4effd] p-4" key={fact.number}><strong className="mb-3 block text-xs tracking-[.15em] text-purple">{fact.number}</strong><span className="text-sm font-bold text-ink">{fact.label}</span></div>)}
          </div>
          <h2 className="mb-3 font-display text-2xl font-bold">A little more about me</h2>
          <p className="mb-6 text-muted"><strong className="text-ink">Based in:</strong> {profile.location}</p>
          <div className="flex flex-wrap gap-5">
            {profile.githubUrl && <a className="font-bold text-purple-dark hover:underline" href={profile.githubUrl} target="_blank" rel="noreferrer">GitHub ↗</a>}
            {profile.linkedinUrl && <a className="font-bold text-purple-dark hover:underline" href={profile.linkedinUrl} target="_blank" rel="noreferrer">LinkedIn ↗</a>}
            {profile.email && <a className="font-bold text-purple-dark hover:underline" href={`mailto:${profile.email}`}>Email me ↗</a>}
            <Link className="font-bold text-purple-dark hover:underline" to="/contact">Contact page ↗</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
