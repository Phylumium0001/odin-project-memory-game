import '../styles/ScoreBoard.css' 

export default function ScoreBoard({ score,highScore }) {
  return <>
    <div className="score-board">
      <p>{`Current Score : ${score}`}</p>
      <p>{`High Score : ${highScore}`}</p>
    </div>
  </>
}
