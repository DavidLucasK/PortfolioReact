"use client";

import styles from "./Services.module.css";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import web from "../../../public/assets/web.gif";
import design from "../../../public/assets/design.gif";
import backend from "../../../public/assets/backend.gif";
import database from "../../../public/assets/database.gif";
import tests from "../../../public/assets/tests.gif";
import api from "../../../public/assets/api.gif";
import cloud from "../../../public/assets/cloud.gif";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Sistemas Web e\n Design",
    description:
      "Desenvolvimento de sites modernos com interfaces visualmente atrativas e boas práticas de UX/UI",
    icon: design,
  },
  {
    title: "Backend\n e Git",
    description:
      "Desenvolvimento backend com C#, Node.js ou Java, utilizando boas práticas de versionamento com Git",
    icon: backend,
  },
  {
    title: "Modelagem de \nBanco de Dados",
    description:
      "Criação de estruturas com PostgreSQL, modelagem relacional e integrações com backends",
    icon: database,
  },
  {
    title: "Integração de \nTestes Unitários",
    description:
      "Implementação de testes com Jest garantindo a confiabilidade e estabilidade do código",
    icon: tests,
  },
  {
    title: "Integração com APIs e Microsserviços",
    description:
      "Conexão entre sistemas via APIs RESTful, com autenticação segura e lógica personalizada",
    icon: api,
  },
  {
    title: "Deploy com Docker e Nuvem",
    description:
      "Empacotamento da aplicação em containers e publicação em serviços como AWS, Railway ou Vercel",
    icon: cloud,
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
          <h2 className={styles.title}>Capacidades Técnicas</h2>
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
