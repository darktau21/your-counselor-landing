import Image from "next/image";
import styles from "./UserCard.module.css";
import { Heading } from "../Heading";

type Props = {
  imgSrc: string;
  heading: string;
  description: string;
};

export const UserCard = ({ imgSrc, heading, description }: Props) => {
  return (
    <div className={styles.card}>
      <Image src={imgSrc} width={100} height={100} alt={heading} />
      <div className={styles.text}>
        <Heading as="h3" color="accent">
          {heading}
        </Heading>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};
