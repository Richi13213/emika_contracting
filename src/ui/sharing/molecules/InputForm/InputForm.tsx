import { InputLabel, Input, ErrorLabel } from "@sharing/atoms";
import { useInput } from "@hooks";
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
  const { handleFocus, focused } = useInput();
  const inputError = !!(touched && error);
  const inputValid = touched && !error;
  const inputProps = {
    id,
    type,
    error,
    touched,
    inputError,
    inputValid,
    handleFocus,
    ...props,
  };
  const labelProps = {
    id,
    focused: focused || props.value !== "",
    inputError,
    inputValid,
  };

  return (
    <div className={styles.input_container}>
      <InputLabel {...labelProps}>{label}</InputLabel>
      <Input {...inputProps} />
      {error && touched && 
        <ErrorLabel>
          {error}
        </ErrorLabel>
      }
    </div>
  );
}
