//useState という名前でエクスポートされているものだけを取り出す名前インポート　デフォルトインポートとは違う
import { useState } from "react";
const Example = () => {
    // 間違えてcounUpとDown内に入れていた　それだとupとdownで共有できない
    // さらに言うと、CountUpdateに入れていた、　それだと他のコンポーネントで共有できない　だから親コンポーネントに入れる
    // useStateは関数で、配列を返す これを分割代入で受け取っている　なので別に変数でも受け取ることは可能だが、公式も分割代入を推奨
  const [count, setCount] = useState(0);
  return (
    <>
      {/* 下記はオブジェクト、なぜならいったんbabelでjsに変換されてオブジェクトになるから */}
        <CountResult title="カウント" count={count} />
        <CountUpdate setCount={setCount} /> 
    </>
  );
};

// 結果の出力
// コンポの引数でオブジェクトを分割代入で受け取るなら｛｝　引数を受け取るなら[]が必要
//もし分割代入で受けないのなら｛｝無しの変数でも問題なし
const CountResult = ({title, count}) => (
  <h3>{title}: {count}</h3>
);

// 増減ボタンの実装をレンダリング
const CountUpdate = ({setCount}) => {
// アロー関数は引数一つなら()は省略可能
  const countUp = () => {
    // ((prev) => { return prev + 1 })
    setCount(prev => prev + 1);
  };

  const countDown = () => {
    setCount(prev => prev - 1);
  };

  return (
    <>
      <button onClick={countUp}>+</button>
      <button onClick={countDown}>-</button>
    </>
  );
};

export default Example;
