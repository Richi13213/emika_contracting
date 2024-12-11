import { css, cx } from "@emotion/css";
import { flex, content } from "@mixins";
import * as responsive from "./Footer.styles.responsive";

export const footer = cx(
  flex({}),
  css`
    width: 100%;
    box-shadow: 0px -4px 9px -3px rgba(0,0,0,0.75);
  `
);

export const container = cx(
  content({
    padding: "30px 50px",
  }),
  css`
    position: relative;
    display: grid;
    grid-template-columns: 1.5fr 1.5fr 1fr 1fr;
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

export const info_container = (area: string) =>
  cx(
    flex({
      direction: "column",
      align: "start",
      justify: "flex-start",
      gap: "10px",
    }),
    css``,
    responsive.info_container(area)
  );

export const info_title = cx(
  css`
    font-size: 28px;
    color: var(--accent-color);
  `,
  responsive.info_title
);

export const info_text = cx(
  css`
    font-size: 22px;
    color: var(--text-black);
    & span {
      font-weight: bold;
    }
  `,
  responsive.info_text
);

export const info_link = cx(
  css`
    font-size: 22px;
    color: var(--text-black);
    text-decoration: none;
    position: relative;
    &::after {
      content: "";
      width: 0%;
      min-height: 3px;
      position: absolute;
      left: 0;
      bottom: -2px;
      border-radius: 4px;
      transition: all 0.3s ease-in-out;
      background: var(--accent-color);
    }
    &:hover {
      cursor: pointer;
      &::after {
        width: 100%;
      }
    }
  `,
  responsive.info_link
);
