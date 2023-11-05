import Image from "next/image";
import styles from "./Logo.module.css";
import { Fira_Sans_Condensed } from "next/font/google";

const fira = Fira_Sans_Condensed({
  subsets: ["latin", "cyrillic"],
  weight: ["500"],
  variable: "--fira-font",
});

export const Logo = () => {
  return (
    <div className={`${styles.logo} ${fira.className}`}>
      <Image src={"/logo.png"} width={40} height={40} alt="Твой Вожатый" />
      <span className={styles.text}>Твой Вожатый</span>
    </div>
  );
};
