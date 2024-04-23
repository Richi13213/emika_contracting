import { css, cx } from "@emotion/css";
import { flex, content } from "@mixins";

export const main_container = cx(
  flex({}),
  css`
    width: 100%;
    position: relative;
    flex-direction: column;
  `
);
