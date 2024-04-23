import { css, cx } from "@emotion/css";
import { forsize } from "@mixins";

export const nav_list = (active: boolean) =>
  cx(
    forsize({
      "tablet-landscape": cx(
        css`
          min-width: 30%;
          padding: 20px;
          gap: 0;
          position: absolute;
          background: #fff;
          top: 100%;
          transition: all 0.3s ease-in-out;
          right: 0;
          transform: ${active ? `translateX(0%)` : `translateX(100%)`};
          flex-direction: column;
        `
      ),
    })
  );

export const nav_list_item = cx(
  forsize({
    "tablet-landscape": cx(
      css`
        width: 100%;
      `
    ),
  })
);
