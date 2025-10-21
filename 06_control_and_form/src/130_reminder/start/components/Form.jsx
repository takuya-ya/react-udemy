import { useState } from "react";

const Form = ({ createTodo }) => {
  const [enteredTodo, setEnteredTodo] = useState("");
  const addTodo = (e) => {
    // formのデフォルト動作である画面リロードを防止、ページ遷移を防止
    e.preventDefault();
    // 追加するTodo
    const newTodo = {
      id: Math.random().toString(),
      content: enteredTodo,
    };

    // TODOSに追加する処理
    createTodo(newTodo);
    // 入力欄をクリア
    setEnteredTodo("");
  };

  return (
    <div>
      <form onSubmit={addTodo}>
        <input
          type="text"
          value={enteredTodo}
          onChange={(e) => setEnteredTodo(e.target.value)}
        />
        <button>追加</button>
      </form>
    </div>
  );
};

export default Form;
