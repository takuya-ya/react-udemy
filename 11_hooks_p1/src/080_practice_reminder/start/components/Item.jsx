import { useState } from "react";

const Item = ({ todo, complete, updateTodo }) => {
  const [editingContent, setEditingContent] = useState(todo.content);
  const changeContent = (e) => setEditingContent(e.target.value);

  const toggleTodo = () => {
    const newTodo = {
      ...todo,
      editing: !todo.editing,
    };
    updateTodo(newTodo);
  };

  const confirmTodo = (e) => {
    e.preventDefault();
    const newTodo = {
      ...todo,
      content: editingContent,
      editing: !todo.editing,
    };
    updateTodo(newTodo);
  };

  return (
    <div>
      <button onClick={() => complete(todo.id)}>完了</button>
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
