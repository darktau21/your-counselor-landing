import { PropsWithChildren } from "react";
import styles from "./Heading.module.css";

type Props = PropsWithChildren<{
  as?: "h1" | "h2" | "h3";
  color?: "default" | "accent";
}>;

export const Heading = ({ children, as = "h1", color = "default" }: Props) => {
  switch (as) {
    case "h1":
      return (
        <h1 className={`${styles.heading} ${styles[as]} ${styles[color]}`}>
          {children}
        </h1>
      );
    case "h2":
      return (
        <h2 className={`${styles.heading} ${styles[as]} ${styles[color]}`}>
          {children}
        </h2>
      );
    case "h3":
      return (
        <h3 className={`${styles.heading} ${styles[as]} ${styles[color]}`}>
          {children}
        </h3>
      );
  }
};
