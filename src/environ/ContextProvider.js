import React, { useState } from "react";
import { appContext } from "./appContext";

function ContextProvider({ children }) {
  const [scoreObtainable, setScoreObtainable] = useState(null);
  const [scoreObtained, setScoreObtained] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const value = {
    scoreObtainable,
    setScoreObtainable,
    scoreObtained,
    setScoreObtained,
    errorMsg,
    setErrorMsg
  };
  return <appContext.Provider value={value}>{children}</appContext.Provider>;
}

export default ContextProvider;
