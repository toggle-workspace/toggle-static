import { TrendingUp, Target, BarChart3 } from "lucide-react";

export default function Content() {
  return (
    <section id="about" className="bg-background @container py-24">
      <div className="mx-auto max-w-2xl px-6">
        <div className="space-y-4">
          <h2 className="text-balance font-serif text-4xl font-medium">
            Built to Grow the Whole Business
          </h2>
          <p className="text-muted-foreground">
            We build a full-funnel system across ads, creative, lifecycle, and
            reporting so every part of your marketing works toward the same
            goal: sustainable, measurable growth you can scale with confidence.
          </p>
        </div>
        <div className="@xl:grid-cols-3 mt-12 grid grid-cols-2 gap-6 text-sm">
          <div className="space-y-3 border-t pt-6">
            <TrendingUp className="text-muted-foreground size-4" />
            <p className="text-muted-foreground leading-5">
              <span className="text-foreground font-medium">
                Full-stack digital marketing
              </span>{" "}
              built for sustainable growth across every channel.
            </p>
          </div>

          <div className="space-y-3 border-t pt-6">
            <Target className="text-muted-foreground size-4" />
            <p className="text-muted-foreground leading-5">
              <span className="text-foreground font-medium">
                A structured approach
              </span>{" "}
              that reduces guesswork and gets more efficient over time.
            </p>
          </div>

          <div className="space-y-3 border-t pt-6">
            <BarChart3 className="text-muted-foreground size-4" />
            <p className="text-muted-foreground leading-5">
              <span className="text-foreground font-medium">
                Transparent reporting
              </span>{" "}
              that supports better decisions — not just documents what happened.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
