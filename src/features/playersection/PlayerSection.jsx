import React from "react";
import Square from "./square/Square";
import { useSelector } from "react-redux";

const PlayerSection = ({ user }) => {
  const statusMsg = useSelector((state) => state.square.statusMsg);
  const statusClassName =
    statusMsg[user] === "You win!"
      ? "win-msg"
      : statusMsg[user] === "You lost!"
      ? "lose-msg"
      : "";

  return (
    <div className="player-section">
      <p className={`status-msg ${statusClassName}`}>{statusMsg[user]}</p>
      <div className="tic-tac-table">
        <div className="board-row">
          <Square index={0} />
          <Square index={1} />
          <Square index={2} />
        </div>
        <div className="board-row">
          <Square index={3} />
          <Square index={4} />
          <Square index={5} />
        </div>
        <div className="board-row">
          <Square index={6} />
          <Square index={7} />
          <Square index={8} />
        </div>
      </div>
    </div>
  );
};

export default PlayerSection;
