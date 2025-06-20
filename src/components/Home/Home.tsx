"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Home.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaArrowDown } from "react-icons/fa6";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 480);
    };

    handleResize(); // Verifica ao carregar
    window.addEventListener("resize", handleResize); // Atualiza se redimensionar

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!isMobile && containerRef.current) {
      const ctx = gsap.context(() => {
        ScrollTrigger.create({
          trigger: containerRef.current,
          start: "top top",
          end: "bottom+=80% top",
          scrub: true,
          pin: true,
          anticipatePin: 1,
        });
      }, containerRef);

      return () => ctx.revert();
    }
  }, [isMobile]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 0); // pequeno delay para garantir que só roda no client

    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (hash: string) => {
    const target = document.querySelector(hash);
    if (!target) return;

    const currentScroll = window.scrollY || window.pageYOffset;
    let offset = -100;

    if (isMobile) {
      if (hash === "#projects") {
        const projectsTop = target.getBoundingClientRect().top + currentScroll;
        offset = currentScroll < projectsTop ? -50 : -80;
      }

      if (hash === "#about") {
        const aboutTop = target.getBoundingClientRect().top + currentScroll;
        offset = currentScroll < aboutTop ? -80 : -80;
      }
    } else {
      if (hash === "#projects") {
        const projectsTop = target.getBoundingClientRect().top + currentScroll;
        offset = currentScroll < projectsTop ? -80 : -80;
      }
    }
    const finalPosition =
      target.getBoundingClientRect().top + currentScroll + offset;

    setTimeout(() => {
      window.scrollTo({
        top: finalPosition,
        behavior: "smooth",
      });
    }, 50); // pequena correção se necessário
  };

  const content = (
    <div className={styles.homeContainer}>
      <div className={`${styles.leftContent} ${animate ? styles.fadeIn : ""}`}>
        <h1>
          Oi, Eu sou o <span className={styles.titleName}>David</span>
        </h1>
        <p>
          Desenvolvedor Web Full-Stack focado em soluções digitais elegantes,
          funcionais e intuitivas.
        </p>
        <div className={styles.heroButtons}>
          <a
            onClick={() => scrollToSection("#projects")}
            className={styles.botaoRequest}
          >
            <p>Veja meu trabalho</p>
          </a>
          <a
            href="assets/Curriculo.pdf"
            download="Currículo"
            aria-label="Baixar o Currículo de David Lucas"
            className={`${styles.botaoRequest} ${styles.contato}`}
          >
            <p>Download Currículo</p>
          </a>
        </div>
        <a
          onClick={() => scrollToSection("#about")}
          className={styles.scrollDown}
        >
          <FaArrowDown />
        </a>
      </div>
    </div>
  );

  return isMobile ? (
    <section className={styles.homeSection} id="home">
      {content}
    </section>
  ) : (
    <section className={styles.homeSection} id="home" ref={containerRef}>
      {content}
    </section>
  );
}
