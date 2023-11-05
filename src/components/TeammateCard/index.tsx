import { Heading } from "../Heading";
import { P } from "../P";
import styles from "./TeammateCard.module.css";
import Image from "next/image";

type Props = {
  imgSrc: string;
  fullName: string;
  post: string;
  bgImg?: "castle" | "freddy" | "dino";
};

export const TeammateCard = ({ imgSrc, fullName, post, bgImg }: Props) => {
  return (
    <div className={`${styles.card} ${bgImg && styles[bgImg]}`}>
      <div className={`${styles["img-container"]}`}>
        <Image
          style={{ padding: 0, margin: 0 }}
          width={170}
          height={170}
          src={imgSrc}
          alt={fullName}
          quality={80}
        />
      </div>
      <P className={styles.post}>{post}</P>
      <Heading as="h3">{fullName}</Heading>
    </div>
  );
};
