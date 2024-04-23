import { css, cx } from "@emotion/css";
import { flex } from "@mixins";
import * as responsive from "./ServiceCard.styles.responsive";

export const card = cx(
  flex({
    direction: "column",
    gap: "30px",
    justify: "space-between",
  }),
  css`
    width: 100%;
    height: 100%;
    max-width: 500px;
    min-width: 280px;
    padding: 30px;
    border: 2px solid var(--accent-color);
    border-radius: 30px;
    background: #ffffff;
  `
);
export const title = cx(
  css`
    font-size: 40px;
    font-weight: bold;
    text-align: center;
  `,
  responsive.title
);
export const image = cx(css`
  width: 100%;
  height: auto;
  border-radius: 4px;
`);
export const text = cx(
  css`
    font-size: 30px;
    font-weight: 400;
    text-align: justify;
  `,
  responsive.text
);
