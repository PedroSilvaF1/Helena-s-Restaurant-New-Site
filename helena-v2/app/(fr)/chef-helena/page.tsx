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
              Helena Loureiro est née le 9 Décembre 1966 à Serra de Santo Antonio, un
              petit village situé près de Fatima, dans la zone centrale du Portugal. Sa
              passion pour les arts culinaires se confirme tôt: de 1983 à 1986, elle
              étudie donc à l'Institut d'hôtellerie de Lisbonne pour ensuite travailler
              dans divers restaurants portugais.
            </p>
            <p className="mt-6">
              Le goût du voyage l'entraîne jusqu'à Montréal. A son arrivée en 1988,
              Helena parfait sa formation à l'Institut de tourisme et d'hôtellerie du
              Québec, obtenant son diplôme en 1990. Elle oeuvre ensuite comme chef
              éxécutif au restaurant Le Vintage, puis toujours comme chef à la garderie
              Alexis le Trotteur où elle travaille pendant douze ans.
            </p>
            <p className="mt-6">
              Helena est devenu chef propriétaire du restaurant Portus Calle, un
              restaurant de cuisine portugaise haut de gamme qu'elle a ouvert le 7 mars
              2003. Helena régale depuis ses convives de ses plats exquis qui n'ont
              d'égal que sa présence chaleureuse et sa passion pour son métier.
            </p>
            <p className="mt-6">
              Engagée dans diverses causes qui lui tiennent à cœur, Helena contribue
              activement à la relève en restauration en tant que membre du conseil
              d’administration de l’ITHQ. Elle préside la section Canada des Disciples
              d’Escoffiers, organisation dédiée à poursuivre l’œuvre gastronomique
              d’Auguste Escoffier. Elle est également membre de l’Académie culinaire de
              France.
            </p>
            <p className="mt-6">
              Elle est aujourd’hui l’une des plus grandes ambassadrices du Portugal sur
              la scène gastronomique internationale.
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
              <span className="bg-[var(--helena-cream)] px-1">Guidée par</span>
              <br />
              <span className="bg-[var(--helena-cream)] px-1">sa passion</span>
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
