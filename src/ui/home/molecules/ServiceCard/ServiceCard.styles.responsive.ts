import { cx, css } from "@emotion/css";
import { rText, forsize } from "@mixins";

export const card = cx(
  forsize({
    "phone-xbig": css`
      min-width: 300px;
      min-height: 300px;
    `,
    "phone-big": css`
      min-width: 260px;
      min-height: 260px;
    `,
    "phone-mid": css`
      min-width: 240px;
      min-height: 240px;
    `,
  })
)
export const title = cx(
  rText({
    query: "desktop-big",
    size: 30,
  }),
  rText({
    query: "desktop",
    size: 25,
  }),
  rText({
    query: "tablet-portrait",
    size: 22,
  }),
  rText({
    query: "phone-xbig",
    size: 18,
  })
);

export const text = cx(
  rText({
    query: "desktop-big",
    size: 22,
  }),
  rText({
    query: "desktop",
    size: 20,
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
