import "./Example.css";
import { useState } from "react";

const Example = () => {
  // 表示する内容作成
  const inputFact = () => ({
    key: Math.floor(Math.random() * 1e3),
    value: <input />,
  });

  // stateにセット
  const [inputs, setInputs] = useState([inputFact(), inputFact(), inputFact()]);

  // 先頭に追加するボタンに対応したstateの実行
  const unshiftInput = () => {
    setInputs((prev) => [inputFact(), ...prev]);
  };

  return (
    <>
      <button onClick={unshiftInput}>先頭に追加</button>
      <div className="flex">
        <div>
          <strong>{`key={ユニークキー}`}</strong>
          <ul>
            {inputs.map((input) => (
              <li key={input.key}>
                {input.key}: {input.value}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <strong>{`key={index}`}</strong>
          {/* 第2引数：その要素のインデックス番号が自動で入る */}
          <ul>
            {inputs.map((input, index) => (
              <li key={index}>
                {input.key}: {input.value}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Example;
