import { css, cx } from "@emotion/css";
import { flex, content } from "@mixins";
import * as responsive from "./AboutUs.styles.responsive";
import Bg from "@images/about_us/wave.webp";

export const main_container = cx(
  flex({}),
  css`
    width: 100%;
    background-color: #fff;
    background-image: url(${Bg});
    background-repeat: no-repeat;
    background-position: center bottom;
    background-size: 100% auto;
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
    height: 100%;
    flex-direction: column;
  `
);

export const content_container = cx(
  flex({
    justify: "center",
    align: "center",
    gap: "30px",
  }),
  css`
    width: 100%;
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
    width: calc(50% - 15px);
    max-width: 900px;
    height: auto;
  `,
  responsive.img
);

export const text = cx(
  css`
    text-align: left;
    font-size: 30px;
    font-weight: 500;
    position: relative;
    color: var(--text-black);
  `,
  responsive.text
);
