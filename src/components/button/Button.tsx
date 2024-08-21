"use client";

import styles from "./button.module.scss";

type ButtonProps = {
  text: string;
  attributes?: React.ComponentPropsWithoutRef<"button">;
};

export default function Button(props: ButtonProps) {
  const { text, attributes } = props;
  return (
    <button className={styles.button} {...attributes}>
      {text}
    </button>
  );
}
