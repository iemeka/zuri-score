import React, { useContext } from "react";
import { appContext } from "./environ/appContext";
import ErrorMsg from "./ErrorMsg";
import './Form.css'

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
    <form className="form" autoComplete="off">
      <div className="error-message">
        <span>
        <ErrorMsg />
      </span>
      </div>
      <input
        type="text"
        placeholder="score obtainable"
        id="score-obtainable"
        onChange={handleScoreObtainable}
      />
      <input type="text" id="score-obtained" placeholder="score obtained" onChange={handleScoreObtained} />
    </form>
  );
}
