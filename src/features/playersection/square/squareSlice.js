import { createSlice } from "@reduxjs/toolkit";

// Helper function to calculate the winner
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

const initialState = {
  squares: Array(9).fill(null),
  currentPlayer: "player1",
  winner: null,
  statusMsg: {
    player1: "Game started! Your turn.",
    player2: "Game started! Wait for your opponent.",
  },
  scores: {
    player1: 0,
    player2: 0,
  },
};

const squareSlice = createSlice({
  name: "square",
  initialState,
  reducers: {
    buttonClicked: (state, action) => {
      const { index } = action.payload;
      const { squares, currentPlayer } = state;

      if (!state.winner && !squares[index]) {
        squares[index] = currentPlayer === "player1" ? "X" : "O";
        state.currentPlayer =
          currentPlayer === "player1" ? "player2" : "player1";

        // Calculate winner
        const winner = calculateWinner(squares);
        if (winner) {
          state.winner = winner;

          // Set status messages based on the winner
          if (winner === "X") {
            state.statusMsg.player1 = "You win!";
            state.statusMsg.player2 = "You lost!";
            console.log(state.statusMsg["player2"]);
            state.scores.player1++;
          } else {
            state.statusMsg.player2 = "You win!";
            state.statusMsg.player1 = "You lost!";
            state.scores.player2++;
          }
        } else if (!squares.includes(null)) {
          // Check for draw
          state.statusMsg.player1 = "It's a draw!";
          state.statusMsg.player2 = "It's a draw!";
        } else {
          // Update status message for next player's turn
          state.statusMsg.player1 = `Next player: ${
            state.currentPlayer === "player1" ? "X" : "O"
          }`;
          state.statusMsg.player2 = `Next player: ${
            state.currentPlayer === "player1" ? "X" : "O"
          }`;
        }
      }
    },
    resetGame: (state) => {
      state.squares = Array(9).fill(null);
      state.currentPlayer = "player1";
      state.winner = null;
      state.statusMsg.player1 = "Game started! Your turn.";
      state.statusMsg.player2 = "Game started! Wait for your turn.";
    },
  },
});

export const { buttonClicked, resetGame } = squareSlice.actions;
export default squareSlice.reducer;
