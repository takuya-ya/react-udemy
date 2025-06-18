import { createContext, useContext, useReducer } from "react";

// 更新したいオブジェクトプロパティを入れるコンテキスト（箱）の作成
const TodoContext = createContext();
const TodoDispatchContext = createContext();

// 初期のTodoリストを定義
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

// コンテキストを提供するコンポーネント
const TodoProvider = ({ children }) => {
  // Todoの状態を管理するReducer関数を定義
  const [todos, dispatch] = useReducer(todoReducer, todosList);

  // useReducerの第二引数がtodosの初期値
  // dispatch関数を使って、アクションを発行し、状態を更新するためのReducer関数を定義
  const todoReducer = (todos, action) => {
    switch (action.type) {
      case "todo/add":
        return [...todos, action.todo];
      case "todo/delete":
        return todos.filter((todo) => {
          // todoのidが削除したいidと一致しない場合にtrueを返す。つまり、削除したいidのTodoだけを除外する
          return todo.id !== action.id;
        });
      case "todo/update":
        // 呼出し元では特定のtodo.editingが変更(ここではtodo)されている。その変更されたtodoを(現在)_todoから特定して値を更新する。その為にtodosをループ、todoのidと照合、合致したtodoを加えることで上書きされるように設定
        return todos.map((_todo) => {
          return _todo.id === action.todo.id
            ? { ..._todo, ...action.todo }
            : { ..._todo };
        });

      default:
        return todos;
    }
  };

  return (
    <TodoContext.provider value={todos}>
      <TodoDispatchContext.provider value={dispatch}>
        {children}
      </TodoDispatchContext.provider>
    </TodoContext.provider>
  );
};

// useContextフックを使って、コンテキストから値を取得するめのカスタムフックを作成
const useTodos = () => {
  useContext(TodoContext);
};

const useDispatchTodos = () => {
  useContext(TodoDispatchContext);
};

export default { TodoProvider, useTodos, useDispatchTodos,};

// メモの保存用　useContextを使用する為、以前のコンポーネントを保管↓
//
//   // 新しくstateを更新する事で、指定したidのTodoを削除する関数
//   // filterメソッドを使って、todosの中からidが一致しないものだけを残す
//   const deleteTodo = (id) => {
//     const newTodos = todos.filter((todo) => {
//       // todoのidが削除したいidと一致しない場合にtrueを返す。つまり、削除したいidのTodoだけを除外する
//       return todo.id !== id;
//     });

//     setTodos(newTodos);
//   };

//   const createTodo = (todo) => {
//     setTodos([...todos, todo]);
//   };

//   // 特定のTodoを更新する関数
//   const updateTodo = (todo) => {
//     const newTodos =
//       // 呼出し元では特定のtodo.editingが変更(ここではtodo)されている。その変更されたtodoを(現在)_todoから特定して値を更新する。その為にtodosをループ、todoのidと照合、合致したtodoを加えることで上書きされるように設定
//       todos.map((_todo) => {
//         return _todo.id === todo.id ? { ..._todo, ...todo } : { ..._todo };
//       });
//     setTodos(newTodos);
//   };
