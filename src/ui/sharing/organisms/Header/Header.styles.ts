import { css, cx } from "@emotion/css";
import { flex, content } from "@mixins";

export const header = (scrolled: boolean) => cx(
  flex({}),
  css`
    width: 100%;
    position: sticky;
    top: 0;
    left: 0;
    z-index: 100;
    padding: ${scrolled ? "0.55rem 0 0" : "0.9rem 0 0"};
    background: linear-gradient(
      180deg,
      rgba(244, 239, 231, 0.92),
      rgba(244, 239, 231, 0.58) 58%,
      rgba(244, 239, 231, 0)
    );
    transition:
      padding 0.3s ease,
      background 0.3s ease;
  `
);

export const container = (scrolled: boolean) =>
  cx(
    content({
      width: "1240px",
      padding: "20px 24px",
    }),
    flex({
      justify: "space-between",
      align: "center",
      gap: "20px",
    }),
    css`
      position: relative;
      min-height: ${scrolled ? "4rem" : "4.5rem"};
      border-radius: 999px;
      background: rgba(255, 253, 249, 0.78);
      border: 1px solid rgba(16, 37, 54, 0.1);
      box-shadow: 0 18px 42px rgba(9, 24, 35, 0.1);
      backdrop-filter: blur(18px);
      overflow: hidden;
      transition:
        min-height 0.3s ease,
        box-shadow 0.3s ease;

      &::before {
        content: "";
        position: absolute;
        inset: 0 auto 0 0;
        width: 11rem;
        background: linear-gradient(
          90deg,
          rgba(191, 111, 52, 0.1),
          rgba(191, 111, 52, 0)
        );
        pointer-events: none;
      }

      @media (max-width: 960px) {
        border-radius: 1.5rem;
      }
    `
  );

export const brand = cx(
  flex({
    justify: "flex-start",
    gap: "10px",
  }),
  css`
    text-decoration: none;
    color: var(--color-primary);
    flex-shrink: 0;
    transition: transform 0.25s ease;

    &:hover {
      transform: translateY(-1px);
    }
  `
);

export const logo_mark = css`
  font-family: "Space Grotesk", sans-serif;
  font-size: clamp(1.4rem, 2.2vw, 1.85rem);
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

export const logo_text = css`
  align-self: flex-end;
  padding-bottom: 0.18rem;
  font-size: 0.95rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--color-text-muted);
`;

export const desktop_navigation = css`
  display: flex;
  justify-content: center;
  flex: 1;
  min-width: 0;

  @media (max-width: 960px) {
    display: none;
  }
`;

export const cta = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.95rem 1.3rem;
  border-radius: 999px;
  background: linear-gradient(
    135deg,
    var(--color-primary),
    var(--color-primary-soft)
  );
  color: var(--color-on-dark);
  text-decoration: none;
  font-weight: 700;
  box-shadow: var(--shadow-soft);
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 22px 42px rgba(9, 24, 35, 0.18);
  }

  @media (max-width: 1100px) {
    display: none;
  }
`;

export const mobile_panel = (active: boolean) => css`
  display: none;

  @media (max-width: 960px) {
    display: grid;
    gap: 1rem;
    position: fixed;
    top: 5.6rem;
    left: 50%;
    width: min(calc(100% - 2rem), 30rem);
    padding: 1.5rem 1.5rem 1.65rem;
    background: rgba(247, 244, 238, 0.98);
    border: 1px solid rgba(16, 37, 54, 0.12);
    border-radius: 1.6rem;
    box-shadow: 0 30px 55px rgba(9, 24, 35, 0.14);
    transform: translate(-50%, ${active ? "0" : "-10px"});
    opacity: ${active ? "1" : "0"};
    visibility: ${active ? "visible" : "hidden"};
    pointer-events: ${active ? "auto" : "none"};
    transition:
      opacity 0.25s ease,
      transform 0.25s ease,
      visibility 0.25s ease;
  }
`;

export const mobile_cta = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0.95rem 1.2rem;
  border-radius: 1rem;
  background: linear-gradient(
    135deg,
    var(--color-primary),
    var(--color-primary-soft)
  );
  color: var(--color-on-dark);
  text-decoration: none;
  font-weight: 700;
`;

export const mobile_contact = css`
  text-decoration: none;
  color: var(--color-primary);
  font-weight: 700;
  text-align: center;
  padding: 0.65rem 0 0.2rem;
`;
