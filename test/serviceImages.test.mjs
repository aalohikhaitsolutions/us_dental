import test from "node:test";
import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { existsSync, readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";

const servicesDirectory = join(process.cwd(), "app", "[locale]", "services");
const publicDirectory = join(process.cwd(), "public");

test("service pages use unique, available image assets", () => {
  const imageOwners = new Map();
  const imageHashes = new Map();
  const pageDirectories = readdirSync(servicesDirectory, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name);

  for (const service of pageDirectories) {
    const page = readFileSync(join(servicesDirectory, service, "page.tsx"), "utf8");
    const imagePaths = [
      ...page.matchAll(/\bsrc=["'](\/[^"']+)["']/g),
      ...page.matchAll(/url\(["'](\/[^"']+)["']\)/g),
    ].map((match) => match[1]);

    for (const imagePath of imagePaths) {
      const assetPath = join(publicDirectory, imagePath.slice(1));
      assert.ok(existsSync(assetPath), `${service} references missing image ${imagePath}`);
      assert.equal(
        imageOwners.has(imagePath),
        false,
        `${imagePath} is reused by ${imageOwners.get(imagePath)} and ${service}`,
      );
      const imageHash = createHash("sha256").update(readFileSync(assetPath)).digest("hex");
      assert.equal(
        imageHashes.has(imageHash),
        false,
        `${imagePath} duplicates ${imageHashes.get(imageHash)}`,
      );
      imageOwners.set(imagePath, service);
      imageHashes.set(imageHash, imagePath);
    }
  }
});
