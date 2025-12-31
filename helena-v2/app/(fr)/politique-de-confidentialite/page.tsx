import type { Metadata } from "next";
import { readFile } from "node:fs/promises";
import path from "node:path";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
};

export default async function PolitiqueDeConfidentialitePage() {
  const html = await readFile(
    path.join(process.cwd(), "content", "privacy-policy.fr.html"),
    "utf8",
  );

  return (
    <main className="bg-stone-50">
      <section className="mx-auto max-w-4xl px-6 pb-16 pt-28">
        <article className="prose prose-stone max-w-none prose-headings:font-serif">
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </article>
      </section>
    </main>
  );
}
