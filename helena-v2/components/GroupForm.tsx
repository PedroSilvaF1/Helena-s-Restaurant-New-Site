"use client";

import { useState } from "react";
import Image from "next/image";

type Locale = "fr" | "en";

const GROUP_FORM_HEADER_IMAGE_SRC =
  "/legacy/cdn.prod.website-files.com/65552a03c86f786944622faf/65565a0ce097e4191b03de05_Dessert-Groupe.webp";

export default function GroupForm({ locale }: { locale: Locale }) {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const t =
    locale === "fr"
      ? {
          title: "Groupes et événements",
          introHtml:
            "Célébrez vos moments spéciaux chez nous! Notre restaurant accueille les groupes de 8 personnes et plus, offrant des expériences culinaires sur mesure pour mariages, fêtes de bureau, et plus encore. Remplissez notre formulaire pour une planification sans stress. Un maître d'hôtel dédié vous contactera rapidement.<br/><br/>Vous pouvez aussi nous appeler au 514-878-1555 pour entamer la discussion personnalisée dès maintenant.",
          fullName: "Nom complet",
          phone: "Téléphone",
          email: "Courriel",
          message: "Message",
          submit: "Envoyer",
          success:
            "Merci ! Votre soumission a été reçue. Un membre de notre équipe vous contactera dans les meilleurs délais.",
          error: "Oups ! Un problème est survenu lors de l'envoi du formulaire.",
        }
      : {
          title: "GROUPS AND EVENTS",
          introHtml:
            "Celebrate your special moments with us! Our restaurant welcomes groups from 8 to 100, offering customized culinary experiences for weddings, office parties, and more. Fill out our form for stress-free planning. A dedicated maître d' will contact you promptly. <br/><br/>You can also call us at 514-878-1555 to start a personalized discussion right away.",
          fullName: "Full name",
          phone: "Phone number",
          email: "Email",
          message: "Message",
          submit: "Submit",
          success:
            "Thank you! Your submission has been received. A member of our team will contact you as soon as possible.",
          error: "Oops! An issue occurred while submitting the form.",
        };

  return (
    <section className="mx-auto max-w-6xl px-6 pb-16 pt-28">
      <header className="border-b border-black/10 pb-10">
        <h1 className="font-serif text-4xl tracking-tight md:text-5xl">
          {t.title}
        </h1>
        <p
          className="mt-4 max-w-3xl text-sm leading-relaxed text-stone-700"
          dangerouslySetInnerHTML={{ __html: t.introHtml }}
        />
      </header>

      <div className="mt-10">
        <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
          <div className="overflow-hidden rounded-2xl border border-black/10">
            <Image
              src={GROUP_FORM_HEADER_IMAGE_SRC}
              alt=""
              width={1200}
              height={800}
              className="h-48 w-full object-cover"
            />
          </div>

          {status === "success" ? (
            <div className="rounded-2xl border border-green-200 bg-green-50 p-4 text-sm text-stone-800">
              {t.success}
            </div>
          ) : status === "error" ? (
            <div className="rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-stone-800">
              {t.error}
            </div>
          ) : null}

          <form
            className="mt-4 space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              try {
                setStatus("success");
              } catch {
                setStatus("error");
              }
            }}
          >
            <div>
              <label className="text-sm font-medium text-stone-900" htmlFor="fullName">
                {t.fullName}
              </label>
              <input
                id="fullName"
                required
                className="mt-2 h-11 w-full rounded-xl border border-black/10 bg-white px-3 text-sm text-stone-900 outline-none ring-yellow-500/30 focus:ring-4"
                type="text"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-stone-900" htmlFor="phone">
                {t.phone}
              </label>
              <input
                id="phone"
                required
                className="mt-2 h-11 w-full rounded-xl border border-black/10 bg-white px-3 text-sm text-stone-900 outline-none ring-yellow-500/30 focus:ring-4"
                type="tel"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-stone-900" htmlFor="email">
                {t.email}
              </label>
              <input
                id="email"
                className="mt-2 h-11 w-full rounded-xl border border-black/10 bg-white px-3 text-sm text-stone-900 outline-none ring-yellow-500/30 focus:ring-4"
                type="email"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-stone-900" htmlFor="message">
                {t.message}
              </label>
              <textarea
                id="message"
                required
                maxLength={5000}
                className="mt-2 min-h-[140px] w-full resize-none rounded-xl border border-black/10 bg-white px-3 py-3 text-sm text-stone-900 outline-none ring-yellow-500/30 focus:ring-4"
              />
            </div>

            <button
              type="submit"
              className="inline-flex h-11 w-full items-center justify-center rounded-full bg-yellow-500 px-6 text-xs font-semibold tracking-wide text-black hover:bg-yellow-400"
            >
              {t.submit}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
