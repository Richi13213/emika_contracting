import { css, cx, keyframes } from "@emotion/css";
import { flex } from "@mixins";

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const container = cx(
  flex({}),
  css`
    position: fixed;
    inset: 0;
    z-index: 99999;
    background: rgba(9, 24, 35, 0.42);
    backdrop-filter: blur(8px);
  `
);

export const panel = cx(
  flex({
    direction: "column",
    gap: "16px",
  }),
  css`
    min-width: 280px;
    padding: 1.8rem;
    border-radius: 1.5rem;
    background: rgba(255, 253, 249, 0.96);
    box-shadow: var(--shadow-card);
  `
);

export const spinner = css`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  border: 4px solid rgba(16, 37, 54, 0.12);
  border-top-color: var(--color-accent);
  animation: ${spin} 0.9s linear infinite;
`;

export const loader = css`
  color: var(--color-primary);
  font-size: 1rem;
  font-weight: 700;
`;
