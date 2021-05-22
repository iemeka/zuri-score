import React from "react";
import Percentage from "./Percentage";
import Form from "./Form";
import "./Counter.css";

export default function Counter() {
  return (
    <div className="container-content">
      <Percentage />
      <Form />
    </div>
  );
}
