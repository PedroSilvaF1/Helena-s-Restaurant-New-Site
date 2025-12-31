import fs from "node:fs/promises";
import path from "node:path";

const baseUrl = "https://cdn.jsdelivr.net/npm/@dotlottie/player-component@2.7.1/dist/";
const jsdelivrApiUrl =
  "https://data.jsdelivr.com/v1/package/npm/@dotlottie/player-component@2.7.1";
const outDir = path.join(process.cwd(), "public", "legacy", "vendor");

const entry = "dotlottie-player.mjs";

function findRelativeImports(sourceText) {
  const imports = [];
  const re = /import\s+(?:[^'\"]+\s+from\s+)?['\"](\.\/[^'\"]+)['\"]/g;
  let match;
  while ((match = re.exec(sourceText))) {
    const rel = match[1];
    if (rel.startsWith("./")) imports.push(rel.slice(2));
  }
  return imports;
}

async function fetchText(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to fetch ${url}: ${res.status} ${res.statusText}`);
  return await res.text();
}

async function fetchJson(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to fetch ${url}: ${res.status} ${res.statusText}`);
  return await res.json();
}

function flattenJsdelivrFiles(files, prefix = "") {
  /** @type {string[]} */
  const out = [];

  for (const node of files ?? []) {
    const name = `${prefix}${node.name}`;
    if (node.type === "file") {
      out.push(name);
      continue;
    }
    if (node.type === "directory") {
      out.push(...flattenJsdelivrFiles(node.files, `${name}/`));
    }
  }

  return out;
}

async function downloadFile(relativeFilePath) {
  const url = baseUrl + relativeFilePath;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to fetch ${url}: ${res.status} ${res.statusText}`);
  const buf = Buffer.from(await res.arrayBuffer());
  await fs.writeFile(path.join(outDir, relativeFilePath), buf);
}

async function main() {
  await fs.mkdir(outDir, { recursive: true });

  // 1) Download *all* dist/*.mjs and dist/*.wasm files to cover dynamic imports
  // (e.g. lottie_svg-*.mjs) that won't be discoverable via static import parsing.
  const pkg = await fetchJson(jsdelivrApiUrl);
  const allFiles = flattenJsdelivrFiles(pkg.files);
  const distFiles = allFiles
    .filter((f) => f.startsWith("dist/"))
    .map((f) => f.slice("dist/".length));
  const extraFiles = distFiles.filter((f) => f.endsWith(".mjs") || f.endsWith(".wasm"));

  for (const f of extraFiles) {
    // eslint-disable-next-line no-console
    console.log(`Downloading ${f}`);
    await downloadFile(f);
  }

  const queue = [entry];
  const seen = new Set();

  while (queue.length > 0) {
    const file = queue.shift();
    if (!file || seen.has(file)) continue;
    seen.add(file);

    const url = `${baseUrl}${file}`;
    const text = await fetchText(url);
    await fs.writeFile(path.join(outDir, file), text, "utf8");

    for (const dep of findRelativeImports(text)) {
      if (!seen.has(dep)) queue.push(dep);
    }

    // eslint-disable-next-line no-console
    console.log(`Fetched ${file} (pending: ${queue.length})`);
  }

  // eslint-disable-next-line no-console
  console.log(`Done. Total files: ${seen.size}`);
}

main().catch((err) => {
  // eslint-disable-next-line no-console
  console.error(err);
  process.exitCode = 1;
});
