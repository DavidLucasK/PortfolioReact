"use client";

import styles from "./Services.module.css";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import web from "@/app/assets/web.gif";
import landingPage from "@/app/assets/landingPage2.gif";
import identity from "@/app/assets/identity.gif";
import socialMedia from "@/app/assets/socialmedia.gif";
import contentCreator from "@/app/assets/content.gif";
import server from "@/app/assets/web.gif";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Criação de Sites",
    description:
      "Sites institucionais modernos, responsivos e otimizados para performance.",
    icon: web,
  },
  {
    title: "Landing Pages",
    description:
      "Páginas de conversão eficazes, com foco em captar leads e gerar vendas.",
    icon: landingPage,
  },
  {
    title: "Identidade Visual",
    description:
      "Criação de logotipos, cores e estilos que representam a essência da sua marca.",
    icon: identity,
  },
  {
    title: "Design para Redes Sociais",
    description:
      "Artes para posts, stories e campanhas com identidade marcante.",
    icon: socialMedia,
  },
  {
    title: "Criação de Conteúdo",
    description:
      "Textos publicitários e institucionais pensados para fortalecer sua comunicação.",
    icon: contentCreator,
  },
  {
    title: "Hospedagem e Domínio",
    description:
      "Cuidamos da configuração completa: domínio, servidor e publicação.",
    icon: server,
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  // Verifica se é mobile (evita SSR erro)
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 480);
    };

    checkIsMobile(); // checa no mount
    window.addEventListener("resize", checkIsMobile); // checa ao redimensionar

    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  // Aplica animações somente se não for mobile
  useEffect(() => {
    if (isMobile !== false) return;

    const cards = cardsRef.current;
    const totalScroll = services.length * 250;

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: `+=${totalScroll}`,
        pin: true,
        scrub: true,
      },
    });

    cards.forEach((card, i) => {
      if (card) {
        timeline.fromTo(
          card,
          { opacity: 0, scale: 0.8, y: 50 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.5,
            ease: "power2.out",
          },
          i * 0.5
        );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      timeline.kill();
    };
  }, [isMobile]);

  // Não renderiza até detectar se é mobile ou não
  if (isMobile === null) return null;

  return (
    <>
      <section
        className={styles.servicesSection}
        id="services"
        ref={sectionRef}
      >
        <div className={styles.container}>
          <h2 className={styles.title}>Serviços</h2>
          <div className={styles.grid}>
            {services.map((service, index) => (
              <div
                key={index}
                className={isMobile ? styles.cardMobile : styles.card}
                ref={(el) => {
                  cardsRef.current[index] = el;
                }}
              >
                <div className={styles.iconWrapper}>
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={50}
                    height={50}
                  />
                </div>
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.cardDescription}>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className={styles.spacer}></div>
    </>
  );
}
