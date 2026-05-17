import { SideCol } from "@/components/ui/grid";
import {
  Sparkles,
  Globe,
  ListChecks,
  CircleCheck,
  CircleDashed,
  Circle,
  CornerDownLeft,
  MapPin,
} from "lucide-react";

function AIWritingIllustration() {
  return (
    <div aria-hidden="true" className="w-full">
      <div className="ring-border-illustration relative rounded-lg p-3 ring-1">
        <div className="relative flex w-fit items-center gap-1">
          <div className="bg-linear-to-r absolute inset-0 h-5 via-violet-500/15 to-pink-500/15" />
          <span className="text-xs">Write a compelling headline for</span>
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
            <div className="flex-1 text-xs">
              &ldquo;3&times; Faster Growth, Backed by Data&rdquo;
            </div>
            <div className="bg-background ring-border-illustration text-muted-foreground flex items-center gap-1 rounded px-1.5 py-0.5 text-[10px] ring-1">
              <CornerDownLeft className="size-2.5" />
              Tab
            </div>
          </div>
          <div className="hover:bg-foreground/3 flex cursor-pointer items-center gap-2 px-3 py-2.5 transition-colors">
            <div className="text-muted-foreground flex-1 text-xs">
              &ldquo;The Creative Engine Behind Southeast Asia&rsquo;s Top Brands&rdquo;
            </div>
          </div>
          <div className="hover:bg-foreground/3 flex cursor-pointer items-center gap-2 px-3 py-2.5 transition-colors">
            <div className="text-muted-foreground flex-1 text-xs">
              &ldquo;Performance at Scale, Built to Last&rdquo;
            </div>
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
  );
}

const GLOBE_NODES = [
  { x: "18%", y: "28%", size: "size-6", initials: "MY" },
  { x: "72%", y: "18%", size: "size-5", initials: "US" },
  { x: "48%", y: "35%", size: "size-5", initials: "SG" },
  { x: "82%", y: "52%", size: "size-6", initials: "AU" },
  { x: "30%", y: "62%", size: "size-5", initials: "GB" },
  { x: "60%", y: "70%", size: "size-5", initials: "JP" },
];

function GlobalInfraIllustration() {
  return (
    <div aria-hidden="true" className="w-full">
      <div className="ring-border-illustration relative overflow-hidden rounded-xl py-8 ring-1">
        {/* Dot grid background */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle, currentColor 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />
        {/* Connection lines (SVG) */}
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <line x1="18" y1="28" x2="48" y2="35" stroke="currentColor" strokeOpacity="0.15" strokeWidth="0.5" strokeDasharray="2 2" />
          <line x1="48" y1="35" x2="72" y2="18" stroke="currentColor" strokeOpacity="0.15" strokeWidth="0.5" strokeDasharray="2 2" />
          <line x1="48" y1="35" x2="60" y2="70" stroke="currentColor" strokeOpacity="0.15" strokeWidth="0.5" strokeDasharray="2 2" />
          <line x1="18" y1="28" x2="30" y2="62" stroke="currentColor" strokeOpacity="0.1" strokeWidth="0.5" strokeDasharray="2 2" />
          <line x1="82" y1="52" x2="60" y2="70" stroke="currentColor" strokeOpacity="0.1" strokeWidth="0.5" strokeDasharray="2 2" />
        </svg>
        {/* Globe nodes */}
        {GLOBE_NODES.map(({ x, y, size, initials }) => (
          <div
            key={initials}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: x, top: y }}
          >
            <div className={`${size} bg-card ring-border-illustration text-muted-foreground flex items-center justify-center rounded-full font-mono text-[9px] font-semibold ring-1`}>
              {initials}
            </div>
          </div>
        ))}
        {/* Center label */}
        <div className="relative flex flex-col items-center justify-center gap-2 py-4">
          <Globe className="text-muted-foreground/40 size-8" />
          <p className="text-muted-foreground text-xs">
            <span className="text-foreground font-semibold">6 regions</span>{" "}
            · 99.9% uptime
          </p>
        </div>
      </div>
      <div className="mt-4 flex items-center gap-4 text-xs">
        <div className="text-muted-foreground flex items-center gap-1.5">
          <MapPin className="size-3" />
          Globally distributed
        </div>
        <div className="text-muted-foreground ml-auto flex items-center gap-1">
          <span className="bg-emerald-500 size-1.5 rounded-full" />
          All systems operational
        </div>
      </div>
    </div>
  );
}

const TASKS = [
  { state: "done", label: "Competitor analysis report", note: "Completed" },
  { state: "done", label: "Q3 creative brief approved", note: "Completed" },
  { state: "active", label: "Launch Meta ad campaign", note: "In progress" },
  { state: "pending", label: "Review performance dashboard", note: "Pending" },
  { state: "pending", label: "A/B test email subject lines", note: "Pending" },
];

