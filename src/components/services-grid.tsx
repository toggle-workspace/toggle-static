import { SideCol } from "@/components/ui/grid";
import {
  TrendingUp,
  PieChart,
  MessageCircle,
  Target,
  BarChart3,
  Layers,
} from "lucide-react";

const SERVICES = [
  {
    Icon: TrendingUp,
    title: "Performance Marketing",
    description:
      "Drive measurable results across Meta, Google, and TikTok — managed from a single growth dashboard.",
  },
  {
    Icon: PieChart,
    title: "Creative Production",
    description:
      "High-fidelity ad creatives and brand assets produced at speed, built to convert across every format.",
  },
  {
    Icon: MessageCircle,
    title: "Content & Engagement",
    description:
      "Scroll-stopping social content and community management that builds loyalty and drives organic reach.",
  },
  {
    Icon: Target,
    title: "Audience Strategy",
    description:
      "Identify and reach your highest-value customers with precision using data-driven targeting strategies.",
  },
  {
    Icon: BarChart3,
    title: "Analytics & Reporting",
    description:
      "Live dashboards and weekly insights that go beyond vanity metrics — built to support better decisions.",
  },
  {
    Icon: Layers,
    title: "Multi-Channel Integration",
    description:
      "Coordinate every channel for unified reporting, consistent messaging, and compounding growth over time.",
  },
];

export default function ServicesGrid() {
  return (
    <div className="@container grid grid-cols-[auto_1fr_auto] lg:grid-cols-[1fr_auto_1fr] bg-border">
      <SideCol wide />
      <div className="max-w-276 lg:min-w-276 mx-auto w-full">
        <div className="@container **:data-grid-content:bg-card/90 **:data-grid-content:h-full **:data-grid-content:rounded @md:grid-cols-2 @2xl:grid-cols-3 grid *:p-[0.5px]">
          {SERVICES.map(({ Icon, title, description }) => (
            <div key={title}>
              <div data-grid-content="true" className="space-y-2 p-6 lg:p-12">
                <p className="text-foreground flex items-center gap-2 font-medium">
                  <Icon className="text-primary size-4 drop-shadow" />
                  {title}
                </p>
                <p className="text-muted-foreground">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <SideCol />
    </div>
  );
}
