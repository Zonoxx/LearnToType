import { createContext, ReactNode, useContext, useState } from "react";
import { WORD_LIST } from "../utils/WordList";

export interface WordContextType {
  word: string;
  score: number;
  wordList: string[];
  increaseScore: () => void;
  setWordHandler: () => void;
}

const WordContext = createContext<WordContextType | undefined>(undefined);
export const useWordContext = () => useContext(WordContext);

export const WordProvider = ({ children }: { children: ReactNode }) => {
  const [word, setWord] = useState("Alma");
  const [score, setScore] = useState(0);

  const wordList = WORD_LIST;

  function increaseScore() {
    setScore((prev) => prev + 1);
  }

  function setWordHandler() {
    const randomIndex = Math.floor(Math.random() * wordList.length);
    const word = wordList[randomIndex];
    setWord(word);
  }

  return (
    <WordContext.Provider
      value={{
        word,
        wordList,
        score,
        increaseScore,
        setWordHandler,
      }}
    >
      {children}
    </WordContext.Provider>
  );
};
