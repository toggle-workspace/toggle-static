import Link from "next/link";
import { ChevronRight, Quote, ExternalLink } from "lucide-react";

const TOC = [
  { id: "the-challenge", label: "The challenge" },
  { id: "a-new-approach", label: "A new approach" },
  { id: "systems-that-scale", label: "Systems that scale" },
  { id: "results", label: "Results" },
  { id: "what-it-feels-like", label: "What it feels like" },
];

export default function BlogDetailPage() {
  return (
    <main role="main" className="bg-zinc-950/10">
      <article>
        {/* Header row */}
        <div className="@container grid grid-cols-[auto_1fr_auto] lg:grid-cols-[1fr_auto_1fr] bg-border">
          <div className="max-w-276 lg:min-w-276 mx-auto w-full p-[0.5px]">
            <div
              data-slot="content"
              className="bg-card/90 h-full rounded p-6 lg:p-12"
            >
              <header className="max-w-2xl">
                {/* Breadcrumb */}
                <nav aria-label="breadcrumb">
                  <ol className="text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm sm:gap-2.5">
                    <li className="inline-flex items-center gap-1.5">
                      <Link
                        href="/blog"
                        className="hover:text-foreground transition-colors"
                      >
                        Blog
                      </Link>
                    </li>
                    <li role="presentation" aria-hidden="true">
                      <ChevronRight className="size-3.5" />
                    </li>
                    <li className="inline-flex items-center gap-1.5">
                      <span className="text-foreground">
                        How Shopee Scaled Creative Output 3× With Toggle
                      </span>
                    </li>
                  </ol>
                </nav>

                <h1 className="text-foreground mt-6 text-balance text-3xl font-bold md:text-4xl">
                  How Shopee Scaled Creative Output 3× With Toggle Solutions
                </h1>
              </header>
            </div>
          </div>
        </div>

        {/* Content + Sidebar row */}
        <div className="@container grid grid-cols-[auto_1fr_auto] lg:grid-cols-[1fr_auto_1fr] bg-border">
          <div className="max-w-276 lg:min-w-276 mx-auto w-full">
            <div className="**:data-grid-content:bg-card/90 **:data-grid-content:h-full **:data-grid-content:rounded grid *:p-[0.5px] lg:grid-cols-[auto_1fr]">
              {/* Main content */}
              <div>
                <div data-grid-content="true" className="max-w-3xl p-6 lg:p-12">
                  {/* Featured image */}
                  <div className="relative overflow-hidden rounded-xl border shadow shadow-black/5">
                    <div className="aspect-[21/9] w-full bg-muted" />
                  </div>

                  {/* Lead paragraph */}
                  <p className="text-foreground my-12 text-xl md:text-2xl">
                    Shopee is Southeast Asia's leading e-commerce platform,
                    running thousands of simultaneous campaigns across six
                    markets in multiple languages — every single day.
                  </p>

                  {/* Article body */}
                  <div className="prose prose-slate dark:prose-invert max-w-none">
                    <p className="text-muted-foreground mb-4 text-base leading-relaxed">
                      When Shopee was growing fast, creative friction was
                      manageable. A handful of designers could coordinate in a
                      single meeting, ship a new campaign in a day, and rework
                      entire creative suites over a weekend. Decisions were
                      quick, and the cost of inconsistency was low.
                    </p>
                    <p className="text-muted-foreground mb-4 text-base leading-relaxed">
                      But scale changes everything. What used to be a small
                      inconvenience becomes a recurring tax. A design mismatch
                      becomes a support burden. A slow production cycle becomes
                      dozens of delayed launches. As Shopee expanded — more
                      countries, more verticals, more SKUs — these friction
                      points multiplied.
                    </p>
                    <p className="text-muted-foreground mb-4 text-base leading-relaxed">
                      Shopee's marketing creative is one of its most critical
                      surfaces. It must drive conversions on mobile, communicate
                      flash deals in seconds, and adapt fluidly across
                      platforms. As the campaign volume expanded, the burden on
                      the team responsible for producing creative increased
                      proportionally. Coordination grew harder. Timelines
                      shortened. Quality fluctuated.
                    </p>
                    <p className="text-muted-foreground mb-4 text-base leading-relaxed">
                      The question wasn't whether Shopee could produce. It was
                      whether they could produce with the same quality while
                      keeping pace with the platform's speed.
                    </p>

                    <h2
                      id="the-challenge"
                      className="text-foreground mb-4 mt-16 scroll-mt-20 text-2xl font-semibold"
                    >
                      The challenge
                    </h2>
                    <p className="text-muted-foreground mb-4 text-base leading-relaxed">
                      Before Toggle Solutions, Shopee's creative output evolved
                      through many iterations. Teams built campaigns using
                      slightly different templates, custom patterns, and
                      individually maintained assets. Over time, the system
                      became a patchwork where no single team understood the
                      whole. It worked — until it didn't.
                    </p>
                    <p className="text-muted-foreground mb-4 text-base leading-relaxed">
                      One creative lead described it as "an invisible maze."
                      Projects lived across multiple drives, concepts existed
                      only in scattered Figma frames, and every new campaign
                      required navigating a landscape of one-off assets.
                    </p>
                    <p className="text-muted-foreground mb-4 text-base leading-relaxed">
                      A few recurring challenges emerged:
                    </p>
                    <ul className="text-muted-foreground mb-4 ml-6 list-disc space-y-2">
                      <li className="leading-relaxed">
                        Different market teams built campaigns using their own
                        micro-patterns, creating subtle brand inconsistencies.
                      </li>
                      <li className="leading-relaxed">
                        Designers spent significant time re-producing variations
                        of assets that already existed in another market.
                      </li>
                      <li className="leading-relaxed">
                        The velocity of new product launches outpaced the team's
                        ability to produce polished, high-converting creatives
                        efficiently.
                      </li>
                    </ul>
                    <p className="text-muted-foreground mb-4 text-base leading-relaxed">
                      Small delays compounded into slower cycles. A messy system
                      creates friction, and friction at scale becomes drag.
                    </p>

                    <h2
                      id="a-new-approach"
                      className="text-foreground mb-4 mt-16 scroll-mt-20 text-2xl font-semibold"
                    >
                      A new approach
                    </h2>
                    <p className="text-muted-foreground mb-4 text-base leading-relaxed">
                      The change didn't start with a mandate. It began with one
                      team experimenting with Toggle's production system,
                      looking for a faster way to launch a regional campaign
                      without reinventing layouts or re-producing assets from
                      scratch. The fit was immediate.
                    </p>
                    <p className="text-muted-foreground mb-4 text-base leading-relaxed">
                      What happened next wasn't a rollout — it was an adoption
                      curve.
                    </p>
                    <p className="text-muted-foreground mb-4 text-base leading-relaxed">
                      A few designers pulled in Toggle templates. Then another
                      market used it for a flash sale campaign. Soon, the brand
                      team adopted it for a refresh. Teams across regions began
                      experimenting. The momentum built naturally, driven not by
                      policy but by utility.
                    </p>

                    <h2
                      id="systems-that-scale"
                      className="text-foreground mb-4 mt-16 scroll-mt-20 text-2xl font-semibold"
                    >
                      Systems that scale
                    </h2>
                    <p className="text-muted-foreground mb-4 text-base leading-relaxed">
                      The impact wasn't only operational. It was cultural.
                    </p>
                    <p className="text-muted-foreground mb-4 text-base leading-relaxed">
                      Teams started building with a common creative language.
                      This meant fewer decisions to negotiate, fewer handoffs to
                      interpret, and fewer chances for inconsistencies to creep
                      in. Brand and performance spoke the same visual language,
                      and this alignment reduced friction in the small
                      day-to-day moments that shape workflow culture.
                    </p>
                    <p className="text-muted-foreground mb-4 text-base leading-relaxed">
                      The simplicity of the system encouraged better habits.
                      Campaigns were assembled faster. Reviews were cleaner.
                      Iteration cycles shortened. The quality bar went up — not
                      because anyone demanded it, but because the system made it
                      easier to do good work.
                    </p>

                    <h2
                      id="results"
                      className="text-foreground mb-4 mt-16 scroll-mt-20 text-2xl font-semibold"
                    >
                      Results
                    </h2>
                    <p className="text-muted-foreground mb-4 text-base leading-relaxed">
                      Shopee's marketing team began shipping creative at a pace
                      that matched the platform's ambitions. Campaign launches
                      that once required weeks could now be assembled in days.
                      Regional variants rolled out faster. Experiments happened
                      more often.
                    </p>
                    <p className="text-muted-foreground mb-4 text-base leading-relaxed">
                      The results internally were unmistakable:
                    </p>
                    <ul className="text-muted-foreground mb-4 ml-6 list-disc space-y-2">
                      <li className="leading-relaxed">
                        Cross-market dependencies became easier to navigate
                        because everyone worked within the same design grammar.
                      </li>
                      <li className="leading-relaxed">
                        Creative production accelerated — not by a small margin,
                        but by a meaningful factor.
                      </li>
                      <li className="leading-relaxed">
                        Quality increased because the system made the right
                        choices obvious.
                      </li>
                    </ul>

                    <h2
                      id="what-it-feels-like"
                      className="text-foreground mb-4 mt-16 scroll-mt-20 text-2xl font-semibold"
                    >
                      What it feels like
                    </h2>
                    <p className="text-muted-foreground mb-4 text-base leading-relaxed">
                      The best creative partners don't merely increase output —
                      they reduce cognitive weight. They create a sense of
                      clarity that is hard to articulate but easy to recognise.
                      They shift teams from "managing complexity" to "focusing
                      on craft."
                    </p>
                    <p className="text-muted-foreground mb-4 text-base leading-relaxed">
                      When asked what changed after working with Toggle
                      Solutions, one creative director said:
                      <br />
                      "It wasn't one big moment. It was all the small moments
                      that stopped slowing us down."
                    </p>
                  </div>

                  {/* Blockquote */}
                  <div className="mt-12 border-t pt-12">
                    <Quote className="fill-background stroke-background mb-6 size-6 drop-shadow-md" />
                    <blockquote className="mb-6">
                      <p className="text-foreground text-lg leading-relaxed">
                        "Toggle Solutions didn't just give us better creatives —
                        they gave us a system. The consistency across markets
                        and the speed at which we can iterate has been a genuine
                        competitive advantage."
                      </p>
                    </blockquote>
                    <div className="flex items-center gap-4">
                      <div className="bg-card aspect-square size-12 shrink-0 overflow-hidden rounded-full border border-transparent shadow-md shadow-black/15 ring-1 ring-border">
                        <div className="size-full bg-muted" />
                      </div>
                      <div>
                        <p className="text-foreground font-semibold">
                          Sarah Lim
                        </p>
                        <p className="text-muted-foreground text-sm">
                          Head of Marketing, Shopee MY
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div>
                <div data-grid-content="true">
                  <div className="h-fit p-6 lg:sticky lg:top-20 lg:p-12">
                    {/* Table of contents */}
                    <div className="max-lg:hidden">
                      <nav>
                        <h4 className="text-foreground mb-4 text-sm font-semibold">
                          On this page
                        </h4>
                        <ul className="space-y-3 text-sm">
                          {TOC.map(({ id, label }) => (
                            <li key={id}>
                              <a
                                href={`#${id}`}
                                className="text-muted-foreground hover:text-foreground block transition-colors"
                              >
                                {label}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </nav>
                    </div>

                    {/* Company card */}
                    <div className="mt-6">
                      <h4 className="text-foreground mb-4 text-sm font-semibold">
                        Company
                      </h4>
                      <div className="flex items-center gap-3">
                        <div className="bg-card flex size-12 shrink-0 items-center justify-center overflow-hidden rounded-md border border-transparent p-2 shadow-md shadow-black/15 ring-1 ring-border">
                          <div className="size-full rounded bg-muted" />
                        </div>
                        <span className="text-foreground line-clamp-1 text-sm font-semibold">
                          Shopee
                        </span>
                      </div>
                    </div>

                    {/* Metadata */}
                    <div className="mt-6 space-y-4">
                      <div>
                        <h4 className="text-foreground mb-2 text-sm font-semibold">
                          Industry
                        </h4>
                        <p className="text-muted-foreground text-sm">
                          E-commerce
                        </p>
                      </div>
                      <div>
                        <h4 className="text-foreground mb-2 text-sm font-semibold">
                          Partnership since
                        </h4>
                        <p className="text-muted-foreground text-sm">
                          January 2024
                        </p>
                      </div>
                      <div>
                        <h4 className="text-foreground mb-2 text-sm font-semibold">
                          Website
                        </h4>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:text-primary/80 flex items-center gap-1 text-sm transition-colors"
                          href="https://shopee.com.my"
                        >
                          Visit Site
                          <ExternalLink className="size-3.5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
