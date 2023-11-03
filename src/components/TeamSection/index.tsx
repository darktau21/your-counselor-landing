import { Heading } from "../Heading";
import { TeammateCard } from "../TeammateCard";
import styles from "./TeamSection.module.css";

export const TeamSection = () => {
  return (
    <section>
      <div className={`container`}>
        <div className={styles.content}>
          <Heading as="h2">Наша команда</Heading>
          <p>
            Мы - команда, имеющая более года опыта работы в области
            информационных технологий. <br />
            Благодаря нашему личному опыту участия в лагерях, мы стремимся
            улучшить качество детского оздоровительного отдыха.
          </p>
          <div className={styles.team}>
            <TeammateCard
              anglePosition="right-bottom"
              imgSrc="/team/andrey.png"
              fullName="Андрей Коваленок"
              post="Системный аналитик"
            />
            <TeammateCard
              anglePosition="left-top"
              imgSrc="/team/anastasiya.png"
              fullName="Анастасия Соколова"
              post="Менеджер"
            />
            <TeammateCard
              anglePosition="right-bottom"
              imgSrc="/team/anastasiya.png"
              fullName="Максим Бедарев"
              post="UX/UI Designer"
            />
            <TeammateCard
              anglePosition="left-bottom"
              imgSrc="/team/leha.png"
              fullName="Алексей Башкиров"
              post="Системный аналитик"
            />
            <TeammateCard
              anglePosition="right-bottom"
              imgSrc="/team/nastya.png"
              fullName="Анастасия Щепина"
              post="UX/UI Designer"
            />
            <TeammateCard
              anglePosition="left-top"
              imgSrc="/team/ya.png"
              fullName="Кирилл Науменко"
              post="Fullstack-разработчик"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
