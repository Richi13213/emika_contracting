import { css, cx } from "@emotion/css";
import { forsize } from "@mixins";

export const form = cx(
  forsize({
    "tablet-small": css`
      grid-template-columns: 1fr;
    `,
  })
);
