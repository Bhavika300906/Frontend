import React from "react";
import { createStore } from "redux";
import { Provider, useSelector, useDispatch } from "react-redux";

/* ---------- Redux Reducer ---------- */
const initialState = { count: 0 };

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

/* ---------- Redux Store ---------- */
const store = createStore(counterReducer);

/* ---------- Component using useSelector & useDispatch ---------- */
function Counter() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h3>Redux Counter</h3>
      <p>Count: {count}</p>

      <button onClick={() => dispatch({ type: "INCREMENT" })}>
        Increment
      </button>

      <button onClick={() => dispatch({ type: "DECREMENT" })}>
        Decrement
      </button>
    </div>
  );
}

/* ---------- Main Practical Component ---------- */
function Practical_10_3() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

export default Practical_10_3;
