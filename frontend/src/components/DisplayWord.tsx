import { useWordContext } from "../contexts/WordContext";
import styles from "./DisplayWord.module.css";

function DisplayWord() {
  const wordContext = useWordContext();
  if (!wordContext) {
    throw new Error("useWordContext must be used within a WordProvider");
  }
  const word = wordContext.word.toUpperCase();
  return (
    <div>
      <div className={styles["word-display"]}>
        {word.split("").map((letter, index) => {
          let color = "white";
          if (index < wordContext.currentLetterIndex) {
            color = " #4CAF50";
          } else if (index === wordContext.currentLetterIndex) {
            color = "#2196F3";
          }
          return (
            <span key={index} style={{ color }}>
              {letter}
            </span>
          );
        }
        )}
      </div>
    </div>
  );
}

export default DisplayWord;
