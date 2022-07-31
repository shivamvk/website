import React from "react";
import classNames from "classnames";
import styles from "./Button.module.css";

export interface IProps {
  text: string;
  onClick: VoidFunction;
  containerClassnames?: string;
  textClassnames?: string;
}

export const Button: React.FC<IProps> = React.memo(
  ({ text, onClick, textClassnames }) => {
    const textStyles = classNames(textClassnames, styles.text);
    return (
      <div className={styles.container} onClick={onClick}>
        <span className={textStyles}>{text}</span>
      </div>
    );
  }
);

Button.displayName = "Button";
