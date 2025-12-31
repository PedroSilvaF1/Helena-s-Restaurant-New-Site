"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const tiles = [
  {
    src: "/legacy/cdn.prod.website-files.com/65552a03c86f786944622faf/65567413f2452d24502399df_plt1.1.webp",
    alt: "Plat portugais",
  },
  {
    src: "/legacy/cdn.prod.website-files.com/65552a03c86f786944622faf/655674137157c5d88c3c7c93_plt2.1.webp",
    alt: "Plat portugais",
  },
  {
    src: "/legacy/cdn.prod.website-files.com/65552a03c86f786944622faf/65565a0ce097e4191b03de05_Dessert-Groupe.webp",
    alt: "Dessert",
  },
];

type Locale = "fr" | "en";

export default function MenuPreview({ locale }: { locale: Locale }) {
  const t =
    locale === "fr"
      ? {
          eyebrow: "",
          title: "L’art de partager",
          description:
            "Dans notre restaurant, le partage n'est pas simplement un geste, c'est notre essence. Chaque plat devient une invitation à la convivialité, chaque instant une occasion de créer des souvenirs communs. Venez non seulement pour déguster des saveurs exquises, mais aussi pour partager des émotions et découvrir un pays à travers sa cuisine",
          cta: "Voir les menus",
          href: "/menus",
        }
      : {
          eyebrow: "",
          title: "Sharing is caring",
          description:
            "In our restaurant, sharing is not just a gesture, it's our essence. Every dish becomes an opportunity for conviviality, every moment a chance to create shared memories. Experience exquisite flavors, while sharing emotions and discovering Portugal through its cuisine.",
          cta: "See menus",
          href: "/en/our-menus",
        };

  return (
    <section id="menus" className="mx-auto max-w-6xl px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between"
      >
        <div>
          {t.eyebrow ? (
            <p className="text-xs font-semibold tracking-[0.3em] text-yellow-500 uppercase">
              {t.eyebrow}
            </p>
          ) : null}
          <h2 className="mt-3 font-serif text-3xl tracking-tight md:text-4xl">
            {t.title}
          </h2>
          <p className="mt-4 max-w-2xl text-stone-700">
            {t.description}
          </p>
        </div>

        <Link
          href={t.href}
          className="inline-flex h-11 items-center justify-center rounded-full border border-black/10 bg-white px-6 text-xs font-semibold tracking-wide text-stone-900 shadow-sm hover:bg-stone-50"
        >
          {t.cta}
        </Link>
      </motion.div>

      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {tiles.map((tile, index) => (
          <motion.div
            key={tile.src}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className="group relative overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-md transition-shadow hover:shadow-2xl"
          >
            <Image
              src={tile.src}
              alt={tile.alt}
              width={900}
              height={700}
              className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
