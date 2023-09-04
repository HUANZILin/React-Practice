import { useDispatch, useSelector } from "react-redux";

import { counterActions } from "../store/counter-slice";
import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);

  const addHandler = () => {
    // dispatch({ type: "ADD", amount: 1 });
    dispatch(counterActions.add(1));
  };

  const cutHandler = () => {
    // dispatch({ type: "CUT" });
    dispatch(counterActions.cut());
  };

  const toggleCounterHandler = () => {
    // dispatch({ type: "TOGGLE" });
    dispatch(counterActions.toggle());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={addHandler}>Add</button>
        <button onClick={cutHandler}>Cut</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
