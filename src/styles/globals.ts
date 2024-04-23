import { css } from "@emotion/react";

export const globals = css`
  @import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap");
  * {
    box-sizing: border-box;
    outline: 0;
    padding: 0;
    margin: 0;
    font-family: "Open Sans", sans-serif;
    font-optical-sizing: auto;
    &::before,
    &::after {
      box-sizing: border-box;
    }
  }

  :root {
    --accent-color: #3498db;
    --text-color: #000000;
    --text-black: #000000;
    --text-white: #ffffff;
    --hero-text: #ffffff;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
  }

  #root {
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    overflow-x: hidden;
  }

  body {
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
  }

  button {
    border: none;
  }
`;
