import React from "react";
import { Title } from "@sharing/atoms";
import Image from "@images/about_us/image.webp";
import { ReferenceProp } from "@typing/props";
import { WhyUsData } from "@typing/data";
import * as styles from "./WhyChooseUs.styles";

export default function WhyChooseUs({ reference }: ReferenceProp) {
  const content: Array<WhyUsData> = [
    {
      main: "Experience and Expertise: ",
      content:
        "With years of industry experience, our team has the knowledge and skill to handle any challenge that arises.",
    },
    {
      main: "Customer Service Priority: ",
      content:
        "We care about our customers' satisfaction and strive to exceed their expectations every step of the way.",
    },
    {
      main: "Commitment to Quality: ",
      content:
        "We use only the best materials and techniques in every project to ensure lasting, high-quality results.",
    },
    {
      main: "Efficiency and Timeliness: ",
      content:
        "We understand the importance of meeting deadlines and working efficiently to minimize disruptions to your business or community.",
    },
  ];
  return (
    <section id="why_us" className={styles.main_container}>
      <div className={styles.container}>
        <Title>Why Choose Us</Title>
        <p className={styles.text}>
          At Emika Contracting, we are committed to excellence in every project
          we undertake. Why choose us?
        </p>
        <div className={styles.content_container}>
          <ul className={styles.left_container}>
            {content.map(({ main, content }: WhyUsData, index) => (
              <li key={`about-us-section-text-${index}`}>
                <p className={styles.text}>
                  <span>{main}</span>
                  {content}
                </p>
              </li>
            ))}
          </ul>
          <img className={styles.img} src={Image} alt="About us image" />
        </div>
      </div>
    </section>
  );
}
