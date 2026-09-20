import { css, cx } from "@emotion/css";
import { flex } from "@mixins";

export const nav_list = (active: boolean) =>
  cx(
    flex({
      justify: "space-between",
      gap: "12px",
    }),
    css`
      align-items: center;
      padding: 0.45rem;
      border-radius: 999px;
      background: rgba(16, 37, 54, 0.04);

      @media (max-width: 960px) {
        width: 100%;
        flex-direction: column;
        align-items: flex-start;
        gap: 18px;
        padding: 0;
        background: none;
        opacity: ${active ? "1" : "0"};
        transition: opacity 0.2s ease;
      }
    `
  );

export const nav_list_item = cx(
  flex({}),
  css`
    width: auto;

    @media (max-width: 960px) {
      width: 100%;
    }
  `
);
