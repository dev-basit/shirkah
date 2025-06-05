"use client";
import { usePathname } from "next/navigation";
import { ENUMS } from "@/utils";
import styles from "./navbar.module.css";

export const NavbarItems = () => {
  const currentPath = usePathname();

  return (
    <section>
      <ul>
        {ENUMS.NAVBAR_ITEMS.map(({ name, link }) => (
          <li key={name} className={`${styles.navList} ${link === currentPath ? styles.navListActive : ""}`}>
            {name}
          </li>
        ))}
      </ul>
    </section>
  );
};
