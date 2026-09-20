import { SelectProps } from "@typing/props";
import { servicesOptions } from "@data/services";
import { InputLabel, ErrorLabel } from "@sharing/atoms";

import * as styles from "./Select.styles";

export default function Select({
  id,
  value,
  error,
  label,
  touched,
  className,
  handleManualValues,
  handleManualTouched,
  handleManualError,
}: SelectProps) {
  const inputError = Boolean(touched && error);
  const inputValid = Boolean(touched && !error);

  return (
    <div className={styles.container}>
      <InputLabel id={id}>{label}</InputLabel>
      <select
        id={id}
        name={id}
        value={value}
        className={`${styles.select_input({
          inputError,
          inputValid,
        })} ${className || ""}`.trim()}
        aria-invalid={inputError || undefined}
        aria-describedby={inputError ? `${id}-error` : undefined}
        onChange={(event) => {
          handleManualValues({ field: id, value: event.target.value });
          handleManualError({ field: id });
        }}
        onBlur={() => handleManualTouched({ field: id })}
      >
        <option value="">Select a service</option>
        {servicesOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {inputError && (
        <ErrorLabel id={`${id}-error`}>
          {error}
        </ErrorLabel>
      )}
    </div>
  );
}
