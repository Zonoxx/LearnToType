import styles from "./DisplayWord.module.css";
import { useWordContext } from "../contexts/WordContext";

function DisplayWord() {
  const wordContext = useWordContext();
  if (!wordContext) {
    throw new Error("useWordContext must be used within a WordProvider");
  }
  return (
    <div>
      <div className={styles["word-display"]}>
        {wordContext.word.toLocaleUpperCase()}
      </div>
    </div>
  );
}

export default DisplayWord;
