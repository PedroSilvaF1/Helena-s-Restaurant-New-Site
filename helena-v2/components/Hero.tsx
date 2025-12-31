"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type Locale = "fr" | "en";

export default function Hero({ locale }: { locale: Locale }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const t =
    locale === "fr"
      ? {
          titleLine1: "Bem-Vindo",
          titleLine2: "À la maison",
          ctaPrimary: "Réservations",
          ctaPrimaryHref: "https://www.opentable.ca/helena?lang=fr",
          ctaSecondary: "Voir les menus",
        }
      : {
          titleLine1: "Bem-Vindo",
          titleLine2: "home",
          ctaPrimary: "Reservations",
          ctaPrimaryHref: "https://www.opentable.ca/helena?lang=en-ca",
          ctaSecondary: "See menus",
        };

  return (
    <section ref={ref} className="relative overflow-hidden">
      <motion.div
        style={{ y }}
        className="absolute inset-0 bg-cover bg-center"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <div
          className="h-full w-full bg-cover bg-center"
          style={{ backgroundImage: "url('/images/hero.webp')" }}
        />
        {/* Sombra decorativa */}
        <div
          className="absolute bottom-0 left-0 right-0 h-64 bg-cover bg-center opacity-30"
          style={{
            backgroundImage:
              "url('/legacy/cdn.prod.website-files.com/65552a03c86f786944622faf/655553b36c6ccbbd2b58123b_Shadow.webp')",
          }}
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/40 to-black/85" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.3)_100%)]" />

      <motion.div
        style={{ opacity }}
        className="relative mx-auto flex min-h-[92vh] max-w-6xl items-end px-6 pb-16 pt-28"
      >
        <div className="max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mt-4 font-serif text-5xl leading-[1.0] tracking-tight text-white md:text-7xl"
          >
            <span className="font-normal uppercase tracking-[0.08em] text-yellow-500">
              {t.titleLine1}
            </span>
            <br />
            <span className="uppercase tracking-[0.08em]">{t.titleLine2}</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="mt-10 flex flex-wrap gap-3"
          >
            <a
              className="inline-flex items-center justify-center rounded-full bg-yellow-500 px-7 py-3.5 text-sm font-bold tracking-wide text-stone-900 shadow-lg transition hover:scale-105 hover:bg-yellow-400 hover:shadow-xl"
              href={t.ctaPrimaryHref}
              target="_blank"
              rel="noreferrer"
            >
              {t.ctaPrimary}
            </a>
            <a
              className="inline-flex items-center justify-center rounded-full border-2 border-white/30 bg-white/10 px-7 py-3.5 text-sm font-bold tracking-wide text-white backdrop-blur-sm transition hover:scale-105 hover:border-white/50 hover:bg-white/20"
              href={locale === "fr" ? "/menus" : "/en/our-menus"}
            >
              {t.ctaSecondary}
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
