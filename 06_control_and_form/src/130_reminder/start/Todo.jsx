<<<<<<< Updated upstream:06_control_and_form/src/130_reminder/start/Todo.jsx
=======
import { useState } from 'react';
import List from "./List";
import Form from "./Form";

>>>>>>> Stashed changes:06_control_and_form/src/130_reminder/start/components/Todo.jsx
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
<<<<<<< Updated upstream:06_control_and_form/src/130_reminder/start/Todo.jsx
=======

const [todos, setTodos] = useState(todosList);

  return (
    <>
      <List todos={todos} setTodos={setTodos}/>
      <Form />
    </>
  );
>>>>>>> Stashed changes:06_control_and_form/src/130_reminder/start/components/Todo.jsx
};
