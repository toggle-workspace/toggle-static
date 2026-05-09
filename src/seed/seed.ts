import { getPayload } from 'payload'
import config from '../payload.config'

async function seed() {
  const payload = await getPayload({ config })
  console.log('🌱 Starting seed...')

  // Services
  const services = [
    { name: 'App Design', description: 'Intuitive mobile app design focused on usability, performance, and seamless user journeys across iOS and Android platforms.', order: 1, slug: 'app-design' },
    { name: 'Web Design', description: 'Modern dark-mode web design delivering sleek visuals, responsive layouts, and conversion-focused interfaces.', order: 2, slug: 'web-design' },
    { name: 'Product Design', description: 'End-to-end product design combining UX research, wireframing, prototyping, and scalable design systems.', order: 3, slug: 'product-design' },
    { name: 'Brand Design', description: 'Strategic brand identity design including logo systems, typography, color palettes, and visual storytelling.', order: 4, slug: 'brand-design' },
  ]
  for (const svc of services) {
    await payload.create({ collection: 'services', data: svc })
  }
  console.log('✅ Services seeded')

  // Projects
  const projects = [
    { title: 'Designing the Future', description: 'Brand / Identity', order: 1, slug: 'designing-the-future', tags: [{ tag: 'Brand' }, { tag: 'Identity' }] },
    { title: 'Digital Thinking, Real Results', description: 'UX / Web Design', order: 2, slug: 'digital-thinking-real-results', tags: [{ tag: 'UX' }, { tag: 'Web' }] },
    { title: 'Building Smarter Digital Products', description: 'App / Product', order: 3, slug: 'building-smarter-digital-products', tags: [{ tag: 'App' }, { tag: 'Product' }] },
    { title: 'Lessons from Real-World Projects', description: 'Strategy', order: 4, slug: 'lessons-from-real-world-projects', tags: [{ tag: 'Strategy' }] },
    { title: 'Digital Strategy in Action', description: 'Strategy / Design', order: 5, slug: 'digital-strategy-in-action', tags: [{ tag: 'Strategy' }, { tag: 'Design' }] },
    { title: 'Designing Impact Through Digital', description: 'Brand / Web', order: 6, slug: 'designing-impact-through-digital', tags: [{ tag: 'Brand' }, { tag: 'Web' }] },
  ]
  for (const proj of projects) {
    await payload.create({ collection: 'projects', data: proj })
  }
  console.log('✅ Projects seeded')

  // Blog Posts
  const blogPosts = [
    { title: 'Building Powerful Digital Experiences', slug: 'building-powerful-digital-experiences', excerpt: 'We build scalable design systems and digital products that create lasting impact for brands and their users.', author: 'Jecklin Rose', publishedAt: '2026-01-25T00:00:00.000Z' },
    { title: 'Digital Strategy & Layouts', slug: 'digital-strategy-layouts', excerpt: 'How strategic layout decisions drive conversion and user engagement across digital platforms.', author: 'Maya Patel', publishedAt: '2025-02-09T00:00:00.000Z' },
    { title: 'Digital Vision & Structure', slug: 'digital-vision-structure', excerpt: 'Aligning your digital vision with structural design decisions for maximum impact.', author: 'James O\'Brien', publishedAt: '2025-02-05T00:00:00.000Z' },
    { title: 'Designing the Future of Digital', slug: 'designing-the-future', excerpt: 'What the next decade of digital design looks like and how brands can prepare.', author: 'Courtney Henry', publishedAt: '2025-01-20T00:00:00.000Z' },
    { title: 'Content Architecture & CMS Strategy', slug: 'content-architecture', excerpt: 'How to build a content architecture that scales with your business and serves your users.', author: 'Guy Hawkins', publishedAt: '2025-01-10T00:00:00.000Z' },
    { title: 'Smart Digital Strategy', slug: 'smart-digital-strategy', excerpt: 'Data-driven approaches to digital strategy that deliver measurable results.', author: 'Ronald Richards', publishedAt: '2025-01-05T00:00:00.000Z' },
  ]
  for (const post of blogPosts) {
    await payload.create({ collection: 'blog-posts', data: post })
  }
  console.log('✅ Blog posts seeded')

  // Team Members
  const team = [
    { name: 'Courtney Henry', role: 'Business Growth', order: 1 },
    { name: 'Guy Hawkins', role: 'Product Designer', order: 2 },
    { name: 'Ronald Richards', role: 'Graphic Designer', order: 3 },
    { name: 'Jane Cooper', role: 'Sales & Marketing', order: 4 },
  ]
  for (const member of team) {
    await payload.create({ collection: 'team-members', data: member })
  }
  console.log('✅ Team members seeded')

  // Testimonials
  const testimonials = [
    { quote: '"Their attention to detail and creative vision truly exceeded our expectations. The team delivered a refined, modern website that not only looks premium but also performs better than ever."', author: '@Steve Harrington', order: 1 },
    { quote: '"DigitalArc transformed our brand presence completely. From the initial concepts to final delivery, every touchpoint was thoughtful, intentional, and beautifully executed."', author: '@Maya Patel', order: 2 },
    { quote: '"Working with DigitalArc was a seamless experience. They understood our vision immediately and delivered a product that has become our greatest marketing asset."', author: "@James O'Brien", order: 3 },
  ]
  for (const t of testimonials) {
    await payload.create({ collection: 'testimonials', data: t })
  }
  console.log('✅ Testimonials seeded')

  // FAQ Items
  const faqs = [
    { question: 'What services do you offer?', answer: 'We offer a full suite of creative and digital services including app design, web design, product design, brand identity, video production, and digital strategy consulting. Each project is customized to meet your specific business goals.', order: 1 },
    { question: 'How long does a typical project take?', answer: "Project timelines vary by scope. A brand identity project typically takes 3–5 weeks, a full website design 6–10 weeks, and a product design engagement 8–16 weeks. We'll provide a precise timeline during our discovery call.", order: 2 },
    { question: 'Do you offer custom-design or use templates?', answer: 'Everything we create is custom-built from scratch. We never use generic templates. Each project begins with deep research into your brand, audience, and competitive landscape before a single pixel is placed.', order: 3 },
    { question: 'How much does your service cost?', answer: 'Pricing depends on the scope, complexity, and timeline of your project. Brand identity packages start at $3,500, web design projects at $6,000, and product design engagements from $10,000. Contact us for a detailed proposal.', order: 4 },
    { question: 'Can I revise your work multiple times?', answer: 'Yes. All packages include a defined number of revision rounds (typically 2–3). We encourage open feedback throughout the process so revisions are minimal and targeted rather than wholesale changes late in the project.', order: 5 },
    { question: 'Can I see more by WrapPixel?', answer: 'Absolutely. WrapPixel has an extensive portfolio of premium design templates and UI kits available for both developers and designers. You can explore their full catalog on their official website.', order: 6 },
  ]
  for (const faq of faqs) {
    await payload.create({ collection: 'faq-items', data: faq })
  }
  console.log('✅ FAQ items seeded')

  console.log('🎉 Seed complete!')
  process.exit(0)
}

seed().catch((err) => {
  console.error(err)
  process.exit(1)
})
