import { Button } from "../Button";
import { Logo } from "../Logo";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.content}>
          <Logo />
          <Button
            linkTo={"https://www.donationalerts.com/r/tvojvozhatyj"}
            variant="transparent"
            analyticsEvent="Переход по ссылке на донат"
          >
            Поддержать
          </Button>
        </div>
      </div>
    </header>
  );
};
