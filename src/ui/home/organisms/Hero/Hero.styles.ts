import { css, cx, keyframes } from "@emotion/css";
import { content, flex } from "@mixins";

const float = keyframes`
  0%, 100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-8px);
  }
`;

const rise = keyframes`
  0% {
    opacity: 0;
    transform: translateY(18px) scaleY(0.12);
  }

  100% {
    opacity: 1;
    transform: translateY(0) scaleY(1);
  }
`;

export const main_container = cx(
  flex({
    direction: 'column'
  }),
  css`
    width: 100%;
    padding: 2rem 2rem 0 2rem;
  `
);

export const container = cx(
  content({
    width: "1240px",
    padding: "36px 24px 46px",
  }),
  css`
    display: grid;
    grid-template-columns: minmax(0, 1.16fr) minmax(21rem, 0.84fr);
    align-items: end;
    gap: clamp(2rem, 4vw, 4.5rem);
    width: 100%;
    position: relative;
    min-height: 44rem;
    padding-top: 4.2rem;
    padding-bottom: 4rem;
    border-radius: 2.8rem;
    overflow: hidden;
    isolation: isolate;
    background:
      radial-gradient(circle at top left, rgba(191, 111, 52, 0.28), transparent 34%),
      linear-gradient(
        135deg,
        rgba(16, 37, 54, 1) 0%,
        rgba(19, 42, 58, 0.98) 48%,
        rgba(24, 56, 77, 0.9) 100%
      );
    box-shadow: var(--shadow-hero);

    &::before {
      content: "";
      position: absolute;
      inset: 0;
      background:
        linear-gradient(rgba(247, 244, 238, 0.06) 1px, transparent 1px),
        linear-gradient(90deg, rgba(247, 244, 238, 0.06) 1px, transparent 1px);
      background-size: 48px 48px;
      opacity: 0.35;
      pointer-events: none;
    }

    &::after {
      content: "";
      position: absolute;
      inset: 10% auto auto 48%;
      width: 18rem;
      height: 18rem;
      border-radius: 50%;
      border: 1px solid rgba(247, 244, 238, 0.1);
      opacity: 0.55;
      pointer-events: none;
    }

    @media (max-width: 1080px) {
      grid-template-columns: minmax(0, 1fr);
      align-items: start;
      padding-top: 2.5rem;
      padding-bottom: 2.5rem;
      min-height: auto;
    }
  `
);

export const ambient_orb = css`
  position: absolute;
  width: 24rem;
  height: 24rem;
  right: -7rem;
  top: -7rem;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(191, 111, 52, 0.42),
    rgba(191, 111, 52, 0) 70%
  );
  opacity: 0.82;
  z-index: 0;
  pointer-events: none;
`;

export const scene = css`
  position: absolute;
  inset: auto 0 0 0;
  height: 18.5rem;
  pointer-events: none;
  z-index: 0;
  mask-image: linear-gradient(
    180deg,
    transparent 0%,
    rgba(0, 0, 0, 0.2) 16%,
    rgba(0, 0, 0, 0.75) 46%,
    rgba(0, 0, 0, 1) 100%
  );

  @media (max-width: 960px) {
    height: 13rem;
    opacity: 0.8;
  }
`;

const skylineLayer = css`
  position: absolute;
  inset: auto 0 0 0;
  height: 100%;
`;

export const skyline_back = cx(
  skylineLayer,
  css`
    opacity: 0.28;
    filter: blur(0.3px);
  `
);

export const skyline_front = cx(
  skylineLayer,
  css`
    opacity: 0.56;
  `
);

export const tower = css`
  position: absolute;
  bottom: 0;
  border-radius: 1rem 1rem 0 0;
  border: 1px solid rgba(247, 244, 238, 0.12);
  border-bottom: 0;
  transform-origin: bottom;
  opacity: 0;
  transform: translateY(18px) scaleY(0.12);
  overflow: hidden;
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.08),
    0 0 0 1px rgba(255, 255, 255, 0.02);

  ${scene}[data-visible="true"] & {
    animation: ${rise} 0.9s var(--ease-out-expo) forwards;
  }

  &::before {
    content: "";
    position: absolute;
    inset: 0.85rem 0.7rem 1rem;
    background-image:
      repeating-linear-gradient(
        180deg,
        rgba(247, 244, 238, 0.16) 0 0.5rem,
        transparent 0.5rem 1.45rem
      ),
      repeating-linear-gradient(
        90deg,
        rgba(247, 244, 238, 0.12) 0 0.55rem,
        transparent 0.55rem 1.3rem
      );
    opacity: 0.45;
  }

  &::after {
    content: "";
    position: absolute;
    top: -0.45rem;
    left: 50%;
    width: 40%;
    height: 0.45rem;
    transform: translateX(-50%);
    border-radius: 999px 999px 0 0;
    background: rgba(247, 244, 238, 0.16);
  }
`;

