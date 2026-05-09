import { getPayload } from 'payload'
import config from '@payload-config'
import { notFound } from 'next/navigation'
import Link from 'next/link'

export const dynamic = 'force-dynamic'

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
}

export const dynamic = 'force-dynamic'

async function getPost(slug: string) {
  const payload = await getPayload({ config })
  const { docs } = await payload.find({
    collection: 'blog-posts',
    where: { slug: { equals: slug } },
    limit: 1,
  })
  return docs[0] ?? null
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getPost(slug)

  if (!post) notFound()

  return (
    <>
      <div className="blog-detail-header">
        <div className="blog-detail-main">
          <h1 className="page-header__heading">{post.title}</h1>
          {post.excerpt && <p className="blog-detail-subtitle">{post.excerpt}</p>}
        </div>
        <div className="blog-detail-actions">
          <Link href="/blog" className="btn btn--outline">← Back</Link>
        </div>
      </div>

      <article className="blog-article">
        <div className="blog-author">
          <div className="blog-author__left">
            <div className="blog-author__avatar">
              <img src="https://picsum.photos/seed/author1/80/80" alt={post.author || 'Author'} />
            </div>
            <div>
              <p className="blog-author__name">{post.author || 'DigitalArc'}</p>
              <p className="blog-author__date">
                {post.publishedAt ? formatDate(post.publishedAt) : ''}
              </p>
            </div>
          </div>
        </div>

        {post.featuredImage && typeof post.featuredImage === 'object' && 'url' in post.featuredImage && (
          <div className="blog-hero-img">
            <img
              src={(post.featuredImage as any).url}
              alt={post.title}
            />
          </div>
        )}
        {!post.featuredImage && (
          <div className="blog-hero-img">
            <img src={`https://picsum.photos/seed/${slug}/1200/600`} alt={post.title} />
          </div>
        )}

        <div className="blog-content">
          <h2>Introduction</h2>
          <p>
            {post.excerpt ||
              'Welcome to this blog post. The full content is managed via the Payload CMS admin panel.'}
          </p>
          <h2>Key Insights</h2>
          <p>
            Digital design is at the intersection of art and function. Every pixel serves a purpose,
            and every interaction is an opportunity to create a lasting impression.
          </p>
          <ul>
            <li>Focus on user-centered design principles</li>
            <li>Maintain visual consistency across all touchpoints</li>
            <li>Leverage data to inform design decisions</li>
            <li>Iterate based on real user feedback</li>
          </ul>
          <h2>Conclusion</h2>
          <p>
            Great digital design isn&apos;t just about aesthetics — it&apos;s about creating experiences
            that resonate with users and drive meaningful outcomes for businesses.
          </p>
        </div>
      </article>
    </>
  )
}
