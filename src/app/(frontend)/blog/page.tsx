export const dynamic = 'force-dynamic'

import { getPayload } from 'payload'
import config from '@payload-config'
import { PageHero } from '@/components/sections/PageHero'
import Link from 'next/link'

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
}

async function getData() {
  const payload = await getPayload({ config })
  const { docs } = await payload.find({ collection: 'blog-posts', sort: '-publishedAt', limit: 100 })
  return docs
}

const defaultPosts = [
  { id: '1', title: 'Building Powerful Digital Experiences', slug: 'building-powerful-digital-experiences', publishedAt: '2026-01-25' },
  { id: '2', title: 'Digital Strategy & Layouts', slug: 'digital-strategy-layouts', publishedAt: '2025-02-09' },
  { id: '3', title: 'Digital Vision & Structure', slug: 'digital-vision-structure', publishedAt: '2025-02-05' },
  { id: '4', title: 'Designing the Future of Digital', slug: 'designing-the-future', publishedAt: '2025-01-20' },
  { id: '5', title: 'Content Architecture & CMS Strategy', slug: 'content-architecture', publishedAt: '2025-01-10' },
  { id: '6', title: 'Smart Digital Strategy', slug: 'smart-digital-strategy', publishedAt: '2025-01-05' },
]

export default async function BlogPage() {
  const posts = await getData()
  const items = posts.length > 0 ? posts : defaultPosts

  return (
    <>
      <PageHero title="Blogs" />
      <div className="projects-page-section">
        <div className="blog-listing-wrapper">
          <div className="blogs-grid blogs-grid--light">
            {items.map((post: any, i: number) => (
              <Link key={post.id} href={`/blog/${post.slug}`} className="blog-card blog-card--light">
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
        </div>
      </div>
    </>
  )
}
