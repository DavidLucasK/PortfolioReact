"use client";

import styles from "./Footer.module.css";
import Image from "next/image";
import logoDl from "../../../public/assets/Logo.webp";
import { useEffect, useState } from "react";

export default function Footer() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`${styles.footerContainer} ${
        scrolled ? styles.footerContainerScrolled : ""
      }`}
    >
      <a href={"/"}>
        <Image
          className={styles.logoImg}
          width={50}
          height={50}
          src={logoDl}
          alt="5"
        />
      </a>
      <p>© 2025 David Lucas. Todos os direitos reservados.</p>
    </div>
  );
}
