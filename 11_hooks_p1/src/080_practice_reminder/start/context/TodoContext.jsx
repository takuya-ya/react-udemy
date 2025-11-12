import { createContext, useReducer, useContext } from "react";

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

  const [todos, dispatch] = useReducer(todoReducer, todosList);

  return (
    <TodoContext.Provider value={todos}>
      <TodoDispatchContext.Provider value={dispatch}>
        {children}
      </TodoDispatchContext.Provider>
    </TodoContext.Provider>
  );
};

const useTodos = () => {
  return useContext(TodoContext);
};

const useDispatchTodos = () => {
  return useContext(TodoDispatchContext);
};

export { useTodos, useDispatchTodos, TodoProvider };
