"use client";

import styles from "./NavItem.module.css";
import { useEffect, useState } from "react";

export interface NavItemInterface {
  label: string;
  isActive?: boolean;
  openMenu?: boolean;
  onClick?: () => void;
}

export default function NavItem(props: NavItemInterface) {
  const [scrolled, setScrolled] = useState(false);

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
  };

  return (
    <a
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
