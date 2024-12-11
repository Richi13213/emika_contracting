import { cx } from "@emotion/css";
import { rText, forsize, flex } from "@mixins";

export const text = cx(
  rText({
    query: "desktop",
    size: 18,
  }),
  rText({
    query: "tablet-landscape",
    size: 17,
  }),
  rText({
    query: "tablet-portrait",
    size: 16,
  }),
  rText({
    query: "tablet-small",
    size: 15,
  }),
  rText({
    query: "phone-xbig",
    size: 14,
  })
);

export const content_container = cx(
  forsize({
    "tablet-portrait": cx(
      flex({
        direction: "column-reverse",
        gap: "30px",
      })
    ),
  })
);
