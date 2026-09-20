import { css, cx } from "@emotion/css";
import { flex } from "@mixins";

export const input_container = cx(
  flex({
    direction: "column",
    gap: "8px",
  }),
  css`
    width: 100%;
    min-width: 0;
  `
);
