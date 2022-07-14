import Image from "next/image";
import styles from "./Intro.module.css";
import MEIMAGE from "./../../public/images/memoji.png";

export const Intro: React.FC<{}> = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageDiv}>
        <Image alt="shivam bhasin" src={MEIMAGE} />
      </div>
      <div className={styles.contentDiv}>
        <h3>&#128075; Hey there, I am</h3>
        <h1>Shivam Bhasin</h1>
        <h3>Explorer. Learner. Writer.</h3>
      </div>
    </div>
  );
};
