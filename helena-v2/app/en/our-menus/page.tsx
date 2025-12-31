import type { Metadata } from "next";

import MenuTabs from "@/components/MenuTabs";
import { menusContent } from "@/data/menus";

export const metadata: Metadata = {
  title: "Our menus",
};

function MenuTabPanel({
  blurb,
  note,
  sections,
}: {
  blurb: string;
  note?: string;
  sections?: { title: string; items: { name: string; description?: string; price: string }[] }[];
}) {
  const noteParts = note ? note.split("\n\n") : [];

  return (
    <div>
      <p className="whitespace-pre-line text-sm leading-relaxed text-stone-700">{blurb}</p>

      {note ? (
        <div className="mt-6 rounded-2xl border border-black/10 bg-white p-5 text-sm text-stone-900 shadow-sm">
          {noteParts[0] ? (
            <p className="font-semibold text-yellow-500">{noteParts[0]}</p>
          ) : null}
          {noteParts[1] ? (
            <p className="mt-3 italic text-yellow-500">{noteParts[1]}</p>
          ) : null}
        </div>
      ) : null}

      {sections?.length ? (
        <div className="mt-8 space-y-8">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-xs font-semibold tracking-[0.3em] text-yellow-500 uppercase">
                {section.title}
              </h2>
              <ul className="mt-4 space-y-4">
                {section.items.map((item) => (
                  <li key={item.name} className="flex gap-4">
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-semibold text-stone-900">{item.name}</p>
                      {item.description ? (
                        <p className="mt-1 text-sm text-stone-700">{item.description}</p>
                      ) : null}
                    </div>
                    <div className="shrink-0 text-sm font-semibold text-stone-900">
                      {item.price}
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default function OurMenusPage() {
  const content = menusContent.en;

  return (
    <main className="mx-auto max-w-6xl px-6 pb-16 pt-28">
      <header className="border-b border-black/10 pb-10">
        <p className="text-xs font-semibold tracking-[0.3em] text-yellow-500 uppercase">
          {content.eyebrow}
        </p>
        <h1 className="mt-3 font-serif text-4xl tracking-tight md:text-5xl">
          {content.title}
        </h1>
        <p className="mt-4 max-w-2xl whitespace-pre-line text-stone-700">{content.intro}</p>
      </header>

      <div className="relative mt-10 overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm">
        <div className="relative px-6 py-10">
          <MenuTabs
            initialTabId="a-la-carte"
            pageTitle="Our menus"
            tabs={content.tabs.map((tab) => ({
              id: tab.id,
              label: tab.label,
              content: (
                <MenuTabPanel blurb={tab.blurb} note={tab.note} sections={tab.sections} />
              ),
            }))}
          />
        </div>
      </div>
    </main>
  );
}
