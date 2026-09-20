import { css, cx } from "@emotion/css";
import { content, flex } from "@mixins";

export const footer = cx(
  flex({}),
  css`
    width: 100%;
  `
);

export const container = cx(
  content({
    width: "1240px",
    padding: "0 24px",
  }),
  css`
    position: relative;
    display: grid;
    gap: 2rem;
    padding-top: 2.5rem;
    padding-bottom: 1.5rem;
    border-radius: 2.2rem 2.2rem 0 0;
    background:
      linear-gradient(135deg, rgba(16, 37, 54, 0.98), rgba(12, 29, 42, 0.92)),
      var(--color-primary);
    box-shadow: var(--shadow-card);
    overflow: hidden;

    @media (min-width: 960px) {
      grid-template-columns: 1.2fr 0.8fr;
    }
  `
);

export const ambient_orb = css`
  position: absolute;
  width: 18rem;
  height: 18rem;
  right: -6rem;
  top: -6rem;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(191, 111, 52, 0.24),
    rgba(191, 111, 52, 0) 72%
  );
  pointer-events: none;
`;

export const brand_block = css`
  display: grid;
  gap: 1rem;
  position: relative;
  z-index: 1;
`;

export const logo = css`
  color: var(--color-on-dark);
  text-decoration: none;
  font-family: "Space Grotesk", sans-serif;
  font-size: clamp(1.8rem, 3vw, 2.5rem);
  font-weight: 700;
  letter-spacing: -0.04em;
`;

export const description = css`
  max-width: 34rem;
  color: rgba(247, 244, 238, 0.78);
  font-size: 1rem;
`;

export const columns = css`
  display: grid;
  gap: 1.5rem;
  position: relative;
  z-index: 1;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

export const column = css`
  display: grid;
  gap: 0.8rem;
  align-content: start;
`;

export const info_title = css`
  color: var(--color-accent-soft);
  font-family: "Space Grotesk", sans-serif;
  font-size: 1.1rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

export const info_text = css`
  color: rgba(247, 244, 238, 0.78);
  font-size: 0.98rem;
`;

export const info_link = css`
  color: var(--color-on-dark);
  text-decoration: none;
  font-weight: 600;
  width: fit-content;
  transition: color 0.2s ease;
  word-break: break-word;
  &:hover {
    color: var(--color-accent-soft);
  }
`;

export const bottom_bar = css`
  padding-top: 1.2rem;
  border-top: 1px solid rgba(247, 244, 238, 0.12);
  position: relative;
  z-index: 1;

  @media (min-width: 960px) {
    grid-column: 1 / -1;
  }
`;

export const bottom_text = css`
  color: rgba(247, 244, 238, 0.68);
  font-size: 0.92rem;
`;
