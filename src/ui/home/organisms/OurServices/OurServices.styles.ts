import { css, cx } from "@emotion/css";
import { flex, content } from "@mixins";

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
    gap: "0px",
  }),
  css`
    width: 100%;
    height: 100%;
    flex-direction: column;
  `
);

export const swiper = cx(
  flex({
    justify: "center",
    align: "stretch",
  }),
  css`
    width: 100% !important;
    height: fit-content !important;
    padding: 50px 30px !important;
  `
);

export const swiper_slide = cx(
  css`
    width: fit-content !important;
    height: 100% !important;
  `
);
