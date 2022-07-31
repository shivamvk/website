import { useCallback, useState } from "react";
import { ILearning } from "../../interfaces/Lotd";
import { IStory } from "../../interfaces/Story";
import { ISubintro } from "../../interfaces/Subintro";
import { Confetti } from "../confetti";
import { Intro } from "../intro";
import { Lotd } from "../lotd";
import { Onboarding } from "../onboarding";
import { Stories } from "../stories";
import { Subintro } from "../subintro";

export interface IProps {
  lotdData: ILearning;
  stories: IStory[];
  subintro: ISubintro;
}

export const Home: React.FC<IProps> = ({ lotdData, stories, subintro }) => {
  const [showOnboarding, setShowOnboarding] = useState(true);

  const hideOnboarding = useCallback(() => {
    setShowOnboarding(false);
  }, []);

  return (
    <div>
      {showOnboarding ? (
        <Onboarding hideOnboarding={hideOnboarding} />
      ) : (
        <div>
          <Intro />
          <Confetti />
          <Subintro subintro={subintro} />
          <Stories stories={stories} />
          <Lotd data={lotdData} />
        </div>
      )}
    </div>
  );
};
