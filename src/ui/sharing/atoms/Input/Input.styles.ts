import { css } from "@emotion/css";
import { InputStyleProps } from "@typing/styles";

export const input = ({ inputError, inputValid }: InputStyleProps) => css`
  display: block;
  width: 100%;
  min-height: 3.5rem;
  padding: 0.95rem 1rem;
  font-size: 1rem;
  line-height: 1.5;
  color: var(--color-text);
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.96), rgba(255, 255, 255, 0.9));
  border: 1px solid
    ${inputError
      ? "#c83c4d"
      : inputValid
        ? "rgba(16, 37, 54, 0.4)"
        : "rgba(16, 37, 54, 0.14)"};
  border-radius: 1.1rem;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.82);
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease,
    background 0.2s ease,
    transform 0.2s ease;

  &::placeholder {
    color: rgba(92, 107, 120, 0.8);
  }

  &:focus {
    border-color: var(--color-accent);
    box-shadow: 0 0 0 4px rgba(191, 111, 52, 0.14);
    background-color: #ffffff;
    transform: translateY(-1px);
  }
`;
