import styles from "./Title.module.css";

type TitleProps = {
  title: string;
  textColor?: string;
  lineColor?: string;
};

export default function Title(props: TitleProps) {
  return (
    <div className={styles["title-wrapper"]}>
      <div
        className={styles["title-container"]}
        style={{
          color: props.textColor ?? "",
          borderColor: props.lineColor ?? "",
        }}
      >
        {props.title}
      </div>
    </div>
  );
}
