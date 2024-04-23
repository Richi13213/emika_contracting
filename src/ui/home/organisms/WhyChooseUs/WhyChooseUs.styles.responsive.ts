import { css, cx } from "@emotion/css";
import { rText, forsize } from "@mixins";

export const text = cx(
  rText({
    query: "desktop-big",
    size: 22,
  }),
  rText({
    query: "tablet-landscape",
    size: 20,
  }),
  rText({
    query: "tablet-portrait",
    size: 18,
  }),
  rText({
    query: "tablet-small",
    size: 16,
  }),
  rText({
    query: "phone-xbig",
    size: 14,
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
