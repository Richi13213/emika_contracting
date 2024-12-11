import { css, cx } from "@emotion/css";
import { flex, content } from "@mixins";
import * as responsive from "./Header.styles.responsive";

export const header = (active:boolean) => cx(
  flex({}),
  css`
    width: 100%;
    position: sticky;
    top: 0;
    left: 0;
    background: #ffffff;
    box-shadow: 0px 14px 23px -3px rgba(0, 0, 0, 0.25);
    z-index: 9999;
    &::after {
      position: fixed;
      width: 100%;
      height: 100%;
      content: "";
      background: rgb(0, 0, 0, 0.7);
      top: 0;
      left: 0;
      transform: ${active ? `translateX(0%)` : `translateX(100%)`};
      z-index: 8888;
    }
  `
);

export const container = cx(
  content({
    padding: "30px 50px",
  }),
  flex({
    justify: "space-between",
    gap: "20px",
  }),
  css`
    position: relative;
  `,
  responsive.container
);

export const logo = cx(
  css`
    font-size: 48px;
    font-weight: 800;
  `,
  responsive.logo
);
