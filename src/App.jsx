import './components/todo/todo.css';
import TodoAdd from './components/todo/TodoAdd.jsx';
import TodoList from './components/todo/TodoList.jsx';
import reactLogo from './assets/react.svg';
import { useState } from 'react';
// arrow function syntax
const App = () => {

  const [Todos, setTodos] = useState([

  ]);

  const addNewTodo = (name) => {
    const newTodo = {
      id: randomIntFromInterval(1, 1000000),
      name: name
    };
    setTodos([...Todos, newTodo]); //dùng spread operator để giữ lại các phần tử cũ trong mảng, sau đó thêm phần tử mới vào
  }

  const randomIntFromInterval = (min, max) => { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoAdd
        addNewTodo={addNewTodo} //không cần dấu () nếu không muốn gọi hàm ngay lập tức
      />

      {Todos.length > 0 ? (
        <TodoList
          Todos={Todos}
        />
      ) : (
        <div className='todo-image'>
          <img className='logo' src={reactLogo} />
        </div>
      )}

      {/* {Todos.length > 0 &&
        <TodoList
          Todos={Todos}
        />
      }

      {Todos.length === 0 &&
        <div className='todo-image'>
          <img className='logo' src={reactLogo} />
        </div>
      } */}
    </div>
  )
}

export default App
