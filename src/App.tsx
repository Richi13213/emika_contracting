import { useEffect } from "react";
import { Hero, AboutUs, OurServices, WhyChooseUs } from "@organisms";
import { Header } from "@sharing/organisms";
import * as styles from "./App.styles";

function App() {
  useEffect;
  return (
    <>
      <Header />
      <main className={styles.main_container}>
        <Hero />
        <AboutUs />
        <OurServices />
        <WhyChooseUs />
      </main>
    </>
  );
}

export default App;
