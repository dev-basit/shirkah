import Image from "next/image";
import styles from "./navbar.module.css";
import { ENUMS, ICONS } from "@/utils";

export const Navbar = () => {
  return (
    <div className={styles.navbarContainer}>
      <Image src={ICONS.LOGO} width={150} height={100} alt="logo" />
      <ul>
        {ENUMS.NAVBAR_ITEMS.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </div>
  );
};
