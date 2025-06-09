const List = ({ todos, setTodos}) => {
  const complete = (id) => {
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    })
      // 表示内容を新しい物に入れ替える
      // todosを回して合致するidのＴｏｄｏを探してfilterで選別　trueだけを新しい配列にいれる
      // その新しい配列を表示する useStateで変数を変更
      // 変数をへんこうしたらTodo.jsxで更新したtodosが渡り、Listにもどって表示される
        setTodos(newTodos);
  };

  return (
    <div>
      {todos.map(todo => {
        return (
          <div key={todo.id}>
            <button onClick={() => complete(todo.id)}>完了</button>
            <span>{todo.content}</span>
          </div>
        );
      })}
    </div>
  );
};

export default List;
