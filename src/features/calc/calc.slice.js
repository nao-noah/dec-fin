import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sum: 0,
};

export const calcSlice = createSlice({
  name: "calc",
  initialState,
  reducers: {
    add: (state, action) => {
      state.sum += action.payload;
    },
    reset: (state) => {
      state.sum = 0;
    },
  },
});

export const selectSum = () => (state) => state.calcState.sum;

export const { add, reset } = calcSlice.actions;
export default calcSlice.reducer;
