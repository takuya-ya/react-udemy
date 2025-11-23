import { useState } from "react";
import { useDispatchTodos } from "../context/TodoContext";

const Item = ({ todo }) => {
  const [editingContent, setEditingContent] = useState(todo.content);
  const changeContent = (e) => setEditingContent(e.target.value);

  const dispatch = useDispatchTodos();

  const toggleTodo = () => {
    const newTodo = {
      ...todo,
      editing: !todo.editing,
    };
    dispatch({ type: "todo/update", todo: newTodo });
  };

  const confirmTodo = (e) => {
    e.preventDefault();
    const newTodo = {
      ...todo,
      content: editingContent,
      editing: !todo.editing,
    };
    dispatch({ type: "todo/update", todo: newTodo });
  };

  const complete = (todo) => {
    dispatch({ type: "todo/delete", todo: todo });
  };

  return (
    <div>
      <button onClick={() => complete(todo)}>完了</button>
      <form onSubmit={confirmTodo}>
        {todo.editing ? (
          <input type="text" value={editingContent} onChange={changeContent} />
        ) : (
          <span onDoubleClick={toggleTodo}>{todo.content}</span>
        )}
      </form>
    </div>
  );
};
export default Item;
