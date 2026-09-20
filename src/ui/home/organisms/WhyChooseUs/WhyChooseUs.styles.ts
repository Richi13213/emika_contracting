import { css, cx } from "@emotion/css";
import { content, flex } from "@mixins";

export const main_container = cx(
  flex({}),
  css`
    width: 100%;
    padding: 4.5rem 2rem;
  `
);

export const container = cx(
  content({
    width: "1240px",
    padding: "0 24px",
  }),
  flex({
    justify: "flex-start",
    align: "stretch",
    gap: "24px",
  }),
  css`
    width: 100%;
    padding-top: 2.4rem;
    padding-bottom: 2.6rem;
    border-radius: 2.6rem;
    background:
      radial-gradient(circle at top right, rgba(191, 111, 52, 0.2), transparent 26%),
      linear-gradient(180deg, rgba(16, 37, 54, 0.98), rgba(12, 29, 42, 0.96));
    flex-direction: column;
    box-shadow: var(--shadow-card);
    overflow: hidden;
    position: relative;
  `
);

export const ambient_orb = css`
  position: absolute;
  inset: auto auto -8rem -8rem;
  width: 22rem;
  height: 22rem;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(191, 111, 52, 0.24),
    rgba(191, 111, 52, 0) 72%
  );
  pointer-events: none;
`;

export const intro = css`
  display: grid;
  gap: 1rem;
  max-width: 42rem;
  position: relative;
  z-index: 1;

  & h2 {
    color: var(--color-on-dark);
  }
`;

export const eyebrow = css`
  display: inline-flex;
  width: fit-content;
  padding: 0.55rem 0.9rem;
  border-radius: 999px;
  background: rgba(247, 244, 238, 0.08);
  color: var(--color-accent-soft);
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  font-size: 0.86rem;
`;

export const description = css`
  color: rgba(247, 244, 238, 0.78);
  font-size: 1rem;
`;

export const values_grid = css`
  display: grid;
  gap: 1rem;
  position: relative;
  z-index: 1;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

export const value_card = css`
  display: grid;
  gap: 0.8rem;
  padding: 1.4rem;
  border-radius: 1.4rem;
  background: rgba(247, 244, 238, 0.08);
  border: 1px solid rgba(247, 244, 238, 0.12);
  transition:
    transform 0.24s ease,
    background-color 0.24s ease;

  &:hover {
    transform: translateY(-4px);
    background: rgba(247, 244, 238, 0.12);
  }
`;

export const value_index = css`
  color: var(--color-accent-soft);
  font-family: "Space Grotesk", sans-serif;
  font-size: 0.95rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
`;

export const value_title = css`
  color: var(--color-on-dark);
  font-size: 1.2rem;
  line-height: 1.15;
`;

export const value_text = css`
  color: rgba(247, 244, 238, 0.76);
  font-size: 0.98rem;
`;

export const process_panel = css`
  display: grid;
  gap: 1.4rem;
  padding: 1.5rem;
  border-radius: 1.8rem;
  background: rgba(247, 244, 238, 0.95);
  box-shadow: var(--shadow-soft);
  position: relative;
  z-index: 1;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0 auto 0 0;
    width: 4px;
    background: linear-gradient(
      180deg,
      rgba(191, 111, 52, 1),
      rgba(16, 37, 54, 0.06)
    );
  }

  @media (min-width: 960px) {
    grid-template-columns: minmax(0, 0.82fr) minmax(0, 1.18fr);
  }
`;

export const process_intro = css`
  display: grid;
  gap: 0.8rem;
  align-content: start;
`;

export const process_title = css`
  color: var(--color-primary);
  font-family: "Space Grotesk", sans-serif;
  font-size: clamp(1.8rem, 3vw, 2.5rem);
  line-height: 1;
`;

export const process_description = css`
  color: var(--color-text-muted);
  font-size: 0.98rem;
`;

export const process_list = css`
  display: grid;
  gap: 1rem;
`;

export const process_item = css`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 1rem;
  align-items: start;
  padding: 1rem 0;
  border-top: 1px solid rgba(16, 37, 54, 0.1);

  &:first-of-type {
    padding-top: 0;
    border-top: 0;
  }
`;

export const process_step = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  border-radius: 999px;
  background: rgba(191, 111, 52, 0.14);
  color: var(--color-accent-strong);
  font-weight: 800;
`;

export const process_content = css`
  display: grid;
  gap: 0.45rem;
`;

export const process_item_title = css`
  color: var(--color-primary);
  font-size: 1.02rem;
`;

export const process_item_text = css`
  color: var(--color-text-muted);
  font-size: 0.95rem;
`;
