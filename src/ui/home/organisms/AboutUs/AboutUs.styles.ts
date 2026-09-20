import { css, cx } from "@emotion/css";
import { flex, content } from "@mixins";

export const main_container = cx(
  flex({}),
  css`
    width: 100%;
    padding: 4.5rem 0;
  `
);

export const container = cx(
  content({
    width: "1240px",
    padding: "0 24px",
  }),
  flex({
    justify: "space-between",
    align: "stretch",
    gap: "42px",
  }),
  css`
    width: 100%;
    position: relative;
    padding-top: 1rem;
    padding-bottom: 1rem;

    @media (max-width: 960px) {
      flex-direction: column;
    }
  `
);

export const copy = css`
  display: grid;
  gap: 1.15rem;
  width: min(100%, 42rem);
  align-content: center;
`;

export const eyebrow = css`
  display: inline-flex;
  width: fit-content;
  padding: 0.55rem 0.9rem;
  border-radius: 999px;
  background: rgba(191, 111, 52, 0.1);
  color: var(--color-accent-strong);
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  font-size: 0.86rem;
`;

export const lead = css`
  font-size: 1.24rem;
  color: var(--color-primary);
  max-width: 36rem;
  text-wrap: pretty;
`;

export const text = css`
  text-align: left;
  font-size: 1rem;
  color: var(--color-text-muted);
`;

export const highlight_grid = css`
  display: grid;
  gap: 1rem;
  margin-top: 0.9rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

export const highlight_card = css`
  position: relative;
  padding: 1.25rem;
  border-radius: 1.4rem;
  background: rgba(255, 253, 249, 0.9);
  border: 1px solid rgba(16, 37, 54, 0.08);
  box-shadow: var(--shadow-soft);
  transition:
    transform 0.24s ease,
    box-shadow 0.24s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-card);
  }
`;

export const highlight_title = css`
  margin-bottom: 0.55rem;
  color: var(--color-primary);
  font-size: 1.05rem;
`;

export const highlight_text = css`
  color: var(--color-text-muted);
  font-size: 0.95rem;
`;

export const visual_panel = css`
  position: relative;
  width: min(100%, 34rem);
  min-height: 33rem;
  padding: 1rem;
  border-radius: 2.2rem;
  background:
    radial-gradient(circle at top left, rgba(191, 111, 52, 0.18), transparent 30%),
    linear-gradient(180deg, rgba(255, 253, 249, 0.94), rgba(246, 240, 232, 0.84));
  border: 1px solid rgba(16, 37, 54, 0.08);
  box-shadow: var(--shadow-card);
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    right: -4rem;
    bottom: -4rem;
    width: 12rem;
    height: 12rem;
    border-radius: 50%;
    background: radial-gradient(
      circle,
      rgba(191, 111, 52, 0.16),
      rgba(191, 111, 52, 0) 70%
    );
    pointer-events: none;
  }

  @media (max-width: 960px) {
    min-height: 24rem;
  }
`;

export const location_chip = css`
  position: absolute;
  left: 1.2rem;
  top: 1.2rem;
  z-index: 2;
  display: inline-flex;
  align-items: center;
  min-height: 2.5rem;
  padding: 0.55rem 0.9rem;
  border-radius: 999px;
  background: rgba(16, 37, 54, 0.9);
  color: var(--color-on-dark);
  font-size: 0.8rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  box-shadow: var(--shadow-soft);
`;

export const img = css`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 1.7rem;
  transform: scale(1.01);
`;

export const quote_card = css`
  position: absolute;
  right: 1.2rem;
  bottom: 1.2rem;
  width: min(80%, 17rem);
  padding: 1rem 1.1rem 1rem 1.3rem;
  border-radius: 1.2rem;
  background: rgba(16, 37, 54, 0.92);
  box-shadow: var(--shadow-soft);

  &::before {
    content: "";
    position: absolute;
    inset: 0 auto 0 0;
    width: 4px;
    border-radius: 999px;
    background: linear-gradient(
      180deg,
      rgba(191, 111, 52, 1),
      rgba(191, 111, 52, 0.16)
    );
  }
`;

export const quote = css`
  color: var(--color-on-dark);
  font-size: 0.95rem;
  line-height: 1.5;
`;
