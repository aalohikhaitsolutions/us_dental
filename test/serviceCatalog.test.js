/* eslint-disable @typescript-eslint/no-require-imports */
const test = require("node:test");
const assert = require("node:assert/strict");
const { getMoreServices } = require("../app/services/serviceCatalog.js");

test("getMoreServices excludes the current service and includes all others", () => {
  const services = getMoreServices("braces");

  assert.equal(services.length, 12);
  assert.ok(services.every((service) => service.slug !== "braces"));
  assert.ok(services.some((service) => service.slug === "crowns"));
  assert.ok(services.some((service) => service.slug === "invisalign"));
});
