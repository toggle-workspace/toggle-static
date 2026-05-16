import type { ReactNode } from "react";
import { GridRow } from "@/components/ui/grid";

interface SectionOverviewProps {
  label: string;
  children: ReactNode;
}

export function SectionOverview({ label, children }: SectionOverviewProps) {
  return (
    <section>
      <GridRow>
        <div className="grid grid-cols-10 gap-px">
          <div aria-hidden="true" className="max-sm:hidden">
            <div data-grid-content="true" />
          </div>
          <div className="col-span-full sm:col-span-8">
            <div data-grid-content="true" className="@4xl:p-12 p-6">
              <h2 className="text-muted-foreground text-balance font-mono">
                {label}
              </h2>
              {children}
            </div>
          </div>
          <div aria-hidden="true" className="max-sm:hidden">
            <div data-grid-content="true" />
          </div>
        </div>
      </GridRow>
    </section>
  );
}
