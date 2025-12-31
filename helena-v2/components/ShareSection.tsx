"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type Locale = "fr" | "en";

export default function ShareSection({ locale }: { locale: Locale }) {
  const t =
    locale === "fr"
      ? {
          title: "L'art du partage",
          description:
            "Chaque plat est une invitation au voyage, à la découverte des saveurs authentiques du Portugal.",
        }
      : {
          title: "The art of sharing",
          description:
            "Each dish is an invitation to travel, to discover the authentic flavors of Portugal.",
        };

  const images = [
    {
      src: "/legacy/cdn.prod.website-files.com/65552a03c86f786944622faf/65552f6199e328e4c5523864_partager._MG_8475_1.webp",
      alt: "Partage 1",
    },
    {
      src: "/legacy/cdn.prod.website-files.com/65552a03c86f786944622faf/6556423f68981420f1de7807_plt1.webp",
      alt: "Plat 1",
    },
    {
      src: "/legacy/cdn.prod.website-files.com/65552a03c86f786944622faf/6556424094d819e5fe046e5c_plt2.webp",
      alt: "Plat 2",
    },
    {
      src: "/legacy/cdn.prod.website-files.com/65552a03c86f786944622faf/6556423f7755a50e246f9f78_plt3.webp",
      alt: "Plat 3",
    },
    {
      src: "/legacy/cdn.prod.website-files.com/65552a03c86f786944622faf/6556423fc54f742f385dbf60_plt4.webp",
      alt: "Plat 4",
    },
    {
      src: "/legacy/cdn.prod.website-files.com/65552a03c86f786944622faf/65565a0ce097e4191b03de05_Dessert-Groupe.webp",
      alt: "Dessert",
    },
  ];

  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12 text-center"
      >
        <h2 className="font-serif text-3xl font-bold leading-tight tracking-tight text-stone-950 md:text-4xl lg:text-5xl">
          {t.title}
        </h2>
        <p className="mt-6 text-base leading-relaxed text-stone-600 md:text-lg">{t.description}</p>
      </motion.div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
        {images.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            className="group relative aspect-square overflow-hidden rounded-lg bg-stone-100 shadow-md transition-shadow hover:shadow-xl"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
