import { useEffect, useState } from "react";
import { companyInfo } from "@data/landing";
import { MenuButton } from "@sharing/atoms";
import { NavList } from "@sharing/molecules";
import * as styles from "./Header.styles";

export default function Header() {
  const [active, setActive] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    document.body.style.overflow = active ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [active]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 18);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleToggleMenu = () => {
    setActive((current) => !current);
  };

  const handleCloseMenu = () => {
    setActive(false);
  };

  return (
    <header className={styles.header(scrolled)}>
      <nav className={styles.container(scrolled)} aria-label="Primary navigation">
        <a href="#top" className={styles.brand} onClick={handleCloseMenu}>
          <span className={styles.logo_mark}>{companyInfo.shortName}</span>
          <span className={styles.logo_text}>Construction</span>
        </a>

        <div className={styles.desktop_navigation}>
          <NavList active={false} />
        </div>

        <a href="#contact" className={styles.cta}>
          Request a consultation
        </a>

        <MenuButton
          active={active}
          onClick={handleToggleMenu}
          aria-expanded={active}
          aria-controls="mobile-navigation"
          aria-label={active ? "Close navigation menu" : "Open navigation menu"}
        />
      </nav>

      <div
        id="mobile-navigation"
        className={styles.mobile_panel(active)}
        aria-hidden={!active}
      >
        <NavList active={active} onNavigate={handleCloseMenu} />
        <a href="#contact" className={styles.mobile_cta} onClick={handleCloseMenu}>
          Start your project
        </a>
        <a
          href={companyInfo.phoneHref}
          className={styles.mobile_contact}
          onClick={handleCloseMenu}
        >
          Call {companyInfo.phoneDisplay}
        </a>
      </div>
    </header>
  );
}
