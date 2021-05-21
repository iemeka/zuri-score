import React, { useContext, useEffect } from "react";
import { appContext } from "./environ/appContext";

export default function Percentage() {
  const { scoreObtained, scoreObtainable, errorMsg, setErrorMsg } =
    useContext(appContext);
  const percentage = Math.round((scoreObtained / scoreObtainable) * 100);

  useEffect(() => {
    setErrorMsg(null);
    if (isNaN(scoreObtainable) || isNaN(scoreObtained)) {
      setErrorMsg("invalid input");
    } else if (scoreObtainable < scoreObtained) { //solve infinity case
      setErrorMsg("score obtainable should be greater than score obtained");
    } 
  }, [errorMsg, scoreObtainable, scoreObtained, setErrorMsg]);

  return (
    <div>
      <span>
        {/* if error message is on display, result is invalid. Dont show */}
        {errorMsg === null ? (percentage || 0) : 0} 
        <span>%</span>
      </span>
      <span>percentage Of total Score to obtained</span>
    </div>
  );
}
