import { css, keyframes } from "@emotion/css";

const drift = keyframes`
  0%, 100% {
    transform: translate3d(0, 0, 0) rotate(0deg);
  }

  50% {
    transform: translate3d(0, -18px, 0) rotate(-2deg);
  }
`;

const pulse = keyframes`
  0%, 100% {
    opacity: 0.48;
    transform: scale(1);
  }

  50% {
    opacity: 0.9;
    transform: scale(1.06);
  }
`;

const sheen = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-165%) skewX(-18deg);
  }

  20% {
    opacity: 0.38;
  }

  100% {
    opacity: 0;
    transform: translateX(185%) skewX(-18deg);
  }
`;

const revealBase = `
  opacity: 0;
  filter: blur(10px);
  transform:
    translate3d(
      calc(var(--parallax-x, 0px) + var(--reveal-x, 0px)),
      calc(var(--parallax-y, 0px) + var(--reveal-y, 38px)),
      0
    )
    scale(var(--reveal-scale, 0.985));
  transition:
    opacity 0.82s cubic-bezier(0.22, 1, 0.36, 1),
    transform 1s cubic-bezier(0.22, 1, 0.36, 1),
    filter 0.95s ease;
  transition-delay: var(--delay, 0ms);
  will-change: transform, opacity, filter;

  &[data-visible="true"] {
    opacity: 1;
    filter: blur(0);
    transform:
      translate3d(var(--parallax-x, 0px), var(--parallax-y, 0px), 0)
      scale(1);
  }

  @media (prefers-reduced-motion: reduce) {
    opacity: 1;
    filter: none;
    transform: none;
    transition: none;
    animation: none;
  }
`;

export const reveal_up = css`
  --reveal-y: 40px;
  ${revealBase}
`;

export const reveal_left = css`
  --reveal-x: -44px;
  --reveal-y: 18px;
  ${revealBase}
`;

export const reveal_right = css`
  --reveal-x: 44px;
  --reveal-y: 18px;
  ${revealBase}
`;

export const reveal_scale = css`
  --reveal-y: 18px;
  --reveal-scale: 0.94;
  ${revealBase}
`;

export const parallax_layer = css`
  transform: translate3d(var(--parallax-x, 0px), var(--parallax-y, 0px), 0);
  will-change: transform;
  transition: transform 0.16s linear;

  @media (prefers-reduced-motion: reduce) {
    transform: none;
    transition: none;
  }
`;

export const drift_slow = css`
  animation: ${drift} 14s ease-in-out infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

export const drift_reverse = css`
  animation: ${drift} 18s ease-in-out infinite reverse;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

export const pulse_glow = css`
  animation: ${pulse} 7s ease-in-out infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

export const sheen_overlay = css`
  position: relative;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    inset: -40% auto -40% -70%;
    width: 42%;
    background: linear-gradient(
      120deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.38) 48%,
      rgba(255, 255, 255, 0) 100%
    );
    transform: translateX(-165%) skewX(-18deg);
    animation: ${sheen} 9.6s ease-in-out infinite;
    pointer-events: none;
  }

  @media (prefers-reduced-motion: reduce) {
    &::after {
      animation: none;
      opacity: 0;
    }
  }
`;
