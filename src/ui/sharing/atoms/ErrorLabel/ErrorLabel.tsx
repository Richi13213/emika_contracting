import * as styles from "./ErrorLabel.styles"
import { ChildrenProp } from "@typing/props";

export default function ErrorLabel({children}: ChildrenProp) {
  return (
    <small className={styles.error_label}>{children}</small>
  )
}
