import { css, cx } from "@emotion/css";
import { flex } from "@mixins";

export const form = cx(
  css`
    width: 100%;
    position: relative;
    padding: 1.75rem;
    display: grid;
    gap: 1.05rem;
    border-radius: 2rem;
    background:
      linear-gradient(180deg, rgba(255, 253, 249, 0.98), rgba(255, 253, 249, 0.92));
    border: 1px solid rgba(16, 37, 54, 0.1);
    box-shadow: var(--shadow-card);
    overflow: hidden;

    &::before {
      content: "";
      position: absolute;
      inset: 0 auto 0 0;
      width: 5px;
      background: linear-gradient(
        180deg,
        rgba(191, 111, 52, 1),
        rgba(191, 111, 52, 0.18)
      );
      pointer-events: none;
    }

    @media (min-width: 640px) {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  `
);

export const form_intro = css`
  grid-column: 1 / -1;
  color: var(--color-text-muted);
  font-size: 0.98rem;
  max-width: 34rem;
`;

export const notice = (variant: "success" | "error") => css`
  grid-column: 1 / -1;
  padding: 0.95rem 1rem;
  border-radius: 1rem;
  font-size: 0.95rem;
  color: ${variant === "success" ? "#1f5a33" : "#8f2634"};
  background: ${variant === "success"
    ? "rgba(62, 153, 91, 0.12)"
    : "rgba(200, 60, 77, 0.12)"};
  border: 1px solid
    ${variant === "success"
      ? "rgba(62, 153, 91, 0.22)"
      : "rgba(200, 60, 77, 0.2)"};
`;

export const button_container = cx(
  flex({
    direction: "column",
    align: "stretch",
    gap: "12px",
  }),
  css`
    grid-column: 1 / -1;
    padding-top: 0.5rem;
  `
);

export const button = css`
  width: 100%;
  min-height: 3.5rem;
  padding: 1rem 1.35rem;
  font-size: 0.98rem;
  font-weight: 700;
  color: var(--color-on-dark);
  border-radius: 999px;
  background: linear-gradient(
    135deg,
    var(--color-primary),
    var(--color-primary-soft)
  );
  box-shadow: 0 18px 36px rgba(9, 24, 35, 0.16);
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    cursor: pointer;
    transform: translateY(-2px);
    box-shadow: 0 22px 42px rgba(9, 24, 35, 0.22);
  }

  @media (min-width: 640px) {
    width: fit-content;
  }
`;

export const disclaimer = css`
  color: var(--color-text-muted);
  font-size: 0.88rem;
  max-width: 24rem;
`;
