import styles from "./Section.module.css";

type SectionProps = {
  children: React.ReactNode;
};

export default function Section(props: SectionProps) {
  return <div className={styles["section-wrapper"]}>{props.children}</div>;
}
