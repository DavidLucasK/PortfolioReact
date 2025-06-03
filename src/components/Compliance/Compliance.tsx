// components/Compliance/Compliance.tsx
"use client";

import styles from "./Compliance.module.css";
import Image from "next/image";
import time from "../../../public/assets/time.gif";
import teamwork from "../../../public/assets/teamwork.gif";
import adapt from "../../../public/assets/adapt.gif";
import conversation from "../../../public/assets/conversation.gif";
import creative from "../../../public/assets/creative.gif";
import shield from "../../../public/assets/shield.gif";
import { FaArrowRotateRight } from "react-icons/fa6";

export default function Compliance() {
  const items = [
    {
      icon: conversation,
      title: "Comunicação",
      bold: "Efetiva",
      alt: "ícone de balão de fala",
      description:
        "Sou uma pessoa comunicativa e transparente, sempre busco facilitar a compreensão e colaboração de todos.",
    },
    {
      icon: teamwork,
      title: "Trabalho em",
      bold: "Equipe",
      alt: "ícone de gráfico de crescimento",
      description:
        "Gosto de trabalhar em equipe, principalmente quando o compartilhamento de idéias para alcançar metas e resultados é incentivado.",
    },
    {
      icon: adapt,
      title: "Alta",
      bold: "Adaptabilidade",
      alt: "ícone de camaleão",
      description:
        "Encaro mudanças com bastante flexibilidade e acredito que me adapto rápido a novas situações para sempre manter a produtividade e o desempenho.",
    },
    {
      icon: creative,
      title: "Mente",
      bold: "Criativa",
      alt: "ícone de cérebro e lâmpada",
      description:
        "Uso minha criatividade para desafiar o óbvio e o convencional, encontrando soluções eficazes e inovadoras.",
    },
    {
      icon: shield,
      title: "Resiliência",
      bold: "Profissional",
      alt: "ícone de escudo",
      description:
        "Já enfrentei diversos bugs ao longo do caminho. E mesmo assim o objetivo sempre é adaptar a rota e entregar com qualidade.",
    },
    {
      icon: time,
      title: "Gestão do",
      bold: "Tempo",
      alt: "ícone de relógio",
      description:
        "Planejo meu tempo de forma consciente, com foco em prazos e entregas, equilibrando sempre a produtividade com organização.",
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
                className={item.icon === shield ? undefined : styles.test}
                src={item.icon}
                alt={item.alt}
                width={62}
                height={62}
                unoptimized
              />
              <p className={styles.text}>{item.title}</p>
              <p className={styles.text}>
                <strong>{item.bold}</strong>
              </p>
              <FaArrowRotateRight size={24} className={styles.flipHintIcon} />
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
