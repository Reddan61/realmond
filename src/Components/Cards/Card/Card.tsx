import { FC } from "react";
import Image from "next/image";
import { ItemType } from "@/api/helpers/ApiTransformer";

import styles from "./Card.module.scss";

interface IProps {
  item: ItemType;
}

export const Card: FC<IProps> = ({ item }) => {
  return (
    <div className={styles.card}>
      <Image
        src={item.artworkUrl60 ?? "/noImage.png"}
        width={60}
        height={60}
        alt={`${item.trackName} image`}
      />
      <div className={styles.content}>
        <h1>{item.trackName}</h1>
        <h2>{item.artistName}</h2>
      </div>
    </div>
  );
};
