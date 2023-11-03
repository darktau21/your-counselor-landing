import { ButtonHTMLAttributes } from "react";
import styles from "./Button.module.css";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "filled" | "transparent";
};

export const Button = ({
  children,
  variant = "filled",
  className,
  type = "button",
  ...props
}: Props) => {
  return (
    <button
      className={`${className} ${styles.button} ${styles[variant]}`}
      {...props}
    >
      {children}
    </button>
  );
};
