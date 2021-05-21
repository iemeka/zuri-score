import React, { useContext } from "react";
import { appContext } from "./environ/appContext";
import ErrorMsg from "./ErrorMsg";

export default function Form() {
  const { setScoreObtainable, setScoreObtained, setErrorMsg } =
    useContext(appContext);

  const handleScoreObtainable = (e) => {
    setErrorMsg(null);
    setScoreObtainable(Number(e.target.value));
  };
  const handleScoreObtained = (e) => {
    setErrorMsg(null);
    setScoreObtained(Number(e.target.value));
  };

  return (
    <form>
      <span className="error-message">
        <ErrorMsg />
      </span>
      <input
        type="text"
        id="score-obtainable"
        onChange={handleScoreObtainable}
      />
      <input type="text" id="score-obtained" onChange={handleScoreObtained} />
    </form>
  );
}
