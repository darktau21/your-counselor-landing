import Image from "next/image";
import styles from "./page.module.css";
import { Header } from "@/components/Header";
import { PromoSection } from "@/components/PromoSection";
import { CreatedForSection } from "@/components/CreatedForSeciton";
import { FeaturesSection } from "@/components/FeaturesSection";
import { RoadmapSection } from "@/components/RoadmapSection";
import { TeamSection } from "@/components/TeamSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <PromoSection />
        <CreatedForSection />
        <FeaturesSection />
        <RoadmapSection />
        <TeamSection />
      </main>
    </>
  );
}
