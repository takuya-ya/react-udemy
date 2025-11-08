import { useState } from "react";

const Item = ({ todo, complete }) => {
  const [editingContent, setEditingContent] = useState(todo.content);
  const changeContent = (e) => {
    setEditingContent(e.target.value);
  };

  return (
    <div>
      <button onClick={() => complete(todo.id)}>完了</button>
      <span>
        {todo.editing ? (
          <input type="text" value={editingContent} onChange={changeContent} />
        ) : (
          todo.content
        )}
      </span>
    </div>
  );
};

export default Item;
