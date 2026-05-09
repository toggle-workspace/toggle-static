const imgSeeds = ['app1', 'web1', 'prod1', 'brand1']

interface Service {
  id: string
  name: string
  description?: string | null
  image?: { url: string; alt?: string | null } | null
  order?: number | null
}

interface ServicesRowsProps {
  services: Service[]
}

export function ServicesRows({ services }: ServicesRowsProps) {
  const displayServices = services.length > 0
    ? services
    : [
        { id: '1', name: 'App Design', description: 'Intuitive mobile app design focused on usability, performance, and seamless user journeys across iOS and Android platforms.' },
        { id: '2', name: 'Web Design', description: 'Modern dark-mode web design delivering sleek visuals, responsive layouts, and conversion-focused interfaces.' },
        { id: '3', name: 'Product Design', description: 'End-to-end product design combining UX research, wireframing, prototyping, and scalable design systems.' },
        { id: '4', name: 'Brand Design', description: 'Strategic brand identity design including logo systems, typography, color palettes, and visual storytelling.' },
      ]

  return (
    <section>
      <div className="section-header-row">
        <div className="section-label">
          <span className="section-label-dot" />
          What We Offer
        </div>
        <h2 className="section-title">Services.</h2>
      </div>
      <div className="services-section">
        {displayServices.slice(0, 4).map((service, i) => (
          <div key={service.id} className="service-row">
            <span className="service-row__num">({String(i + 1).padStart(2, '0')})</span>
            <h3 className="service-row__name">{service.name}</h3>
            <div className="service-row__img">
              <img
                src={`https://picsum.photos/seed/${imgSeeds[i] || 'app1'}/300/200`}
                alt={service.name}
                loading="lazy"
              />
            </div>
            <p className="service-row__desc">{service.description}</p>
            <div className="service-row__arrow">
              <button className="arrow-btn">{i === 3 ? '↗' : '→'}</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
