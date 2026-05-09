const StarIcon = () => (
  <svg width="12" height="12" viewBox="0 0 14 14" fill="currentColor">
    <path d="M7 0l1.5 5.5L14 7l-5.5 1.5L7 14l-1.5-5.5L0 7l5.5-1.5z" />
  </svg>
)

export function ExperiencesSection() {
  return (
    <section>
      <div className="section-header-row">
        <div className="section-label">
          <span className="section-label-dot" />
          Who We Are
        </div>
        <h2 className="section-title">Experiences.</h2>
      </div>
      <div className="experiences-section">
        <div className="experiences-stats">
          <div className="stat-item">
            <div className="stat-number">98%</div>
            <div className="stat-label">Client Satisfaction Rate</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">87+</div>
            <div className="stat-label">Successful Projects Launched</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">50K+</div>
            <div className="stat-label">Monthly Visitors</div>
          </div>
        </div>
        <div className="experiences-card">
          <div className="experiences-card__logo">
            <StarIcon />
            DigitalArc
          </div>
          <div className="experiences-card__text">
            A creative video production studio crafting cinematic visuals,
            powerful storytelling, and high-impact content that brings brands,
            products, and ideas to life.
          </div>
        </div>
      </div>
    </section>
  )
}
