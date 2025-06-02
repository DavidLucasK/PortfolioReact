"use client";

import Navbar from "../components/Navbar/Navbar";
import HomeContent from "../components/Home/Home";
import About from "@/components/About/About";
import Services from "@/components/Services/Services";
import Footer from "@/components/Footer/Footer";
import { useState } from "react";
import Projects from "@/components/Projects/Projects";
import Contact from "@/components/Contact/Contact";
import Compliance from "@/components/Compliance/Compliance";
import Techs from "@/components/Techs/Techs";
import Logos from "@/components/Logos/Logos";

export default function Index() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [currentPage, setCurrentPage] = useState("/");

  // 2️⃣ Função para atualizar a página ao clicar na Navbar
  const handleNavigate = (page: string) => {
    setCurrentPage(page);
  };

  return (
    <div className="pageContainer">
      <Navbar onNavigate={handleNavigate} />
      <HomeContent />
      <About />
      <Services />
      <Logos />
      <Projects />
      <Techs />
      <Compliance />
      <Contact />
      <Footer />
    </div>
  );
}
