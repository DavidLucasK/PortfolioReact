"use client";

import { useState } from "react";
import styles from "./Contact.module.css";

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
            <h3>Outros Canais</h3>
            <ul>
              <li>
                <strong>WhatsApp:</strong>{" "}
                <a
                  href="https://wa.me/5519982414511?text=Ol%C3%A1%20DL%20Design%20Digital%2C%20gostaria%20de%20conversar%20sobre%20um%20or%C3%A7amento."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  (19) 98241-4511
                </a>
              </li>
              <li>
                <strong>Email:</strong>{" "}
                <a href="mailto:davidlucasfr70@gmail.com">
                  davidlucasfr70@gmail.com
                </a>
              </li>
            </ul>
            <p className={styles.cta}>
              Estou sempre aberto a novas oportunidades.
              <br /> Se tiver alguma dúvida ou quiser trocar uma ideia, <br />
              entre em contato.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
