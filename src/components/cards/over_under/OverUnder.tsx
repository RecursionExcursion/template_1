import React from "react";
// import styles from "./over-under.module.scss";

type OverUnderProps = {
  overContent: string | JSX.Element;
  underContent: string | JSX.Element;
  styleModule?: string;
};

export default async function OverUnder(props: OverUnderProps) {
  const { overContent, underContent, styleModule } = props;

  /* Add other modules to change styles */
  let styles;
  switch (styleModule) {
    default:
      styles = (await import("./over-under.module.scss")).default;
  }

  return (
    <div className={styles?.container}>
      <span className={styles?.over}>{overContent}</span>
      <span className={styles?.under}>{underContent}</span>
    </div>
  );
}
