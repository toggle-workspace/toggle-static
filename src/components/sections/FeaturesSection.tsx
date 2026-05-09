export function FeaturesSection() {
  return (
    <section>
      <div className="dark-section-header">
        <div className="dark-section-label">
          <span className="section-label-dot" />
          We Provide More
        </div>
        <h2 className="section-title section-title--dark">Features.</h2>
      </div>
      <div className="features-cols">
        <div className="feature-col">
          <div className="feature-col__content">
            <span className="feature-card__num">(01)</span>
            <h4 className="feature-card__title">Brand Identity Systems</h4>
            <p className="feature-card__text">We craft complete visual identities including logos, typography, and color systems that give your brand a consistent and recognizable presence.</p>
          </div>
          <div className="feature-col__img">
            <img src="https://picsum.photos/seed/feat1/600/400" alt="Brand Identity" loading="lazy" />
          </div>
        </div>
        <div className="feature-col">
          <div className="feature-col__content">
            <span className="feature-card__num">(02)</span>
            <h4 className="feature-card__title">UI/UX Design</h4>
            <p className="feature-card__text">We design intuitive, user-focused interfaces that look beautiful and guide users effortlessly through your digital experience.</p>
          </div>
          <div className="feature-col__img">
            <img src="https://picsum.photos/seed/feat2/600/400" alt="UI/UX Design" loading="lazy" />
          </div>
        </div>
        <div className="feature-col">
          <div className="feature-col__content">
            <span className="feature-card__num">(03)</span>
            <h4 className="feature-card__title">Digital Strategy &amp; Layouts</h4>
            <p className="feature-card__text">We create conversion-driven layouts and visual structures that turn visitors into customers while keeping your brand visually powerful.</p>
          </div>
          <div className="feature-col__img">
            <img src="https://picsum.photos/seed/feat3/600/400" alt="Digital Strategy" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  )
}
