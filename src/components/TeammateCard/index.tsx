import { Heading } from "../Heading";
import styles from "./TeammateCard.module.css";
import Image from "next/image";

type XAxis = "left" | "right";
type YAxis = "top" | "bottom";
type AnglePosition = `${XAxis}-${YAxis}`;

type Props = {
  imgSrc: string;
  fullName: string;
  post: string;
  anglePosition: AnglePosition;
};

export const TeammateCard = ({
  anglePosition,
  imgSrc,
  fullName,
  post,
}: Props) => {
  return (
    <div className={styles.card}>
      <div className={`${styles["img-container"]} ${styles[anglePosition]}`}>
        <Image
          style={{ padding: 0, margin: 0 }}
          width={170}
          height={170}
          src={imgSrc}
          alt={fullName}
          quality={80}
        />
      </div>
      <Heading as="h3">{fullName}</Heading>
      <p>{post}</p>
    </div>
  );
};
