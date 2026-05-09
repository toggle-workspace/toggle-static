'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { useState, useEffect } from 'react'

interface NavLink {
  href: string
  label: string
}

function isActive(href: string, pathname: string) {
  if (href === '/') return pathname === '/'
  return pathname.startsWith(href)
}

interface NavbarClientProps {
  href?: string
  label?: string
  isHamburger?: boolean
  isDrawer?: boolean
  links?: NavLink[]
}

export function NavbarClient({ href, label, isHamburger, isDrawer, links = [] }: NavbarClientProps) {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  if (isHamburger) {
    return (
      <button
        className="navbar__hamburger"
        id="navHamburger"
        aria-label="Open menu"
        onClick={() => setIsOpen(true)}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
          <path d="M4 5h16" /><path d="M4 12h16" /><path d="M4 19h16" />
        </svg>
      </button>
    )
  }

  if (isDrawer) {
    return (
      <div className={`nav-drawer${isOpen ? ' open' : ''}`} id="navDrawer" aria-hidden={!isOpen}>
        <div className="nav-drawer__overlay" id="navOverlay" onClick={() => setIsOpen(false)} />
        <div className="nav-drawer__panel">
          <button className="nav-drawer__close" id="navClose" aria-label="Close menu" onClick={() => setIsOpen(false)}>
            &#x2715;
          </button>
          <nav className="nav-drawer__nav">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={isActive(link.href, pathname) ? 'active' : ''}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    )
  }

  if (href && label) {
    return (
      <Link href={href} className={isActive(href, pathname) ? 'active' : ''}>
        {label}
      </Link>
    )
  }

  return null
}
