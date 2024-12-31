import '../styles/ScoreBoard.css' 

export default function ScoreBoard({ highScore }) {
  return <>
    <div className="score-board">
      <p>{`Current Score : 00`}</p>
      <p>{`High Score : 00`}</p>
    </div>
  </>
}
