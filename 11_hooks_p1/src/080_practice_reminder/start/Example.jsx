import Todo from "./components/Todo";

const Example = () => {
  return (
    <>
      <h3>練習問題</h3>
      <ul>
        <li>
          タイトルをダブルクリックするとタイトルを変更出来るようにしましょう
        </li>
        <li>ReducerとContextを使ってTodoをグローバルなステートにしましょう</li>
      </ul>
      <h2>Reminder</h2>
      <Todo />
    </>
  );
};

export default Example;
