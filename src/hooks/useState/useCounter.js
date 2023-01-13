import { useState } from "react";

export const useCounter = (initialState = 10) => {
  const [state, setState] = useState(initialState);

  const increment = (value) => {
    setState(state + value);
  };

  const decrement = (value) => {
    setState(state - value);
  };

  const reset = () => {
    setState(initialState);
  };

  return {
    state,
    increment,
    decrement,
    reset,
  };
};
