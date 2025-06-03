"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./About.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import profilePhoto from "../../../public/assets/euReal.png";
// import profilePhoto2 from "../../../public/assets/avatar braço cruzado com LOGO NO BG.png";
import profilePhoto2 from "../../../public/assets/avatarNew.png";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!isMobile && containerRef.current) {
      const ctx = gsap.context(() => {
        ScrollTrigger.create({
          trigger: containerRef.current,
          start: "top top",
          end: "bottom+=100% top",
          scrub: true,
          pin: true,
          anticipatePin: 1,
        });
      }, containerRef);
      return () => ctx.revert();
    }
  }, [isMobile]);

  return (
    <section className={styles.aboutSection} id="about" ref={containerRef}>
      <div className={styles.contentWrapper}>
        <h2 className={styles.title}>
          Quem <span className={styles.gradientText}>Sou? </span>
        </h2>

        {isMobile ? (
          <div className={styles.contentTextImg}>
            <div className={styles.rightContent}>
              <div className={styles.imageWrapper}>
                <div className={styles.profilePhotoContainerMobile}>
                  <Image
                    src={profilePhoto2}
                    alt="Foto 1"
                    fill
                    className={`${styles.profilePhoto} ${styles.photoPrimaryMobile}`}
                  />
                  <Image
                    src={profilePhoto}
                    alt="Foto 2"
                    fill
                    className={`${styles.profilePhoto} ${styles.photoHoverMobile}`}
                  />
                </div>
              </div>
            </div>
            <div className={styles.leftContent}>
              <p className={styles.paragraph}>
                Sou um <strong>desenvolvedor web</strong> dedicado, com{" "}
                <strong>+ 5 anos</strong> de experiência na criação de sites e
                aplicações modernas e responsivas. Gosto de desmitificar
                problemas em soluções simples, bonitas e intuitivas.
              </p>
              <p className={styles.paragraph}>
                Mais do que programar, gosto de resolver problemas e deixar tudo
                visualmente agradável, funcional e acessível.{" "}
                <strong>Seja no trabalho ou na minha vida pessoal.</strong> O
                conhecimento flui quando há <strong>propósito</strong>, e é isso
                que me motiva.
              </p>
              <p className={styles.paragraph}>
                Me considero uma pessoa <strong>criativa</strong>, tanto no
                trabalho quanto no dia a dia. Gosto de explorar caminhos
                alternativos e pensar fora da caixa, unindo criatividade e
                tecnologia para transformar ideias em realidade.
              </p>
            </div>
          </div>
        ) : (
          <div className={styles.desktopLayout}>
            <div className={styles.textBlock}>
              <p className={styles.paragraph}>
                Sou um <strong>Desenvolvedor Web</strong> dedicado, com{" "}
                <strong>+ 5 anos</strong> de experiência na criação de sites e
                aplicações modernas e responsivas. Gosto de desmitificar
                problemas em soluções simples, bonitas e intuitivas. Quando não
                estou programando, estou explorando novas tecnologias ou
                compartilhando conhecimento.
              </p>
              <p className={styles.paragraph}>
                Mais do que programar, gosto de resolver problemas e deixar tudo
                visualmente agradável, funcional e acessível.{" "}
                <strong>Seja no trabalho ou na minha vida pessoal.</strong> O
                conhecimento flui quando há <strong>propósito</strong>, e é isso
                que me motiva.
              </p>
              <p className={styles.paragraph}>
                Me considero uma pessoa <strong>criativa</strong>, tanto no
                trabalho quanto no dia a dia. Gosto de explorar caminhos
                alternativos, buscar soluções na internet e pensar fora da
                caixa. No fim das contas, meu objetivo sempre é: <br />
                <strong>Trazer novas idéias a realidade.</strong>
              </p>
            </div>
            <div className={styles.rightContent}>
              <div className={styles.imageWrapper}>
                <div className={styles.profilePhotoContainer}>
                  <Image
                    src={profilePhoto2}
                    alt="Foto 1"
                    fill
                    className={`${styles.profilePhoto} ${styles.photoPrimary}`}
                  />
                  <Image
                    src={profilePhoto}
                    alt="Foto 2"
                    fill
                    className={`${styles.profilePhoto} ${styles.photoHover}`}
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
