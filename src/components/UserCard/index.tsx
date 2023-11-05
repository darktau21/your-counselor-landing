import Image from "next/image";
import styles from "./UserCard.module.css";
import { Heading } from "../Heading";
import { P } from "../P";

type Props = {
  imgSrc: string;
  heading: string;
  description: string;
};

export const UserCard = ({ imgSrc, heading, description }: Props) => {
  return (
    <div className={styles.card}>
      <div className={styles.text}>
        <Heading as="h3">{heading}</Heading>
        <P variant="small">{description}</P>
      </div>
      <div className={styles["img-wrapper"]}>
        <Image
          src={imgSrc}
          fill
          sizes="(max-width: 70em) 64px, 100px"
          alt={heading}
        />
      </div>
    </div>
  );
};
