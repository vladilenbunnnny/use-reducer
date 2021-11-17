import { useState, useReducer } from "react";
import "./App.css";

function App() {
  // Reducer state //
  const reducer = (state, action) => {
    switch (action.type) {
      case "increment":
        return { count };
    }
  };
  const initialValue = {
    count: 0,
  };
  const [state, dispatch] = useReducer(reducer, initialValue);
  // Reducer state //

  // Classic state //
  const [count, setCount] = useState(0);

  const like = () => {
    setCount(prev => prev + 1);
  };
  const disLike = () => {
    if (count > 0) {
      setCount(prev => prev - 1);
    } else {
      return count;
    }
  };
  // Classic state //

  return (
    <div className="App">
      <div>
        <h1>Classic state</h1>
        <p>Count is: {count}</p>
        <button onClick={like}>Like</button>
        <button onClick={disLike}>Dislike</button>
      </div>
      <div>
        <h1>Reducer state</h1>
        <p>Count is: {state.count}</p>
        <button>Like</button>
        <button>Dislike</button>
      </div>
    </div>
  );
}

export default App;
