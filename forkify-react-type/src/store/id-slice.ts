import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./index";

interface IId {
  id: string;
}

const initialState: IId = {
  id: "",
};

const idSlice = createSlice({
  name: "id",
  initialState,
  reducers: {
    updateId(state, action: PayloadAction<string>) {
      state.id = action.payload;
    },
  },
});

export const { updateId } = idSlice.actions;

export const selectId = (state: RootState) => state.id.id;

export default idSlice;
