"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  CircleCheck,
  GitBranch,
  Sparkles,
  Check,
  Circle,
  CornerDownLeft,
} from "lucide-react";

const slides = [
  {
    description: (
      <p className="text-foreground/65 self-end text-balance font-medium">
        <strong className="text-foreground font-medium">Multi-platform ads</strong>{" "}
        across Meta, Google, TikTok and more — managed from a single growth dashboard.
      </p>
    ),
    visual: (
      <div aria-hidden="true" className="min-w-sm relative">
        <div className="perspective-dramatic flex flex-col gap-4">
          <div className="mask-radial-[100%_100%] mask-radial-from-75% mask-radial-at-top-left rotate-x-5 rotate-z-6 -rotate-4 pl-6 pt-1">
            <div className="ring-border-illustration bg-background/75 shadow-black/6.5 rounded-tl-2xl px-2 pt-4 shadow-lg ring-1">
              <div className="text-muted-foreground mb-3 flex items-center gap-2.5 px-3 font-medium">
                Channels{" "}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-2.5 translate-y-0.5 rotate-90 fill-current opacity-50">
                  <polygon points="6 3 20 12 6 21 6 3" />
                </svg>
              </div>
              <div className="bg-illustration ring-border-illustration flex flex-col gap-5 rounded-tl-xl pl-5 pt-5 shadow ring-1">
                {[
                  { name: "Meta Ads", color: "text-blue-500" },
                  { name: "Google Ads", color: "text-green-500" },
                  { name: "TikTok Ads", color: "text-pink-500" },
                  { name: "LinkedIn Ads", color: "text-sky-600" },
                  { name: "Klaviyo", color: "text-yellow-500" },
                ].map((ch) => (
                  <div key={ch.name} className="flex origin-bottom items-center gap-2.5">
                    <span className={`size-2 rounded-full bg-current ${ch.color}`} />
                    <span className="text-base">{ch.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    description: (
      <p className="text-foreground/65 self-end text-balance font-medium">
        <strong className="text-foreground font-medium">Actionable reporting</strong>{" "}
        with live dashboards, campaign insights, and monthly performance reviews.
      </p>
    ),
    visual: (
      <div aria-hidden="true" className="min-w-2xs max-w-xs px-4 pt-4 selection:bg-amber-500/25">
        <div className="relative">
          <div className="absolute -bottom-2 left-1 right-1 h-full rotate-2 rounded-sm bg-linear-to-br from-amber-200 to-yellow-300 shadow-sm dark:from-amber-300 dark:to-yellow-400" />
          <div className="absolute -bottom-1 left-0.5 right-0.5 h-full -rotate-1 rounded-sm bg-linear-to-br from-amber-100 to-yellow-200 shadow-sm dark:from-amber-200 dark:to-yellow-300" />
          <div className="relative rounded-sm bg-linear-to-br from-amber-100 to-yellow-200 p-5 pb-12 shadow-lg shadow-amber-900/15 dark:from-amber-300 dark:to-yellow-300">
            <div className="mb-4 flex items-center justify-between pt-2">
              <span className="text-sm font-semibold text-amber-950">Monthly Goals</span>
              <span className="text-xs text-amber-700">3/5</span>
            </div>
            <div className="space-y-2">
              {[
                { done: true, label: "Lower CPL by 20%" },
                { done: true, label: "Scale Meta to RM50K" },
                { done: true, label: "Launch TikTok creatives" },
                { done: false, label: "Set up email flows" },
                { done: false, label: "Q2 strategy review" },
              ].map((item) => (
                <div key={item.label} className="flex cursor-pointer items-center gap-2.5">
                  {item.done ? (
                    <>
                      <div className="flex size-4 items-center justify-center rounded bg-emerald-500/30">
                        <Check className="size-3 text-emerald-700" />
                      </div>
                      <span className="text-sm font-medium text-amber-800/60 line-through">{item.label}</span>
                    </>
                  ) : (
                    <>
                      <Circle className="size-4 text-amber-700/40" />
                      <span className="text-sm font-medium text-amber-900 dark:text-amber-950">{item.label}</span>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    description: (
      <p className="text-foreground/65 self-end text-balance font-medium">
        <strong className="text-foreground font-medium">Automated workflows</strong>{" "}
        connecting your CRM, ad platforms, and analytics into one seamless system.
      </p>
    ),
    visual: (
      <div aria-hidden="true" className="min-w-2xs max-w-2xs mx-auto">
        <div>
          <div className="bg-illustration ring-border-illustration shadow-black/6.5 flex items-center gap-2 rounded-xl p-3 shadow-md ring-1">
            <CircleCheck className="size-4 fill-emerald-500/15 text-emerald-500" />
            <span className="text-foreground text-sm font-medium">Campaign live</span>
          </div>
          <div className="relative space-y-4 pl-6 pt-6">
            <div className="border-foreground/15 absolute bottom-8 left-6 top-0 border-l border-dashed" />
            {[
              { icon: <CircleCheck className="size-3.5 text-emerald-500" />, label: "Audience synced", time: "12s ago" },
              { icon: <GitBranch className="size-3.5" />, label: "Creative uploaded", time: "3s ago" },
              { icon: (
                <svg viewBox="0 0 256 222" width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" className="fill-foreground size-3.5">
                  <path fill="currentColor" d="m128 0 128 221.705H0z" />
                </svg>
              ), label: "Campaign deployed", time: "now" },
            ].map((step) => (
              <div key={step.label} className="relative pl-6">
                <div className="border-foreground/15 absolute bottom-1/2 left-0 top-0 w-6 rounded-bl-full border-b border-l border-dashed" />
                <div className="bg-card ring-border-illustration flex items-center gap-2 rounded-xl p-3 shadow ring-1">
                  {step.icon}
                  <span className="text-muted-foreground text-xs font-medium">
                    {step.label}{" "}
                    <span className="text-foreground/50 pl-0.5 text-xs">{step.time}</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    description: (
      <p className="text-foreground/65 self-end text-balance font-medium">
        <strong className="text-foreground font-medium">AI-powered creative suggestions</strong>{" "}
        that analyse performance data and recommend winning ad copy and visuals.
      </p>
    ),
    visual: (
      <div aria-hidden="true" className="min-w-2xs max-w-2xs mx-auto">
        <div className="ring-border-illustration relative rounded-lg p-3 ring-1">
          <div className="relative flex w-fit items-center gap-1">
            <div className="bg-linear-to-r absolute inset-0 h-5 via-indigo-500/15 to-emerald-500/15" />
            <span className="text-xs">What headline should I use for</span>
            <div className="text-primary h-5 w-px animate-pulse bg-current" />
          </div>
        </div>
        <div className="bg-illustration ring-border-illustration shadow-black/6.5 mt-2 overflow-hidden rounded-xl shadow-lg ring-1">
          <div className="bg-primary/10 border-primary/20 flex items-center gap-2 border-b px-3 py-2">
            <Sparkles className="text-primary fill-primary size-3.5" />
            <div className="text-xs font-medium">AI Suggestions</div>
          </div>
          <div className="divide-border divide-y">
            <div className="bg-primary/5 flex cursor-pointer items-center gap-2 px-3 py-2.5 transition-colors">
              <div className="flex-1 text-xs">...our Ramadan sale campaign?</div>
              <div className="bg-background ring-border-illustration text-muted-foreground flex items-center gap-1 rounded px-1.5 py-0.5 text-[10px] ring-1">
                <CornerDownLeft className="size-2.5" />Tab
              </div>
            </div>
            <div className="hover:bg-muted/50 flex cursor-pointer items-center gap-2 px-3 py-2.5 transition-colors">
              <div className="text-muted-foreground flex-1 text-xs">...a retargeting ad for cart abandoners?</div>
            </div>
            <div className="hover:bg-muted/50 flex cursor-pointer items-center gap-2 px-3 py-2.5 transition-colors">
              <div className="text-muted-foreground flex-1 text-xs">...a cold audience awareness campaign?</div>
            </div>
          </div>
        </div>
        <div className="mt-4 flex items-center justify-between text-xs">
          <div className="text-muted-foreground">3 suggestions</div>
          <div className="text-muted-foreground flex items-center gap-1">
            <span className="bg-background ring-border-illustration rounded px-1 ring-1">↑</span>
            <span className="bg-background ring-border-illustration rounded px-1 ring-1">↓</span>
            to navigate
          </div>
        </div>
      </div>
    ),
  },
  {
    description: (
      <p className="text-foreground/65 self-end text-balance font-medium">
        <strong className="text-foreground font-medium">Budget analytics</strong>{" "}
        with spend tracking, ROAS monitoring, and real-time budget alerts across all channels.
      </p>
    ),
    visual: (
      <div aria-hidden="true" className="-mx-4">
        <div className="mask-radial-[100%_100%] mask-radial-from-75% mask-radial-at-top px-3 pt-1">
          <div className="min-w-2xs ring-border-illustration bg-background/75 shadow-black/6.5 rounded-t-2xl px-2 pt-4 shadow-lg ring-1">
            <div className="text-muted-foreground mb-3 flex items-center gap-2.5 px-3 font-medium">Usage</div>
            <div className="bg-illustration ring-border-illustration flex flex-col gap-5 rounded-t-xl px-5 pt-5 shadow ring-1">
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-foreground text-base">Ad spend utilised</span>
                    <span className="text-foreground font-medium">68%</span>
                  </div>
                  <div className="text-muted-foreground text-xs">RM 34,000 of RM 50,000 monthly budget used.</div>
                  <div className="relative mt-5">
                    <div className="bg-foreground/5 relative h-2 overflow-hidden rounded-full">
                      <div className="bg-linear-to-l from-primary before:mask-x-from-65% absolute inset-y-0 left-0 w-[68%] rounded-full to-emerald-500 before:absolute before:inset-0 before:rounded-full before:border before:border-white/20" />
                    </div>
                    <div className="bg-linear-to-l absolute inset-y-0 left-0 w-[68%] rounded-full from-white to-emerald-500 opacity-35 blur" />
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">RM 34K / RM 50K</span>
                    <span className="text-emerald-500">RM 16K left</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="bg-muted/50 rounded-lg border p-2">
                    <div className="text-muted-foreground">Avg ROAS</div>
                    <div className="text-foreground mt-0.5 font-medium">4.2×</div>
                  </div>
                  <div className="bg-muted/50 rounded-lg border p-2">
                    <div className="text-muted-foreground">Campaigns</div>
                    <div className="text-foreground mt-0.5 font-medium">12</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    description: (
      <p className="text-foreground/65 self-end text-balance font-medium">
        <strong className="text-foreground font-medium">Localised campaigns</strong>{" "}
        crafted for Malaysian, Singaporean, and regional Southeast Asian audiences.
      </p>
    ),
    visual: (
      <div aria-hidden="true" className="min-w-xs max-w-xs">
        <div className="space-y-3">
          <div className="mask-y-from-35%">
            <p className="text-sm/6">Communicate your brand story in the language your audience thinks in — not just the one they speak.</p>
          </div>
          <div className="relative flex w-fit items-center gap-1">
            <span className="bg-linear-to-r from-primary rounded to-emerald-500 bg-clip-text text-sm text-transparent dark:from-white dark:via-indigo-300">
              Localised for MY/SG markets
            </span>
          </div>
          <div className="bg-illustration ring-primary/50 shadow-black/6.5 rounded-xl p-3 shadow-md ring-1">
            <div className="text-muted-foreground mb-3 text-xs">Bahasa Malaysia</div>
            <p className="text-foreground text-sm/6">
              Kami bantu perniagaan anda berkembang pesat dengan strategi pemasaran digital yang terbukti berkesan dan data-driven.
            </p>
          </div>
        </div>
      </div>
    ),
  },
];

export default function FeatureCarousel() {
  return (
    <section className="bg-background @container max-lg:px-1 overflow-hidden">
      <Carousel className="relative mx-auto" opts={{ align: "start", loop: true }}>
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-wrap items-end justify-between gap-4 border-x border-dashed px-6 pb-6 pt-24 lg:px-8 lg:pb-12">
            <h2 className="text-foreground max-w-xl text-balance text-4xl font-semibold lg:text-5xl">
              Everything your growth needs
            </h2>
            <div className="flex items-center gap-2">
              <CarouselPrevious className="static size-8 translate-x-0 translate-y-0 rounded-full" />
              <CarouselNext className="static size-8 translate-x-0 translate-y-0 rounded-full" />
            </div>
          </div>
        </div>

        <div className="lg:grid lg:grid-cols-[1fr_auto_1fr]">
          <div aria-hidden="true" className="border-y border-dashed max-lg:hidden" />
          <div className="mx-auto overflow-hidden border lg:max-w-6xl">
            <CarouselContent className="-ml-4 *:nth-3:border-r-0 *:bg-card *:not-dark:bg-card/50 *:p-8 *:pt-12 md:divide-x md:*:basis-1/2 lg:-mr-4 lg:*:basis-1/3">
              {slides.map((slide, i) => (
                <CarouselItem
                  key={i}
                  className="grid-rows-subrgid row-span-2 grid gap-12"
                >
                  <div className="m-auto scale-90 self-center">{slide.visual}</div>
                  {slide.description}
                </CarouselItem>
              ))}
            </CarouselContent>
          </div>
          <div aria-hidden="true" className="border-y border-dashed max-lg:hidden" />
        </div>

        <div className="mx-auto w-full max-w-6xl border-x border-dashed pb-24" />
      </Carousel>
    </section>
  );
}
