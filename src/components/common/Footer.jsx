import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <Link className="footer-brand" to="/">elara<span className="brand-period">.</span></Link>
        <p>Thoughtful work. Useful digital experiences.</p>
        <span>© {new Date().getFullYear()} Elara</span>
      </div>
    </footer>
  )
}
