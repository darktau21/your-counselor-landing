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
            linkTo={
              "https://boosty.to/tvoj-vozhatyj/single-payment/donation/492502/target?share=target_link"
            }
            variant="transparent"
          >
            Спонсировать
          </Button>
        </div>
      </div>
    </header>
  );
};
