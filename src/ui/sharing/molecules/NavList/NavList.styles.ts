import { css, cx } from "@emotion/css";
import { flex } from "@mixins";
import * as responsive from "./NavList.styles.responsive";

export const nav_list = (active: boolean) =>
  cx(
    flex({
      justify: "space-between",
      gap: "30px",
    }),
    css`
      min-width: 45%;
      & li {
        list-style: none;
      }
    `,
    responsive.nav_list(active)
  );

export const nav_list_item = cx(flex({}), css``, responsive.nav_list_item);
