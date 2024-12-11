import { css, cx, keyframes } from "@emotion/css";
import { flex } from "@mixins";

export const animate8345 = keyframes`
0%,100% {
  filter: hue-rotate(0deg);
}

50% {
  filter: hue-rotate(360deg);
}
`;

export const container = cx(
  flex({}),
  css`
    position: fixed;
    z-index: 99999;
    background: rgb(0, 0, 0, 0.8);
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
  `
);

export const loader = css`
  color: rgb(0, 0, 0);
  background: linear-gradient(to right, #3498db, #77c9ff);
  font-size: 40px;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  animation: ${animate8345} 9s linear infinite;
  font-weight: bold;
  position: absolute;
  left: 50%;
  top: 10%;
  transform: translateX(-50%);
`;
