import { useState } from "react";

const animals = ["Dog", "Cat", "Rat"];

const Example = () => {
  const [filterVal, setFilterVal] = useState('');
  return (
    <>
      <h3>配列のフィルター</h3>
      {/* valueはなぜ｛｝かわかってる？ */}
      <input type="text" value={filterVal} onChange={(e) => {setFilterVal(e.target.value)}}/>
      <ul>
        {animals
          .filter((animal) => {
            const isMatch = animal.indexOf(filterVal) !== -1;
            return isMatch
          })
          .map((animal) => (
            // ここでkeyが無いと警告が出る　理由は分かるか？
          <li key={animal}>{animal}</li>
        ))}
      </ul>
    </>
  );
};

export default Example;
