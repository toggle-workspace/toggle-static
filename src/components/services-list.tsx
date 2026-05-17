import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SERVICES } from "@/data/services";

export default function ServicesList() {
  return (
    <div className="flex flex-col gap-5">
      {SERVICES.map(({ num, slug, name, description, image }) => (
        <Link
          key={num}
          href={`/services/${slug}`}
          className="group grid overflow-hidden border-y grid-cols-1 gap-5 p-5 lg:grid-cols-3 lg:gap-0 lg:p-0"
        >
          {/* Number + Name */}
          <div className="relative flex flex-row lg:flex-col gap-2 group-hover:bg-card-foreground dark:group-hover:bg-white p-0 lg:p-5 xl:p-10">
            <span className="z-1 text-muted-foreground text-sm font-mono uppercase group-hover:text-white group-hover:dark:text-card">
              {num}
            </span>
            <h3 className="z-1 text-xl font-medium uppercase tracking-tight group-hover:text-white group-hover:dark:text-card md:text-2xl xl:text-3xl">
              {name}
            </h3>
            <div className="pointer-events-none absolute inset-0 left-0 top-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.08)_0%,rgba(0,0,0,0.85)_70%)] dark:bg-none" />
          </div>

          {/* Image */}
          <div className="overflow-hidden border-x group-hover:border-white/10 group-hover:bg-card-foreground dark:group-hover:bg-white lg:p-5">
            <Image
              alt={name}
              src={image}
              width={400}
              height={0}
              style={{ height: "auto" }}
              className="w-full transition-all duration-300 ease-out group-hover:scale-[1.3]"
              sizes="(max-width: 1024px) 100vw, 33vw"
            />
          </div>

          {/* Description + Button */}
          <div className="flex flex-col justify-between gap-6 group-hover:bg-card-foreground dark:group-hover:bg-white px-0 py-0 xl:px-10 lg:py-6">
            <p className="text-base font-normal tracking-tight text-card-foreground/80 group-hover:text-white/80 group-hover:dark:text-card">
              {description}
            </p>
            <Button
              size="icon"
              className="h-10 w-10 rounded-full group-hover:bg-white group-hover:dark:bg-card hover:bg-white lg:h-12 lg:w-12"
              asChild
            >
              <span>
                <ArrowRight className="size-5 transition-transform duration-300 ease-out group-hover:rotate-312 group-hover:text-card-foreground" />
              </span>
            </Button>
          </div>
        </Link>
      ))}
    </div>
  );
}
