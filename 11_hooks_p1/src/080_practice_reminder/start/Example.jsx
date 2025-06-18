import Todo from "./components/Todo";

const Example = () => {
  return (
    <>
      <ul>
        <li>ReducerとContextを使ってTodoをグローバルなステートにしましょう</li>
      </ul>
      <h2>Reminder</h2>
      <Todo />
    </>
  );
};

export default Example;
