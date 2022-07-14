import { useEffect, useState } from "react";
import styles from "./Onboarding.module.css";

export interface OnboardingProps {
  hideOnboarding: VoidFunction;
}

export const getTextByStep = (step: number) => {
  switch (step) {
    case 0:
      return "Explorer.";
    case 1:
      return "Learner.";
    case 2:
      return "Writer.";
    default:
      return "";
  }
};

export const Onboarding: React.FC<OnboardingProps> = ({ hideOnboarding }) => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setStep((step) => step + 1);
      clearTimeout(timer1);
    }, 800);
    const timer2 = setTimeout(() => {
      setStep((step) => step + 1);
      clearTimeout(timer2);
    }, 1600);
    const timer3 = setTimeout(() => {
      setStep((step) => step + 1);
      clearTimeout(timer3);
      hideOnboarding();
    }, 2400);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [hideOnboarding]);

  return (
    <div className={styles.container}>
      <h2 className={styles.onboardingText}>{getTextByStep(step)}</h2>
    </div>
  );
};
