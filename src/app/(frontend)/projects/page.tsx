export const dynamic = "force-dynamic";

import { getPayload } from "payload";
import config from "@payload-config";
import { PageHeader } from "@/components/ui/page-header";

async function getData() {
  const payload = await getPayload({ config });
  const { docs } = await payload.find({
    collection: "projects",
    sort: "order",
    limit: 100,
  });
  return docs;
}

export default async function ProjectsPage() {
  const projects = await getData();

  return (
    <>
      <PageHeader
        title="Full Stack Digital Solutions"
        description="From brand awareness to final scale, we cover it all. Explore our range of services built to grow your business at every stage."
      />
    </>
  );
}
