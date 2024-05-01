import { css, cx } from "@emotion/css";
import { flex } from "@mixins";

export const input_container = cx(
  flex({
    direction: "column",
    gap: "10px",
  }),
  css`
    width: 100%;
    position: relative;
    margin-top: 25px;
  `
);
