import type { MenuButtonProps } from "@typing/props";
import * as styles from "./MenuButton.styles";

export default function MenuButton({ active, ...props }: MenuButtonProps) {
  return (
    <button type="button" className={styles.hamburguer(active)} {...props}>
      <span className={styles.line}></span>
      <span className={styles.line}></span>
      <span className={styles.line}></span>
    </button>
  )
}
