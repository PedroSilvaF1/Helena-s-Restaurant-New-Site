import Image from "next/image";
import Link from "next/link";

type Locale = "fr" | "en";

export default function Navbar({ locale }: { locale: Locale }) {
  const t =
    locale === "fr"
      ? {
          menus: "Menus",
          groups: "Groupes",
          chef: "Chef Helena",
          reserve: "Réserver",
          reserveHref: "https://www.opentable.ca/helena?lang=fr",
          links: {
            menus: "/menus",
            groups: "/groupes-et-evenements",
            chef: "/chef-helena",
          },
          langLabel: "EN",
          langHref: "/en",
        }
      : {
          menus: "Menus",
          groups: "Groups",
          chef: "Chef Helena",
          reserve: "Reservations",
          reserveHref: "https://www.opentable.ca/helena?lang=en-ca",
          links: {
            menus: "/en/our-menus",
            groups: "/en/groups-and-events",
            chef: "/en/chef-helena",
          },
          langLabel: "FR",
          langHref: "/",
        };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mt-4 flex h-14 items-center justify-between rounded-full border border-stone-200 bg-white/90 px-4 shadow-lg backdrop-blur-md">
          <Link href={locale === "fr" ? "/" : "/en"} className="flex items-center gap-3">
            <Image
              src="/images/logo.webp"
              alt="Restaurant Helena"
              width={110}
              height={26}
              priority
            />
          </Link>

          <nav className="hidden items-center gap-6 text-sm font-medium text-stone-800 md:flex">
            <Link className="relative transition hover:text-[var(--helena-dark-blue)] after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-[var(--helena-dark-blue)] after:transition-all hover:after:w-full" href={t.links.menus}>
              {t.menus}
            </Link>
            <Link className="relative transition hover:text-[var(--helena-dark-blue)] after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-[var(--helena-dark-blue)] after:transition-all hover:after:w-full" href={t.links.groups}>
              {t.groups}
            </Link>
            <Link className="relative transition hover:text-[var(--helena-dark-blue)] after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-[var(--helena-dark-blue)] after:transition-all hover:after:w-full" href={t.links.chef}>
              {t.chef}
            </Link>
            <span className="h-4 w-px bg-stone-300" />
            <Link className="text-stone-600 transition hover:text-stone-950" href={t.langHref}>
              {t.langLabel}
            </Link>
          </nav>

          <a
            className="inline-flex items-center justify-center rounded-full bg-yellow-500 px-5 py-2.5 text-xs font-bold tracking-wide text-stone-900 shadow-md transition-all hover:scale-105 hover:bg-yellow-400 hover:shadow-lg active:scale-95"
            href={t.reserveHref}
            target="_blank"
            rel="noreferrer"
          >
            {t.reserve}
          </a>
        </div>
      </div>
    </header>
  );
}
