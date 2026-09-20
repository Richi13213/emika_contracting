import type { NavLinkProps } from "@typing/props";

import * as styles from "./NavLink.styles";

export default function NavLink({ children, href, ...props }: NavLinkProps) {
  return (
    <a className={styles.link} href={href} {...props}>
      {children}
    </a>
  );
}
