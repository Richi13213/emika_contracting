import { InputLabel, Input, ErrorLabel } from "@sharing/atoms";
import type { InputFormProps } from "@typing/props";
import * as styles from "./InputForm.styles";

export default function InputForm({
  id,
  type,
  label,
  error,
  touched,
  ...props
}: InputFormProps) {
  const inputError = Boolean(touched && error);
  const inputValid = Boolean(touched && !error);

  return (
    <div className={styles.input_container}>
      <InputLabel id={id}>{label}</InputLabel>
      <Input
        id={id}
        type={type}
        inputError={inputError}
        inputValid={inputValid}
        aria-invalid={inputError || undefined}
        aria-describedby={inputError ? `${id}-error` : undefined}
        {...props}
      />
      {inputError && (
        <ErrorLabel id={`${id}-error`}>
          {error}
        </ErrorLabel>
      )}
    </div>
  );
}
