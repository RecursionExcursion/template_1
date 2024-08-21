import Image from "next/image";
import styles from "./ImageRow.module.scss";

type ImageData = {
  src: string;
  alt: string;
};

type ImageRowProps = {
  imageData: ImageData[];
  height: number;
  width: number;
};

export default function ImageRow(props: ImageRowProps) {
  const { imageData, height, width } = props;

  return (
    <div className={styles["image-row-container"]}>
      {imageData.map((data, index) => (
        <Image
          key={index}
          src={data.src}
          alt={data.alt}
          width={width}
          height={height}
        />
      ))}
    </div>
  );
}
