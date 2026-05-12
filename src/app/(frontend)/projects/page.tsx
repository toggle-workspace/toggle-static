export const dynamic = "force-dynamic";

import { getPayload } from "payload";
import config from "@payload-config";

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

  return <>Test</>;
}
