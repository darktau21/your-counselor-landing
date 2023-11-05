import { ButtonHTMLAttributes } from "react";
import styles from "./Button.module.css";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "filled" | "transparent";
  linkTo?: string;
};

export const Button = ({
  children,
  variant = "filled",
  className,
  type = "button",
  linkTo,
  ...props
}: Props) => {
  if (linkTo)
    return (
      <a
        className={`${className} ${styles.button} ${styles[variant]}`}
        target="_blank"
        rel="noopener noreferrer"
        href={linkTo}
      >
        {children}
      </a>
    );

  return (
    <button
      className={`${className} ${styles.button} ${styles[variant]}`}
      {...props}
    >
      {children}
    </button>
  );
};
