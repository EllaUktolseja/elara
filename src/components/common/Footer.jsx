import { Link } from 'react-router-dom'

const footerLinks = [
  { label: 'About', to: '/about' },
  { label: 'Projects', to: '/projects' },
  { label: 'Skills', to: '/skills' },
  { label: 'Experience', to: '/experience' },
  { label: 'Contact', to: '/contact' },
]

export default function Footer() {
  return (
    <footer className="site-footer mt-auto overflow-hidden border-t border-[#e7def7] bg-gradient-to-b from-white to-[#f7f3ff]">
      <div className="mx-auto w-full max-w-[1180px] px-5 pb-6 pt-12 sm:px-8 sm:pt-14 max-sm:px-4">
        <div className="grid grid-cols-[1fr_auto] items-start gap-8 border-b border-purple/10 pb-10 max-md:grid-cols-1">
          <div className="max-w-lg">
            <Link className="inline-flex items-center gap-2 font-display text-2xl font-extrabold tracking-[-.08em]" to="/">elara<span className="text-purple">.</span><span className="ml-1 rounded-full border border-purple/20 px-2 py-1 text-[.58rem] font-bold tracking-[.16em] text-purple">PORTFOLIO</span></Link>
            <p className="mt-4 max-w-md text-sm leading-7 text-muted">Thoughtful work, useful digital experiences, and a little curiosity for what comes next.</p>
            <p className="mt-5 flex items-center gap-2 text-xs font-semibold tracking-wide text-purple-dark"><span className="size-2 rounded-full bg-emerald-400 shadow-[0_0_0_4px_#e4f7ed]" /> Based in Indonesia · Open to opportunities</p>
          </div>
          <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-6 gap-y-3 pt-2 text-sm font-semibold text-muted max-md:pt-0">
            {footerLinks.map((link) => <Link className="transition-colors hover:text-purple-dark" key={link.to} to={link.to}>{link.label}</Link>)}
          </nav>
        </div>
        <div className="flex items-center justify-between gap-4 pt-5 text-xs text-muted max-sm:flex-col max-sm:items-start">
          <span>© {new Date().getFullYear()} Elara. Built with intention.</span>
          <a className="font-semibold transition-colors hover:text-purple-dark" href="mailto:agatha.uktolseja@gmail.com">Say hello ↗</a>
        </div>
      </div>
    </footer>
  )
}
