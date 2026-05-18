import { SectionOverview } from "@/components/ui/section-overview";

export default function AboutMission() {
  return (
    <SectionOverview label="Our Mission">
      <div className="text-muted-foreground mt-6 space-y-4 text-xl font-medium *:text-balance *:leading-relaxed">
        <p>
          <span className="text-foreground">
            Great marketing happens when brands can focus on their customers.
          </span>{" "}
          Fragmented tools and inconsistent results get in the way of that.
        </p>
        <p>
          <span className="text-foreground">
            Our job is to make growth predictable.
          </span>{" "}
          We build the systems and run the campaigns so brands can scale
          without the guesswork.
        </p>
      </div>
    </SectionOverview>
  );
}
