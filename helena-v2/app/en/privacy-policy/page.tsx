import type { Metadata } from "next";
import { readFile } from "node:fs/promises";
import path from "node:path";

export const metadata: Metadata = {
  title: "Privacy policy",
};

export default async function PrivacyPolicyPage() {
  const html = await readFile(
    path.join(process.cwd(), "content", "privacy-policy.en.html"),
    "utf8",
  );

  return (
    <main className="bg-stone-50">
      <section className="mx-auto max-w-4xl px-6 pb-16 pt-28">
        <article className="prose prose-stone max-w-none">
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </article>
      </section>
    </main>
  );
}
