// import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter-slice";
import authReducer from "./auth-slice";

const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer },
});

// const counterReducer = (state = initialState, action) => {
//   if (action.type === "ADD") {
//     return {
//       counter: state.counter + action.amount,
//       showCounter: state.showCounter,
//     };
//   } else if (action.type === "CUT") {
//     return { counter: state.counter - 1, showCounter: state.showCounter };
//   } else if (action.type === "TOGGLE") {
//     return { showCounter: !state.showCounter, counter: state.counter };
//   }

//   return state;
// };

// const store = createStore(counterReducer);

export default store;
