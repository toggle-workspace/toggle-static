import Image from "next/image";

const logos = [
  { src: "/logo-carousel/toyota-logo.png", alt: "Toyota" },
  { src: "/logo-carousel/cni-logo.png", alt: "CNI" },
  { src: "/logo-carousel/bruno-logo.png", alt: "Bruno" },
  { src: "/logo-carousel/kualesa-logo.png", alt: "Kualesa" },
  { src: "/logo-carousel/clarins-logo.png", alt: "Clarins" },
  { src: "/logo-carousel/singlife-logo.png", alt: "Singlife" },
  { src: "/logo-carousel/petsmore-logo.png", alt: "Petsmore" },
  { src: "/logo-carousel/maxis-logo.png", alt: "Maxis" },
  { src: "/logo-carousel/nihon-logo.png", alt: "Nihon" },
  { src: "/logo-carousel/esp-logo.png", alt: "ESP" },
  { src: "/logo-carousel/supermamalab-logo.png", alt: "Supermamalab" },
  { src: "/logo-carousel/puteri-logo.png", alt: "Puteri" },
  { src: "/logo-carousel/greateastern-logo.png", alt: "Great Eastern" },
  { src: "/logo-carousel/thompson-logo.png", alt: "Thompson" },
  { src: "/logo-carousel/cimbbank-logo.png", alt: "CIMB Bank" },
  { src: "/logo-carousel/leica-logo.png", alt: "Leica" },
  { src: "/logo-carousel/secom-logo.png", alt: "Secom" },
  { src: "/logo-carousel/kith&kin-logo.png", alt: "Kith & Kin" },
  { src: "/logo-carousel/unitar-logo.png", alt: "UNITAR" },
  { src: "/logo-carousel/unabrands-logo.png", alt: "Una Brands" },
  { src: "/logo-carousel/gurulabs-logo.png", alt: "Gurulabs" },
];

export default function CustomerLogos() {
  return (
    <div className="@container grid grid-cols-[auto_1fr_auto] lg:grid-cols-[1fr_auto_1fr]">
      <div className="max-w-276 lg:min-w-276 mx-auto w-full">
        <div className="**:data-grid-content:bg-card/90 **:data-grid-content:h-full **:data-grid-content:rounded grid *:p-[0.5px] bg-border">
          <div>
            <div data-grid-content="true" className="p-12 text-center">
              <p className="text-muted-foreground mx-auto max-w-xl text-balance md:text-lg">
                50+ brands trust Toggle with their growth.
              </p>
            </div>
          </div>

          <div className="*:bg-card/75 grid grid-cols-3 items-center justify-center gap-px p-[0.5px] sm:grid-cols-4 lg:grid-cols-7">
            {logos.map((logo) => (
              <div
                key={logo.alt}
                className="flex h-20 items-center justify-center px-6"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={120}
                  height={48}
                  className="h-8 w-auto object-contain opacity-60 grayscale transition-all duration-200 hover:opacity-100 hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
