import { useState } from 'react';
import List from "./List";
import Form from "./Form";

const Todo = () => {
  const todosList = [
    {
      id: 1,
      content: "店予約する",
    },
    {
      id: 2,
      content: "卵買う",
    },
    {
      id: 3,
      content: "郵便出す",
    },
  ];

const [todos, setTodos] = useState(todosList);

const deletedTodo = (id) => {
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    })
      // 表示内容を新しい物に入れ替える
      // todosを回して合致するidのＴｏｄｏを探してfilterで選別　trueだけを新しい配列にいれる
      // その新しい配列を表示する useStateで変数を変更
      // 変数をへんこうしたらTodo.jsxで更新したtodosが渡り、Listにもどって表示される
        setTodos(newTodos);
}

  return (
    <>
      <List todos={todos} deletedTodo={deletedTodo} />
      <Form />
    </>
  );
};

export default Todo;
