import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="border-t border-line bg-white">
      <div className="mx-auto flex min-h-[92px] w-full max-w-[1180px] px-5 sm:px-8 items-center justify-between gap-5 max-sm:px-4 max-sm:flex-wrap max-sm:py-6">
        <Link className="font-display text-lg font-extrabold tracking-[-.07em]" to="/">elara<span className="text-purple">.</span></Link>
        <p className="m-0 text-sm text-muted max-sm:order-3 max-sm:w-full">Thoughtful work. Useful digital experiences.</p>
        <span className="text-xs text-muted">© {new Date().getFullYear()} Elara</span>
      </div>
    </footer>
  )
}
