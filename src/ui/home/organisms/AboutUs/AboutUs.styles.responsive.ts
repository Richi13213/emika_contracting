import { css, cx } from "@emotion/css";
import { rText, forsize } from "@mixins";

export const text = cx(
  rText({
    query: "desktop",
    size: 26,
  }),
  rText({
    query: "tablet-landscape",
    size: 24,
  }),
  rText({
    query: "tablet-portrait",
    size: 22,
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

export const content_container = cx(
  forsize({
    "tablet-landscape": css`
      flex-direction: column;
    `,
  })
);

export const left_container = cx(
  forsize({
    "tablet-landscape": css`
      width: 100%;
    `,
  })
);

export const img = cx(
  forsize({
    "tablet-landscape": css`
      width: 100%;
    `,
  })
);
