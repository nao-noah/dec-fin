import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectSum, add, reset } from "./calc.slice";
import "./calc-page.css";

export const CalcPage = () => {
  const sum = useSelector(selectSum());
  const dispatch = useDispatch();
  const [num, setNum] = useState("0");

  return (
    <div>
      <div className="title">Happy Adding Numbers</div>
      <div className="sum">{sum}</div>
      <div className="input-container">
        <input
          className="input-num"
          value={num}
          onChange={(e) => {
            const n = Number(e.target.value);
            if (isNaN(n)) {
              window.alert("Put a number, please.");
            } else {
              setNum(n);
            }
          }}
        ></input>
      </div>
      <div className="button-container">
        <button
          className="add-btn"
          onClick={() => {
            dispatch(add(num));
            setNum(0);
          }}
        >
          Add
        </button>
        <button className="reset-btn" onClick={() => dispatch(reset())}>
          Reset
        </button>
      </div>
    </div>
  );
};
