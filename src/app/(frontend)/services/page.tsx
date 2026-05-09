export const dynamic = 'force-dynamic'

import { getPayload } from 'payload'
import config from '@payload-config'
import { PageHero } from '@/components/sections/PageHero'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { CTASection } from '@/components/sections/CTASection'

async function getData() {
  const payload = await getPayload({ config })
  const [services, testimonials] = await Promise.all([
    payload.find({ collection: 'services', sort: 'order', limit: 100 }),
    payload.find({ collection: 'testimonials', sort: 'order' }),
  ])
  return { services, testimonials }
}

const imgSeeds = ['app1', 'web1', 'prod1', 'brand1', 'app2', 'web2']

export default async function ServicesPage() {
  const { services, testimonials } = await getData()

  const displayServices = services.docs.length > 0
    ? services.docs
    : [
        { id: '1', name: 'App Design', description: 'Intuitive mobile app design focused on usability, performance, and seamless user journeys across iOS and Android platforms.' },
        { id: '2', name: 'Web Design', description: 'Modern dark-mode web design delivering sleek visuals, responsive layouts, and conversion-focused interfaces.' },
        { id: '3', name: 'Product Design', description: 'End-to-end product design combining UX research, wireframing, prototyping, and scalable design systems.' },
        { id: '4', name: 'Brand Design', description: 'Strategic brand identity design including logo systems, typography, color palettes, and visual storytelling.' },
      ]

  return (
    <>
      <PageHero title="Services" />
      <div className="services-list-outer">
        <div className="services-list-inner">
          {displayServices.map((svc: any, i: number) => (
            <div key={svc.id} className="svc-item">
              <div className="svc-item__header">
                <span className="svc-item__num">({String(i + 1).padStart(2, '0')})</span>
                <h2 className="svc-item__name">{svc.name}</h2>
              </div>
              <div className="svc-item__img">
                <img
                  src={svc.image?.url || `https://picsum.photos/seed/${imgSeeds[i] || 'app1'}/300/200`}
                  alt={svc.name}
                  loading="lazy"
                />
              </div>
              <div className="svc-item__footer">
                <p className="svc-item__desc">{svc.description}</p>
                <button className="svc-item__arrow-btn">→</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="dark-region">
        <section className="section-spacer section-spacer--dark" />
        <TestimonialsSection testimonials={testimonials.docs as any} />
        <section className="section-spacer section-spacer--dark" />
        <CTASection />
      </div>
    </>
  )
}
