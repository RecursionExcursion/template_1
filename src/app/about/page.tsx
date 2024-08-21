import Image from "next/image";
import styles from "./about-page.module.scss";
import StickyHeader from "../../components/header/sticky_header/StickyHeader";
import ContactView from "../../views/ContactView";

export default function AboutPage() {
  return (
    <div>
      <StickyHeader />
      <div className={styles.wrapper}>
        <div className={styles["text-container"]}>
          <h1>About Us</h1>
          <p>
            Welcome to Morning Roast, where every day begins with the perfect
            cup of coffee. Nestled in the heart of the community, we are more
            than just a coffee shop—we’re your morning ritual, your afternoon
            pick-me-up, and your cozy corner for catching up with friends.
            <br></br>
            <br></br>
            At Morning Roast, we believe that coffee is an experience, not just
            a drink. That’s why we carefully source our beans from sustainable
            farms around the world, ensuring that every cup you enjoy is of the
            highest quality. Our skilled baristas craft each beverage with
            passion and precision, whether it’s a classic espresso, a rich
            pour-over, or one of our seasonal specialties.
            <br></br>
            <br></br>
            But we’re not just about great coffee. We’re about people. Our space
            is designed to be a welcoming retreat from the hustle and bustle of
            everyday life. Whether you’re here to work, relax, or just take a
            moment for yourself, you’ll find a warm atmosphere, friendly faces,
            and, of course, the best coffee in town.
            <br></br>
            <br></br>
            Come in, take a seat, and let us make your day a little brighter—one
            cup at a time.
          </p>
        </div>
        <div className={styles["image-container"]}>
          <Image
            src={"/foof_poof.JPG"}
            alt="foof poof"
            width={550}
            height={200}
          />{" "}
          <Image
            src={"/foof_poof.JPG"}
            alt="foof poof"
            width={550}
            height={400}
          />
        </div>
      </div>
      <ContactView styleModule="about" />
    </div>
  );
}
