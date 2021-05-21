import { useContext } from "react";
import { appContext } from "./environ/appContext";

export default function ErrorMsg() {
  const { errorMsg } = useContext(appContext);
  return errorMsg;
}
