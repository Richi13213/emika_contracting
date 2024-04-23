import React, { useRef, useEffect } from "react";
import { Title } from "@sharing/atoms";
import { ReferenceProp } from "@typing/props";
import { Swiper, SwiperSlide } from "swiper/react";
import { ServiceCard } from "@molecules";
import { ServiceCardData } from "@typing/props";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

import { servicesData } from "@data/services";

import * as styles from "./OurServices.styles";

import { EffectCoverflow, Navigation } from "swiper/modules";

export default function OurServices({ reference }: ReferenceProp) {
  return (
    <section id="services" className={styles.main_container}>
      <div className={styles.container}>
        <Title>Our services</Title>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          navigation={true}
          slidesPerView={"auto"}
          initialSlide={3}
          coverflowEffect={{
            rotate: 10,
            stretch: 0,
            depth: 200,
            scale: 0.9,
            modifier: 1,
            slideShadows: true,
          }}
          modules={[EffectCoverflow, Navigation]}
          className={styles.swiper}
        >
          {servicesData.map((data: ServiceCardData, index) => (
            <SwiperSlide
              className={styles.swiper_slide}
              key={`service-swipper-slide-${index}`}
            >
              <ServiceCard {...data} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
