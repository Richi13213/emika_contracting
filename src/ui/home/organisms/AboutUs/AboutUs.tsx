import { Title } from "@sharing/atoms";
import Image from "@images/about_us/image.webp";
import * as styles from "./AboutUs.styles";

export default function AboutUs() {
  const content = [
    "At EMIKA, we're dedicated to providing a wide range of construction and maintenance services tailored to your needs. ",
    "From line painting to snow removal, we deliver comprehensive solutions with professionalism and efficiency.",
  ];
  return (
    <section id="about_us" className={styles.main_container}>
      <div className={styles.container}>
        <Title>About us</Title>
        <div className={styles.content_container}>
          {content.map((text, index) => (
            <p key={`about-us-section-text-${index}`} className={styles.text}>
              {text}
            </p>
          ))}
        </div>
      </div>
      <img className={styles.img} src={Image} alt="About us image" />
    </section>
  );
}
