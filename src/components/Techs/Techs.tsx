"use client";

import styles from "./Techs.module.css";
import Image from "next/image";

// Ícones personalizados
import reactIcon from "../../../public/icons/reactDavid.png";
import nextIcon from "../../../public/icons/nextjsDavid.png";
import tsIcon from "../../../public/icons/typescriptDavid.png";
import nodeIcon from "../../../public/icons/nodejsDavida.png";
import csharpIcon from "../../../public/icons/csharpDavid.png";
import dotnetIcon from "../../../public/icons/dotnetDavid.png";
import pythonIcon from "../../../public/icons/pythonDavid.png";
import postgresIcon from "../../../public/icons/postgresqlDavid.png";
import dockerIcon from "../../../public/icons/docker.png";
import awsIcon from "../../../public/icons/awsDavid.png";

const technologies = [
  { name: "React", icon: reactIcon },
  { name: "Next.js", icon: nextIcon },
  { name: "TypeScript", icon: tsIcon },
  { name: "Node.js", icon: nodeIcon },
  { name: "C#", icon: csharpIcon },
  { name: ".NET", icon: dotnetIcon },
  { name: "Python", icon: pythonIcon },
  { name: "PostgreSQL", icon: postgresIcon },
  { name: "Docker", icon: dockerIcon },
  { name: "AWS", icon: awsIcon },
];

export default function Techs() {
  return (
    <section className={styles.techSection} id="techs">
      <h2 className={styles.sectionTitle}>
        Minhas <span className={styles.gradientText}>Tecnologias</span>
      </h2>
      <p className={styles.sectionSubtitle}>
        Ferramentas e linguagens que uso em meus projetos.
      </p>

      <div className={styles.techGrid}>
        {technologies.map((tech) => {
          const isSpecial = tech.icon === dockerIcon || tech.icon === reactIcon;

          return (
            <div
              key={tech.name}
              className={isSpecial ? styles.techCardSpecial : styles.techCard}
            >
              <Image src={tech.icon} alt={tech.name} width={40} height={40} />
              <span>{tech.name}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
