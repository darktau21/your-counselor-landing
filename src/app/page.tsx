import { CreatedForSection } from "@/components/CreatedForSeciton";
import { FeaturesSection } from "@/components/FeaturesSection";
import { Header } from "@/components/Header";
import { PromoSection } from "@/components/PromoSection";
import { RoadmapSection } from "@/components/RoadmapSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <PromoSection />
        <CreatedForSection />
        <FeaturesSection />
        <RoadmapSection />
        {/* <TeamSection /> */}
      </main>
    </>
  );
}
