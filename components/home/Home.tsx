import { useCallback, useState } from "react";
import { Confetti } from "../confetti";
import { Intro } from "../intro";
import { Onboarding } from "../onboarding";

export const Home: React.FC<{}> = () => {
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
        </div>
      )}
    </div>
  );
};
