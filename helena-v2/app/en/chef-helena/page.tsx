import type { Metadata } from "next";

import Image from "next/image";

export const metadata: Metadata = {
  title: "Chef Helena",
};

export default function ChefHelenaPage() {
  return (
    <main className="bg-[var(--helena-cream)]">
      <section className="mx-auto max-w-6xl px-6 pb-10 pt-28">
        <div className="grid items-center gap-8 md:grid-cols-[1fr_1.5fr]">
          <div
            className="relative flex items-center justify-center py-24"
            style={{
              backgroundImage:
                "url(/legacy/cdn.prod.website-files.com/65552a03c86f786944622faf/655620d90e59cb674f82a955_Portugal-Outline.webp)",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
            }}
          >
            <div className="relative z-10 text-center">
              <h1 className="font-serif text-5xl leading-none tracking-tight text-orange-600 md:text-6xl">
                <span className="bg-[var(--helena-cream)] px-1">Helena</span>
                <br />
                <span className="bg-[var(--helena-cream)] px-1">Loureiro</span>
              </h1>
            </div>

            <Image
              src="/legacy/cdn.prod.website-files.com/65552a03c86f786944622faf/655623574fe9327ce9b669f9_line1.webp"
              alt=""
              width={959}
              height={400}
              className="pointer-events-none absolute right-[-12rem] z-0 hidden w-full max-w-none md:block"
            />

            <Image
              src="/legacy/cdn.prod.website-files.com/65552a03c86f786944622faf/655623e4972f146948f308cf_line2.webp"
              alt=""
              width={1307}
              height={500}
              className="pointer-events-none absolute top-[-10rem] z-0 block w-full max-w-none md:hidden"
            />
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-black/10 bg-stone-100 shadow-sm">
            <Image
              src="/legacy/cdn.prod.website-files.com/65552a03c86f786944622faf/65561fe63f91ef46aad266f6_Helena.webp"
              alt="Chef Helena"
              width={1280}
              height={900}
              className="h-full w-full object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16 pt-10">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div className="text-[15px] leading-relaxed text-sky-700">
            <p>
              Helena Loureiro was born on December 9, 1966 in Serra de Santo Antonio, a
              small village near Fatima in central Portugal. Her passion for the
              culinary arts was confirmed early on: from 1983 to 1986, she studied at
              the Lisbon Hotel Institute, before working in various Portuguese
              restaurants.
            </p>
            <p className="mt-6">
              Her wanderlust took her as far as Montreal. On her arrival in 1988, Helena
              completed her training at the Institut de tourisme et d'hôtellerie du
              Québec, graduating in 1990. She went on to work as executive chef at Le
              Vintage restaurant, then again as chef at Alexis le Trotteur, where she
              worked for twelve years.
            </p>
            <p className="mt-6">
              Helena became chef-owner of Portus Calle, an upscale Portuguese cuisine
              restaurant she opened on March 7, 2003. Since then, Helena has been
              delighting her guests with exquisite dishes matched only by her warm
              presence and passion for her craft.
            </p>
            <p className="mt-6">
              Involved in various causes close to her heart, Helena actively contributes
              to the next generation of restaurateurs as a member of the board of
              directors of the ITHQ. She chairs the Canadian section of the Disciples
              d'Escoffiers, an organization dedicated to continuing the gastronomic work
              of Auguste Escoffier. She is also a member of the Académie culinaire de
              France.
            </p>
            <p className="mt-6">
              She is now one of Portugal's greatest ambassadors on the international
              gastronomic scene.
            </p>
          </div>

          <div
            className="relative flex items-center justify-center py-24"
            style={{
              backgroundImage:
                "url(/legacy/cdn.prod.website-files.com/65552a03c86f786944622faf/655620d97504a1a52b2a6d66_Que%CC%81bec%20map.png)",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
            }}
          >
            <h2 className="text-center font-serif text-5xl leading-none tracking-tight text-orange-600 md:text-6xl">
              <span className="bg-[var(--helena-cream)] px-1">Guided by</span>
              <br />
              <span className="bg-[var(--helena-cream)] px-1">HER PASSION</span>
            </h2>

            <Image
              src="/legacy/cdn.prod.website-files.com/65552a03c86f786944622faf/655623e4972f146948f308cf_line2.webp"
              alt=""
              width={1307}
              height={500}
              className="pointer-events-none absolute top-[-18rem] w-full max-w-none"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
