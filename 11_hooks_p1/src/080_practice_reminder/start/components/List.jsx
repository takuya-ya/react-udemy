import useTodos from '../context/TodoContext'
import Item from "./Item";

const List = () => {
  const todos = useTodos();
  return (
    <div>
      {todos.map((todo) => (
          // todo 属性の指定
          <Item key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default List;
