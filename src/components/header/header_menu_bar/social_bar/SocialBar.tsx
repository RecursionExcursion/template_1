import Link from "next/link";
import styles from "./SocialBar.module.css";

export default function SocialBar() {
  return (
    <div className={styles["social-bar-wrapper"]}>
        <Link href="https://www.facebook.com/">F</Link>
        <Link href="https://www.twitter.com/">T</Link>
      <Link href="https://www.instagram.com/">I</Link>
    </div>
  );
}
