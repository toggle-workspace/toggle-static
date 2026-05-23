import {
  Video,
  Clock,
  MapPin,
  Users,
  TrendingUp,
  CircleCheck,
  CircleDashed,
  Play,
} from "lucide-react";

const AVATARS = [
  { name: "A", bg: "bg-indigo-400" },
  { name: "B", bg: "bg-emerald-400" },
  { name: "C", bg: "bg-violet-400" },
  { name: "D", bg: "bg-rose-400" },
];

export default function Content() {
  return (
    <div className="@container grid grid-cols-[auto_1fr_auto] lg:grid-cols-[1fr_auto_1fr]">
      <div className="max-w-276 lg:min-w-276 mx-auto w-full">
        <div className="**:data-grid-content:bg-card/90 **:data-grid-content:h-full **:data-grid-content:rounded grid *:p-[0.5px] bg-border @2xl:grid-cols-4 @5xl:grid-cols-3 @5xl:grid">
          {/* Left spacer — visible only between @2xl and @5xl */}
          <div className="@max-2xl:hidden @5xl:hidden">
            <div data-grid-content="true" />
          </div>

          {/* 3-card grid */}
          <div className="@2xl:col-span-2 @5xl:col-span-full @5xl:grid-cols-3 grid gap-px">
            {/* Card 1: Launch */}
            <div
              data-slot="feature-card"
              className="grid h-full grid-rows-[auto_1fr] gap-px @max-5xl:h-auto"
            >
              <div
                data-grid-content="true"
                data-slot="feature-card-content"
                className="@4xl:px-12 @4xl:pt-12 space-y-4 p-6 @5xl:min-h-44"
              >
                <h3
                  data-slot="feature-card-title"
                  className="text-muted-foreground flex items-center gap-2"
                >
                  <span className="font-mono">01.</span> Audit
                </h3>
                <p
                  data-slot="feature-card-description"
                  className="text-muted-foreground text-xl font-medium"
                >
                  <span className="text-foreground">
                    We audit your business.
                  </span>{" "}
                  A strategy call uncovers gaps, quick wins, and which channels
                  deserve your budget.
                </p>
              </div>

              <div
                data-grid-content="true"
                data-slot="feature-card-illustration"
                className="@4xl:pb-12 flex flex-col items-center justify-center px-6 pb-6 pt-6 @4xl:px-10"
              >
                <div aria-hidden="true" className="w-full">
                  <div className="flex items-start justify-between px-2 pt-2">
                    <div className="space-y-1">
                      <div className="text-muted-foreground text-xs font-medium">
                        Brand Audit Call
                      </div>
                      <div className="text-base font-semibold">
                        Growth Strategy Review
                      </div>
                    </div>
                    <div className="bg-foreground/5 flex size-9 items-center justify-center rounded-full">
                      <Video className="size-4" />
                    </div>
                  </div>

                  <div className="bg-card ring-border mb-2 mt-3 space-y-3 rounded-xl p-4 shadow-md shadow-black/5 ring-1">
                    <div className="flex items-center gap-3 text-sm">
                      <Clock className="text-foreground/50 size-[18px]" />
                      <span>Wed, Jan 29 · 2:00 – 3:30 PM</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <MapPin className="text-foreground/50 size-[18px]" />
                      <span className="text-foreground decoration-primary cursor-pointer underline underline-offset-2">
                        meet.toggle.solutions
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <Users className="text-foreground/50 size-[18px]" />
                      <div className="flex -space-x-0.5">
                        {AVATARS.map(({ name, bg }) => (
                          <div
                            key={name}
                            className="bg-background ring-border relative size-5 rounded-full ring-2"
                          >
                            <div
                              className={`size-full rounded-full ${bg} opacity-80`}
                            />
                          </div>
                        ))}
                        <div className="ring-background bg-muted text-muted-foreground flex size-5 items-center justify-center rounded-full text-[10px] font-medium ring-1">
                          +4
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-2 pl-3 pr-0.5">
                    <span className="text-sm font-semibold">Going?</span>
                    <div className="flex select-none">
                      <div className="hover:bg-foreground/5 flex h-7 cursor-pointer items-center justify-center rounded-full px-2 text-sm font-medium text-blue-600 dark:text-blue-400">
                        Yes
                      </div>
                      <div className="hover:bg-foreground/5 text-foreground/65 hover:text-foreground flex h-7 cursor-pointer items-center justify-center rounded-full px-2 text-sm font-medium">
                        No
                      </div>
                      <div className="hover:bg-foreground/5 text-foreground/65 hover:text-foreground flex h-7 cursor-pointer items-center justify-center rounded-full px-2 text-sm font-medium">
                        Maybe
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: Analyze */}
            <div
              data-slot="feature-card"
              className="grid h-full grid-rows-[auto_1fr] gap-px @max-5xl:h-auto"
            >
              <div
                data-grid-content="true"
                data-slot="feature-card-content"
                className="@4xl:px-12 @4xl:pt-12 space-y-4 p-6 @5xl:min-h-44"
              >
                <h3
                  data-slot="feature-card-title"
                  className="text-muted-foreground flex items-center gap-2"
                >
                  <span className="font-mono">02.</span> Launch
                </h3>
                <p
                  data-slot="feature-card-description"
                  className="text-muted-foreground text-xl font-medium"
                >
                  <span className="text-foreground">
                    Campaigns go live fast.
                  </span>{" "}
                  We build and launch across your highest-priority channels,
                  without the slow agency handoffs.
                </p>
              </div>

              <div
                data-grid-content="true"
                data-slot="feature-card-illustration"
                className="@4xl:px-12 @4xl:pb-12 flex flex-col items-center justify-center px-6 pb-6 pt-6"
              >
                <div aria-hidden="true">
                  <div className="text-muted-foreground flex items-center gap-2 text-xs">
                    Campaign Performance
                    <div className="flex items-center gap-1">
                      <div className="flex size-3 items-center justify-center rounded-sm bg-emerald-600">
                        <TrendingUp className="size-2 text-white" />
                      </div>
                      <span className="text-[11px] font-medium text-emerald-600 dark:text-emerald-400">
                        65%
                      </span>
                    </div>
                  </div>

                  <div className="mt-0.5">
                    <div>
                      <span className="text-foreground align-baseline text-3xl font-bold">
                        3.2
                      </span>
                      <span className="text-foreground/50 align-baseline text-3xl font-bold">
                        x ROAS
                      </span>
                    </div>
                    <div className="text-muted-foreground mt-8 flex items-end gap-1">
                      {Array.from({ length: 37 }, (_, i) => (
                        <div
                          key={i}
                          className="bg-foreground/10 last:bg-gradient-to-b h-4 w-[3px] rounded-full last:h-20 last:from-green-300 last:to-green-500"
                        />
                      ))}
                    </div>
                    <div className="text-foreground/50 mt-4 flex justify-between px-12 text-xs">
                      <span>1D</span>
                      <span className="text-foreground font-medium">1W</span>
                      <span>1M</span>
                      <span>6M</span>
                      <span>1Y</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3: Plan */}
            <div
              data-slot="feature-card"
              className="grid h-full grid-rows-[auto_1fr] gap-px @max-5xl:h-auto"
            >
              <div
                data-grid-content="true"
                data-slot="feature-card-content"
                className="@4xl:px-12 @4xl:pt-12 space-y-4 p-6 @5xl:min-h-44"
              >
                <h3
                  data-slot="feature-card-title"
                  className="text-muted-foreground flex items-center gap-2"
                >
                  <span className="font-mono">03.</span> Scale
                </h3>
                <p
                  data-slot="feature-card-description"
                  className="text-muted-foreground text-xl font-medium"
                >
                  <span className="text-foreground">
                    Results build over time.
                  </span>{" "}
                  We test and scale what works each week, improving performance
                  the longer we run together.
                </p>
              </div>

              <div
                data-grid-content="true"
                data-slot="feature-card-illustration"
                className="@4xl:px-12 @4xl:pb-12 flex flex-col items-center justify-center px-6 pb-6 pt-6"
              >
                <div aria-hidden="true">
                  <div className="flex items-center gap-2">
                    <div className="text-sm font-medium">Growth Plan</div>
                    <div className="bg-muted text-muted-foreground ml-auto rounded-full px-2 py-0.5 text-[10px]">
                      Auto-optimised
                    </div>
                  </div>

                  <div className="relative -mx-2 mt-4">
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-400 to-emerald-500 opacity-75 blur-md mix-blend-lighten dark:mix-blend-overlay" />
                    <div className="bg-card ring-border relative rounded-lg p-2.5 shadow-md shadow-black/5 ring-1">
                      <div className="text-muted-foreground text-[10px]">
                        Goal
                      </div>
                      <div className="mt-1 text-xs">
                        Scale top-performing campaigns and expand into new audience segments
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 space-y-2">
                    <div className="flex items-center gap-2">
                      <CircleCheck className="size-4 shrink-0 text-green-500" />
                      <div className="flex-1 text-xs font-medium line-through opacity-50">
                        1. Audience expansion
                      </div>
                    </div>

                    <div className="bg-primary/5 ring-primary/20 -mx-2 flex items-start gap-2 rounded-lg p-2 ring-1">
                      <div className="relative mt-0.5">
                        <CircleDashed
                          className="text-primary size-4 animate-spin"
                          style={{ animationDuration: "3s" }}
                        />
                        <Play className="text-primary absolute left-1/2 top-1/2 size-2 -translate-x-1/2 -translate-y-1/2 fill-current" />
                      </div>
                      <div className="flex-1">
                        <div className="text-primary text-xs font-semibold">
                          2. Creative iteration
                        </div>
                        <div className="text-primary/70 text-[10px]">
                          In progress... 12s
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-2 opacity-40">
                      <CircleDashed className="text-muted-foreground mt-0.5 size-4 shrink-0" />
                      <div className="flex-1">
                        <div className="text-xs font-medium">
                          3. Scale top performers
                        </div>
                        <div className="text-muted-foreground text-[10px]">
                          Pending
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right spacer */}
          <div className="@max-2xl:hidden @5xl:hidden">
            <div data-grid-content="true" />
          </div>
        </div>
      </div>
    </div>
  );
}
