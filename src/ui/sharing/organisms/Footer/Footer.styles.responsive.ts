import { css, cx } from "@emotion/css";
import { forsize } from "@mixins";

export const container = cx(
  forsize({
    "tablet-portrait": css`
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: auto;
      grid-template-areas:
        "logo logo logo"
        "info follow legal";
      column-gap: 20px;
      row-gap: 30px;
    `,
    "phone-xbig": css`
      grid-template-areas:
        "logo logo"
        "info follow"
        "legal legal";
    `,
    "phone-mid": css`
      grid-template-areas:
        "logo"
        "info"
        "follow"
        "legal";
    `,
  })
);

export const info_container = (area: string) =>
  cx(
    forsize({
      "tablet-portrait": css`
        grid-area: ${area};
      `,
    })
  );

export const logo = cx(
  forsize({
    "tv-small": css`
      font-size: 44px;
    `,
    "desktop-xbig": css`
      font-size: 42px;
    `,
    "desktop-big": css`
      font-size: 39px;
    `,
    "desktop-mid": css`
      font-size: 36px;
    `,
    desktop: css`
      font-size: 33px;
    `,
    "tablet-portrait": css`
      grid-area: logo;

    `
  })
);

export const info_title = cx(
  forsize({
    "desktop-xbig": css`
      font-size: 26px;
    `,
    "desktop-big": css`
      font-size: 25px;
    `,
    "desktop-mid": css`
      font-size: 24px;
    `,
    desktop: css`
      font-size: 22px;
    `,
    "tablet-portrait": css`
      font-size: 20px;
    `,
    "tablet-small": css`
      font-size: 18px;
    `,
  })
);

export const info_text = cx(
  forsize({
    "desktop-xbig": css`
      font-size: 21px;
    `,
    "desktop-big": css`
      font-size: 20px;
    `,
    "desktop-mid": css`
      font-size: 19px;
    `,
    desktop: css`
      font-size: 18px;
    `,
    "tablet-portrait": css`
      font-size: 16px;
    `,
    "tablet-small": css`
      font-size: 14px;
    `,
  })
);

export const info_link = cx(
  forsize({
    "desktop-xbig": css`
      font-size: 21px;
    `,
    "desktop-big": css`
      font-size: 20px;
    `,
    "desktop-mid": css`
      font-size: 19px;
    `,
    desktop: css`
      font-size: 18px;
    `,
    "tablet-portrait": css`
      font-size: 16px;
    `,
    "tablet-small": css`
      font-size: 14px;
    `,
  })
);
