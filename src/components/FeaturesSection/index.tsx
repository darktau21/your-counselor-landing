import Image from "next/image";
import { FeatureCard } from "../FeatureCard";
import { Heading } from "../Heading";
import styles from "./FeaturesSection.module.css";

export const FeaturesSection = () => {
  return (
    <section>
      <div className={`.container`}>
        <div className={styles.content}>
          <Heading as="h2">Функции приложения</Heading>
          <div className={styles["features-list"]}>
            <FeatureCard
              number={1}
              anglePosition="right-bottom"
              heading="Справочник вожатого"
              description="В приложении вы найдете обширную базу данных игр, развлечений и полезных пособий. Это позволит вам разнообразить программу, подобрать активности в зависимости от возраста и интересов"
              align="right"
              isActive={false}
              className={styles["feature-1"]}
            />
            <FeatureCard
              number={2}
              anglePosition="right-top"
              heading="Умный алгоритм"
              description="Наше приложение автоматически генерирует задания и активности для каждого дня на основе заранее указанных параметров (например, возрастная группа детей, погодные условия)"
              align="right"
              isActive={false}
              className={styles["feature-2"]}
            />
            <FeatureCard
              number={3}
              anglePosition="left-bottom"
              heading="Персональные заметки"
              description="Вы сможете делать персональные заметки и записи о прогрессе детей, особых случаях или важных моментах во время лагеря"
              align="left"
              isActive={false}
              className={styles["feature-3"]}
            />
            <FeatureCard
              number={4}
              anglePosition="left-top"
              heading="Расписание для вожатого"
              description="Приложение предоставляет персональное расписание для каждого вожатого с указанием времени и места проведения мероприятий, а также других важных событий"
              align="left"
              isActive={false}
              className={styles["feature-4"]}
            />

            <div className={styles["phone-container"]}>
              <Image
                src={"/phone.png"}
                width={220}
                height={440}
                alt="Смартфон"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
