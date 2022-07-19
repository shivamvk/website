import { useCallback, useState } from "react";
import { ILearning } from "../../interfaces/Lotd";
import { IStory } from "../../interfaces/Story";
import { Confetti } from "../confetti";
import { Intro } from "../intro";
import { Lotd } from "../lotd";
import { Onboarding } from "../onboarding";
import { Stories } from "../stories";

export interface IProps {
  lotdData: ILearning;
  stories: IStory[];
}

export const Home: React.FC<IProps> = ({ lotdData, stories }) => {
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
          <Lotd data={lotdData} />
          <Stories stories={stories} />
        </div>
      )}
    </div>
  );
};
