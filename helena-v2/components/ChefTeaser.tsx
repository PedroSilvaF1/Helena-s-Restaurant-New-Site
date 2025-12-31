"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

type Locale = "fr" | "en";

export default function ChefTeaser({ locale }: { locale: Locale }) {
  const t =
    locale === "fr"
      ? {
          title: "Chaleureuse. Authentique. Généreuse.",
          description1: "La cuisine d'Helena est tout à son image.",
          description2:
            "S'asseoir à sa table, c'est découvrir des saveurs qui prennent racines dans son Portugal natal et qui poussent ici au Québec.",
          cta: "À propos",
          href: "/chef-helena",
        }
      : {
          title: "Warm. Authentic. Generous.",
          description1: "Helena's cuisine is just like her.",
          description2:
            "Sitting down at her table means discovering flavors rooted in her native Portugal, and grown here in Quebec.",
          cta: "About",
          href: "/en/chef-helena",
        };

  return (
    <section id="chef" className="mx-auto max-w-6xl px-6 py-16">
      <div className="grid gap-10 md:grid-cols-2 md:items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="mt-3 font-serif text-3xl font-bold leading-tight tracking-tight text-stone-950 md:text-4xl lg:text-5xl">
            {t.title}
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-stone-600 md:text-lg">
            <p>{t.description1}</p>
            <p>{t.description2}</p>
          </div>

          <div className="mt-8">
            <Link
              href={t.href}
              className="inline-flex h-11 items-center justify-center rounded-full border-2 border-stone-900 bg-stone-900 px-7 text-sm font-bold tracking-wide text-white shadow-lg transition hover:scale-105 hover:border-stone-800 hover:bg-stone-800 hover:shadow-xl"
            >
              {t.cta}
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative overflow-hidden rounded-2xl border border-black/10 bg-white"
        >
          <Image
            src="/legacy/cdn.prod.website-files.com/65552a03c86f786944622faf/65552ec268fb7fc22d511914_Chef-Helena.webp"
            alt="Chef Helena"
            width={1200}
            height={900}
            className="h-[360px] w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/0 to-black/0" />
        </motion.div>
      </div>
    </section>
  );
}
