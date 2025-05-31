"use client";

import styles from "./NavItem.module.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export interface NavItemInterface {
  url: string;
  label: string;
  isActive?: boolean;
  openMenu?: boolean;
  onClick?: () => void;
}

export default function NavItem(props: NavItemInterface) {
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Interrompe a navegação padrão
    e.preventDefault();

    // Fecha o menu
    props.onClick?.();

    // Pequeno delay para garantir o re-render antes da navegação
    setTimeout(() => {
      router.push(props.url);
    }, 50);
  };

  return (
    <a
      href={props.url}
      onClick={handleClick}
      className={`${styles.navItem} 
        ${scrolled ? styles.navItemScrolled : ""} 
        ${props.isActive ? styles.active : ""} 
        ${props.openMenu ? styles.open : ""}`}
    >
      {props.label}
    </a>
  );
}
