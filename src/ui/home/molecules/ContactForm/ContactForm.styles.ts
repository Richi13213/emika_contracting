import { css, cx } from "@emotion/css";

export const form = cx(
  css`
    width: 100%;
    padding: 20px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 20px;
    row-gap: 10px;
    border: 1px solid var(--accent-color);
    border-radius: 30px;
    background: rgb(221, 242, 255);
    background: linear-gradient(
      137deg,
      rgba(221, 242, 255, 1) 64%,
      rgba(255, 255, 255, 1) 100%
    );
  `
);
