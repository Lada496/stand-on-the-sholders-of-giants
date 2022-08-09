import { configureStore } from "@reduxjs/toolkit";

import stateSlice from "./state-slice";
import idSlice from "./id-slice";

const store = configureStore({
  reducer: { state: stateSlice.reducer, id: idSlice.reducer },
});

export default store;
