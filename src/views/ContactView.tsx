import OverUnder from "../components/cards/over_under/OverUnder";
import SocialBar from "../components/header/header_menu_bar/social_bar/SocialBar";
import Title from "../components/title/Title";

type ContactViewProps = {
  styleModule?: string;
};

export default async function ContactView(props: ContactViewProps) {
  const { styleModule } = props;

  console.log(styleModule);

  let styles: any;
  switch (styleModule) {
    case "about":
      styles = (await import("./about-contact-view.module.scss")).default;
      break;
    case "menu":
      styles = (await import("./about-contact-view.module.scss")).default;
      break;
    default:
      styles = (await import("./contact-view.module.scss")).default;
  }

  return (
    <div className={styles.wrapper}>
      <Title
        title="Get Foofed"
        textColor="var(--dark-brown)"
        lineColor="var(--dark-brown)"
      />
      <div className={styles.container}>
        {/* Iframe of map */}

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d23327.006333985133!2d-86.20605439999999!3d43.044044800000016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1724268967616!5m2!1sen!2sus"
          width="850"
          height="400"
          loading="lazy"
        ></iframe>

        {/* Info */}
        <div className={styles.info}>
          <OverUnder
            overContent={"ADDRESS"}
            underContent={"1234 Foof Poof Lane"}
          />
          <OverUnder overContent={"PHONE"} underContent={"(123) 456-7890"} />
          <OverUnder overContent={"EMAIL"} underContent={"foofmail@mail.com"} />
          <OverUnder overContent={"SOCIAL"} underContent={<SocialBar />} />
        </div>
      </div>
    </div>
  );
}
