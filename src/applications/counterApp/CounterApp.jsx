import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
  multiplyByAmount,
} from "../../redux/slices/counterSlice";

const CounterApp = () => {
  //const [count, setCount]
  const {
    count,
    name,
    address: { city },
  } = useSelector((state) => state.counter);

  const dispatch = useDispatch();

  const onMinusClick = () => {
    console.log("minus");
    dispatch(decrement());
  };

  const onPlusClick = () => {
    console.log("plus");
    dispatch(increment());
  };

  const onPlusTenClick = () => {
    dispatch(incrementByAmount(10));
  };
  const onMultiplyByTen = () => {
    dispatch(multiplyByAmount(10));
  };

  return (
    <div>
      <h4>
        {name} at <em>{city}</em>{" "}
      </h4>
      <button onClick={onMinusClick}>-</button>
      <span>{count}</span>
      <button onClick={onPlusClick}>+</button>
      <button onClick={onPlusTenClick}>+10</button>
      <button onClick={onMultiplyByTen}>*10</button>
    </div>
  );
};

export default CounterApp;
