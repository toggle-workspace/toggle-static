export const dynamic = 'force-dynamic'

import { getPayload } from 'payload'
import config from '@payload-config'
import { HeroSection } from '@/components/sections/HeroSection'
import { VideoSection } from '@/components/sections/VideoSection'
import { BrandTicker } from '@/components/sections/BrandTicker'
import { ProjectsGrid } from '@/components/sections/ProjectsGrid'
import { ExperiencesSection } from '@/components/sections/ExperiencesSection'
import { ServicesRows } from '@/components/sections/ServicesRows'
import { FeaturesSection } from '@/components/sections/FeaturesSection'
import { DarkPromoSection } from '@/components/sections/DarkPromoSection'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { BlogsSection } from '@/components/sections/BlogsSection'
import { TeamSection } from '@/components/sections/TeamSection'
import { FAQSection } from '@/components/sections/FAQSection'
import { CTASection } from '@/components/sections/CTASection'

async function getData() {
  const payload = await getPayload({ config })
  const [projects, services, testimonials, posts, team, faqs] = await Promise.all([
    payload.find({ collection: 'projects', sort: 'order', limit: 4 }),
    payload.find({ collection: 'services', sort: 'order', limit: 4 }),
    payload.find({ collection: 'testimonials', sort: 'order' }),
    payload.find({ collection: 'blog-posts', sort: '-publishedAt', limit: 3 }),
    payload.find({ collection: 'team-members', sort: 'order' }),
    payload.find({ collection: 'faq-items', sort: 'order' }),
  ])
  return { projects, services, testimonials, posts, team, faqs }
}

export default async function HomePage() {
  const { projects, services, testimonials, posts, team, faqs } = await getData()

  return (
    <>
      <HeroSection />
      <VideoSection />
      <section className="section-spacer" />
      <BrandTicker />
      <section className="section-spacer" />
      <ProjectsGrid projects={projects.docs as any} variant="home" />
      <section className="section-spacer" />
      <ExperiencesSection />
      <section className="section-spacer" />
      <ServicesRows services={services.docs as any} />
      <div className="dark-region">
        <section className="section-spacer section-spacer--dark" />
        <FeaturesSection />
        <section className="section-spacer section-spacer--dark" />
        <DarkPromoSection />
        <section className="section-spacer section-spacer--dark" />
        <TestimonialsSection testimonials={testimonials.docs as any} />
        <section className="section-spacer section-spacer--dark" />
        <BlogsSection posts={posts.docs as any} />
        <section className="section-spacer section-spacer--dark" />
      </div>
      <TeamSection members={team.docs as any} />
      <section className="section-spacer" />
      <FAQSection items={faqs.docs as any} />
      <section className="section-spacer" />
      <div className="dark-region">
        <CTASection />
      </div>
    </>
  )
}
