"use client";

import styles from "./Projects.module.css";
import Image from "next/image";
import mockupSalve from "@/app/assets/MockupSalve1.png";
import mockupBarber from "@/app/Logo.webp";
import mockupPastel from "@/app/Logo.webp";

const projects = [
  {
    title: "Instituto Salve Uma Criança",
    description:
      "Projeto voluntário o para Instituto de Campinas, com sistema de doações, galeria de eventos e painel de gestão.",
    image: mockupSalve,
    tag: "Instituto",
    link: "https://salveumacrianca.com.br",
  },
  {
    title: "Valhalla Barber",
    description: "Site para barbearia moderna com agendamento via WhatsApp.",
    image: mockupBarber,
    tag: "Serviços",
  },
  {
    title: "Pastel da Vó",
    description:
      "Página com cardápio digital, pedidos via Whatsapp e integração com Google Maps.",
    image: mockupPastel,
    tag: "Restaurante",
  },
];

export default function Projects() {
  return (
    <section className={styles.portfolioSection} id="projects">
      <div className={styles.container}>
        <h2 className={styles.title}>Projetos</h2>
        <p className={styles.subtitle}>
          Projetos e estudos visuais que demonstram minha abordagem
        </p>
        <div className={styles.grid}>
          {projects.map((project, index) => (
            <div key={index} className={styles.card}>
              <h3>{project.title}</h3>
              <a
                className={styles.imageWrapper}
                href={project.link}
                target="blank"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={650}
                  height={400}
                />
              </a>
              <span className={styles.tag}>{project.tag}</span>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
