import type { HTMLAttributes } from "react";
import * as styles from "./ErrorLabel.styles"
import { ChildrenProp } from "@typing/props";

type ErrorLabelProps = ChildrenProp & HTMLAttributes<HTMLElement>;

export default function ErrorLabel({ children, ...props }: ErrorLabelProps) {
  return (
    <small className={styles.error_label} {...props}>
      {children}
    </small>
  )
}
