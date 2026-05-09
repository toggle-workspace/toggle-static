import { ThemeToggle } from '@/components/ui/ThemeToggle'
import { NavbarClient } from './NavbarClient'

const StarIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
    <path d="M7 0l1.5 5.5L14 7l-5.5 1.5L7 14l-1.5-5.5L0 7l5.5-1.5z" />
  </svg>
)

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/projects', label: 'Project' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
]

export function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar__inner">
          <a href="/" className="navbar__logo">
            <StarIcon />
            DigitalArc
          </a>
          <ul className="navbar__nav">
            {navLinks.map((link) => (
              <li key={link.href}>
                <NavbarClient href={link.href} label={link.label} />
              </li>
            ))}
          </ul>
          <div className="navbar__controls">
            <ThemeToggle />
            <NavbarClient isHamburger links={navLinks} />
          </div>
        </div>
      </nav>
      <NavbarClient isDrawer links={navLinks} />
    </>
  )
}
