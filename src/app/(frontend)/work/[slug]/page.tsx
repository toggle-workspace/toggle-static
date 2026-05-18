import { notFound } from "next/navigation";
import Image from "next/image";
import { caseStudies } from "@/data/case-studies";
import { PageHeader } from "@/components/ui/page-header";

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);
  if (!study) notFound();

  return (
    <article>
      {/* Row 1: Breadcrumb + title */}
      <PageHeader
        title={study.headline}
        breadcrumb={[
          { label: "Work", href: "/work" },
          { label: study.client },
        ]}
      />

      {/* Row 2: Two-column content + sidebar */}
      <div className="@container grid grid-cols-[auto_1fr_auto] lg:grid-cols-[1fr_auto_1fr] bg-border">
        <div className="max-w-276 lg:min-w-276 mx-auto w-full">
          <div className="**:data-grid-content:bg-card/90 **:data-grid-content:h-full **:data-grid-content:rounded grid *:p-[0.5px] lg:grid-cols-[auto_1fr]">
            {/* Main content column */}
            <div>
              <div data-grid-content="true" className="max-w-3xl p-6 lg:p-12">
                {study.image && (
                  <div className="relative overflow-hidden rounded-xl shadow shadow-black/5">
                    <Image
                      src={study.image}
                      alt={study.client}
                      width={1200}
                      height={675}
                      className="aspect-[21/9] w-full object-cover"
                      priority
                    />
                  </div>
                )}

                <p className="text-foreground my-12 text-xl md:text-2xl">
                  {study.overview}
                </p>

                <div
                  className="prose dark:prose-invert max-w-none
                    [&_h2]:mt-14 [&_h2]:mb-4 [&_h2]:border-t [&_h2]:border-border [&_h2]:pt-6
                    [&_h2]:text-xs [&_h2]:font-semibold [&_h2]:uppercase [&_h2]:tracking-[0.15em]
                    [&_h2]:text-muted-foreground [&_h2]:not-italic
                    [&_p]:text-foreground/80 [&_p]:leading-relaxed
                    [&_ul]:mt-8 [&_ul]:list-none [&_ul]:p-0 [&_ul]:grid [&_ul]:gap-3 [&_ul]:sm:grid-cols-2
                    [&_li]:rounded-xl [&_li]:border [&_li]:border-border [&_li]:bg-muted/40 [&_li]:p-5
                    [&_li]:before:hidden
                    [&_li_strong]:block [&_li_strong]:text-2xl [&_li_strong]:font-bold [&_li_strong]:text-foreground [&_li_strong]:mb-1"
                  dangerouslySetInnerHTML={{ __html: study.content }}
                />
              </div>
            </div>

            {/* Sidebar column */}
            <div>
              <div data-grid-content="true">
                <div className="h-fit p-6 lg:sticky lg:top-20 lg:p-12">
                  {/* Company */}
                  <div className="mt-6">
                    <h4 className="text-foreground mb-4 text-sm font-semibold">
                      Company
                    </h4>
                    <div className="flex items-center gap-3">
                      {study.logoUrl && (
                        <div className="bg-card flex size-12 shrink-0 items-center justify-center overflow-hidden rounded-md p-2 shadow-md shadow-black/15">
                          <Image
                            src={study.logoUrl}
                            alt={study.client}
                            width={96}
                            height={96}
                            className="size-full object-contain"
                          />
                        </div>
                      )}
                      <span className="text-foreground line-clamp-1 text-sm font-semibold">
                        {study.client}
                      </span>
                    </div>
                  </div>

                  {/* Meta fields */}
                  <div className="mt-6 space-y-4">
                    <div>
                      <h4 className="text-foreground mb-2 text-sm font-semibold">
                        Industry
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        {study.industry}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-foreground mb-2 text-sm font-semibold">
                        Location
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        {study.location}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-foreground mb-2 text-sm font-semibold">
                        Services
                      </h4>
                      <ul className="text-muted-foreground space-y-1 text-sm">
                        {study.services.map((s) => (
                          <li key={s}>{s}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
