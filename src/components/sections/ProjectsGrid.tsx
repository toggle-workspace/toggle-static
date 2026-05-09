import Link from 'next/link'
import Image from 'next/image'

interface Project {
  id: string
  title: string
  slug: string
  description?: string | null
  image?: { url: string; alt?: string | null } | null
  order?: number | null
}

interface ProjectsGridProps {
  projects: Project[]
  variant?: 'home' | 'page'
}

const placeholderSeeds = ['proj1', 'proj2', 'proj3', 'proj4', 'proj5', 'proj6']

export function ProjectsGrid({ projects, variant = 'home' }: ProjectsGridProps) {
  if (variant === 'home') {
    return (
      <section className="projects-home">
        <div className="projects-home__header section-header-row">
          <div className="section-label">
            <span className="section-label-dot" />
            Projects
          </div>
          <h2 className="section-title">Our Projects.</h2>
        </div>
        <div className="projects-home__row">
          {projects.slice(0, 4).map((project, i) => (
            <Link key={project.id} href="/projects" className="project-home-card">
              <div className="project-home-card__img">
                <img
                  src={project.image?.url || `https://picsum.photos/seed/${placeholderSeeds[i] || 'proj1'}/600/500`}
                  alt={project.title}
                  loading="lazy"
                />
              </div>
              <div className="project-home-card__footer">
                <p className="project-home-card__title">{project.title}</p>
                <span className="project-home-card__arrow" aria-hidden="true">&#8599;</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    )
  }

  return (
    <section className="projects-page-section">
      <div className="projects-page-inner">
        <div className="projects-page-grid">
          {projects.map((project, i) => (
            <div key={project.id} className="projects-page-card">
              <div className="projects-page-card__img">
                <img
                  src={project.image?.url || `https://picsum.photos/seed/${placeholderSeeds[i] || 'proj1'}/600/450`}
                  alt={project.title}
                  loading="lazy"
                />
              </div>
              <div className="projects-page-card__body">
                <p className="projects-page-card__title">{project.title}</p>
                {project.description && (
                  <p className="projects-page-card__cat">{project.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
