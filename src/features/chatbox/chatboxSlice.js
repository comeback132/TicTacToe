import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  players: {
    player1: {
      messages: [],
      input: "",
    },
    player2: {
      messages: [],
      input: "",
    },
  },
};

const chatboxSlice = createSlice({
  name: "chatbox",
  initialState,
  reducers: {
    messageSent: (state, action) => {
      const { text, user } = action.payload;
      state.players[user].messages.push({ text, user });

      const otherPlayer = user === "player1" ? "player2" : "player1";
      state.players[otherPlayer].messages.push({ text, user });
      state.players[user].input = ""; // Clear input after sending message
    },
    setInput: (state, action) => {
      const { user, input } = action.payload;
      state.players[user].input = input;
    },
  },
});

export const { messageSent, setInput } = chatboxSlice.actions;
export default chatboxSlice.reducer;
