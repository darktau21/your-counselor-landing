import { Button } from "../Button";
import { Logo } from "../Logo";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header>
      <div className="container">
        <div className={styles.header}>
          <Logo />
          <Button variant="transparent">Спонсировать</Button>
        </div>
      </div>
    </header>
  );
};
