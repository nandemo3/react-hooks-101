import React, { useState, useEffect } from "react";

const App = (props) => {
  const [state, setState] = useState(props);
  const { name, price } = state;

  useEffect(() => {
    console.log("This is like componentDidMound or componentDidUpdate.");
  });

  useEffect(() => {
    console.log("This is like componentDidMound.");
  }, []);

  useEffect(() => {
    console.log("This callback is for name only.");
  }, [name]);

  return (
    <>
      <p>
        現在の{name}は、{price}円です。
      </p>
      <button onClick={() => setState({ ...state, price: price + 1 })}>
        +1
      </button>
      <button onClick={() => setState({ ...state, price: price - 1 })}>
        -1
      </button>
      <button onClick={() => setState(props)}>Reset</button>
      <input
        value={name}
        onChange={(event) => setState({ ...state, name: event.target.value })}
      />
    </>
  );
};

export default App;

App.defaultProps = {
  name: "",
  price: 1000,
};
