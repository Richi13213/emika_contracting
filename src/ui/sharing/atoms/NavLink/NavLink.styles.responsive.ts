import { css, cx } from "@emotion/css";
import { forsize } from "@mixins";

export const link = cx(
  forsize({
    "tv-small": css`
      font-size: 32px;
    `,
    "desktop-xbig": css`
      font-size: 28px;
    `,
    "desktop-big": css`
      font-size: 24px;
    `,
    "desktop-mid": css`
      font-size: 22px;
    `,
    desktop: css`
      font-size: 20px;
    `,
    "tablet-landscape": css`
      padding: 20px 0;
      &::after {
        bottom: 20px;
      }
    `,
  })
);
