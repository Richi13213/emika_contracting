import { css, cx } from "@emotion/css";
import { flex } from "@mixins";

export const main_container = cx(
  flex({
    direction: "column",
  }),
  css`
    width: 100%;
    position: relative;
    overflow: clip;
    gap: 1.25rem;
    padding-bottom: 1rem;
    isolation: isolate;

    &::before,
    &::after {
      content: "";
      position: absolute;
      border-radius: 999px;
      pointer-events: none;
      z-index: 0;
      filter: blur(14px);
    }

    &::before {
      width: 30rem;
      height: 30rem;
      top: 22rem;
      left: -16rem;
      background: radial-gradient(
        circle,
        rgba(191, 111, 52, 0.16),
        rgba(191, 111, 52, 0) 72%
      );
    }

    &::after {
      width: 36rem;
      height: 36rem;
      top: 74rem;
      right: -18rem;
      background: radial-gradient(
        circle,
        rgba(16, 37, 54, 0.14),
        rgba(16, 37, 54, 0) 74%
      );
    }

    & > * {
      position: relative;
      z-index: 1;
    }
  `
);

export const skip_link = css`
  position: fixed;
  top: 1rem;
  left: 1rem;
  z-index: 200;
  padding: 0.9rem 1.2rem;
  border-radius: 999px;
  background: var(--color-primary);
  color: var(--color-on-dark);
  text-decoration: none;
  transform: translateY(-200%);
  box-shadow: var(--shadow-soft);
  transition: transform 0.2s ease;

  &:focus-visible {
    transform: translateY(0);
  }
`;
