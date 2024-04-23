import React from "react";
import { NavLinkProps } from "@typing/props";

import * as styles from "./NavLink.styles";

export default function NavLink({ section, children, ...props }: NavLinkProps) {
  return (
    <p className={styles.link} {...props}>
      {children}
    </p>
  );
}
