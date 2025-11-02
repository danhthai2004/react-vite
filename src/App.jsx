import './components/todo/todo.css';
import TodoAdd from './components/todo/TodoAdd.jsx';
import TodoList from './components/todo/TodoList.jsx';
import reactLogo from './assets/react.svg';
import { useState } from 'react';
// arrow function syntax
const App = () => {

  const ten = "Thai";
  const tuoi = 22;
  const data = {
    address: "Da Nang",
    country: "Viet Nam"
  }

  const [Todos, setTodos] = useState([
    { id: 1, name: "Learn ReactJS" },
    { id: 2, name: "Learn Spring Boot" }
  ]);

  const addNewTodo = (name) => {
    alert(`New Todo Added : ${name}`);
  }

  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoAdd
        addNewTodo={addNewTodo} //không cần dấu () nếu không muốn gọi hàm ngay lập tức
      />
      <TodoList
        name={ten}
        age={tuoi}
        data={data}
        Todos={Todos}
      />
      <div className='todo-image'>
        <img className='logo' src={reactLogo} />
      </div>
    </div>
  )
}

export default App
