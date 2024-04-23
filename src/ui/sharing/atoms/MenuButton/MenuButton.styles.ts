import { css, cx } from "@emotion/css";
import { flex, content } from "@mixins";
import * as responsive from "./MenuButton.styles.responsive";

export const hamburguer = cx(
  css`
    display: none;
    & input {
      cursor: pointer;
      display: none;
    }
    & svg {
      height: 3em;
      transition: transform 600ms cubic-bezier(0.4, 0, 0.2, 1);
    }
    & input:checked + svg {
      transform: rotate(-45deg);
    }
    input:checked + svg #line_path {
      stroke-dasharray: 20 300;
      stroke-dashoffset: -32.42;
    }
  `,
  responsive.hamburguer
);

export const line = cx(
  css`
    fill: none;
    stroke: black;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 3;
    transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
      stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
  `
);

export const line_top_bottom = cx(
  css`
    stroke-dasharray: 12 63;
  `
);

export const line_path = cx(line, line_top_bottom);
