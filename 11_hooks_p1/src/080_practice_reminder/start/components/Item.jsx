import { useState } from "react";
import { useDispatchTodos } from "../context/TodoContext";

const Item = ({ todo }) => {
  const [editingContent, setEditingContent] = useState(todo.content);

  const changeContent = (e) => {
    return setEditingContent(e.target.value);
  };

  const toggleEditMode = () => {
    const newTodo = { ...todo, editing: !todo.editing };
    updateTodo(newTodo);
  };

  const confirmContent = (e) => {
    e.preventDefault();
    const newTodo = { ...todo, content: editingContent, editing: false };
    updateTodo(newTodo);
  };

  const complete = ({ todo }) => {
    useDispatchTodos({ type: "todo/delete", todo });

    return (
      <div>
        <button onClick={() => complete(todo)}>完了</button>
        <form onSubmit={confirmContent} style={{ display: "inline" }}>
          {todo.editing ? (
            <input
              type="text"
              value={editingContent}
              onChange={changeContent}
            />
          ) : (
            <span onDoubleClick={toggleEditMode}>{todo.content}</span>
          )}
        </form>
      </div>
    );
  };
};

export default Item;
