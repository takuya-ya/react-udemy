import { useReducer } from "react";

const CALC_OPTIONS = ["add", "minus", "divide", "multiply"];

// ステートを更新するだけのシンプルな reducer
const reducer = (state, { name, value }) => {
  return { ...state, [name]: value };
};

// 実際の計算ロジック
const calculateResult = (a, b, operator) => {
  const numA = Number(a);
  const numB = Number(b);

  switch (operator) {
    case "add":
      return numA + numB;
    case "minus":
      return numA - numB;
    case "multiply":
      return numA * numB;
    case "divide":
      return numB !== 0 ? numA / numB : "Error";
    default:
      return 0;
  }
};

const Example = () => {
  // 管理するステートは入力値と演算子のみ
  const initState = {
    a: 1,
    b: 2,
    operator: "add",
  };

  const [state, dispatch] = useReducer(reducer, initState);

  // ★ ここがポイント: result は state から外し、レンダリング時に計算する
  const result = calculateResult(state.a, state.b, state.operator);

  const numChangeHandler = (e) => {
    // a または b の変更をディスパッチ
    dispatch({ name: e.target.name, value: e.target.value });
  };

  const operatorChangeHandler = (e) => {
    // operator の変更をディスパッチ
    dispatch({ name: "operator", value: e.target.value });
  };

  return (
    <>
      <div>
        a:
        <input
          type="number"
          name="a"
          value={state.a}
          onChange={numChangeHandler}
        />
      </div>
      <div>
        b:
        <input
          type="number"
          name="b"
          value={state.b}
          onChange={numChangeHandler}
        />
      </div>
      <select value={state.operator} onChange={operatorChangeHandler}>
        {/* ... options ... */}
        {CALC_OPTIONS.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
      {/* ★ result は計算済みの定数 result を表示する */}
      <h1>結果：{result}</h1>
    </>
  );
};

export default Example;
