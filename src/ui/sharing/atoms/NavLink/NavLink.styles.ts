import { css, cx } from "@emotion/css";
import * as responsive from "./NavLink.styles.responsive";

export const link = cx(
  css`
    font-size: 35px;
    font-weight: 600;
    position: relative;
    text-decoration: none;
    color: var(--text-color);
    transition: all 0.3s ease-out;
    &::after {
      width: 0%;
      min-height: 4px;
      content: "";
      position: absolute;
      bottom: -2px;
      left: 0;
      background: #0f2942;
      border-radius: 4px;
      transition: width 0.3s ease-in-out;
    }
    &:hover {
      cursor: pointer;
      &::after {
        width: 100%;
      }
    }
  `,
  responsive.link
);
