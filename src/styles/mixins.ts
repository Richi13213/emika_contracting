import { css } from "@emotion/css";

import type {
  ForsizePRopertiesConfig,
  ForsizeConfig,
  FlexConfig,
  ContentConfig,
  Devices,
  RText,
} from "@typing/styles";

import { medias } from "./vars";

export function forsize(queries: ForsizeConfig) {
  const devices = Object.keys(queries) as Devices[];
  const responsive = devices.map((key) =>
    medias[key]
      ? css`
          @media screen and (${medias[key]}) {
            ${queries[key]}
          }
        `
      : ""
  );
  return css`
    ${responsive}
  `;
}

export function forsizeProperties({
  queries,
  css_propertie,
}: ForsizePRopertiesConfig) {
  const responsive = forsize({
    [queries]: css`
      ${css_propertie}
    `,
  });
  return css`
    ${responsive}
  `;
}

export const rText = ({ query, size }: RText) => {
  const css_propertie = `font-size: ${size}px;`;
  return forsizeProperties({
    queries: query,
    css_propertie,
  });
};

export const flex = ({
  justify = "center",
  gap,
  align = "center",
  direction = "row",
}: FlexConfig) => {
  const gapContent = gap ? `gap: ${gap};` : "";
  const alignContent = align ? `align-items: ${align};` : "";

  return css`
    display: flex;
    justify-content: ${justify};
    flex-direction: ${direction};
    ${gapContent}
    ${alignContent}
  `;
};

export const content = ({
  width = "2560px",
  padding = "60px 30px",
  margin = "0",
}: ContentConfig) => css`
  display: block;
  width: 100%;
  max-width: ${width};
  margin: ${margin};
  padding: ${padding};
`;
