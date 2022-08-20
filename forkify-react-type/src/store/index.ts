import { configureStore } from "@reduxjs/toolkit";

import stateSlice from "./state-slice";
import idSlice from "./id-slice";

export const store = configureStore({
  reducer: { state: stateSlice.reducer, id: idSlice.reducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
