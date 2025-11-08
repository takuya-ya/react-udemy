import { useState } from "react";

const Item = ({ todo, complete, updateTodo }) => {
  const [editingContent, setEditingContent] = useState(todo.content);
  const changeContent = (e) => {
    setEditingContent(e.target.value);
  };

  const toggleEditingMode = () => {
    const newTodo = { ...todo, editing: !todo.editing };
    updateTodo(newTodo);
  };

  const confirmContent = (e) => {
    e.preventDefault();
    const newTodo = {
      ...todo,
      editing: !todo.editing,
      content: editingContent,
    };
    updateTodo(newTodo);
  };

  return (
    <div>
      <button onClick={() => complete(todo.id)}>完了</button>
      <form onSubmit={confirmContent} style={{ display: "inline" }}>
        {todo.editing ? (
          <input type="text" value={editingContent} onChange={changeContent} />
        ) : (
          <span onDoubleClick={toggleEditingMode}> {todo.content} </span>
        )}
      </form>
    </div>
  );
};

export default Item;
