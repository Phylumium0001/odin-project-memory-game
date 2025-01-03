import { useState } from "react";
import Cards from "./Components/Cards.jsx";
import ScoreBoard from "./Components/ScoreBoard.jsx";
import EndScreen from "./Components/EndScreen.jsx";
function App() {
  const [highScore, setHighScore] = useState(0);
  const [score, setScore] = useState(0);

  const [isEnded, setIsEnded] = useState(false);

  return (
    <>
      <div className="info-cont">
        <p className="description">
          You Loose when you click on an image twice. Good Luck!
        </p>
        <ScoreBoard score={score} highScore={highScore} />
      </div>

      <Cards
        score={score}
        setScore={setScore}
        highScore={highScore}
        setHighScore={setHighScore}
      />
      {/* <EndScreen />  */}
    </>
  );
}

export default App;
