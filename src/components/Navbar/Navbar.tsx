"use client";

import Image from "next/image";
import styles from "./NavbarStyle.module.css";
import { useState, useEffect } from "react";
import logo from "@/app/Logo.webp";
import Link from "next/link";
import NavItem, { NavItemInterface } from "../NavItem/NavItem";
import { usePathname } from "next/navigation";
import { FaBars, FaXmark } from "react-icons/fa6";

interface NavbarProps {
  onNavigate: (page: string) => void;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function Navbar({ onNavigate }: NavbarProps) {
  const items: NavItemInterface[] = [
    //TODO:
    //Change all the url's to the right ones once they're finished
    {
      url: "#about",
      label: "Sobre Mim",
    },
    {
      url: "#services",
      label: "Habilidades",
    },
    {
      url: "#contact",
      label: "Contato",
    },
  ];

  const pathName = usePathname();

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [openMenu, setOpenMenu] = useState<boolean>(false);

  return (
    <nav className={`${styles.container} ${scrolled ? styles.scrolled : ""}`}>
      <Link href="/" className={styles.logoContainer}>
        <Image
          className={`${styles.logo} ${scrolled ? styles.scrolled : ""}`}
          src={logo}
          alt="Logo"
        />
      </Link>
      <ul className={`${styles.bagulhos} ${openMenu ? styles.open : ""}`}>
        {items.map((item, index) => (
          <li
            key={index}
            className={pathName === item.url ? styles.active : ""}
          >
            <NavItem
              url={item.url}
              label={item.label}
              isActive={pathName === item.url}
              openMenu={openMenu ? true : false}
              onClick={() => setOpenMenu(false)}
            />
          </li>
        ))}
      </ul>
      <Link href="#projects" className={styles.botaoRequest}>
        <p>Meus Projetos</p>
      </Link>
      <button
        className={`${styles.btnMobile} ${scrolled ? styles.scrolled : ""}`}
        onClick={() => setOpenMenu(!openMenu)}
      >
        {!openMenu ? <FaBars /> : <FaXmark />}
      </button>
    </nav>
  );
}
