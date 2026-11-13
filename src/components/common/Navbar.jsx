import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Home", path: "/", end: true },
  { label: "About", path: "/about" },
  { label: "Experience", path: "/experience" },
  { label: "Skills", path: "/skills" },
  { label: "Projects", path: "/projects" },
];

const linkClass = ({ isActive }) =>
  `relative py-2 text-sm font-semibold transition-colors duration-200 ${
    isActive ? "text-purple-dark" : "text-muted hover:text-ink"
  }`;

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/90 backdrop-blur-xl">
      <nav
        className="mx-auto flex min-h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8"
        aria-label="Main navigation"
      >
        {/* Brand */}
        <Link
          to="/"
          className="font-display text-2xl font-extrabold tracking-[-.07em] text-ink transition-colors hover:text-purple-dark"
          aria-label="Elara home"
        >
          elara<span className="text-purple">.</span>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.end}
              className={linkClass}
            >
              {({ isActive }) => (
                <>
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-[2px] rounded-full bg-purple transition-all duration-300 ${
                      isActive ? "w-full" : "w-0"
                    }`}
                  />
                </>
              )}
            </NavLink>
          ))}
        </div>

        {/* Desktop CTA */}
        <Link
          to="/contact"
          className="hidden rounded-full bg-ink px-5 py-2.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-purple-dark md:inline-flex"
        >
          Let&apos;s talk <span className="ml-2">↗</span>
        </Link>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          className="grid size-11 place-items-center rounded-xl border border-line text-ink transition-colors hover:bg-[#f7f4fc] md:hidden"
          aria-label={
            isMenuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
        >
          <span className="flex w-5 flex-col gap-[5px]">
            <span
              className={`h-0.5 w-full rounded-full bg-current transition-transform duration-200 ${
                isMenuOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-full rounded-full bg-current transition-opacity duration-200 ${
                isMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`h-0.5 w-full rounded-full bg-current transition-transform duration-200 ${
                isMenuOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </nav>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-line bg-white px-5 pb-6 pt-3 shadow-lg md:hidden"
        >
          <div className="mx-auto flex max-w-7xl flex-col">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.end}
                className={({ isActive }) =>
                  `border-b border-line py-4 text-sm font-semibold transition-colors ${
                    isActive ? "text-purple-dark" : "text-muted hover:text-ink"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}

            <Link
              to="/contact"
              className="mt-5 inline-flex items-center justify-center rounded-full bg-ink px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-purple-dark"
            >
              Let&apos;s talk <span className="ml-2">↗</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
