// components/Compliance/Compliance.tsx
"use client";

import styles from "./Compliance.module.css";
import Image from "next/image";
import chart from "../../../public/next.svg";
import support from "../../../public/next.svg";
import art from "../../../public/next.svg";
import fast from "../../../public/next.svg";

export default function Compliance() {
  const items = [
    {
      icon: support,
      title: "Suporte",
      bold: "Exclusivo",
      alt: "a",
      description:
        "Nossa equipe está sempre pronta para te ajudar! Fale conosco e surpreenda-se com o nosso atendimento.",
    },
    {
      icon: chart,
      title: "Foco em",
      bold: "Resultados",
      alt: "a",
      description:
        "Nossas decisões criativas têm foco em gerar valor real, seja em conversão, presença digital ou reconhecimento.",
    },
    {
      icon: art,
      title: "Participe da",
      bold: "Criação",
      alt: "a",
      description:
        "Você faz parte do processo criativo. Acompanhe, dê idéias para que a nossa equipe transforme as suas idéias em realidade.",
    },
    {
      icon: fast,
      title: "Entrega",
      bold: "Rápida",
      alt: "a",
      description:
        "Trabalhamos com comprometimento e eficiência para entregar seu projeto dentro do prazo combinado.",
    },
  ];

  return (
    <section className={styles.complianceSection}>
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>Soft Skills</h2>
        <p className={styles.subtitle}>Habilidades interpessoais</p>
      </div>

      <div className={styles.cardsContainer}>
        {items.map((item, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.front}>
              <Image
                className={styles.test}
                src={item.icon}
                alt={item.alt}
                width={50}
                height={50}
              />
              <p className={styles.text}>{item.title}</p>
              <p className={styles.text}>
                <strong>{item.bold}</strong>
              </p>
            </div>
            <div className={styles.back}>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
