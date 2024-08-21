import Image from "next/image";
import styles from "./vertical-card.module.scss";

type ImageData = {
  src: string;
  alt: string;
  height: number;
  width: number;
};

type CardData = {
  imageData: ImageData;
  title: string;
  description: string;
};

type VerticalCardProps = {
  cardData: CardData;
};

export default function VerticalCard(props: VerticalCardProps) {
  const { cardData } = props;

  return (
    <div>
      <Image
        src={cardData.imageData.src}
        alt={cardData.imageData.alt}
        width={cardData.imageData.width}
        height={cardData.imageData.height}
      />
      <h3>{cardData.title}</h3>
      <p>{cardData.description}</p>
    </div>
  );
}
