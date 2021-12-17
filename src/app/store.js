import { configureStore } from "@reduxjs/toolkit";
import calcReducer from "../features/calc/calc.slice";

export const store = configureStore({
  reducer: {
    calcState: calcReducer,
  },
});
