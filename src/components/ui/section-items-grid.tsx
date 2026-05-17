import type { LucideIcon } from "lucide-react";
import { GridRow } from "@/components/ui/grid";

interface GridItem {
  title: string;
  description: string;
  icon?: LucideIcon;
}

interface SectionItemsGridProps {
  heading: string;
  subheading?: string;
  items: GridItem[];
  columns?: 2 | 3;
}

export function SectionItemsGrid({
  heading,
  subheading,
  items,
  columns = 2,
}: SectionItemsGridProps) {
  return (
    <section>
      <GridRow>
        <div className="grid grid-cols-10 gap-px">
          <div aria-hidden="true" className="max-sm:hidden">
            <div data-grid-content="true" />
          </div>
          <div
            className={`col-span-full grid gap-px sm:col-span-8 ${
              columns === 3 ? "@xl:grid-cols-3" : "@xl:grid-cols-2"
            }`}
          >
            <div data-grid-content="true" className="@4xl:p-12 col-span-full p-6">
              <h2 className="text-muted-foreground text-balance font-mono">
                {heading}
              </h2>
              {subheading && (
                <p className="text-foreground mt-6 max-w-2xl text-balance text-xl font-medium">
                  {subheading}
                </p>
              )}
            </div>
            {items.map((item) => (
              <div
                key={item.title}
                data-grid-content="true"
                className="@4xl:p-12 flex flex-col gap-3 p-6"
              >
                {item.icon && (
                  <item.icon className="text-muted-foreground size-5" />
                )}
                <h3 className="text-foreground font-medium">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          <div aria-hidden="true" className="max-sm:hidden">
            <div data-grid-content="true" />
          </div>
        </div>
      </GridRow>
    </section>
  );
}
