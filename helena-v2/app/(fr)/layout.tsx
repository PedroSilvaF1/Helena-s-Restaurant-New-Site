import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { PortugueseTilesBackground } from "@/components/PortugueseTiles";

export default function FrLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <PortugueseTilesBackground />
      <Navbar locale="fr" />
      {children}
      <Footer locale="fr" />
    </>
  );
}
