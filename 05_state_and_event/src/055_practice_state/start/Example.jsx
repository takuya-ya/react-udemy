import { useState } from "react";

const Example = () => {
  const [counte, setCounte] = useState(0);

  const countUp = () => {
    setCounte((state) => state + 1);
  };
  const countDown = () => {
    setCounte((state) => state - 1);
  };

  return (
    <>
      <p>現在のカウント数: {counte}</p>
      <button onClick={countUp}>+</button>
      <button onClick={countDown}>-</button>
    </>
  );
};

export default Example;
