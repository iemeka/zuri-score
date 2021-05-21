import "./App.css";
import Counter from "./Counter";
import ContextProvider from "./environ/ContextProvider";

function App() {
  return (
    <div className="container">
      <ContextProvider>
        <div>Zuri Training!</div>
        <Counter />
      </ContextProvider>
    </div>
  );
}

export default App;
