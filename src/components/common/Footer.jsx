import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="border-t border-line bg-white">
      <div className="mx-auto flex min-h-[92px] w-[min(1180px,calc(100%-2.5rem))] items-center justify-between gap-5 max-sm:w-[calc(100%-2rem)] max-sm:flex-wrap max-sm:py-6">
        <Link className="font-display text-lg font-extrabold tracking-[-.07em]" to="/">elara<span className="text-purple">.</span></Link>
        <p className="m-0 text-sm text-muted max-sm:order-3 max-sm:w-full">Thoughtful work. Useful digital experiences.</p>
        <span className="text-xs text-muted">© {new Date().getFullYear()} Elara</span>
      </div>
    </footer>
  )
}
