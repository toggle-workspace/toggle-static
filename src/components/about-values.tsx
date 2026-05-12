import { Lightbulb, Heart, Users, Shield } from "lucide-react";
import { GridRow } from "@/components/ui/grid";

const coreValues = [
  {
    icon: Lightbulb,
    title: "Data-Driven Decisions",
    description:
      "We challenge assumptions with evidence. Every campaign decision starts with a question: what does the data actually tell us?",
  },
  {
    icon: Heart,
    title: "Craft & Care",
    description:
      "Details matter. From ad copy to landing pages, we treat every touchpoint as an opportunity to convert and delight.",
  },
  {
    icon: Users,
    title: "True Partnership",
    description:
      "We embed ourselves in your goals. Your wins are our wins — we build long-term relationships, not transactional engagements.",
  },
  {
    icon: Shield,
    title: "Radical Transparency",
    description:
      "No smoke and mirrors. We share real numbers, honest assessments, and clear reporting so you always know where you stand.",
  },
];

export default function AboutValues() {
  return (
    <section>
      <GridRow>
        <div className="grid grid-cols-10 gap-px">
          <div aria-hidden="true" className="max-sm:hidden">
            <div data-grid-content="true" />
          </div>
          <div className="@4xl:grid-cols-2 col-span-full grid gap-px sm:col-span-8">
            <div
              data-grid-content="true"
              className="@4xl:p-12 col-span-full p-6"
            >
              <h2 className="text-muted-foreground text-balance font-mono">
                Core Values
              </h2>
              <p className="text-foreground mt-6 max-w-2xl text-balance text-xl font-medium">
                The principles that guide every decision we make, from hiring to
                shipping.
              </p>
            </div>
            {coreValues.map((value) => (
              <div
                key={value.title}
                data-grid-content="true"
                className="@4xl:p-12 flex flex-col gap-3 p-6"
              >
                <value.icon className="text-muted-foreground size-5" />
                <h3 className="text-foreground font-medium">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
          <div aria-hidden="true" className="max-sm:hidden">
            <div data-grid-content="true" />
          </div>
        </div>
      </GridRow>
    </section>
  );
}
