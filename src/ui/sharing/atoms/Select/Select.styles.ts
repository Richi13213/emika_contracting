import { css, cx } from "@emotion/css";
import { flex } from "@mixins";
import { InputStyleProps } from "@typing/styles";

export const container = cx(
  flex({
    direction: "column",
    align: "stretch",
    gap: "8px",
  }),
  css`
    width: 100%;
  `
);

export const select_input = ({ inputError, inputValid }: InputStyleProps) =>
  cx(
    css`
      width: 100%;
      min-height: 3.5rem;
      padding: 0.95rem 3rem 0.95rem 1rem;
      font-size: 1rem;
      line-height: 1.5;
      color: var(--color-text);
      appearance: none;
      background:
        linear-gradient(45deg, transparent 50%, var(--color-primary) 50%),
        linear-gradient(135deg, var(--color-primary) 50%, transparent 50%),
        linear-gradient(180deg, rgba(255, 255, 255, 0.96), rgba(255, 255, 255, 0.9));
      background-position:
        calc(100% - 1.35rem) calc(50% - 4px),
        calc(100% - 1rem) calc(50% - 4px),
        center;
      background-size:
        8px 8px,
        8px 8px,
        100% 100%;
      background-repeat: no-repeat;
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
        transform 0.2s ease;

      &:focus {
        border-color: var(--color-accent);
        box-shadow: 0 0 0 4px rgba(191, 111, 52, 0.14);
        transform: translateY(-1px);
      }
    `
  );
