import StickyHeader from "../../components/header/sticky_header/StickyHeader";
import ContactView from "../../views/ContactView";
import MenuSection, { Menu, MenuItem } from "../../views/menu/MenuSection";
import styles from "./menu-page.module.scss";

export default function MenuPage() {
  return (
    <div>
      <StickyHeader />
      <div className={styles.wrapper}>
        <div className={styles.title}>
          <span>Foof</span>
          <span>Poof</span>
          <span>Menu</span>
        </div>

        <div className={styles.menu}>
          <MenuSection menus={generateMenuItems()} />
        </div>
      </div>
      <ContactView styleModule="menu" />
    </div>
  );
}

const generateMenuItems = () => {
  const expressoBar: Menu = {
    title: "Expresso Bar",
    items: [
      {
        title: "Expresso",
        description:
          "Our classic espresso is the heart of every coffee experience, rich, bold, and smooth.",
        price: 2.5,
      },
      {
        title: "Americano",
        description:
          "A perfectly balanced blend of espresso and hot water for a smooth, flavorful cup.",
        price: 3.0,
      },
      {
        title: "Cappuccino",
        description:
          "Espresso with steamed milk and a thick layer of frothy foam, dusted with cocoa.",
        price: 4.0,
      },
      {
        title: "Latte",
        description:
          "Creamy steamed milk combined with a shot of espresso, is perfect for any time of day.",
        price: 4.25,
      },
      {
        title: "Macchiato",
        description: "A shot of espresso marked with a dollop of foamed milk.",
        price: 3.75,
      },
    ],
  };

  const featuredDrinks: Menu = {
    title: "Featured Drinks",
    items: [
      {
        title: "Classic Caramel Latte",
        description:
          "Smooth espresso blended with steamed milk and rich caramel syrup, topped with a velvety foam.",
        price: 5.0,
      },
      {
        title: "Vanilla Bean Cold Brew",
        description:
          "Our slow-steeped cold brew infused with natural vanilla bean, served over ice for a refreshing kick.",
        price: 4.5,
      },
      {
        title: "Maple Cinnamon Cappuccino",
        description:
          "A cozy blend of espresso, steamed milk, and a hint of maple syrup, finished with a sprinkle of cinnamon.",
        price: 5.25,
      },
      {
        title: "Honey Lavender Latte",
        description:
          "Delicate notes of honey and lavender combined with creamy steamed milk and a shot of our signature espresso.",
        price: 5.5,
      },
    ],
  };

  const brewedCoffee: Menu = {
    title: "Brewed Coffee",
    items: [
      {
        title: "House Blend",
        description:
          "A balanced, full-bodied coffee with notes of chocolate and nuts.",
        price: 2.75,
      },
      {
        title: "Dark Roast",
        description: "Bold and rich with a deep, complex flavor profile.",
        price: 3.0,
      },
      {
        title: "Pour-Over",
        description:
          "A handcrafted, single-origin coffee brewed to order for a perfect, personalized cup.",
        price: 4.0,
      },
    ],
  };

  const teasAndMore: Menu = {
    title: "Teas & More",
    items: [
      {
        title: "Chai Latte",
        description:
          "Spiced chai blended with steamed milk for a warming, aromatic drink.",
        price: 4.5,
      },
      {
        title: "Matcha Latte",
        description:
          "Vibrant green matcha combined with steamed milk for a smooth, earthy taste.",
        price: 5.0,
      },
      {
        title: "Herbal Tea",
        description:
          "A selection of caffeine-free teas, perfect for a calming moment.",
        price: 3.5,
      },
      {
        title: "Hot Chocolate",
        description: "Rich, creamy chocolate topped with whipped cream.",
        price: 3.75,
      },
    ],
  };

  const bakery: Menu = {
    title: "Bakery",
    items: [
      {
        title: "Freshly Baked Muffins",
        description: "Choose from blueberry, chocolate chip, or banana nut.",
        price: 3.0,
      },
      {
        title: "Croissants",
        description:
          "Buttery, flaky croissants, available plain or with chocolate.",
        price: 3.25,
      },
      {
        title: "Bagels with Cream Cheese",
        description:
          "Classic bagels served with a generous spread of cream cheese.",
        price: 2.75,
      },
      {
        title: "Cookies",
        description:
          "Soft and chewy, available in chocolate chip, oatmeal raisin, or sugar.",
        price: 2.5,
      },
    ],
  };

  return [expressoBar, featuredDrinks, brewedCoffee, teasAndMore, bakery];
};
