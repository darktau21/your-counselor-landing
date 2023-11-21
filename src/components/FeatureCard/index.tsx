import { Dispatch, SetStateAction } from "react";
import { Heading } from "../Heading";
import { P } from "../P";
import styles from "./FeatureCard.module.css";
import Image from "next/image";

type XAxis = "left" | "right";
type YAxis = "top" | "bottom";

type AnglePosition = `${XAxis}-${YAxis}`;

type Props = {
  anglePosition: AnglePosition;
  heading: string;
  description: string;
  align: XAxis;
  isActive?: boolean;
  number: number;
  className?: string;
  img: string;
  mobileAlign: `mobile-${XAxis}`;
  setActiveCard: Dispatch<SetStateAction<number>>;
};

export const FeatureCard = ({
  anglePosition,
  heading,
  description,
  align,
  isActive = false,
  number,
  className = "",
  img,
  mobileAlign,
  setActiveCard,
}: Props) => {
  return (
    <div
      className={`${styles.card} ${styles[align]} ${
        isActive && styles.active
      } ${className}`}
      onClick={() => setActiveCard(number)}
    >
      <span
        className={`${styles.number} ${styles[mobileAlign]} ${
          styles[anglePosition]
        } ${isActive && styles["number-active"]}`}
      >
        {number}
      </span>
      <div className={styles["image-wrapper"]}>
        <Image
          src={img}
          fill
          sizes="(max-width: 36em) 144px, 287px"
          quality={90}
          alt={heading}
        />
      </div>
      <Heading className={styles.heading} as="h3">
        {heading}
      </Heading>
      <P variant="small" className={styles.description}>
        {description}
      </P>
    </div>
  );
};
