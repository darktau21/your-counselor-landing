import { PropsWithChildren } from "react";
import styles from "./P.module.css";

type Props = PropsWithChildren<{
  variant?: "small" | "large";
  className?: string;
}>;

export const P = ({ children, variant = "large", className }: Props) => {
  return <p className={`${styles[variant]} ${className}`}>{children}</p>;
};
