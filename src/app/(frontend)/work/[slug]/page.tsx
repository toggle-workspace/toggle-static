import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Spacer } from "@/components/ui/grid";
import CallToAction from "@/components/call-to-action";
import { caseStudies } from "@/data/case-studies";

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);
  if (!study) notFound();

  return (
    <>
      <article>
        {/* Hero row */}
        <div className="p-6 lg:p-12 border-b border-border">
          <div className="mx-auto max-w-2xl">
            <nav aria-label="breadcrumb">
              <ol className="text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm sm:gap-2.5">
                <li className="inline-flex items-center gap-1.5">
                  <Link href="/work" className="hover:text-foreground transition-colors">
                    Work
                  </Link>
                </li>
                <li role="presentation" aria-hidden="true">
                  <ChevronRight className="size-3.5" />
                </li>
                <li className="inline-flex items-center gap-1.5">
                  <span className="text-foreground">{study.client}</span>
                </li>
              </ol>
            </nav>

            <h1 className="text-foreground my-6 text-balance text-3xl font-bold md:text-4xl">
              {study.headline}
            </h1>

            <p className="text-foreground text-xl">{study.overview}</p>
          </div>
        </div>

        {/* Meta row */}
        <div className="p-6 lg:px-12 border-b border-border">
          <div className="mx-auto flex max-w-2xl flex-wrap gap-x-6 gap-y-4 sm:grid sm:grid-cols-3">
            <div>
              <p className="text-muted-foreground mb-1 text-xs font-medium uppercase tracking-wider font-mono">
                Industry
              </p>
              <p className="text-foreground text-sm">{study.industry}</p>
            </div>
            <div>
              <p className="text-muted-foreground mb-1 text-xs font-medium uppercase tracking-wider font-mono">
                Location
              </p>
              <p className="text-foreground text-sm">{study.location}</p>
            </div>
            <div>
              <p className="text-muted-foreground mb-1 text-xs font-medium uppercase tracking-wider font-mono">
                Services
              </p>
              <p className="text-foreground text-sm">{study.services.join(", ")}</p>
            </div>
          </div>
        </div>

        {/* Content row */}
        <div className="p-6 lg:p-12">
          <div className="mx-auto max-w-2xl space-y-10">
            <div>
              <p className="text-muted-foreground mb-3 text-xs font-medium uppercase tracking-wider font-mono">
                The Challenge
              </p>
              <p className="text-muted-foreground text-base leading-relaxed">
                {study.challenge}
              </p>
            </div>

            <div>
              <p className="text-muted-foreground mb-3 text-xs font-medium uppercase tracking-wider font-mono">
                The Result
              </p>
              <p className="text-muted-foreground text-base leading-relaxed">
                {study.result}
              </p>
            </div>

            {study.metrics.length > 0 && (
              <div className="border-t border-border pt-10">
                <p className="text-muted-foreground mb-6 text-xs font-medium uppercase tracking-wider font-mono">
                  Key Results
                </p>
                <div className={`grid gap-6 ${study.metrics.length === 2 ? "sm:grid-cols-2" : "sm:grid-cols-3"}`}>
                  {study.metrics.map((metric) => (
                    <div key={metric.label}>
                      <p className="text-foreground text-3xl font-bold tracking-tight">
                        {metric.value}
                      </p>
                      <p className="text-muted-foreground text-sm mt-1">
                        {metric.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </article>

      <Spacer />
      <CallToAction />
    </>
  );
}
