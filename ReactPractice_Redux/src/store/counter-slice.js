import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    add(state, action) {
      state.counter = state.counter + action.payload; //payload is the name set by redux as argument
    },
    cut(state) {
      state.counter--; //Toolkit will automatically create a new object
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export const counterActions = counterSlice.actions;
export default counterSlice.reducer;
