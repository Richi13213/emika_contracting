import { Hero, AboutUs, OurServices, WhyChooseUs, ContactUs } from "@organisms";
import { Header } from "@sharing/organisms";
import * as styles from "./App.styles";
import { Resend } from "resend";

const resend = new Resend("re_i4vyp8BY_8RdKwms1CGQwRHGKui78Ey6V");

resend.emails.send({
  from: "andresjimenezipn@gmail.com",
  to: "andresjimenezipn@gmail.com",
  subject: "Hello World",
  html: "<p>Congrats on sending your <strong>first email</strong>!</p>",
});

function App() {
  return (
    <>
      <Header />
      <main className={styles.main_container}>
        <Hero />
        <AboutUs />
        <OurServices />
        <WhyChooseUs />
        <ContactUs />
      </main>
    </>
  );
}

export default App;
