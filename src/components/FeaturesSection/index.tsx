"use client";

import { FeatureCard } from "../FeatureCard";
import { Heading } from "../Heading";
import { FeatureImage } from "./FeatureImage";
import styles from "./FeaturesSection.module.css";
import { useState } from "react";

const featureImages = [
  { src: "/features/feature-1.png", alt: "Справочник вожатого" },
  { src: "/features/feature-2.png", alt: "Умный алгоритм" },
  { src: "/features/feature-stub.png", alt: "Персональные заметки" },
  { src: "/features/feature-stub.png", alt: "Расписание для вожатого" },
];

export const FeaturesSection = () => {
  const [activeCard, setActiveCard] = useState(1);

  return (
    <section>
      <div className={`container`}>
        <div className={styles.content}>
          <Heading as="h2" center>
            Функции приложения
          </Heading>
          <div className={styles["features-list"]}>
            <FeatureCard
              number={1}
              anglePosition="right-bottom"
              heading="Справочник вожатого"
              description="В приложении вы найдете обширную базу данных игр, развлечений и полезных пособий. Это позволит вам разнообразить программу, подобрать активности в зависимости от возраста и интересов"
              align="right"
              isActive={activeCard === 1}
              className={styles["feature-1"]}
              img="/features/feature-1.png"
              mobileAlign="mobile-left"
              setActiveCard={setActiveCard}
            />
            <FeatureCard
              number={2}
              anglePosition="right-top"
              heading="Умный алгоритм"
              description="Наше приложение автоматически генерирует задания и активности для каждого дня на основе заранее указанных параметров (например, возрастная группа детей, погодные условия)"
              align="right"
              isActive={activeCard === 2}
              className={styles["feature-2"]}
              img="/features/feature-2.png"
              mobileAlign="mobile-right"
              setActiveCard={setActiveCard}
            />
            <FeatureCard
              number={3}
              anglePosition="left-bottom"
              heading="Персональные заметки"
              description="Вы сможете делать персональные заметки и записи о прогрессе детей, особых случаях или важных моментах во время лагеря"
              align="left"
              isActive={activeCard === 3}
              className={styles["feature-3"]}
              img="/features/feature-stub.png"
              mobileAlign="mobile-left"
              setActiveCard={setActiveCard}
            />
            <FeatureCard
              number={4}
              anglePosition="left-top"
              heading="Расписание для вожатого"
              description="Приложение предоставляет персональное расписание для каждого вожатого с указанием времени и места проведения мероприятий, а также других важных событий"
              align="left"
              isActive={activeCard === 4}
              className={styles["feature-4"]}
              img="/features/feature-stub.png"
              mobileAlign="mobile-right"
              setActiveCard={setActiveCard}
            />

            {activeCard === 1 ? <FeatureImage {...featureImages[0]} /> : null}
            {activeCard === 2 ? <FeatureImage {...featureImages[1]} /> : null}
            {activeCard === 3 ? <FeatureImage {...featureImages[2]} /> : null}
            {activeCard === 4 ? <FeatureImage {...featureImages[3]} /> : null}
          </div>
        </div>
      </div>
    </section>
  );
};
