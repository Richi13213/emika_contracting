import { css, cx, keyframes } from "@emotion/css";
import { flex, content } from "@mixins";
import * as responsive from "./Hero.styles.responsive";
import Bg from "@images/sharing/bg.webp";

const fadeFromBottom = keyframes`
  from {
    top: 30px;
    opacity: 0;
  }
  to {
    top: 0px;
    opacity: 1;
  }
`;
const buttonFill = keyframes`
  0% {
    width: 0;
    height: 2px;
  }
  50% {
    width: 100%;
    height: 2px;
  }
  100% {
    width: 100%;
    height: 100%;
  }
`;
export const main_container = cx(
  flex({}),
  css`
    width: 100%;
    height: 100%;
    background: url(${Bg}) no-repeat center/cover;
  `
);

export const container = cx(
  content({}),
  flex({
    justify: "flex-start",
    align: "center",
  }),
  css`
    width: 100%;
    height: 100%;
  `
);

export const article = cx(
  flex({
    gap: "80px",
    align: "flex-start",
  }),
  css`
    flex-direction: column;
  `,
  responsive.article
);

export const title = cx(
  css`
    text-align: left;
    font-size: 60px;
    font-weight: bold;
    position: relative;
    color: var(--hero-text);
    animation: ${fadeFromBottom} 1.5s ease-in-out 1s forwards;
    opacity: 0;
  `,
  responsive.title
);

export const subtitle = cx(
  css`
    text-align: left;
    font-size: 30px;
    font-weight: 700;
    position: relative;
    animation: ${fadeFromBottom} 1.5s ease-in-out 1.5s forwards;
    color: var(--hero-text);
    opacity: 0;
  `,
  responsive.subtitle
);

export const button = cx(
  css`
    width: 100%;
    max-width: 500px;
    padding: 15px;
    font-size: 30px;
    font-weight: 700;
    color: var(--hero-text);
    background: transparent;
    border: none;
    border-radius: 13px;
    overflow: hidden;
    position: relative;
    opacity: 0;
    animation: ${fadeFromBottom} 1.5s ease-in-out 2s forwards;
    &::before {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      height: 2px;
      width: 0;
      background-color: var(--accent-color);
      z-index: -1;
      animation: ${buttonFill} 1s ease-in-out 3s forwards;
    }
    &:hover {
      cursor: pointer;
    }
  `,
  responsive.subtitle
);