export const tower_back = css`
  background: linear-gradient(
    180deg,
    rgba(247, 244, 238, 0.16),
    rgba(247, 244, 238, 0.05)
  );
`;

export const tower_front = css`
  background: linear-gradient(
    180deg,
    rgba(247, 244, 238, 0.22),
    rgba(247, 244, 238, 0.08)
  );
`;

export const crane = css`
  position: absolute;
  right: 16%;
  bottom: 6.6rem;
  width: 15rem;
  height: 11rem;
  opacity: 0;
  transform: translateY(18px);

  ${scene}[data-visible="true"] & {
    animation: ${rise} 0.95s var(--ease-out-expo) forwards;
    animation-delay: 540ms;
  }

  @media (max-width: 960px) {
    right: 8%;
    bottom: 4.2rem;
    width: 10rem;
    height: 7.5rem;
  }
`;

export const crane_tower = css`
  position: absolute;
  bottom: 0;
  left: 2.1rem;
  width: 0.35rem;
  height: 100%;
  border-radius: 999px;
  background: rgba(247, 244, 238, 0.22);
`;

export const crane_arm = css`
  position: absolute;
  top: 1.2rem;
  left: 2.1rem;
  width: 11rem;
  height: 0.3rem;
  border-radius: 999px;
  background: rgba(247, 244, 238, 0.22);

  @media (max-width: 960px) {
    width: 7.2rem;
  }
`;

export const crane_counter = css`
  position: absolute;
  top: 1rem;
  left: 0.1rem;
  width: 2.4rem;
  height: 0.6rem;
  border-radius: 999px;
  background: rgba(191, 111, 52, 0.65);
`;

export const crane_cable = css`
  position: absolute;
  top: 1.35rem;
  right: 1.8rem;
  width: 0.14rem;
  height: 4rem;
  background: rgba(247, 244, 238, 0.22);

  @media (max-width: 960px) {
    right: 1.1rem;
    height: 2.8rem;
  }
`;

export const crane_hook = css`
  position: absolute;
  top: 5.2rem;
  right: 1.42rem;
  width: 0.85rem;
  height: 1.1rem;
  border: 0.16rem solid rgba(191, 111, 52, 0.8);
  border-top: 0;
  border-left: 0;
  border-radius: 0 0 0.7rem 0;

  @media (max-width: 960px) {
    top: 4rem;
    right: 0.85rem;
  }
`;

export const copy = css`
  position: relative;
  z-index: 2;
  display: grid;
  gap: 1.4rem;
  align-content: center;
  width: 100%;
  max-width: 43rem;
  padding-bottom: 1.2rem;

  @media (max-width: 1080px) {
    max-width: 100%;
    padding-bottom: 0;
  }
`;

export const eyebrow = css`
  display: inline-flex;
  align-items: center;
  width: fit-content;
  min-height: 2.4rem;
  padding: 0.55rem 0.9rem;
  border-radius: 999px;
  background: rgba(247, 244, 238, 0.08);
  border: 1px solid rgba(247, 244, 238, 0.14);
  color: var(--color-accent-soft);
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  font-size: 0.86rem;
`;

export const title = css`
  max-width: 10.5ch;
  font-family: "Space Grotesk", sans-serif;
  font-size: clamp(3.35rem, 6vw, 6rem);
  line-height: 0.9;
  letter-spacing: -0.08em;
  color: var(--color-on-dark);
`;

export const description = css`
  max-width: 34rem;
  font-size: clamp(1.05rem, 1.8vw, 1.24rem);
  color: rgba(247, 244, 238, 0.82);
  text-wrap: pretty;
`;

export const actions = cx(
  flex({
    justify: "flex-start",
    gap: "14px",
  }),
  css`
    flex-wrap: wrap;
  `
);

const buttonBase = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 3.5rem;
  padding: 0.95rem 1.45rem;
  border-radius: 999px;
  text-decoration: none;
  font-weight: 800;
  transition:
    transform 0.2s ease,
    background 0.2s ease,
    color 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;

export const primary_button = cx(
  buttonBase,
  css`
    background: var(--color-accent);
    color: var(--color-primary-strong);
    box-shadow: 0 18px 38px rgba(191, 111, 52, 0.22);

    &:hover {
      background: #d18145;
    }
  `
);

export const secondary_button = cx(
  buttonBase,
  css`
    background: rgba(247, 244, 238, 0.08);
    color: var(--color-on-dark);
    border: 1px solid rgba(247, 244, 238, 0.16);
  `
);

export const highlight_list = css`
  display: grid;
  gap: 0.85rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

export const highlight_item = css`
  display: flex;
  align-items: flex-start;
  gap: 0.7rem;
  min-height: 100%;
  padding: 0.95rem 1rem;
  border-radius: 1.2rem;
  background: rgba(247, 244, 238, 0.07);
  border: 1px solid rgba(247, 244, 238, 0.1);
  color: rgba(247, 244, 238, 0.9);
  font-size: 0.98rem;

  &::before {
    content: "";
    width: 0.65rem;
    height: 0.65rem;
    border-radius: 999px;
    background: var(--color-accent);
    box-shadow: 0 0 0 5px rgba(191, 111, 52, 0.14);
    flex-shrink: 0;
  }
