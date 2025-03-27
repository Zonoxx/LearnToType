import "./App.css";
import DisplayScore from "./components/DisplayScore";
import DisplayWord from "./components/DisplayWord";
import WordInput from "./components/WordInput";
import { WordProvider } from "./contexts/WordContext";

function App() {
  return (
    <>
      <WordProvider>
        <DisplayScore />
        <DisplayWord />
        <WordInput />
      </WordProvider>
    </>
  );
}

export default App;
