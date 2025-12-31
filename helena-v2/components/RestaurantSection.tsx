"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FloatingOctopus, FloatingSardine, FloatingShell } from "./DecorativeElements";

type Locale = "fr" | "en";

const sliderImages = [
  {
    src: "/legacy/cdn.prod.website-files.com/65552a03c86f786944622faf/65567413f2452d24502399df_plt1.1.webp",
    alt: "Plat portugais",
  },
  {
    src: "/legacy/cdn.prod.website-files.com/65552a03c86f786944622faf/655674137157c5d88c3c7c93_plt2.1.webp",
    alt: "Plat portugais",
  },
  {
    src: "/legacy/cdn.prod.website-files.com/65552a03c86f786944622faf/655674131c9ce0c6fa3af0a9_plt3.1.webp",
    alt: "Plat portugais",
  },
];

export default function RestaurantSection({ locale }: { locale: Locale }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const t =
    locale === "fr"
      ? {
          title1: "Une institution à Montréal depuis plus de 10 ans",
          cta1: "Réserver en ligne",
          href1: "https://www.opentable.ca/helena?lang=fr",
          title2: "Un emplacement aménagé pour vos rassemblements",
          cta2: "Groupes et événements",
          href2: "/groupes-et-evenements",
        }
      : {
          title1: "A Montreal gastronomic institution for over 10 years.",
          cta1: "Book a table",
          href1: "https://www.opentable.ca/helena?lang=en-ca",
          title2: "The perfect space for your gatherings",
          cta2: "Groups and events",
          href2: "/en/groups-and-events",
        };

  return (
    <section className="relative mx-auto max-w-6xl px-6 py-16">
      {/* Elementos decorativos */}
      <FloatingOctopus className="pointer-events-none absolute bottom-0 right-0 z-0 hidden w-48 opacity-10 md:block" />
      <FloatingSardine className="pointer-events-none absolute left-[-3rem] top-10 z-0 hidden w-24 opacity-15 md:block" />
      <FloatingShell className="pointer-events-none absolute right-[-1rem] top-0 z-0 hidden w-20 opacity-12 md:block" />
      
      <div className="relative z-10 grid gap-6 md:grid-cols-2">
        {/* Primeira imagem e texto */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm"
        >
          <Image
            src="/legacy/cdn.prod.website-files.com/65552a03c86f786944622faf/65554646c6a3b77b49e71ccb_Restaurant1.webp"
            alt="Salle à dinner"
            width={854}
            height={900}
            className="h-96 w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/0" />
          <div className="absolute inset-0 flex flex-col items-center justify-end p-8 text-center">
            <h2 className="font-serif text-2xl font-bold leading-tight tracking-tight text-white md:text-3xl lg:text-4xl">
              {t.title1}
            </h2>
            <a
              href={t.href1}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex h-10 items-center justify-center rounded-full border-2 border-white/30 bg-white/10 px-7 text-sm font-bold tracking-wide text-white shadow-lg backdrop-blur-sm transition hover:scale-105 hover:border-white/50 hover:bg-white/20 hover:shadow-xl"
            >
              {t.cta1}
            </a>
          </div>
        </motion.div>

        {/* Segunda imagem e texto */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm"
        >
          <Image
            src="/legacy/cdn.prod.website-files.com/65552a03c86f786944622faf/65554646a8c616b18fd47ae9_Restaurant2.webp"
            alt="Salle à dinner"
            width={936}
            height={900}
            className="h-96 w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/0" />
          <div className="absolute inset-0 flex flex-col items-center justify-end p-8 text-center">
            <h2 className="font-serif text-2xl font-bold leading-tight tracking-tight text-white md:text-3xl lg:text-4xl">
              {t.title2}
            </h2>
            <Link
              href={t.href2}
              className="mt-6 inline-flex h-10 items-center justify-center rounded-full border-2 border-white/30 bg-white/10 px-7 text-sm font-bold tracking-wide text-white shadow-lg backdrop-blur-sm transition hover:scale-105 hover:border-white/50 hover:bg-white/20 hover:shadow-xl"
            >
              {t.cta2}
            </Link>
          </div>
        </motion.div>

        {/* Slider de pratos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-md md:col-span-2 md:max-w-md md:mx-auto"
        >
          <div className="relative h-72 w-full">
            {sliderImages.map((image, index) => (
              <motion.div
                key={image.src}
                initial={false}
                animate={{
                  opacity: index === currentSlide ? 1 : 0,
                  scale: index === currentSlide ? 1 : 1.1,
                }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={991}
                  height={900}
                  className="h-full w-full object-cover"
                />
              </motion.div>
            ))}
          </div>
          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
            {sliderImages.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentSlide(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className={`h-2 rounded-full transition-all ${
                  index === currentSlide
                    ? "w-8 bg-yellow-500 shadow-lg"
                    : "w-2 bg-white/70 hover:bg-white"
                }`}
                aria-label={`Slide ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
