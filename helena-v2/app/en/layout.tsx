import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { PortugueseTilesBackground } from "@/components/PortugueseTiles";

export default function EnLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <PortugueseTilesBackground />
      <Navbar locale="en" />
      {children}
      <Footer locale="en" />
    </>
  );
}
