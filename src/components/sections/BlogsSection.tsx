import Link from 'next/link'

interface BlogPost {
  id: string
  title: string
  slug: string
  publishedAt?: string | null
  featuredImage?: { url: string; alt?: string | null } | null
}

interface BlogsSectionProps {
  posts: BlogPost[]
  variant?: 'dark' | 'light'
}

const defaultPosts: BlogPost[] = [
  { id: '1', title: 'Building Powerful Digital Experiences', slug: 'building-powerful-digital-experiences', publishedAt: '2026-01-25' },
  { id: '2', title: 'Digital Strategy & Layouts', slug: 'digital-strategy-layouts', publishedAt: '2025-02-09' },
  { id: '3', title: 'Digital Vision & Structure', slug: 'digital-vision-structure', publishedAt: '2025-02-05' },
]

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
}

export function BlogsSection({ posts, variant = 'dark' }: BlogsSectionProps) {
  const items = posts.length > 0 ? posts : defaultPosts

  return (
    <section>
      {variant === 'dark' && (
        <div className="dark-section-header">
          <div className="dark-section-label">
            <span className="section-label-dot" />
            Our Blogs
          </div>
          <h2 className="section-title section-title--dark">Blogs.</h2>
        </div>
      )}
      <div className={`blogs-grid${variant === 'light' ? ' blogs-grid--light' : ''}`}>
        {items.map((post, i) => (
          <Link key={post.id} href={`/blog/${post.slug}`} className={`blog-card${variant === 'light' ? ' blog-card--light' : ''}`}>
            <div className="blog-card__img">
              <img
                src={post.featuredImage?.url || `https://picsum.photos/seed/blog${i + 1}/600/400`}
                alt={post.title}
                loading="lazy"
              />
            </div>
            <div className="blog-card__body">
              <h3 className="blog-card__title">{post.title}</h3>
              <p className="blog-card__date">
                {post.publishedAt ? formatDate(post.publishedAt) : ''}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
