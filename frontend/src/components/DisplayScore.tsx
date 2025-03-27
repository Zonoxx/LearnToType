import { useWordContext } from "../contexts/WordContext";
import styles from "./DisplayScore.module.css";

function DisplayScore() {
  const wordContext = useWordContext();
  if (!wordContext) {
    throw new Error("useWordContext must be used within a WordProvider");
  }

  return <div className={styles["score"]}>{wordContext.score}</div>;
}

export default DisplayScore;
