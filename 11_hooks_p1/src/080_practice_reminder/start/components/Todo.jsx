import { useState } from "react";
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

  // 新しくstateを更新する事で、指定したidのTodoを削除する関数
  // filterメソッドを使って、todosの中からidが一致しないものだけを残す
  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => {
      // todoのidが削除したいidと一致しない場合にtrueを返す。つまり、削除したいidのTodoだけを除外する
      return todo.id !== id;
    });

    setTodos(newTodos);
  };

  const createTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  return (
    <>
      <List todos={todos} deleteTodo={deleteTodo} />
      <Form createTodo={createTodo} />
    </>
  );
};
export default Todo;
