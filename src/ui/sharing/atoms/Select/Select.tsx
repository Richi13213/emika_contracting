import { useState } from "react";
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
  handleManualValues,
}: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const inputError = !!(touched && error);
  const inputValid = !!(touched && !error);
  const labelProps = {
    id,
    focused: value !== "",
    inputError,
    inputValid,
  };

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleChange = (value: string) => {
    handleManualValues({ field: id, value });
    handleClick();
  };

  return (
    <div className={styles.container}>
      <InputLabel {...labelProps}>{label}</InputLabel>
      <div
        className={styles.select_input({
          inputError,
          inputValid,
          isOpen,
        })}
        onClick={handleClick}
      >
        {value || ""}
      </div>
      {isOpen && (
        <div className={styles.option_container}>
          {servicesOptions.map((option) => (
            <div
              key={option}
              className={styles.option}
              onClick={() => handleChange(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
      {error && touched && 
        <ErrorLabel>
          {error}
        </ErrorLabel>
      }
    </div>
  );
}
