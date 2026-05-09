import Link from 'next/link'

export function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-h1">
          A Creative Design<br />Production Studio
        </h1>
        <div className="hero-btn-group">
          <Link href="/contact" className="btn btn--dark">Get Started</Link>
          <Link href="/contact" className="btn btn--icon" aria-label="Get started">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
      <div className="hero-grid-bg" aria-hidden="true">
        <div /><div /><div /><div /><div />
      </div>
    </section>
  )
}
