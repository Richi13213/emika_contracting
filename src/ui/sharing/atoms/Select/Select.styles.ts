import { css, cx } from "@emotion/css";
import { flex } from "@mixins";
import { SelectStyleProps } from "@typing/styles";
import Arrow from "@images/sharing/arrow.png";

export const container = cx(
  flex({}),
  css`
    width: 100%;
    position: relative;
    margin-top: 25px;
  `
);

export const select_input = ({
  inputError,
  inputValid,
  isOpen,
}: SelectStyleProps) =>
  cx(
    flex({
      justify: "flex-start",
    }),
    css`
      width: 100%;
      min-height: 46px;
      padding: 10px 2rem 10px 0.75rem;
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.5;
      color: #000;
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      background-color: #fff;
      background-clip: padding-box;
      border: 1px solid
        ${inputError ? "#DC3545" : (inputValid ? "#198754" : "rgb(0, 0, 0, 0.4)")};
      border-radius: 8px;
      &::after {
        content: "";
        width: 1.25rem;
        height: 1.25rem;
        background: url(${Arrow}) no-repeat center/100% auto;
        display: block;
        position: absolute;
        right: 0.5rem;
        top: 50%;
        transition: all 0.3s ease-in-out;
        transform: translateY(-50%) ${isOpen && "rotate(180deg)"};
      }
      &:hover {
        cursor: pointer;
      }
    `
  );

export const option_container = cx(
  css`
    width: 100%;
    max-height: 200px;
    display: grid;
    position: absolute;
    bottom: 0;
    left: 0;
    transform: translateY(101%);
    border-radius: 8px;
    background: #fff;
    overflow-x: hidden;
    overflow-y: auto;
    border: 1px solid rgb(0, 0, 0, 0.4);
    z-index: 10;
  `
);

export const option = cx(
  flex({
    justify: "flex-start",
  }),
  css`
    width: 100%;
    padding: 10px 0.75rem;
    &:hover {
      background: var(--accent-color-hover);
      cursor: pointer;
    }
  `
);
