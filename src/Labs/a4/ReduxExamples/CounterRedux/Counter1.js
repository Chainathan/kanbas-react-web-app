import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./counterReducer";

function Counter1() {
  const { count1 } = useSelector((state) => state.counterReducer);
  const { count2 } = useSelector((state) => state.counter2Reducer);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Counter 1</h2>
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <h3>{count1}</h3>
      <h3>{count2}</h3>
    </div>
  );
}

export default Counter1;
