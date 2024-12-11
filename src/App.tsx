import { lazy, Suspense } from "react"
import { Hero, AboutUs } from "@organisms";
import { Header, Footer } from "@sharing/organisms";
import * as styles from "./App.styles";

const OurServices = lazy(() => import('./ui/home/organisms/OurServices/OurServices'));
const WhyChooseUs = lazy(() => import('./ui/home/organisms/WhyChooseUs/WhyChooseUs'));
const ContactUs = lazy(() => import('./ui/home/organisms/ContactUs/ContactUs'));



function App() {
  return (
    <>
      <Header />
      <main className={styles.main_container}>
        <Hero />
        <AboutUs />
        <Suspense fallback={<div>Loading...</div>}>
          <OurServices />
          <WhyChooseUs />
          <ContactUs />
        </Suspense>

      </main>
      <Footer />
    </>
  );
}

export default App;
