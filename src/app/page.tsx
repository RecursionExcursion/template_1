import StickyHeader from "../components/header/sticky_header/StickyHeader";
import styles from "./page.module.scss";
import ImageRow from "../components/image_row/ImageRow";
import VerticalCard from "../components/cards/vertical_card/VerticalCard";
import Title from "../components/title/Title";
import ReviewCard from "../components/cards/review_card/ReviewCard";
import ContactView from "../views/ContactView";
import Button from "../components/button/Button";

export default function Home() {
  return (
    <main className={styles.main}>
      <StickyHeader />

      {/* Landing View */}
      <div
        className={styles["landing-view"]}
        style={{
          backgroundImage: "url(/foof_poof.JPG)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className={styles["content-container"]}>
          <span>Foof</span>
          <span>Poof</span>
         <Button text="Appreciate" />
        </div>
      </div>

      {/* Triple Image Display */}
      <div className={styles["triple-image-display"]}>
        <Title
          title="Come for the foof stay for the poof."
          textColor="var(--brown)"
          lineColor="var(--brown)"
        />
        <ImageRow
          height={270}
          width={400}
          imageData={[
            { src: "/foof_poof.JPG", alt: "foof poof" },
            { src: "/foof_poof.JPG", alt: "foof poof" },
            { src: "/foof_poof.JPG", alt: "foof poof" },
          ]}
        />
      </div>

      {/* 4 Cards */}
      <div className={styles["four-cards-display"]}>
        <VerticalCard
          cardData={{
            imageData: {
              src: "/foof_poof.JPG",
              alt: "foof poof",
              height: 191,
              width: 180,
            },
            title: "Foof Poof",
            description: "The best foof poof in town.",
          }}
        />
        <VerticalCard
          cardData={{
            imageData: {
              src: "/foof_poof.JPG",
              alt: "foof poof",
              height: 191,
              width: 180,
            },
            title: "Foof Poof",
            description: "The foofiest poof in town.",
          }}
        />
        <VerticalCard
          cardData={{
            imageData: {
              src: "/foof_poof.JPG",
              alt: "foof poof",
              height: 191,
              width: 180,
            },
            title: "Foof Poof",
            description: "The poofiest foof in town.",
          }}
        />
        <VerticalCard
          cardData={{
            imageData: {
              src: "/foof_poof.JPG",
              alt: "foof poof",
              height: 191,
              width: 180,
            },
            title: "Foof Poof",
            description: "The towniest foof in poof.",
          }}
        />
      </div>

      {/* Review */}
      <div className={styles["review-display"]}>
        <Title
          title="What people are saying"
          textColor="var(--sand)"
          lineColor="var(--brown)"
        />
        <div className={styles["card-container"]}>
          <ReviewCard
            review="This is the best foof poof I've ever had."
            reviewer="Foof Poof Fan"
          />
          <ReviewCard
            review="Morning Roast is my go-to spot for a perfect start to the day. The Honey Lavender Latte is a game-changer!"
            reviewer="Poof Foof Fan"
          />
          <ReviewCard
            review="I'm never going anywhere else for my foof poof."
            reviewer="Foof Poof Poof Fan"
          />
        </div>
      </div>

     <ContactView />
    </main>
  );
}
