import fs from "node:fs";
import path from "node:path";

const projectRoot = process.cwd();
const workspaceRoot = path.resolve(projectRoot, "..");

const SOURCE_DIRS = [
  "cdn.prod.website-files.com",
  "d3e54v103j8qbb.cloudfront.net",
  "cdnjs.cloudflare.com",
  "cdn.jsdelivr.net",
  "code.jquery.com",
  "www.googletagmanager.com",
  "www.restauranthelena.com",
].map((p) => path.join(workspaceRoot, p));

const OUT_DIR = path.join(projectRoot, "public", "legacy");
const MANIFEST_PATH = path.join(projectRoot, "public", "legacy-manifest.json");

const COPY_EXTENSIONS = new Set([
  ".webp",
  ".png",
  ".jpg",
  ".jpeg",
  ".svg",
  ".gif",
  ".json",
  ".pdf",
  ".css",
  ".js",
  ".woff",
  ".woff2",
  ".ttf",
  ".otf",
  ".mp4",
  ".webm",
  ".lottie",
]);

const IMAGE_EXTENSIONS = new Set([".webp", ".png", ".jpg", ".jpeg", ".svg", ".gif"]);

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function posixPath(p) {
  return p.split(path.sep).join("/");
}

function copyTree({ srcRoot, relPath, outBaseName, images }) {
  const abs = path.join(srcRoot, relPath);
  const stat = fs.statSync(abs);

  if (stat.isDirectory()) {
    for (const entry of fs.readdirSync(abs)) {
      copyTree({
        srcRoot,
        relPath: path.join(relPath, entry),
        outBaseName,
        images,
      });
    }
    return;
  }

  const ext = path.extname(abs).toLowerCase();
  if (!COPY_EXTENSIONS.has(ext)) return;

  const dest = path.join(OUT_DIR, outBaseName, relPath);
  ensureDir(path.dirname(dest));
  fs.copyFileSync(abs, dest);

  if (IMAGE_EXTENSIONS.has(ext)) {
    images.push(posixPath(path.join("/legacy", outBaseName, relPath)));
  }
}

ensureDir(OUT_DIR);

const images = [];

for (const src of SOURCE_DIRS) {
  if (!fs.existsSync(src)) continue;
  const outBaseName = path.basename(src);
  copyTree({ srcRoot: src, relPath: "", outBaseName, images });
}

images.sort();

ensureDir(path.dirname(MANIFEST_PATH));
fs.writeFileSync(MANIFEST_PATH, JSON.stringify({ images }, null, 2), "utf8");

console.log(`Synced legacy assets to: ${OUT_DIR}`);
console.log(`Wrote manifest: ${MANIFEST_PATH}`);
console.log(`Images in manifest: ${images.length}`);
