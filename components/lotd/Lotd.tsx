import React from "react";
import { ILearning } from "../../interfaces/Lotd";
import styles from "./Lotd.module.css";

export interface IProps {
  data: ILearning;
}

export const Lotd: React.FC<IProps> = React.memo(({ data }) => {
  const { title, text, tags } = data;

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.text}>{text}</p>
      <div className={styles.tags}>
        {tags.map((tag: string) => {
          return (
            <span key={tag} className={styles.tag}>
              {tag}
            </span>
          );
        })}
      </div>
    </div>
  );
});

Lotd.displayName = "Lotd";
