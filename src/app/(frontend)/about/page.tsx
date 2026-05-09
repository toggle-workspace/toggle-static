export const dynamic = 'force-dynamic'

import { getPayload } from 'payload'
import config from '@payload-config'
import { PageHero } from '@/components/sections/PageHero'

const StarIcon = () => (
  <svg width="12" height="12" viewBox="0 0 14 14" fill="currentColor">
    <path d="M7 0l1.5 5.5L14 7l-5.5 1.5L7 14l-1.5-5.5L0 7l5.5-1.5z" />
  </svg>
)

const TeamStarIcon = () => (
  <svg width="10" height="10" viewBox="0 0 14 14" fill="currentColor">
    <path d="M7 0l1.5 5.5L14 7l-5.5 1.5L7 14l-1.5-5.5L0 7l5.5-1.5z" />
  </svg>
)

async function getData() {
  const payload = await getPayload({ config })
  const { docs } = await payload.find({ collection: 'team-members', sort: 'order' })
  return docs
}

const defaultTeam = [
  { id: '1', name: 'Courtney Henry', role: 'Business Growth' },
  { id: '2', name: 'Guy Hawkins', role: 'Product Designer' },
  { id: '3', name: 'Ronald Richards', role: 'Graphic Designer' },
  { id: '4', name: 'Jane Cooper', role: 'Sales & Marketing' },
]

export default async function AboutPage() {
  const members = await getData()
  const team = members.length > 0 ? members : defaultTeam

  return (
    <>
      <PageHero title="About Us" />

      <div className="about-exp-section">
        <div className="about-exp-inner">
          <div className="about-exp-stats">
            <div className="about-exp-stat">
              <div className="stat-number">98%</div>
              <div className="stat-label">Client Satisfaction Rate</div>
            </div>
            <div className="about-exp-stat">
              <div className="stat-number">87+</div>
              <div className="stat-label">Successful Projects Launched</div>
            </div>
            <div className="about-exp-stat">
              <div className="stat-number">50K+</div>
              <div className="stat-label">Monthly Visitors</div>
            </div>
          </div>
          <div className="about-exp-card">
            <div className="about-exp-card__logo">
              <StarIcon />
              DigitalArc
            </div>
            <div className="about-exp-card__text">
              A creative design production studio crafting cinematic visuals, powerful storytelling,
              and high-impact content that brings brands, products, and ideas to life.
            </div>
          </div>
        </div>
      </div>

      <section className="section-spacer" />

      <div className="section-header-row">
        <div className="section-label">
          <span className="section-label-dot" />
          Who We Are
        </div>
        <h2 className="section-title">Team.</h2>
      </div>

      <div className="about-team-section">
        <div className="about-team-inner">
          <div className="about-team-grid">
            {team.map((member: any, i: number) => (
              <div key={member.id} className="about-team-card">
                <div className="about-team-card__img">
                  <img
                    src={member.image?.url || `https://picsum.photos/seed/team${i + 1}/400/550`}
                    alt={member.name}
                    loading="lazy"
                  />
                </div>
                <div className="about-team-card__body">
                  <div className="about-team-card__mark"><TeamStarIcon /></div>
                  <div>
                    <p className="about-team-card__name">{member.name}</p>
                    <p className="about-team-card__role">{member.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
