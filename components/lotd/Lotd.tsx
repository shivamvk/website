import { useEffect } from "react";
import { ILearning } from "../../interfaces/Lotd";
import styles from "./Lotd.module.css";

const DUMMY_DATA: ILearning = {
  title: "Learning of the day",
  text: `Immediately after every macrotask, the JavaScript engine executes all
    tasks from microtask queue, prior to running any other macrotasks or
    rendering or anything else.`,
  tags: ["javascript", "eventloop"],
};

export const Lotd: React.FC<{}> = () => {
  const { title, text, tags } = DUMMY_DATA;

  useEffect(() => {
    const getData = async () => {
      await fetch("./api/learning");
    };
    getData();
  }, []);

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
};
