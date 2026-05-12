import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronRight, Star } from "lucide-react";
import Image from "next/image";

const platforms = [
  { name: "Meta Ads", blur: true, align: "ml-auto" },
  { name: "Google Ads", blur: false, align: "ml-auto" },
  { name: "TikTok", blur: true, align: "ml-auto" },
  { name: "Klaviyo", blur: false, align: "mr-auto" },
  { name: "Shopify", blur: true, align: "" },
  { name: "SEMrush", blur: false, align: "" },
  { name: "GA4", blur: true, align: "ml-auto" },
  { name: "HubSpot", blur: false, align: "" },
  { name: "Canva", blur: true, align: "" },
];

export default function HeroSection() {
  return (
    <main className="overflow-hidden">
      <section className="bg-background">
        <div className="relative pb-32 pt-44">
          <div className="mask-radial-from-45% mask-radial-to-75% mask-radial-at-top mask-radial-[75%_100%] md:aspect-9/4 absolute inset-0 aspect-square opacity-65 dark:opacity-5">
            <Image
              src="https://images.unsplash.com/photo-1740516367177-ae20098c8786?q=80&w=2268&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="hero background"
              width={2102}
              height={1694}
              className="h-full w-full object-cover object-top"
            />
          </div>
          <div className="relative z-10 mx-auto w-full max-w-5xl px-6">
            <div className="mx-auto mb-16 max-w-xl lg:mb-24">
              <div className="grid scale-95 grid-cols-3 gap-12">
                {platforms.map((p, i) => (
                  <div
                    key={i}
                    className={`${p.align} ${p.blur ? "blur-[2px]" : ""}`}
                  >
                    <Card className="shadow-foreground/10 flex h-8 w-fit items-center rounded-xl px-3 sm:h-10 sm:px-4">
                      <span className="text-nowrap font-medium max-sm:text-xs">
                        {p.name}
                      </span>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
            <div className="mx-auto max-w-lg text-center">
              <h1 className="text-balance font-serif text-4xl font-medium sm:text-5xl">
                Your Digital Growth Partner
              </h1>
              <p className="text-muted-foreground mt-4 text-balance">
                A strategic growth partner for ambitious brands. We combine
                high-end design with data-driven performance to build systems
                that scale effortlessly.
              </p>
              <Button
                className="mt-6 pr-1.5"
                render={<Link href="/contact" />}
                nativeButton={false}
              >
                <span className="text-nowrap">Book a Consultation</span>
                <ChevronRight className="opacity-50" />
              </Button>
              <div className="mt-5 flex items-center justify-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Star className="size-3.5 fill-foreground text-foreground" />
                  4.9/5 stars
                </span>
                <span>·</span>
                <span>Trusted by 50+ clients</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
