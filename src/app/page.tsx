import { Header } from "@/Components/Header/Header";
import { Cards } from "@/Components/Cards/Cards";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <Header />
        <Cards />
      </div>
    </div>
  );
}
