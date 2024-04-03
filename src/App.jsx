import "./App.css";
import "./assets/SendIcon.png";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Chatbox from "./features/chatbox/Chatbox.jsx";
import PlayerSection from "./features/playersection/PlayerSection.jsx";
import { resetGame } from "./features/playersection/square/squareSlice.js";

function App() {
  const scores = useSelector((state) => state.square.scores);
  const dispatch = useDispatch();
  const resetButton = () => {
    dispatch(resetGame());
  };
  return (
    <div className="tic-tac-toe">
      <header className="header">
        <p className="player-name">Player1</p>
        <div className="score-wrap">
          <p className="score">
            Score: {scores.player1}:{scores.player2}
          </p>
          <button className="btn-reset" onClick={resetButton}>
            Reset
          </button>
        </div>
        <p className="player-name">Player2</p>
      </header>
      <div className="players-wrap">
        <div className="player-section one">
          <div className="game-table-section">
            <PlayerSection user="player1" />
            <Chatbox user="player1" />
          </div>
        </div>
        <div className="player-section two">
          <div className="game-table-section">
            <PlayerSection user="player2" />
            <Chatbox user="player2" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
