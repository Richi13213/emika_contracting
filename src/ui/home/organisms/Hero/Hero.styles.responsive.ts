import { css, cx } from "@emotion/css";
import { forsize, rText } from "@mixins";

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

export const subtitle = cx(
  rText({
    query: "desktop",
    size: 30,
  }),
  rText({
    query: "tablet-landscape",
    size: 27,
  }),
  rText({
    query: "tablet-portrait",
    size: 24,
  }),
  rText({
    query: "tablet-small",
    size: 20,
  }),
  rText({
    query: "phone-xbig",
    size: 18,
  })
);

export const article = cx(
  forsize({
    "tablet-small": css`
      width: 100%;
      align-items: center;
    `,
  })
);
