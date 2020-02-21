import React from "react";
import Counter from "../components/Counter";
import { useSelector, useDispatch } from "react-redux";
import { increase, decrease, setDiff } from "../modules/counter";

function CounterContainer() {
  const { counter, diff } = useSelector(state => ({
    counter: state.counter,
    diff: state.diff
  }));
  console.log(counter);
  const dispatch = useDispatch();

  const onIncrease = () => {
    dispatch(increase());
  };
  const onDecrease = () => {
    dispatch(decrease());
  };
  const onSetDiff = diff => {
    dispatch(setDiff(diff));
  };

  return (
    <Counter
      counter={counter}
      diff={diff}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
      onSetDiff={onSetDiff}
    />
  );
}

export default CounterContainer;
