import React from "react";
import { Title } from "@sharing/atoms";
import * as styles from "./ContactUs.styles";

export default function ContactUs() {
  return (
    <section id="contact" className={styles.main_container}>
      <div className={styles.container}>
        <Title>Contact Us</Title>
        <div className={styles.content_container}></div>
      </div>
    </section>
  );
}
