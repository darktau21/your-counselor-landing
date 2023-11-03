import Image from "next/image";
import styles from "./Logo.module.css";

export const Logo = () => {
  return (
    <div className={styles.logo}>
      <Image src={"/logo.png"} width={40} height={40} alt="Твой Вожатый" />
      <span className={styles.text}>Твой Вожатый</span>
    </div>
  );
};
