import React from "react";
import { ISubintro } from "../../interfaces/Subintro";
import styles from "./Subintro.module.css";

export interface IProps {
  subintro: ISubintro;
}

export const Subintro: React.FC<IProps> = React.memo(({ subintro }) => {
  return (
    <div className={styles.container}>
      {/* <h2 className={styles.title}>{title}</h2> */}
      <p className={styles.text}>{subintro.text}</p>
    </div>
  );
});

Subintro.displayName = "Subintro";
