"use client";

import Image from "next/image";
import styles from "./NavbarStyle.module.css";
import { useState, useEffect } from "react";
import logo from "../../../public/assets/Logo.webp";
import { usePathname } from "next/navigation";
import { FaBars, FaXmark } from "react-icons/fa6";
import Link from "next/link";
import NavItem from "../NavItem/NavItem";

interface NavItemInterface {
  url: string;
  label: string;
}

interface NavbarProps {
  onNavigate: (page: string) => void;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function Navbar({ onNavigate }: NavbarProps) {
  const items: NavItemInterface[] = [
    {
      url: "#about",
      label: "Sobre Mim",
    },
    {
      url: "#projects",
      label: "Projetos",
    },
    {
      url: "#techs",
      label: "Habilidades",
    },
    {
      url: "#contact",
      label: "Contato",
    },
  ];

  const pathName = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 480);
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const defaultOffsets: Record<string, number> = {
    "#projects": -50,
    "#techs": 0,
    "#contact": -30,
  };

  const scrollToSection = (hash: string) => {
    const target = document.querySelector(hash);
    if (!target) return;

    const currentScroll = window.scrollY || window.pageYOffset;
    let offset = defaultOffsets[hash] ?? -100;

    if (isMobile) {
      if (hash === "#about") {
        const aboutTop = target.getBoundingClientRect().top + currentScroll;
        offset = currentScroll < aboutTop ? -80 : -80;
      }

      if (hash === "#services") {
        const servicesTop = target.getBoundingClientRect().top + currentScroll;
        offset = currentScroll < servicesTop ? -50 : -50;
      }
    } else {
      if (hash === "#services") {
        const servicesTop = target.getBoundingClientRect().top + currentScroll;
        offset = currentScroll < servicesTop ? 1500 : 0;
      }

      if (hash === "#about") {
        const aboutTop = target.getBoundingClientRect().top + currentScroll;
        offset = currentScroll < aboutTop ? 0 : -1910;
      }
    }
    const finalPosition =
      target.getBoundingClientRect().top + currentScroll + offset;

    setTimeout(() => {
      window.scrollTo({
        top: finalPosition,
        behavior: "smooth",
      });
    }, 50); // pequena correção se necessário
  };

  return (
    <nav className={`${styles.container} ${scrolled ? styles.scrolled : ""}`}>
      <Link href="/" className={styles.logoContainer}>
        <Image
          className={`${styles.logo} ${scrolled ? styles.scrolled : ""}`}
          src={logo}
          alt="Logo"
        />
      </Link>

      <ul
        className={`${styles.bagulhos} ${openMenu ? styles.open : ""} ${
          scrolled ? styles.scrolled : ""
        }`}
      >
        {items.map((item, index) => (
          <li
            key={index}
            className={pathName === item.url ? styles.active : ""}
          >
            <NavItem
              label={item.label}
              isActive={pathName === item.url}
              openMenu={openMenu}
              onClick={() => {
                scrollToSection(item.url);
                setOpenMenu(false);
              }}
            />
          </li>
        ))}
      </ul>

      <button
        onClick={() => scrollToSection("#services")}
        className={styles.botaoRequest}
      >
        <p>Minhas Capacidades</p>
      </button>

      <button
        className={`${styles.btnMobile} ${scrolled ? styles.scrolled : ""}`}
        onClick={() => setOpenMenu(!openMenu)}
      >
        {!openMenu ? <FaBars /> : <FaXmark />}
      </button>
    </nav>
  );
}
