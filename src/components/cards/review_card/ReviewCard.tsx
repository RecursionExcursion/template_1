import styles from "./review-card.module.scss";

type ReviewCardProps = {
  review: string;
  reviewer: string;
};

export default function ReviewCard(props: ReviewCardProps) {
  const { review, reviewer } = props;

  return (
    <div className={styles["review-container"]}>
      <div className={styles["text-container"]}>
        <p>{'"' + review + '"'}</p>
        <p className={styles["reviewer"]}>- {reviewer}</p>
      </div>
    </div>
  );
}
