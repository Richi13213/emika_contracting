import { css } from "@emotion/css";

export const card = css`
  position: relative;
  display: grid;
  height: 100%;
  border-radius: 1.9rem;
  overflow: hidden;
  background: rgba(255, 253, 249, 0.92);
  border: 1px solid rgba(16, 37, 54, 0.08);
  box-shadow: var(--shadow-soft);
  transition:
    transform 0.28s ease,
    box-shadow 0.28s ease,
    border-color 0.28s ease;

  &::before {
    content: "";
    position: absolute;
    inset: auto auto 0 0;
    width: 100%;
    height: 6px;
    background: linear-gradient(90deg, var(--color-accent), rgba(191, 111, 52, 0));
    opacity: 0;
    transition: opacity 0.28s ease;
  }

  &:hover {
    transform: translateY(-6px);
    box-shadow: var(--shadow-card);
    border-color: rgba(191, 111, 52, 0.18);

    &::before {
      opacity: 1;
    }
  }
`;

export const image_wrap = css`
  position: relative;
  aspect-ratio: 16 / 10;
  overflow: hidden;
`;

export const image = css`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition:
    transform 0.4s ease,
    filter 0.4s ease;

  ${card}:hover & {
    transform: scale(1.06);
    filter: saturate(1.08);
  }
`;

export const image_scrim = css`
  position: absolute;
  inset: 0;
  background:
    linear-gradient(180deg, rgba(9, 24, 35, 0), rgba(9, 24, 35, 0.3)),
    linear-gradient(120deg, rgba(191, 111, 52, 0.1), rgba(191, 111, 52, 0));
  pointer-events: none;
`;

export const text_card = css`
  display: grid;
  gap: 0.9rem;
  padding: 1.45rem;
`;

export const eyebrow = css`
  display: inline-flex;
  width: fit-content;
  min-height: 2.15rem;
  padding: 0.45rem 0.75rem;
  border-radius: 999px;
  background: rgba(191, 111, 52, 0.08);
  font-size: 0.76rem;
  font-weight: 800;
  letter-spacing: 0.11em;
  text-transform: uppercase;
  color: var(--color-accent-strong);
`;

export const title = css`
  font-size: 1.38rem;
  line-height: 1.05;
  color: var(--color-primary);
`;

export const text = css`
  font-size: 0.98rem;
  color: var(--color-text-muted);
  min-height: 4.5rem;
`;

export const footer_row = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.8rem;
  margin-top: 0.35rem;
  padding-top: 0.95rem;
  border-top: 1px solid rgba(16, 37, 54, 0.08);
`;

export const footer_text = css`
  color: var(--color-text-muted);
  font-size: 0.84rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
`;

export const footer_mark = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border-radius: 999px;
  background: rgba(16, 37, 54, 0.06);
  color: var(--color-primary);
  font-size: 1rem;
  font-weight: 800;
`;
