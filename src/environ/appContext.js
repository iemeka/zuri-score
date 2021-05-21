import React from "react";

export const appContext = React.createContext({
  scoreObtainable: null,
  setScoreObtainable: () => {},
  scoreObtained: null,
  setScoreObtained: () => { },
  errorMsg: null,
  setErrorMsg: () => {}
});
