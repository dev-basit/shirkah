import Image from "next/image";
import styles from "./navbar.module.css";
import { NavbarItems } from "./navbar-items";
import { ICONS } from "@/utils";

export const Navbar = () => {
  return (
    <navbar className={styles.navbarContainer}>
      <Image src={ICONS.LOGO} width={150} height={100} alt="logo" />
      <NavbarItems />
    </navbar>
  );
};
