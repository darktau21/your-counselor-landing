import { Heading } from "../Heading";
import { P } from "../P";
import { RoadmapCard } from "../RoadmapCard";
import styles from "./RoadmapSection.module.css";

export const RoadmapSection = () => {
  return (
    <section>
      <div className={`container`}>
        <div className={styles.content}>
          <Heading as="h2" center>
            Что было сделано
          </Heading>
          <P>
            Мы находимся в активной разработке приложения и не планируем
            останавливаться, так как уже достигли значительных результатов.
          </P>
          <div className={styles.roadmap}>
            <RoadmapCard
              heading="Планирование"
              position="left"
              status="finished"
              todoList={[
                "Анализ конкурентов",
                "Концепция продукта",
                "Cust-dev",
              ]}
            />
            <RoadmapCard
              heading="Проектирование"
              position="right"
              status="inProgress"
              todoList={[
                "Прототипирование",
                "Спецификация требований",
                "Создание макетов",
              ]}
            />
            <RoadmapCard
              heading="Разработка"
              position="left"
              status="awaiting"
              todoList={[
                "Создание лендинга",
                "Разработка Backend приложения",
                "Разработка Frontend приложения",
              ]}
            />
            <RoadmapCard
              isLast
              heading="Тестирование"
              position="right"
              status="awaiting"
              todoList={[
                "Функциональное тестирование",
                "Usability тестирование",
                "Устранение ошибок",
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
