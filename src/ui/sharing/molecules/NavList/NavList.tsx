import { NavLink } from "@sharing/atoms";
import { NavListProps } from "@typing/props";
import * as styles from "./NavList.styles";

function scrollToSmoothly(elementId: string) {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start", inline: "start" });

  }
}

export default function NavList({ active }: NavListProps) {
  return (
    <ul className={styles.nav_list(active)}>
      <li className={styles.nav_list_item}>
        <NavLink
          onClick={() => scrollToSmoothly("about_us")}
          section="about_us"
          title=""
        >
          About us
        </NavLink>
      </li>
      <li className={styles.nav_list_item}>
        <NavLink onClick={() => scrollToSmoothly("why_us")} section="why_us">
          Why us
        </NavLink>
      </li>
      <li className={styles.nav_list_item}>
        <NavLink
          onClick={() => scrollToSmoothly("services")}
          section="services"
        >
          Our services
        </NavLink>
      </li>
      <li className={styles.nav_list_item}>
        <NavLink onClick={() => scrollToSmoothly("contact")} section="contact">
          Contact us
        </NavLink>
      </li>
    </ul>
  );
}
