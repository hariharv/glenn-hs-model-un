import { ArrowUpRight, Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import Logo from './Logo'

const navigation = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Helpful Links', to: '/resources' },
  { label: 'Conferences', to: '/conferences' },
]

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => setMenuOpen(false), [pathname])

  useEffect(() => {
    document.body.classList.toggle('menu-is-open', menuOpen)
    return () => document.body.classList.remove('menu-is-open')
  }, [menuOpen])

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <header className="site-header">
        <div className="header-inner container">
          <Link className="header-brand" to="/" aria-label="Glenn Model UN home">
            <span className="header-logo-wrap"><Logo compact /></span>
            <span className="header-wordmark">
              <strong>Glenn Model UN</strong>
              <small>Think • Speak • Lead</small>
            </span>
          </Link>

          <nav className="desktop-nav" aria-label="Primary navigation">
            {navigation.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <Link className="button button--small desktop-cta" to="/resources">
            Delegate toolkit <ArrowUpRight aria-hidden="true" size={17} />
          </Link>

          <button
            className="menu-toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>

        <div id="mobile-menu" className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
          <nav className="container" aria-label="Mobile navigation">
            {navigation.map((item, index) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) => isActive ? 'mobile-nav-link active' : 'mobile-nav-link'}
              >
                <span>0{index + 1}</span>{item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <main id="main-content" tabIndex="-1">
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <div className="footer-logo"><Logo compact /></div>
            <div>
              <strong>Tom Glenn High School<br />Model United Nations</strong>
              <p>Learn the process. Represent a perspective. Build consensus.</p>
            </div>
          </div>
          <nav className="footer-nav" aria-label="Footer navigation">
            <p className="footer-label">Explore</p>
            {navigation.map((item) => <Link key={item.to} to={item.to}>{item.label}</Link>)}
          </nav>
          <div className="footer-note">
            <p className="footer-label">First draft</p>
            <p>Officer names, conference details, resource downloads, and student photography are pending confirmation.</p>
          </div>
        </div>
        <div className="footer-bottom container">
          <span>© {new Date().getFullYear()} Glenn Model UN</span>
          <span>Diplomacy begins with listening.</span>
        </div>
      </footer>
    </div>
  )
}
