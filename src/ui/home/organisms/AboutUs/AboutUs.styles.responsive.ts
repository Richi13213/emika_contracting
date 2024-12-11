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
    "tablet-portrait": css`
      width: 100%;
    `,
  })
);

export const main_container = cx(
  forsize({
    "tablet-portrait": css`
    &::before{
      width: 100%;
      height: 100%;
      content: "";
      background: rgb(0, 0, 0, .45);
      position: absolute;
      top: 0;
      left: 0;
      z-index: 2;
    }
    & h2, p {
      color: var(--hero-text);
    }
    & p {
      font-weight: bold;
    }
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
      mask-image: linear-gradient(270deg, rgba(253,251,246,1) 40%, rgba(255,255,255,0) 70%);
    `,
    "tablet-portrait": css`
      mask-image: none;
      width: 100%;
      height: auto;
    `,
    "phone-xbig": css`
      width: auto;
      min-width: 100%;
      height: 100%;
    `

  })
);
