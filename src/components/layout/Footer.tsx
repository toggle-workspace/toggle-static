import { FooterClient } from './FooterClient'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/projects', label: 'Project' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
]

const StarIcon = () => (
  <svg width="12" height="12" viewBox="0 0 14 14" fill="currentColor">
    <path d="M7 0l1.5 5.5L14 7l-5.5 1.5L7 14l-1.5-5.5L0 7l5.5-1.5z" />
  </svg>
)

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__main">
        <div className="footer__logo">
          <StarIcon />
          DigitalArc
        </div>
        <nav className="footer__nav">
          {navLinks.map((link) => (
            <FooterClient key={link.href} href={link.href} label={link.label} />
          ))}
        </nav>
      </div>
      <div className="footer__sub">Designed by WrapPixel</div>
    </footer>
  )
}
