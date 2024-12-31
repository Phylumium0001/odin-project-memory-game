import { useState } from "react";
import Cards from "./Components/Cards.jsx";
import ScoreBoard from "./Components/ScoreBoard.jsx";
import EndScreen from "./Components/EndScreen.jsx";
function App() {
  const [highScore, setHighScore] = useState(0);
  // const [images, setImages] = useState([
  //   {
  //     // clicked : bool, name:str, src:src[domainName]
  //   },
  // ]);
  const [isEnded, setIsEnded] = useState(false)

  

  return (
    <>
      <div className="info-cont">
        <p className="description">
          You Loose when you click on an image twice. Good Luck!
        </p>
        <ScoreBoard highScore={highScore} />
      </div>

      <Cards />
      {/* <EndScreen />  */}

    </>
  );
}

export default App;
