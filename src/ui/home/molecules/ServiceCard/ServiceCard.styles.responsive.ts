import { cx } from "@emotion/css";
import { rText } from "@mixins";

export const title = cx(
  rText({
    query: "desktop-big",
    size: 35,
  }),
  rText({
    query: "desktop",
    size: 30,
  }),
  rText({
    query: "tablet-portrait",
    size: 24,
  }),
  rText({
    query: "phone-xbig",
    size: 18,
  })
);

export const text = cx(
  rText({
    query: "desktop-big",
    size: 24,
  }),
  rText({
    query: "desktop",
    size: 24,
  }),
  rText({
    query: "tablet-portrait",
    size: 18,
  }),
  rText({
    query: "phone-xbig",
    size: 14,
  })
);
