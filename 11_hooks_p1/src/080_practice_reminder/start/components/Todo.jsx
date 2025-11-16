import List from "./List";
import Form from "./Form";
import { TodoProvider } from "../../end/context/TodoContext";

const Todo = () => {
  return (
    <TodoProvider>
      <List />
      <Form />
    </TodoProvider>
  );
};
export default Todo;
