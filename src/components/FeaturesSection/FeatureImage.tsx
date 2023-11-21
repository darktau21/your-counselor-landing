import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./FeaturesSection.module.css";

type Props = {
  src: string;
  alt: string;
};

export const FeatureImage = ({ src, alt }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={styles["phone-container"]}
    >
      <Image src={src} width={256} height={503} alt={alt} />
    </motion.div>
  );
};
