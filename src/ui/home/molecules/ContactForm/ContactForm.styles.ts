import { css, cx } from "@emotion/css";
import { flex } from "@mixins"
import * as responsive from "./ContactForm.styles.responsive";

export const form = cx(
  css`
    width: 100%;
    padding: 20px 20px 40px 20px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 20px;
    row-gap: 10px;
    border-radius: 30px;
    background: var(--hero-text);
    box-shadow: 0px 0px 11px -1px rgba(0,0,0,0.75);
  `,
  responsive.form
);

export const button_container = cx(
  flex({}),
  css`
    padding-top: 25px;
  `
);

export const button = cx(
  css`
    width: 100%;
    height: 100%;
    max-height: 46px;
    min-height: 46px;
    max-width: 500px;
    font-size: 16px;
    font-weight: 700;
    color: var(--hero-text);
    border: none;
    border-radius: 13px;
    background-color: var(--accent-color);
    align-self: end;
    &:hover {
      cursor: pointer;
    }
  `
);

export const card = cx(
  flex({}),
  css`
    width: 100%;
    max-width: 500px;
    padding: 30px;
    border-radius: 10px;
    background: white;
  `
);

export const container = cx(
  flex({}),
  css`
    position: fixed;
    z-index: 99999;
    background: rgb(0, 0, 0, .8);
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
  `
);