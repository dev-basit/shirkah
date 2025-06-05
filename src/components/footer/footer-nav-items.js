"use client";
import { usePathname } from "next/navigation";
import { ENUMS } from "@/utils";
import styles from "./footer.module.css";

export const FooterNavbarItems = () => {
  const currentPath = usePathname();

  return (
    <section className={styles.footerNavListContainer}>
      <ul>
        {ENUMS.NAVBAR_ITEMS.map(({ name, link }) => (
          <li
            key={name}
            className={`${styles.footerNavList} ${link === currentPath ? styles.footerNavListActive : ""}`}
          >
            {name}
          </li>
        ))}
      </ul>
    </section>
  );
};
