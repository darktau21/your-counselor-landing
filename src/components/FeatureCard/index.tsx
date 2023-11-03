import { Heading } from "../Heading";
import styles from "./FeatureCard.module.css";

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
};

export const FeatureCard = ({
  anglePosition,
  heading,
  description,
  align,
  isActive = false,
  number,
  className = "",
}: Props) => {
  return (
    <div className={`${styles.card} ${styles[align]} ${className}`}>
      <span
        className={`${styles.number} ${styles[anglePosition]} ${
          isActive && styles["number-active"]
        }`}
      >
        {number}
      </span>
      <Heading as="h3">{heading}</Heading>
      <p className={styles.description}>{description}</p>
    </div>
  );
};
