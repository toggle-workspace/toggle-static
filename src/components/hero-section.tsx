import Image from "next/image";
import Link from "next/link";

const BASE =
  "https://raw.githubusercontent.com/tailark/assets/refs/heads/main/";

const logos = [
  { src: "/logo-carousel/toyota-logo.png", alt: "Toyota" },
  { src: "/logo-carousel/maxis-logo.png", alt: "Maxis" },
  { src: "/logo-carousel/cimbbank-logo.png", alt: "CIMB Bank" },
  { src: "/logo-carousel/clarins-logo.png", alt: "Clarins" },
  { src: "/logo-carousel/singlife-logo.png", alt: "Singlife" },
  { src: "/logo-carousel/leica-logo.png", alt: "Leica" },
];

export default function HeroSection() {
  return (
    <section className="bg-card">
      <div className="bg-foreground/8 @container">
        {/* Label row */}
        <div className="bg-card/90 rounded">
          <div className="max-w-lg p-6">
            <span className="text-muted-foreground font-mono text-sm uppercase">
              Your Digital Growth Partner
            </span>
          </div>
        </div>

        {/* Hero content row */}
        <div className="grid grid-cols-2 *:p-[0.5px] lg:grid-cols-6">
          {/* Left: copy + CTAs */}
          <div className="col-span-3">
            <div className="bg-card/90 flex h-full flex-col justify-center rounded px-8 py-16">
              <h1 className="text-balance text-5xl font-semibold lg:text-6xl">
                The Agency Behind 50+ Growing Brands
              </h1>
              <p className="text-muted-foreground mx-auto mb-8 mt-6 text-balance text-lg">
                We run paid media, creative, and lifecycle marketing as one
                system. Every channel points at the same goal: more revenue,
                less wasted spend.
              </p>
              <div className="flex gap-3 max-lg:justify-center">
                <Link
                  href="/contact"
                  className="cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 shadow-md border-[0.5px] border-white/10 shadow-black/15 [&_svg]:drop-shadow-sm text-shadow-sm bg-primary ring-1 ring-(--ring-color) [--ring-color:color-mix(in_oklab,black_15%,var(--color-primary))] dark:border-transparent dark:[--ring-color:color-mix(in_oklab,white_15%,var(--color-primary))] text-primary-foreground hover:bg-primary/90 h-9 px-4 py-2"
                >
                  Book a Consultation
                </Link>
                <Link
                  href="/work"
                  className="cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 shadow-sm shadow-black/10 border border-transparent bg-card ring-1 ring-foreground/10 duration-200 hover:bg-muted/50 dark:ring-foreground/15 dark:hover:bg-muted/50 h-9 px-4 py-2"
                >
                  See Our Work
                </Link>
              </div>
            </div>
          </div>

          {/* Right: screenshots */}
          <div className="col-span-3">
            <div className="bg-card/90 relative h-full overflow-hidden rounded">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-50"
                style={{
                  backgroundImage: `repeating-linear-gradient(22.5deg, transparent, transparent 1px, rgba(75, 85, 99, 0.06) 1px, rgba(75, 85, 99, 0.06) 2px, transparent 2px, transparent 4px),
                    repeating-linear-gradient(67.5deg, transparent, transparent 1px, rgba(107, 114, 128, 0.05) 1px, rgba(107, 114, 128, 0.05) 2px, transparent 2px, transparent 4px),
                    repeating-linear-gradient(112.5deg, transparent, transparent 1px, rgba(55, 65, 81, 0.04) 1px, rgba(55, 65, 81, 0.04) 2px, transparent 2px, transparent 4px),
                    repeating-linear-gradient(157.5deg, transparent, transparent 1px, rgba(31, 41, 55, 0.03) 1px, rgba(31, 41, 55, 0.03) 2px, transparent 2px, transparent 4px)`,
                }}
              />
              <div className="mask-radial-at-left mask-radial-[115%_100%] mask-radial-from-45% pointer-events-none h-full">
                <div className="min-w-md relative max-w-lg px-6 pb-12 pt-12 lg:px-12 lg:pt-16">
                  {/* Foreground screenshot */}
                  <div className="bg-card min-w-3xl ring-foreground/10 absolute -right-36 bottom-8 left-36 top-8 z-10 overflow-hidden rounded-2xl p-1 shadow-2xl shadow-indigo-900/35 ring-1 backdrop-blur md:-right-56 lg:bottom-6 lg:left-44 lg:top-12 lg:max-w-6xl">
                    <div className="relative aspect-video origin-top rounded-xl">
                      <Image
                        alt="app screenshot"
                        width={2880}
                        height={1920}
                        className="object-top-left size-full object-cover dark:hidden"
                        sizes="(max-width: 640px) 768px, (max-width: 768px) 1024px, (max-width: 1024px) 1280px, 1280px"
                        src={`${BASE}circle-4_lkhxqm.png`}
                      />
                      <Image
                        alt="app screenshot"
                        width={2880}
                        height={1920}
                        className="object-top-left not-dark:hidden size-full object-cover"
                        sizes="(max-width: 640px) 768px, (max-width: 768px) 1024px, (max-width: 1024px) 1280px, 1280px"
                        src={`${BASE}circle-4-dark_m2mfxo.png`}
                      />
                    </div>
                  </div>
                  {/* Background screenshot */}
                  <div className="min-w-2xl bg-linear-to-b dark:from-card dark:bg-card via-card from-muted to-card ring-foreground/10 border-card rounded-xl border p-1 shadow-2xl shadow-black/5 ring-1 lg:max-w-6xl">
                    <div className="relative aspect-video origin-top overflow-hidden rounded-lg">
                      <Image
                        alt="app screenshot"
                        width={2880}
                        height={1920}
                        className="object-top-left size-full object-cover mix-blend-darken dark:hidden"
                        sizes="(max-width: 640px) 768px, (max-width: 768px) 1024px, (max-width: 1024px) 1280px, 1280px"
                        src={`${BASE}circle_un3f39.png`}
                      />
                      <Image
                        alt="app screenshot"
                        width={2880}
                        height={1920}
                        className="object-top-left not-dark:hidden size-full object-cover opacity-65"
                        sizes="(max-width: 640px) 768px, (max-width: 768px) 1024px, (max-width: 1024px) 1280px, 1280px"
                        src={`${BASE}circle-dark_cv2taw.png`}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Logo bar */}
        <div className="grid grid-cols-2 *:p-[0.5px] lg:grid-cols-6">
          {logos.map((logo) => (
            <div key={logo.alt}>
              <div className="bg-card/90 flex h-16 items-center justify-center rounded md:h-20">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={120}
                  height={48}
                  className="h-8 w-auto object-contain opacity-60 grayscale transition-all duration-200 hover:opacity-100 hover:grayscale-0"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
