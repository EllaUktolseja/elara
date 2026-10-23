import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { getProjects } from '../data/portfolio.js'

const featuredProjects = getProjects().filter((project) => project.featured).slice(0, 4)
const slideTones = [
  'from-[#f0e8ff] via-[#f9f6ff] to-[#dfd0ff]',
  'from-[#fff0e8] via-[#fffaf6] to-[#f5d6c6]',
  'from-[#e5f7f1] via-[#f7fffc] to-[#c9eadf]',
  'from-[#e9edff] via-[#f8f9ff] to-[#d6dcff]',
]
const strengths = [
  { number: '01', title: 'Purposeful design', text: 'Interfaces that feel clear, considered, and easy to use.' },
  { number: '02', title: 'Reusable foundations', text: 'Components and structure built to evolve with the product.' },
  { number: '03', title: 'Continuous learning', text: 'Curiosity translated into experiments, projects, and progress.' },
]
function Eyebrow({ children, className = '' }) {
  return <p className={'mb-5 flex items-center gap-2.5 text-[.7rem] font-bold tracking-[.17em] text-purple ' + className}>{children}</p>
}

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0)
  const [slideDirection, setSlideDirection] = useState(1)
  const touchStartX = useRef(null)
  const activeProject = featuredProjects[activeSlide]
  useEffect(() => {
    if (featuredProjects.length < 2) return undefined
    const timer = window.setInterval(() => setActiveSlide((current) => (current + 1) % featuredProjects.length), 6500)
    return () => window.clearInterval(timer)
  }, [])
  const showSlide = (nextIndex, direction = 1) => { setSlideDirection(direction); setActiveSlide((nextIndex + featuredProjects.length) % featuredProjects.length) }

  return (
    <>
      <section className="mx-auto grid min-h-[620px] w-full max-w-[1180px] grid-cols-[1.1fr_.9fr] items-center gap-12 px-5 py-20 sm:px-8 max-lg:min-h-0 max-lg:grid-cols-1 max-lg:gap-10 max-lg:py-16 max-sm:px-4">
        <div className="relative z-10">
          <Eyebrow><span className="size-2 rounded-full bg-emerald-400 shadow-[0_0_0_4px_#e4f7ed]" /> AVAILABLE FOR OPPORTUNITIES</Eyebrow>
          <h1 className="mb-6 max-w-3xl font-display text-[clamp(3.2rem,6.5vw,5.8rem)] font-extrabold leading-[1.02] tracking-[-.07em] text-ink max-sm:text-[clamp(2.8rem,13vw,4rem)]">Turning ideas into <span className="text-gradient">digital experiences.</span></h1>
          <p className="mb-8 max-w-xl text-lg leading-8 text-muted">I&apos;m a developer who enjoys shaping thoughtful interfaces and building useful products, one deliberate step at a time.</p>
          <div className="flex flex-wrap gap-3">
            <Link className="inline-flex min-h-12 items-center justify-center rounded-xl bg-gradient-to-r from-purple-dark to-purple px-5 font-bold text-white shadow-lg shadow-purple/20 transition hover:-translate-y-0.5 hover:shadow-xl" to="/projects">Explore my work</Link>
            <Link className="inline-flex min-h-12 items-center justify-center rounded-xl border border-line bg-white px-5 font-bold text-ink transition hover:-translate-y-0.5 hover:border-purple/40" to="/about">More about me</Link>
            <a className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-[#e2d7f5] bg-[#f8f5ff] px-5 font-bold text-purple-dark transition hover:-translate-y-0.5 hover:border-purple/50 hover:bg-[#f1eaff]" href="/cv.pdf" target="_blank" rel="noreferrer">View CV <span aria-hidden="true">↗</span></a>
          </div>
          <div className="mt-9 flex items-center gap-3 text-sm text-muted"><span className="h-px w-9 bg-purple/50" />Based in Indonesia · Open to learning and collaboration</div>
        </div>
        <div className="relative mx-auto flex aspect-square w-full max-w-[490px] items-center justify-center overflow-hidden rounded-[2.5rem] border border-[#e9e0fa] bg-gradient-to-br from-white via-[#f7f2ff] to-[#e9ddff] shadow-[0_28px_80px_rgba(79,49,139,.12)] max-lg:max-w-[430px] max-sm:rounded-[2rem]" aria-label="Abstract Elara orbital emblem">
          <div className="grid-dots absolute inset-0 opacity-45" />
          <div className="absolute size-[76%] rounded-full border border-purple/15" />
          <div className="absolute size-[58%] rounded-full border border-dashed border-purple/25" />
          <div className="absolute h-[82%] w-[38%] rotate-[35deg] rounded-[50%] border border-purple/25" />
          <div className="absolute h-[82%] w-[38%] -rotate-[35deg] rounded-[50%] border border-purple/20" />
          <span className="absolute right-[20%] top-[23%] size-3 rounded-full bg-[#c4a5fd] shadow-[0_0_22px_rgba(167,139,250,.8)]" />
          <span className="absolute bottom-[22%] left-[22%] size-2.5 rounded-full bg-[#9bcbb8] shadow-[0_0_18px_rgba(155,203,184,.75)]" />
          <div className="relative z-10 grid size-36 place-items-center rounded-full border border-white/80 bg-gradient-to-br from-purple-dark via-purple to-[#b28af4] text-white shadow-[0_22px_55px_rgba(93,61,163,.3)] ring-[12px] ring-white/55 sm:size-44">
            <span className="font-display text-7xl font-extrabold tracking-[-.12em] sm:text-8xl">E.</span>
          </div>
          <span className="absolute bottom-7 left-0 right-0 text-center text-[.62rem] font-bold tracking-[.2em] text-purple-dark/55">IDEAS IN ORBIT</span>
        </div>
      </section>

      <section className="border-y border-line bg-white/80">
        <div className="mx-auto grid w-full max-w-[1180px] grid-cols-[.7fr_1.3fr_auto] items-center gap-8 px-5 py-7 sm:px-8 max-lg:grid-cols-1 max-lg:gap-3 max-sm:px-4">
          <Eyebrow className="mb-0">A LITTLE ABOUT MY APPROACH</Eyebrow>
          <p className="mb-0 text-lg leading-7 text-ink">Good digital work sits at the intersection of <strong>clarity, curiosity, and craft.</strong></p>
          <Link className="inline-flex items-center whitespace-nowrap font-bold text-purple-dark transition hover:text-purple" to="/about">Get to know me</Link>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1180px] px-5 py-24 sm:px-8 max-sm:px-4 max-sm:py-16">
        <div className="mb-10 flex items-end justify-between gap-8 max-md:flex-col max-md:items-start">
          <div><Eyebrow>WHAT I VALUE</Eyebrow><h2 className="mb-0 font-display text-4xl font-extrabold tracking-[-.06em] sm:text-5xl">Build with <span className="text-gradient">intention.</span></h2></div>
          <p className="mb-1 max-w-md leading-7 text-muted">I care about the details, but I never lose sight of the people and purpose behind a product.</p>
        </div>
        <div className="grid grid-cols-3 gap-5 max-md:grid-cols-1">
          {strengths.map((item) => <article className="group rounded-2xl border border-line bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-purple/30 hover:shadow-xl hover:shadow-purple/5" key={item.number}><span className="mb-8 block font-display text-sm font-extrabold tracking-[.15em] text-purple/60">{item.number}</span><h3 className="mb-3 text-xl font-bold">{item.title}</h3><p className="mb-0 leading-7 text-muted">{item.text}</p><span className="mt-7 block h-px w-10 bg-purple/40 transition-all duration-300 group-hover:w-20" /></article>)}
        </div>
      </section>

      <section className="overflow-hidden border-y border-[#e7def7] bg-[#f7f3ff]">
        <div className="mx-auto w-full max-w-[1180px] px-5 py-20 sm:px-8 sm:py-24 max-sm:px-4">
          <div className="mb-10 flex items-end justify-between gap-6 max-md:flex-col max-md:items-start">
            <div><Eyebrow>THE WORK, IN MOTION</Eyebrow><h2 className="mb-0 font-display text-4xl font-extrabold tracking-[-.06em] sm:text-5xl">A closer look at <span className="text-gradient">what I build.</span></h2></div>
            <Link className="font-bold text-purple-dark transition hover:text-purple" to="/projects">Browse all projects</Link>
          </div>
          {activeProject && <div key={activeProject.slug} className={"project-slide " + (slideDirection > 0 ? "project-slide--next " : "project-slide--prev ") + "grid grid-cols-[.92fr_1.08fr] overflow-hidden rounded-[2rem] border border-white bg-white shadow-[0_24px_80px_rgba(66,42,112,.10)] max-lg:grid-cols-1"} aria-live="polite" onTouchStart={(event) => { touchStartX.current = event.changedTouches[0].clientX }} onTouchEnd={(event) => { if (touchStartX.current === null) return; const distance = event.changedTouches[0].clientX - touchStartX.current; if (Math.abs(distance) > 45) showSlide(activeSlide + (distance < 0 ? 1 : -1), distance < 0 ? 1 : -1); touchStartX.current = null }}>
            <div className={'project-stage relative isolate flex min-h-[390px] flex-col justify-between overflow-hidden bg-gradient-to-br p-8 sm:p-10 ' + slideTones[activeSlide % slideTones.length]}>
              <div className="grid-dots absolute inset-0 -z-10 opacity-50" /><div className="absolute -right-16 -top-16 size-72 rounded-full border border-purple/20" /><div className="absolute -right-2 top-2 size-48 rounded-full border border-purple/20" /><div className="absolute bottom-12 right-14 size-24 rounded-full bg-white/70 blur-2xl" />
              <div className="flex items-center justify-between gap-4"><span className="text-xs font-bold tracking-[.18em] text-purple-dark/70">FEATURED TRANSMISSION</span><span className="rounded-full border border-white/80 bg-white/70 px-3 py-1.5 text-xs font-bold text-purple-dark">{activeProject.status}</span></div>
              <div className="relative z-10"><p className="mb-3 font-display text-sm font-bold tracking-[.16em] text-purple-dark/65">{String(activeSlide + 1).padStart(2, '0')} / {String(featuredProjects.length).padStart(2, '0')}</p><h3 className="mb-4 max-w-lg break-words font-display text-5xl font-extrabold leading-[.98] tracking-[-.07em] text-purple-dark sm:text-6xl">{activeProject.title}</h3><p className="mb-0 max-w-sm leading-7 text-purple-dark/75">{activeProject.technologies.slice(0, 4).join(' · ')}</p></div>
              <div className="relative z-10 flex items-center justify-between gap-4"><span className="text-xs font-semibold tracking-wide text-purple-dark/70">SELECTED WORK / 2026</span><span className="font-display text-5xl font-extrabold tracking-[-.1em] text-purple-dark/15">E.</span></div>
            </div>
            <div className="flex flex-col justify-between p-8 sm:p-10">
              <div><p className="mb-4 text-xs font-bold tracking-[.17em] text-purple">{activeProject.status === 'completed' ? 'COMPLETED WORK' : activeProject.status === 'ongoing' ? 'CURRENTLY BUILDING' : 'ON THE ROADMAP'}</p><h3 className="mb-5 font-display text-3xl font-extrabold tracking-[-.06em] sm:text-4xl">{activeProject.title}</h3><p className="mb-7 max-w-xl text-base leading-8 text-muted">{activeProject.shortDescription}</p><div className="mb-8 flex flex-wrap gap-2">{activeProject.technologies.slice(0, 5).map((technology) => <span className="rounded-lg border border-[#e8e1f7] bg-[#faf8ff] px-3 py-2 text-xs font-semibold text-[#65577e]" key={technology}>{technology}</span>)}</div></div>
              <div className="flex flex-wrap items-center justify-between gap-5 border-t border-line pt-6"><Link className="inline-flex min-h-11 items-center rounded-lg bg-purple-dark px-5 font-bold text-white transition hover:bg-purple" to={'/projects/' + activeProject.slug}>View project</Link><div className="flex flex-wrap gap-x-4 gap-y-2" aria-label="Choose featured project">{featuredProjects.map((project, index) => <button key={project.slug} type="button" aria-pressed={index === activeSlide} onClick={() => showSlide(index)} className={"border-b-2 pb-1 text-xs font-bold transition-colors " + (index === activeSlide ? "border-purple text-purple-dark" : "border-transparent text-muted hover:text-purple")}>{project.title}</button>)}</div></div>
            </div>
          </div>}
          <div className="mt-5 flex items-center justify-between gap-4"><p className="mb-0 text-sm text-muted">Highlights rotate automatically. Select a title to explore a project.</p><div className="flex gap-5 text-sm font-bold text-purple-dark"><button className="transition hover:text-purple" type="button" onClick={() => showSlide(activeSlide - 1, -1)}>Previous</button><button className="transition hover:text-purple" type="button" onClick={() => showSlide(activeSlide + 1, 1)}>Next</button></div></div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1180px] px-5 py-20 sm:px-8 max-md:py-16 max-sm:px-4">
        <div className="relative isolate overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#30204f] via-[#493078] to-[#6b45b6] px-7 py-10 text-white shadow-[0_24px_70px_rgba(67,42,117,.22)] sm:px-12 sm:py-14">
          <div className="absolute -right-20 -top-32 -z-10 size-96 rounded-full border border-white/10" /><div className="absolute -right-4 -top-16 -z-10 size-64 rounded-full border border-white/10" /><div className="absolute bottom-0 right-0 -z-10 h-48 w-2/3 bg-gradient-to-l from-[#b99aff]/20 to-transparent blur-3xl" />
          <div className="grid grid-cols-[1fr_auto] items-end gap-10 max-md:grid-cols-1 max-md:items-start"><div><Eyebrow className="text-[#d7c5ff]">HAVE SOMETHING IN MIND?</Eyebrow><h2 className="mb-5 max-w-2xl font-display text-4xl font-extrabold leading-tight tracking-[-.06em] sm:text-5xl">Have an idea? <span className="text-[#d5bfff]">Let&apos;s shape it.</span></h2><p className="mb-0 max-w-xl leading-7 text-white/75">Open to thoughtful collaborations, new challenges, and opportunities to build something useful.</p></div><Link className="inline-flex min-h-12 items-center justify-center rounded-xl bg-white px-6 font-bold text-purple-dark transition hover:-translate-y-0.5 hover:bg-[#f2eaff] max-md:w-fit" to="/contact">Start a conversation</Link></div>
        </div>
      </section>
    </>
  )
}
