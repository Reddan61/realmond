import { SearchBar } from "@/Components/Header/SearchBar/SearchBar";

import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <SearchBar />
      </div>
    </header>
  );
};
