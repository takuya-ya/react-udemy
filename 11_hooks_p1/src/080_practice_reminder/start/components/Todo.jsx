import { useState } from "react";
import List from "./List";
import Form from "./Form";

const Todo = () => {
  return (
    <>
      <List todos={todos} deleteTodo={deleteTodo} updateTodo={updateTodo} />
      <Form createTodo={createTodo} />
    </>
  );
};
export default Todo;
