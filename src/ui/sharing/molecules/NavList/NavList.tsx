import { NavLink } from "@sharing/atoms";
import { navigationItems } from "@data/landing";
import { NavListProps } from "@typing/props";
import * as styles from "./NavList.styles";

export default function NavList({ active, onNavigate }: NavListProps) {
  return (
    <ul className={styles.nav_list(active)}>
      {navigationItems.map(({ href, label, section }) => (
        <li key={section} className={styles.nav_list_item}>
          <NavLink href={href} onClick={onNavigate}>
            {label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
