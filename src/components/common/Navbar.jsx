import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/experience', label: 'Experience' },
  { to: '/skills', label: 'Skills' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-30 border-b border-line/80 bg-[#fbfaff]/90 backdrop-blur-xl">
      <nav className="mx-auto flex w-[min(1180px,calc(100%-2.5rem))] min-h-[76px] items-center justify-between gap-5 max-md:w-[calc(100%-2rem)] max-md:flex-wrap max-md:py-3" aria-label="Main navigation">
        <NavLink className="inline-flex shrink-0 items-center gap-2.5 font-display text-xl font-extrabold tracking-[-.07em]" to="/" aria-label="Elara home" onClick={() => setMenuOpen(false)}>
          <span className="grid size-9 place-items-center rounded-xl bg-gradient-to-br from-purple-dark to-purple text-base text-white shadow-lg shadow-purple/20">E</span>
          <span>elara<span className="text-purple">.</span></span>
        </NavLink>

        <button
          type="button"
          className="hidden rounded-xl border border-line bg-white px-3 py-2 text-sm font-semibold text-ink max-md:inline-flex"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? 'Close menu' : 'Menu'}
        </button>

        <div id="primary-navigation" className={`flex items-center gap-5 max-md:order-3 max-md:w-full max-md:flex-wrap max-md:gap-x-5 max-md:gap-y-2 ${menuOpen ? 'max-md:flex' : 'max-md:hidden'}`}>
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) => `relative py-2 text-[.84rem] font-semibold transition-colors hover:text-purple-dark focus-visible:outline-purple ${isActive ? 'text-purple-dark after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:rounded-full after:bg-purple' : 'text-muted'}`}
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <NavLink className="inline-flex shrink-0 items-center gap-2 rounded-xl border border-[#ddd3f5] bg-white px-4 py-3 text-sm font-bold text-purple-dark transition hover:-translate-y-0.5 hover:bg-lilac max-md:ml-auto max-md:hidden" to="/contact">
          Let&apos;s talk <span aria-hidden="true">↗</span>
        </NavLink>
      </nav>
    </header>
  )
}
