import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/ui/page-header";
import { GridRow, Spacer } from "@/components/ui/grid";
import { SectionOverview } from "@/components/ui/section-overview";
import { SectionItemsGrid } from "@/components/ui/section-items-grid";
import CallToAction from "@/components/call-to-action";
import FeatureCarousel from "@/components/feature-carousel";
import { SERVICES } from "@/data/services";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: `${service.name} — Toggle`,
    description: service.description,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) notFound();

  return (
    <main role="main" className="bg-zinc-950/10">
      {/* Header */}
      <PageHeader
        title={service.name}
        breadcrumb={[
          { label: "Services", href: "/services" },
          { label: service.name },
        ]}
        description={service.description}
      />

      {/* Hero image */}
      <GridRow plain>
        <div className="overflow-hidden rounded">
          <Image
            src={service.image.replace("/400/260", "/1200/600")}
            alt={service.name}
            width={1200}
            height={600}
            className="aspect-2/1 w-full object-cover"
            priority
          />
        </div>
      </GridRow>

      <Spacer />

      {/* Overview */}
      <SectionOverview label={service.headline}>
        <p className="text-foreground mt-6 text-balance text-xl font-medium lg:text-2xl">
          {service.overview}
        </p>
      </SectionOverview>

      <Spacer />

      {/* What's included */}
      <SectionItemsGrid
        heading="What's included"
        items={service.whatWeDo}
      />

      <Spacer />

      {/* Related case studies */}
      <FeatureCarousel />

      <Spacer />

      <section>
        <CallToAction />
      </section>
    </main>
  );
}
