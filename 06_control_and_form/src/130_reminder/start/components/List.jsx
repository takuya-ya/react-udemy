const List = ({ todos }) => {
  return (
    <div>
      {todos.map((todo) => {
        return (
          <div key={todo.id}>
            <button>完了</button>
            <span>{todo.content}</span>
          </div>
        );
      })}
    </div>
  );
};

export default List;
