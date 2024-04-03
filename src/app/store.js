import { configureStore } from "@reduxjs/toolkit";
import chatboxReducer from "../features/chatbox/chatboxSlice";
import squareReducer from "../features/playersection/square/squareSlice";

const store = configureStore({
  reducer: {
    chatbox: chatboxReducer,
    square: squareReducer,
  },
});

export default store;
