import { createSlice } from "@reduxjs/toolkit";

const idSlice = createSlice({
  name: "id",
  initialState: {
    id: null,
  },
  reducers: {
    updateId(state, action) {
      state.id = action.payload;
    },
  },
});

export const { updateId } = idSlice.actions;

export default idSlice;
