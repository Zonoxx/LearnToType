import { useState } from "react";
import { useWordContext } from "../contexts/WordContext";
import styles from "./WordInput.module.css";

function WordInput() {
  const wordContext = useWordContext();
  if (!wordContext) {
    throw new Error("useWordContext must be used within a WordProvider");
  }

  const [typedWord, setTypedWord] = useState("");

  function inputHandler(event: React.ChangeEvent<HTMLInputElement>) {
    const currentValue = event.target.value;
    console.log(currentValue);
    if (currentValue.toLowerCase() === wordContext!.word.toLowerCase()) {
      wordContext!.setWordHandler();
      wordContext!.increaseScore();
      setTypedWord("");
    } else {
      setTypedWord(currentValue);
    }
  }

  return (
    <div>
      <input
        className={styles["word-input"]}
        type="text"
        value={typedWord.toUpperCase()}
        onChange={inputHandler}
      />
    </div>
  );
}

export default WordInput;
