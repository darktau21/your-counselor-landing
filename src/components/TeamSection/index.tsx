import { Heading } from "../Heading";
import { P } from "../P";
import { TeammateCard } from "../TeammateCard";
import styles from "./TeamSection.module.css";

export const TeamSection = () => {
  return (
    <section>
      <div className={`container`}>
        <div className={styles.content}>
          <Heading as="h2">Наша команда</Heading>
          <P>
            Благодаря нашему личному опыту участия в лагерях, мы стремимся
            улучшить качество детского оздоровительного отдыха.
          </P>
          <div className={styles.team}>
            <TeammateCard
              imgSrc="/team/andrey.png"
              fullName="Андрей Коваленок"
              post="Системный аналитик"
              bgImg="castle"
            />
            <TeammateCard
              imgSrc="/team/anastasiya.png"
              fullName="Анастасия Соколова"
              post="Менеджер"
            />
            <TeammateCard
              imgSrc="/team/maxxx.png"
              fullName="Максим Бедарев"
              post="UX/UI Designer"
            />
            <TeammateCard
              imgSrc="/team/leha.png"
              fullName="Алексей Башкиров"
              post="Системный аналитик"
            />
            <TeammateCard
              imgSrc="/team/nastya.png"
              fullName="Анастасия Щепина"
              post="UX/UI Designer"
              bgImg="dino"
            />
            <TeammateCard
              imgSrc="/team/ya.png"
              fullName="Кирилл Науменко"
              post="Fullstack-разработчик"
              bgImg="freddy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
