import type { Metadata } from "next";

import ChefTeaser from "@/components/ChefTeaser";
import Hero from "@/components/Hero";
import MenuPreview from "@/components/MenuPreview";
import RestaurantSection from "@/components/RestaurantSection";
import WineSection from "@/components/WineSection";
import ShareSection from "@/components/ShareSection";

export const metadata: Metadata = {
  title: "Accueil",
};

export default function Home() {
  return (
    <main>
      <Hero locale="fr" />
      <ChefTeaser locale="fr" />
      <RestaurantSection locale="fr" />
      <ShareSection locale="fr" />
      <MenuPreview locale="fr" />
      <WineSection locale="fr" />
    </main>
  );
}
