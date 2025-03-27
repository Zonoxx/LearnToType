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
    const lastLetter = currentValue[currentValue.length - 1];
    if (!wordContext!.currentIndexHandler(lastLetter)) {
      setTypedWord(currentValue.slice(0, -1));
    }

    if(currentValue.length < wordContext!.currentLetterIndex) {
      wordContext!.decreaseCurrentLetterIndex();
    }

    if (currentValue.toLowerCase() === wordContext!.word.toLowerCase()) {
      wordContext!.increaseScore();
      setTypedWord(currentValue);
      setTimeout(() => {
        wordContext!.setWordHandler();
        setTypedWord("");
      }, 1000);
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
