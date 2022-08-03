import "./App.css";
import { Quote, Weather } from "./components";
import { Main } from "./pages/Main";

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
