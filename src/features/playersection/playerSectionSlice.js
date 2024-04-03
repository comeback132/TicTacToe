import { createSlice } from "@reduxjs/toolkit";



const playerSectionSlice = createSlice({
  name: "playerSection",
  initialState,
  reducers: {
    win: (state, action) => {
        const { status, user } = action.payload;
    },
    loss: (state, action) => {
        const { status, user } = action.payload;
    },
    draw: (state, action) => {
        const { status, user } = action.payload;
    },
  },
});

export const {  } = playerSectionSlice.actions;
export default playerSectionSlice.reducer;