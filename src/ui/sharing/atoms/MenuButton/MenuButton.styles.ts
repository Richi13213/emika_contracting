import { css } from "@emotion/css";

export const hamburguer = (active: boolean) => css`
  display: none;

  @media (max-width: 960px) {
    display: inline-grid;
    gap: 0.32rem;
    padding: 0.72rem;
    border-radius: 1rem;
    background: rgba(16, 37, 54, 0.06);
    border: 1px solid rgba(16, 37, 54, 0.08);
    z-index: 110;
    transition:
      background-color 0.2s ease,
      transform 0.2s ease;

    &:hover {
      background: rgba(191, 111, 52, 0.12);
      transform: translateY(-1px);
    }
  }

  & span:nth-of-type(1) {
    transform: ${active ? "translateY(0.44rem) rotate(45deg)" : "none"};
  }

  & span:nth-of-type(2) {
    opacity: ${active ? "0" : "1"};
  }

  & span:nth-of-type(3) {
    transform: ${active ? "translateY(-0.44rem) rotate(-45deg)" : "none"};
  }
`;

export const line = css`
  width: 1.45rem;
  height: 2px;
  border-radius: 999px;
  background: var(--color-primary);
  transition:
    transform 0.25s ease,
    opacity 0.25s ease,
    background-color 0.25s ease;
`;
