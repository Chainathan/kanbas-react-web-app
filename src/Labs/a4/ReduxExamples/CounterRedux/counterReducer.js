import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count1: 0,
};

const counterSlice = createSlice({
  name: "counter1",
  initialState,
  reducers: {
    increment1: (state) => {
      state.count1++;
    },
    decrement1: (state) => {
      state.count1--;
    },
    setCount1: (state, action) => {
      state.count1 = action.payload;
    },
  },
});

export const { increment, decrement, setCount } = counterSlice.actions;
export default counterSlice.reducer;
