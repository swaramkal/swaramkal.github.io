'use client'

import { useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'

const navigationItems = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

export function PortfolioNav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="site-header">
      <div className="nav-shell">
        <a className="brand" href="#top" onClick={closeMenu} aria-label="Kintali Swaramkal, home">
          <span className="brand-mark" aria-hidden="true">KS</span>
          <span className="brand-copy">
            <span className="brand-name">Kintali Swaramkal</span>
            <span className="brand-caption">PORTFOLIO / 2026</span>
          </span>
        </a>

        <nav
          className={`nav-links${menuOpen ? ' is-open' : ''}`}
          id="primary-navigation"
          aria-label="Primary navigation"
        >
          {navigationItems.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
          <a className="nav-cta-mobile" href="mailto:swaramkalkintali@gmail.com" onClick={closeMenu}>
            Let&apos;s talk <ArrowUpRight aria-hidden="true" />
          </a>
        </nav>

        <a className="nav-cta" href="mailto:swaramkalkintali@gmail.com">
          <span>LET&apos;S TALK</span>
          <ArrowUpRight aria-hidden="true" />
        </a>

        <button
          className="nav-toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-controls="primary-navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>
    </header>
  )
}

export default PortfolioNav
