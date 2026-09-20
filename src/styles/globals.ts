import { css, keyframes } from "@emotion/react";

const ambientShift = keyframes`
  0%, 100% {
    transform: translate3d(0, 0, 0) scale(1);
  }

  50% {
    transform: translate3d(2%, -2%, 0) scale(1.04);
  }
`;

export const globals = css`
  @import url("https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Space+Grotesk:wght@500;700&display=swap");

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;

    &::before,
    &::after {
      box-sizing: border-box;
    }
  }

  :root {
    --color-primary: #102536;
    --color-primary-strong: #091823;
    --color-primary-soft: #214157;
    --color-accent: #bf6f34;
    --color-accent-strong: #a1561f;
    --color-accent-soft: #f1d3bc;
    --color-background: #f4efe7;
    --color-surface: rgba(255, 251, 245, 0.9);
    --color-surface-solid: #fffdf9;
    --color-surface-dark: #173042;
    --color-border: rgba(16, 37, 54, 0.12);
    --color-border-strong: rgba(16, 37, 54, 0.2);
    --color-text: #102536;
    --color-text-muted: #5c6b78;
    --color-on-dark: #f7f4ee;
    --shadow-soft: 0 24px 60px rgba(9, 24, 35, 0.1);
    --shadow-card: 0 20px 50px rgba(9, 24, 35, 0.14);
    --shadow-hero: 0 32px 90px rgba(9, 24, 35, 0.2);
    --radius-xl: 2rem;
    --radius-lg: 1.5rem;
    --radius-md: 1rem;
    --ease-out-expo: cubic-bezier(0.19, 1, 0.22, 1);
    color-scheme: light;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
  }

  #root {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
    min-height: 100%;
    background:
      radial-gradient(circle at top left, rgba(191, 111, 52, 0.16), transparent 30%),
      radial-gradient(circle at 90% 15%, rgba(16, 37, 54, 0.1), transparent 26%),
      linear-gradient(180deg, #fbf7f1 0%, var(--color-background) 100%);
  }

  html {
    margin: 0;
    padding: 0;
    height: 100%;
    scroll-behavior: smooth;
    scroll-padding-top: 7rem;
    background: var(--color-background);
  }

  body {
    min-height: 100%;
    color: var(--color-text);
    background: transparent;
    font-family: "Manrope", sans-serif;
    line-height: 1.5;
  }

  body::before {
    content: "";
    position: fixed;
    inset: 0;
    pointer-events: none;
    background-image:
      linear-gradient(rgba(16, 37, 54, 0.035) 1px, transparent 1px),
      linear-gradient(90deg, rgba(16, 37, 54, 0.035) 1px, transparent 1px);
    background-size: 72px 72px;
    mask-image: radial-gradient(circle at center, rgba(0, 0, 0, 0.6), transparent 90%);
    opacity: 0.75;
    z-index: 0;
  }

  body::after {
    content: "";
    position: fixed;
    inset: -12%;
    pointer-events: none;
    background:
      radial-gradient(circle at 20% 20%, rgba(191, 111, 52, 0.12), transparent 24%),
      radial-gradient(circle at 78% 18%, rgba(16, 37, 54, 0.12), transparent 22%),
      radial-gradient(circle at 70% 72%, rgba(191, 111, 52, 0.08), transparent 18%);
    animation: ${ambientShift} 22s ease-in-out infinite;
    z-index: 0;
  }

  main,
  header,
  footer {
    position: relative;
    z-index: 1;
  }

  a {
    color: inherit;
  }

  button,
  input,
  select,
  textarea {
    font: inherit;
  }

  button {
    border: none;
    background: none;
  }

  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type="number"] {
    -moz-appearance: textfield;
  }
  img {
    display: block;
    max-width: 100%;
  }

  section {
    scroll-margin-top: 7rem;
  }

  ul,
  ol {
    padding-left: 0;
  }

  li {
    list-style: none;
  }

  ::selection {
    background: var(--color-accent-soft);
    color: var(--color-primary-strong);
  }

  :focus-visible {
    outline: 3px solid var(--color-accent);
    outline-offset: 4px;
    border-radius: 0.4rem;
  }

  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }

    body::after {
      animation: none !important;
    }
  }
`;
