import { PropsWithChildren } from "react";
import styles from "./Heading.module.css";

type Props = PropsWithChildren<{
  as?: "h1" | "h2" | "h3";
  color?: "default" | "accent";
  className?: string;
  center?: boolean;
}>;

export const Heading = ({
  className,
  children,
  center = false,
  as = "h1",
  color = "default",
}: Props) => {
  switch (as) {
    case "h1":
      return (
        <h1
          className={`${styles.heading} ${styles[as]} ${
            styles[color]
          } ${className} ${center && styles.center}`}
        >
          {children}
        </h1>
      );
    case "h2":
      return (
        <h2
          className={`${styles.heading} ${styles[as]} ${
            styles[color]
          } ${className} ${center && styles.center}`}
        >
          {children}
        </h2>
      );
    case "h3":
      return (
        <h3
          className={`${styles.heading} ${styles[as]} ${
            styles[color]
          } ${className} ${center && styles.center}`}
        >
          {children}
        </h3>
      );
  }
};
