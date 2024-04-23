import React from "react";
import { TitleProps } from "@typing/props";
import * as styles from "./Title.styles";

export default function Title({ children, ...props }: TitleProps) {
  return (
    <h2 className={styles.title} {...props}>
      {children}
    </h2>
  );
}
