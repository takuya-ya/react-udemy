import List from "./List";
import Form from "./Form";
import { TodoProvider } from "../../start/context/TodoContext";

const Todo = () => {
  return (
    <TodoProvider>
      <List />
      <Form />
    </TodoProvider>
  );
};
export default Todo;
