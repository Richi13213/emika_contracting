import { css, cx } from "@emotion/css";
import { flex, content } from "@mixins";
import * as responsive from "./WhyChooseUs.styles.responsive";

export const main_container = cx(
  flex({}),
  css`
    width: 100%;
  `
);

export const container = cx(
  content({
    padding: "0 30px"
  }),
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
    & li {
      list-style: none;
      position: relative;
      &::before {
        content: "";
        display: block;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: var(--accent-color);
        position: absolute;
        top: 15%;
        left: -18px;
      }
    }
  `,
  responsive.left_container
);

export const img = cx(
  css`
    width: calc(50% - 15px);
    max-width: 900px;
    height: auto;
    border-radius: 8px;
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
    & span {
      color: var(--accent-color);
      font-weight: bold;
    }
  `,
  responsive.text
);
