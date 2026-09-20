import {
  AboutUs,
  ContactUs,
  Hero,
  OurServices,
  WhyChooseUs,
} from "@organisms";
import { companyInfo } from "@data/landing";
import { servicesData } from "@data/services";
import { Header, Footer } from "@sharing/organisms";
import * as styles from "./App.styles";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  name: companyInfo.name,
  description: companyInfo.description,
  areaServed: {
    "@type": "Place",
    name: companyInfo.location,
  },
  telephone: companyInfo.phoneStructured,
  email: companyInfo.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Barrie",
    addressRegion: "Ontario",
    addressCountry: "CA",
  },
  makesOffer: servicesData.map((service) => ({
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name: service.title,
      description: service.description,
    },
  })),
};

function App() {
  return (
    <>
      <a href="#main-content" className={styles.skip_link}>
        Skip to content
      </a>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Header />
      <main id="main-content" className={styles.main_container}>
        <Hero />
        <AboutUs />
        <OurServices />
        <WhyChooseUs />
        <ContactUs />
      </main>
      <Footer />
    </>
  );
}

export default App;
