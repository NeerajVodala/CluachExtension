import "./App.css";

function App() {
  return (
    <>
      <div className="app">
        <div className="app-main container">
          <span>
            <div className="app-time">17:56</div>
            <div className="app-greeting">Good Evening, Neeraj</div>
          </span>
          <span>
            <span className="app-text">What is your main focus for today?</span>
            {/* <input className="app-input" /> */}
            <span className="app-focus-text">your focus text comes here</span>
          </span>
        </div>
        <div className="app-quote container">
          "A garden is always a series of losses set against a few triumphs,
          like life itself."
        </div>
        <div className="app-weather container">Weather</div>
        <div className="app-todo">
          {/* <div className="container"></div> */}
          <span>Todo</span>
        </div>
      </div>
    </>
  );
}

export default App;