`;

export const stats_grid = css`
  display: grid;
  gap: 1rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

export const stat_card = css`
  position: relative;
  padding: 1.2rem;
  border-radius: 1.35rem;
  background: rgba(247, 244, 238, 0.08);
  border: 1px solid rgba(247, 244, 238, 0.14);
  backdrop-filter: blur(12px);
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0 auto 0 0;
    width: 4px;
    background: linear-gradient(
      180deg,
      rgba(191, 111, 52, 0.92),
      rgba(247, 244, 238, 0.25)
    );
  }
`;

export const stat_value = css`
  display: block;
  margin-bottom: 0.35rem;
  color: var(--color-on-dark);
  font-family: "Space Grotesk", sans-serif;
  font-size: clamp(1.7rem, 3vw, 2.3rem);
  line-height: 1;
`;

export const stat_label = css`
  color: rgba(247, 244, 238, 0.76);
  font-size: 0.93rem;
`;

export const media_shell = css`
  position: relative;
  min-height: 35rem;
  width: 100%;
  max-width: 33rem;
  z-index: 2;
  justify-self: end;
  align-self: end;
  margin-top: 2rem;

  @media (max-width: 1080px) {
    width: 100%;
    max-width: 100%;
    min-height: 30rem;
    justify-self: stretch;
    align-self: stretch;
    margin-top: 0.75rem;
  }
`;

export const media_frame = css`
  position: absolute;
  inset: 0;
  padding: 1.1rem;
  border-radius: 2.2rem;
  background:
    linear-gradient(180deg, rgba(247, 244, 238, 0.2), rgba(247, 244, 238, 0.04)),
    rgba(247, 244, 238, 0.06);
  border: 1px solid rgba(247, 244, 238, 0.16);
  backdrop-filter: blur(18px);
  box-shadow: 0 26px 62px rgba(9, 24, 35, 0.2);
`;

export const hero_image = css`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 1.6rem;
  transform: scale(1.02);
`;

export const image_tint = css`
  position: absolute;
  inset: 1.1rem;
  border-radius: 1.6rem;
  background:
    linear-gradient(180deg, rgba(9, 24, 35, 0), rgba(9, 24, 35, 0.24)),
    linear-gradient(120deg, rgba(191, 111, 52, 0.18), rgba(191, 111, 52, 0));
  pointer-events: none;
`;

const floatingCard = css`
  position: absolute;
  display: flex;
  gap: 0.8rem;
  align-items: center;
  width: min(78%, 18rem);
  padding: 0.95rem;
  border-radius: 1.25rem;
  background: rgba(255, 253, 249, 0.95);
  color: var(--color-primary);
  box-shadow: var(--shadow-soft);
  animation: ${float} 6s ease-in-out infinite;
  z-index: 2;
`;

export const floating_card_primary = cx(
  floatingCard,
  css`
    right: -0.8rem;
    top: 2.4rem;
  `
);

export const floating_card_secondary = cx(
  floatingCard,
  css`
    left: -0.9rem;
    bottom: 2.4rem;
    animation-delay: 1.5s;
  `
);

export const floating_image = css`
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 0.95rem;
  object-fit: cover;
  flex-shrink: 0;
`;

export const floating_content = css`
  display: grid;
  gap: 0.2rem;
`;

export const floating_label = css`
  font-size: 0.74rem;
  font-weight: 800;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-accent-strong);
`;

export const floating_title = css`
  font-size: 1rem;
  line-height: 1.2;
`;

export const trust_band = css`
  ${flex({})}
  width: 100%;
  margin-top: 20px;
`;

export const trust_band_inner = cx(
  content({
    width: "1240px",
    padding: "0",
  }),
  css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.95rem;
    padding: 1.05rem 1.2rem;
    border-radius: 1.4rem;
    background: rgba(255, 253, 249, 0.78);
    border: 1px solid rgba(16, 37, 54, 0.08);
    box-shadow: var(--shadow-soft);
  `
);

export const trust_label = css`
  display: inline-flex;
  align-items: center;
  min-height: 2.15rem;
  padding: 0.45rem 0.75rem;
  border-radius: 999px;
  background: rgba(16, 37, 54, 0.06);
  font-size: 0.82rem;
  font-weight: 800;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-muted);
`;

export const trust_items = css`
  display: flex;
  flex-wrap: wrap;
  gap: 0.7rem;
  width: 100%;

  & span {
    padding: 0.6rem 0.8rem;
    border-radius: 999px;
    background: rgba(16, 37, 54, 0.06);
    color: var(--color-primary);
    font-size: 0.92rem;
    font-weight: 700;
  }
`;
