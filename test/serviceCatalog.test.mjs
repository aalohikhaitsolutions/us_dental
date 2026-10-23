import test from "node:test";
import assert from "node:assert/strict";
import { getMoreServices } from "../app/services/serviceCatalog.js";

test("getMoreServices excludes the current service and includes all others", () => {
  const services = getMoreServices("braces");

  assert.equal(services.length, 12);
  assert.ok(services.every((service) => service.slug !== "braces"));
  assert.ok(services.some((service) => service.slug === "crowns"));
  assert.ok(services.some((service) => service.slug === "invisalign"));
});