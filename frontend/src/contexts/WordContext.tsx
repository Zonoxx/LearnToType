import { createContext, ReactNode, useContext, useState } from "react";
import { WORD_LIST } from "../utils/WordList";

export interface WordContextType {
  word: string;
  score: number;
  currentLetterIndex: number;
  wordList: string[];
  increaseScore: () => void;
  setWordHandler: () => void;
  currentIndexHandler: (letter: string) => boolean;
  decreaseCurrentLetterIndex: () => void;
}

const WordContext = createContext<WordContextType | undefined>(undefined);
export const useWordContext = () => useContext(WordContext);

export const WordProvider = ({ children }: { children: ReactNode }) => {
  const [word, setWord] = useState("Alma");
  const [score, setScore] = useState(0);
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);

  const wordList = WORD_LIST;

  function increaseScore() {
    setScore((prev) => prev + 1);
  }

  function currentIndexHandler(letter: string){
    if (letter.toLowerCase() === word[currentLetterIndex].toLowerCase()) {
      setCurrentLetterIndex((prev) => prev + 1);
      return true;
    }
    return false;
  }

  function decreaseCurrentLetterIndex() {
    if(currentLetterIndex > 0) setCurrentLetterIndex((prev) => prev - 1);
  }

  function setWordHandler() {
    const randomIndex = Math.floor(Math.random() * wordList.length);
    const word = wordList[randomIndex];
    setWord(word);
    setCurrentLetterIndex(0);
  }

  return (
    <WordContext.Provider
      value={{
        word,
        score,
        currentLetterIndex,
        wordList,
        increaseScore,
        setWordHandler,
        currentIndexHandler,
        decreaseCurrentLetterIndex,
      }}
    >
      {children}
    </WordContext.Provider>
  );
};

export default WordProvider;
