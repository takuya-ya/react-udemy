import { useState } from "react";

const Item = ({todo}) => {
  const [editingContent, setEditingContent] = useState(todo.content);
  const dispatch = useDispatchTodos();
  const changeContent = (e) => {
    setEditingContent(e.target.value);
  };

  const toggleEditMode = () => {
    const newTodo = { ...todo, editing: !todo.editing };
    dispatch({ type: 'todo/update', todo: newTodo});
  };

  const confirmContent = (e) => {
    e.preventDefault();
    // ...todoがなぜ必要か。Listで表示している個別のtodoだが、これがないと新しいtodoのプロパティがeditingとcontentのみでidが消えてしまうから。
    const newTodo = { ...todo, editing: !todo.editing , content:editingContent}
    updateTodo(newTodo);
  }

  const complete = (todo) => {
        dispatch({ type: 'todo/delete', todo: todo});
    }

  return (
    <div key={todo.id}>
      <button onClick={() => complete(todo)}>完了</button>
      {/* styleが{{}}な理由：{}でjsxの中にjsを組み込む為。次の{}でオブジェクトの設定である事を指定（オブジェクトリテラル（＝style指定の中身）） */}
      <form onSubmit={confirmContent} style={{display:'inline'}}>
        {todo.editing ? (
          <input type="text" value={editingContent} onChange={changeContent} />
        ) : (
          <span onDoubleClick={toggleEditMode}>{todo.content}</span>
        )}
      </form>
    </div>
  );
};

export default Item;