function SmartPlanningIllustration() {
  return (
    <div aria-hidden="true" className="w-full">
      <div className="ring-border-illustration overflow-hidden rounded-xl ring-1">
        <div className="border-border border-b px-4 py-2.5">
          <p className="text-xs font-medium">Campaign Tracker</p>
        </div>
        <div className="divide-border divide-y">
          {TASKS.map(({ state, label, note }) => (
            <div key={label} className="flex items-center gap-3 px-4 py-2.5">
              {state === "done" && (
                <CircleCheck className="size-4 shrink-0 text-emerald-500" />
              )}
              {state === "active" && (
                <CircleDashed className="text-primary size-4 shrink-0 animate-spin [animation-duration:3s]" />
              )}
              {state === "pending" && (
                <Circle className="text-muted-foreground/40 size-4 shrink-0" />
              )}
              <span
                className={`flex-1 text-xs ${
                  state === "done"
                    ? "text-muted-foreground line-through"
                    : state === "active"
                      ? "text-foreground font-medium"
                      : "text-muted-foreground"
                }`}
              >
                {label}
              </span>
              <span
                className={`text-[10px] ${
                  state === "done"
                    ? "text-emerald-500"
                    : state === "active"
                      ? "text-primary"
                      : "text-muted-foreground/50"
                }`}
              >
                {note}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between text-xs">
        <div className="text-muted-foreground">2 of 5 complete</div>
        <div className="bg-border h-1.5 w-24 overflow-hidden rounded-full">
          <div className="bg-emerald-500 h-full w-2/5 rounded-full" />
        </div>
      </div>
    </div>
  );
}

const FEATURES = [
  {
    Icon: Sparkles,
    title: "AI Writing Assistant",
    description: (
      <>
        <span className="text-foreground">
          Generate high-converting ad copy in seconds.
        </span>{" "}
        Trained on top-performing campaigns across every industry.
      </>
    ),
    Illustration: AIWritingIllustration,
  },
  {
    Icon: Globe,
    title: "Global Infrastructure",
    description: (
      <>
        <span className="text-foreground">
          Deploy campaigns across 6 global regions instantly.
        </span>{" "}
        99.9% uptime SLA with automatic failover and redundancy.
      </>
    ),
    Illustration: GlobalInfraIllustration,
  },
  {
    Icon: ListChecks,
    title: "Smart Planning",
    description: (
      <>
        <span className="text-foreground">
          Plan, track, and ship campaigns without the chaos.
        </span>{" "}
        Integrated task management built for marketing teams.
      </>
    ),
    Illustration: SmartPlanningIllustration,
  },
];

export type ApproachCard = {
  title: string;
  highlightText: string;
  bodyText: string;
};

export type ServiceApproach = {
  label: string;
  heading: string;
  body: string;
  cards: [ApproachCard, ApproachCard, ApproachCard];
};

const ILLUSTRATIONS = [
  AIWritingIllustration,
  GlobalInfraIllustration,
  SmartPlanningIllustration,
] as const;

const ICONS = [Sparkles, Globe, ListChecks] as const;

export default function FeaturesThree({ approach }: { approach?: ServiceApproach }) {
  const panelLabel = approach?.label ?? "Platform";
  const panelHeading = approach?.heading ?? "Even More Built In";
  const panelBody =
    approach?.body ??
    "Everything you need to run high-performance campaigns, without the extra overhead or third-party tools.";

  const cards = approach
    ? approach.cards.map((card, i) => ({
        Icon: ICONS[i],
        title: card.title,
        description: (
          <>
            <span className="text-foreground">{card.highlightText}</span>{" "}
            {card.bodyText}
          </>
        ),
        Illustration: ILLUSTRATIONS[i],
      }))
    : FEATURES;

  return (
    <div className="@container grid grid-cols-[auto_1fr_auto] lg:grid-cols-[1fr_auto_1fr] bg-border">
      <SideCol wide />
      <div className="max-w-276 lg:min-w-276 mx-auto w-full">
        <div className="**:data-grid-content:bg-card/90 **:data-grid-content:h-full **:data-grid-content:rounded grid *:p-[0.5px] @2xl:grid-cols-5 @5xl:grid-cols-10">
          <div aria-hidden="true" className="@max-2xl:hidden @max-5xl:row-start-2">
            <div data-grid-content="true" />
          </div>

          <div className="@5xl:col-span-4 col-span-full">
            <div
              data-grid-content="true"
              className="@4xl:p-12 sticky top-0 flex flex-col justify-between p-6"
            >
              <div className="space-y-4">
                <p className="text-muted-foreground font-mono text-sm uppercase tracking-wide">
                  {panelLabel}
                </p>
                <h2 className="text-foreground text-3xl font-semibold">
                  {panelHeading}
                </h2>
                <p className="text-muted-foreground text-balance">
                  {panelBody}
                </p>
              </div>
            </div>
          </div>

          <div className="@2xl:col-span-3 @5xl:col-span-4 grid gap-px">
            {cards.map(({ Icon, title, description, Illustration }) => (
              <div
                key={title}
                data-slot="feature-card"
                className="grid h-full grid-rows-[auto_1fr] gap-px @max-5xl:h-auto"
              >
                <div
                  data-grid-content="true"
                  data-slot="feature-card-content"
                  className="@4xl:px-12 @4xl:pt-12 space-y-4 p-6"
                >
                  <h3 className="text-muted-foreground flex items-center gap-2 text-sm">
                    <Icon className="size-4" />
                    {title}
                  </h3>
                  <p className="text-muted-foreground text-xl font-medium">
                    {description}
                  </p>
                </div>
                <div
                  data-grid-content="true"
                  data-slot="feature-card-illustration"
                  className="@4xl:px-12 @4xl:pb-12 flex items-center justify-center p-6"
                >
                  <Illustration />
                </div>
              </div>
            ))}
          </div>

          <div aria-hidden="true" className="@max-2xl:hidden">
            <div data-grid-content="true" />
          </div>
        </div>
      </div>
      <SideCol />
    </div>
  );
}
