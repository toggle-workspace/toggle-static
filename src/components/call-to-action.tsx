import Link from "next/link";

function SideCol({ wide }: { wide?: boolean }) {
  return (
    <div
      className="grid"
      style={{ gridTemplateColumns: "repeat(1, minmax(0, 1fr))" }}
    >
      <div aria-hidden="true" className={`p-[0.5px]${wide ? " w-full" : ""}`}>
        <div className="bg-card/90 h-full w-2 rounded md:w-6 lg:w-full" />
      </div>
    </div>
  );
}

export default function CallToAction() {
  return (
    <div className="@container grid grid-cols-[auto_1fr_auto] lg:grid-cols-[1fr_auto_1fr] bg-zinc-950/10">
      <SideCol wide />
      <div className="max-w-276 lg:min-w-276 mx-auto w-full p-[0.5px]">
        <div data-slot="content" className="bg-card/90 h-full rounded">
          <div className="@3xl:p-20 @lg:p-8 relative overflow-hidden p-6">
            <div className="mx-auto max-w-xl text-center">
              <h2 className="text-foreground text-balance text-4xl font-semibold lg:text-5xl">
                Ready to Scale Your Business?
              </h2>
              <p className="text-foreground mb-6 mt-4 text-balance text-lg">
                Join 50+ ambitious brands already growing with Toggle Solutions.
                Book a free consultation — no sales pitch, no pressure.
              </p>
              <Link
                href="/contact"
                className="cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border-[0.5px] border-transparent [&_svg]:drop-shadow-sm not-in-data-[theme=dark]:text-shadow-sm bg-primary ring-1 ring-(--ring-color) [--ring-color:color-mix(in_oklab,var(--color-foreground)15%,var(--color-primary))] text-primary-foreground hover:bg-primary/90 h-10 rounded-md px-4 text-sm shadow-xl shadow-indigo-900/40"
              >
                Book a Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
      <SideCol />
    </div>
  );
}
