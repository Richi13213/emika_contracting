type Width = `${"max" | "min"}-width: ${number}px`;
type SpaceDouble = `${Space} ${Space}`;
type SpaceTriple = `${Space} ${Space} ${Space}`;
type SpaceQuarter = `${SpaceDouble} ${SpaceDouble}`;
type SpaceBox = Space | SpaceDouble | SpaceTriple | SpaceQuarter;
type Gap = Space | SpaceDouble;
type Var = `var(--${string})`;

export type Query = `(${Width})`;
export type Space = `${number}${"px" | "%"}` | "0" | "auto" | Var;

export type TextAlign =
  | "center"
  | "end"
  | "inherit"
  | "initial"
  | "justify"
  | "left"
  | "revert"
  | "right"
  | "start"
  | "unset";

export type Devices =
  | "phone"
  | "phone-mid"
  | "phone-big"
  | "phone-xbig"
  | "tablet-small"
  | "tablet-portrait"
  | "tablet-landscape"
  | "desktop"
  | "desktop-mid"
  | "desktop-big"
  | "desktop-xbig"
  | "tv-small"
  | "tv-4k";

export type Medias = {
  [key in Devices]: Width | `${number}px <= width <= ${number}px`;
};
export type ForsizeConfig = {
  [k in Devices]?: string;
};

export interface FlexConfig {
  justify?:
    | "center"
    | "end"
    | "flex-end"
    | "flex-start"
    | "inherit"
    | "initial"
    | "left"
    | "normal"
    | "revert"
    | "right"
    | "space-around"
    | "space-between"
    | "space-evenly"
    | "start"
    | "stretch"
    | "unset";
  gap?: Gap;
  align?:
    | "baseline"
    | "center"
    | "end"
    | "flex-end"
    | "flex-start"
    | "inherit"
    | "initial"
    | "normal"
    | "revert"
    | "self-end"
    | "self-start"
    | "start"
    | "stretch"
    | "unset";
  direction?: "row" | "column" | "column-reverse" | "row-reverse";
}

export interface ContentConfig {
  width?: Space;
  padding?: SpaceBox;
  margin?: SpaceBox;
}

export interface RText {
  query: Devices;
  size: number;
}

export interface ForsizePRopertiesConfig {
  queries: Devices;
  css_propertie: string;
}
