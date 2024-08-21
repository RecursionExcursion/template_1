import styles from "./ImageDisplay.module.css";
import Image from "next/image";

type ImageDisplayProps = {
    imagePath: string;
    altText: string;
};

export default function ImageDisplay(props: ImageDisplayProps) {
  return (
    <div className={styles["image-display-wrapper"]}>
      <Image
        src={props.imagePath}
        fill
        alt={props.altText}
        />
    </div>
  );

}
