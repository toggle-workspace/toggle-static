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
      "Details matter. Every ad, landing page, and email is a chance to earn the click and keep the customer.",
  },
  {
    icon: Users,
    title: "True Partnership",
    description:
      "We work inside your goals, not around them. If your numbers improve, ours do too.",
  },
  {
    icon: Shield,
    title: "Radical Transparency",
    description:
      "We share real numbers, honest assessments, and clear reporting. You always know where you stand.",
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
