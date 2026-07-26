import { createSlice } from "@reduxjs/toolkit";

const connectionSlice = createSlice({
  name: "connection",
  initialState: [],
  reducers: {
    addConnection: (state, action) => {
      return Array.isArray(action.payload) ? action.payload : [];
    },
    removeConnection: () => [],
  },
});

export default connectionSlice.reducer;

export const { addConnection, removeConnection } = connectionSlice.actions;
