import { Heading } from "../Heading";
import { UserCard } from "../UserCard";
import styles from "./CreatedForSection.module.css";

export const CreatedForSection = () => {
  return (
    <section className={styles.section}>
      <div className={`container`}>
        <div className={styles.content}>
          <Heading center as="h2" className={styles.heading}>
            Приложение создано для
          </Heading>
          <div className={styles["cards-wrapper"]}>
            <UserCard
              imgSrc="/for-user-1.png"
              heading="Вожатых"
              description="Используйте инструменты и ресурсы, которые помогут вам преодолеть трудности в организации досуга с детьми"
            />
            <UserCard
              imgSrc="/for-user-2.png"
              heading="Бизнеса"
              description="Повысьте эффективность работы лагеря и обеспечьте успешный опыт для детей и персонала"
            />
            <UserCard
              imgSrc="/for-user-3.png"
              heading="Родителей"
              description="Следите за успехами и достижениями детей во время их пребывания в лагере"
            />
            <UserCard
              imgSrc="/for-user-4.png"
              heading="Детей"
              description="Делитесь впечатлениями о лагере и находите новых друзей"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
