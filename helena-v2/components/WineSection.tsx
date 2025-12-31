"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type Locale = "fr" | "en";

export default function WineSection({ locale }: { locale: Locale }) {
  const t =
    locale === "fr"
      ? {
          title: "Une cave exclusivement constituée de vins d'origines portugaises",
          description:
            "Notre cave à vin regorge de trésors portugais. Elle révèle des liens profonds qui unissent Helena et certains des plus célèbres producteurs vinicoles. Chaque bouteille raconte une histoire, une passion commune. Venez découvrir ces vins soigneusement sélectionnés, pour le plus grand plaisir de nos convives.",
        }
      : {
          title: "A cellar exclusively dedicated to Portuguese wines",
          description:
            "Our wine cellar is packed with Portuguese treasures. It unveils the deep bonds that unite Helena and some of the most prestigious wine producers. Each bottle tells a story, a shared passion for culinary discovery and adventure.",
        };

  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="grid gap-10 md:grid-cols-2 md:items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="order-2 md:order-1"
        >
          <h2 className="font-serif text-3xl font-bold leading-tight tracking-tight text-stone-950 md:text-4xl lg:text-5xl">
            {t.title}
          </h2>
          <p className="mt-6 text-base leading-relaxed text-stone-600 md:text-lg">{t.description}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="order-1 md:order-2"
        >
          <div className="relative mx-auto max-w-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Image
                src="/legacy/cdn.prod.website-files.com/65552a03c86f786944622faf/655552ba0759d0364dd47030_Vinho-Map.webp"
                alt="Carte du Portugal"
                width={891}
                height={1200}
                className="relative z-10 h-auto w-full"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.8, 
                delay: 0.6,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <Image
                src="/legacy/cdn.prod.website-files.com/65552a03c86f786944622faf/655553377aad5c921d6766f5_Quinta%20do%20portal.webp"
                alt="Bouteille de vin portugaise"
                width={300}
                height={800}
                className="h-auto w-32 drop-shadow-2xl md:w-40"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
