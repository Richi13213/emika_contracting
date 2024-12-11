import { css, cx } from "@emotion/css";
import { flex } from "@mixins";
import * as responsive from "./ServiceCard.styles.responsive";

export const card = cx(
  flex({
    gap: "30px",
    justify: "center",
    align: "end"
  }),
  css`
    width: 100%;
    min-width: 400px;
    min-height: 400px;
    padding: 25px 20px;
    border-radius: 30px;
    position: relative;
    overflow: hidden;
    background: transparent;
    box-shadow:
      0 5px 12px #000000;
    &::before{
      width: 100%;
      height: 100%;
      content: "";
      background: rgb(0, 0, 0, .3);
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
    }
  `, responsive.card
);

export const text_card = cx(
  flex({
    justify: "flex-start",
  }),
  css`
    width: 100%;
    padding: 20px;
    border-radius: 10px;
    background-color: rgba(20, 89, 144, 0.8);
    border-color: rgb(23, 111, 178);
    backdrop-filter: blur(4px);
    z-index: 2;
  `
);

export const title = cx(
  css`
    font-size: 35px;
    font-weight: bold;
    text-align: center;
    color: var(--text-white);
  `,
  responsive.title
);
export const image = cx(css`
  width: auto;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`);
export const text = cx(
  css`
    font-size: 25px;
    font-weight: 400;
    text-align: justify;
  `,
  responsive.text
);
