export const dynamic = 'force-dynamic'

import { getPayload } from 'payload'
import config from '@payload-config'
import { PageHero } from '@/components/sections/PageHero'
import { ProjectsGrid } from '@/components/sections/ProjectsGrid'

async function getData() {
  const payload = await getPayload({ config })
  const { docs } = await payload.find({ collection: 'projects', sort: 'order', limit: 100 })
  return docs
}

export default async function ProjectsPage() {
  const projects = await getData()

  return (
    <>
      <PageHero title="Projects" />
      <ProjectsGrid projects={projects as any} variant="page" />
    </>
  )
}
