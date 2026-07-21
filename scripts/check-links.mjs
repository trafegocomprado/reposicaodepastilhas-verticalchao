import { existsSync, readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";

const entry = "src/index.html";
if (!existsSync(entry)) {
  console.error(`Missing file: ${entry}`);
  process.exit(1);
}

const html = readFileSync(entry, "utf8");
const refs = [...html.matchAll(/(?:src|href)="([^"]+)"/g)].map((match) => match[1]);
const localRefs = refs.filter((ref) => !/^(?:https?:|mailto:|tel:|#)/.test(ref));
const missing = localRefs.filter((ref) => !existsSync(resolve(dirname(entry), ref.split(/[?#]/)[0])));

if (missing.length) {
  console.error([...new Set(missing)].map((ref) => `Missing local link: ${ref}`).join("\n"));
  process.exit(1);
}

console.log("Link validation passed.");
