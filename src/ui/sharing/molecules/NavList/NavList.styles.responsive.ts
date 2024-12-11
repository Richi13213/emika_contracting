import { css, cx } from "@emotion/css";
import { forsize } from "@mixins";

export const nav_list = (active: boolean) =>
  cx(
    forsize({
      "tablet-landscape": cx(
        css`
          width: 100%;
          max-width: 50%;
          height: 100%;
          padding: 50px 20px;
          gap: 0;
          position: fixed;
          background: #fff;
          top: 0;
          right: 0;
          transition: all 0.3s ease-in-out;
          transform: ${active ? `translateX(0%)` : `translateX(100%)`};
          flex-direction: column;
          justify-content: flex-start;
          z-index: 9999;
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
