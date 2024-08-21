import { it } from "node:test";
import styles from "./menu-section.module.scss";

export type MenuItem = {
  title: string;
  description: string;
  price: number;
};

export type Menu = {
  title: string;
  items: MenuItem[];
};

type MenuSectionProps = {
  menus: Menu[];
};

export default function MenuSection(props: MenuSectionProps) {
  const { menus } = props;

  return (
    <div className={styles.menu}>
      {menus.map((menu, index) => (
        <div className={styles.section} key={menu.title + index}>
          <div className={styles.title}>{menu.title}</div>

          {menu.items.map((item, index) => {
            const nameAndPrice = `${item.title} - $${item.price}`;
            return (
              <div key={item.title + index} className={styles["item-container"]}>
                <span>{nameAndPrice}</span>
                <span>{item.description}</span>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}
