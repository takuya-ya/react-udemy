import { useState } from "react";

const animals = ["Dog", "Cat", "Rat"];
// POINT filterメソッドの使い方
const Example = () => {
  const [filterVal, setFilterVal] = useState("");
  return (
    <>
      <h3>配列のフィルター</h3>
      <input type="text" value={filterVal} onChange={(e) => setFilterVal(e.target.value)} />
      <ul>
        {animals
        // filterには真偽値が返る。trueだと処理継続、falseだと消滅 (ループにおけるcontinueのようなイメージ)
          .filter(animal => {
            const isMatch = animal.indexOf(filterVal) !== -1;
            console.log(animal.indexOf(filterVal))
            return isMatch
          })
          .map((animal) => (
          <li key={animal}>{animal}</li>
        ))}
      </ul>
    </>
  );
};

export default Example;
