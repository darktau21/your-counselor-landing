import { ButtonHTMLAttributes } from "react";
import styles from "./Button.module.css";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "filled" | "transparent";
  linkTo?: string;
  analyticsEvent?: string;
};

export const Button = ({
  children,
  variant = "filled",
  className,
  type = "button",
  linkTo,
  analyticsEvent,
  ...props
}: Props) => {
  if (linkTo)
    return (
      <a
        className={`${className} ${styles.button} ${styles[variant]}`}
        target="_blank"
        rel="noopener noreferrer"
        href={linkTo}
        data-umami-event={analyticsEvent}
      >
        {children}
      </a>
    );

  return (
    <button
      className={`${className} ${styles.button} ${styles[variant]}`}
      data-umami-event={analyticsEvent}
      {...props}
    >
      {children}
    </button>
  );
};
