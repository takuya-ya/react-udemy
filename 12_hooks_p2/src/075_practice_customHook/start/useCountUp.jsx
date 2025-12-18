import { useState } from "react";

export function useCountUp() {
  const [count, setCount] = useState(0);
  const countUp = () => {
    setCount((prev) => prev + 1);
  };

  return [count, countUp];
}
