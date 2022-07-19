import Image from "next/image";
import { getCloudinaryUrl } from "../../helpers/helper";
import { IStory } from "../../interfaces/Story";
import { Button } from "../ui/button";
import styles from "./Stories.module.css";

export interface IProps {
  stories: IStory[];
}

export const Stories: React.FC<IProps> = ({ stories }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Stories</h2>
      <div className={styles.storiesContainer}>
        {stories.map((story) => {
          return (
            <div key={story.id} className={styles.storyContainer}>
              <Image
                src={getCloudinaryUrl(story.image)}
                alt="Story image"
                width={"100"}
                height={"60"}
                layout="responsive"
                className={styles.storyImage}
              />
              <h3 className={styles.storyTitle}>{story.title}</h3>
              <p className={styles.storySubheading}>{story.subheading}</p>
              <Button
                text={story.readingTime}
                onClick={() => {
                  window.open(story.link, "_blank", "noopener,noreferrer");
                }}
                textClassnames={styles.storyButtonText}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
