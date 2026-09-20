import { cx } from "@emotion/css";
import { TitleProps } from "@typing/props";
import * as styles from "./Title.styles";

export default function Title({ children, className, ...props }: TitleProps) {
  return (
    <h2 className={cx(styles.title, className)} {...props}>
      {children}
    </h2>
  );
}
