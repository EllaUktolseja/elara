import { Link } from 'react-router-dom'
import ProjectCard from '../components/projects/ProjectCard.jsx'
import { getProjects } from '../data/portfolio.js'

const featuredProjects = getProjects().filter((project) => project.featured).slice(0, 3)

const strengths = [
  { number: '01', title: 'Purposeful design', text: 'Interfaces that feel clear, considered, and easy to use.' },
  { number: '02', title: 'Reusable foundations', text: 'Components and structure built to evolve with the product.' },
  { number: '03', title: 'Continuous learning', text: 'Curiosity translated into experiments, projects, and progress.' },
]

function Eyebrow({ children, className = '' }) {
  return <p className={`mb-5 flex items-center gap-2.5 text-[.7rem] font-bold tracking-[.17em] text-purple ${className}`}>{children}</p>
}

export default function Home() {
  return (
    <>
      <section className="mx-auto grid min-h-[620px] w-[min(1180px,calc(100%-2.5rem))] grid-cols-[1.1fr_.9fr] items-center gap-12 py-20 max-lg:min-h-0 max-lg:grid-cols-1 max-lg:gap-10 max-lg:py-16 max-sm:w-[calc(100%-2rem)]">
        <div className="relative z-10">
          <Eyebrow><span className="size-2 rounded-full bg-emerald-400 shadow-[0_0_0_4px_#e4f7ed]" /> AVAILABLE FOR OPPORTUNITIES</Eyebrow>
          <h1 className="mb-6 max-w-3xl font-display text-[clamp(3.2rem,6.5vw,5.8rem)] font-extrabold leading-[1.02] tracking-[-.07em] text-ink max-sm:text-[clamp(2.8rem,13vw,4rem)]">
            Turning ideas into <span className="text-gradient">digital experiences.</span>
          </h1>
          <p className="mb-8 max-w-xl text-lg leading-8 text-muted">I&apos;m a developer who enjoys shaping thoughtful interfaces and building useful products, one deliberate step at a time.</p>
          <div className="flex flex-wrap gap-3">
            <Link className="inline-flex min-h-12 items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-purple-dark to-purple px-5 font-bold text-white shadow-lg shadow-purple/20 transition hover:-translate-y-0.5 hover:shadow-xl" to="/projects">Explore my work <span aria-hidden="true">↗</span></Link>
            <Link className="inline-flex min-h-12 items-center justify-center rounded-xl border border-line bg-white px-5 font-bold text-ink transition hover:-translate-y-0.5 hover:border-purple/40" to="/about">More about me</Link>
          </div>
          <div className="mt-9 flex items-center gap-3 text-sm text-muted"><span className="h-px w-9 bg-purple/50" />Based in Indonesia · Open to learning and collaboration</div>
        </div>

        <div className="relative mx-auto flex aspect-square w-full max-w-[490px] items-center justify-center overflow-hidden rounded-[2.5rem] border border-[#e9e0fa] bg-gradient-to-br from-white via-[#f7f2ff] to-[#e9ddff] shadow-[0_28px_80px_rgba(79,49,139,.12)] max-lg:max-w-[430px] max-sm:rounded-[2rem]">
          <div className="grid-dots absolute inset-0 opacity-60" />
          <div className="absolute inset-8 rounded-full border border-purple/10" />
          <div className="animate-orbit absolute inset-[14%] rounded-full border border-dashed border-purple/25"><span className="absolute left-[15%] top-[12%] size-3 rounded-full bg-purple shadow-[0_0_18px_#a78bfa]" /></div>
          <div className="animate-orbit absolute inset-[25%] rounded-full border border-purple/20 [animation-direction:reverse]"><span className="absolute bottom-[12%] right-[8%] size-2 rounded-full bg-[#c4a5fd]" /></div>
          <div className="animate-float relative grid size-36 place-items-center rounded-[2.5rem] bg-gradient-to-br from-purple-dark via-purple to-[#b28af4] shadow-[0_22px_50px_rgba(93,61,163,.32)] ring-8 ring-white/60 sm:size-44 sm:rounded-[3rem]"><span className="font-display text-7xl font-extrabold tracking-[-.1em] text-white sm:text-8xl">E</span></div>
          <span className="absolute left-7 top-8 rounded-full border border-white/80 bg-white/75 px-3 py-2 text-[.62rem] font-bold tracking-[.16em] text-purple-dark shadow-sm backdrop-blur">CREATIVE THINKING</span>
          <span className="absolute bottom-8 right-7 rounded-full border border-white/80 bg-white/75 px-3 py-2 text-[.62rem] font-bold tracking-[.16em] text-purple-dark shadow-sm backdrop-blur">BUILT WITH INTENTION</span>
          <span className="absolute right-[18%] top-[24%] text-2xl text-purple/70">✳</span>
          <span className="absolute bottom-[23%] left-[18%] text-xl text-purple/60">✦</span>
        </div>
      </section>

      <section className="border-y border-line bg-white/80">
        <div className="mx-auto grid w-[min(1180px,calc(100%-2.5rem))] grid-cols-[.7fr_1.3fr_auto] items-center gap-8 py-7 max-lg:grid-cols-1 max-lg:gap-3 max-sm:w-[calc(100%-2rem)]">
          <Eyebrow className="mb-0">A LITTLE ABOUT MY APPROACH</Eyebrow>
          <p className="mb-0 text-lg leading-7 text-ink">Good digital work sits at the intersection of <strong>clarity, curiosity, and craft.</strong></p>
          <Link className="inline-flex items-center gap-2 whitespace-nowrap font-bold text-purple-dark hover:gap-3" to="/about">Get to know me <span aria-hidden="true">↗</span></Link>
        </div>
      </section>

      <section className="mx-auto w-[min(1180px,calc(100%-2.5rem))] py-24 max-sm:w-[calc(100%-2rem)] max-sm:py-16">
        <div className="mb-10 flex items-end justify-between gap-8 max-md:flex-col max-md:items-start">
          <div><Eyebrow>WHAT I VALUE</Eyebrow><h2 className="mb-0 font-display text-4xl font-extrabold tracking-[-.06em] sm:text-5xl">Build with <span className="text-gradient">intention.</span></h2></div>
          <p className="mb-1 max-w-md leading-7 text-muted">I care about the details, but I never lose sight of the people and purpose behind a product.</p>
        </div>
        <div className="grid grid-cols-3 gap-5 max-md:grid-cols-1">
          {strengths.map((item) => <article className="rounded-2xl border border-line bg-white p-7 transition hover:-translate-y-1 hover:border-purple/30 hover:shadow-xl hover:shadow-purple/5" key={item.number}><span className="mb-8 block font-display text-sm font-extrabold tracking-[.15em] text-purple/60">{item.number}</span><h3 className="mb-3 text-xl font-bold">{item.title}</h3><p className="mb-0 leading-7 text-muted">{item.text}</p></article>)}
        </div>
      </section>

      <section className="border-y border-line bg-[#f6f2fc]">
        <div className="mx-auto w-[min(1180px,calc(100%-2.5rem))] py-24 max-sm:w-[calc(100%-2rem)] max-sm:py-16">
          <div className="mb-10 flex items-end justify-between gap-6 max-md:flex-col max-md:items-start">
            <div><Eyebrow>SELECTED WORK</Eyebrow><h2 className="mb-0 font-display text-4xl font-extrabold tracking-[-.06em] sm:text-5xl">Projects in <span className="text-gradient">progress.</span></h2></div>
            <Link className="inline-flex items-center gap-2 font-bold text-purple-dark hover:gap-3" to="/projects">View all projects <span aria-hidden="true">↗</span></Link>
          </div>
          <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-2 max-md:grid-cols-1">{featuredProjects.map((project) => <ProjectCard key={project.slug} project={project} />)}</div>
        </div>
      </section>

      <section className="mx-auto flex w-[min(1180px,calc(100%-2.5rem))] items-center justify-between gap-8 py-20 max-md:flex-col max-md:items-start max-sm:w-[calc(100%-2rem)] max-sm:py-14">
        <div><Eyebrow>HAVE SOMETHING IN MIND?</Eyebrow><h2 className="mb-0 max-w-2xl font-display text-4xl font-extrabold leading-tight tracking-[-.06em] sm:text-5xl">Let&apos;s make something <span className="text-gradient">meaningful.</span></h2></div>
        <Link className="inline-flex min-h-12 shrink-0 items-center gap-3 rounded-xl bg-gradient-to-r from-purple-dark to-purple px-5 font-bold text-white shadow-lg shadow-purple/20 transition hover:-translate-y-0.5" to="/contact">Get in touch <span aria-hidden="true">↗</span></Link>
      </section>
    </>
  )
}
