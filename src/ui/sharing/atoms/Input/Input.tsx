import { FocusEvent } from "react";
import { InputProps } from "@typing/props";
import * as styles from "./Input.styles";

export default function Input({
  error,
  touched,
  id,
  type,
  handleFocus,
  inputError,
  inputValid,
  ...props
}: InputProps) {
  return (
    <input
      {...props}
      className={styles.input({ inputError, inputValid })}
      type={type}
      onFocus={handleFocus}
      onBlur={(e: FocusEvent<HTMLInputElement, Element>) => {
        handleFocus();
        props.onBlur(e);
      }}
    />
  );
}
