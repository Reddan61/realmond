"use client";

import { useStoreContext } from "@/store/store";
import { Card } from "@/Components/Cards/Card/Card";
import { Loader } from "@/Components/Loader/Loader";

import styles from "./Cards.module.scss";

export const Items = () => {
  const { list, pending } = useStoreContext();

  if (pending) {
    return (
      <div className={styles.loader}>
        <Loader />
      </div>
    );
  }

  return (
    <>
      {list.map((item, index) => {
        return <Card key={index} item={item} />;
      })}
    </>
  );
};
