import { LabelInputProps } from "@typing/props";
import * as styles from "./InputLabel.styles";

export default function InputLabel({
  children,
  id,
  ...props
}: LabelInputProps) {
  return (
    <label htmlFor={id} className={styles.label(props)}>
      {children}
    </label>
  );
}
