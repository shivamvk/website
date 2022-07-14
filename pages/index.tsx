import type { NextPage } from "next";
import Head from "next/head";
import { Home } from "../components/home/";
import styles from "../styles/Home.module.css";

const HomePage: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Shivam Bhasin</title>
        <meta name="description" content="Explorer | Learner | Writer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home />
    </div>
  );
};

export default HomePage;
