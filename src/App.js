import "./App.css";
import Counter from "./Counter";
import ContextProvider from "./environ/ContextProvider";

function App() {
  return (
    <div className="container">
      <ContextProvider>
        <div className="zuri-head">
          <h1 id="title">
          Zuri Training
          </h1>
        </div>
        <div className="zuri-body">
          <Counter />
        </div>
      </ContextProvider>
    </div>
  );
}

export default App;
