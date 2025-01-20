import { Items } from "@/Components/Cards/Items";

import styles from "./Cards.module.scss";

export const Cards = () => {
  return (
    <main className={styles.cards}>
      <div className={styles.container}>
        <Items />
      </div>
    </main>
  );
};
