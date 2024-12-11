import { css } from "@emotion/css";
import { InputStyleProps } from "@typing/styles";

export const input = ({ inputError, inputValid }: InputStyleProps) => css`
  display: block;
  width: 100%;
  padding: 10px 0.75rem;
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
  transition: border-color 0.15s ease-in-out;
`;
