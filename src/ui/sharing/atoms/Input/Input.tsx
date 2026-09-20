import { cx } from "@emotion/css";
import { InputProps } from "@typing/props";
import * as styles from "./Input.styles";

export default function Input({
  className,
  inputError,
  inputValid,
  ...props
}: InputProps) {
  return (
    <input
      {...props}
      className={cx(styles.input({ inputError, inputValid }), className)}
    />
  );
}
