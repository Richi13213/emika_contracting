import { css, cx } from "@emotion/css";
import { flex, content } from "@mixins";
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
    flex-direction: column;
  `
);

export const content_container = cx(
  css`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 50px;
  `
);
