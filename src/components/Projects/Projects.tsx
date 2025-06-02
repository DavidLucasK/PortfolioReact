"use client";

import styles from "./Projects.module.css";
import Image from "next/image";
import mockupSalve from "../../../public/assets/MockupSalve1.png";
import mockupTres from "../../../public/assets/MockupTresOuMais1.png";
import mockupLoveYou from "../../../public/assets/MockupLoveYou.png";

const projects = [
  {
    title: "Instituto Salve Uma Criança",
    description:
      "Projeto voluntário o para Instituto de Campinas, com sistema de doações, galeria de eventos e painel de gestão.",
    image: mockupSalve,
    tag: "Instituto",
    link: "https://salveumacrianca.com.br",
  },
  // {
  //   title: "Escolhas de Filmes",
  //   description: `Desenvolvido para recomendações de filmes aleatórios para assistir.<br><strong>(Feito para facilitar as noites com a namorada rs)</strong>`,
  //   image: mockupBarber,
  //   tag: "Utilitário",
  // },
  {
    title: "LoveYou",
    description: `App web que fiz para minha namorada poder brincar e ser algo divertido entre a gente.<br><strong>* Também fiz um app mobile em React Native que usa a mesma base de dados.</strong>`,
    image: mockupLoveYou,
    tag: "App Pessoal",
    link: "https://loveuportfolio.vercel.app/",
  },
  {
    title: "TrêsOuMais",
    description:
      "Projeto com amigos para falar sobre a vida cristã com os jovens nas redes sociais!",
    image: mockupTres,
    tag: "Conteúdo Digital",
    link: "https://tresoumais.vercel.app/",
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
              <p dangerouslySetInnerHTML={{ __html: project.description }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
