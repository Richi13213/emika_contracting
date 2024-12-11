import { css } from "@emotion/react";

export const globals = css`
  @import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Exo+2:ital,wght@0,100..900;1,100..900&display=swap");
  * {
    box-sizing: border-box;
    outline: 0;
    padding: 0;
    margin: 0;
    font-family: "Exo 2", sans-serif;
    font-optical-sizing: auto;
    &::before,
    &::after {
      box-sizing: border-box;
    }
  }

  :root {
    --accent-color: #0f2942;
    --accent-color-hover: #d7efff;
    --text-color: #000000;
    --text-black: #000000;
    --text-white: #ffffff;
    --hero-text: #FDFBF6;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
  }

  #root {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background: #FDFBF6;
  }
  body,
  html {
    margin: 0;
    padding: 0;
    height: 100%;
  }

  button {
    border: none;
  }
  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type="number"] {
    -moz-appearance: textfield;
  }
  .loader {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    position: relative;
    background: #3498db;
    box-shadow: 0 0 30px 4px #3498db inset, 0 5px 12px #3498db;
    overflow: hidden;
  }

  .loader:before,
  .loader:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 45%;
    top: -40%;
    background-color: #77c9ff;
    animation: wave 5s linear infinite;
  }

  .loader:before {
    border-radius: 30%;
    background: #ddf2ff;
    animation: wave 5s linear infinite;
  }

  @keyframes wave {
    0% {
      transform: rotate(0);
    }

    100% {
      transform: rotate(360deg);
    }
  }
  .vertical-timeline-element-icon {
    transition: all 0.5s ease-in-out;
  }
`;
