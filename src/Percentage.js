import React, { useContext, useEffect } from "react";
import { appContext } from "./environ/appContext";
import './Percentage.css'

export default function Percentage() {
  const { scoreObtained, scoreObtainable, errorMsg, setErrorMsg } =
    useContext(appContext);
  const percentage = Math.round((scoreObtained / scoreObtainable) * 100);

  useEffect(() => {
    setErrorMsg(null);
    if (isNaN(scoreObtainable) || isNaN(scoreObtained)) {
      setErrorMsg("invalid input");
    } else if (scoreObtainable < scoreObtained) {
      //solve infinity case
      setErrorMsg("score obtainable is less than score obtained");
    }
  }, [errorMsg, scoreObtainable, scoreObtained, setErrorMsg]);

  return (
    <div className="percentage-wrapper">
      <span id="score-body">
        {/* if error message is on display, result is invalid. Dont show */}
        {errorMsg === null ? percentage || 0 : 0}
        <span id="score-sign">%</span>
      </span>
      <label>percentage Of total score obtained</label>
    </div>
  );
}
