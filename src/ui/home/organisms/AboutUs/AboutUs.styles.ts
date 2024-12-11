import { css, cx } from "@emotion/css";
import { flex, content } from "@mixins";
import * as responsive from "./AboutUs.styles.responsive";

export const main_container = cx(
  flex({}),
  css`
    width: 100%;
    position: relative;
    overflow: hidden;
  `, responsive.main_container
);

export const container = cx(
  content({}),
  flex({
    justify: "flex-start",
    align: "start",
    gap: "30px",
  }),
  css`
    width: 100%;
    height: 100%;
    flex-direction: column;
  `
);

export const content_container = cx(
  flex({
    justify: "center",
    align: "center",
    gap: "30px",
    direction: "column",
  }),
  css`
    width: 60%;
    overflow: hidden;
  `,
  responsive.content_container
);

export const left_container = cx(
  flex({
    justify: "flex-start",
    align: "flex-start",
    gap: "30px",
  }),
  css`
    width: calc(50% - 15px);
    flex-direction: column;
  `,
  responsive.left_container
);

export const img = cx(
  css`
    width: auto;
    height: 100%;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 1;
    mask-image: linear-gradient(270deg, rgba(253,251,246,1) 60%, rgba(255,255,255,0) 90%);
  `, responsive.img
);

export const text = cx(
  css`
    text-align: left;
    font-size: 30px;
    font-weight: 500;
    position: relative;
    color: var(--accent-color);
    z-index: 2;
  `,
  responsive.text
);
