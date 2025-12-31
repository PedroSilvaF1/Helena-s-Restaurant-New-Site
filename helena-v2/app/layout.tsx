import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import PageTransition from "@/components/PageTransition";
import BodyBackground from "@/components/BodyBackground";

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-helena-sans",
  display: "swap",
});

const serif = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-helena-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Restaurant Helena | Montreal",
    template: "%s | Restaurant Helena",
  },
  description: "Restaurant Helena (Montreal)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${sans.variable} ${serif.variable}`}>
      <body className="bg-stone-50 text-stone-900 font-sans antialiased">
        <BodyBackground />
        <Script
          src="/legacy/vendor/dotlottie-player.mjs"
          type="module"
          strategy="afterInteractive"
        />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
