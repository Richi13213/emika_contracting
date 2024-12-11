import { useState } from "react";
import { MenuButton } from "@sharing/atoms";
import { NavList } from "@sharing/molecules";
import * as styles from "./Header.styles";

export default function Header() {
  const [active, setActive] = useState<boolean>(false);

  const handleToggleMenu = () => {
    document.body.style.overflow = (active ? 'auto' : 'hidden');
    setActive(!active);
  };

  return (
    <header className={styles.header(active)}>
      <nav className={styles.container}>
        <p className={styles.logo}>EMIKA</p>
        <MenuButton onChange={handleToggleMenu} />
        <NavList {...{ active }} />
      </nav>
    </header>
  );
}
