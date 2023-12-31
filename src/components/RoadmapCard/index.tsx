import { finished } from "stream";
import styles from "./RoadmapCard.module.css";
import { P } from "../P";
import { Heading } from "../Heading";

type Props = {
  position: "left" | "right";
  isLast?: boolean;
  status: "inProgress" | "finished" | "awaiting";
  heading: string;
  todoList: string[];
};

const statuses = {
  inProgress: "В работе",
  finished: "Завершен",
  awaiting: "Ожидание",
};

export const RoadmapCard = ({
  position,
  isLast = false,
  status,
  heading,
  todoList,
}: Props) => {
  return (
    <div className={`${styles.line} ${isLast && styles["last-line"]}`}>
      <div className={styles.svg}>
        {status === "finished" ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
          >
            <circle cx="16" cy="16" r="15.5" fill="#6DC091" stroke="#A8E0C0" />
          </svg>
        ) : null}
        {status === "inProgress" ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
          >
            <circle cx="16" cy="16" r="15.5" fill="#6DC091" stroke="#A8E0C0" />
            <circle cx="16" cy="16" r="10" fill="#F2FCF6" />
          </svg>
        ) : null}
        {status === "awaiting" ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
          >
            <circle cx="16" cy="16" r="15.5" fill="#F0F9F4" stroke="#A8E0C0" />
          </svg>
        ) : null}
        {/* {!isLast ? (
          <svg
            width="2"
            height="170"
            viewBox="0 0 2 170"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="2" height="170" fill="#A8E0C0" />
          </svg>
        ) : null} */}
      </div>
      <div className={`${styles.card} ${styles[position]}`}>
        <header className={styles.header}>
          <Heading as="h3">{heading}</Heading>
          <span
            className={`${styles.label} ${
              status === "finished" && styles["label-finished"]
            }`}
          >
            {status === "finished" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <path
                  d="M6.75012 12.1274L3.62262 8.99988L2.55762 10.0574L6.75012 14.2499L15.7501 5.24988L14.6926 4.19238L6.75012 12.1274Z"
                  fill="#DEF8E9"
                />
              </svg>
            ) : null}
            {statuses[status]}
          </span>
        </header>
        <ul className={styles.list}>
          {todoList.map((item) => (
            <li className={styles["list-item"]} key={item}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
