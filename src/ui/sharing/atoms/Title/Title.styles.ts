import { css, cx } from "@emotion/css";
import * as responsive from "./Title.styles.responsive";

export const title = cx(
  css`
    text-align: left;
    font-size: 60px;
    font-weight: bold;
    position: relative;
    color: var(--accent-color);
    z-index: 20;
  `,
  responsive.title
);
