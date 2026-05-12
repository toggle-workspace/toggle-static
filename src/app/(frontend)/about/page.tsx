import { GridRow, Spacer } from "@/components/ui/grid";
import AboutHero from "@/components/about-hero";
import AboutMission from "@/components/about-mission";
import AboutValues from "@/components/about-values";
import AboutTeam from "@/components/about-team";
import AboutInvestors from "@/components/about-investors";
import AboutHiring from "@/components/about-hiring";

export default function AboutPage() {
  return (
    <main role="main" className="bg-zinc-950/10">
      <GridRow plain ariaHidden>
        <div className="h-6" />
      </GridRow>
      <AboutHero />
      <Spacer />
      <AboutMission />
      <Spacer />
      <AboutValues />
      <Spacer />
      <AboutTeam />
      <Spacer />
      <AboutInvestors />
      <Spacer />
      <AboutHiring />
    </main>
  );
}
