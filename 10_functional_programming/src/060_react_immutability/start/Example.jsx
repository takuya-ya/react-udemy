import { useState } from "react";

const Child = ({ state, setState }) => {
  const increment = () => {
    setState((perv) => {
      const newState = { value: perv.value + 1 };
      return newState;
    });
  };

  return (
    <>
      <span>{state.value}</span>
      <button onClick={increment}>+</button>
    </>
  );
};

const Example = () => {
  const [state, setState] = useState({ value: 0 });

  return (
    <>
      <div>
        <Child state={state} setState={setState} />
      </div>
    </>
  );
};

export default Example;
