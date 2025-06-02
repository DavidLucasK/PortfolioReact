"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import styles from "./Logos.module.css";
import Image from "next/image";
import Embraer from "../../../public/logos/Embraer.png";
import Thomson from "../../../public/logos/Thomson.png";
import Nissan from "../../../public/logos/Nissan.png";
import Viracopos from "../../../public/logos/Viracopos.png";
import JohnDeere from "../../../public/logos/JohnDeere.png";
import Benfatto from "../../../public/logos/Benfatto.png";
import SalveUmaCrianca from "../../../public/logos/SalveUmaCrianca.png";

const logos = [
  { src: Thomson, alt: "Thomson Reuters" },
  { src: Nissan, alt: "Nissan" },
  { src: Embraer, alt: "Embraer" },
  { src: SalveUmaCrianca, alt: "Salve Uma Crianca" },
  { src: Benfatto, alt: "Benfatto" },
  { src: Viracopos, alt: "Viracopos" },
  { src: JohnDeere, alt: "John Deere" },
];

export default function LogoCarousel() {
  const repeteadLogos = Array(100).fill(logos).flat();

  return (
    <section className={styles.logoSection}>
      <h3 className={styles.logoTitle}>
        Experiências em projetos conectados a grandes marcas.
      </h3>
      <Swiper
        slidesPerView={4}
        loop={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        speed={3000}
        grabCursor={true}
        modules={[Autoplay]}
        className={styles.logoSwiper}
      >
        {repeteadLogos.map((logo, index) => (
          <SwiperSlide
            key={index}
            virtualIndex={index}
            className={styles.slide}
          >
            <Image src={logo.src} alt={logo.alt} className={styles.logoImage} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
