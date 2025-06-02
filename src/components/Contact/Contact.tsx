"use client";

import { useState } from "react";
import styles from "./Contact.module.css";
import Image from "next/image";
import whatsIcon from "../../../public/icons/whatsapp.png";
import emailIcon from "../../../public/icons/email.png";
import linkedinIcon from "../../../public/icons/linkedin.png";
import githubIcon from "../../../public/icons/github.png";

const contacts = [
  {
    alt: "Ícone Email",
    href: "mailto:davidlucasfr70@gmail.com",
    icon: emailIcon,
  },
  {
    alt: "Ícone Whatsapp",
    href: "https://wa.me/5519982414511?text=Ol%C3%A1%20David%2C%20gostei%20do%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar.",
    icon: whatsIcon,
  },
  {
    alt: "Ícone Linkedin",
    href: "https://www.linkedin.com/in/david-lucas-a21208176/",
    icon: linkedinIcon,
  },
  {
    alt: "Ícone GitHub",
    href: "https://github.com/DavidLucasK",
    icon: githubIcon,
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [feedback, setFeedback] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch(
        "https://emailsenderdlstudio.vercel.app/api/send-email",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (res.ok) {
        setStatus("success");
        setFeedback("Mensagem enviada com sucesso!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
        setFeedback(
          "Erro inesperado. Envie mensagem para o contato: contatodldesigndigital@gmail.com"
        );
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      setStatus("error");
      setFeedback(
        "Erro inesperado. Envie mensagem para o contato: contatodldesigndigital@gmail.com"
      );
    }
  };

  return (
    <section className={styles.contactSection} id="contact">
      <div className={styles.container}>
        <h2 className={styles.title}>Entre em Contato</h2>
        <p className={styles.subtitle}>Bora bater um papo?</p>

        <div className={styles.content}>
          <div className={styles.formWrapper}>
            <form onSubmit={handleSubmit} className={styles.form}>
              <input
                type="text"
                name="name"
                placeholder="Seu nome"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Seu e-mail"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                placeholder="Sua mensagem"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>

              <button type="submit" disabled={status === "loading"}>
                {status === "loading" ? (
                  <span className={styles.loader}></span>
                ) : (
                  "Enviar Mensagem"
                )}
              </button>

              {status !== "idle" && (
                <p
                  className={styles.feedback}
                  style={{ color: status === "success" ? "green" : "red" }}
                >
                  {feedback}
                </p>
              )}
            </form>
          </div>

          <div className={styles.infoWrapper}>
            <h3>Minhas Redes</h3>
            <ul className={styles.iconContacts}>
              {contacts.map((contact, index) => (
                <li key={index}>
                  <a
                    href={contact.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={contact.icon}
                      width={46}
                      height={46}
                      alt={contact.alt}
                    />
                  </a>
                </li>
              ))}
            </ul>
            <p className={styles.cta}>
              Estou sempre aberto a novas oportunidades.
              <br /> Se quiser contratar um serviço ou tiver alguma dúvida,
              entre em contato.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
