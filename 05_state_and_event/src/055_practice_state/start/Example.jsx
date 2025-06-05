import { useState } from 'react';

const Example = () => {
  const [count, setCount] = useState(0);

  const countUp = () => {
    // 更新用関数に渡す引数がstateの
    setCount(state => state + 1);
  };
  
  const countDown = () => {
    setCount(state => state - 1);
  };

  return (
    <>
      <p>現在のカウント数: {count}</p>
      <button onClick={countUp}>+</button>
      <button onClick={countDown}>-</button>
    </>
  );
};

export default Example;