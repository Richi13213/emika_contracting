import { css, cx } from "@emotion/css";
import { flex, content } from "@mixins";
import * as responsive from "./ContactUs.styles.responsive";

export const main_container = cx(
  flex({}),
  css`
    width: 100%;
  `
);

export const container = cx(
  content({}),
  flex({
    justify: "flex-start",
    align: "center",
    gap: "30px",
  }),
  css`
    width: 100%;
    flex-direction: column;
  `
);

export const content_container = cx(
  css`
    width: 100%;
    display: grid;
    grid-template-columns: 2fr 1fr;
    column-gap: 50px;
  `,
  responsive.content_container
);

export const text_container = cx(
  flex({
    direction: "column",
    gap: "30px",
    justify: "flex-start",
  }),
  css`
    width: 100%;
  `
);

export const text = cx(
  css`
    text-align: center;
    font-size: 20px;
    position: relative;
    font-weight: 500;
    color: #000;
  `,
  responsive.text
);
