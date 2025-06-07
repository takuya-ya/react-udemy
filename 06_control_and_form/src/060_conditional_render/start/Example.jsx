import { useState } from "react";

const Example = () => {
  const animals = ["Dog", "Cat", "Rat"];

  const [filterVal, setFilterVal] = useState("");

  return (
    <>
      <input
        type="text"
        value={filterVal}
        onChange={(e) => setFilterVal(e.target.value)}
      />
      <ul>
        {animals
          .filter((animal) => {
            const isMatch = animal.indexOf(filterVal) !== -1;
            console.log(animal.indexOf(filterVal));
            return isMatch;
          })
          .map((animal) => {
            // if (animal === 'Dog') {
            //   // jsxに★記載
            //   return <li key={animal}>{animal}★ </li>
            //   // jsに★記載
            //   // return <li key={animal}>{animal + "★"}</li>
            // }
            // return <li key={animal}>{animal}</li>

            // 三項演算子の場合
            // return <li key={animal}>{animal === 'Dog' ? animal + '★' : animal } </li>

            // &&の場合
            // return <li key={animal}>{animal + (animal === 'Dog' && '★') } </li>

            // Reactの場合、真偽値が表示されないのを利用
            // Dogであれば★、Dogでなければfalseになる。しかし、Reactではfalseは表示されないので、意図した表示になる
            return <li key={animal}>{animal}{animal === 'Dog' && '★'} </li>;






          })
        }
      </ul>
    </>
  );
};

export default Example;
