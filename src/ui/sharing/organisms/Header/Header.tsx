import React, { useState } from "react";
import { MenuButton } from "@sharing/atoms";
import { NavList } from "@sharing/molecules";
import * as styles from "./Header.styles";
import { HeaderProps } from "@typing/props";

export default function Header({ reference }: HeaderProps) {
  const [active, setActive] = useState<boolean>(false);

  const handleToggleMenu = () => {
    setActive(!active);
  };

  return (
    <header ref={reference} className={styles.header}>
      <nav className={styles.container}>
        <p className={styles.logo}>EMIKA</p>
        <MenuButton onChange={handleToggleMenu} />
        <NavList {...{ active }} />
      </nav>
    </header>
  );
}
