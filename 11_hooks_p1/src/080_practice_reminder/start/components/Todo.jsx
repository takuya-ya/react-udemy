import { useState } from "react";
import List from "./List";
import Form from "./Form";

const Todo = () => {
  const todosList = [
    {
      id: 1,
      content: "店予約する",
      editing: false,
    },
    {
      id: 2,
      content: "卵買う",
      editing: false,
    },
    {
      id: 3,
      content: "郵便出す",
      editing: false,
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

  const updateTodo = (todo) => {
    const newTodos = todos.map((_todo) =>
      _todo.id === todo.id ? { ..._todo, ...todo } : { ..._todo }
    );
    setTodos(newTodos);
  };

  return (
    <>
      <List todos={todos} deleteTodo={deleteTodo} updateTodo={updateTodo} />
      <Form createTodo={createTodo} />
    </>
  );
};
export default Todo;
