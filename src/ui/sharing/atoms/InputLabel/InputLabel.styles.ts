import { css } from "@emotion/css";
import { LabelInputStyleProps } from "@typing/styles";

export const label = ({
  focused,
  inputError,
  inputValid,
}: LabelInputStyleProps) => css`
  position: absolute;
  left: ${!focused ? `.75rem` : `.3rem`};
  top: ${!focused ? `50%` : `0%`};
  transition: all 0.3s ease-in-out;
  transform: ${!focused ? `translateY(-50%)` : `translateY(-110%)`};
  pointer-events: none;
  color: ${!focused ? `rgb(0, 0, 0, 0.4)` : `rgb(0, 0, 0, 0.8)`};
  ${focused && `font-size: 10px;`}
  ${inputError && `color: #DC3545;`}
  ${inputValid && `color: #198754;`}
`;
