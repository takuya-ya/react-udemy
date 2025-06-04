import { useState } from "react";

const Example = () => {
  const [countA, setCountA] = useState(0);
  const [countB, setCountB] = useState(10);
  const [countC, setCountC] = useState(100);
  return (
    <>
      <p>ボタンAを{countA}回押しました!</p>
      <button onClick={(e) => {
          setCountA((countA + 1));
        }}>ボタンA</button>

      <p>ボタンBを{countB}回押しました!</p>
      <button onClick={(e) => {
          setCountB((countB + 1));
        }}>ボタンA</button>

      <p>ボタンAを{countC}回押しました!</p>
      <button onClick={(e) => {
          setCountC((countC + 1));
        }}>ボタンA</button>
    </>
  );
};

export default Example;
