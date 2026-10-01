import test from "node:test";
import assert from "node:assert/strict";
import {
  company,
  services,
  processSteps,
  verifiedProjects,
  alignedPhotoPairs,
  verifiedTestimonials,
} from "../site-content.mjs";
import {
  endpoint,
  fieldNames,
  validateInquiry,
  normalizePhone,
  makePayload,
  sendInquiry,
} from "../src/contact-contract.ts";

const valid = {
  first_name: "Ava",
  last_name: "Lee",
  email: "ava@example.com",
  phone_number: "+1 (647) 801-5900",
  service: "Asphalt Maintenance",
};

test("legacy business facts and production gates", () => {
  assert.equal(company.location, "Barrie, Ontario, Canada");
  assert.equal(company.email, "info@emikaconstruction.ca");
  assert.equal(services.length, 7);
  assert.deepEqual(
    processSteps.map((step) => step.title),
    ["Walk the site", "Align the scope", "Deliver with care"],
  );
  assert.equal(verifiedProjects.length, 1);
  assert.equal(verifiedProjects[0].title, "Commercial Interior Renovation");
  assert.equal(verifiedTestimonials.length, 0);
  assert.equal(alignedPhotoPairs.length, 0);
});

test("project photo choices match the approved handoff without adding client metadata", () => {
  const project = verifiedProjects[0];
  assert.deepEqual(
    project.comparisons.map(({ before, after }) => [before.src, after.src]),
    [
      [
        "/images/projects/emika-project-02-960.webp",
        "/images/projects/emika-project-03-960.webp",
      ],
      [
        "/images/projects/emika-project-06-960.webp",
        "/images/projects/emika-project-16-960.webp",
      ],
      [
        "/images/projects/emika-project-07-960.webp",
        "/images/projects/emika-project-12-960.webp",
      ],
    ],
  );
  assert.deepEqual(
    project.gallery.map(({ image }) => image.src),
    ["11", "13", "15"].map(
      (id) => `/images/projects/emika-project-${id}-960.webp`,
    ),
  );
  assert.equal(project.client, null);
  assert.equal(project.location, null);
  assert.equal(project.publicTitle, "Commercial Interior Renovation");
  assert.equal(project.published, true);
  for (const pair of project.comparisons) {
    assert.notEqual(pair.before.src, pair.after.src);
    assert.ok(pair.before.alt && pair.after.alt);
  }
});

test("validates all five fields and North American contact formats", () => {
  assert.deepEqual(validateInquiry(valid), {});
  const errors = validateInquiry({
    first_name: "",
    last_name: "",
    email: "bad",
    phone_number: "123",
    service: "",
  });
  assert.deepEqual(Object.keys(errors), fieldNames);
  assert.equal(
    errors.phone_number,
    "Enter a valid North American phone number",
  );
});

test("normalizes phone and sends exactly the legacy payload", async () => {
  assert.equal(normalizePhone("+1 (647) 801-5900"), "6478015900");
  assert.deepEqual(Object.keys(makePayload(valid)), fieldNames);
  let request;
  const ok = await sendInquiry(valid, async (url, options) => {
    request = { url, options };
    return { ok: true, json: async () => ({ ok: true }) };
  });
  assert.equal(ok, true);
  assert.equal(request.url, endpoint);
  assert.equal(request.options.method, "POST");
  assert.equal(request.options.headers["Content-Type"], "application/json");
  assert.deepEqual(JSON.parse(request.options.body), {
    ...valid,
    phone_number: "6478015900",
  });
});

test("non-ok response and missing data.ok report failure", async () => {
  assert.equal(await sendInquiry(valid, async () => ({ ok: false })), false);
  assert.equal(
    await sendInquiry(valid, async () => ({
      ok: true,
      json: async () => ({ ok: false }),
    })),
    false,
  );
});
