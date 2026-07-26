import { createSlice } from "@reduxjs/toolkit";

const requestSlice = createSlice({
  name: "requests",
  initialState: [],
  reducers: {
    addRequest: (store, action) => action.payload,
  },
});

export default requestSlice.reducer;
export const { addRequest } = requestSlice.actions;
