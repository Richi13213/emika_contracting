import { css, cx } from "@emotion/css";
import { forsize } from "@mixins";

export const hamburguer = cx(
  forsize({
    "tablet-landscape": css`
      display: inline-block;
    `,
  })
);
