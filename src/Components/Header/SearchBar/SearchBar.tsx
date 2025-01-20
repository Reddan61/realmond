"use client";

import { useEffect } from "react";
import { useSearchTimeout } from "@/hooks/useSearchTimeout";

import styles from "./SearchBar.module.scss";
import { useStoreContext } from "@/store/store";

export const SearchBar = () => {
  const { search } = useStoreContext();
  const { currentText, onChange, tempText } = useSearchTimeout(1000);

  useEffect(() => {
    search({
      search: currentText,
    });
  }, [currentText]);

  return (
    <input
      value={tempText}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Поиск..."
      className={styles.search}
    />
  );
};
