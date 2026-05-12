import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { GridRow } from "@/components/ui/grid";

interface Stat {
  value: React.ReactNode;
  description: React.ReactNode;
}

interface ProjectCardProps {
  logo?: React.ReactNode;
  quotePrefix?: string;
  quoteHighlight: string;
  href?: string;
  stats?: Stat[];
}

export function ProjectCard({
  logo,
  quotePrefix,
  quoteHighlight,
  href = "#",
  stats,
}: ProjectCardProps) {
  return (
    <div
      data-grid-content="true"
      className="@4xl:p-12 group relative row-span-4 grid grid-rows-subgrid gap-12 p-8"
    >
      <div>{logo}</div>
      <p className="text-3xl font-normal">
        {quotePrefix && <span>{quotePrefix} </span>}
        <span className="text-foreground font-semibold">{quoteHighlight}</span>
      </p>
      <Link
        href={href}
        className="text-primary before:absolute before:inset-0 flex items-center font-medium"
      >
        Read Story
        <ChevronRight className="ml-2 size-3 translate-y-0.5 duration-200 group-hover:translate-x-0.5" strokeWidth={3} />
      </Link>
      {stats && stats.length > 0 && (
        <div className="grid grid-cols-2 gap-6">
          {stats.map((stat, i) => (
            <div key={i} className="space-y-2 *:block">
              <span className="text-2xl font-semibold">{stat.value}</span>
              <p className="text-balance text-sm">{stat.description}</p>
            </div>
          ))}
        </div>
      )}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded opacity-0 shadow-2xl shadow-indigo-900/15 duration-200 group-hover:opacity-100"
      />
    </div>
  );
}

export function ProjectCardGrid({ children }: { children: React.ReactNode }) {
  return (
    <GridRow>
      <div className="@4xl:grid-cols-10 grid">
        <div className="@max-4xl:hidden">
          <div data-grid-content="true" />
        </div>
        <div className="@4xl:col-span-8">
          <div className="@2xl:grid-cols-2 grid gap-px">{children}</div>
        </div>
        <div className="@max-4xl:hidden">
          <div data-grid-content="true" />
        </div>
      </div>
    </GridRow>
  );
}
