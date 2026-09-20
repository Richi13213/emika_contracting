import { css, cx } from "@emotion/css";

export const link = cx(
  css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 2.75rem;
    padding: 0.55rem 0.95rem;
    border-radius: 999px;
    font-size: 0.95rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    position: relative;
    text-decoration: none;
    color: var(--color-primary);
    transition:
      color 0.2s ease,
      background-color 0.2s ease,
      transform 0.2s ease;

    &::after {
      width: 0%;
      min-height: 2px;
      content: "";
      position: absolute;
      bottom: -0.35rem;
      left: 0;
      background: var(--color-accent);
      border-radius: 4px;
      transition: width 0.3s ease-in-out;
    }

    &:hover {
      color: var(--color-primary-soft);
      background: rgba(191, 111, 52, 0.08);
      transform: translateY(-1px);

      &::after {
        width: 100%;
      }
    }

    @media (max-width: 960px) {
      display: inline-flex;
      width: 100%;
      font-size: 1.1rem;
      justify-content: flex-start;
      min-height: auto;
      padding: 0.4rem 0;
      border-radius: 0;

      &:hover {
        background: none;
        transform: none;
      }
    }
  `
);
