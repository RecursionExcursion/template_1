import Image from "next/image";
import styles from "./StickyHeader.module.css";
import NavBar from "../header_menu_bar/nav_bar/NavBar";
import SocialBar from "../header_menu_bar/social_bar/SocialBar";

export default function StickyHeader() {
  return (
    <div className={styles["header-wrapper"]}>
      <div className={styles["content-container"]}>
        <div className={styles["logo-wrapper"]}>
          {/* Logo */}
          <Image src="/foof_poof.JPG" height={90} width={90} alt="A Boot" />
        </div>
        <div className={styles["menu-wrapper"]}>
          {/* Social Bar */}
          <SocialBar />
          {/* Menu Bar */}
          <NavBar />
        </div>
      </div>
    </div>
  );
}
