import React from "react";
import { Title } from "@sharing/atoms";
import Image from "@images/about_us/image.webp";
import { ReferenceProp } from "@typing/props";
import * as styles from "./AboutUs.styles";

export default function AboutUs({ reference }: ReferenceProp) {
  const content = [
    "We're committed to being your trusted partner for a wide array of construction and maintenance services. ",
    "At EMIKA, we take pride in delivering comprehensive solutions tailored to meet the needs of businesses and communities across our service area. ",
    "From line painting to sidewalk repair and snow removal, we're dedicated to addressing all your requirements with professionalism and efficiency.",
  ];
  return (
    <section id="about_us" className={styles.main_container}>
      <div className={styles.container}>
        <Title>About us</Title>
        <div className={styles.content_container}>
          <div className={styles.left_container}>
            {content.map((text, index) => (
              <p key={`about-us-section-text-${index}`} className={styles.text}>
                {text}
              </p>
            ))}
          </div>
          <img className={styles.img} src={Image} alt="About us image" />
        </div>
      </div>
    </section>
  );
}
