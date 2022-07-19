import { GetServerSidePropsResult, NextPage } from "next";
import Head from "next/head";
import { Home } from "../components/home/";
import { ILearning } from "../interfaces/Lotd";
import { IStory } from "../interfaces/Story";
import { getLotd } from "../services/learnings";
import { getStories } from "../services/stories";
import styles from "../styles/Home.module.css";

export interface IProps {
  lotdData: ILearning;
  stories: IStory[];
}

const HomePage: NextPage<IProps> = ({ lotdData, stories }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Shivam Bhasin</title>
        <meta name="description" content="Explorer | Learner | Writer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home lotdData={lotdData} stories={stories} />
    </div>
  );
};

export default HomePage;

export async function getServerSideProps(): Promise<
  GetServerSidePropsResult<IProps>
> {
  const lotdData = await getLotd();
  const storiesData = await getStories();
  if (lotdData.status === 0) {
    return {
      props: {
        lotdData: lotdData.data,
        stories: storiesData.data,
      },
    };
  } else {
    return {
      notFound: true,
    };
  }
}
