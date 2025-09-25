import * as React from "react";
import styles from "./marquee.module.css";
import cn from "../../../utils/classNames";

interface IProps {
  direction?: "left" | "right";
  children: React.ReactNode;
}

function Marquee({ children, direction = "left" }: IProps) {
  return (
    <div className={styles.marqueeContainer}>
      <div
        className={cn(
          styles.marqueeContent,
          direction === "left" ? styles.marqueeLeft : styles.marqueeRight
        )}
      >
        {Array.from({ length: 15 }).map(() => children)}
      </div>
    </div>
  );
}

export default Marquee;
