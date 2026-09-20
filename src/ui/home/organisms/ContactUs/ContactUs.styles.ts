import { css, cx } from "@emotion/css";
import { content, flex } from "@mixins";

export const main_container = cx(
  flex({}),
  css`
    width: 100%;
    padding: 4.5rem 0 5rem;
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
    position: relative;
    flex-direction: column;
  `
);

export const ambient_wash = css`
  position: absolute;
  inset: -4rem -2rem auto auto;
  width: 18rem;
  height: 18rem;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(191, 111, 52, 0.18),
    rgba(191, 111, 52, 0) 74%
  );
  pointer-events: none;
`;

export const section_intro = css`
  display: grid;
  gap: 1rem;
  max-width: 40rem;
  position: relative;
  z-index: 1;
`;

export const eyebrow = css`
  display: inline-flex;
  width: fit-content;
  min-height: 2.3rem;
  padding: 0.5rem 0.9rem;
  border-radius: 999px;
  background: rgba(191, 111, 52, 0.08);
  color: var(--color-accent-strong);
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  font-size: 0.86rem;
`;

export const description = css`
  color: var(--color-text-muted);
  font-size: 1rem;
  text-wrap: pretty;
`;

export const content_container = css`
  display: grid;
  gap: 1.4rem;
  grid-template-rows: auto auto;
`;

export const info_panel = css`
  display: grid;
  gap: 1.25rem;
`;

export const contact_cards = css`
  display: grid;
  gap: 1rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

export const contact_card = css`
  display: grid;
  gap: 0.65rem;
  padding: 1.2rem;
  border-radius: 1.35rem;
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

export const card_label = css`
  font-size: 0.76rem;
  font-weight: 800;
  letter-spacing: 0.11em;
  text-transform: uppercase;
  color: var(--color-accent-strong);
`;

export const card_value = css`
  color: var(--color-primary);
  font-size: 1rem;
  font-weight: 700;
  text-decoration: none;
`;

export const form_panel = css`
  min-width: 0;
`;

export const text_container = cx(
  flex({
    direction: "column",
    gap: "20px",
    justify: "flex-start",
  }),
  css`
    padding: 1.6rem;
    border-radius: 2rem;
    background:
      linear-gradient(180deg, rgba(16, 37, 54, 0.98), rgba(12, 29, 42, 0.96));
    box-shadow: var(--shadow-card);
  `
);

export const text = css`
  text-align: left;
  font-size: 1.05rem;
  font-weight: 500;
  color: var(--color-on-dark);
`;

export const benefit_list = css`
  display: grid;
  gap: 0.85rem;
`;

export const benefit_item = css`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  color: rgba(247, 244, 238, 0.82);
  font-size: 0.95rem;

  &::before {
    content: "";
    width: 0.6rem;
    height: 0.6rem;
    border-radius: 999px;
    background: var(--color-accent);
    flex-shrink: 0;
  }
`;
