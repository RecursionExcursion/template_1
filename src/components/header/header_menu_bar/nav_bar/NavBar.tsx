import Link from "next/link";
import styles from "./NavBar.module.css";

export default function NavBar() {
  return (
    <div className={styles["nav-container"]}>
      <div className={styles["menu-wrapper"]}>
        <Link href="/">Home</Link>
        <Link href="/">Featured Drinks</Link>
        <Link href="/about">About</Link>
        <Link href="/menu">Menu</Link>
      </div>
    </div>
  );
}
