import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SideCol } from "@/components/ui/grid";

const jobs = [
  { title: "Performance Marketing Manager", location: "Kuala Lumpur", type: "full" },
  { title: "SEO Strategist", location: "Kuala Lumpur", type: "full" },
  { title: "Paid Social Specialist", location: "Remote", type: "full" },
  { title: "Content Strategist", location: "Remote", type: "part" },
  { title: "Creative & Video Producer", location: "Kuala Lumpur", type: "full" },
  { title: "Account Manager", location: "Kuala Lumpur", type: "full" },
  { title: "Data Analyst", location: "Remote", type: "full" },
  { title: "CRO Specialist", location: "Remote", type: "full" },
];

export default function AboutHiring() {
  return (
    <section>
      <div className="@container grid grid-cols-[auto_1fr_auto] lg:grid-cols-[1fr_auto_1fr]">
        <SideCol wide />
        <div className="max-w-276 lg:min-w-276 mx-auto w-full">
          <div className="**:data-grid-content:bg-card/90 **:data-grid-content:h-full **:data-grid-content:rounded grid *:p-[0.5px] bg-border @4xl:grid-cols-10">
            <div aria-hidden="true" className="@max-4xl:hidden">
              <div data-grid-content="true" />
            </div>
            <div className="@4xl:col-span-8 col-span-full grid gap-px">
              <div>
                <div data-grid-content="true" className="@4xl:p-12 p-6">
                  <h2 className="text-muted-foreground text-balance font-mono">
                    We&apos;re hiring
                  </h2>
                  <p className="text-foreground mt-6 max-w-2xl text-balance text-xl font-medium">
                    Join a fast-moving team building growth systems for ambitious
                    brands. We value craft, ownership, and results.
                  </p>
                </div>
              </div>
              {jobs.map((job) => (
                <div key={job.title}>
                  <div
                    data-grid-content="true"
                    className="@4xl:px-12 hover:bg-card! hover:z-1 relative grid gap-2 overflow-hidden rounded-xl p-4 px-6 shadow-lg shadow-transparent hover:shadow-indigo-900/5"
                  >
                    <Link
                      href="#"
                      className="font-medium after:absolute after:inset-0"
                    >
                      {job.title}
                    </Link>
                    <div className="flex items-center">
                      <div>
                        <span className="text-muted-foreground">
                          {job.location}
                        </span>{" "}
                        <span className="text-muted-foreground">
                          <span className="capitalize">{job.type}</span>-time
                        </span>
                      </div>
                      <div className="ring-border-illustration bg-card shadow-black/6.5 ml-auto flex h-6 items-center rounded-full px-2 shadow ring-1">
                        <ArrowRight className="not-group-hover:opacity-50 group-hover:text-primary size-3.5" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <div>
                <div data-grid-content="true" className="@4xl:p-12 p-6">
                  <p className="text-muted-foreground">
                    Don&apos;t see a role that fits?{" "}
                    <Link
                      href="/contact"
                      className="text-foreground underline underline-offset-4"
                    >
                      Send us a note
                    </Link>{" "}
                    We&apos;re always looking for exceptional people.
                  </p>
                </div>
              </div>
            </div>
            <div aria-hidden="true" className="@max-4xl:hidden">
              <div data-grid-content="true" />
            </div>
          </div>
        </div>
        <SideCol />
      </div>
    </section>
  );
}
