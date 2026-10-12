// Gives every file in public/images a content-hashed name (e.g. about-friends.3f9a1c2b.webp) and updates
// the references in src/. Because the name changes whenever the picture changes, browsers and CDNs can cache
// images for a year without ever showing a stale one.
//
// Usage:  npm run images:hash      (run after adding or replacing any image, then rebuild)
import { createHash } from "node:crypto";
import { readdirSync, readFileSync, renameSync, statSync, writeFileSync } from "node:fs";
import { join, relative } from "node:path";

const IMAGES = "public/images";
const SRC = "src";
const NAME = /^(.*?)(?:\.[0-9a-f]{8})?\.(webp|png|jpe?g|avif)$/;

const walk = (dir) =>
  readdirSync(dir).flatMap((f) => {
    const p = join(dir, f);
    return statSync(p).isDirectory() ? walk(p) : [p];
  });

const swaps = []; // [oldWebPath, newWebPath]
for (const file of walk(IMAGES)) {
  const dir = file.slice(0, file.lastIndexOf("/"));
  const name = file.slice(dir.length + 1);
  const m = name.match(NAME);
  if (!m) continue;
  const [, base, ext] = m;
  const hash = createHash("md5").update(readFileSync(file)).digest("hex").slice(0, 8);
  const newName = `${base}.${hash}.${ext}`;
  const web = (n) => "/" + join(relative("public", dir), n).replaceAll("\\", "/");
  if (newName !== name) renameSync(file, join(dir, newName));
  // Plain name and any previously hashed name both point at the new file.
  swaps.push([web(`${base}.${ext}`), web(newName)]);
  if (name !== `${base}.${ext}`) swaps.push([web(name), web(newName)]);
}

let touched = 0;
for (const file of walk(SRC).filter((f) => /\.(ts|tsx)$/.test(f))) {
  let text = readFileSync(file, "utf8");
  const before = text;
  for (const [from, to] of swaps) if (from !== to) text = text.replaceAll(`"${from}"`, `"${to}"`);
  if (text !== before) {
    writeFileSync(file, text);
    touched++;
  }
}
console.log(`Hashed ${swaps.length} image names; updated ${touched} source files.`);
