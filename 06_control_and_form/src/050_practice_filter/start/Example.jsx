import Profile from "./components/Profile";
import { useState } from "react";

const persons = [
  {
    name: "Geo",
    age: 18,
    hobbies: ["sports", "music"],
  },
  {
    name: "Tom",
    age: 25,
    hobbies: ["movie", "music"],
  },
  {
    name: "Lisa",
    age: 21,
    hobbies: ["sports", "travel", "game"],
  },
];

const Example = () => {
  const [filterVal, setFilterVal] = useState('');
  // person渡されるはず、勝手に配列の値が入る？つまりfilterの引数は配列？配列なら配列しか入らない？でないと配列かどうか判別がひつようになるよね
  // fileter内のコールバック関数の引数は選択できる　今回はpersons配列の個別の値であるpersonのみ
  const isMatch = (person) => {
    // ;ってつけるっけ？タグにつけないだけ？
    return person.name.indexOf(filterVal) !== -1;
  };

  return (
    <>
    {/* onChange=の後にjsをきにゅうする場合、JSX内なので｛｝が必要。文字列を渡すなら不要。 */}
      <input type="text" value={filterVal} onChange={(e) => {setFilterVal(e.target.value)}}/>
      <ul>
        {persons
        // filterは配列に対してしか使えない。
        // ×　即実行している
        // .filter( isMatch(person) )
        .filter( isMatch )
        .map((person) => (
          <li key={person.name}>
            <Profile {...person} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Example;
