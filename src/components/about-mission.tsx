import { SectionOverview } from "@/components/ui/section-overview";

export default function AboutMission() {
  return (
    <SectionOverview label="Our Mission">
      <div className="text-muted-foreground mt-6 space-y-4 text-xl font-medium *:text-balance *:leading-relaxed">
        <p>
          <span className="text-foreground">
            Great marketing happens when brands can focus on their customers
          </span>{" "}
          — not on wrestling with fragmented tools and inconsistent results.
        </p>
        <p>
          <span className="text-foreground">
            Our mission is to eliminate the friction between ambition
            and growth.
          </span>{" "}
          We build systems, strategies, and campaigns that let brands
          scale predictably.
        </p>
      </div>
    </SectionOverview>
  );
}
