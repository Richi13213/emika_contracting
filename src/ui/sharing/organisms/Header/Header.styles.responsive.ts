import { css, cx } from "@emotion/css";
import { forsize } from "@mixins";

export const logo = cx(
  forsize({
    "tv-small": css`
      font-size: 44px;
    `,
    "desktop-xbig": css`
      font-size: 42px;
    `,
    "desktop-big": css`
      font-size: 39px;
    `,
    "desktop-mid": css`
      font-size: 36px;
    `,
    desktop: css`
      font-size: 33px;
    `,
  })
);

export const container = cx(
  forsize({
    "tv-small": css`
      padding: 25px 40px;
    `,
    "desktop-big": css`
      padding: 20px 30px;
    `,
    desktop: css`
      padding: 20px;
    `,
  })
);
