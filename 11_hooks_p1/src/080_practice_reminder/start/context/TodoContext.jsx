import { useContext, createContext, useReducer } from "react";

const ToDoContext = createContext();
const TodoDispatchContext = createContext();

export const useTodos = () => useContext(ToDoContext);
export const useDispatchTodos = () => useContext(TodoDispatchContext);

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

const todoReducer = (todos, action) => {
  switch (action.type) {
    case "todo/add":
      return [...todos, action.todo];
    case "todo/delete":
      return todos.filter((todo) => {
        return todo.id !== action.todo.id;
      });
    case "todo/update":
      return todos.map((_todo) => {
        return _todo.id === action.todo.id
          ? { ..._todo, ...action.todo }
          : { ..._todo };
      });
    default:
      return todos;
  }
};

const TodoProvider = ({ children }) => {
  const [todos, dispatch] = useReducer(todoReducer, todosList);

  return (
    <ToDoContext.Provider value={todos}>
      <TodoDispatchContext.Provider value={dispatch}>
        {children}
      </TodoDispatchContext.Provider>
    </ToDoContext.Provider>
  );
};

export default TodoProvider;
