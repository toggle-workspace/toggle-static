import Link from "next/link";

export default function CallToAction() {
  return (
    <div className="bg-border p-[0.5px]">
      <div className="@3xl:p-20 @lg:p-8 relative overflow-hidden p-6 bg-card/90 rounded">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-foreground text-balance text-4xl font-semibold lg:text-5xl">
            Book a Free Consultation
          </h2>
          <p className="text-foreground mb-6 mt-4 text-balance text-lg">
            50+ brands already work with Toggle. We&apos;ll review your
            marketing and tell you what&apos;s worth doing first.
          </p>
          <Link
            href="/contact"
            className="cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border-[0.5px] border-transparent [&_svg]:drop-shadow-sm not-in-data-[theme=dark]:text-shadow-sm bg-primary ring-1 ring-(--ring-color) [--ring-color:color-mix(in_oklab,var(--color-foreground)15%,var(--color-primary))] text-primary-foreground hover:bg-primary/90 h-10 rounded-md px-4 text-sm shadow-xl shadow-indigo-900/40"
          >
            Book a Free Consultation
          </Link>
        </div>
      </div>
    </div>
  );
}
