import fs from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const outDir = path.join(root, "content");

const START = '<div class="text-rich-text w-richtext">';
const END = '</div></div></div></div></section><section class="section-subfooter">';

async function extract({ inPath, outPath }) {
  const src = await fs.readFile(inPath, "utf8");
  const startIndex = src.indexOf(START);
  if (startIndex < 0) throw new Error(`Start marker not found in ${inPath}`);
  const endIndex = src.indexOf(END, startIndex);
  if (endIndex < 0) throw new Error(`End marker not found in ${inPath}`);

  const inner = src.slice(startIndex + START.length, endIndex);
  await fs.mkdir(path.dirname(outPath), { recursive: true });
  await fs.writeFile(outPath, inner, "utf8");

  // eslint-disable-next-line no-console
  console.log(`Extracted -> ${path.relative(root, outPath)} (${inner.length} chars)`);
}

await extract({
  inPath: path.join(root, "..", "www.restauranthelena.com", "politique-de-confidentialite.html"),
  outPath: path.join(outDir, "privacy-policy.fr.html"),
});

await extract({
  inPath: path.join(root, "..", "www.restauranthelena.com", "en", "privacy-policy.html"),
  outPath: path.join(outDir, "privacy-policy.en.html"),
});
