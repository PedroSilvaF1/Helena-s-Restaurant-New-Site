import Link from "next/link";

type Locale = "fr" | "en";

export default function Footer({ locale }: { locale: Locale }) {
  const t =
    locale === "fr"
      ? {
          hours: "Lun-Ven : 11h30-14h30, 17h30-22h30\nSam: 17h30-22h30\nDim: Fermé",
          contactLabel: "Contact",
          addressLabel: "ADRESSE",
          privacyLabel: "Politique de confidentialité",
          privacyHref: "/politique-de-confidentialite",
          rights: "© 2023 Helena - Tous droits réservés",
        }
      : {
          hours: "Mon-Fri: 11:30 AM - 2:30 PM, 5:30 PM - 10:30 PM\nSat: 5:30 PM - 10:30 PM\nSun: Closed",
          contactLabel: "Contact",
          addressLabel: "ADDRESS",
          privacyLabel: "Privacy Policy",
          privacyHref: "/en/privacy-policy",
          rights: "© 2023 Helena - All rights reserved",
        };

  const mapHref =
    "https://www.google.com/maps/place/Restaurant+Helena/@45.5003785,-73.5582784,15z/data=!4m2!3m1!1s0x0:0x2b6ebccd0f401a60?sa=X&ved=2ahUKEwil9b7kpMeCAxXZpJUCHUBGDDgQ_BJ6BAhLEAA";

  return (
    <footer id="contact" className="border-t border-stone-200 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <p className="text-sm font-bold text-stone-900">Restaurant Helena</p>
            <p className="mt-4 whitespace-pre-line text-sm leading-relaxed text-stone-600">
              {t.hours}
            </p>
          </div>

          <div className="rounded-2xl border border-stone-200 bg-stone-50/50 p-6 shadow-md">
            <p className="text-xs font-bold tracking-[0.3em] text-[var(--helena-dark-blue)] uppercase">
              {t.contactLabel}
            </p>
            <div className="mt-4 space-y-2 text-sm">
              <a
                href="mailto:info@restauranthelena.com"
                className="block font-medium text-stone-900 transition hover:text-[var(--helena-dark-blue)] hover:underline"
              >
                info@restauranthelena.com
              </a>
              <a href="tel:514-878-1555" className="block font-medium text-stone-900 transition hover:text-[var(--helena-dark-blue)] hover:underline">
                514-878-1555
              </a>
            </div>

            <p className="mt-6 text-xs font-bold tracking-[0.3em] text-[var(--helena-dark-blue)] uppercase">
              {t.addressLabel}
            </p>
            <a
              href={mapHref}
              target="_blank"
              rel="noreferrer"
              className="mt-3 block text-sm font-medium text-stone-900 transition hover:text-[var(--helena-dark-blue)] hover:underline"
            >
              438 rue McGill
              <br />
              Montréal, QC
            </a>

            <div className="mt-6 flex flex-wrap gap-4 text-sm">
              <a
                href="https://www.facebook.com/RestaurantHelenaMtl/"
                target="_blank"
                rel="noreferrer"
                className="font-medium text-stone-700 transition hover:text-stone-950"
              >
                Facebook
              </a>
              <a
                href="https://www.instagram.com/restauranthelena/"
                target="_blank"
                rel="noreferrer"
                className="font-medium text-stone-700 transition hover:text-stone-950"
              >
                Instagram
              </a>
              <a
                href="https://twitter.com/helenamtl"
                target="_blank"
                rel="noreferrer"
                className="font-medium text-stone-700 transition hover:text-stone-950"
              >
                X
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-stone-200 pt-6 text-sm text-stone-600 md:flex md:items-center md:justify-between">
          <p className="font-medium">{t.rights}</p>
          <Link href={t.privacyHref} className="mt-2 inline-block font-medium transition hover:text-stone-900 hover:underline md:mt-0">
            {t.privacyLabel}
          </Link>
        </div>
      </div>
    </footer>
  );
}
