import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {addValue,decrement,hello,increment,p,removeValue,} from "./store/reducers/pizza.reducers";
function Hello() {
  const { value } = useSelector((state) => state.couter);
  const dispatch = useDispatch();
  console.log(value);
  return (
    <div>
      <h1 className="counter-title">{value}</h1>
      <div className="counter-actions">
        <button onClick={() => dispatch(increment())} className="btn">
          +
        </button>
        <button onClick={() => dispatch(decrement())} className="btn">
          -
        </button>
        <button onClick={() => dispatch(addValue(5))} className="btn">
          +5
        </button>
        <button onClick={() => dispatch(removeValue(5))} className="btn">
          -5
        </button>
        <button onClick={() => dispatch(hello())} className="btn">
          0
        </button>
        <button onClick={() => dispatch(p(9000))} className="btn">
          10000
        </button>
      </div>
    </div>
  );
}
export default Hello;
