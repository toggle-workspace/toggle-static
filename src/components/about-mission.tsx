import { GridRow } from "@/components/ui/grid";

export default function AboutMission() {
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
                Our Mission
              </h2>
              <div className="text-muted-foreground mt-6 space-y-4 text-xl font-medium *:text-balance *:leading-relaxed">
                <p>
                  <span className="text-foreground">
                    We believe great marketing is built when brands can focus on
                    what matters
                  </span>{" "}
                  — serving their customers — instead of wrestling with
                  fragmented tools and inconsistent results.
                </p>
                <p>
                  <span className="text-foreground">
                    Our mission is to eliminate the friction between ambition
                    and growth.
                  </span>{" "}
                  We build systems, strategies, and campaigns that let brands
                  scale predictably — in weeks, not years.
                </p>
              </div>
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
