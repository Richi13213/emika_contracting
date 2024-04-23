import { useRef, useEffect } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { Hero, AboutUs, OurServices, WhyChooseUs } from "@organisms";
import { Header } from "@sharing/organisms";
import * as styles from "./App.styles";

function App() {
  const headerRef: React.RefObject<HTMLElement> = useRef(null);
  useEffect;
  return (
    <>
      <Header reference={headerRef} />
      <main className={styles.main_container}>
        <Hero reference={headerRef} />
        <AboutUs reference={headerRef} />
        <OurServices reference={headerRef} />
        <WhyChooseUs reference={headerRef} />
      </main>
    </>
  );
}

export default App;
