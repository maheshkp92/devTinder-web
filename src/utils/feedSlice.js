import { createSlice } from "@reduxjs/toolkit";

const feedSlice = createSlice({
  name: "feed",
  initialState: [],
  reducers: {
    addFeed: (state, action) => action.payload,
    removeUserFromFeed: (state, action) => {
      return state.filter((f) => f._id !== action.payload);
    },
  },
});

export default feedSlice.reducer;

export const { addFeed, removeUserFromFeed } = feedSlice.actions;
