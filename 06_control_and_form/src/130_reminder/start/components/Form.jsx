import {useState} from 'react';

const Form = () => {
  const [enteredTodo, setEnteredTodo] = useState('');
  return (
    <div>
      <input type="text" value={enteredTodo} onChange={(e) => setEnteredTodo(e.target.value)}/>
      <button>追加</button>
      <span>{enteredTodo}</span>
    </div>
  )
}

export default Form;
