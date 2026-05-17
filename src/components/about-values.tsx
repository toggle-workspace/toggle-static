import { Lightbulb, Heart, Users, Shield } from "lucide-react";
import { SectionItemsGrid } from "@/components/ui/section-items-grid";

const coreValues = [
  {
    icon: Lightbulb,
    title: "Data-Driven Decisions",
    description:
      "We challenge assumptions with evidence. Every campaign decision starts with a question: what does the data say?",
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
      "We embed ourselves in your goals. Your wins are our wins.",
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
    <SectionItemsGrid
      heading="Core Values"
      subheading="The principles that guide every decision we make."
      items={coreValues}
    />
  );
}
