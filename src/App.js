import "./App.css";
import { Main, Quote, Weather } from "./components";

function App() {
  return (
    <>
      <div className="app">
        <Main />
        <Quote />
        <Weather />
      </div>
    </>
  );
}

export default App;
