import type { Metadata } from "next";

import ChefTeaser from "@/components/ChefTeaser";
import Hero from "@/components/Hero";
import MenuPreview from "@/components/MenuPreview";
import RestaurantSection from "@/components/RestaurantSection";
import WineSection from "@/components/WineSection";
import ShareSection from "@/components/ShareSection";

export const metadata: Metadata = {
  title: "Home",
};

export default function HomeEn() {
  return (
    <main>
      <Hero locale="en" />
      <ChefTeaser locale="en" />
      <RestaurantSection locale="en" />
      <ShareSection locale="en" />
      <MenuPreview locale="en" />
      <WineSection locale="en" />
    </main>
  );
}
