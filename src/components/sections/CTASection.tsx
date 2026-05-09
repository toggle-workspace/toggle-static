import Link from 'next/link'

export function CTASection() {
  return (
    <section className="cta-section">
      <h2 className="cta-title">
        A Creative Video
        <span className="cta-img-embed">
          <img src="https://picsum.photos/seed/cta1/120/80" alt="" />
        </span>
        Production Studio
      </h2>
      <div className="cta-actions">
        <Link href="/contact" className="btn btn--dark">Get Started</Link>
        <button className="arrow-btn">→</button>
      </div>
    </section>
  )
}
