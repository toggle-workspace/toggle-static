import Image from "next/image";
import { GridRow, SideCol } from "@/components/ui/grid";

export default function AboutHero() {
  return (
    <section id="home" className="overflow-hidden">
      {/* Hero text */}
      <GridRow>
        <div className="grid grid-cols-10 gap-px">
          <div aria-hidden="true" className="max-sm:hidden">
            <div data-grid-content="true" />
          </div>
          <div
            data-grid-content="true"
            className="@4xl:p-12 col-span-full p-6 sm:col-span-8"
          >
            <span className="text-muted-foreground text-sm font-medium font-mono uppercase">
              About us
            </span>
            <h1 className="text-foreground mt-12 text-balance text-5xl font-semibold tracking-tight lg:text-6xl">
              Performance marketing built to last.
            </h1>
            <p className="text-muted-foreground mt-6 max-w-2xl text-balance text-lg">
              Founded in 2021, Toggle Solutions started with one belief:
              growth marketing should be transparent, measurable, and built to
              scale. Today we serve ambitious brands across Malaysia and
              Southeast Asia.
            </p>
          </div>
          <div aria-hidden="true" className="max-sm:hidden">
            <div data-grid-content="true" />
          </div>
        </div>
      </GridRow>

      {/* Stats row */}
      <div className="@container grid grid-cols-[auto_1fr_auto] lg:grid-cols-[1fr_auto_1fr]">
        <SideCol wide />
        <div className="max-w-276 lg:min-w-276 mx-auto w-full">
          <div className="**:data-grid-content:bg-card/90 **:data-grid-content:h-full **:data-grid-content:rounded *:p-[0.5px] @4xl:**:data-grid-content:p-12 **:data-grid-content:p-6 @4xl:grid-cols-10 @xl:grid-cols-2 grid gap-px p-[0.5px]">
            <div
              aria-hidden="true"
              data-grid-content="true"
              className="@max-4xl:hidden"
            >
              <div />
            </div>
            <div data-grid-content="true" className="@4xl:col-span-4">
              <p className="text-muted-foreground">
                <strong className="text-foreground font-medium font-mono">
                  50+
                </strong>
                {"  "}
                ambitious brands grown across Malaysia and Southeast Asia.
              </p>
            </div>
            <div data-grid-content="true" className="@4xl:col-span-4">
              <p className="text-muted-foreground">
                <strong className="text-foreground font-medium font-mono">
                  4+
                </strong>
                {"  "}
                years of data-driven performance marketing.
              </p>
            </div>
            <div
              aria-hidden="true"
              data-grid-content="true"
              className="@max-4xl:hidden"
            >
              <div />
            </div>
          </div>
        </div>
        <SideCol />
      </div>

      {/* Team image */}
      <div className="@container grid grid-cols-[auto_1fr_auto] lg:grid-cols-[1fr_auto_1fr]">
        <SideCol wide />
        <div className="max-w-276 lg:min-w-276 mx-auto w-full p-[0.5px]">
          <div data-slot="content" className="bg-card/90 h-full rounded">
            <div data-grid-content="true">
              <div className="aspect-43/24 mix-blend-darken">
                <Image
                  src="https://raw.githubusercontent.com/tailark/assets/refs/heads/main/team-hand-drawn_ctvx7q.png"
                  alt="Team hand drawn"
                  width={1376}
                  height={768}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        <SideCol />
      </div>
    </section>
  );
}
