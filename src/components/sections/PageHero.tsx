interface PageHeroProps {
  title: string
}

export function PageHero({ title }: PageHeroProps) {
  return (
    <section className="about-page-hero">
      <div className="about-page-hero__content">
        <h1 className="about-page-hero__heading">{title}</h1>
      </div>
      <div className="hero-grid-bg" aria-hidden="true">
        <div /><div /><div /><div /><div />
      </div>
    </section>
  )
}
