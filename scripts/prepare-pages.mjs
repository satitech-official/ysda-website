import { promises as fs } from "node:fs";
import path from "node:path";

const outDir = path.resolve(process.cwd(), "out");
const projectPrefix = "/ysda-website";
const customDomain = "ysdasports.com";
const canonicalOrigin = `https://${customDomain}`;
const textExtensions = new Set([
  ".css",
  ".html",
  ".js",
  ".json",
  ".map",
  ".txt",
  ".webmanifest",
  ".xml"
]);

async function exists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function collectFiles(directory) {
  const entries = await fs.readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await collectFiles(fullPath)));
    } else if (entry.isFile()) {
      files.push(fullPath);
    }
  }

  return files;
}

const indexPath = path.join(outDir, "index.html");
if (!(await exists(indexPath))) {
  throw new Error("Static export is missing out/index.html. Run npm run build first.");
}

const files = await collectFiles(outDir);
let rewrittenFiles = 0;

for (const filePath of files) {
  const extension = path.extname(filePath).toLowerCase();
  if (!textExtensions.has(extension)) continue;

  const original = await fs.readFile(filePath, "utf8");
  const updated = original
    .replaceAll(`https://satitech-official.github.io${projectPrefix}`, canonicalOrigin)
    .replaceAll(`http://${customDomain}`, canonicalOrigin)
    .replaceAll(projectPrefix, "");

  if (updated !== original) {
    await fs.writeFile(filePath, updated, "utf8");
    rewrittenFiles += 1;
  }
}

await fs.writeFile(path.join(outDir, "CNAME"), `${customDomain}\n`, "utf8");
await fs.writeFile(path.join(outDir, ".nojekyll"), "", "utf8");

const notFoundPath = path.join(outDir, "404.html");
if (!(await exists(notFoundPath))) {
  await fs.copyFile(indexPath, notFoundPath);
}

const indexHtml = await fs.readFile(indexPath, "utf8");
if (indexHtml.includes(projectPrefix)) {
  throw new Error(`Deployment output still contains ${projectPrefix} references.`);
}

const localReferences = [...indexHtml.matchAll(/\b(?:src|href|poster)="([^"]+)"/g)]
  .map((match) => match[1])
  .filter((value) => {
    if (!value || value.startsWith("#")) return false;
    return !/^(?:https?:|mailto:|tel:|data:|blob:|javascript:)/i.test(value);
  });

const missingFiles = [];
for (const reference of localReferences) {
  const pathname = reference.split(/[?#]/, 1)[0];
  if (!pathname.startsWith("/")) continue;

  const localPath = path.join(outDir, pathname.slice(1));
  if (!(await exists(localPath))) {
    missingFiles.push(reference);
  }
}

if (missingFiles.length > 0) {
  const uniqueMissing = [...new Set(missingFiles)];
  throw new Error(`Missing exported assets:\n${uniqueMissing.join("\n")}`);
}

console.log(`Prepared GitHub Pages artifact for ${canonicalOrigin}.`);
console.log(`Rewrote ${rewrittenFiles} generated text file(s).`);
console.log(`Validated ${localReferences.length} local asset reference(s).`);
