import { useState } from "react";
import { NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/skills", label: "Skills" },
  { to: "/experience", label: "Experience" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-line/80 bg-[#fbfaff]/90 backdrop-blur-xl">
      <nav
        className="mx-auto flex min-h-[76px] w-full max-w-[1180px] items-center justify-between gap-5 px-5 sm:px-8 max-md:flex-wrap max-md:px-4 max-md:py-3"
        aria-label="Main navigation"
      >
        <NavLink
          className="inline-flex shrink-0 items-center gap-2.5 font-display text-xl font-extrabold tracking-[-.07em]"
          to="/"
          aria-label="Elara home"
          onClick={() => setMenuOpen(false)}
        >
          <img
            src="/logo.svg"
            alt=""
            className="size-9 object-contain"
          />
          <span>
            elara<span className="text-purple">.</span>
          </span>
        </NavLink>

        <button
          type="button"
          className="hidden rounded-xl border border-line bg-white px-3 py-2 text-sm font-semibold text-ink max-md:inline-flex"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? "Close menu" : "Menu"}
        </button>

        <div
          id="primary-navigation"
          className={`flex items-center gap-5 max-md:order-3 max-md:w-full max-md:flex-wrap max-md:gap-x-5 max-md:gap-y-2 ${menuOpen ? "max-md:flex" : "max-md:hidden"}`}
        >
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `relative py-2 text-[.84rem] font-semibold transition-colors hover:text-purple-dark focus-visible:outline-purple ${isActive ? "text-purple-dark after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:rounded-full after:bg-purple" : "text-muted"}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <NavLink
          className="inline-flex shrink-0 items-center gap-2 rounded-xl border border-[#ddd3f5] bg-white px-4 py-3 text-sm font-bold text-purple-dark transition hover:-translate-y-0.5 hover:bg-lilac max-md:ml-auto max-md:hidden"
          to="/contact"
        >
          Let&apos;s talk
        </NavLink>
      </nav>
    </header>
  );
}
