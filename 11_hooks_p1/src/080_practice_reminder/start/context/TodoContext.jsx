import { createContext, useReducer, useReducer } from "react";
import Todo from "../components/Todo";

const TodoContext = createContext();
const TodoDispatchContext = createContext();

const TodoProvider = ({ children }) => {
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
          // todoのidが削除したいidと一致しない場合にtrueを返す。つまり、削除したいidのTodoだけを除外する
          return todo.id !== id;
        });
      case "todo/update":
        return todos.map((_todo) => {
          return _todo.id === todo.id ? { ..._todo, ...todo } : { ..._todo };
        });

      default:
        return todos;
    }
  };

  const [todos, dispatch] = useReducer(reducer, todosList);

  return (
    <TodoContext.Provider value={todos}>
      <TodoDispatchContext.Provider value={dispatch}>
        {children}
      </TodoDispatchContext.Provider>
    </TodoContext.Provider>
  );
};

const useTodos = useContext(TodoContext);
const useDispatchTodos = useContext(TodoDispatchContext);

export { useTodos, useDispatchTodos, TodoProvider };
