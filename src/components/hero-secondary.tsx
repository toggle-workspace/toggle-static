import { SideCol } from "@/components/ui/grid";

const decorativeCells = Array.from({ length: 10 });

export default function HeroSecondary() {
  return (
    <div className="@container grid grid-cols-[auto_1fr_auto] lg:grid-cols-[1fr_auto_1fr]">
      <SideCol wide />
      <div className="max-w-276 lg:min-w-276 mx-auto w-full">
        <div className="**:data-grid-content:bg-card/90 **:data-grid-content:h-full **:data-grid-content:rounded grid *:p-[0.5px] bg-border relative">
          {/* Top decorative dot row */}
          <div aria-hidden="true" className="col-span-full grid grid-cols-10 gap-px">
            {decorativeCells.map((_, i) => (
              <div key={i} className="aspect-square">
                <div data-grid-content="true" />
              </div>
            ))}
          </div>

          {/* Main content row */}
          <div className="grid grid-cols-10 gap-px">
            {/* Left spacer columns */}
            <div aria-hidden="true" className="@4xl:grid hidden grid-rows-2 gap-px">
              <div><div data-grid-content="true" /></div>
              <div><div data-grid-content="true" /></div>
            </div>

            {/* Hero text */}
            <div className="@4xl:col-span-8 col-span-full">
              <div data-grid-content="true" className="px-6 py-12 text-center">
                <div className="relative mx-auto max-w-3xl text-center">
                  <h1 className="text-foreground text-balance text-5xl font-semibold sm:text-6xl">
                    Companies building with Tailark
                  </h1>
                  <p className="text-muted-foreground mt-7 text-balance text-lg">
                    Tailark is trusted by over 100 companies to help them scale their business and stay ahead of the competition.
                  </p>
                </div>
              </div>
            </div>

            {/* Right spacer columns */}
            <div aria-hidden="true" className="@4xl:grid hidden grid-rows-2 gap-px">
              <div><div data-grid-content="true" /></div>
              <div><div data-grid-content="true" /></div>
            </div>
          </div>

          {/* Bottom decorative dot row */}
          <div aria-hidden="true" className="col-span-full grid grid-cols-10 gap-px">
            {decorativeCells.map((_, i) => (
              <div key={i} className="aspect-square">
                <div data-grid-content="true" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <SideCol />
    </div>
  );
}
