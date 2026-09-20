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
    position: relative;
    flex-direction: column;
    padding-top: 2.4rem;
    padding-bottom: 2.8rem;
    border-radius: 2.4rem;
    background:
      linear-gradient(180deg, rgba(255, 253, 249, 0.78), rgba(255, 253, 249, 0.46)),
      linear-gradient(180deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.4));
    border: 1px solid rgba(16, 37, 54, 0.08);
    box-shadow: var(--shadow-soft);
    overflow: hidden;
  `
);

export const ambient_beam = css`
  position: absolute;
  inset: -6rem auto auto 56%;
  width: 18rem;
  height: 18rem;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(191, 111, 52, 0.22),
    rgba(191, 111, 52, 0) 70%
  );
  pointer-events: none;
`;

export const heading_row = css`
  display: grid;
  gap: 1.5rem;
  align-items: end;
  position: relative;
  z-index: 1;

  @media (min-width: 960px) {
    grid-template-columns: minmax(0, 1fr) auto;
  }
`;

export const heading_copy = css`
  display: grid;
  gap: 1rem;
`;

export const eyebrow = css`
  display: inline-flex;
  width: fit-content;
  min-height: 2.35rem;
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
  max-width: 40rem;
  color: var(--color-text-muted);
  font-size: 1rem;
  text-wrap: pretty;
`;

export const section_cta = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 3.5rem;
  padding: 0.95rem 1.3rem;
  border-radius: 999px;
  background: rgba(16, 37, 54, 0.06);
  color: var(--color-primary);
  text-decoration: none;
  font-weight: 800;
  border: 1px solid rgba(16, 37, 54, 0.08);
  transition:
    transform 0.24s ease,
    background-color 0.24s ease,
    box-shadow 0.24s ease;

  &:hover {
    transform: translateY(-2px);
    background: rgba(191, 111, 52, 0.12);
    box-shadow: var(--shadow-soft);
  }
`;

export const services_grid = css`
  display: grid;
  gap: 1.25rem;
  position: relative;
  z-index: 1;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: 1120px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

export const service_item = css`
  min-width: 0;
`;
