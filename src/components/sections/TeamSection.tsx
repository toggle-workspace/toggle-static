const StarIcon = () => (
  <svg width="10" height="10" viewBox="0 0 14 14" fill="currentColor">
    <path d="M7 0l1.5 5.5L14 7l-5.5 1.5L7 14l-1.5-5.5L0 7l5.5-1.5z" />
  </svg>
)

interface TeamMember {
  id: string
  name: string
  role?: string | null
  image?: { url: string; alt?: string | null } | null
}

const defaultTeam: TeamMember[] = [
  { id: '1', name: 'Courtney Henry', role: 'Business Growth' },
  { id: '2', name: 'Guy Hawkins', role: 'Product Designer' },
  { id: '3', name: 'Ronald Richards', role: 'Graphic Designer' },
  { id: '4', name: 'Jane Cooper', role: 'Sales & Marketing' },
]

export function TeamSection({ members }: { members: TeamMember[] }) {
  const team = members.length > 0 ? members : defaultTeam

  return (
    <section>
      <div className="section-header-row">
        <div className="section-label">
          <span className="section-label-dot" />
          Who We Are
        </div>
        <h2 className="section-title">Team.</h2>
      </div>
      <div className="team-section">
        <div className="team-grid">
          {team.map((member, i) => (
            <div key={member.id} className="team-card">
              <div className="team-card__img">
                <img
                  src={member.image?.url || `https://picsum.photos/seed/team${i + 1}/400/500`}
                  alt={member.name}
                  loading="lazy"
                />
              </div>
              <div className="team-card__body">
                <div className="team-card__mark"><StarIcon /></div>
                <div>
                  <p className="team-card__name">{member.name}</p>
                  <p className="team-card__role">{member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
