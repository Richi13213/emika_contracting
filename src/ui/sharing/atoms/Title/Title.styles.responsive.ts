import { css, cx } from "@emotion/css";
import { rText } from "@mixins";

export const title = cx(
  rText({
    query: "desktop",
    size: 50,
  }),
  rText({
    query: "tablet-landscape",
    size: 45,
  }),
  rText({
    query: "tablet-portrait",
    size: 40,
  }),
  rText({
    query: "tablet-small",
    size: 32,
  }),
  rText({
    query: "phone-xbig",
    size: 26,
  })
);
