import React from "react";
import { useEffect, useState } from "react";
import styles from "./Confetti.module.css";

export const Confetti: React.FC<{}> = React.memo(() => {
  const [show, setShow] = useState(false);
  const [posA, setPosA] = useState({ top: 100, right: 100 });
  const [posB, setPosB] = useState({ top: 300, right: 500 });
  const [posC, setPosC] = useState({ top: 600, right: 700 });
  useEffect(() => {
    const h = window.innerHeight - 50;
    const w = window.innerWidth - 50;
    const interval1 = setInterval(() => {
      setPosA({
        top: Math.random() * h,
        right: Math.random() * w,
      });
    }, 5000);
    const interval2 = setInterval(() => {
      setPosB({
        top: Math.random() * h,
        right: Math.random() * w,
      });
    }, 4000);
    const interval3 = setInterval(() => {
      setPosC({
        top: Math.random() * h,
        right: Math.random() * w,
      });
    }, 6000);
    const timeout = setTimeout(() => {
      setShow(true);
      clearTimeout(timeout);
    }, 2000);

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
      clearInterval(interval3);
      clearTimeout(timeout);
    };
  }, []);
  return show ? (
    <div>
      <div
        className={styles.square}
        style={{ top: posA.top, right: posA.right }}
      ></div>
      <div
        className={styles.squareBig}
        style={{ top: posB.top, right: posB.right }}
      ></div>
      <div
        className={styles.triangle}
        style={{ top: posC.top, right: posC.right }}
      ></div>
    </div>
  ) : (
    <></>
  );
});

Confetti.displayName = "Confetti";
