import { GetServerSidePropsResult, NextPage } from "next";
import Head from "next/head";
import { Home } from "../components/home/";
import { DATA } from "../data";
import { ILearning } from "../interfaces/Lotd";
import { IStory } from "../interfaces/Story";
import { ISubintro } from "../interfaces/Subintro";
import styles from "../styles/Home.module.css";

export interface IProps {
  lotdData: ILearning;
  stories: IStory[];
  subintro: ISubintro;
}

const HomePage: NextPage<IProps> = ({ lotdData, stories, subintro }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Shivam Bhasin</title>
        <meta name="description" content="Explorer | Learner | Writer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home lotdData={lotdData} stories={stories} subintro={subintro} />
    </div>
  );
};

export default HomePage;

export async function getStaticProps(): Promise<
  GetServerSidePropsResult<IProps>
> {
  return {
    props: {
      lotdData: DATA.Lotd,
      stories: DATA.Stories,
      subintro: DATA.Subintro,
    },
  };
}
