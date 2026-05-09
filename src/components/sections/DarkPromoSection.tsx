const StarIcon = () => (
  <svg width="11" height="11" viewBox="0 0 14 14" fill="currentColor">
    <path d="M7 0l1.5 5.5L14 7l-5.5 1.5L7 14l-1.5-5.5L0 7l5.5-1.5z" />
  </svg>
)

export function DarkPromoSection() {
  return (
    <section className="dark-promo-section">
      <div className="dark-promo-card">
        <div className="dark-promo-card__logo">
          <StarIcon />
          DigitalArc
        </div>
        <div className="dark-promo-card__text">
          A creative video production studio crafting cinematic visuals, powerful storytelling, and
          high-impact content that brings brands, products, and ideas to life.
        </div>
      </div>
      <div className="dark-promo-feature">
        <img src="https://picsum.photos/seed/promofeature/800/600" alt="Feature" loading="lazy" />
      </div>
    </section>
  )
}
