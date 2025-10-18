import { useState } from "react";

const Form = ({ createTodo }) => {
  const [enteredTodo, setEnteredTodo] = useState("");
  const addTodo = () => {
    // 追加するTodo
    const newTodo = {
      id: Math.random().toString(),
      content: enteredTodo,
    };

    // TODOSに追加する処理
    createTodo(newTodo);
  };

  return (
    <div>
      <input
        type="text"
        value={enteredTodo}
        onChange={(e) => setEnteredTodo(e.target.value)}
      />
      <button onClick={() => addTodo()}>追加</button>
    </div>
  );
};

export default Form;
